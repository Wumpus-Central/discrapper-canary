n.d(t, { Z: () => b }), n(388685), n(415506), n(457542);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(990547),
    s = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    p = n(573261),
    h = n(720196),
    g = n(981631),
    m = n(388032),
    f = n(578605),
    _ = n(20493);
function b(e) {
    let { setOriginalEmail: t, setSlide: o, ready: b, token: x } = e,
        [N, v] = i.useState(!1),
        [E, I] = i.useState(null),
        [j, S] = i.useState(null),
        [O, C] = i.useState(''),
        y = i.useRef(null);
    return (
        i.useEffect(() => {
            if (b) {
                var e;
                null == (e = y.current) || e.focus();
            }
        }, [b]),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: null == j ? n(26230) : n(935227),
                    className: a()(_.marginBottom20, _.marginTop8)
                }),
                (0, r.jsx)(u.Dx, { children: m.NW.string(m.t['IfBQ5+']) }),
                null != j && '' !== j
                    ? (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: j
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: a()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: m.NW.string(m.t['8dM4FB']),
                            setRef: y,
                            className: _.marginBottom20,
                            value: O,
                            onChange: C,
                            error: E,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.NW.string(m.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!N) {
                                    if (0 === O.length) {
                                        I(m.NW.string(m.t.R98xDw)), d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != j && S(null),
                                        null != E && I(null),
                                        t(''),
                                        v(!0),
                                        p.Z.post({
                                            url: g.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: x,
                                                password: O
                                            },
                                            trackedActionData: { event: l.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                C(''), t(n), o(h.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) S(m.NW.formatToPlainString(m.t.aTVNen, { statusPageURL: g.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? I(t.getAnyErrorMessage())
                                                        : S(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return m.NW.string(m.t['11zzGR']);
                                                                      case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return m.NW.string(m.t['6qmgaG']);
                                                                      case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return m.NW.string(m.t.bChnKi);
                                                                      default:
                                                                          return m.NW.format(m.t.aTVNen, { statusPageURL: g.yXt.STATUS });
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
                            submitting: N,
                            disabled: N,
                            children: m.NW.string(m.t.ezv91d)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: f.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            C(''), o(h.n.START);
                        },
                        children: m.NW.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
