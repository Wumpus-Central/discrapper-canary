n.d(t, {
    Dx: () => h,
    aP: () => p
}),
    n(653041),
    n(47120);
var i = n(192379),
    l = n(392711),
    a = n(442837),
    r = n(638730),
    s = n(358221),
    o = n(136015),
    c = n(565799),
    d = n(431328),
    u = n(501655);
function h(e) {
    let t = (0, d.Rk)(e, u.pV.AUDIENCE),
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            t > 100 ? l(!0) : t < 75 && l(!1);
        }, [t]),
        n ? 5000 : 0
    );
}
function p(e, t, n) {
    let d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        h = (function (e, t, n) {
            let r = (0, a.e7)([c.Z], () => [e, c.Z.getParticipantsVersion(e)], [e], o.Q),
                d = (0, a.e7)([s.Z], () => s.Z.getSelectedParticipantId(e), [e]);
            return i.useMemo(() => {
                let i = [],
                    a = [],
                    s = -1,
                    o = [];
                if (n)
                    for (let t of c.Z.getMutableParticipants(e, u.pV.SPEAKER))
                        if (t.type === u.Ui.STREAM) t.id !== d && o.push(t), s++;
                        else break;
                let h = (e, t, n) => {
                        let r = n ? e.filter((e, t) => e.id !== d && t > s) : e,
                            o = (0, l.chunk)(r, t);
                        a.push(o), i.push(o.length);
                    },
                    p = null != d ? c.Z.getParticipant(e, d) : null;
                return (
                    (null == p ? void 0 : p.speaker) ? h([p], 1, !1) : h([], 1, !1),
                    [u.pV.SPEAKER, u.pV.AUDIENCE].forEach((e) => {
                        h(c.Z.getMutableParticipants(r[0], e), t[e], e === u.pV.SPEAKER);
                    }),
                    h(o, 1, !1),
                    [i, a]
                );
            }, [r, t, d, n, e]);
        })(e, t, d),
        [p, m] = h,
        [f, g] = (0, r.T)(h, n, [t[u.pV.AUDIENCE]]);
    return [
        [p[d ? 3 : 0], p[1], f[2]],
        [m[d ? 3 : 0], m[1], g[2]]
    ];
}
