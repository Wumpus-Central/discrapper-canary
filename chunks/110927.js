r.d(t, { default: () => p });
var n = r(255367),
    o = r(73800),
    i = r(481060),
    a = r(211266),
    c = r(243778),
    l = r(332664),
    s = r(626135),
    u = r(867003),
    _ = r(987562),
    b = r(981631),
    d = r(594654),
    f = r(388032);
function p(e) {
    let { onClose: t, transitionState: p, dismissibleContent: m } = e;
    (0, c.US)([m]);
    let g = (0, a.Z)((0, _.ny)(m)),
        O = o.useMemo(() => g.map((e) => e.value), [g]);
    o.useEffect(() => {
        s.default.track(b.rMx.OPEN_MODAL, { type: 'Age Verification User Feedback' });
    }, []);
    let E = o.useCallback(
        (e) => {
            var t;
            let { rating: o, problem: a, feedback: c } = e,
                l = null == o,
                s = (0, u.nH)(m);
            ((0, u.I)(o, '' !== c ? c : null, null != (t = null == a ? void 0 : a.value) ? t : null, l, s),
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
                                })({ body: f.intl.string(d.default['4djgOz']) }, t)
                            );
                    }));
        },
        [m]
    );
    return (0, n.jsx)(l.Z, {
        modalType: 'age_verification',
        header: f.intl.string(d.default.RqoA4u),
        body: f.intl.string(d.default.RPb8Zm),
        problemTitle: f.intl.string(d.default.KZw6kp),
        problems: g,
        freeformNeededProblems: O,
        onSubmit: E,
        onClose: t,
        transitionState: p,
        otherKey: _.wO.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) => (null == e ? null : e.value === _.wO.SOMETHING_ELSE ? f.intl.string(d.default['Q5cQ4+']) : f.intl.string(d.default.zApKaW))
    });
}
