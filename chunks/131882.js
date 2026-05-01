n.d(e, { W: () => te, default: () => tn });
var s,
    i = n(627968),
    l = n(64700),
    r = n(123292),
    a = n(935462),
    o = n(534514),
    T = n(364522),
    c = n(430690),
    S = n(235986),
    d = n(278941),
    u = n(665909),
    _ = n(691540),
    A = n(857250),
    E = n(97483),
    x = n(834730),
    O = n(821609),
    g = n(939249),
    m = n(780964),
    h = n(858897),
    b = n(975571),
    j = n(544231),
    C = n(633387),
    L = n(503698),
    R = n.n(L),
    p = n(169636);
let I = function (t) {
    let { children: e, style: n } = t;
    return (0, i.jsx)(a.$m, { "data-migration-pending": !0, className: R()(p.j, n), children: e });
};
var F = n(652215),
    U = n(375708),
    N = n(425020);
let k = function (t) {
    let { onClose: e, channelId: n } = t,
        [s, r] = l.useState(!1),
        a = l.useCallback(() => {
            (0, h.openUserSettings)(m.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING), e();
        }, [e]),
        o = l.useCallback(() => {
            s ||
                (r(!0),
                (0, j.XR)(n)
                    .then(() => {
                        e(), (0, C.r)({ text: U.intl.string(U.t.FhgVWi), id: "safety-tools-report-false-positive" });
                    })
                    .catch(() => {
                        r(!1), (0, _.P0)((0, A.o)(U.intl.string(U.t.R0RpRX), E.Ck.FAILURE));
                    }));
        }, [n, e, s]);
    return (0, i.jsxs)(I, {
        style: N.T1,
        children: [
            (0, i.jsx)(x.E, {
                variant: "text-md/normal",
                color: "text-default",
                children: U.intl.format(U.t["njJ/Cg"], { learnMoreLink: b.A.getArticleURL(F.MVz.SAFETY_ALERTS) }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(O.$, { onClick: a, fullWidth: !0, text: U.intl.string(U.t.qpWnyC) }),
                    (0, i.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: N._B,
                        children: U.intl.format(U.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, i.jsx)(g.D, { className: N.l_, tag: "span", onClick: o, children: t }, e),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var y = n(17928),
    Y = n(661531),
    f = n(320448),
    v = n(192308),
    P = n(717398),
    M = n(975807),
    W = n(928658),
    B = n(426190),
    D = n(381689),
    w = n(994500),
    z = n(192311),
    K = n(674272),
    G = n(327337),
    V = n(431804),
    q = n(94013);
function X(t) {
    let { children: e } = t;
    return (0, i.jsx)("div", { className: q.mH, children: e });
}
function Z(t) {
    let { title: e, subTitle: n, buttonText: s, variant: l = "secondary", onPress: r, disabled: a } = t;
    return (0, i.jsxs)("div", {
        className: q.$l,
        children: [
            (0, i.jsxs)("div", {
                className: q.zk,
                children: [
                    (0, i.jsx)(x.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    (0, i.jsx)(x.E, { variant: "text-xs/medium", color: "text-default", children: n }),
                ],
            }),
            (0, i.jsx)(O.$, { size: "sm", variant: l, text: s, onClick: r, disabled: a }),
        ],
    });
}
function H(t) {
    let { title: e, subTitle: n, onPress: s } = t;
    return (0, i.jsxs)(g.D, {
        className: R()(q.$l, q.lx),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: q.zk,
                children: [
                    (0, i.jsx)(x.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    null != n
                        ? (0, i.jsx)(x.E, { variant: "text-xs/medium", color: "text-default", children: n })
                        : null,
                ],
            }),
            (0, i.jsx)(f._, { size: "md", color: Y.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        ],
    });
}
let J = function (t) {
    let { otherUserId: e, channelId: s, warningId: r, warningType: a, transitionToSlide: o } = t,
        T = (0, B.N)(),
        c = (0, B.z)(),
        S = (0, z.W)(s),
        _ = null != (0, d.e)(s),
        A = (0, y.bG)([w.A], () => w.A.isIgnored(e), [e]),
        E = (0, y.bG)([w.A], () => w.A.isBlocked(e), [e]),
        x = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: s, warningId: r, senderId: e, warningType: a, cta: t, isNudgeWarning: _ });
            },
            [s, r, e, a, _],
        ),
        O = l.useCallback(() => {
            (0, v.closeModal)(G.V), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [x]),
        g = l.useCallback(() => {
            P.A.unblockUser(e, { location: G.Ht }), x(u.Wm.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, x]),
        m = l.useCallback(() => {
            (0, v.closeModal)(G.V), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [x]),
        h = l.useMemo(
            () => [
                {
                    type: 0,
                    title: U.intl.string(U.t.B7ZT06),
                    subTitle: U.intl.string(U.t.fCfp49),
                    buttonText: A ? U.intl.string(U.t["9e0wLn"]) : U.intl.string(U.t.B7ZT06),
                    disabled: E,
                    onPress: () => {
                        A
                            ? (P.A.unignoreUser(e, G.cb, s), x(u.Wm.USER_SAFETY_TOOLS_UNIGNORE))
                            : (P.A.ignoreUser(e, G.cb, s), x(u.Wm.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: U.intl.string(U.t.oDxaKy),
                    subTitle: U.intl.string(U.t.Lj37az),
                    buttonText: E ? U.intl.string(U.t.Hro40y) : U.intl.string(U.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        E
                            ? (g(), D.A.showUnblockSuccessToast(e, s))
                            : (0, v.openModalLazy)(async () => {
                                  let { default: t } = await n.e("84938").then(n.bind(n, 371185));
                                  return (n) => {
                                      let { transitionState: l, onClose: r } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: l,
                                          onBlock: O,
                                          onBlockAndReport: m,
                                          onCancel: () => {
                                              r?.(), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: r,
                                          userId: e,
                                          channelId: s,
                                      });
                                  };
                              });
                    },
                },
                {
                    type: 0,
                    title: U.intl.string(U.t.X27yhD),
                    subTitle: U.intl.string(U.t["0tydOa"]),
                    buttonText: U.intl.string(U.t.X27yhD),
                    onPress: () => {
                        (0, v.closeModal)(G.V), (0, W.jJ)(S), x(u.Wm.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [A, E, x, g, O, m, e, s, S],
        ),
        b = l.useMemo(() => {
            let t = {
                    title: U.intl.string(U.t.ZSbbMJ),
                    subTitle: U.intl.string(U.t.iNcsrW),
                    buttonText: U.intl.string(U.t.rK4Gqv),
                    onPress: () => {
                        (0, M.A)(G.x7), x(u.Wm.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: U.intl.string(U.t.ZSbbMJ),
                    subTitle: U.intl.string(U.t.g5uwC5),
                    buttonText: U.intl.string(U.t.rK4Gqv),
                    onPress: () => {
                        (0, M.A)(G.jR), x(u.Wm.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: U.intl.string(U.t.ZSbbMJ),
                    subTitle: U.intl.string(U.t.S9O1ZZ),
                    buttonText: U.intl.string(U.t.rK4Gqv),
                    onPress: () => {
                        (0, M.A)(G.CL), x(u.Wm.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: U.intl.string(U.t.syuaPI),
                    subTitle: U.intl.string(U.t.LLBnNk),
                    buttonText: U.intl.string(U.t.rzvzyZ),
                    onPress: () => {
                        (0, K.A)({ source: V.y.KEYBIND, onClose: v.closeAllModals }),
                            x(u.Wm.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: U.intl.string(U.t["7LgVmt"]),
                    subTitle: U.intl.string(U.t.pwoRjc),
                    onPress: () => {
                        o(te.SAFETY_TIPS), x(u.Wm.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    },
                },
                { type: 0, ...(T ? t : c ? n : e) },
            ];
        }, [T, c, o, x]),
        j = l.useMemo(
            () => [
                {
                    type: 1,
                    title: U.intl.string(U.t.otdt24),
                    onPress: () => {
                        o(te.ABOUT_SAFETY_ALERTS), x(u.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    },
                },
            ],
            [o, x],
        ),
        C = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: s, buttonText: l, onPress: r, disabled: a, variant: o } = t;
                return (0, i.jsx)(
                    Z,
                    { type: e, title: n, subTitle: s, buttonText: l, variant: o, onPress: r, disabled: a },
                    n,
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: s, onPress: l } = t;
                return (0, i.jsx)(H, { type: e, title: n, subTitle: s, onPress: l }, n);
            }
            return null;
        };
    return (0, i.jsxs)(I, {
        children: [
            (0, i.jsx)(X, { children: h.map((t) => C(t)) }),
            (0, i.jsx)(X, { children: b.map((t) => C(t)) }),
            (0, i.jsx)(X, { children: j.map((t) => C(t)) }),
        ],
    });
};
var $ = n(889229);
let Q = function () {
    let t = (0, G.RU)();
    return (0, i.jsx)(I, { children: (0, i.jsx)($.A, { tips: t, headerText: U.intl.string(U.t["0QSL1C"]) }) });
};
var tt = n(837248),
    te =
        (((s = {}).ACTIONS = "ACTIONS"),
        (s.SAFETY_TIPS = "SAFETY_TIPS"),
        (s.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        s);
let tn = (t) => {
    let { onClose: e, channelId: n, warningId: s, warningType: _, otherUserId: A, transitionState: E } = t,
        x = null != (0, d.e)(n),
        [O, g] = l.useState("ACTIONS"),
        m = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: n, warningId: s, warningType: _, senderId: A, cta: t, isNudgeWarning: x });
            },
            [n, s, _, A, x],
        ),
        h = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, i.jsx)(r.Q, { onClick: n, text: e, variant: "secondary", textVariant: "text-sm/normal" });
        }, []),
        b = l.useCallback(() => {
            switch (O) {
                case "SAFETY_TIPS":
                case "ABOUT_SAFETY_ALERTS":
                    return (0, i.jsx)(h, { text: U.intl.string(U.t["13/7kX"]), onClick: () => g("ACTIONS") });
                default:
                    return null;
            }
        }, [O, h]),
        j = l.useCallback(() => {
            switch (O) {
                case "SAFETY_TIPS":
                    return U.intl.string(U.t.EtNxi6);
                case "ABOUT_SAFETY_ALERTS":
                    return U.intl.string(U.t.qI14KM);
                default:
                    return U.intl.string(U.t.MAhAp6);
            }
        }, [O]),
        C = l.useCallback(
            (t) => {
                g(t);
            },
            [g],
        );
    return (0, i.jsxs)(a.EO, {
        "data-migration-pending": !0,
        transitionState: E,
        "aria-label": U.intl.string(U.t.eXlt01),
        size: a.rI.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, i.jsx)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: tt.H,
                justify: S.A.Justify.CENTER,
                children: (0, i.jsx)(o.D, { variant: "heading-xl/semibold", children: j() }),
            }),
            (0, i.jsx)(T.Ip, {
                children: (0, i.jsxs)(c.t, {
                    activeSlide: O,
                    width: 440,
                    children: [
                        (0, i.jsx)(c.q, {
                            id: "ACTIONS",
                            children: (0, i.jsx)(J, {
                                otherUserId: A,
                                channelId: n,
                                warningId: s,
                                warningType: _,
                                transitionToSlide: C,
                            }),
                        }),
                        (0, i.jsx)(c.q, {
                            id: "ABOUT_SAFETY_ALERTS",
                            children: (0, i.jsx)(k, {
                                channelId: n,
                                onClose: () => {
                                    e(), m(u.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                },
                            }),
                        }),
                        (0, i.jsx)(c.q, { id: "SAFETY_TIPS", children: (0, i.jsx)(Q, {}) }),
                    ],
                }),
            }),
            (0, i.jsxs)(a.jl, {
                "data-migration-pending": !0,
                justify: S.A.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(h, {
                        text: U.intl.string(U.t.cpT0Cq),
                        onClick: () => {
                            e(), m(u.Wm.USER_SAFETY_TOOLS_DISMISS);
                        },
                    }),
                    b(),
                ],
            }),
        ],
    });
};
