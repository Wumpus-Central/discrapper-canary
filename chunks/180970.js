n.d(t, { default: () => f });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    a = n(211266),
    l = n(332664),
    c = n(626135),
    s = n(867003),
    _ = n(987562),
    u = n(981631),
    b = n(388032);
let d = [_.F5.SOMETHING_ELSE];
function f(e) {
    let { onClose: t, transitionState: f } = e,
        g = (0, a.Z)(_.CE);
    o.useEffect(() => {
        c.default.track(u.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let m = o.useCallback((e) => {
        var t;
        let { rating: o, problem: a, feedback: l } = e,
            c = null == o;
        (0, s.tp)(o, l, null != (t = null == a ? void 0 : a.value) ? t : null, c),
            c ||
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({ body: b.intl.string(b.t['d9+vQ0']) }, t)
                        );
                });
    }, []);
    return (0, r.jsx)(l.Z, {
        modalType: 'block_user',
        header: b.intl.string(b.t['+2qQAQ']),
        body: b.intl.string(b.t['+0Rsvb']),
        problemTitle: b.intl.string(b.t.TXomWV),
        problems: g,
        freeformNeededProblems: d,
        onSubmit: m,
        onClose: t,
        transitionState: f,
        otherKey: _.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0
    });
}
