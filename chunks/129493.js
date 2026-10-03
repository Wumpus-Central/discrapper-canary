n.d(t, { default: () => S });
var i = n(477900),
    s = n(582128),
    l = n(731738),
    a = n(702841),
    r = n(772707),
    c = n(331322),
    o = n(834730),
    d = n(807393),
    x = n(754302),
    u = n(632738),
    h = n(349435),
    _ = n(665909),
    g = n(503698),
    m = n.n(g),
    p = n(231483),
    f = n(661531),
    E = n(858899),
    N = n(739187),
    j = n(857250),
    y = n(97483),
    A = n(939249),
    C = n(973283),
    O = n(340833),
    T = n(913642),
    b = n(544231),
    v = n(375708),
    D = n(472987),
    W = n(655214);
function k() {
    return (0, i.jsxs)("div", {
        className: m()(W.oR, D.oR),
        children: [
            (0, i.jsx)(p.ShieldIcon, { color: f.A.colors.TEXT_BRAND }),
            (0, i.jsx)(o.E, {
                className: W.__invalid_content,
                color: "text-strong",
                variant: "text-md/normal",
                children: v.intl.string(v.t["gd/Yqs"]),
            }),
        ],
    });
}
function I(e) {
    let { channelId: t, warningId: n, senderId: l, safetyWarning: a } = e,
        r = s.useMemo(() => a?.feedback_type === h.fy.UPVOTE, [a]),
        c = s.useMemo(() => a?.feedback_type === h.fy.DOWNVOTE, [a]),
        d = s.useCallback(
            (e, s) => {
                a?.feedback_type !== e &&
                    ((0, b.v2)(t, n, e),
                    (0, C.WD)("WasThisHelpfulSection")
                        ? (0, E.P0)({
                              text: v.intl.string(v.t["gd/Yqs"]),
                              icon: p.ShieldIcon,
                              iconColor: f.A.colors.ICON_BRAND,
                          })
                        : (0, N.P)(
                              (0, j.o)(v.intl.string(v.t["gd/Yqs"]), y.Ck.CUSTOM, { component: (0, i.jsx)(k, {}) }),
                          ),
                    (0, _._$)({ channelId: t, warningId: n, senderId: l, warningType: a?.type, cta: s }));
            },
            [a, t, n, l],
        );
    return (0, i.jsxs)("div", {
        className: D.mp,
        children: [
            (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: v.intl.string(v.t.L84yVm) }),
            (0, i.jsxs)("div", {
                className: D.NC,
                children: [
                    (0, i.jsx)(A.D, {
                        className: m()([D.eH, r ? D.QT : D.LM, { [D.r9]: r }]),
                        onClick: () => d(h.fy.UPVOTE, _.Wm.FEEDBACK_UPVOTE),
                        "aria-label": v.intl.string(v.t["2GrOCN"]),
                        children: (0, i.jsx)(T.A, {
                            className: D.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                    (0, i.jsx)(A.D, {
                        className: m()([D.eH, c ? D.QT : D.LM, { [D.r9]: c }]),
                        onClick: () => d(h.fy.DOWNVOTE, _.Wm.FEEDBACK_DOWNVOTE),
                        "aria-label": v.intl.string(v.t.COp9BO),
                        children: (0, i.jsx)(O.A, {
                            className: D.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                ],
            }),
        ],
    });
}
var V = n(652215),
    B = n(546);
function S(e) {
    let {
            transitionState: t,
            onClose: n,
            channelId: g,
            warningId: m,
            senderId: p,
            description: f,
            safetyTipRows: E,
            actionRows: N,
            learnMore: j,
        } = e,
        y = (0, a.bG)([h.Ay], () => h.Ay.getChannelSafetyWarning(g, m));
    return (
        s.useEffect(() => {
            ((0, _.mO)(V.HAw.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: g,
                warningId: m,
                senderId: p,
                warningType: y?.type,
            }),
                d.A.increment({ name: l.K.SAFETY_WARNING_MODAL_VIEW }));
        }, [g, m, p, y]),
        (0, i.jsx)(r.k, {
            onClose: n,
            transitionState: t,
            graphic: { type: "image", src: B.A },
            gradientColor: "blue",
            title: v.intl.string(v.t.lyt43P),
            subtitle: f,
            actions: [],
            children: (0, i.jsxs)(c.B, {
                gap: 24,
                children: [
                    (0, i.jsxs)(c.B, { gap: 8, children: [(0, i.jsx)(x.q, { children: E }), j ?? null] }),
                    (0, i.jsxs)(c.B, {
                        gap: 4,
                        children: [
                            (0, i.jsx)(o.E, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: v.intl.string(v.t.K5FKtc),
                            }),
                            (0, i.jsx)(u.Y0, { children: N }),
                        ],
                    }),
                    (0, i.jsx)(I, { channelId: g, warningId: m, senderId: p, safetyWarning: y }),
                ],
            }),
        })
    );
}
