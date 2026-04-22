"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(110259),
    o = n(834730),
    c = n(821609),
    d = n(181658),
    u = n(854378),
    _ = n(203982),
    h = n(499785),
    m = n(524832),
    p = n(652215),
    g = n(985018),
    A = n(244460),
    f = n(818050);
function x(e) {
    let { setOriginalEmail: t, setSlide: r, ready: x, token: E } = e,
        [I, v] = s.useState(!1),
        [N, j] = s.useState(null),
        [C, T] = s.useState(null),
        [b, S] = s.useState(""),
        y = s.useRef(null);
    return (
        s.useEffect(() => {
            x && y.current?.focus();
        }, [x]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(u._V, { src: null == C ? n(79418) : n(579656), className: l()(f.SX, f.Ot) }),
                (0, i.jsx)(u.hE, { children: g.intl.string(g.t.IfBQ56) }),
                null != C && "" !== C
                    ? (0, i.jsx)(o.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: C })
                    : null,
                (0, i.jsxs)(u.eB, {
                    className: l()(f.SX, f.QX),
                    children: [
                        (0, i.jsx)(u.pd, {
                            name: "password",
                            type: "password",
                            label: g.intl.string(g.t["8dM4FO"]),
                            setRef: y,
                            className: f.SX,
                            value: b,
                            onChange: S,
                            error: N,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: g.intl.string(g.t["yY/PXY"]),
                        }),
                        (0, i.jsx)("div", {
                            className: f.Ot,
                            children: (0, i.jsx)(c.$, {
                                text: g.intl.string(g.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!I) {
                                        if (0 === b.length) {
                                            j(g.intl.string(g.t.R98xD5)), _._.dispatch(p.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != C && T(null),
                                            null != N && j(null),
                                            t(""),
                                            v(!0),
                                            h.A.post({
                                                url: p.Rsh.ACCOUNT_REVERT,
                                                body: { token: E, password: b },
                                                trackedActionData: { event: a.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    S(""), t(n), r(m.k.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        T(
                                                            g.intl.formatToPlainString(g.t.aTVNes, {
                                                                statusPageURL: p.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new d.A(e);
                                                        t.hasFieldErrors()
                                                            ? j(t.getAnyErrorMessage())
                                                            : T(
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
                                                    _._.dispatch(p.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    v(!1);
                                                })
                                        );
                                    }
                                },
                                loading: I,
                                disabled: I,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: A.UD,
                    children: (0, i.jsx)(c.$, {
                        text: g.intl.string(g.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            S(""), r(m.k.START);
                        },
                    }),
                }),
            ],
        })
    );
}
