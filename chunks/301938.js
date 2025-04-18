n.d(t, { Z: () => x }), n(388685), n(415506), n(457542);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(990547),
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
    let { setOriginalEmail: t, setSlide: s, ready: x, token: N } = e,
        [b, E] = i.useState(!1),
        [v, j] = i.useState(null),
        [I, O] = i.useState(null),
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
                    src: null == I ? n(26230) : n(935227),
                    className: o()(_.marginBottom20, _.marginTop8)
                }),
                (0, r.jsx)(u.Dx, { children: m.NW.string(m.t['IfBQ5+']) }),
                null != I && '' !== I
                    ? (0, r.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: I
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: o()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: m.NW.string(m.t['8dM4FB']),
                            setRef: C,
                            className: _.marginBottom20,
                            value: S,
                            onChange: y,
                            error: v,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.NW.string(m.t['yY/PXV'])
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!b) {
                                    if (0 === S.length) {
                                        j(m.NW.string(m.t.R98xDw)), d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != I && O(null),
                                        null != v && j(null),
                                        t(''),
                                        E(!0),
                                        h.Z.post({
                                            url: p.ANM.ACCOUNT_REVERT,
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
                                                y(''), t(n), s(g.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) O(m.NW.formatToPlainString(m.t.aTVNen, { statusPageURL: p.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? j(t.getAnyErrorMessage())
                                                        : O(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case p.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return m.NW.string(m.t['11zzGR']);
                                                                      case p.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return m.NW.string(m.t['6qmgaG']);
                                                                      case p.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return m.NW.string(m.t.bChnKi);
                                                                      default:
                                                                          return m.NW.format(m.t.aTVNen, { statusPageURL: p.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                E(!1);
                                            })
                                    );
                                }
                            },
                            submitting: b,
                            disabled: b,
                            children: m.NW.string(m.t.ezv91d)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: f.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            y(''), s(g.n.START);
                        },
                        children: m.NW.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
