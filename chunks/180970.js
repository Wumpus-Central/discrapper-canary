n.d(t, { default: () => f });
var r = n(255367),
    o = n(73800),
    l = n(481060),
    a = n(211266),
    i = n(332664),
    s = n(626135),
    c = n(867003),
    u = n(987562),
    b = n(981631),
    d = n(388032);
let _ = [u.F5.SOMETHING_ELSE];
function f(e) {
    let { onClose: t, transitionState: f } = e,
        m = (0, a.Z)(u.CE);
    o.useEffect(() => {
        s.default.track(b.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let p = o.useCallback((e) => {
        var t;
        let { rating: o, problem: a, feedback: i } = e,
            s = null == o;
        (0, c.tp)(o, i, null != (t = null == a ? void 0 : a.value) ? t : null, s),
            s ||
                (0, l.ZDy)(async () => {
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
                            })({ body: d.intl.string(d.t['d9+vQ0']) }, t)
                        );
                });
    }, []);
    return (0, r.jsx)(i.Z, {
        modalType: 'block_user',
        header: d.intl.string(d.t['+2qQAQ']),
        body: d.intl.string(d.t['+0Rsvb']),
        problemTitle: d.intl.string(d.t.TXomWV),
        problems: m,
        freeformNeededProblems: _,
        onSubmit: p,
        onClose: t,
        transitionState: f,
        otherKey: u.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0
    });
}
