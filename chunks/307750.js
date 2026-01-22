t.d(a, { default: () => p });
var d = t(627968),
    r = t(64700),
    c = t(397927),
    f = t(444927),
    b = t(612479),
    n = t(954571),
    l = t(34550),
    o = t(14594),
    i = t(652215),
    s = t(985018);
let u = [o.tF.SOMETHING_ELSE];
function p(e) {
    let { onClose: a, transitionState: p } = e,
        _ = (0, f.A)(o.A4);
    r.useEffect(() => {
        n.default.track(i.HAw.OPEN_MODAL, { type: "Block User Feedback" });
    }, []);
    let O = r.useCallback((e) => {
        var a;
        let { rating: r, problem: f, feedback: b } = e,
            n = null == r;
        (0, l.$b)(r, b, null != (a = null == f ? void 0 : f.value) ? a : null, n),
            n ||
                (0, c.mMO)(async () => {
                    let { default: e } = await t.e("37836").then(t.bind(t, 845671));
                    return (a) =>
                        (0, d.jsx)(
                            e,
                            (function (e) {
                                for (var a = 1; a < arguments.length; a++) {
                                    var t = null != arguments[a] ? arguments[a] : {},
                                        d = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (d = d.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            }),
                                        )),
                                        d.forEach(function (a) {
                                            var d;
                                            (d = t[a]),
                                                a in e
                                                    ? Object.defineProperty(e, a, {
                                                          value: d,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[a] = d);
                                        });
                                }
                                return e;
                            })({ body: s.intl.string(s.t["d9+vQ8"]) }, a),
                        );
                });
    }, []);
    return (0, d.jsx)(b.A, {
        modalType: "block_user",
        header: s.intl.string(s.t["+2qQAX"]),
        body: s.intl.string(s.t["+0RsvT"]),
        problemTitle: s.intl.string(s.t.TXomWW),
        problems: _,
        freeformNeededProblems: u,
        onSubmit: O,
        onClose: a,
        transitionState: p,
        otherKey: o.tF.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
    });
}
