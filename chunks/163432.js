n.d(t, {
    Ay: () => A,
    Vp: () => p,
    i4: () => h,
}),
    n(896048),
    n(321073);
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n(90575),
    s = n(961350),
    o = n(927813),
    c = n(403362),
    u = n(175203),
    d = n(806931),
    f = n(107826);
let p = 112,
    b = (16 / 9) * 112 + 8,
    g = 10 * o.A.Millis.SECOND;
function m(e) {
    var t;
    let n = s.default.getId();
    return e.type === d.lp.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo);
}
function h(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      tileWidth: b,
                      tileMinWidth: 124,
                      tileMargin: 8,
                      limit: 12,
                      cropSelfVideo: !1,
                  },
        { tileWidth: l, tileMinWidth: s, tileMargin: o, limit: u, cropSelfVideo: f, version: p } = n,
        [h, A] = r.useState(Date.now());
    r.useEffect(() => {
        let e = setTimeout(() => {
            A(Date.now());
        }, g);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let y = r.useRef({}),
        { visibleParticipants: _, participantTileWidth: E } = r.useMemo(() => {
            let n = Date.now(),
                r = (0, i.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case d.lp.ACTIVITY:
                                return "\x01".concat(e.sortKey);
                            case d.lp.HIDDEN_STREAM:
                            case d.lp.STREAM:
                                return "\x02".concat((0, a.A)(e.userNick, e.user));
                            case d.lp.USER:
                                var n, l;
                                let r,
                                    i = "\x06";
                                return (
                                    e.speaking
                                        ? (i = "\x03")
                                        : t - e.lastSpoke < g
                                          ? (i = "\x04")
                                          : (null == (n = e.voiceState) ? void 0 : n.selfVideo) && (i = "\x05"),
                                    ""
                                        .concat(i)
                                        .concat(
                                            ((l = e.lastSpoke),
                                            (r = String(8640000000000000).length),
                                            String(8640000000000000 - l).padStart(r, "0")),
                                        )
                                        .concat((0, a.A)(e.userNick, e.user))
                                );
                        }
                    })(e, n),
                ),
                [p, b] = (0, i.partition)(r, d.Xw),
                h = p.findIndex(m),
                A = null;
            -1 !== h && ((A = p[h]), p.splice(h, 1));
            let _ = null == A || f ? e : e - l - o,
                E = Math.max(0, Math.min(Math.floor((_ - o) / (s + o)), u, t.length)),
                v = Math.min((_ - o) / E - o, l),
                O = Math.max(0, E - b.length),
                x = b.slice(0, E),
                S = p.slice(0, O),
                N = Array(O);
            if (O > 0) {
                let e = [];
                for (let t of S) {
                    let n = y.current[t.id];
                    null != n && n < O ? (N[n] = t) : e.push(t);
                }
                for (let t = 0; t < N.length; t++) {
                    if (null != N[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    N[t] = n;
                }
            }
            let C = N.filter(c.Vq);
            y.current = (0, i.keyBy)((0, i.range)(C.length), (e) => C[e].id);
            let j = [...x, ...C];
            return (
                null != A && (f && j.length >= E ? (j[Math.max(0, j.length - 1)] = A) : j.push(A)),
                {
                    visibleParticipants: j,
                    participantTileWidth: v,
                }
            );
        }, [e, t, h, p, f, u, o, s, l]);
    return {
        visibleParticipants: _,
        participantTileWidth: E,
    };
}
function A(e) {
    let {
        participants: t,
        participantTileWidth: n,
        selectedParticipantId: r,
        onDoubleClick: i,
        onContextMenu: a,
        onClick: s,
        channel: o,
        inCall: c,
        popoutType: d,
        paused: p = !1,
    } = e;
    return (0, l.jsx)("div", {
        className: f.zr,
        children: t.map((e) => {
            if (null == e) return null;
            let t = m(e);
            return (0, l.jsx)(
                "div",
                {
                    className: f.eP,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, l.jsx)(u.Ay, {
                        participant: e,
                        selected: r === e.id,
                        channel: o,
                        className: f.Vs,
                        fit: u.Yl.COVER,
                        onClick: s,
                        onDoubleClick: i,
                        onContextMenu: a,
                        width: t ? b : n,
                        inCall: c,
                        paused: p,
                        popoutType: d,
                    }),
                },
                e.id,
            );
        }),
    });
}
