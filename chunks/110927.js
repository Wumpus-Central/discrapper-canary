n.d(t, { default: () => f });
var o = n(54381),
    a = n(473749),
    r = n(481060),
    c = n(211266),
    i = n(243778),
    l = n(332664),
    _ = n(626135),
    b = n(867003),
    u = n(987562),
    s = n(981631),
    d = n(331282),
    m = n(388032);
function f(e) {
    let { onClose: t, transitionState: f, dismissibleContent: p } = e;
    (0, i.US)([p]);
    let h = (0, c.Z)((0, u.ny)(p)),
        g = a.useMemo(() => h.map((e) => e.value), [h]);
    a.useEffect(() => {
        _.default.track(s.rMx.OPEN_MODAL, { type: "Age Verification User Feedback" });
    }, []);
    let j = a.useCallback(
        (e) => {
            var t;
            let { rating: a, problem: c, feedback: i } = e,
                l = null == a,
                _ = (0, b.nH)(p);
            (0, b.I)(a, "" !== i ? i : null, null != (t = null == c ? void 0 : c.value) ? t : null, l, _),
                l ||
                    (0, r.ZDy)(async () => {
                        let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                        return (t) =>
                            (0, o.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            o = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (o = o.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            o.forEach(function (t) {
                                                var o;
                                                (o = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: o,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = o);
                                            });
                                    }
                                    return e;
                                })({ body: m.intl.string(d.default["4djgO/"]) }, t),
                            );
                    });
        },
        [p],
    );
    return (0, o.jsx)(l.Z, {
        modalType: "age_verification",
        header: m.intl.string(d.default.RqoA4v),
        body: m.intl.string(d.default.RPb8Zk),
        problemTitle: m.intl.string(d.default.KZw6kn),
        problems: h,
        freeformNeededProblems: g,
        onSubmit: j,
        onClose: t,
        transitionState: f,
        otherKey: u.wO.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e
                ? null
                : e.value === u.wO.SOMETHING_ELSE
                  ? m.intl.string(d.default.Q5cQ46)
                  : m.intl.string(d.default.zApKaR),
    });
}
