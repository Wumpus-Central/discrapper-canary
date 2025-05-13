n.d(t, { default: () => _ });
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
function _(e) {
    let { onClose: t, transitionState: _ } = e,
        f = (0, a.Z)(u.Me),
        m = o.useMemo(() => f.map((e) => e.value), [f]);
    o.useEffect(() => {
        s.default.track(b.rMx.OPEN_MODAL, { type: 'Ignore User Feedback' });
    }, []);
    let p = o.useCallback((e) => {
        var t;
        let { rating: o, problem: a, feedback: i } = e,
            s = null == o;
        (0, c.wT)(o, i, null != (t = null == a ? void 0 : a.value) ? t : null, s),
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
        modalType: 'ignore_user',
        header: d.intl.string(d.t.Ib6biY),
        body: d.intl.string(d.t['uW0/nZ']),
        problemTitle: d.intl.string(d.t.avs5Vl),
        problems: f,
        freeformNeededProblems: m,
        onSubmit: p,
        onClose: t,
        transitionState: _,
        otherKey: u.XL.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) => (null == e ? null : e.value === u.XL.SOMETHING_ELSE ? d.intl.string(d.t.h95hcn) : d.intl.string(d.t.wRGel5))
    });
}
