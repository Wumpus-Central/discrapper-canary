n.d(t, { A: () => f }), n(323874), n(14289), n(35956);
var a = n(64700),
    c = n(562465),
    i = n(676279),
    r = n(208722),
    s = n(54192),
    d = n(605716),
    l = n(42422),
    o = n(499884),
    b = n(412126),
    u = n(87042),
    p = n(494880);
function f(e) {
    let t = (0, i.TM)(),
        [n, f] = (0, a.useState)({
            celebrationEntry: void 0,
            celebrationIdle: void 0,
            activationEntry: void 0,
            activationIdle: void 0,
        }),
        [m, y] = (0, a.useState)(!1),
        E = (0, a.useRef)(!1);
    return (
        (0, a.useEffect)(() => {
            if (!e || E.current) return;
            E.current = !0;
            let n = !1;
            return (
                Promise.all([
                    c.Bo.get({ url: t ? o.A : b.A, binary: !0, rejectWithError: !0 }),
                    c.Bo.get({ url: t ? u.A : p.A, binary: !0, rejectWithError: !0 }),
                    c.Bo.get({ url: t ? r.A : s.A, binary: !0, rejectWithError: !0 }),
                    c.Bo.get({ url: t ? d.A : l.A, binary: !0, rejectWithError: !0 }),
                ]).then(
                    (e) => {
                        let [t, a, c, i] = e;
                        n ||
                            (f({
                                celebrationEntry: window.URL.createObjectURL(t.body),
                                celebrationIdle: window.URL.createObjectURL(a.body),
                                activationEntry: window.URL.createObjectURL(c.body),
                                activationIdle: window.URL.createObjectURL(i.body),
                            }),
                            y(!0));
                    },
                    () => {
                        n || (E.current = !1);
                    },
                ),
                () => {
                    (n = !0), (E.current = !1);
                }
            );
        }, [e, t]),
        (0, a.useEffect)(
            () => () => {
                null != n.celebrationEntry && window.URL.revokeObjectURL(n.celebrationEntry),
                    null != n.celebrationIdle && window.URL.revokeObjectURL(n.celebrationIdle),
                    null != n.activationEntry && window.URL.revokeObjectURL(n.activationEntry),
                    null != n.activationIdle && window.URL.revokeObjectURL(n.activationIdle);
            },
            [n.celebrationEntry, n.celebrationIdle, n.activationEntry, n.activationIdle],
        ),
        { mediaUrls: n, isSuccess: m }
    );
}
