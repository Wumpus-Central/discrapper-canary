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
    p = n(573261),
    g = n(720196),
    h = n(981631),
    f = n(388032),
    m = n(578605),
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
                (0, r.jsx)(u.Dx, { children: f.NW.string(f.t['IfBQ5+']) }),
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
                            label: f.NW.string(f.t['8dM4FB']),
                            setRef: y,
                            className: _.marginBottom20,
                            value: O,
                            onChange: C,
                            error: E,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: f.NW.string(f.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!N) {
                                    if (0 === O.length) {
                                        I(f.NW.string(f.t.R98xDw)), d.S.dispatch(h.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != j && S(null),
                                        null != E && I(null),
                                        t(''),
                                        v(!0),
                                        p.Z.post({
                                            url: h.ANM.ACCOUNT_REVERT,
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
                                                C(''), t(n), o(g.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) S(f.NW.formatToPlainString(f.t.aTVNen, { statusPageURL: h.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? I(t.getAnyErrorMessage())
                                                        : S(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case h.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return f.NW.string(f.t['11zzGR']);
                                                                      case h.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return f.NW.string(f.t['6qmgaG']);
                                                                      case h.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return f.NW.string(f.t.bChnKi);
                                                                      default:
                                                                          return f.NW.format(f.t.aTVNen, { statusPageURL: h.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(h.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                v(!1);
                                            })
                                    );
                                }
                            },
                            submitting: N,
                            disabled: N,
                            children: f.NW.string(f.t.ezv91d)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: m.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            C(''), o(g.n.START);
                        },
                        children: f.NW.string(f.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
