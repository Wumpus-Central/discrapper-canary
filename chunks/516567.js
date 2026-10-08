n.d(e, { default: () => tt });
var s,
    i = n(477900),
    l = n(582128),
    r = n(935462),
    a = n(123292),
    o = n(297264),
    T = n(364522),
    c = n(430690),
    S = n(235986),
    d = n(278941),
    u = n(665909),
    _ = n(376357),
    A = n(834730),
    E = n(821609),
    x = n(939249),
    g = n(780964),
    m = n(766075),
    O = n(975571),
    h = n(544231),
    b = n(110168),
    j = n(503698),
    C = n.n(j),
    L = n(524785);
let R = function (t) {
    let { children: e, style: n } = t;
    return (0, i.jsx)(r.$m, { "data-migration-pending": !0, className: C()(L.j, n), children: e });
};
var p = n(652215),
    I = n(660183),
    F = n(367699);
let U = function (t) {
    let { onClose: e, channelId: n } = t,
        [s, r] = l.useState(!1),
        a = l.useCallback(() => {
            ((0, m.openUserSettings)(g.X.DM_SAFETY_ALERTS_SETTING), e());
        }, [e]),
        o = l.useCallback(() => {
            s ||
                (r(!0),
                (0, h.XR)(n)
                    .then(() => {
                        (e(), (0, b.r)({ text: I.intl.string(I.t.FhgVWi), id: "safety-tools-report-false-positive" }));
                    })
                    .catch(() => {
                        (r(!1), (0, _.P0)((0, _.ox)(I.intl.string(I.t.R0RpRX), _.Ck.FAILURE)));
                    }));
        }, [n, e, s]);
    return (0, i.jsxs)(R, {
        style: F.T1,
        children: [
            (0, i.jsx)(A.E, {
                variant: "text-md/normal",
                color: "text-default",
                children: I.intl.format(I.t["njJ/Cg"], { learnMoreLink: O.A.getArticleURL(p.MVz.SAFETY_ALERTS) }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(E.$, { onClick: a, fullWidth: !0, text: I.intl.string(I.t.qpWnyC) }),
                    (0, i.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: F._B,
                        children: I.intl.format(I.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, i.jsx)(x.D, { className: F.l_, tag: "span", onClick: o, children: t }, e),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var k = n(17928),
    y = n(661531),
    N = n(320448),
    Y = n(192308),
    f = n(49229),
    v = n(975807),
    P = n(928658),
    M = n(426190),
    B = n(381689),
    W = n(994500),
    D = n(192311),
    w = n(674272),
    z = n(327337),
    K = n(431804),
    G =
        (((s = {}).ACTIONS = "ACTIONS"),
        (s.SAFETY_TIPS = "SAFETY_TIPS"),
        (s.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        s),
    V = n(514646);
function q(t) {
    let { children: e } = t;
    return (0, i.jsx)("div", { className: V.mH, children: e });
}
function X(t) {
    let { title: e, subTitle: n, buttonText: s, variant: l = "secondary", onPress: r, disabled: a } = t;
    return (0, i.jsxs)("div", {
        className: V.$l,
        children: [
            (0, i.jsxs)("div", {
                className: V.zk,
                children: [
                    (0, i.jsx)(A.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-default", children: n }),
                ],
            }),
            (0, i.jsx)(E.$, { size: "sm", variant: l, text: s, onClick: r, disabled: a }),
        ],
    });
}
function Z(t) {
    let { title: e, subTitle: n, onPress: s } = t;
    return (0, i.jsxs)(x.D, {
        className: C()(V.$l, V.lx),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: V.zk,
                children: [
                    (0, i.jsx)(A.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    null != n
                        ? (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-default", children: n })
                        : null,
                ],
            }),
            (0, i.jsx)(N._, { size: "md", color: y.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        ],
    });
}
let H = function (t) {
    let { otherUserId: e, channelId: s, warningId: r, warningType: a, transitionToSlide: o } = t,
        T = (0, M.N)(),
        c = (0, M.z)(),
        S = (0, D.W)(s),
        _ = null != (0, d.e)(s),
        A = (0, k.bG)([W.A], () => W.A.isIgnored(e), [e]),
        E = (0, k.bG)([W.A], () => W.A.isBlocked(e), [e]),
        x = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: s, warningId: r, senderId: e, warningType: a, cta: t, isNudgeWarning: _ });
            },
            [s, r, e, a, _],
        ),
        g = l.useCallback(() => {
            ((0, Y.closeModal)(z.V), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_CONFIRM));
        }, [x]),
        m = l.useCallback(() => {
            (f.A.unblockUser(e, { location: z.Ht }), x(u.Wm.USER_SAFETY_TOOLS_UNBLOCK));
        }, [e, x]),
        O = l.useCallback(() => {
            ((0, Y.closeModal)(z.V), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM));
        }, [x]),
        h = l.useMemo(
            () => [
                {
                    type: 0,
                    title: I.intl.string(I.t.B7ZT06),
                    subTitle: I.intl.string(I.t.fCfp49),
                    buttonText: A ? I.intl.string(I.t["9e0wLn"]) : I.intl.string(I.t.B7ZT06),
                    disabled: E,
                    onPress: () => {
                        A
                            ? (f.A.unignoreUser(e, z.cb, s), x(u.Wm.USER_SAFETY_TOOLS_UNIGNORE))
                            : (f.A.ignoreUser(e, z.cb, s), x(u.Wm.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: I.intl.string(I.t.oDxaKy),
                    subTitle: I.intl.string(I.t.Lj37az),
                    buttonText: E ? I.intl.string(I.t.Hro40y) : I.intl.string(I.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        E
                            ? (m(), B.A.showUnblockSuccessToast(e, s))
                            : (0, Y.openModalLazy)(async () => {
                                  let { default: t } = await n.e("784938").then(n.bind(n, 371185));
                                  return (n) => {
                                      let { transitionState: l, onClose: r } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: l,
                                          onBlock: g,
                                          onBlockAndReport: O,
                                          onCancel: () => {
                                              (r?.(), x(u.Wm.USER_SAFETY_TOOLS_BLOCK_CANCEL));
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
                    title: I.intl.string(I.t.X27yhD),
                    subTitle: I.intl.string(I.t["0tydOa"]),
                    buttonText: I.intl.string(I.t.X27yhD),
                    onPress: () => {
                        ((0, Y.closeModal)(z.V), (0, P.jJ)(S), x(u.Wm.USER_SAFETY_TOOLS_REPORT));
                    },
                },
            ],
            [A, E, x, m, g, O, e, s, S],
        ),
        b = l.useMemo(() => {
            let t = {
                    title: I.intl.string(I.t.ZSbbMJ),
                    subTitle: I.intl.string(I.t.iNcsrW),
                    buttonText: I.intl.string(I.t.rK4Gqv),
                    onPress: () => {
                        ((0, v.A)(z.x7), x(u.Wm.USER_SAFETY_TOOLS_CTL));
                    },
                },
                e = {
                    title: I.intl.string(I.t.ZSbbMJ),
                    subTitle: I.intl.string(I.t.g5uwC5),
                    buttonText: I.intl.string(I.t.rK4Gqv),
                    onPress: () => {
                        ((0, v.A)(z.jR), x(u.Wm.USER_SAFETY_TOOLS_NO_FILTR));
                    },
                },
                n = {
                    title: I.intl.string(I.t.ZSbbMJ),
                    subTitle: I.intl.string(I.t.S9O1ZZ),
                    buttonText: I.intl.string(I.t.rK4Gqv),
                    onPress: () => {
                        ((0, v.A)(z.CL), x(u.Wm.USER_SAFETY_TOOLS_THROUGHLINE));
                    },
                };
            return [
                {
                    type: 0,
                    title: I.intl.string(I.t.syuaPI),
                    subTitle: I.intl.string(I.t.LLBnNk),
                    buttonText: I.intl.string(I.t.rzvzyZ),
                    onPress: () => {
                        ((0, w.A)({ source: K.y.KEYBIND, onClose: Y.closeAllModals }),
                            x(u.Wm.USER_SAFETY_TOOLS_VIBING_WUMPUS));
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
                let { type: e, title: n, subTitle: s, buttonText: l, onPress: r, disabled: a, variant: o } = t;
                return (0, i.jsx)(
                    X,
                    { type: e, title: n, subTitle: s, buttonText: l, variant: o, onPress: r, disabled: a },
                    n,
                );
            }
            case 1: {
                let { type: e, title: n, subTitle: s, onPress: l } = t;
                return (0, i.jsx)(Z, { type: e, title: n, subTitle: s, onPress: l }, n);
            }
            default:
                return (t.type, null);
        }
    }
    return (0, i.jsxs)(R, {
        children: [
            (0, i.jsx)(q, { children: h.map((t) => C(t)) }),
            (0, i.jsx)(q, { children: b.map((t) => C(t)) }),
            (0, i.jsx)(q, { children: j.map((t) => C(t)) }),
        ],
    });
};
var J = n(889229);
let $ = function () {
    let t = (0, z.RU)();
    return (0, i.jsx)(R, { children: (0, i.jsx)(J.A, { tips: t, headerText: I.intl.string(I.t["0QSL1C"]) }) });
};
var Q = n(102097);
let tt = (t) => {
    let { onClose: e, channelId: n, warningId: s, warningType: _, otherUserId: A, transitionState: E } = t,
        x = null != (0, d.e)(n),
        [g, m] = l.useState(G.ACTIONS),
        O = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: n, warningId: s, warningType: _, senderId: A, cta: t, isNudgeWarning: x });
            },
            [n, s, _, A, x],
        ),
        h = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, i.jsx)(a.Q, { onClick: n, text: e, variant: "secondary", textVariant: "text-sm/normal" });
        }, []),
        b = l.useCallback(() => {
            switch (g) {
                case G.SAFETY_TIPS:
                case G.ABOUT_SAFETY_ALERTS:
                    return (0, i.jsx)(h, { text: I.intl.string(I.t["13/7kX"]), onClick: () => m(G.ACTIONS) });
                default:
                    return null;
            }
        }, [g, h]),
        j = l.useCallback(() => {
            switch (g) {
                case G.SAFETY_TIPS:
                    return I.intl.string(I.t.EtNxi6);
                case G.ABOUT_SAFETY_ALERTS:
                    return I.intl.string(I.t.qI14KM);
                default:
                    return I.intl.string(I.t.MAhAp6);
            }
        }, [g]),
        C = l.useCallback(
            (t) => {
                m(t);
            },
            [m],
        );
    return (0, i.jsxs)(r.EO, {
        "data-migration-pending": !0,
        transitionState: E,
        "aria-label": I.intl.string(I.t.eXlt01),
        size: r.rI.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, i.jsx)(r.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: Q.H,
                justify: S.A.Justify.CENTER,
                children: (0, i.jsx)(o.D, { variant: "heading-xl/semibold", children: j() }),
            }),
            (0, i.jsx)(T.Ip, {
                children: (0, i.jsxs)(c.t, {
                    activeSlide: g,
                    width: 440,
                    children: [
                        (0, i.jsx)(c.q, {
                            id: G.ACTIONS,
                            children: (0, i.jsx)(H, {
                                otherUserId: A,
                                channelId: n,
                                warningId: s,
                                warningType: _,
                                transitionToSlide: C,
                            }),
                        }),
                        (0, i.jsx)(c.q, {
                            id: G.ABOUT_SAFETY_ALERTS,
                            children: (0, i.jsx)(U, {
                                channelId: n,
                                onClose: () => {
                                    (e(), O(u.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS));
                                },
                            }),
                        }),
                        (0, i.jsx)(c.q, { id: G.SAFETY_TIPS, children: (0, i.jsx)($, {}) }),
                    ],
                }),
            }),
            (0, i.jsxs)(r.jl, {
                "data-migration-pending": !0,
                justify: S.A.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(h, {
                        text: I.intl.string(I.t.cpT0Cq),
                        onClick: () => {
                            (e(), O(u.Wm.USER_SAFETY_TOOLS_DISMISS));
                        },
                    }),
                    b(),
                ],
            }),
        ],
    });
};
