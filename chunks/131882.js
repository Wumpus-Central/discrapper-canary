n.d(e, { W: () => te, default: () => tn });
var s,
    i = n(627968),
    l = n(64700),
    r = n(123292),
    a = n(935462),
    o = n(534514),
    c = n(364522),
    d = n(430690),
    T = n(235986),
    S = n(278941),
    u = n(665909),
    _ = n(691540),
    A = n(857250),
    x = n(97483),
    E = n(834730),
    m = n(821609),
    g = n(939249),
    h = n(780964),
    O = n(858897),
    j = n(975571),
    b = n(544231),
    C = n(633387),
    L = n(503698),
    p = n.n(L),
    R = n(169636);
let N = function (t) {
    let { children: e, style: n } = t;
    return (0, i.jsx)(a.$m, { "data-migration-pending": !0, className: p()(R.j, n), children: e });
};
var I = n(652215),
    F = n(985018),
    U = n(425020);
let v = function (t) {
    let { onClose: e, channelId: n } = t,
        [s, r] = l.useState(!1),
        a = l.useCallback(() => {
            (0, O.openUserSettings)(h.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING), e();
        }, [e]),
        o = l.useCallback(() => {
            s ||
                (r(!0),
                (0, b.XR)(n)
                    .then(() => {
                        e(), (0, C.r)({ text: F.intl.string(F.t.FhgVWi), id: "safety-tools-report-false-positive" });
                    })
                    .catch(() => {
                        r(!1), (0, _.P0)((0, A.o)(F.intl.string(F.t.R0RpRX), x.Ck.FAILURE));
                    }));
        }, [n, e, s]);
    return (0, i.jsxs)(N, {
        style: U.T1,
        children: [
            (0, i.jsx)(E.E, {
                variant: "text-md/normal",
                color: "text-default",
                children: F.intl.format(F.t["njJ/Cg"], { learnMoreLink: j.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(m.$, { onClick: a, fullWidth: !0, text: F.intl.string(F.t.qpWnyC) }),
                    (0, i.jsx)(E.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: U._B,
                        children: F.intl.format(F.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, i.jsx)(g.D, { className: U.l_, tag: "span", onClick: o, children: t }, e),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var y = n(17928),
    k = n(661531),
    Y = n(320448),
    f = n(192308),
    M = n(49229),
    P = n(975807),
    W = n(928658),
    B = n(426190),
    D = n(381689),
    w = n(994500),
    K = n(192311),
    z = n(674272),
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
                    (0, i.jsx)(E.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    (0, i.jsx)(E.E, { variant: "text-xs/medium", color: "text-default", children: n }),
                ],
            }),
            (0, i.jsx)(m.$, { size: "sm", variant: l, text: s, onClick: r, disabled: a }),
        ],
    });
}
function $(t) {
    let { title: e, subTitle: n, onPress: s } = t;
    return (0, i.jsxs)(g.D, {
        className: p()(q.$l, q.lx),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: q.zk,
                children: [
                    (0, i.jsx)(E.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    null != n
                        ? (0, i.jsx)(E.E, { variant: "text-xs/medium", color: "text-default", children: n })
                        : null,
                ],
            }),
            (0, i.jsx)(Y._, { size: "md", color: k.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        ],
    });
}
let H = function (t) {
    let { otherUserId: e, channelId: s, warningId: r, warningType: a, transitionToSlide: o } = t,
        c = (0, B.N)(),
        d = (0, B.z)(),
        T = (0, K.W)(s),
        _ = null != (0, S.e)(s),
        A = (0, y.bG)([w.A], () => w.A.isIgnored(e), [e]),
        x = (0, y.bG)([w.A], () => w.A.isBlocked(e), [e]),
        E = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: s, warningId: r, senderId: e, warningType: a, cta: t, isNudgeWarning: _ });
            },
            [s, r, e, a, _],
        ),
        m = l.useCallback(() => {
            (0, f.closeModal)(G.V), E(u.Wm.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [E]),
        g = l.useCallback(() => {
            M.A.unblockUser(e, { location: G.Ht }), E(u.Wm.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, E]),
        h = l.useCallback(() => {
            (0, f.closeModal)(G.V), E(u.Wm.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [E]),
        O = l.useMemo(
            () => [
                {
                    type: 0,
                    title: F.intl.string(F.t.B7ZT06),
                    subTitle: F.intl.string(F.t.fCfp49),
                    buttonText: A ? F.intl.string(F.t["9e0wLn"]) : F.intl.string(F.t.B7ZT06),
                    disabled: x,
                    onPress: () => {
                        A
                            ? (M.A.unignoreUser(e, G.cb, s), E(u.Wm.USER_SAFETY_TOOLS_UNIGNORE))
                            : (M.A.ignoreUser(e, G.cb, s), E(u.Wm.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: F.intl.string(F.t.oDxaKy),
                    subTitle: F.intl.string(F.t.Lj37az),
                    buttonText: x ? F.intl.string(F.t.Hro40y) : F.intl.string(F.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        x
                            ? (g(), D.A.showUnblockSuccessToast(e, s))
                            : (0, f.openModalLazy)(async () => {
                                  let { default: t } = await n.e("62557").then(n.bind(n, 371185));
                                  return (n) => {
                                      let { transitionState: l, onClose: r } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: l,
                                          onBlock: m,
                                          onBlockAndReport: h,
                                          onCancel: () => {
                                              r?.(), E(u.Wm.USER_SAFETY_TOOLS_BLOCK_CANCEL);
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
                    title: F.intl.string(F.t.X27yhD),
                    subTitle: F.intl.string(F.t["0tydOa"]),
                    buttonText: F.intl.string(F.t.X27yhD),
                    onPress: () => {
                        (0, f.closeModal)(G.V), (0, W.jJ)(T), E(u.Wm.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [A, x, E, g, m, h, e, s, T],
        ),
        j = l.useMemo(() => {
            let t = {
                    title: F.intl.string(F.t.ZSbbMJ),
                    subTitle: F.intl.string(F.t.iNcsrW),
                    buttonText: F.intl.string(F.t.rK4Gqv),
                    onPress: () => {
                        (0, P.A)(G.x7), E(u.Wm.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: F.intl.string(F.t.ZSbbMJ),
                    subTitle: F.intl.string(F.t.g5uwC5),
                    buttonText: F.intl.string(F.t.rK4Gqv),
                    onPress: () => {
                        (0, P.A)(G.jR), E(u.Wm.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: F.intl.string(F.t.ZSbbMJ),
                    subTitle: F.intl.string(F.t.S9O1ZZ),
                    buttonText: F.intl.string(F.t.rK4Gqv),
                    onPress: () => {
                        (0, P.A)(G.CL), E(u.Wm.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: F.intl.string(F.t.syuaPI),
                    subTitle: F.intl.string(F.t.LLBnNk),
                    buttonText: F.intl.string(F.t.rzvzyZ),
                    onPress: () => {
                        (0, z.A)({ source: V.y.KEYBIND, onClose: f.closeAllModals }),
                            E(u.Wm.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: F.intl.string(F.t["7LgVmt"]),
                    subTitle: F.intl.string(F.t.pwoRjc),
                    onPress: () => {
                        o(te.SAFETY_TIPS), E(u.Wm.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    },
                },
                { type: 0, ...(c ? t : d ? n : e) },
            ];
        }, [c, d, o, E]),
        b = l.useMemo(
            () => [
                {
                    type: 1,
                    title: F.intl.string(F.t.otdt24),
                    onPress: () => {
                        o(te.ABOUT_SAFETY_ALERTS), E(u.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    },
                },
            ],
            [o, E],
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
                return (0, i.jsx)($, { type: e, title: n, subTitle: s, onPress: l }, n);
            }
            return null;
        };
    return (0, i.jsxs)(N, {
        children: [
            (0, i.jsx)(X, { children: O.map((t) => C(t)) }),
            (0, i.jsx)(X, { children: j.map((t) => C(t)) }),
            (0, i.jsx)(X, { children: b.map((t) => C(t)) }),
        ],
    });
};
var J = n(889229);
let Q = function () {
    let t = (0, G.RU)();
    return (0, i.jsx)(N, { children: (0, i.jsx)(J.A, { tips: t, headerText: F.intl.string(F.t["0QSL1C"]) }) });
};
var tt = n(837248),
    te =
        (((s = {}).ACTIONS = "ACTIONS"),
        (s.SAFETY_TIPS = "SAFETY_TIPS"),
        (s.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        s);
let tn = (t) => {
    let { onClose: e, channelId: n, warningId: s, warningType: _, otherUserId: A, transitionState: x } = t,
        E = null != (0, S.e)(n),
        [m, g] = l.useState("ACTIONS"),
        h = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: n, warningId: s, warningType: _, senderId: A, cta: t, isNudgeWarning: E });
            },
            [n, s, _, A, E],
        ),
        O = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, i.jsx)(r.Q, { onClick: n, text: e, variant: "secondary", textVariant: "text-sm/normal" });
        }, []),
        j = l.useCallback(() => {
            switch (m) {
                case "SAFETY_TIPS":
                case "ABOUT_SAFETY_ALERTS":
                    return (0, i.jsx)(O, { text: F.intl.string(F.t["13/7kX"]), onClick: () => g("ACTIONS") });
                default:
                    return null;
            }
        }, [m, O]),
        b = l.useCallback(() => {
            switch (m) {
                case "SAFETY_TIPS":
                    return F.intl.string(F.t.EtNxi6);
                case "ABOUT_SAFETY_ALERTS":
                    return F.intl.string(F.t.qI14KM);
                default:
                    return F.intl.string(F.t.MAhAp6);
            }
        }, [m]),
        C = l.useCallback(
            (t) => {
                g(t);
            },
            [g],
        );
    return (0, i.jsxs)(a.EO, {
        "data-migration-pending": !0,
        transitionState: x,
        "aria-label": F.intl.string(F.t.eXlt01),
        size: a.rI.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, i.jsx)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: tt.H,
                justify: T.A.Justify.CENTER,
                children: (0, i.jsx)(o.D, { variant: "heading-xl/semibold", children: b() }),
            }),
            (0, i.jsx)(c.Ip, {
                children: (0, i.jsxs)(d.t, {
                    activeSlide: m,
                    width: 440,
                    children: [
                        (0, i.jsx)(d.q, {
                            id: "ACTIONS",
                            children: (0, i.jsx)(H, {
                                otherUserId: A,
                                channelId: n,
                                warningId: s,
                                warningType: _,
                                transitionToSlide: C,
                            }),
                        }),
                        (0, i.jsx)(d.q, {
                            id: "ABOUT_SAFETY_ALERTS",
                            children: (0, i.jsx)(v, {
                                channelId: n,
                                onClose: () => {
                                    e(), h(u.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                },
                            }),
                        }),
                        (0, i.jsx)(d.q, { id: "SAFETY_TIPS", children: (0, i.jsx)(Q, {}) }),
                    ],
                }),
            }),
            (0, i.jsxs)(a.jl, {
                "data-migration-pending": !0,
                justify: T.A.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(O, {
                        text: F.intl.string(F.t.cpT0Cq),
                        onClick: () => {
                            e(), h(u.Wm.USER_SAFETY_TOOLS_DISMISS);
                        },
                    }),
                    j(),
                ],
            }),
        ],
    });
};
