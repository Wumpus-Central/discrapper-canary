"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(110259),
    o = n(397927),
    c = n(181658),
    d = n(854378),
    u = n(203982),
    h = n(499785),
    _ = n(524832),
    p = n(652215),
    g = n(985018),
    m = n(497039),
    f = n(473169);
function A(e) {
    let { setOriginalEmail: t, setSlide: r, ready: A, token: E } = e,
        [x, v] = s.useState(!1),
        [I, N] = s.useState(null),
        [S, j] = s.useState(null),
        [C, y] = s.useState(""),
        T = s.useRef(null);
    return (
        s.useEffect(() => {
            A && T.current?.focus();
        }, [A]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(d._V, { src: null == S ? n(79418) : n(579656), className: l()(f.SX, f.Ot) }),
                (0, i.jsx)(d.hE, { children: g.intl.string(g.t.IfBQ56) }),
                null != S && "" !== S
                    ? (0, i.jsx)(o.Text, { variant: "text-sm/normal", color: "text-feedback-critical", children: S })
                    : null,
                (0, i.jsxs)(d.eB, {
                    className: l()(f.SX, f.QX),
                    children: [
                        (0, i.jsx)(d.pd, {
                            name: "password",
                            type: "password",
                            label: g.intl.string(g.t["8dM4FO"]),
                            setRef: T,
                            className: f.SX,
                            value: C,
                            onChange: y,
                            error: I,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: g.intl.string(g.t["yY/PXY"]),
                        }),
                        (0, i.jsx)("div", {
                            className: f.Ot,
                            children: (0, i.jsx)(o.Button, {
                                text: g.intl.string(g.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!x) {
                                        if (0 === C.length) {
                                            N(g.intl.string(g.t.R98xD5)), u._.dispatch(p.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != S && j(null),
                                            null != I && N(null),
                                            t(""),
                                            v(!0),
                                            h.A.post({
                                                url: p.Rsh.ACCOUNT_REVERT,
                                                body: { token: E, password: C },
                                                trackedActionData: { event: a.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    y(""), t(n), r(_.k.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        j(
                                                            g.intl.formatToPlainString(g.t.aTVNes, {
                                                                statusPageURL: p.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new c.A(e);
                                                        t.hasFieldErrors()
                                                            ? N(t.getAnyErrorMessage())
                                                            : j(
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
                                                    u._.dispatch(p.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    v(!1);
                                                })
                                        );
                                    }
                                },
                                loading: x,
                                disabled: x,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: m.UD,
                    children: (0, i.jsx)(o.Button, {
                        text: g.intl.string(g.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            y(""), r(_.k.START);
                        },
                    }),
                }),
            ],
        })
    );
}
