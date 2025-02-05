n.d(t, { Z: () => E }), n(47120), n(411104), n(773603);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(481060),
    c = n(479531),
    d = n(388905),
    u = n(585483),
    _ = n(573261),
    h = n(720196),
    g = n(981631),
    p = n(388032),
    m = n(114969),
    f = n(232186);
function E(e) {
    let { setOriginalEmail: t, setSlide: l, ready: E, token: I } = e,
        [x, C] = r.useState(!1),
        [N, v] = r.useState(null),
        [T, S] = r.useState(null),
        [A, b] = r.useState(''),
        Z = r.useRef(null);
    return (
        r.useEffect(() => {
            if (E) {
                var e;
                null === (e = Z.current) || void 0 === e || e.focus();
            }
        }, [E]),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.Ee, {
                    src: null == T ? n(26230) : n(935227),
                    className: a()(f.marginBottom20, f.marginTop8)
                }),
                (0, i.jsx)(d.Dx, { children: p.intl.string(p.t['IfBQ5+']) }),
                null != T && '' !== T
                    ? (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: T
                      })
                    : null,
                (0, i.jsxs)(d.gO, {
                    className: a()(f.marginBottom20, f.marginTop20),
                    children: [
                        (0, i.jsx)(d.II, {
                            name: 'password',
                            type: 'password',
                            label: p.intl.string(p.t['8dM4FB']),
                            setRef: Z,
                            className: f.marginBottom20,
                            value: A,
                            onChange: b,
                            error: N,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: p.intl.string(p.t['yY/PXV'])
                        }),
                        (0, i.jsx)(d.zx, {
                            className: f.marginTop8,
                            onClick: () => {
                                if (!x) {
                                    if (0 === A.length) {
                                        v(p.intl.string(p.t.R98xDw)), u.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != T && S(null),
                                        null != N && v(null),
                                        t(''),
                                        C(!0),
                                        _.Z.post({
                                            url: g.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: I,
                                                password: A
                                            },
                                            trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                b(''), t(n), l(h.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) S(p.intl.formatToPlainString(p.t.aTVNen, { statusPageURL: g.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? v(t.getAnyErrorMessage())
                                                        : S(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return p.intl.string(p.t['11zzGR']);
                                                                      case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return p.intl.string(p.t['6qmgaG']);
                                                                      case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return p.intl.string(p.t.bChnKi);
                                                                      default:
                                                                          return p.intl.format(p.t.aTVNen, { statusPageURL: g.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                u.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                C(!1);
                                            })
                                    );
                                }
                            },
                            submitting: x,
                            disabled: x,
                            children: p.intl.string(p.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.buttonContainer,
                    children: (0, i.jsx)(d.zx, {
                        color: d.zx.Colors.PRIMARY,
                        onClick: () => {
                            b(''), l(h.n.START);
                        },
                        children: p.intl.string(p.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
