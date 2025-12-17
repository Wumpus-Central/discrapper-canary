a.d(t, { default: () => m });
var c = a(54381),
    n = a(473749),
    o = a(481060),
    r = a(211266),
    d = a(332664),
    i = a(626135),
    l = a(867003),
    b = a(987562),
    s = a(981631),
    u = a(388032);
function m(e) {
    let { onClose: t, transitionState: m } = e,
        _ = (0, r.Z)(b.Me),
        p = n.useMemo(() => _.map((e) => e.value), [_]);
    n.useEffect(() => {
        i.default.track(s.rMx.OPEN_MODAL, { type: "Ignore User Feedback" });
    }, []);
    let f = n.useCallback((e) => {
        var t;
        let { rating: n, problem: r, feedback: d } = e,
            i = null == n;
        (0, l.wT)(n, d, null != (t = null == r ? void 0 : r.value) ? t : null, i),
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
                            })({ body: u.intl.string(u.t["d9+vQ8"]) }, t),
                        );
                });
    }, []);
    return (0, c.jsx)(d.Z, {
        modalType: "ignore_user",
        header: u.intl.string(u.t.Ib6bic),
        body: u.intl.string(u.t["uW0/nV"]),
        problemTitle: u.intl.string(u.t.avs5Vg),
        problems: _,
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
