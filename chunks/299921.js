n.d(t, { A: () => T });
var a = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    c = n(397927),
    r = n(340833),
    d = n(913642),
    o = n(544231),
    f = n(349435),
    u = n(665909),
    x = n(985018),
    _ = n(82457),
    m = n(910200);
function p() {
    return (0, a.jsxs)("div", {
        className: i()(m.oR, _.oR),
        children: [
            (0, a.jsx)(c.lmn, { color: c.LU0.colors.TEXT_BRAND }),
            (0, a.jsx)(c.Text, {
                className: m.__invalid_content,
                color: "text-strong",
                variant: "text-md/normal",
                children: x.intl.string(x.t["gd/Yqs"]),
            }),
        ],
    });
}
function T(e) {
    let { channelId: t, warningId: n, senderId: s, safetyWarning: m } = e,
        T = l.useMemo(() => (null == m ? void 0 : m.feedback_type) === f.fy.UPVOTE, [m]),
        h = l.useMemo(() => (null == m ? void 0 : m.feedback_type) === f.fy.DOWNVOTE, [m]),
        g = l.useCallback(
            (e, l) => {
                (null == m ? void 0 : m.feedback_type) !== e &&
                    ((0, o.v2)(t, n, e),
                    (0, c.showToast)(
                        (0, c.createToast)(x.intl.string(x.t["gd/Yqs"]), c.ToastType.CUSTOM, {
                            component: (0, a.jsx)(p, {}),
                        }),
                    ),
                    (0, u._$)({
                        channelId: t,
                        warningId: n,
                        senderId: s,
                        warningType: null == m ? void 0 : m.type,
                        cta: l,
                    }));
            },
            [m, t, n, s],
        );
    return (0, a.jsxs)("div", {
        className: _.mp,
        children: [
            (0, a.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: x.intl.string(x.t.L84yVm),
            }),
            (0, a.jsxs)("div", {
                className: _.NC,
                children: [
                    (0, a.jsx)(c.DUT, {
                        className: i()([_.eH, T ? _.QT : _.LM, { [_.r9]: T }]),
                        onClick: () => g(f.fy.UPVOTE, u.Wm.FEEDBACK_UPVOTE),
                        "aria-label": x.intl.string(x.t["2GrOCN"]),
                        children: (0, a.jsx)(d.A, {
                            className: _.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                    (0, a.jsx)(c.DUT, {
                        className: i()([_.eH, h ? _.QT : _.LM, { [_.r9]: h }]),
                        onClick: () => g(f.fy.DOWNVOTE, u.Wm.FEEDBACK_DOWNVOTE),
                        "aria-label": x.intl.string(x.t.COp9BO),
                        children: (0, a.jsx)(r.A, {
                            className: _.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                ],
            }),
        ],
    });
}
