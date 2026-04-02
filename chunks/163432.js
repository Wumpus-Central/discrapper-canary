n.d(t, { Ay: () => _, Vp: () => m, i4: () => f }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(90575),
    r = n(961350),
    o = n(927813),
    c = n(403362),
    d = n(175203),
    u = n(806931),
    h = n(162284);
let m = 112,
    A = (16 / 9) * 112 + 8,
    g = 10 * o.A.Millis.SECOND;
function p(e) {
    let t = r.default.getId();
    return e.type === u.lp.USER && e.user.id === t && e.voiceState?.selfVideo;
}
function f(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { tileWidth: A, tileMinWidth: 124, tileMargin: 8, limit: 12, cropSelfVideo: !1 },
        { tileWidth: i, tileMinWidth: r, tileMargin: o, limit: d, cropSelfVideo: h, version: m } = n,
        [f, _] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            _(Date.now());
        }, g);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let E = l.useRef({}),
        { visibleParticipants: C, participantTileWidth: x } = l.useMemo(() => {
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
                f = m.findIndex(p),
                _ = null;
            -1 !== f && ((_ = m[f]), m.splice(f, 1));
            let C = null == _ || h ? e : e - i - o,
                x = Math.max(0, Math.min(Math.floor((C - o) / (r + o)), d, t.length)),
                S = Math.min((C - o) / x - o, i),
                I = Math.max(0, x - A.length),
                T = A.slice(0, x),
                N = m.slice(0, I),
                b = Array(I);
            if (I > 0) {
                let e = [];
                for (let t of N) {
                    let n = E.current[t.id];
                    null != n && n < I ? (b[n] = t) : e.push(t);
                }
                for (let t = 0; t < b.length; t++) {
                    if (null != b[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    b[t] = n;
                }
            }
            let v = b.filter(c.Vq);
            E.current = (0, s.keyBy)((0, s.range)(v.length), (e) => v[e].id);
            let y = [...T, ...v];
            return (
                null != _ && (h && y.length >= x ? (y[Math.max(0, y.length - 1)] = _) : y.push(_)),
                { visibleParticipants: y, participantTileWidth: S }
            );
        }, [e, t, f, m, h, d, o, r, i]);
    return { visibleParticipants: C, participantTileWidth: x };
}
function _(e) {
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
