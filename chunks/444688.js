(n.d(t, { default: () => m }), n(388685), n(457542));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(82659),
    c = n(481060),
    u = n(418632),
    d = n(594174),
    f = n(388032),
    b = n(165089);
let m = function (e) {
    let { onClose: t, transitionState: l } = e,
        m = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        [p, g] = i.useState(!1),
        y = i.useCallback(() => (null == t || t(), Promise.resolve()), [t]),
        h = i.useCallback(() => {
            (null == t || t(),
                (0, c.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('9343'), n.e('11564')]).then(n.bind(n, 642298));
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
                            })({}, t)
                        );
                }));
        }, [t]),
        O = i.useCallback(() => {
            (null == t || t(), s()(null != m, 'ResendEmailVerificationButton: currentUser cannot be undefined'), g(!0), (0, u.s)(m).finally(() => g(!1)));
        }, [m, t]),
        j = i.useMemo(
            () =>
                (null == m ? void 0 : m.email) == null
                    ? [
                          {
                              text: f.intl.string(f.t.ydw5nZ),
                              onClick: h,
                              variant: 'primary'
                          }
                      ]
                    : [
                          {
                              text: f.intl.string(f.t.Vm8akJ),
                              onClick: h,
                              variant: 'secondary'
                          },
                          {
                              text: f.intl.string(f.t.lm1UKi),
                              onClick: O,
                              variant: 'primary',
                              loading: p
                          }
                      ],
            [m, h, O, p]
        );
    return (0, r.jsxs)(o.Modal, {
        title: f.intl.string(f.t.UZLrY2),
        transitionState: l,
        onClose: y,
        actions: j,
        children: [
            (0, r.jsx)('div', { className: b.imageUnverified }),
            (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                className: b.message,
                children: f.intl.string(f.t['0LgOKC'])
            })
        ]
    });
};
