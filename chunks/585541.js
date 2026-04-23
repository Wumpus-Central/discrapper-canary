"use strict";
n.d(t, { A: () => E });
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
    g = n(652215),
    p = n(985018),
    A = n(244460),
    f = n(818050);
function E(e) {
    let { setOriginalEmail: t, setSlide: r, ready: E, token: x } = e,
        [I, v] = s.useState(!1),
        [N, j] = s.useState(null),
        [C, T] = s.useState(null),
        [y, b] = s.useState(""),
        S = s.useRef(null);
    return (
        s.useEffect(() => {
            E && S.current?.focus();
        }, [E]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(u._V, { src: null == C ? n(79418) : n(579656), className: l()(f.SX, f.Ot) }),
                (0, i.jsx)(u.hE, { children: p.intl.string(p.t.IfBQ56) }),
                null != C && "" !== C
                    ? (0, i.jsx)(o.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: C })
                    : null,
                (0, i.jsxs)(u.eB, {
                    className: l()(f.SX, f.QX),
                    children: [
                        (0, i.jsx)(u.pd, {
                            name: "password",
                            type: "password",
                            label: p.intl.string(p.t["8dM4FO"]),
                            setRef: S,
                            className: f.SX,
                            value: y,
                            onChange: b,
                            error: N,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: p.intl.string(p.t["yY/PXY"]),
                        }),
                        (0, i.jsx)("div", {
                            className: f.Ot,
                            children: (0, i.jsx)(c.$, {
                                text: p.intl.string(p.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!I) {
                                        if (0 === y.length) {
                                            j(p.intl.string(p.t.R98xD5)), _._.dispatch(g.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != C && T(null),
                                            null != N && j(null),
                                            t(""),
                                            v(!0),
                                            h.A.post({
                                                url: g.Rsh.ACCOUNT_REVERT,
                                                body: { token: x, password: y },
                                                trackedActionData: { event: a.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    b(""), t(n), r(m.k.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        T(
                                                            p.intl.formatToPlainString(p.t.aTVNes, {
                                                                statusPageURL: g.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new d.A(e);
                                                        t.hasFieldErrors()
                                                            ? j(t.getAnyErrorMessage())
                                                            : T(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case g.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return p.intl.string(p.t["11zzGR"]);
                                                                          case g.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return p.intl.string(p.t["6qmgaI"]);
                                                                          case g.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return p.intl.string(p.t.bChnKs);
                                                                          default:
                                                                              return p.intl.format(p.t.aTVNes, {
                                                                                  statusPageURL: g.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    _._.dispatch(g.jej.WAVE_EMPHASIZE);
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
                        text: p.intl.string(p.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            b(""), r(m.k.START);
                        },
                    }),
                }),
            ],
        })
    );
}
