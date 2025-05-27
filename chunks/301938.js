n.d(t, { Z: () => x }), n(388685), n(415506), n(457542);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    g = n(573261),
    h = n(720196),
    p = n(981631),
    m = n(388032),
    f = n(578605),
    _ = n(20493);
function x(e) {
    let { setOriginalEmail: t, setSlide: l, ready: x, token: E } = e,
        [b, v] = i.useState(!1),
        [I, O] = i.useState(null),
        [S, y] = i.useState(null),
        [j, N] = i.useState(''),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            if (x) {
                var e;
                null == (e = C.current) || e.focus();
            }
        }, [x]),
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
                            value: j,
                            onChange: N,
                            error: I,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.intl.string(m.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!b) {
                                    if (0 === j.length) {
                                        O(m.intl.string(m.t.R98xDw)), d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != S && y(null),
                                        null != I && O(null),
                                        t(''),
                                        v(!0),
                                        g.Z.post({
                                            url: p.ANM.ACCOUNT_REVERT,
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
                                                N(''), t(n), l(h.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) y(m.intl.formatToPlainString(m.t.aTVNen, { statusPageURL: p.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? O(t.getAnyErrorMessage())
                                                        : y(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case p.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return m.intl.string(m.t['11zzGR']);
                                                                      case p.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return m.intl.string(m.t['6qmgaG']);
                                                                      case p.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return m.intl.string(m.t.bChnKi);
                                                                      default:
                                                                          return m.intl.format(m.t.aTVNen, { statusPageURL: p.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
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
                            N(''), l(h.n.START);
                        },
                        children: m.intl.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
