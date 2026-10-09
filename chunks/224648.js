(t.d(n, { RG: () => h, Uo: () => A }), t(321073));
var i = t(582128),
    l = t(435558),
    s = t(17928),
    a = t(59520),
    r = t(198052),
    o = t(996439),
    c = t(63995),
    u = t(113783),
    d = t(518769);
function A(e) {
    let n = (0, u.zy)(e, d.ip.AUDIENCE),
        [t, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            n > 100 ? l(!0) : n < 75 && l(!1);
        }, [n]),
        5e3 * !!t
    );
}
function h(e, n, t) {
    let u,
        A,
        h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        m =
            ((u = (0, s.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D)),
            (A = (0, s.bG)([r.A], () => r.A.getSelectedParticipantId(e), [e])),
            i.useMemo(() => {
                let t = [],
                    i = [],
                    s = -1,
                    a = [];
                if (h)
                    for (let n of c.A.getMutableParticipants(e, d.ip.SPEAKER))
                        if (n.type === d.wY.STREAM) (n.id !== A && a.push(n), s++);
                        else break;
                function r(e, n, a) {
                    let r = a ? e.filter((e, n) => e.id !== A && n > s) : e,
                        o = (0, l.chunk)(r, n);
                    (i.push(o), t.push(o.length));
                }
                let o = null != A ? c.A.getParticipant(e, A) : null;
                return (
                    o?.speaker ? r([o], 1, !1) : r([], 1, !1),
                    [d.ip.SPEAKER, d.ip.AUDIENCE].forEach((e) => {
                        r(c.A.getMutableParticipants(u[0], e), n[e], e === d.ip.SPEAKER);
                    }),
                    r(a, 1, !1),
                    [t, i]
                );
            }, [u, n, A, h, e])),
        [g, x] = m,
        [C, f] = (0, a.J)(m, t, [n[d.ip.AUDIENCE]]);
    return [
        [g[3 * !!h], g[1], C[2]],
        [x[3 * !!h], x[1], f[2]],
    ];
}
