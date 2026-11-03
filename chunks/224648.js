(t.d(n, { RG: () => h, Uo: () => A }), t(321073));
var i = t(582128),
    l = t(435558),
    s = t(17928),
    a = t(59520),
    r = t(198052),
    o = t(996439),
    c = t(63995),
    d = t(113783),
    u = t(518769);
function A(e) {
    let n = (0, d.zy)(e, u.ip.AUDIENCE),
        [t, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            n > 100 ? l(!0) : n < 75 && l(!1);
        }, [n]),
        5e3 * !!t
    );
}
function h(e, n, t) {
    let d,
        A,
        h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        m =
            ((d = (0, s.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D)),
            (A = (0, s.bG)([r.A], () => r.A.getSelectedParticipantId(e), [e])),
            i.useMemo(() => {
                let t = [],
                    i = [],
                    s = -1,
                    a = [];
                if (h)
                    for (let n of c.A.getMutableParticipants(e, u.ip.SPEAKER))
                        if (n.type === u.wY.STREAM) (n.id !== A && a.push(n), s++);
                        else break;
                function r(e, n, a) {
                    let r = a ? e.filter((e, n) => e.id !== A && n > s) : e,
                        o = (0, l.chunk)(r, n);
                    (i.push(o), t.push(o.length));
                }
                let o = null != A ? c.A.getParticipant(e, A) : null;
                return (
                    o?.speaker ? r([o], 1, !1) : r([], 1, !1),
                    [u.ip.SPEAKER, u.ip.AUDIENCE].forEach((e) => {
                        r(c.A.getMutableParticipants(d[0], e), n[e], e === u.ip.SPEAKER);
                    }),
                    r(a, 1, !1),
                    [t, i]
                );
            }, [d, n, A, h, e])),
        [g, x] = m,
        [C, f] = (0, a.J)(m, t, [n[u.ip.AUDIENCE]]);
    return [
        [g[3 * !!h], g[1], C[2]],
        [x[3 * !!h], x[1], f[2]],
    ];
}
