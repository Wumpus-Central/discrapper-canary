(n.d(t, {
    Dx: () => p,
    aP: () => h
}),
    n(539854),
    n(388685));
var r = n(73800),
    i = n(392711),
    l = n(442837),
    a = n(638730),
    o = n(358221),
    s = n(136015),
    c = n(565799),
    u = n(431328),
    d = n(501655);
function p(e) {
    let t = (0, u.Rk)(e, d.pV.AUDIENCE),
        [n, i] = r.useState(!1);
    return (
        r.useEffect(() => {
            t > 100 ? i(!0) : t < 75 && i(!1);
        }, [t]),
        5000 * !!n
    );
}
function h(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        p = (function (e, t, n) {
            let a = (0, l.e7)([c.Z], () => [e, c.Z.getParticipantsVersion(e)], [e], s.Q),
                u = (0, l.e7)([o.Z], () => o.Z.getSelectedParticipantId(e), [e]);
            return r.useMemo(() => {
                let r = [],
                    l = [],
                    o = -1,
                    s = [];
                if (n)
                    for (let t of c.Z.getMutableParticipants(e, d.pV.SPEAKER))
                        if (t.type === d.Ui.STREAM) (t.id !== u && s.push(t), o++);
                        else break;
                let p = (e, t, n) => {
                        let a = n ? e.filter((e, t) => e.id !== u && t > o) : e,
                            s = (0, i.chunk)(a, t);
                        (l.push(s), r.push(s.length));
                    },
                    h = null != u ? c.Z.getParticipant(e, u) : null;
                return (
                    (null == h ? void 0 : h.speaker) ? p([h], 1, !1) : p([], 1, !1),
                    [d.pV.SPEAKER, d.pV.AUDIENCE].forEach((e) => {
                        p(c.Z.getMutableParticipants(a[0], e), t[e], e === d.pV.SPEAKER);
                    }),
                    p(s, 1, !1),
                    [r, l]
                );
            }, [a, t, u, n, e]);
        })(e, t, u),
        [h, f] = p,
        [m, g] = (0, a.T)(p, n, [t[d.pV.AUDIENCE]]);
    return [
        [h[3 * !!u], h[1], m[2]],
        [f[3 * !!u], f[1], g[2]]
    ];
}
