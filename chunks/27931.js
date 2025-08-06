(n.d(t, {
    Dx: () => h,
    aP: () => p
}),
    n(539854),
    n(388685));
var r = n(73800),
    i = n(392711),
    l = n(442837),
    a = n(638730),
    s = n(358221),
    o = n(136015),
    c = n(565799),
    u = n(431328),
    d = n(501655);
function h(e) {
    let t = (0, u.Rk)(e, d.pV.AUDIENCE),
        [n, i] = r.useState(!1);
    return (
        r.useEffect(() => {
            t > 100 ? i(!0) : t < 75 && i(!1);
        }, [t]),
        5000 * !!n
    );
}
function p(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        h = (function (e, t, n) {
            let a = (0, l.e7)([c.Z], () => [e, c.Z.getParticipantsVersion(e)], [e], o.Q),
                u = (0, l.e7)([s.Z], () => s.Z.getSelectedParticipantId(e), [e]);
            return r.useMemo(() => {
                let r = [],
                    l = [],
                    s = -1,
                    o = [];
                if (n)
                    for (let t of c.Z.getMutableParticipants(e, d.pV.SPEAKER))
                        if (t.type === d.Ui.STREAM) (t.id !== u && o.push(t), s++);
                        else break;
                let h = (e, t, n) => {
                        let a = n ? e.filter((e, t) => e.id !== u && t > s) : e,
                            o = (0, i.chunk)(a, t);
                        (l.push(o), r.push(o.length));
                    },
                    p = null != u ? c.Z.getParticipant(e, u) : null;
                return (
                    (null == p ? void 0 : p.speaker) ? h([p], 1, !1) : h([], 1, !1),
                    [d.pV.SPEAKER, d.pV.AUDIENCE].forEach((e) => {
                        h(c.Z.getMutableParticipants(a[0], e), t[e], e === d.pV.SPEAKER);
                    }),
                    h(o, 1, !1),
                    [r, l]
                );
            }, [a, t, u, n, e]);
        })(e, t, u),
        [p, f] = h,
        [g, m] = (0, a.T)(h, n, [t[d.pV.AUDIENCE]]);
    return [
        [p[3 * !!u], p[1], g[2]],
        [f[3 * !!u], f[1], m[2]]
    ];
}
