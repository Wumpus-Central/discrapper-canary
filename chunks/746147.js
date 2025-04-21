n.d(t, { default: () => b });
var r = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(211266),
    i = n(332664),
    s = n(626135),
    c = n(867003),
    u = n(987562),
    d = n(981631),
    _ = n(388032);
function b(e) {
    let { onClose: t, transitionState: b } = e,
        m = (0, o.Z)(u.Me),
        f = l.useMemo(() => m.map((e) => e.value), [m]);
    l.useEffect(() => {
        s.default.track(d.rMx.OPEN_MODAL, { type: 'Ignore User Feedback' });
    }, []);
    let g = l.useCallback((e) => {
        var t;
        let { rating: l, problem: o, feedback: i } = e,
            s = null == l;
        (0, c.wT)(l, i, null != (t = null == o ? void 0 : o.value) ? t : null, s),
            s ||
                (0, a.ZDy)(async () => {
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
                            })({ body: _.intl.string(_.t['d9+vQ0']) }, t)
                        );
                });
    }, []);
    return (0, r.jsx)(i.Z, {
        modalType: 'ignore_user',
        header: _.intl.string(_.t.Ib6biY),
        body: _.intl.string(_.t['uW0/nZ']),
        problemTitle: _.intl.string(_.t.avs5Vl),
        problems: m,
        freeformNeededProblems: f,
        onSubmit: g,
        onClose: t,
        transitionState: b,
        otherKey: u.XL.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0,
        freeformDescription: (e) => (null == e ? null : e.value === u.XL.SOMETHING_ELSE ? _.intl.string(_.t.h95hcn) : _.intl.string(_.t.wRGel5))
    });
}
