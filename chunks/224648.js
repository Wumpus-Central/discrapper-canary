n.d(t, {
    RG: () => p,
    Uo: () => f,
}),
    n(321073),
    n(896048);
var r = n(64700),
    l = n(735438),
    i = n(311907),
    a = n(59520),
    s = n(313961),
    o = n(996439),
    c = n(63995),
    u = n(113783),
    d = n(69407);

function f(e) {
    let t = (0, u.zy)(e, d.ip.AUDIENCE),
        [n, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            t > 100 ? l(!0) : t < 75 && l(!1);
        }, [t]),
        5e3 * !!n
    );
}

function p(e, t, n) {
    let u,
        f,
        p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        h =
            ((u = (0, i.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D)),
            (f = (0, i.bG)([s.A], () => s.A.getSelectedParticipantId(e), [e])),
            r.useMemo(() => {
                let n = [],
                    r = [],
                    i = -1,
                    a = [];
                if (p)
                    for (let t of c.A.getMutableParticipants(e, d.ip.SPEAKER))
                        if (t.type === d.wY.STREAM) t.id !== f && a.push(t), i++;
                        else break;
                let s = (e, t, a) => {
                        let s = a ? e.filter((e, t) => e.id !== f && t > i) : e,
                            o = (0, l.chunk)(s, t);
                        r.push(o), n.push(o.length);
                    },
                    o = null != f ? c.A.getParticipant(e, f) : null;
                return (
                    (null == o ? void 0 : o.speaker) ? s([o], 1, !1) : s([], 1, !1),
                    [d.ip.SPEAKER, d.ip.AUDIENCE].forEach((e) => {
                        s(c.A.getMutableParticipants(u[0], e), t[e], e === d.ip.SPEAKER);
                    }),
                    s(a, 1, !1),
                    [n, r]
                );
            }, [u, t, f, p, e])),
        [b, g] = h,
        [m, A] = (0, a.J)(h, n, [t[d.ip.AUDIENCE]]);
    return [
        [b[3 * !!p], b[1], m[2]],
        [g[3 * !!p], g[1], A[2]],
    ];
}
