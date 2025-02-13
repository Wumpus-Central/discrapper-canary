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
    m = n(981631),
    g = n(388032),
    p = n(584925),
    f = n(483938);
function E(e) {
    let { setOriginalEmail: t, setSlide: l, ready: E, token: x } = e,
        [I, v] = r.useState(!1),
        [C, N] = r.useState(null),
        [S, T] = r.useState(null),
        [A, b] = r.useState(''),
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
                (0, i.jsx)(d.Dx, { children: g.intl.string(g.t['IfBQ5+']) }),
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
                            label: g.intl.string(g.t['8dM4FB']),
                            setRef: R,
                            className: f.marginBottom20,
                            value: A,
                            onChange: b,
                            error: C,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: g.intl.string(g.t['yY/PXV'])
                        }),
                        (0, i.jsx)(d.zx, {
                            className: f.marginTop8,
                            onClick: () => {
                                if (!I) {
                                    if (0 === A.length) {
                                        N(g.intl.string(g.t.R98xDw)), u.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != S && T(null),
                                        null != C && N(null),
                                        t(''),
                                        v(!0),
                                        h.Z.post({
                                            url: m.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: x,
                                                password: A
                                            },
                                            trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                b(''), t(n), l(_.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) T(g.intl.formatToPlainString(g.t.aTVNen, { statusPageURL: m.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? N(t.getAnyErrorMessage())
                                                        : T(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case m.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return g.intl.string(g.t['11zzGR']);
                                                                      case m.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return g.intl.string(g.t['6qmgaG']);
                                                                      case m.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return g.intl.string(g.t.bChnKi);
                                                                      default:
                                                                          return g.intl.format(g.t.aTVNen, { statusPageURL: m.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                u.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                v(!1);
                                            })
                                    );
                                }
                            },
                            submitting: I,
                            disabled: I,
                            children: g.intl.string(g.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: p.buttonContainer,
                    children: (0, i.jsx)(d.zx, {
                        color: d.zx.Colors.PRIMARY,
                        onClick: () => {
                            b(''), l(_.n.START);
                        },
                        children: g.intl.string(g.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
