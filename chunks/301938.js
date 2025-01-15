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
    m = n(981631),
    f = n(388032),
    p = n(87908),
    x = n(275477);
function _(e) {
    let { setOriginalEmail: t, setSlide: s, ready: _, token: E } = e,
        [I, N] = r.useState(!1),
        [v, C] = r.useState(null),
        [b, Z] = r.useState(null),
        [j, T] = r.useState(''),
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
                (0, i.jsx)(d.Dx, { children: f.intl.string(f.t['IfBQ5+']) }),
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
                            label: f.intl.string(f.t['8dM4FB']),
                            setRef: S,
                            className: x.marginBottom20,
                            value: j,
                            onChange: T,
                            error: v,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: f.intl.string(f.t['yY/PXV'])
                        }),
                        (0, i.jsx)(d.zx, {
                            className: x.marginTop8,
                            onClick: () => {
                                if (!I) {
                                    if (0 === j.length) {
                                        C(f.intl.string(f.t.R98xDw)), u.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != b && Z(null),
                                        null != v && C(null),
                                        t(''),
                                        N(!0),
                                        h.Z.post({
                                            url: m.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: E,
                                                password: j
                                            },
                                            trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                T(''), t(n), s(g.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) Z(f.intl.formatToPlainString(f.t.aTVNen, { statusPageURL: m.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? C(t.getAnyErrorMessage())
                                                        : Z(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case m.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return f.intl.string(f.t['11zzGR']);
                                                                      case m.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return f.intl.string(f.t['6qmgaG']);
                                                                      case m.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return f.intl.string(f.t.bChnKi);
                                                                      default:
                                                                          return f.intl.format(f.t.aTVNen, { statusPageURL: m.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                u.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                N(!1);
                                            })
                                    );
                                }
                            },
                            submitting: I,
                            disabled: I,
                            children: f.intl.string(f.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: p.buttonContainer,
                    children: (0, i.jsx)(d.zx, {
                        color: d.zx.Colors.PRIMARY,
                        onClick: () => {
                            T(''), s(g.n.START);
                        },
                        children: f.intl.string(f.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
