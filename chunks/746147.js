n.d(t, { default: () => d });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(211266),
    l = n(332664),
    s = n(626135),
    c = n(867003),
    b = n(987562),
    _ = n(981631),
    u = n(388032);
function d(e) {
    let { onClose: t, transitionState: d } = e,
        h = (0, a.Z)(b.Me),
        g = i.useMemo(() => h.map((e) => e.value), [h]);
    i.useEffect(() => {
        s.default.track(_.rMx.OPEN_MODAL, { type: 'Ignore User Feedback' });
    }, []);
    let f = i.useCallback((e) => {
        var t;
        let { rating: i, problem: a, feedback: l } = e,
            s = null == i;
        ((0, c.wT)(i, l, null != (t = null == a ? void 0 : a.value) ? t : null, s),
            s ||
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({ body: u.intl.string(u.t['d9+vQ0']) }, t)
                        );
                }));
    }, []);
    return (0, r.jsx)(l.Z, {
        modalType: 'ignore_user',
        header: u.intl.string(u.t.Ib6biY),
        body: u.intl.string(u.t['uW0/nZ']),
        problemTitle: u.intl.string(u.t.avs5Vl),
        problems: h,
        freeformNeededProblems: g,
        onSubmit: f,
        onClose: t,
        transitionState: d,
        otherKey: b.XL.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) => (null == e ? null : e.value === b.XL.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel5))
    });
}
