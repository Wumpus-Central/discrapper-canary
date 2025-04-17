n.d(t, { default: () => m });
var r = n(200651),
    a = n(192379),
    o = n(481060),
    l = n(211266),
    s = n(332664),
    i = n(626135),
    c = n(867003),
    u = n(987562),
    d = n(981631),
    _ = n(388032);
let b = [u.F5.SOMETHING_ELSE];
function m(e) {
    let { onClose: t, transitionState: m } = e,
        f = (0, l.Z)(u.CE);
    a.useEffect(() => {
        i.default.track(d.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let p = a.useCallback((e) => {
        var t;
        let { rating: a, problem: l, feedback: s } = e,
            i = null == a;
        (0, c.tp)(a, s, null != (t = null == l ? void 0 : l.value) ? t : null, i),
            i ||
                (0, o.ZDy)(async () => {
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
                            })({ body: _.NW.string(_.t['d9+vQ0']) }, t)
                        );
                });
    }, []);
    return (0, r.jsx)(s.Z, {
        modalType: 'block_user',
        header: _.NW.string(_.t['+2qQAQ']),
        body: _.NW.string(_.t['+0Rsvb']),
        problemTitle: _.NW.string(_.t.TXomWV),
        problems: f,
        freeformNeededProblems: b,
        onSubmit: p,
        onClose: t,
        transitionState: m,
        otherKey: u.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0
    });
}
