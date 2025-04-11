n.d(t, { default: () => b });
var a = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(211266),
    o = n(332664),
    i = n(626135),
    c = n(867003),
    u = n(987562),
    d = n(981631),
    _ = n(388032);
function b(e) {
    let { onClose: t, transitionState: b } = e,
        m = (0, s.Z)(u.Me),
        f = l.useMemo(() => m.map((e) => e.value), [m]);
    l.useEffect(() => {
        i.default.track(d.rMx.OPEN_MODAL, { type: 'Ignore User Feedback' });
    }, []);
    let h = l.useCallback((e) => {
        var t;
        let { rating: l, problem: s, feedback: o } = e,
            i = null == l;
        (0, c.wT)(l, o, null != (t = null == s ? void 0 : s.value) ? t : null, i),
            i ||
                (0, r.ZDy)(async () => {
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
        modalType: 'ignore_user',
        header: _.NW.string(_.t.Ib6biY),
        body: _.NW.string(_.t['uW0/nZ']),
        problemTitle: _.NW.string(_.t.avs5Vl),
        problems: m,
        freeformNeededProblems: f,
        onSubmit: h,
        onClose: t,
        transitionState: b,
        otherKey: u.XL.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0,
        freeformDescription: (e) => (null == e ? null : e.value === u.XL.SOMETHING_ELSE ? _.NW.string(_.t.h95hcn) : _.NW.string(_.t.wRGel5))
    });
}
