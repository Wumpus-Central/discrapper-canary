n.d(t, { default: () => v });
var i = n(477900),
    a = n(582128),
    s = n(731738),
    l = n(702841),
    r = n(772707),
    c = n(331322),
    d = n(834730),
    o = n(807393),
    u = n(754302),
    h = n(632738),
    p = n(349435),
    x = n(665909),
    _ = n(503698),
    g = n.n(_),
    m = n(858899),
    y = n(231483),
    f = n(661531),
    E = n(939249),
    A = n(340833),
    N = n(913642),
    O = n(544231),
    j = n(660183),
    C = n(472987);
function b(e) {
    let { channelId: t, warningId: n, senderId: s, safetyWarning: l } = e,
        r = a.useMemo(() => l?.feedback_type === p.fy.UPVOTE, [l]),
        c = a.useMemo(() => l?.feedback_type === p.fy.DOWNVOTE, [l]),
        o = a.useCallback(
            (e, i) => {
                l?.feedback_type !== e &&
                    ((0, O.v2)(t, n, e),
                    (0, m.P0)({
                        text: j.intl.string(j.t["gd/Yqs"]),
                        icon: y.ShieldIcon,
                        iconColor: f.A.colors.ICON_BRAND,
                    }),
                    (0, x._$)({ channelId: t, warningId: n, senderId: s, warningType: l?.type, cta: i }));
            },
            [l, t, n, s],
        );
    return (0, i.jsxs)("div", {
        className: C.mp,
        children: [
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: j.intl.string(j.t.L84yVm) }),
            (0, i.jsxs)("div", {
                className: C.NC,
                children: [
                    (0, i.jsx)(E.D, {
                        className: g()([C.eH, r ? C.QT : C.LM, { [C.r9]: r }]),
                        onClick: () => o(p.fy.UPVOTE, x.Wm.FEEDBACK_UPVOTE),
                        "aria-label": j.intl.string(j.t["2GrOCN"]),
                        children: (0, i.jsx)(N.A, {
                            className: C.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                    (0, i.jsx)(E.D, {
                        className: g()([C.eH, c ? C.QT : C.LM, { [C.r9]: c }]),
                        onClick: () => o(p.fy.DOWNVOTE, x.Wm.FEEDBACK_DOWNVOTE),
                        "aria-label": j.intl.string(j.t.COp9BO),
                        children: (0, i.jsx)(A.A, {
                            className: C.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                ],
            }),
        ],
    });
}
var T = n(652215),
    k = n(546);
function v(e) {
    let {
            transitionState: t,
            onClose: n,
            channelId: _,
            warningId: g,
            senderId: m,
            description: y,
            safetyTipRows: f,
            actionRows: E,
            learnMore: A,
        } = e,
        N = (0, l.bG)([p.Ay], () => p.Ay.getChannelSafetyWarning(_, g));
    return (
        a.useEffect(() => {
            ((0, x.mO)(T.HAw.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: _,
                warningId: g,
                senderId: m,
                warningType: N?.type,
            }),
                o.A.increment({ name: s.K.SAFETY_WARNING_MODAL_VIEW }));
        }, [_, g, m, N]),
        (0, i.jsx)(r.k, {
            onClose: n,
            transitionState: t,
            graphic: { type: "image", src: k.A },
            gradientColor: "blue",
            title: j.intl.string(j.t.lyt43P),
            subtitle: y,
            actions: [],
            children: (0, i.jsxs)(c.B, {
                gap: 24,
                children: [
                    (0, i.jsxs)(c.B, { gap: 8, children: [(0, i.jsx)(u.q, { children: f }), A ?? null] }),
                    (0, i.jsxs)(c.B, {
                        gap: 4,
                        children: [
                            (0, i.jsx)(d.E, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: j.intl.string(j.t.K5FKtc),
                            }),
                            (0, i.jsx)(h.Y0, { children: E }),
                        ],
                    }),
                    (0, i.jsx)(b, { channelId: _, warningId: g, senderId: m, safetyWarning: N }),
                ],
            }),
        })
    );
}
