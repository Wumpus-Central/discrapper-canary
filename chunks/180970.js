o.d(t, { default: () => m });
var n = o(54381),
    c = o(473749),
    r = o(481060),
    a = o(211266),
    _ = o(332664),
    i = o(626135),
    l = o(867003),
    b = o(987562),
    s = o(981631),
    u = o(388032);
let d = [b.F5.SOMETHING_ELSE];
function m(e) {
    let { onClose: t, transitionState: m } = e,
        p = (0, a.Z)(b.CE);
    c.useEffect(() => {
        i.default.track(s.rMx.OPEN_MODAL, { type: "Block User Feedback" });
    }, []);
    let f = c.useCallback((e) => {
        var t;
        let { rating: c, problem: a, feedback: _ } = e,
            i = null == c;
        (0, l.tp)(c, _, null != (t = null == a ? void 0 : a.value) ? t : null, i),
            i ||
                (0, r.ZDy)(async () => {
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
    return (0, n.jsx)(_.Z, {
        modalType: "block_user",
        header: u.intl.string(u.t["+2qQAX"]),
        body: u.intl.string(u.t["+0RsvT"]),
        problemTitle: u.intl.string(u.t.TXomWW),
        problems: p,
        freeformNeededProblems: d,
        onSubmit: f,
        onClose: t,
        transitionState: m,
        otherKey: b.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
    });
}
