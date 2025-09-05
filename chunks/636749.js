e.d(n, { Z: () => v });
var a = e(951288),
    s = e(647438),
    c = e(120356),
    i = e.n(c),
    o = e(481060),
    r = e(446183),
    l = e(677281),
    d = e(378298),
    u = e(359119),
    b = e(473092),
    _ = e(388032),
    g = e(962129),
    f = e(74866);
function p() {
    return (0, a.jsxs)("div", {
        className: i()(f.toast, g.toast),
        children: [
            (0, a.jsx)(o.b7C, { color: o.TVs.colors.TEXT_BRAND }),
            (0, a.jsx)(o.Text, {
                className: f.__invalid_content,
                color: "header-primary",
                variant: "text-md/normal",
                children: _.intl.string(_.t["gd/Yqq"]),
            }),
        ],
    });
}
function v(t) {
    let { channelId: n, warningId: e, senderId: c, safetyWarning: f } = t,
        v = s.useMemo(() => (null == f ? void 0 : f.feedback_type) === u.ny.UPVOTE, [f]),
        x = s.useMemo(() => (null == f ? void 0 : f.feedback_type) === u.ny.DOWNVOTE, [f]),
        h = s.useCallback(
            (t, s) => {
                (null == f ? void 0 : f.feedback_type) !== t &&
                    ((0, d.Ms)(n, e, t),
                    (0, o.showToast)(
                        (0, o.createToast)(_.intl.string(_.t["gd/Yqq"]), o.ToastType.CUSTOM, {
                            component: (0, a.jsx)(p, {}),
                        }),
                    ),
                    (0, b.qc)({
                        channelId: n,
                        warningId: e,
                        senderId: c,
                        warningType: null == f ? void 0 : f.type,
                        cta: s,
                    }));
            },
            [f, n, e, c],
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
                        className: i()([
                            g.buttonsBackground,
                            v ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive,
                            { [g.disabled]: v },
                        ]),
                        onClick: () => h(u.ny.UPVOTE, b.NM.FEEDBACK_UPVOTE),
                        "aria-label": _.intl.string(_.t["2GrOCA"]),
                        children: (0, a.jsx)(l.Z, {
                            className: g.__invalid_buttonIcon,
                            color: "interactive-normal",
                        }),
                    }),
                    (0, a.jsx)(o.P3F, {
                        className: i()([
                            g.buttonsBackground,
                            x ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive,
                            { [g.disabled]: x },
                        ]),
                        onClick: () => h(u.ny.DOWNVOTE, b.NM.FEEDBACK_DOWNVOTE),
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
