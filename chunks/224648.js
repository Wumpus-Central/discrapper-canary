n.d(t, { RG: () => A, Uo: () => _ }), n(321073);
var i = n(64700),
    l = n(735438),
    a = n(311907),
    s = n(59520),
    r = n(313961),
    o = n(996439),
    c = n(63995),
    d = n(113783),
    u = n(69407);
function _(e) {
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
        _,
        A = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        p =
            ((d = (0, a.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D)),
            (_ = (0, a.bG)([r.A], () => r.A.getSelectedParticipantId(e), [e])),
            i.useMemo(() => {
                let n = [],
                    i = [],
                    a = -1,
                    s = [];
                if (A)
                    for (let t of c.A.getMutableParticipants(e, u.ip.SPEAKER))
                        if (t.type === u.wY.STREAM) t.id !== _ && s.push(t), a++;
                        else break;
                let r = (e, t, s) => {
                        let r = s ? e.filter((e, t) => e.id !== _ && t > a) : e,
                            o = (0, l.chunk)(r, t);
                        i.push(o), n.push(o.length);
                    },
                    o = null != _ ? c.A.getParticipant(e, _) : null;
                return (
                    o?.speaker ? r([o], 1, !1) : r([], 1, !1),
                    [u.ip.SPEAKER, u.ip.AUDIENCE].forEach((e) => {
                        r(c.A.getMutableParticipants(d[0], e), t[e], e === u.ip.SPEAKER);
                    }),
                    r(s, 1, !1),
                    [n, i]
                );
            }, [d, t, _, A, e])),
        [h, g] = p,
        [m, x] = (0, s.J)(p, n, [t[u.ip.AUDIENCE]]);
    return [
        [h[3 * !!A], h[1], m[2]],
        [g[3 * !!A], g[1], x[2]],
    ];
}
