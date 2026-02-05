n.d(t, { RG: () => A, Uo: () => h }), n(321073);
var i = n(64700),
    l = n(735438),
    s = n(311907),
    a = n(59520),
    r = n(313961),
    o = n(996439),
    d = n(63995),
    c = n(113783),
    u = n(69407);
function h(e) {
    let t = (0, c.zy)(e, u.ip.AUDIENCE),
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            t > 100 ? l(!0) : t < 75 && l(!1);
        }, [t]),
        5e3 * !!n
    );
}
function A(e, t, n) {
    let c,
        h,
        A = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        g =
            ((c = (0, s.bG)([d.A], () => [e, d.A.getParticipantsVersion(e)], [e], o.D)),
            (h = (0, s.bG)([r.A], () => r.A.getSelectedParticipantId(e), [e])),
            i.useMemo(() => {
                let n = [],
                    i = [],
                    s = -1,
                    a = [];
                if (A)
                    for (let t of d.A.getMutableParticipants(e, u.ip.SPEAKER))
                        if (t.type === u.wY.STREAM) t.id !== h && a.push(t), s++;
                        else break;
                let r = (e, t, a) => {
                        let r = a ? e.filter((e, t) => e.id !== h && t > s) : e,
                            o = (0, l.chunk)(r, t);
                        i.push(o), n.push(o.length);
                    },
                    o = null != h ? d.A.getParticipant(e, h) : null;
                return (
                    o?.speaker ? r([o], 1, !1) : r([], 1, !1),
                    [u.ip.SPEAKER, u.ip.AUDIENCE].forEach((e) => {
                        r(d.A.getMutableParticipants(c[0], e), t[e], e === u.ip.SPEAKER);
                    }),
                    r(a, 1, !1),
                    [n, i]
                );
            }, [c, t, h, A, e])),
        [m, p] = g,
        [_, x] = (0, a.J)(g, n, [t[u.ip.AUDIENCE]]);
    return [
        [m[3 * !!A], m[1], _[2]],
        [p[3 * !!A], p[1], x[2]],
    ];
}
