n.d(t, { Ay: () => f, Vp: () => m, i4: () => p }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n(90575),
    r = n(961350),
    o = n(927813),
    c = n(403362),
    d = n(175203),
    u = n(806931),
    h = n(264395);
let m = 112,
    A = (16 / 9) * 112 + 8,
    g = 10 * o.A.Millis.SECOND;
function _(e) {
    let t = r.default.getId();
    return e.type === u.lp.USER && e.user.id === t && e.voiceState?.selfVideo;
}
function p(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { tileWidth: A, tileMinWidth: 124, tileMargin: 8, limit: 12, cropSelfVideo: !1 },
        { tileWidth: i, tileMinWidth: r, tileMargin: o, limit: d, cropSelfVideo: h, version: m } = n,
        [p, f] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            f(Date.now());
        }, g);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let E = l.useRef({}),
        { visibleParticipants: C, participantTileWidth: x } = l.useMemo(() => {
            let n = Date.now(),
                l = (0, a.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case u.lp.ACTIVITY:
                                return `\x01${e.sortKey}`;
                            case u.lp.HIDDEN_STREAM:
                            case u.lp.STREAM:
                                return `\x02${(0, s.A)(e.userNick, e.user)}`;
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
                                    `${l}${((n = e.lastSpoke), (i = String(864e13).length), String(864e13 - n).padStart(i, "0"))}${(0, s.A)(e.userNick, e.user)}`
                                );
                        }
                    })(e, n),
                ),
                [m, A] = (0, a.partition)(l, u.Xw),
                p = m.findIndex(_),
                f = null;
            -1 !== p && ((f = m[p]), m.splice(p, 1));
            let C = null == f || h ? e : e - i - o,
                x = Math.max(0, Math.min(Math.floor((C - o) / (r + o)), d, t.length)),
                S = Math.min((C - o) / x - o, i),
                I = Math.max(0, x - A.length),
                T = A.slice(0, x),
                v = m.slice(0, I),
                N = Array(I);
            if (I > 0) {
                let e = [];
                for (let t of v) {
                    let n = E.current[t.id];
                    null != n && n < I ? (N[n] = t) : e.push(t);
                }
                for (let t = 0; t < N.length; t++) {
                    if (null != N[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    N[t] = n;
                }
            }
            let y = N.filter(c.Vq);
            E.current = (0, a.keyBy)((0, a.range)(y.length), (e) => y[e].id);
            let b = [...T, ...y];
            return (
                null != f && (h && b.length >= x ? (b[Math.max(0, b.length - 1)] = f) : b.push(f)),
                { visibleParticipants: b, participantTileWidth: S }
            );
        }, [e, t, p, m, h, d, o, r, i]);
    return { visibleParticipants: C, participantTileWidth: x };
}
function f(e) {
    let {
        participants: t,
        participantTileWidth: n,
        selectedParticipantId: l,
        onDoubleClick: a,
        onContextMenu: s,
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
            let t = _(e);
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
                        onDoubleClick: a,
                        onContextMenu: s,
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
