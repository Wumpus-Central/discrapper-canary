n.d(e, { default: () => tt });
var i,
    s = n(477900),
    l = n(582128),
    r = n(935462),
    a = n(123292),
    o = n(534514),
    T = n(95362),
    c = n(430690),
    S = n(235986),
    d = n(278941),
    u = n(665909),
    _ = n(858899),
    E = n(834730),
    A = n(821609),
    x = n(939249),
    m = n(780964),
    O = n(766075),
    g = n(975571),
    b = n(544231),
    h = n(110168),
    j = n(503698),
    C = n.n(j),
    R = n(524785);
let L = function (t) {
    let { children: e, style: n } = t;
    return (0, s.jsx)(r.$m, { "data-migration-pending": !0, className: C()(R.j, n), children: e });
};
var p = n(652215),
    I = n(792996),
    y = n(367699);
let F = function (t) {
    let { onClose: e, channelId: n } = t,
        [i, r] = l.useState(!1),
        a = l.useCallback(() => {
            ((0, O.openUserSettings)(m.X.DM_SAFETY_ALERTS_SETTING), e());
        }, [e]),
        o = l.useCallback(() => {
            i ||
                (r(!0),
                (0, b.XR)(n)
                    .then(() => {
                        (e(), (0, h.r)({ text: I.intl.string(I.t.FhgVWi), id: "safety-tools-report-false-positive" }));
                    })
                    .catch(() => {
                        (r(!1), (0, _.P0)({ text: I.intl.string(I.t.R0RpRX), variant: "critical" }));
                    }));
        }, [n, e, i]);
    return (0, s.jsxs)(L, {
        style: y.T1,
        children: [
            (0, s.jsx)(E.E, {
                variant: "body-md/normal",
                color: "text-default",
                children: I.intl.format(I.t["njJ/Cg"], { learnMoreLink: g.A.getArticleURL(p.MVz.SAFETY_ALERTS) }),
            }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(A.$, { onClick: a, fullWidth: !0, text: I.intl.string(I.t.qpWnyC) }),
                    (0, s.jsx)(E.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: y._B,
                        children: I.intl.format(I.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, s.jsx)(x.D, { className: y.l_, tag: "span", onClick: o, children: t }, e),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var U = n(855986),
    N = n(646514),
    Y = n(320448),
    k = n(192308),
    v = n(49229),
    f = n(975807),
    P = n(928658),
    B = n(426190),
    W = n(662502),
    M = n(994500),
    D = n(192311),
    w = n(674272),
    K = n(327337),
    z = n(431804),
    G =
        (((i = {}).ACTIONS = "ACTIONS"),
        (i.SAFETY_TIPS = "SAFETY_TIPS"),
        (i.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        i),
    V = n(514646);
function q(t) {
    let { children: e } = t;
    return (0, s.jsx)("div", { className: V.mH, children: e });
}
function X(t) {
    let { title: e, subTitle: n, buttonText: i, variant: l = "secondary", onPress: r, disabled: a } = t;
    return (0, s.jsxs)("div", {
        className: V.$l,
        children: [
            (0, s.jsxs)("div", {
                className: V.zk,
                children: [
                    (0, s.jsx)(E.E, { variant: "body-md/semibold", color: "text-strong", children: e }),
                    (0, s.jsx)(E.E, { variant: "body-xs/medium", color: "text-default", children: n }),
                ],
            }),
            (0, s.jsx)(A.$, { size: "sm", variant: l, text: i, onClick: r, disabled: a }),
        ],
    });
}
function Z(t) {
    let { title: e, subTitle: n, onPress: i } = t;
    return (0, s.jsxs)(x.D, {
        className: C()(V.$l, V.lx),
        onClick: i,
        children: [
            (0, s.jsxs)("div", {
                className: V.zk,
                children: [
                    (0, s.jsx)(E.E, { variant: "body-md/semibold", color: "text-strong", children: e }),
                    null != n
                        ? (0, s.jsx)(E.E, { variant: "body-xs/medium", color: "text-default", children: n })
                        : null,
                ],
            }),
            (0, s.jsx)(Y.ChevronSmallRightIcon, { size: "md", color: N.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        ],
    });
}
let H = function (t) {
    let { otherUserId: e, channelId: i, warningId: r, warningType: a, transitionToSlide: o } = t,
        T = (0, B.N)(),
        c = (0, B.z)(),
        S = (0, D.W)(i),
        _ = null != (0, d.e)(i),
        E = (0, U.bG)([M.A], () => M.A.isIgnored(e), [e]),
        A = (0, U.bG)([M.A], () => M.A.isBlocked(e), [e]),
        x = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: i, warningId: r, senderId: e, warningType: a, cta: t, isNudgeWarning: _ });
            },
            [i, r, e, a, _],
        ),
        m = l.useCallback(() => {
            ((0, k.Oo)(K.V), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_CONFIRM));
        }, [x]),
        O = l.useCallback(() => {
            (v.A.unblockUser(e, { location: K.Ht }, i), x(u.Wm.USER_SAFETY_TOOLS_UNBLOCK));
        }, [e, i, x]),
        g = l.useCallback(() => {
            ((0, k.Oo)(K.V), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM));
        }, [x]),
        b = l.useMemo(
            () => [
                {
                    type: 0,
                    title: I.intl.string(I.t.B7ZT06),
                    subTitle: I.intl.string(I.t.fCfp49),
                    buttonText: E ? I.intl.string(I.t["9e0wLn"]) : I.intl.string(I.t.B7ZT06),
                    disabled: A,
                    onPress: () => {
                        E
                            ? (v.A.unignoreUser(e, K.cb, i), x(u.Wm.USER_SAFETY_TOOLS_UNIGNORE))
                            : (v.A.ignoreUser(e, K.cb, i), x(u.Wm.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: I.intl.string(I.t.oDxaKy),
                    subTitle: I.intl.string(I.t.Lj37az),
                    buttonText: A ? I.intl.string(I.t.Hro40y) : I.intl.string(I.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        A
                            ? (O(), W.A.showUnblockSuccessToast(e, i))
                            : (0, k.mM)(async () => {
                                  let { default: t } = await n.e(784938).then(n.bind(n, 371185));
                                  return (n) => {
                                      let { transitionState: l, onClose: r } = n;
                                      return (0, s.jsx)(t, {
                                          transitionState: l,
                                          onBlock: m,
                                          onBlockAndReport: g,
                                          onCancel: () => {
                                              (r?.(), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_CANCEL));
                                          },
                                          onClose: r,
                                          userId: e,
                                          channelId: i,
                                      });
                                  };
                              });
                    },
                },
                {
                    type: 0,
                    title: I.intl.string(I.t.X27yhD),
                    subTitle: I.intl.string(I.t["0tydOa"]),
                    buttonText: I.intl.string(I.t.X27yhD),
                    onPress: () => {
                        ((0, k.Oo)(K.V), (0, P.jJ)(S), x(u.Wm.USER_SAFETY_TOOLS_REPORT));
                    },
                },
            ],
            [E, A, x, O, m, g, e, i, S],
        ),
        h = l.useMemo(() => {
            let t = {
                    title: I.intl.string(I.t.ZSbbMJ),
                    subTitle: I.intl.string(I.t.iNcsrW),
                    buttonText: I.intl.string(I.t.rK4Gqv),
                    onPress: () => {
                        ((0, f.A)(K.x7), x(u.Wm.USER_SAFETY_TOOLS_CTL));
                    },
                },
                e = {
                    title: I.intl.string(I.t.ZSbbMJ),
                    subTitle: I.intl.string(I.t.g5uwC5),
                    buttonText: I.intl.string(I.t.rK4Gqv),
                    onPress: () => {
                        ((0, f.A)(K.jR), x(u.Wm.USER_SAFETY_TOOLS_NO_FILTR));
                    },
                },
                n = {
                    title: I.intl.string(I.t.ZSbbMJ),
                    subTitle: I.intl.string(I.t.S9O1ZZ),
                    buttonText: I.intl.string(I.t.rK4Gqv),
                    onPress: () => {
                        ((0, f.A)(K.CL), x(u.Wm.USER_SAFETY_TOOLS_THROUGHLINE));
                    },
                };
            return [
                {
                    type: 0,
                    title: I.intl.string(I.t.syuaPI),
                    subTitle: I.intl.string(I.t.LLBnNk),
                    buttonText: I.intl.string(I.t.rzvzyZ),
                    onPress: () => {
                        ((0, w.A)({ source: z.y.KEYBIND, onClose: k.s7 }), x(u.Wm.USER_SAFETY_TOOLS_VIBING_WUMPUS));
                    },
                },
                {
                    type: 1,
                    title: I.intl.string(I.t["7LgVmt"]),
                    subTitle: I.intl.string(I.t.pwoRjc),
                    onPress: () => {
                        (o(G.SAFETY_TIPS), x(u.Wm.USER_SAFETY_TOOLS_SAFETY_TIPS));
                    },
                },
                { type: 0, ...(T ? t : c ? n : e) },
            ];
        }, [T, c, o, x]),
        j = l.useMemo(
            () => [
                {
                    type: 1,
                    title: I.intl.string(I.t.otdt24),
                    onPress: () => {
                        (o(G.ABOUT_SAFETY_ALERTS), x(u.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS));
                    },
                },
            ],
            [o, x],
        );
    function C(t) {
        switch (t.type) {
            case 0: {
                let { type: e, title: n, subTitle: i, buttonText: l, onPress: r, disabled: a, variant: o } = t;
                return (0, s.jsx)(
                    X,
                    { type: e, title: n, subTitle: i, buttonText: l, variant: o, onPress: r, disabled: a },
                    n,
                );
            }
            case 1: {
                let { type: e, title: n, subTitle: i, onPress: l } = t;
                return (0, s.jsx)(Z, { type: e, title: n, subTitle: i, onPress: l }, n);
            }
            default:
                return (t.type, null);
        }
    }
    return (0, s.jsxs)(L, {
        children: [
            (0, s.jsx)(q, { children: b.map((t) => C(t)) }),
            (0, s.jsx)(q, { children: h.map((t) => C(t)) }),
            (0, s.jsx)(q, { children: j.map((t) => C(t)) }),
        ],
    });
};
var J = n(889229);
let $ = function () {
    let t = (0, K.RU)();
    return (0, s.jsx)(L, { children: (0, s.jsx)(J.A, { tips: t, headerText: I.intl.string(I.t["0QSL1C"]) }) });
};
var Q = n(102097);
let tt = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: _, otherUserId: E, transitionState: A } = t,
        x = null != (0, d.e)(n),
        [m, O] = l.useState(G.ACTIONS),
        g = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: n, warningId: i, warningType: _, senderId: E, cta: t, isNudgeWarning: x });
            },
            [n, i, _, E, x],
        ),
        b = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, s.jsx)(a.Q, { onClick: n, text: e, variant: "secondary", textVariant: "body-sm/normal" });
        }, []),
        h = l.useCallback(() => {
            switch (m) {
                case G.SAFETY_TIPS:
                case G.ABOUT_SAFETY_ALERTS:
                    return (0, s.jsx)(b, { text: I.intl.string(I.t["13/7kX"]), onClick: () => O(G.ACTIONS) });
                default:
                    return null;
            }
        }, [m, b]),
        j = l.useCallback(() => {
            switch (m) {
                case G.SAFETY_TIPS:
                    return I.intl.string(I.t.EtNxi6);
                case G.ABOUT_SAFETY_ALERTS:
                    return I.intl.string(I.t.qI14KM);
                default:
                    return I.intl.string(I.t.MAhAp6);
            }
        }, [m]),
        C = l.useCallback(
            (t) => {
                O(t);
            },
            [O],
        );
    return (0, s.jsxs)(r.EO, {
        "data-migration-pending": !0,
        transitionState: A,
        "aria-label": I.intl.string(I.t.eXlt01),
        size: r.rI.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, s.jsx)(r.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: Q.H,
                justify: S.A.Justify.CENTER,
                children: (0, s.jsx)(o.D, { variant: "heading-xl/semibold", children: j() }),
            }),
            (0, s.jsx)(T.Ip, {
                children: (0, s.jsxs)(c.t, {
                    activeSlide: m,
                    width: 440,
                    children: [
                        (0, s.jsx)(c.q, {
                            id: G.ACTIONS,
                            children: (0, s.jsx)(H, {
                                otherUserId: E,
                                channelId: n,
                                warningId: i,
                                warningType: _,
                                transitionToSlide: C,
                            }),
                        }),
                        (0, s.jsx)(c.q, {
                            id: G.ABOUT_SAFETY_ALERTS,
                            children: (0, s.jsx)(F, {
                                channelId: n,
                                onClose: () => {
                                    (e(), g(u.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS));
                                },
                            }),
                        }),
                        (0, s.jsx)(c.q, { id: G.SAFETY_TIPS, children: (0, s.jsx)($, {}) }),
                    ],
                }),
            }),
            (0, s.jsxs)(r.jl, {
                "data-migration-pending": !0,
                justify: S.A.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(b, {
                        text: I.intl.string(I.t.cpT0Cq),
                        onClick: () => {
                            (e(), g(u.Wm.USER_SAFETY_TOOLS_DISMISS));
                        },
                    }),
                    h(),
                ],
            }),
        ],
    });
};
