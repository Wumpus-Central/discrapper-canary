n.d(e, { default: () => I });
var a = n(627968),
    s = n(64700),
    c = n(731738),
    i = n(772707),
    r = n(702841),
    l = n(331322),
    o = n(834730),
    d = n(831062),
    _ = n(754302),
    u = n(632738),
    p = n(349435),
    x = n(665909),
    b = n(503698),
    f = n.n(b),
    g = n(231483),
    m = n(661531),
    h = n(691540),
    E = n(857250),
    j = n(97483),
    y = n(939249),
    A = n(340833),
    N = n(913642),
    v = n(544231),
    C = n(985018),
    k = n(543972),
    O = n(861173);
function T() {
    return (0, a.jsxs)("div", {
        className: f()(O.oR, k.oR),
        children: [
            (0, a.jsx)(g.l, { color: m.A.colors.TEXT_BRAND }),
            (0, a.jsx)(o.E, {
                className: O.__invalid_content,
                color: "text-strong",
                variant: "text-md/normal",
                children: C.intl.string(C.t["gd/Yqs"]),
            }),
        ],
    });
}
function D(t) {
    let { channelId: e, warningId: n, senderId: c, safetyWarning: i } = t,
        r = s.useMemo(() => i?.feedback_type === p.fy.UPVOTE, [i]),
        l = s.useMemo(() => i?.feedback_type === p.fy.DOWNVOTE, [i]),
        d = s.useCallback(
            (t, s) => {
                i?.feedback_type !== t &&
                    ((0, v.v2)(e, n, t),
                    (0, h.P0)((0, E.o)(C.intl.string(C.t["gd/Yqs"]), j.Ck.CUSTOM, { component: (0, a.jsx)(T, {}) })),
                    (0, x._$)({ channelId: e, warningId: n, senderId: c, warningType: i?.type, cta: s }));
            },
            [i, e, n, c],
        );
    return (0, a.jsxs)("div", {
        className: k.mp,
        children: [
            (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: C.intl.string(C.t.L84yVm) }),
            (0, a.jsxs)("div", {
                className: k.NC,
                children: [
                    (0, a.jsx)(y.D, {
                        className: f()([k.eH, r ? k.QT : k.LM, { [k.r9]: r }]),
                        onClick: () => d(p.fy.UPVOTE, x.Wm.FEEDBACK_UPVOTE),
                        "aria-label": C.intl.string(C.t["2GrOCN"]),
                        children: (0, a.jsx)(N.A, {
                            className: k.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                    (0, a.jsx)(y.D, {
                        className: f()([k.eH, l ? k.QT : k.LM, { [k.r9]: l }]),
                        onClick: () => d(p.fy.DOWNVOTE, x.Wm.FEEDBACK_DOWNVOTE),
                        "aria-label": C.intl.string(C.t.COp9BO),
                        children: (0, a.jsx)(A.A, {
                            className: k.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                ],
            }),
        ],
    });
}
var W = n(652215),
    B = n(546);
function I(t) {
    let {
            transitionState: e,
            onClose: n,
            channelId: b,
            warningId: f,
            senderId: g,
            description: m,
            safetyTipRows: h,
            actionRows: E,
            learnMore: j,
        } = t,
        y = (0, r.bG)([p.Ay], () => p.Ay.getChannelSafetyWarning(b, f));
    return (
        s.useEffect(() => {
            (0, x.mO)(W.HAw.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: b,
                warningId: f,
                senderId: g,
                warningType: y?.type,
            }),
                d.A.increment({ name: c.K.SAFETY_WARNING_MODAL_VIEW });
        }, [b, f, g, y]),
        (0, a.jsx)(i.k, {
            onClose: n,
            transitionState: e,
            graphic: { type: "image", src: B.A },
            gradientColor: "blue",
            title: C.intl.string(C.t.lyt43P),
            subtitle: m,
            actions: [],
            children: (0, a.jsxs)(l.B, {
                gap: 24,
                children: [
                    (0, a.jsxs)(l.B, { gap: 8, children: [(0, a.jsx)(_.q, { children: h }), j ?? null] }),
                    (0, a.jsxs)(l.B, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(o.E, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: C.intl.string(C.t.K5FKtc),
                            }),
                            (0, a.jsx)(u.Y0, { children: E }),
                        ],
                    }),
                    (0, a.jsx)(D, { channelId: b, warningId: f, senderId: g, safetyWarning: y }),
                ],
            }),
        })
    );
}
