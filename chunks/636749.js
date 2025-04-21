t.d(n, { Z: () => v });
var a = t(200651),
    s = t(192379),
    o = t(120356),
    c = t.n(o),
    i = t(481060),
    l = t(446183),
    r = t(677281),
    d = t(378298),
    u = t(359119),
    _ = t(473092),
    x = t(388032),
    m = t(989256),
    b = t(986449);
function g() {
    return (0, a.jsxs)('div', {
        className: c()(b.toast, m.toast),
        children: [
            (0, a.jsx)(i.b7C, { color: i.TVs.colors.TEXT_BRAND }),
            (0, a.jsx)(i.Text, {
                className: b.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: x.intl.string(x.t['gd/Yqq'])
            })
        ]
    });
}
function v(e) {
    let { channelId: n, warningId: t, senderId: o, safetyWarning: b } = e,
        v = s.useMemo(() => (null == b ? void 0 : b.feedback_type) === u.ny.UPVOTE, [b]),
        h = s.useMemo(() => (null == b ? void 0 : b.feedback_type) === u.ny.DOWNVOTE, [b]),
        k = s.useCallback(
            (e, s) => {
                (null == b ? void 0 : b.feedback_type) !== e &&
                    ((0, d.Ms)(n, t, e),
                    (0, i.showToast)((0, i.createToast)(x.intl.string(x.t['gd/Yqq']), i.ToastType.CUSTOM, { component: (0, a.jsx)(g, {}) })),
                    (0, _.qc)({
                        channelId: n,
                        warningId: t,
                        senderId: o,
                        warningType: null == b ? void 0 : b.type,
                        cta: s
                    }));
            },
            [b, n, t, o]
        );
    return (0, a.jsxs)('div', {
        className: m.feedback,
        children: [
            (0, a.jsx)(i.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: x.intl.string(x.t.L84yVl)
            }),
            (0, a.jsxs)('div', {
                className: m.buttonsContainer,
                children: [
                    (0, a.jsx)(i.P3F, {
                        className: c()([m.buttonsBackground, v ? m.buttonsBackgroundActive : m.buttonsBackgroundInactive, { [m.disabled]: v }]),
                        onClick: () => k(u.ny.UPVOTE, _.NM.FEEDBACK_UPVOTE),
                        'aria-label': x.intl.string(x.t['2GrOCA']),
                        children: (0, a.jsx)(r.Z, {
                            className: m.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    }),
                    (0, a.jsx)(i.P3F, {
                        className: c()([m.buttonsBackground, h ? m.buttonsBackgroundActive : m.buttonsBackgroundInactive, { [m.disabled]: h }]),
                        onClick: () => k(u.ny.DOWNVOTE, _.NM.FEEDBACK_DOWNVOTE),
                        'aria-label': x.intl.string(x.t.COp9BA),
                        children: (0, a.jsx)(l.Z, {
                            className: m.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    })
                ]
            })
        ]
    });
}
