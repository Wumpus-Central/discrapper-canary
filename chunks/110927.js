o.d(t, { default: () => p });
var n = o(255367),
    r = o(73800),
    a = o(481060),
    c = o(211266),
    i = o(243778),
    l = o(332664),
    _ = o(626135),
    u = o(867003),
    b = o(987562),
    s = o(981631),
    d = o(565287),
    m = o(388032);
function p(e) {
    let { onClose: t, transitionState: p, dismissibleContent: f } = e;
    (0, i.US)([f]);
    let h = (0, c.Z)((0, b.ny)(f)),
        g = r.useMemo(() => h.map((e) => e.value), [h]);
    r.useEffect(() => {
        _.default.track(s.rMx.OPEN_MODAL, { type: "Age Verification User Feedback" });
    }, []);
    let j = r.useCallback(
        (e) => {
            var t;
            let { rating: r, problem: c, feedback: i } = e,
                l = null == r,
                _ = (0, u.nH)(f);
            (0, u.I)(r, "" !== i ? i : null, null != (t = null == c ? void 0 : c.value) ? t : null, l, _),
                l ||
                    (0, a.ZDy)(async () => {
                        let { default: e } = await o.e("14466").then(o.bind(o, 729328));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var o = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(o);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(o).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = o[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = n);
                                            });
                                    }
                                    return e;
                                })({ body: m.intl.string(d.default["4djgOz"]) }, t),
                            );
                    });
        },
        [f],
    );
    return (0, n.jsx)(l.Z, {
        modalType: "age_verification",
        header: m.intl.string(d.default.RqoA4u),
        body: m.intl.string(d.default.RPb8Zm),
        problemTitle: m.intl.string(d.default.KZw6kp),
        problems: h,
        freeformNeededProblems: g,
        onSubmit: j,
        onClose: t,
        transitionState: p,
        otherKey: b.wO.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e
                ? null
                : e.value === b.wO.SOMETHING_ELSE
                  ? m.intl.string(d.default["Q5cQ4+"])
                  : m.intl.string(d.default.zApKaW),
    });
}
