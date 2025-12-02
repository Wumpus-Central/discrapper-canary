n.d(t, { default: () => m });
var o = n(54381),
    r = n(473749),
    c = n(481060),
    a = n(211266),
    i = n(332664),
    l = n(626135),
    _ = n(867003),
    b = n(987562),
    s = n(981631),
    u = n(388032);
function m(e) {
    let { onClose: t, transitionState: m } = e,
        d = (0, a.Z)(b.Me),
        p = r.useMemo(() => d.map((e) => e.value), [d]);
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
                            })({ body: u.intl.string(u.t["d9+vQ8"]) }, t),
                        );
                });
    }, []);
    return (0, o.jsx)(i.Z, {
        modalType: "ignore_user",
        header: u.intl.string(u.t.Ib6bic),
        body: u.intl.string(u.t["uW0/nV"]),
        problemTitle: u.intl.string(u.t.avs5Vg),
        problems: d,
        freeformNeededProblems: p,
        onSubmit: f,
        onClose: t,
        transitionState: m,
        otherKey: b.XL.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e ? null : e.value === b.XL.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel3),
    });
}
