n.d(t, { Ay: () => f, Vp: () => m, i4: () => _ }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(90575),
    r = n(961350),
    o = n(927813),
    c = n(403362),
    d = n(175203),
    u = n(806931),
    h = n(29243);
let m = 112,
    A = (16 / 9) * 112 + 8,
    g = 10 * o.A.Millis.SECOND;
function p(e) {
    let t = r.default.getId();
    return e.type === u.lp.USER && e.user.id === t && e.voiceState?.selfVideo;
}
function _(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { tileWidth: A, tileMinWidth: 124, tileMargin: 8, limit: 12, cropSelfVideo: !1 },
        { tileWidth: i, tileMinWidth: r, tileMargin: o, limit: d, cropSelfVideo: h, version: m } = n,
        [_, f] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            f(Date.now());
        }, g);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let E = l.useRef({}),
        { visibleParticipants: x, participantTileWidth: C } = l.useMemo(() => {
            let n = Date.now(),
                l = (0, s.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case u.lp.ACTIVITY:
                                return `\x01${e.sortKey}`;
                            case u.lp.HIDDEN_STREAM:
                            case u.lp.STREAM:
                                return `\x02${(0, a.A)(e.userNick, e.user)}`;
                            case u.lp.USER:
                                var n;
                                let i,
                                    l = "\x06";
                                return (
                                    e.speaking
                                        ? (l = "\x03")
                                        : t - e.lastSpoke < g
                                          ? (l = "\x04")
                                          : e.voiceState?.selfVideo && (l = "\x05"),
                                    `${l}${((n = e.lastSpoke), (i = String(864e13).length), String(864e13 - n).padStart(i, "0"))}${(0, a.A)(e.userNick, e.user)}`
                                );
                        }
                    })(e, n),
                ),
                [m, A] = (0, s.partition)(l, u.Xw),
                _ = m.findIndex(p),
                f = null;
            -1 !== _ && ((f = m[_]), m.splice(_, 1));
            let x = null == f || h ? e : e - i - o,
                C = Math.max(0, Math.min(Math.floor((x - o) / (r + o)), d, t.length)),
                S = Math.min((x - o) / C - o, i),
                I = Math.max(0, C - A.length),
                T = A.slice(0, C),
                N = m.slice(0, I),
                v = Array(I);
            if (I > 0) {
                let e = [];
                for (let t of N) {
                    let n = E.current[t.id];
                    null != n && n < I ? (v[n] = t) : e.push(t);
                }
                for (let t = 0; t < v.length; t++) {
                    if (null != v[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    v[t] = n;
                }
            }
            let y = v.filter(c.Vq);
            E.current = (0, s.keyBy)((0, s.range)(y.length), (e) => y[e].id);
            let b = [...T, ...y];
            return (
                null != f && (h && b.length >= C ? (b[Math.max(0, b.length - 1)] = f) : b.push(f)),
                { visibleParticipants: b, participantTileWidth: S }
            );
        }, [e, t, _, m, h, d, o, r, i]);
    return { visibleParticipants: x, participantTileWidth: C };
}
function f(e) {
    let {
        participants: t,
        participantTileWidth: n,
        selectedParticipantId: l,
        onDoubleClick: s,
        onContextMenu: a,
        onClick: r,
        channel: o,
        inCall: c,
        popoutType: u,
        paused: m = !1,
    } = e;
    return (0, i.jsx)("div", {
        className: h.zr,
        children: t.map((e) => {
            if (null == e) return null;
            let t = p(e);
            return (0, i.jsx)(
                "div",
                {
                    className: h.eP,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, i.jsx)(d.Ay, {
                        participant: e,
                        selected: l === e.id,
                        channel: o,
                        className: h.Vs,
                        fit: d.Yl.COVER,
                        onClick: r,
                        onDoubleClick: s,
                        onContextMenu: a,
                        width: t ? A : n,
                        inCall: c,
                        paused: m,
                        popoutType: u,
                    }),
                },
                e.id,
            );
        }),
    });
}
