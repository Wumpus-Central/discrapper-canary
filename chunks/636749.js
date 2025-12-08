e.d(n, { Z: () => k });
var a = e(54381),
    s = e(473749),
    i = e(120356),
    c = e.n(i),
    o = e(481060),
    r = e(446183),
    l = e(677281),
    d = e(378298),
    u = e(359119),
    _ = e(473092),
    b = e(388032),
    g = e(332287),
    x = e(583140);
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
function k(t) {
    let { channelId: n, warningId: e, senderId: i, safetyWarning: x } = t,
        k = s.useMemo(() => (null == x ? void 0 : x.feedback_type) === u.ny.UPVOTE, [x]),
        p = s.useMemo(() => (null == x ? void 0 : x.feedback_type) === u.ny.DOWNVOTE, [x]),
        h = s.useCallback(
            (t, s) => {
                (null == x ? void 0 : x.feedback_type) !== t &&
                    ((0, d.Ms)(n, e, t),
                    (0, o.showToast)(
                        (0, o.createToast)(b.intl.string(b.t["gd/Yqs"]), o.ToastType.CUSTOM, {
                            component: (0, a.jsx)(v, {}),
                        }),
                    ),
                    (0, _.qc)({
                        channelId: n,
                        warningId: e,
                        senderId: i,
                        warningType: null == x ? void 0 : x.type,
                        cta: s,
                    }));
            },
            [x, n, e, i],
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
                            k ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive,
                            { [g.disabled]: k },
                        ]),
                        onClick: () => h(u.ny.UPVOTE, _.NM.FEEDBACK_UPVOTE),
                        "aria-label": b.intl.string(b.t["2GrOCN"]),
                        children: (0, a.jsx)(l.Z, {
                            className: g.__invalid_buttonIcon,
                            color: "interactive-normal",
                        }),
                    }),
                    (0, a.jsx)(o.P3F, {
                        className: c()([
                            g.buttonsBackground,
                            p ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive,
                            { [g.disabled]: p },
                        ]),
                        onClick: () => h(u.ny.DOWNVOTE, _.NM.FEEDBACK_DOWNVOTE),
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
