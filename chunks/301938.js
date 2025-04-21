n.d(t, { Z: () => x }), n(388685), n(415506), n(457542);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(990547),
    a = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    g = n(720196),
    p = n(981631),
    m = n(388032),
    f = n(578605),
    _ = n(20493);
function x(e) {
    let { setOriginalEmail: t, setSlide: l, ready: x, token: b } = e,
        [E, v] = i.useState(!1),
        [j, I] = i.useState(null),
        [O, S] = i.useState(null),
        [N, y] = i.useState(''),
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
                    src: null == O ? n(26230) : n(935227),
                    className: s()(_.marginBottom20, _.marginTop8)
                }),
                (0, r.jsx)(u.Dx, { children: m.intl.string(m.t['IfBQ5+']) }),
                null != O && '' !== O
                    ? (0, r.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: O
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: s()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: m.intl.string(m.t['8dM4FB']),
                            setRef: C,
                            className: _.marginBottom20,
                            value: N,
                            onChange: y,
                            error: j,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.intl.string(m.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!E) {
                                    if (0 === N.length) {
                                        I(m.intl.string(m.t.R98xDw)), d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != O && S(null),
                                        null != j && I(null),
                                        t(''),
                                        v(!0),
                                        h.Z.post({
                                            url: p.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: b,
                                                password: N
                                            },
                                            trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                y(''), t(n), l(g.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) S(m.intl.formatToPlainString(m.t.aTVNen, { statusPageURL: p.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? I(t.getAnyErrorMessage())
                                                        : S(
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
                            submitting: E,
                            disabled: E,
                            children: m.intl.string(m.t.ezv91d)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: f.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            y(''), l(g.n.START);
                        },
                        children: m.intl.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
