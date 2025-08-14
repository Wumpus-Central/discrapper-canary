t.d(n, { Z: () => g });
var a = t(255367),
    o = t(73800),
    s = t(120356),
    i = t.n(s),
    c = t(481060),
    l = t(446183),
    r = t(677281),
    d = t(378298),
    u = t(359119),
    _ = t(473092),
    m = t(388032),
    x = t(332287),
    b = t(583140);
function v() {
    return (0, a.jsxs)("div", {
        className: i()(b.toast, x.toast),
        children: [
            (0, a.jsx)(c.b7C, { color: c.TVs.colors.TEXT_BRAND }),
            (0, a.jsx)(c.Text, {
                className: b.__invalid_content,
                color: "header-primary",
                variant: "text-md/normal",
                children: m.intl.string(m.t["gd/Yqq"]),
            }),
        ],
    });
}
function g(e) {
    let { channelId: n, warningId: t, senderId: s, safetyWarning: b } = e,
        g = o.useMemo(() => (null == b ? void 0 : b.feedback_type) === u.ny.UPVOTE, [b]),
        h = o.useMemo(() => (null == b ? void 0 : b.feedback_type) === u.ny.DOWNVOTE, [b]),
        N = o.useCallback(
            (e, o) => {
                (null == b ? void 0 : b.feedback_type) !== e &&
                    ((0, d.Ms)(n, t, e),
                    (0, c.showToast)(
                        (0, c.createToast)(m.intl.string(m.t["gd/Yqq"]), c.ToastType.CUSTOM, {
                            component: (0, a.jsx)(v, {}),
                        }),
                    ),
                    (0, _.qc)({
                        channelId: n,
                        warningId: t,
                        senderId: s,
                        warningType: null == b ? void 0 : b.type,
                        cta: o,
                    }));
            },
            [b, n, t, s],
        );
    return (0, a.jsxs)("div", {
        className: x.feedback,
        children: [
            (0, a.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: m.intl.string(m.t.L84yVl),
            }),
            (0, a.jsxs)("div", {
                className: x.buttonsContainer,
                children: [
                    (0, a.jsx)(c.P3F, {
                        className: i()([
                            x.buttonsBackground,
                            g ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive,
                            { [x.disabled]: g },
                        ]),
                        onClick: () => N(u.ny.UPVOTE, _.NM.FEEDBACK_UPVOTE),
                        "aria-label": m.intl.string(m.t["2GrOCA"]),
                        children: (0, a.jsx)(r.Z, {
                            className: x.__invalid_buttonIcon,
                            color: "interactive-normal",
                        }),
                    }),
                    (0, a.jsx)(c.P3F, {
                        className: i()([
                            x.buttonsBackground,
                            h ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive,
                            { [x.disabled]: h },
                        ]),
                        onClick: () => N(u.ny.DOWNVOTE, _.NM.FEEDBACK_DOWNVOTE),
                        "aria-label": m.intl.string(m.t.COp9BA),
                        children: (0, a.jsx)(l.Z, {
                            className: x.__invalid_buttonIcon,
                            color: "interactive-normal",
                        }),
                    }),
                ],
            }),
        ],
    });
}
