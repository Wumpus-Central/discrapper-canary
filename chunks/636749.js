e.d(t, { Z: () => h });
var a = e(951288),
    s = e(647438),
    i = e(120356),
    c = e.n(i),
    o = e(481060),
    r = e(446183),
    l = e(677281),
    d = e(378298),
    u = e(359119),
    b = e(473092),
    _ = e(388032),
    g = e(962129),
    x = e(74866);
function v() {
    return (0, a.jsxs)("div", {
        className: c()(x.toast, g.toast),
        children: [
            (0, a.jsx)(o.b7C, { color: o.TVs.colors.TEXT_BRAND }),
            (0, a.jsx)(o.Text, {
                className: x.__invalid_content,
                color: "header-primary",
                variant: "text-md/normal",
                children: _.intl.string(_.t["gd/Yqq"]),
            }),
        ],
    });
}
function h(n) {
    let { channelId: t, warningId: e, senderId: i, safetyWarning: x } = n,
        h = s.useMemo(() => (null == x ? void 0 : x.feedback_type) === u.ny.UPVOTE, [x]),
        k = s.useMemo(() => (null == x ? void 0 : x.feedback_type) === u.ny.DOWNVOTE, [x]),
        p = s.useCallback(
            (n, s) => {
                (null == x ? void 0 : x.feedback_type) !== n &&
                    ((0, d.Ms)(t, e, n),
                    (0, o.showToast)(
                        (0, o.createToast)(_.intl.string(_.t["gd/Yqq"]), o.ToastType.CUSTOM, {
                            component: (0, a.jsx)(v, {}),
                        }),
                    ),
                    (0, b.qc)({
                        channelId: t,
                        warningId: e,
                        senderId: i,
                        warningType: null == x ? void 0 : x.type,
                        cta: s,
                    }));
            },
            [x, t, e, i],
        );
    return (0, a.jsxs)("div", {
        className: g.feedback,
        children: [
            (0, a.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: _.intl.string(_.t.L84yVl),
            }),
            (0, a.jsxs)("div", {
                className: g.buttonsContainer,
                children: [
                    (0, a.jsx)(o.P3F, {
                        className: c()([
                            g.buttonsBackground,
                            h ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive,
                            { [g.disabled]: h },
                        ]),
                        onClick: () => p(u.ny.UPVOTE, b.NM.FEEDBACK_UPVOTE),
                        "aria-label": _.intl.string(_.t["2GrOCA"]),
                        children: (0, a.jsx)(l.Z, {
                            className: g.__invalid_buttonIcon,
                            color: "interactive-normal",
                        }),
                    }),
                    (0, a.jsx)(o.P3F, {
                        className: c()([
                            g.buttonsBackground,
                            k ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive,
                            { [g.disabled]: k },
                        ]),
                        onClick: () => p(u.ny.DOWNVOTE, b.NM.FEEDBACK_DOWNVOTE),
                        "aria-label": _.intl.string(_.t.COp9BA),
                        children: (0, a.jsx)(r.Z, {
                            className: g.__invalid_buttonIcon,
                            color: "interactive-normal",
                        }),
                    }),
                ],
            }),
        ],
    });
}
