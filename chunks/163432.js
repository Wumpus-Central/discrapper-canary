l(321073);
var i = l(477900),
    n = l(582128),
    r = l(435558),
    a = l(90575),
    s = l(46653),
    u = l(927813),
    o = l(403362),
    c = l(175203),
    h = l(806931),
    p = l(926520);
let d = (16 / 9) * 112 + 8,
    f = 10 * u.A.Millis.SECOND;
function S(e) {
    let t = s.default.getId();
    return e.type === h.lp.USER && e.user.id === t && e.voiceState?.selfVideo;
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let {
                participants: t,
                participantTileWidth: l,
                selectedParticipantId: n,
                onDoubleClick: r,
                onContextMenu: a,
                onClick: s,
                channel: u,
                inCall: o,
                popoutType: h,
                paused: f = !1,
            } = e;
            return (0, i.jsx)("div", {
                className: p.zr,
                children: t.map((e) => {
                    if (null == e) return null;
                    let t = S(e);
                    return (0, i.jsx)(
                        "div",
                        {
                            className: p.eP,
                            style: t ? { flexShrink: 0 } : void 0,
                            children: (0, i.jsx)(c.Ay, {
                                participant: e,
                                selected: n === e.id,
                                channel: u,
                                className: p.Vs,
                                fit: c.Yl.COVER_LANDSCAPE,
                                onClick: s,
                                onDoubleClick: r,
                                onContextMenu: a,
                                width: t ? d : l,
                                inCall: o,
                                paused: f,
                                popoutType: h,
                            }),
                        },
                        e.id,
                    );
                }),
            });
        },
        i: function (e, t) {
            let l =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : { tileWidth: d, tileMinWidth: 124, tileMargin: 8, limit: 12, cropSelfVideo: !1 },
                { tileWidth: i, tileMinWidth: s, tileMargin: u, limit: c, cropSelfVideo: p, version: g } = l,
                [x, k] = n.useState(Date.now());
            n.useEffect(() => {
                let e = setTimeout(() => {
                    k(Date.now());
                }, f);
                return () => {
                    clearTimeout(e);
                };
            }, [t]);
            let m = n.useRef({}),
                { visibleParticipants: M, participantTileWidth: A } = n.useMemo(() => {
                    let l = Date.now(),
                        n = (0, r.sortBy)(t, (e) =>
                            (function (e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                                switch (e.type) {
                                    case h.lp.ACTIVITY:
                                        return `\x01${e.sortKey}`;
                                    case h.lp.HIDDEN_STREAM:
                                    case h.lp.STREAM:
                                        return `\x02${(0, a.A)(e.userNick, e.user)}`;
                                    case h.lp.USER:
                                        var l;
                                        let i,
                                            n = "\x06";
                                        return (
                                            e.speaking
                                                ? (n = "\x03")
                                                : t - e.lastSpoke < f
                                                  ? (n = "\x04")
                                                  : e.voiceState?.selfVideo && (n = "\x05"),
                                            `${n}${((l = e.lastSpoke), (i = String(864e13).length), String(864e13 - l).padStart(i, "0"))}${(0, a.A)(e.userNick, e.user)}`
                                        );
                                }
                            })(e, l),
                        ),
                        [d, g] = (0, r.partition)(n, h.Xw),
                        x = d.findIndex(S),
                        k = null;
                    -1 !== x && ((k = d[x]), d.splice(x, 1));
                    let M = null == k || p ? e : e - i - u,
                        A = Math.max(0, Math.min(Math.floor((M - u) / (s + u)), c, t.length)),
                        v = Math.min((M - u) / A - u, i),
                        y = Math.max(0, A - g.length),
                        C = g.slice(0, A),
                        w = d.slice(0, y),
                        D = Array(y);
                    if (y > 0) {
                        let e = [];
                        for (let t of w) {
                            let l = m.current[t.id];
                            null != l && l < y ? (D[l] = t) : e.push(t);
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
                        null != k && (p && N.length >= A ? (N[Math.max(0, N.length - 1)] = k) : N.push(k)),
                        { visibleParticipants: N, participantTileWidth: v }
                    );
                }, [e, t, x, g, p, c, u, s, i]);
            return { visibleParticipants: M, participantTileWidth: A };
        },
    },
);
