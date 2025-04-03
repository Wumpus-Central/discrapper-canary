n.d(t, { default: () => m });
var a = n(200651),
    l = n(192379),
    s = n(481060),
    r = n(211266),
    o = n(332664),
    i = n(626135),
    c = n(900735),
    u = n(987562),
    d = n(981631),
    _ = n(388032);
let b = [u.F5.SOMETHING_ELSE];
function m(e) {
    let { onClose: t, transitionState: m } = e,
        f = (0, r.Z)(u.CE);
    l.useEffect(() => {
        i.default.track(d.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let x = l.useCallback((e) => {
        var t;
        let { rating: l, problem: r, feedback: o } = e,
            i = null == l;
        (0, c.t)(l, o, null != (t = null == r ? void 0 : r.value) ? t : null, i),
            i ||
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, a.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (a = a.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        a.forEach(function (t) {
                                            var a;
                                            (a = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: a,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = a);
                                        });
                                }
                                return e;
                            })({ body: _.NW.string(_.t['d9+vQ0']) }, t)
                        );
                });
    }, []);
    return (0, a.jsx)(o.Z, {
        modalType: 'block_user',
        header: _.NW.string(_.t['+2qQAQ']),
        body: _.NW.string(_.t['+0Rsvb']),
        problemTitle: _.NW.string(_.t.TXomWV),
        problems: f,
        freeformNeededProblems: b,
        onSubmit: x,
        onClose: t,
        transitionState: m,
        otherKey: u.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0
    });
}
