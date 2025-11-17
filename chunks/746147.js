o.d(t, { default: () => d });
var n = o(54381),
    r = o(473749),
    c = o(481060),
    a = o(211266),
    i = o(332664),
    l = o(626135),
    _ = o(867003),
    b = o(987562),
    s = o(981631),
    u = o(388032);
function d(e) {
    let { onClose: t, transitionState: d } = e,
        m = (0, a.Z)(b.Me),
        p = r.useMemo(() => m.map((e) => e.value), [m]);
    r.useEffect(() => {
        l.default.track(s.rMx.OPEN_MODAL, { type: "Ignore User Feedback" });
    }, []);
    let f = r.useCallback((e) => {
        var t;
        let { rating: r, problem: a, feedback: i } = e,
            l = null == r;
        (0, _.wT)(r, i, null != (t = null == a ? void 0 : a.value) ? t : null, l),
            l ||
                (0, c.ZDy)(async () => {
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
                            })({ body: u.intl.string(u.t["d9+vQ8"]) }, t),
                        );
                });
    }, []);
    return (0, n.jsx)(i.Z, {
        modalType: "ignore_user",
        header: u.intl.string(u.t.Ib6bic),
        body: u.intl.string(u.t["uW0/nV"]),
        problemTitle: u.intl.string(u.t.avs5Vg),
        problems: m,
        freeformNeededProblems: p,
        onSubmit: f,
        onClose: t,
        transitionState: d,
        otherKey: b.XL.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e ? null : e.value === b.XL.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel3),
    });
}
