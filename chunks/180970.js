a.d(t, { default: () => m });
var c = a(54381),
    o = a(473749),
    n = a(481060),
    d = a(211266),
    r = a(332664),
    i = a(626135),
    b = a(867003),
    l = a(987562),
    s = a(981631),
    u = a(388032);
let _ = [l.F5.SOMETHING_ELSE];
function m(e) {
    let { onClose: t, transitionState: m } = e,
        p = (0, d.Z)(l.CE);
    o.useEffect(() => {
        i.default.track(s.rMx.OPEN_MODAL, { type: "Block User Feedback" });
    }, []);
    let f = o.useCallback((e) => {
        var t;
        let { rating: o, problem: d, feedback: r } = e,
            i = null == o;
        (0, b.tp)(o, r, null != (t = null == d ? void 0 : d.value) ? t : null, i),
            i ||
                (0, n.ZDy)(async () => {
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
    return (0, c.jsx)(r.Z, {
        modalType: "block_user",
        header: u.intl.string(u.t["+2qQAX"]),
        body: u.intl.string(u.t["+0RsvT"]),
        problemTitle: u.intl.string(u.t.TXomWW),
        problems: p,
        freeformNeededProblems: _,
        onSubmit: f,
        onClose: t,
        transitionState: m,
        otherKey: l.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
    });
}
