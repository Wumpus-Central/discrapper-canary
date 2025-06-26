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
    h = n(573261),
    p = n(720196),
    m = n(981631),
    g = n(388032),
    f = n(578605),
    _ = n(20493);
function x(e) {
    let { setOriginalEmail: t, setSlide: l, ready: x, token: E } = e,
        [b, I] = i.useState(!1),
        [v, O] = i.useState(null),
        [N, j] = i.useState(null),
        [S, y] = i.useState(''),
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
                    src: null == N ? n(26230) : n(935227),
                    className: a()(_.marginBottom20, _.marginTop8)
                }),
                (0, r.jsx)(u.Dx, { children: g.intl.string(g.t['IfBQ5+']) }),
                null != N && '' !== N
                    ? (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: N
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: a()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: g.intl.string(g.t['8dM4FB']),
                            setRef: C,
                            className: _.marginBottom20,
                            value: S,
                            onChange: y,
                            error: v,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: g.intl.string(g.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!b) {
                                    if (0 === S.length) {
                                        O(g.intl.string(g.t.R98xDw)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != N && j(null),
                                        null != v && O(null),
                                        t(''),
                                        I(!0),
                                        h.Z.post({
                                            url: m.ANM.ACCOUNT_REVERT,
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
                                                y(''), t(n), l(p.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) j(g.intl.formatToPlainString(g.t.aTVNen, { statusPageURL: m.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? O(t.getAnyErrorMessage())
                                                        : j(
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
                                                d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                I(!1);
                                            })
                                    );
                                }
                            },
                            submitting: b,
                            disabled: b,
                            children: g.intl.string(g.t.ezv91d)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: f.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            y(''), l(p.n.START);
                        },
                        children: g.intl.string(g.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
