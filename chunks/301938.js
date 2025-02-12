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
    h = n(573261),
    _ = n(720196),
    g = n(981631),
    m = n(388032),
    p = n(213603),
    f = n(814632);
function E(e) {
    let { setOriginalEmail: t, setSlide: l, ready: E, token: x } = e,
        [I, C] = r.useState(!1),
        [v, N] = r.useState(null),
        [S, T] = r.useState(null),
        [b, A] = r.useState(''),
        R = r.useRef(null);
    return (
        r.useEffect(() => {
            if (E) {
                var e;
                null === (e = R.current) || void 0 === e || e.focus();
            }
        }, [E]),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.Ee, {
                    src: null == S ? n(26230) : n(935227),
                    className: a()(f.marginBottom20, f.marginTop8)
                }),
                (0, i.jsx)(d.Dx, { children: m.intl.string(m.t['IfBQ5+']) }),
                null != S && '' !== S
                    ? (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: S
                      })
                    : null,
                (0, i.jsxs)(d.gO, {
                    className: a()(f.marginBottom20, f.marginTop20),
                    children: [
                        (0, i.jsx)(d.II, {
                            name: 'password',
                            type: 'password',
                            label: m.intl.string(m.t['8dM4FB']),
                            setRef: R,
                            className: f.marginBottom20,
                            value: b,
                            onChange: A,
                            error: v,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.intl.string(m.t['yY/PXV'])
                        }),
                        (0, i.jsx)(d.zx, {
                            className: f.marginTop8,
                            onClick: () => {
                                if (!I) {
                                    if (0 === b.length) {
                                        N(m.intl.string(m.t.R98xDw)), u.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != S && T(null),
                                        null != v && N(null),
                                        t(''),
                                        C(!0),
                                        h.Z.post({
                                            url: g.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: x,
                                                password: b
                                            },
                                            trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                A(''), t(n), l(_.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) T(m.intl.formatToPlainString(m.t.aTVNen, { statusPageURL: g.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? N(t.getAnyErrorMessage())
                                                        : T(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return m.intl.string(m.t['11zzGR']);
                                                                      case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return m.intl.string(m.t['6qmgaG']);
                                                                      case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return m.intl.string(m.t.bChnKi);
                                                                      default:
                                                                          return m.intl.format(m.t.aTVNen, { statusPageURL: g.yXt.STATUS });
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
                            A(''), l(_.n.START);
                        },
                        children: m.intl.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
