n.d(t, { Z: () => _ }), n(388685), n(415506), n(457542);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(990547),
    o = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    f = n(720196),
    g = n(981631),
    m = n(388032),
    p = n(839926),
    x = n(478411);
function _(e) {
    let { setOriginalEmail: t, setSlide: s, ready: _, token: E } = e,
        [v, b] = i.useState(!1),
        [j, I] = i.useState(null),
        [N, y] = i.useState(null),
        [S, C] = i.useState(""),
        T = i.useRef(null);
    return (
        i.useEffect(() => {
            if (_) {
                var e;
                null == (e = T.current) || e.focus();
            }
        }, [_]),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: null == N ? n(26230) : n(935227),
                    className: a()(x.marginBottom20, x.marginTop8),
                }),
                (0, r.jsx)(u.Dx, { children: m.intl.string(m.t.IfBQ56) }),
                null != N && "" !== N
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          children: N,
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: a()(x.marginBottom20, x.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: "password",
                            type: "password",
                            label: m.intl.string(m.t["8dM4FO"]),
                            setRef: T,
                            className: x.marginBottom20,
                            value: S,
                            onChange: C,
                            error: j,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: m.intl.string(m.t["yY/PXY"]),
                        }),
                        (0, r.jsx)("div", {
                            className: x.marginTop8,
                            children: (0, r.jsx)(o.Button, {
                                text: m.intl.string(m.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!v) {
                                        if (0 === S.length) {
                                            I(m.intl.string(m.t.R98xD5)), d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != N && y(null),
                                            null != j && I(null),
                                            t(""),
                                            b(!0),
                                            h.Z.post({
                                                url: g.ANM.ACCOUNT_REVERT,
                                                body: {
                                                    token: E,
                                                    password: S,
                                                },
                                                trackedActionData: { event: l.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    C(""), t(n), s(f.n.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        y(
                                                            m.intl.formatToPlainString(m.t.aTVNes, {
                                                                statusPageURL: g.yXt.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new c.Z(e);
                                                        t.hasFieldErrors()
                                                            ? I(t.getAnyErrorMessage())
                                                            : y(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return m.intl.string(m.t["11zzGR"]);
                                                                          case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return m.intl.string(m.t["6qmgaI"]);
                                                                          case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return m.intl.string(m.t.bChnKs);
                                                                          default:
                                                                              return m.intl.format(m.t.aTVNes, {
                                                                                  statusPageURL: g.yXt.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    b(!1);
                                                })
                                        );
                                    }
                                },
                                loading: v,
                                disabled: v,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: p.buttonContainer,
                    children: (0, r.jsx)(o.Button, {
                        text: m.intl.string(m.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            C(""), s(f.n.START);
                        },
                    }),
                }),
            ],
        })
    );
}
