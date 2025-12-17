a.d(t, { default: () => _ });
var c = a(54381),
    n = a(473749),
    o = a(481060),
    d = a(211266),
    r = a(243778),
    i = a(332664),
    l = a(626135),
    b = a(867003),
    u = a(987562),
    s = a(981631),
    f = a(765606),
    m = a(388032);
function _(e) {
    let { onClose: t, transitionState: _, dismissibleContent: p } = e;
    (0, r.US)([p]);
    let h = (0, d.Z)((0, u.ny)(p)),
        g = n.useMemo(() => h.map((e) => e.value), [h]);
    n.useEffect(() => {
        l.default.track(s.rMx.OPEN_MODAL, { type: "Age Verification User Feedback" });
    }, []);
    let j = n.useCallback(
        (e) => {
            var t;
            let { rating: n, problem: d, feedback: r } = e,
                i = null == n,
                l = (0, b.nH)(p);
            (0, b.I)(n, "" !== r ? r : null, null != (t = null == d ? void 0 : d.value) ? t : null, i, l),
                i ||
                    (0, o.ZDy)(async () => {
                        let { default: e } = await a.e("14466").then(a.bind(a, 729328));
                        return (t) =>
                            (0, c.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var a = null != arguments[t] ? arguments[t] : {},
                                            c = Object.keys(a);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (c = c.concat(
                                                Object.getOwnPropertySymbols(a).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                }),
                                            )),
                                            c.forEach(function (t) {
                                                var c;
                                                (c = a[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: c,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = c);
                                            });
                                    }
                                    return e;
                                })({ body: m.intl.string(f.default["4djgO/"]) }, t),
                            );
                    });
        },
        [p],
    );
    return (0, c.jsx)(i.Z, {
        modalType: "age_verification",
        header: m.intl.string(f.default.RqoA4v),
        body: m.intl.string(f.default.RPb8Zk),
        problemTitle: m.intl.string(f.default.KZw6kn),
        problems: h,
        freeformNeededProblems: g,
        onSubmit: j,
        onClose: t,
        transitionState: _,
        otherKey: u.wO.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e
                ? null
                : e.value === u.wO.SOMETHING_ELSE
                  ? m.intl.string(f.default.Q5cQ46)
                  : m.intl.string(f.default.zApKaR),
    });
}
