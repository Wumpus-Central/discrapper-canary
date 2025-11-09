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
    _ = e(473092),
    b = e(388032),
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
                children: b.intl.string(b.t["gd/Yqs"]),
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
                        (0, o.createToast)(b.intl.string(b.t["gd/Yqs"]), o.ToastType.CUSTOM, {
                            component: (0, a.jsx)(v, {}),
                        }),
                    ),
                    (0, _.qc)({
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
                children: b.intl.string(b.t.L84yVm),
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
                        onClick: () => p(u.ny.UPVOTE, _.NM.FEEDBACK_UPVOTE),
                        "aria-label": b.intl.string(b.t["2GrOCN"]),
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
                        onClick: () => p(u.ny.DOWNVOTE, _.NM.FEEDBACK_DOWNVOTE),
                        "aria-label": b.intl.string(b.t.COp9BO),
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
