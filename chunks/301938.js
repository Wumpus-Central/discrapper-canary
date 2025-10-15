n.d(t, { Z: () => x }), n(388685), n(415506), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
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
    let { setOriginalEmail: t, setSlide: l, ready: x, token: E } = e,
        [v, b] = i.useState(!1),
        [j, I] = i.useState(null),
        [N, S] = i.useState(null),
        [O, y] = i.useState(""),
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
                    src: null == N ? n(26230) : n(935227),
                    className: s()(_.marginBottom20, _.marginTop8),
                }),
                (0, r.jsx)(u.Dx, { children: p.intl.string(p.t.IfBQ56) }),
                null != N && "" !== N
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-danger",
                          children: N,
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: s()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: "password",
                            type: "password",
                            label: p.intl.string(p.t["8dM4FO"]),
                            setRef: C,
                            className: _.marginBottom20,
                            value: O,
                            onChange: y,
                            error: j,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: p.intl.string(p.t["yY/PXY"]),
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!v) {
                                    if (0 === O.length) {
                                        I(p.intl.string(p.t.R98xD5)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != N && S(null),
                                        null != j && I(null),
                                        t(""),
                                        b(!0),
                                        h.Z.post({
                                            url: m.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: E,
                                                password: O,
                                            },
                                            trackedActionData: { event: a.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1,
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n },
                                                } = e;
                                                y(""), t(n), l(g.n.SUCCESS);
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
                                                b(!1);
                                            })
                                    );
                                }
                            },
                            submitting: v,
                            disabled: v,
                            children: p.intl.string(p.t.ezv91b),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: f.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            y(""), l(g.n.START);
                        },
                        children: p.intl.string(p.t.rzxnQ8),
                    }),
                }),
            ],
        })
    );
}
