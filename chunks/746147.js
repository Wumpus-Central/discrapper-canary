r.d(t, { default: () => d });
var n = r(255367),
    o = r(73800),
    i = r(481060),
    c = r(211266),
    a = r(332664),
    l = r(626135),
    s = r(867003),
    u = r(987562),
    _ = r(981631),
    b = r(388032);
function d(e) {
    let { onClose: t, transitionState: d } = e,
        p = (0, c.Z)(u.Me),
        f = o.useMemo(() => p.map((e) => e.value), [p]);
    o.useEffect(() => {
        l.default.track(_.rMx.OPEN_MODAL, { type: 'Ignore User Feedback' });
    }, []);
    let m = o.useCallback((e) => {
        var t;
        let { rating: o, problem: c, feedback: a } = e,
            l = null == o;
        ((0, s.wT)(o, a, null != (t = null == c ? void 0 : c.value) ? t : null, l),
            l ||
                (0, i.ZDy)(async () => {
                    let { default: e } = await r.e('14466').then(r.bind(r, 729328));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            ((n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n));
                                        }));
                                }
                                return e;
                            })({ body: b.intl.string(b.t['d9+vQ0']) }, t)
                        );
                }));
    }, []);
    return (0, n.jsx)(a.Z, {
        modalType: 'ignore_user',
        header: b.intl.string(b.t.Ib6biY),
        body: b.intl.string(b.t['uW0/nZ']),
        problemTitle: b.intl.string(b.t.avs5Vl),
        problems: p,
        freeformNeededProblems: f,
        onSubmit: m,
        onClose: t,
        transitionState: d,
        otherKey: u.XL.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) => (null == e ? null : e.value === u.XL.SOMETHING_ELSE ? b.intl.string(b.t.h95hcn) : b.intl.string(b.t.wRGel5))
    });
}
