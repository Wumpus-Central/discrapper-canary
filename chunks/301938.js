n.d(t, { Z: () => x }), n(388685), n(415506), n(457542);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    a = n(990547),
    o = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    g = n(720196),
    m = n(981631),
    p = n(388032),
    f = n(710509),
    _ = n(197571);
function x(e) {
    let { setOriginalEmail: t, setSlide: s, ready: x, token: E } = e,
        [v, j] = i.useState(!1),
        [b, I] = i.useState(null),
        [N, y] = i.useState(null),
        [S, C] = i.useState(""),
        O = i.useRef(null);
    return (
        i.useEffect(() => {
            if (x) {
                var e;
                null == (e = O.current) || e.focus();
            }
        }, [x]),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: null == N ? n(26230) : n(935227),
                    className: l()(_.marginBottom20, _.marginTop8),
                }),
                (0, r.jsx)(u.Dx, { children: p.intl.string(p.t.IfBQ56) }),
                null != N && "" !== N
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          children: N,
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: l()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: "password",
                            type: "password",
                            label: p.intl.string(p.t["8dM4FO"]),
                            setRef: O,
                            className: _.marginBottom20,
                            value: S,
                            onChange: C,
                            error: b,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: p.intl.string(p.t["yY/PXY"]),
                        }),
                        (0, r.jsx)("div", {
                            className: _.marginTop8,
                            children: (0, r.jsx)(o.Button, {
                                text: p.intl.string(p.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!v) {
                                        if (0 === S.length) {
                                            I(p.intl.string(p.t.R98xD5)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != N && y(null),
                                            null != b && I(null),
                                            t(""),
                                            j(!0),
                                            h.Z.post({
                                                url: m.ANM.ACCOUNT_REVERT,
                                                body: {
                                                    token: E,
                                                    password: S,
                                                },
                                                trackedActionData: { event: a.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    C(""), t(n), s(g.n.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        y(
                                                            p.intl.formatToPlainString(p.t.aTVNes, {
                                                                statusPageURL: m.yXt.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new c.Z(e);
                                                        t.hasFieldErrors()
                                                            ? I(t.getAnyErrorMessage())
                                                            : y(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case m.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return p.intl.string(p.t["11zzGR"]);
                                                                          case m.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return p.intl.string(p.t["6qmgaI"]);
                                                                          case m.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return p.intl.string(p.t.bChnKs);
                                                                          default:
                                                                              return p.intl.format(p.t.aTVNes, {
                                                                                  statusPageURL: m.yXt.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    j(!1);
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
                    className: f.buttonContainer,
                    children: (0, r.jsx)(o.Button, {
                        text: p.intl.string(p.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            C(""), s(g.n.START);
                        },
                    }),
                }),
            ],
        })
    );
}
