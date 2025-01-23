n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(411104),
    n(773603);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(990547),
    a = n(481060),
    c = n(479531),
    d = n(388905),
    u = n(585483),
    h = n(573261),
    g = n(720196),
    f = n(981631),
    m = n(388032),
    p = n(114969),
    x = n(232186);
function _(e) {
    let { setOriginalEmail: t, setSlide: s, ready: _, token: E } = e,
        [I, N] = r.useState(!1),
        [v, C] = r.useState(null),
        [b, T] = r.useState(null),
        [Z, A] = r.useState(''),
        S = r.useRef(null);
    return (
        r.useEffect(() => {
            if (_) {
                var e;
                null === (e = S.current) || void 0 === e || e.focus();
            }
        }, [_]),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.Ee, {
                    src: null == b ? n(26230) : n(935227),
                    className: l()(x.marginBottom20, x.marginTop8)
                }),
                (0, i.jsx)(d.Dx, { children: m.intl.string(m.t['IfBQ5+']) }),
                null != b && '' !== b
                    ? (0, i.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: b
                      })
                    : null,
                (0, i.jsxs)(d.gO, {
                    className: l()(x.marginBottom20, x.marginTop20),
                    children: [
                        (0, i.jsx)(d.II, {
                            name: 'password',
                            type: 'password',
                            label: m.intl.string(m.t['8dM4FB']),
                            setRef: S,
                            className: x.marginBottom20,
                            value: Z,
                            onChange: A,
                            error: v,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.intl.string(m.t['yY/PXV'])
                        }),
                        (0, i.jsx)(d.zx, {
                            className: x.marginTop8,
                            onClick: () => {
                                if (!I) {
                                    if (0 === Z.length) {
                                        C(m.intl.string(m.t.R98xDw)), u.S.dispatch(f.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != b && T(null),
                                        null != v && C(null),
                                        t(''),
                                        N(!0),
                                        h.Z.post({
                                            url: f.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: E,
                                                password: Z
                                            },
                                            trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                A(''), t(n), s(g.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) T(m.intl.formatToPlainString(m.t.aTVNen, { statusPageURL: f.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? C(t.getAnyErrorMessage())
                                                        : T(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case f.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return m.intl.string(m.t['11zzGR']);
                                                                      case f.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return m.intl.string(m.t['6qmgaG']);
                                                                      case f.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return m.intl.string(m.t.bChnKi);
                                                                      default:
                                                                          return m.intl.format(m.t.aTVNen, { statusPageURL: f.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                u.S.dispatch(f.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                N(!1);
                                            })
                                    );
                                }
                            },
                            submitting: I,
                            disabled: I,
                            children: m.intl.string(m.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: p.buttonContainer,
                    children: (0, i.jsx)(d.zx, {
                        color: d.zx.Colors.PRIMARY,
                        onClick: () => {
                            A(''), s(g.n.START);
                        },
                        children: m.intl.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
