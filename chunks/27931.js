n.d(t, {
    Dx: () => p,
    aP: () => h,
}),
    n(539854),
    n(388685);
var r = n(473749),
    i = n(392711),
    l = n(442837),
    a = n(638730),
    s = n(358221),
    o = n(136015),
    c = n(565799),
    d = n(431328),
    u = n(501655);
function p(e) {
    let t = (0, d.Rk)(e, u.pV.AUDIENCE),
        [n, i] = r.useState(!1);
    return (
        r.useEffect(() => {
            t > 100 ? i(!0) : t < 75 && i(!1);
        }, [t]),
        5000 * !!n
    );
}
function h(e, t, n) {
    let d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        p = (function (e, t, n) {
            let a = (0, l.e7)([c.Z], () => [e, c.Z.getParticipantsVersion(e)], [e], o.Q),
                d = (0, l.e7)([s.Z], () => s.Z.getSelectedParticipantId(e), [e]);
            return r.useMemo(() => {
                let r = [],
                    l = [],
                    s = -1,
                    o = [];
                if (n)
                    for (let t of c.Z.getMutableParticipants(e, u.pV.SPEAKER))
                        if (t.type === u.Ui.STREAM) t.id !== d && o.push(t), s++;
                        else break;
                let p = (e, t, n) => {
                        let a = n ? e.filter((e, t) => e.id !== d && t > s) : e,
                            o = (0, i.chunk)(a, t);
                        l.push(o), r.push(o.length);
                    },
                    h = null != d ? c.Z.getParticipant(e, d) : null;
                return (
                    (null == h ? void 0 : h.speaker) ? p([h], 1, !1) : p([], 1, !1),
                    [u.pV.SPEAKER, u.pV.AUDIENCE].forEach((e) => {
                        p(c.Z.getMutableParticipants(a[0], e), t[e], e === u.pV.SPEAKER);
                    }),
                    p(o, 1, !1),
                    [r, l]
                );
            }, [a, t, d, n, e]);
        })(e, t, d),
        [h, f] = p,
        [g, m] = (0, a.T)(p, n, [t[u.pV.AUDIENCE]]);
    return [
        [h[3 * !!d], h[1], g[2]],
        [f[3 * !!d], f[1], m[2]],
    ];
}
