n.d(t, { Z: () => N }), n(388685), n(415506), n(457542);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(990547),
    a = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    p = n(720196),
    g = n(981631),
    f = n(388032),
    m = n(578605),
    _ = n(20493);
function N(e) {
    let { setOriginalEmail: t, setSlide: s, ready: N, token: x } = e,
        [b, E] = i.useState(!1),
        [v, j] = i.useState(null),
        [I, O] = i.useState(null),
        [S, y] = i.useState(''),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            if (N) {
                var e;
                null == (e = C.current) || e.focus();
            }
        }, [N]),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: null == I ? n(26230) : n(935227),
                    className: l()(_.marginBottom20, _.marginTop8)
                }),
                (0, r.jsx)(u.Dx, { children: f.NW.string(f.t['IfBQ5+']) }),
                null != I && '' !== I
                    ? (0, r.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: I
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: l()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: f.NW.string(f.t['8dM4FB']),
                            setRef: C,
                            className: _.marginBottom20,
                            value: S,
                            onChange: y,
                            error: v,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: f.NW.string(f.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!b) {
                                    if (0 === S.length) {
                                        j(f.NW.string(f.t.R98xDw)), d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != I && O(null),
                                        null != v && j(null),
                                        t(''),
                                        E(!0),
                                        h.Z.post({
                                            url: g.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: x,
                                                password: S
                                            },
                                            trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                y(''), t(n), s(p.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) O(f.NW.formatToPlainString(f.t.aTVNen, { statusPageURL: g.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? j(t.getAnyErrorMessage())
                                                        : O(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return f.NW.string(f.t['11zzGR']);
                                                                      case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return f.NW.string(f.t['6qmgaG']);
                                                                      case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return f.NW.string(f.t.bChnKi);
                                                                      default:
                                                                          return f.NW.format(f.t.aTVNen, { statusPageURL: g.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                E(!1);
                                            })
                                    );
                                }
                            },
                            submitting: b,
                            disabled: b,
                            children: f.NW.string(f.t.ezv91d)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: m.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            y(''), s(p.n.START);
                        },
                        children: f.NW.string(f.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
