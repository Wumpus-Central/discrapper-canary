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
    m = n(632738),
    h = n(349435),
    p = n(665909),
    _ = n(503698),
    x = n.n(_),
    y = n(858899),
    g = n(231483),
    f = n(661531),
    E = n(939249),
    A = n(340833),
    N = n(913642),
    O = n(544231),
    b = n(105292),
    j = n(472987);
function C(e) {
    let { channelId: t, warningId: n, senderId: s, safetyWarning: l } = e,
        r = a.useMemo(() => l?.feedback_type === h.fy.UPVOTE, [l]),
        c = a.useMemo(() => l?.feedback_type === h.fy.DOWNVOTE, [l]),
        o = a.useCallback(
            (e, i) => {
                l?.feedback_type !== e &&
                    ((0, O.v2)(t, n, e),
                    (0, y.P0)({
                        text: b.intl.string(b.t["gd/Yqs"]),
                        icon: g.ShieldIcon,
                        iconColor: f.A.colors.ICON_BRAND,
                    }),
                    (0, p._$)({ channelId: t, warningId: n, senderId: s, warningType: l?.type, cta: i }));
            },
            [l, t, n, s],
        );
    return (0, i.jsxs)("div", {
        className: j.mp,
        children: [
            (0, i.jsx)(d.E, { variant: "body-sm/medium", color: "text-default", children: b.intl.string(b.t.L84yVm) }),
            (0, i.jsxs)("div", {
                className: j.NC,
                children: [
                    (0, i.jsx)(E.D, {
                        className: x()([j.eH, r ? j.QT : j.LM, { [j.r9]: r }]),
                        onClick: () => o(h.fy.UPVOTE, p.Wm.FEEDBACK_UPVOTE),
                        "aria-label": b.intl.string(b.t["2GrOCN"]),
                        children: (0, i.jsx)(N.A, {
                            className: j.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                    (0, i.jsx)(E.D, {
                        className: x()([j.eH, c ? j.QT : j.LM, { [j.r9]: c }]),
                        onClick: () => o(h.fy.DOWNVOTE, p.Wm.FEEDBACK_DOWNVOTE),
                        "aria-label": b.intl.string(b.t.COp9BO),
                        children: (0, i.jsx)(A.A, {
                            className: j.__invalid_buttonIcon,
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
            warningId: x,
            senderId: y,
            description: g,
            safetyTipRows: f,
            actionRows: E,
            learnMore: A,
        } = e,
        N = (0, l.bG)([h.Ay], () => h.Ay.getChannelSafetyWarning(_, x));
    return (
        a.useEffect(() => {
            ((0, p.mO)(T.HAw.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: _,
                warningId: x,
                senderId: y,
                warningType: N?.type,
            }),
                o.A.increment({ name: s.K.SAFETY_WARNING_MODAL_VIEW }));
        }, [_, x, y, N]),
        (0, i.jsx)(r.k, {
            onClose: n,
            transitionState: t,
            graphic: { type: "image", src: k.A },
            gradientColor: "blue",
            title: b.intl.string(b.t.lyt43P),
            subtitle: g,
            actions: [],
            children: (0, i.jsxs)(c.B, {
                gap: 24,
                children: [
                    (0, i.jsxs)(c.B, { gap: 8, children: [(0, i.jsx)(u.q, { children: f }), A ?? null] }),
                    (0, i.jsxs)(c.B, {
                        gap: 4,
                        children: [
                            (0, i.jsx)(d.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: b.intl.string(b.t.K5FKtc),
                            }),
                            (0, i.jsx)(m.Y0, { children: E }),
                        ],
                    }),
                    (0, i.jsx)(C, { channelId: _, warningId: x, senderId: y, safetyWarning: N }),
                ],
            }),
        })
    );
}
