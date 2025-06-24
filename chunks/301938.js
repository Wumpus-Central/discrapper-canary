n.d(t, { Z: () => E }), n(388685), n(415506), n(457542);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    p = n(720196),
    g = n(981631),
    m = n(388032),
    f = n(578605),
    _ = n(20493);
function E(e) {
    let { setOriginalEmail: t, setSlide: l, ready: E, token: x } = e,
        [b, v] = i.useState(!1),
        [I, O] = i.useState(null),
        [S, N] = i.useState(null),
        [y, j] = i.useState(''),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            if (E) {
                var e;
                null == (e = C.current) || e.focus();
            }
        }, [E]),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: null == S ? n(26230) : n(935227),
                    className: a()(_.marginBottom20, _.marginTop8)
                }),
                (0, r.jsx)(u.Dx, { children: m.intl.string(m.t['IfBQ5+']) }),
                null != S && '' !== S
                    ? (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: S
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: a()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: m.intl.string(m.t['8dM4FB']),
                            setRef: C,
                            className: _.marginBottom20,
                            value: y,
                            onChange: j,
                            error: I,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.intl.string(m.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!b) {
                                    if (0 === y.length) {
                                        O(m.intl.string(m.t.R98xDw)), d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != S && N(null),
                                        null != I && O(null),
                                        t(''),
                                        v(!0),
                                        h.Z.post({
                                            url: g.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: x,
                                                password: y
                                            },
                                            trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                j(''), t(n), l(p.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) N(m.intl.formatToPlainString(m.t.aTVNen, { statusPageURL: g.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? O(t.getAnyErrorMessage())
                                                        : N(
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
                                                d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                v(!1);
                                            })
                                    );
                                }
                            },
                            submitting: b,
                            disabled: b,
                            children: m.intl.string(m.t.ezv91d)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: f.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            j(''), l(p.n.START);
                        },
                        children: m.intl.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
