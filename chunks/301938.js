n.d(t, { Z: () => x }), n(388685), n(415506), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(990547),
    o = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    p = n(720196),
    m = n(981631),
    g = n(388032),
    f = n(710509),
    _ = n(197571);
function x(e) {
    let { setOriginalEmail: t, setSlide: l, ready: x, token: b } = e,
        [v, E] = i.useState(!1),
        [j, I] = i.useState(null),
        [y, O] = i.useState(null),
        [N, S] = i.useState(""),
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
                    className: a()(_.marginBottom20, _.marginTop8),
                }),
                (0, r.jsx)(u.Dx, { children: g.intl.string(g.t["IfBQ5+"]) }),
                null != y && "" !== y
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-danger",
                          children: y,
                      })
                    : null,
                (0, r.jsxs)(u.gO, {
                    className: a()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, r.jsx)(u.II, {
                            name: "password",
                            type: "password",
                            label: g.intl.string(g.t["8dM4FB"]),
                            setRef: C,
                            className: _.marginBottom20,
                            value: N,
                            onChange: S,
                            error: j,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: g.intl.string(g.t["yY/PXV"]),
                        }),
                        (0, r.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!v) {
                                    if (0 === N.length) {
                                        I(g.intl.string(g.t.R98xDw)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != y && O(null),
                                        null != j && I(null),
                                        t(""),
                                        E(!0),
                                        h.Z.post({
                                            url: m.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: b,
                                                password: N,
                                            },
                                            trackedActionData: { event: s.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1,
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n },
                                                } = e;
                                                S(""), t(n), l(p.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error)
                                                    O(
                                                        g.intl.formatToPlainString(g.t.aTVNen, {
                                                            statusPageURL: m.yXt.STATUS,
                                                        }),
                                                    );
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? I(t.getAnyErrorMessage())
                                                        : O(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case m.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return g.intl.string(g.t["11zzGR"]);
                                                                      case m.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return g.intl.string(g.t["6qmgaG"]);
                                                                      case m.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return g.intl.string(g.t.bChnKi);
                                                                      default:
                                                                          return g.intl.format(g.t.aTVNen, {
                                                                              statusPageURL: m.yXt.STATUS,
                                                                          });
                                                                  }
                                                              })(t.code).toString(),
                                                          );
                                                }
                                                d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                E(!1);
                                            })
                                    );
                                }
                            },
                            submitting: v,
                            disabled: v,
                            children: g.intl.string(g.t.ezv91d),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: f.buttonContainer,
                    children: (0, r.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            S(""), l(p.n.START);
                        },
                        children: g.intl.string(g.t.rzxnQ0),
                    }),
                }),
            ],
        })
    );
}
