n.d(e, { A: () => T });
var s = n(627968),
    a = n(64700),
    i = n(503698),
    c = n.n(i),
    r = n(397927),
    l = n(340833),
    o = n(913642),
    d = n(544231),
    _ = n(349435),
    u = n(665909),
    x = n(985018),
    m = n(82457),
    p = n(910200);
function g() {
    return (0, s.jsxs)("div", {
        className: c()(p.oR, m.oR),
        children: [
            (0, s.jsx)(r.lmn, { color: r.LU0.colors.TEXT_BRAND }),
            (0, s.jsx)(r.Text, {
                className: p.__invalid_content,
                color: "text-strong",
                variant: "text-md/normal",
                children: x.intl.string(x.t["gd/Yqs"]),
            }),
        ],
    });
}
function T(t) {
    let { channelId: e, warningId: n, senderId: i, safetyWarning: p } = t,
        T = a.useMemo(() => p?.feedback_type === _.fy.UPVOTE, [p]),
        h = a.useMemo(() => p?.feedback_type === _.fy.DOWNVOTE, [p]),
        b = a.useCallback(
            (t, a) => {
                p?.feedback_type !== t &&
                    ((0, d.v2)(e, n, t),
                    (0, r.showToast)(
                        (0, r.createToast)(x.intl.string(x.t["gd/Yqs"]), r.ToastType.CUSTOM, {
                            component: (0, s.jsx)(g, {}),
                        }),
                    ),
                    (0, u._$)({ channelId: e, warningId: n, senderId: i, warningType: p?.type, cta: a }));
            },
            [p, e, n, i],
        );
    return (0, s.jsxs)("div", {
        className: m.mp,
        children: [
            (0, s.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: x.intl.string(x.t.L84yVm),
            }),
            (0, s.jsxs)("div", {
                className: m.NC,
                children: [
                    (0, s.jsx)(r.DUT, {
                        className: c()([m.eH, T ? m.QT : m.LM, { [m.r9]: T }]),
                        onClick: () => b(_.fy.UPVOTE, u.Wm.FEEDBACK_UPVOTE),
                        "aria-label": x.intl.string(x.t["2GrOCN"]),
                        children: (0, s.jsx)(o.A, {
                            className: m.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                    (0, s.jsx)(r.DUT, {
                        className: c()([m.eH, h ? m.QT : m.LM, { [m.r9]: h }]),
                        onClick: () => b(_.fy.DOWNVOTE, u.Wm.FEEDBACK_DOWNVOTE),
                        "aria-label": x.intl.string(x.t.COp9BO),
                        children: (0, s.jsx)(l.A, {
                            className: m.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                ],
            }),
        ],
    });
}
