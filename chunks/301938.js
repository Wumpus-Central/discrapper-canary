n.d(t, { Z: () => x }), n(47120), n(411104), n(773603);
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
    p = n(388032),
    m = n(114969),
    f = n(232186);
function x(e) {
    let { setOriginalEmail: t, setSlide: l, ready: x, token: E } = e,
        [I, v] = r.useState(!1),
        [N, b] = r.useState(null),
        [C, T] = r.useState(null),
        [S, A] = r.useState(''),
        Z = r.useRef(null);
    return (
        r.useEffect(() => {
            if (x) {
                var e;
                null === (e = Z.current) || void 0 === e || e.focus();
            }
        }, [x]),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.Ee, {
                    src: null == C ? n(26230) : n(935227),
                    className: a()(f.marginBottom20, f.marginTop8)
                }),
                (0, i.jsx)(d.Dx, { children: p.intl.string(p.t['IfBQ5+']) }),
                null != C && '' !== C
                    ? (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: C
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
                            value: S,
                            onChange: A,
                            error: N,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: p.intl.string(p.t['yY/PXV'])
                        }),
                        (0, i.jsx)(d.zx, {
                            className: f.marginTop8,
                            onClick: () => {
                                if (!I) {
                                    if (0 === S.length) {
                                        b(p.intl.string(p.t.R98xDw)), u.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != C && T(null),
                                        null != N && b(null),
                                        t(''),
                                        v(!0),
                                        h.Z.post({
                                            url: g.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: E,
                                                password: S
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
                                                if (e instanceof Error) T(p.intl.formatToPlainString(p.t.aTVNen, { statusPageURL: g.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? b(t.getAnyErrorMessage())
                                                        : T(
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
                                                v(!1);
                                            })
                                    );
                                }
                            },
                            submitting: I,
                            disabled: I,
                            children: p.intl.string(p.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.buttonContainer,
                    children: (0, i.jsx)(d.zx, {
                        color: d.zx.Colors.PRIMARY,
                        onClick: () => {
                            A(''), l(_.n.START);
                        },
                        children: p.intl.string(p.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
