n.d(t, { RG: () => A, Uo: () => h }), n(321073);
var i = n(64700),
    l = n(735438),
    s = n(311907),
    a = n(59520),
    r = n(313961),
    o = n(996439),
    c = n(63995),
    d = n(113783),
    u = n(69407);
function h(e) {
    let t = (0, d.zy)(e, u.ip.AUDIENCE),
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            t > 100 ? l(!0) : t < 75 && l(!1);
        }, [t]),
        5e3 * !!n
    );
}
function A(e, t, n) {
    let d,
        h,
        A = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        _ =
            ((d = (0, s.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D)),
            (h = (0, s.bG)([r.A], () => r.A.getSelectedParticipantId(e), [e])),
            i.useMemo(() => {
                let n = [],
                    i = [],
                    s = -1,
                    a = [];
                if (A)
                    for (let t of c.A.getMutableParticipants(e, u.ip.SPEAKER))
                        if (t.type === u.wY.STREAM) t.id !== h && a.push(t), s++;
                        else break;
                let r = (e, t, a) => {
                        let r = a ? e.filter((e, t) => e.id !== h && t > s) : e,
                            o = (0, l.chunk)(r, t);
                        i.push(o), n.push(o.length);
                    },
                    o = null != h ? c.A.getParticipant(e, h) : null;
                return (
                    o?.speaker ? r([o], 1, !1) : r([], 1, !1),
                    [u.ip.SPEAKER, u.ip.AUDIENCE].forEach((e) => {
                        r(c.A.getMutableParticipants(d[0], e), t[e], e === u.ip.SPEAKER);
                    }),
                    r(a, 1, !1),
                    [n, i]
                );
            }, [d, t, h, A, e])),
        [m, g] = _,
        [p, f] = (0, a.J)(_, n, [t[u.ip.AUDIENCE]]);
    return [
        [m[3 * !!A], m[1], p[2]],
        [g[3 * !!A], g[1], f[2]],
    ];
}
