l.d(t, { Ay: () => k, Vp: () => d, i4: () => x }), l(321073);
var i = l(627968),
    n = l(64700),
    r = l(735438),
    a = l(90575),
    s = l(280450),
    u = l(927813),
    o = l(403362),
    c = l(175203),
    p = l(806931),
    h = l(264395);
let d = 112,
    f = (16 / 9) * 112 + 8,
    S = 10 * u.A.Millis.SECOND;
function g(e) {
    let t = s.default.getId();
    return e.type === p.lp.USER && e.user.id === t && e.voiceState?.selfVideo;
}
function x(e, t) {
    let l =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { tileWidth: f, tileMinWidth: 124, tileMargin: 8, limit: 12, cropSelfVideo: !1 },
        { tileWidth: i, tileMinWidth: s, tileMargin: u, limit: c, cropSelfVideo: h, version: d } = l,
        [x, k] = n.useState(Date.now());
    n.useEffect(() => {
        let e = setTimeout(() => {
            k(Date.now());
        }, S);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let m = n.useRef({}),
        { visibleParticipants: M, participantTileWidth: y } = n.useMemo(() => {
            let l = Date.now(),
                n = (0, r.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case p.lp.ACTIVITY:
                                return `\x01${e.sortKey}`;
                            case p.lp.HIDDEN_STREAM:
                            case p.lp.STREAM:
                                return `\x02${(0, a.A)(e.userNick, e.user)}`;
                            case p.lp.USER:
                                var l;
                                let i,
                                    n = "\x06";
                                return (
                                    e.speaking
                                        ? (n = "\x03")
                                        : t - e.lastSpoke < S
                                          ? (n = "\x04")
                                          : e.voiceState?.selfVideo && (n = "\x05"),
                                    `${n}${((l = e.lastSpoke), (i = String(864e13).length), String(864e13 - l).padStart(i, "0"))}${(0, a.A)(e.userNick, e.user)}`
                                );
                        }
                    })(e, l),
                ),
                [d, f] = (0, r.partition)(n, p.Xw),
                x = d.findIndex(g),
                k = null;
            -1 !== x && ((k = d[x]), d.splice(x, 1));
            let M = null == k || h ? e : e - i - u,
                y = Math.max(0, Math.min(Math.floor((M - u) / (s + u)), c, t.length)),
                A = Math.min((M - u) / y - u, i),
                v = Math.max(0, y - f.length),
                C = f.slice(0, y),
                w = d.slice(0, v),
                D = Array(v);
            if (v > 0) {
                let e = [];
                for (let t of w) {
                    let l = m.current[t.id];
                    null != l && l < v ? (D[l] = t) : e.push(t);
                }
                for (let t = 0; t < D.length; t++) {
                    if (null != D[t]) continue;
                    let l = e.shift();
                    if (null == l) break;
                    D[t] = l;
                }
            }
            let E = D.filter(o.Vq);
            m.current = (0, r.keyBy)((0, r.range)(E.length), (e) => E[e].id);
            let N = [...C, ...E];
            return (
                null != k && (h && N.length >= y ? (N[Math.max(0, N.length - 1)] = k) : N.push(k)),
                { visibleParticipants: N, participantTileWidth: A }
            );
        }, [e, t, x, d, h, c, u, s, i]);
    return { visibleParticipants: M, participantTileWidth: y };
}
function k(e) {
    let {
        participants: t,
        participantTileWidth: l,
        selectedParticipantId: n,
        onDoubleClick: r,
        onContextMenu: a,
        onClick: s,
        channel: u,
        inCall: o,
        popoutType: p,
        paused: d = !1,
    } = e;
    return (0, i.jsx)("div", {
        className: h.zr,
        children: t.map((e) => {
            if (null == e) return null;
            let t = g(e);
            return (0, i.jsx)(
                "div",
                {
                    className: h.eP,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, i.jsx)(c.Ay, {
                        participant: e,
                        selected: n === e.id,
                        channel: u,
                        className: h.Vs,
                        fit: c.Yl.COVER_LANDSCAPE,
                        onClick: s,
                        onDoubleClick: r,
                        onContextMenu: a,
                        width: t ? f : l,
                        inCall: o,
                        paused: d,
                        popoutType: p,
                    }),
                },
                e.id,
            );
        }),
    });
}
