"use strict";
n.d(t, { A: () => f });
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
    m = n(985018),
    g = n(22079),
    A = n(818050);
function f(e) {
    let { setOriginalEmail: t, setSlide: r, ready: f, token: E } = e,
        [x, I] = s.useState(!1),
        [N, v] = s.useState(null),
        [C, T] = s.useState(null),
        [j, S] = s.useState(""),
        y = s.useRef(null);
    return (
        s.useEffect(() => {
            f && y.current?.focus();
        }, [f]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(d._V, { src: null == C ? n(79418) : n(579656), className: l()(A.SX, A.Ot) }),
                (0, i.jsx)(d.hE, { children: m.intl.string(m.t.IfBQ56) }),
                null != C && "" !== C
                    ? (0, i.jsx)(o.Text, { variant: "text-sm/normal", color: "text-feedback-critical", children: C })
                    : null,
                (0, i.jsxs)(d.eB, {
                    className: l()(A.SX, A.QX),
                    children: [
                        (0, i.jsx)(d.pd, {
                            name: "password",
                            type: "password",
                            label: m.intl.string(m.t["8dM4FO"]),
                            setRef: y,
                            className: A.SX,
                            value: j,
                            onChange: S,
                            error: N,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: m.intl.string(m.t["yY/PXY"]),
                        }),
                        (0, i.jsx)("div", {
                            className: A.Ot,
                            children: (0, i.jsx)(o.Button, {
                                text: m.intl.string(m.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!x) {
                                        if (0 === j.length) {
                                            v(m.intl.string(m.t.R98xD5)), u._.dispatch(p.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != C && T(null),
                                            null != N && v(null),
                                            t(""),
                                            I(!0),
                                            h.A.post({
                                                url: p.Rsh.ACCOUNT_REVERT,
                                                body: { token: E, password: j },
                                                trackedActionData: { event: a.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    S(""), t(n), r(_.k.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        T(
                                                            m.intl.formatToPlainString(m.t.aTVNes, {
                                                                statusPageURL: p.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new c.A(e);
                                                        t.hasFieldErrors()
                                                            ? v(t.getAnyErrorMessage())
                                                            : T(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case p.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return m.intl.string(m.t["11zzGR"]);
                                                                          case p.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return m.intl.string(m.t["6qmgaI"]);
                                                                          case p.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return m.intl.string(m.t.bChnKs);
                                                                          default:
                                                                              return m.intl.format(m.t.aTVNes, {
                                                                                  statusPageURL: p.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    u._.dispatch(p.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    I(!1);
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
                    className: g.UD,
                    children: (0, i.jsx)(o.Button, {
                        text: m.intl.string(m.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            S(""), r(_.k.START);
                        },
                    }),
                }),
            ],
        })
    );
}
