"use strict";
n.d(t, { RG: () => A, Uo: () => h }), n(321073);
var i = n(64700),
    s = n(735438),
    l = n(311907),
    r = n(59520),
    a = n(313961),
    o = n(996439),
    c = n(63995),
    d = n(113783),
    u = n(69407);
function h(e) {
    let t = (0, d.zy)(e, u.ip.AUDIENCE),
        [n, s] = i.useState(!1);
    return (
        i.useEffect(() => {
            t > 100 ? s(!0) : t < 75 && s(!1);
        }, [t]),
        5e3 * !!n
    );
}
function A(e, t, n) {
    let d,
        h,
        A = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        p =
            ((d = (0, l.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D)),
            (h = (0, l.bG)([a.A], () => a.A.getSelectedParticipantId(e), [e])),
            i.useMemo(() => {
                let n = [],
                    i = [],
                    l = -1,
                    r = [];
                if (A)
                    for (let t of c.A.getMutableParticipants(e, u.ip.SPEAKER))
                        if (t.type === u.wY.STREAM) t.id !== h && r.push(t), l++;
                        else break;
                let a = (e, t, r) => {
                        let a = r ? e.filter((e, t) => e.id !== h && t > l) : e,
                            o = (0, s.chunk)(a, t);
                        i.push(o), n.push(o.length);
                    },
                    o = null != h ? c.A.getParticipant(e, h) : null;
                return (
                    o?.speaker ? a([o], 1, !1) : a([], 1, !1),
                    [u.ip.SPEAKER, u.ip.AUDIENCE].forEach((e) => {
                        a(c.A.getMutableParticipants(d[0], e), t[e], e === u.ip.SPEAKER);
                    }),
                    a(r, 1, !1),
                    [n, i]
                );
            }, [d, t, h, A, e])),
        [g, m] = p,
        [_, f] = (0, r.J)(p, n, [t[u.ip.AUDIENCE]]);
    return [
        [g[3 * !!A], g[1], _[2]],
        [m[3 * !!A], m[1], f[2]],
    ];
}
