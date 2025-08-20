n.d(t, { Z: () => x }), n(388685), n(415506), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(990547),
    a = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    f = n(720196),
    p = n(981631),
    g = n(388032),
    m = n(710509),
    _ = n(197571);
function x(e) {
    let { setOriginalEmail: t, setSlide: l, ready: x, token: v } = e,
        [E, b] = i.useState(!1),
        [j, I] = i.useState(null),
        [N, O] = i.useState(null),
        [y, S] = i.useState(""),
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
                    className: o()(_.marginBottom20, _.marginTop8),
                }),
                (0, r.jsx)(u.Dx, { children: g.intl.string(g.t["IfBQ5+"]) }),
                null != N && "" !== N
                    ? (0, r.jsx)(a.Text, {
                          variant: "text-sm/normal",
                          color: "text-danger",
                          children: N,
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: o()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: "password",
                            type: "password",
                            label: g.intl.string(g.t["8dM4FB"]),
                            setRef: C,
                            className: _.marginBottom20,
                            value: y,
                            onChange: S,
                            error: j,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: g.intl.string(g.t["yY/PXV"]),
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!E) {
                                    if (0 === y.length) {
                                        I(g.intl.string(g.t.R98xDw)), d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != N && O(null),
                                        null != j && I(null),
                                        t(""),
                                        b(!0),
                                        h.Z.post({
                                            url: p.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: v,
                                                password: y,
                                            },
                                            trackedActionData: { event: s.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1,
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n },
                                                } = e;
                                                S(""), t(n), l(f.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error)
                                                    O(
                                                        g.intl.formatToPlainString(g.t.aTVNen, {
                                                            statusPageURL: p.yXt.STATUS,
                                                        }),
                                                    );
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? I(t.getAnyErrorMessage())
                                                        : O(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case p.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return g.intl.string(g.t["11zzGR"]);
                                                                      case p.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return g.intl.string(g.t["6qmgaG"]);
                                                                      case p.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return g.intl.string(g.t.bChnKi);
                                                                      default:
                                                                          return g.intl.format(g.t.aTVNen, {
                                                                              statusPageURL: p.yXt.STATUS,
                                                                          });
                                                                  }
                                                              })(t.code).toString(),
                                                          );
                                                }
                                                d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                b(!1);
                                            })
                                    );
                                }
                            },
                            submitting: E,
                            disabled: E,
                            children: g.intl.string(g.t.ezv91d),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: m.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            S(""), l(f.n.START);
                        },
                        children: g.intl.string(g.t.rzxnQ0),
                    }),
                }),
            ],
        })
    );
}
