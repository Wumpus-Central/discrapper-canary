n.d(t, { default: () => d });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    l = n(211266),
    a = n(332664),
    c = n(626135),
    s = n(867003),
    u = n(987562),
    _ = n(981631),
    b = n(388032);
function d(e) {
    let { onClose: t, transitionState: d } = e,
        f = (0, l.Z)(u.Me),
        g = o.useMemo(() => f.map((e) => e.value), [f]);
    o.useEffect(() => {
        c.default.track(_.rMx.OPEN_MODAL, { type: 'Ignore User Feedback' });
    }, []);
    let m = o.useCallback((e) => {
        var t;
        let { rating: o, problem: l, feedback: a } = e,
            c = null == o;
        ((0, s.wT)(o, a, null != (t = null == l ? void 0 : l.value) ? t : null, c),
            c ||
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({ body: b.intl.string(b.t['d9+vQ0']) }, t)
                        );
                }));
    }, []);
    return (0, r.jsx)(a.Z, {
        modalType: 'ignore_user',
        header: b.intl.string(b.t.Ib6biY),
        body: b.intl.string(b.t['uW0/nZ']),
        problemTitle: b.intl.string(b.t.avs5Vl),
        problems: f,
        freeformNeededProblems: g,
        onSubmit: m,
        onClose: t,
        transitionState: d,
        otherKey: u.XL.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) => (null == e ? null : e.value === u.XL.SOMETHING_ELSE ? b.intl.string(b.t.h95hcn) : b.intl.string(b.t.wRGel5))
    });
}
