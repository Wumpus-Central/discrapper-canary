n.d(e, { A: () => h }), n(323874), n(14289), n(35956);
var l = n(64700),
    i = n(562465),
    s = n(676279),
    a = n(208722),
    r = n(54192),
    o = n(605716),
    c = n(42422),
    d = n(499884),
    u = n(412126),
    m = n(87042),
    x = n(494880);
function h(t) {
    let e = (0, s.TM)(),
        [n, h] = (0, l.useState)({
            celebrationEntry: void 0,
            celebrationIdle: void 0,
            activationEntry: void 0,
            activationIdle: void 0,
        }),
        [g, p] = (0, l.useState)(!1),
        f = (0, l.useRef)(!1);
    return (
        (0, l.useEffect)(() => {
            if (!t || f.current) return;
            f.current = !0;
            let n = !1;
            return (
                Promise.all([
                    i.Bo.get({ url: e ? d.A : u.A, binary: !0, rejectWithError: !0 }),
                    i.Bo.get({ url: e ? m.A : x.A, binary: !0, rejectWithError: !0 }),
                    i.Bo.get({ url: e ? a.A : r.A, binary: !0, rejectWithError: !0 }),
                    i.Bo.get({ url: e ? o.A : c.A, binary: !0, rejectWithError: !0 }),
                ]).then(
                    (t) => {
                        let [e, l, i, s] = t;
                        n ||
                            (h({
                                celebrationEntry: window.URL.createObjectURL(e.body),
                                celebrationIdle: window.URL.createObjectURL(l.body),
                                activationEntry: window.URL.createObjectURL(i.body),
                                activationIdle: window.URL.createObjectURL(s.body),
                            }),
                            p(!0));
                    },
                    () => {
                        n || (f.current = !1);
                    },
                ),
                () => {
                    (n = !0), (f.current = !1);
                }
            );
        }, [t, e]),
        (0, l.useEffect)(
            () => () => {
                null != n.celebrationEntry && window.URL.revokeObjectURL(n.celebrationEntry),
                    null != n.celebrationIdle && window.URL.revokeObjectURL(n.celebrationIdle),
                    null != n.activationEntry && window.URL.revokeObjectURL(n.activationEntry),
                    null != n.activationIdle && window.URL.revokeObjectURL(n.activationIdle);
            },
            [n.celebrationEntry, n.celebrationIdle, n.activationEntry, n.activationIdle],
        ),
        { mediaUrls: n, isSuccess: g }
    );
}
