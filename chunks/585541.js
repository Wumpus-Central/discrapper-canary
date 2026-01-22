n.d(t, {
    A: () => x,
}),
    n(896048),
    n(65821),
    n(492834);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(110259),
    o = n(397927),
    c = n(181658),
    u = n(854378),
    d = n(203982),
    h = n(499785),
    f = n(524832),
    p = n(652215),
    g = n(985018),
    m = n(497039),
    A = n(473169);

function x(e) {
    let { setOriginalEmail: t, setSlide: s, ready: x, token: _ } = e,
        [E, b] = i.useState(!1),
        [v, j] = i.useState(null),
        [y, S] = i.useState(null),
        [N, O] = i.useState(""),
        I = i.useRef(null);
    return (
        i.useEffect(() => {
            if (x) {
                var e;
                null == (e = I.current) || e.focus();
            }
        }, [x]),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(u._V, {
                    src: null == y ? n(79418) : n(579656),
                    className: l()(A.SX, A.Ot),
                }),
                (0, r.jsx)(u.hE, {
                    children: g.intl.string(g.t.IfBQ56),
                }),
                null != y && "" !== y
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          children: y,
                      })
                    : null,
                (0, r.jsxs)(u.eB, {
                    className: l()(A.SX, A.QX),
                    children: [
                        (0, r.jsx)(u.pd, {
                            name: "password",
                            type: "password",
                            label: g.intl.string(g.t["8dM4FO"]),
                            setRef: I,
                            className: A.SX,
                            value: N,
                            onChange: O,
                            error: v,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: g.intl.string(g.t["yY/PXY"]),
                        }),
                        (0, r.jsx)("div", {
                            className: A.Ot,
                            children: (0, r.jsx)(o.Button, {
                                text: g.intl.string(g.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!E) {
                                        if (0 === N.length) {
                                            j(g.intl.string(g.t.R98xD5)), d._.dispatch(p.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != y && S(null),
                                            null != v && j(null),
                                            t(""),
                                            b(!0),
                                            h.A.post({
                                                url: p.Rsh.ACCOUNT_REVERT,
                                                body: {
                                                    token: _,
                                                    password: N,
                                                },
                                                trackedActionData: {
                                                    event: a.NetworkActionNames.ACCOUNT_REVERT,
                                                },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    O(""), t(n), s(f.k.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        S(
                                                            g.intl.formatToPlainString(g.t.aTVNes, {
                                                                statusPageURL: p.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new c.A(e);
                                                        t.hasFieldErrors()
                                                            ? j(t.getAnyErrorMessage())
                                                            : S(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case p.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return g.intl.string(g.t["11zzGR"]);
                                                                          case p.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return g.intl.string(g.t["6qmgaI"]);
                                                                          case p.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return g.intl.string(g.t.bChnKs);
                                                                          default:
                                                                              return g.intl.format(g.t.aTVNes, {
                                                                                  statusPageURL: p.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    d._.dispatch(p.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    b(!1);
                                                })
                                        );
                                    }
                                },
                                loading: E,
                                disabled: E,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: m.UD,
                    children: (0, r.jsx)(o.Button, {
                        text: g.intl.string(g.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            O(""), s(f.k.START);
                        },
                    }),
                }),
            ],
        })
    );
}
