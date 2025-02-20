n.d(t, { Z: () => b }), n(47120), n(411104), n(773603);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(990547),
    s = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    p = n(720196),
    _ = n(981631),
    g = n(388032),
    f = n(279178),
    m = n(455812);
function b(e) {
    let { setOriginalEmail: t, setSlide: o, ready: b, token: N } = e,
        [x, v] = i.useState(!1),
        [E, I] = i.useState(null),
        [O, C] = i.useState(null),
        [S, j] = i.useState(''),
        y = i.useRef(null);
    return (
        i.useEffect(() => {
            if (b) {
                var e;
                null === (e = y.current) || void 0 === e || e.focus();
            }
        }, [b]),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: null == O ? n(26230) : n(935227),
                    className: a()(m.marginBottom20, m.marginTop8)
                }),
                (0, r.jsx)(u.Dx, { children: g.NW.string(g.t['IfBQ5+']) }),
                null != O && '' !== O
                    ? (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: O
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: a()(m.marginBottom20, m.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: g.NW.string(g.t['8dM4FB']),
                            setRef: y,
                            className: m.marginBottom20,
                            value: S,
                            onChange: j,
                            error: E,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: g.NW.string(g.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: m.marginTop8,
                            onClick: () => {
                                if (!x) {
                                    if (0 === S.length) {
                                        I(g.NW.string(g.t.R98xDw)), d.S.dispatch(_.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != O && C(null),
                                        null != E && I(null),
                                        t(''),
                                        v(!0),
                                        h.Z.post({
                                            url: _.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: N,
                                                password: S
                                            },
                                            trackedActionData: { event: l.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                j(''), t(n), o(p.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) C(g.NW.formatToPlainString(g.t.aTVNen, { statusPageURL: _.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? I(t.getAnyErrorMessage())
                                                        : C(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case _.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return g.NW.string(g.t['11zzGR']);
                                                                      case _.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return g.NW.string(g.t['6qmgaG']);
                                                                      case _.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return g.NW.string(g.t.bChnKi);
                                                                      default:
                                                                          return g.NW.format(g.t.aTVNen, { statusPageURL: _.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(_.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                v(!1);
                                            })
                                    );
                                }
                            },
                            submitting: x,
                            disabled: x,
                            children: g.NW.string(g.t.ezv91d)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: f.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            j(''), o(p.n.START);
                        },
                        children: g.NW.string(g.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
