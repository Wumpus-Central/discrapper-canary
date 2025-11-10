n.d(t, { Z: () => x }), n(388685), n(415506), n(457542);
var r = n(951288),
    i = n(647438),
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
        [y, S] = i.useState(null),
        [N, O] = i.useState(""),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            if (x) {
                var e;
                null == (e = C.current) || e.focus();
            }
        }, [x]),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: null == y ? n(26230) : n(935227),
                    className: l()(_.marginBottom20, _.marginTop8),
                }),
                (0, r.jsx)(u.Dx, { children: p.intl.string(p.t.IfBQ56) }),
                null != y && "" !== y
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-danger",
                          children: y,
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: l()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: "password",
                            type: "password",
                            label: p.intl.string(p.t["8dM4FO"]),
                            setRef: C,
                            className: _.marginBottom20,
                            value: N,
                            onChange: O,
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
                                        if (0 === N.length) {
                                            I(p.intl.string(p.t.R98xD5)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != y && S(null),
                                            null != b && I(null),
                                            t(""),
                                            j(!0),
                                            h.Z.post({
                                                url: m.ANM.ACCOUNT_REVERT,
                                                body: {
                                                    token: E,
                                                    password: N,
                                                },
                                                trackedActionData: { event: a.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    O(""), t(n), s(g.n.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        S(
                                                            p.intl.formatToPlainString(p.t.aTVNes, {
                                                                statusPageURL: m.yXt.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new c.Z(e);
                                                        t.hasFieldErrors()
                                                            ? I(t.getAnyErrorMessage())
                                                            : S(
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
                            O(""), s(g.n.START);
                        },
                    }),
                }),
            ],
        })
    );
}
