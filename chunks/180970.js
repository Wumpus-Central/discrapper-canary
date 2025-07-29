r.d(t, { default: () => p });
var n = r(255367),
    o = r(73800),
    i = r(481060),
    c = r(211266),
    a = r(332664),
    l = r(626135),
    s = r(867003),
    _ = r(987562),
    u = r(981631),
    b = r(388032);
let d = [_.F5.SOMETHING_ELSE];
function p(e) {
    let { onClose: t, transitionState: p } = e,
        f = (0, c.Z)(_.CE);
    o.useEffect(() => {
        l.default.track(u.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let m = o.useCallback((e) => {
        var t;
        let { rating: o, problem: c, feedback: a } = e,
            l = null == o;
        ((0, s.tp)(o, a, null != (t = null == c ? void 0 : c.value) ? t : null, l),
            l ||
                (0, i.ZDy)(async () => {
                    let { default: e } = await r.e('14466').then(r.bind(r, 729328));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            ((n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n));
                                        }));
                                }
                                return e;
                            })({ body: b.intl.string(b.t['d9+vQ0']) }, t)
                        );
                }));
    }, []);
    return (0, n.jsx)(a.Z, {
        modalType: 'block_user',
        header: b.intl.string(b.t['+2qQAQ']),
        body: b.intl.string(b.t['+0Rsvb']),
        problemTitle: b.intl.string(b.t.TXomWV),
        problems: f,
        freeformNeededProblems: d,
        onSubmit: m,
        onClose: t,
        transitionState: p,
        otherKey: _.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0
    });
}
