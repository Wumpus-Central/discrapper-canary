e.d(n, { Z: () => k });
var a = e(54381),
    s = e(473749),
    i = e(120356),
    c = e.n(i),
    o = e(481060),
    l = e(446183),
    r = e(677281),
    d = e(378298),
    u = e(359119),
    b = e(473092),
    g = e(388032),
    x = e(665283),
    _ = e(141291);
function v() {
    return (0, a.jsxs)("div", {
        className: c()(_.toast, x.toast),
        children: [
            (0, a.jsx)(o.b7C, { color: o.TVs.colors.TEXT_BRAND }),
            (0, a.jsx)(o.Text, {
                className: _.__invalid_content,
                color: "text-strong",
                variant: "text-md/normal",
                children: g.intl.string(g.t["gd/Yqs"]),
            }),
        ],
    });
}
function k(t) {
    let { channelId: n, warningId: e, senderId: i, safetyWarning: _ } = t,
        k = s.useMemo(() => (null == _ ? void 0 : _.feedback_type) === u.ny.UPVOTE, [_]),
        p = s.useMemo(() => (null == _ ? void 0 : _.feedback_type) === u.ny.DOWNVOTE, [_]),
        h = s.useCallback(
            (t, s) => {
                (null == _ ? void 0 : _.feedback_type) !== t &&
                    ((0, d.Ms)(n, e, t),
                    (0, o.showToast)(
                        (0, o.createToast)(g.intl.string(g.t["gd/Yqs"]), o.ToastType.CUSTOM, {
                            component: (0, a.jsx)(v, {}),
                        }),
                    ),
                    (0, b.qc)({
                        channelId: n,
                        warningId: e,
                        senderId: i,
                        warningType: null == _ ? void 0 : _.type,
                        cta: s,
                    }));
            },
            [_, n, e, i],
        );
    return (0, a.jsxs)("div", {
        className: x.feedback,
        children: [
            (0, a.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: g.intl.string(g.t.L84yVm),
            }),
            (0, a.jsxs)("div", {
                className: x.buttonsContainer,
                children: [
                    (0, a.jsx)(o.P3F, {
                        className: c()([
                            x.buttonsBackground,
                            k ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive,
                            { [x.disabled]: k },
                        ]),
                        onClick: () => h(u.ny.UPVOTE, b.NM.FEEDBACK_UPVOTE),
                        "aria-label": g.intl.string(g.t["2GrOCN"]),
                        children: (0, a.jsx)(r.Z, {
                            className: x.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                    (0, a.jsx)(o.P3F, {
                        className: c()([
                            x.buttonsBackground,
                            p ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive,
                            { [x.disabled]: p },
                        ]),
                        onClick: () => h(u.ny.DOWNVOTE, b.NM.FEEDBACK_DOWNVOTE),
                        "aria-label": g.intl.string(g.t.COp9BO),
                        children: (0, a.jsx)(l.Z, {
                            className: x.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                ],
            }),
        ],
    });
}
