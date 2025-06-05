t.d(n, { Z: () => v });
var a = t(255367),
    o = t(73800),
    s = t(120356),
    c = t.n(s),
    i = t(481060),
    l = t(446183),
    r = t(677281),
    d = t(378298),
    u = t(359119),
    _ = t(473092),
    m = t(388032),
    x = t(989256),
    b = t(986449);
function g() {
    return (0, a.jsxs)('div', {
        className: c()(b.toast, x.toast),
        children: [
            (0, a.jsx)(i.b7C, { color: i.TVs.colors.TEXT_BRAND }),
            (0, a.jsx)(i.Text, {
                className: b.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: m.intl.string(m.t['gd/Yqq'])
            })
        ]
    });
}
function v(e) {
    let { channelId: n, warningId: t, senderId: s, safetyWarning: b } = e,
        v = o.useMemo(() => (null == b ? void 0 : b.feedback_type) === u.ny.UPVOTE, [b]),
        h = o.useMemo(() => (null == b ? void 0 : b.feedback_type) === u.ny.DOWNVOTE, [b]),
        k = o.useCallback(
            (e, o) => {
                (null == b ? void 0 : b.feedback_type) !== e &&
                    ((0, d.Ms)(n, t, e),
                    (0, i.showToast)((0, i.createToast)(m.intl.string(m.t['gd/Yqq']), i.ToastType.CUSTOM, { component: (0, a.jsx)(g, {}) })),
                    (0, _.qc)({
                        channelId: n,
                        warningId: t,
                        senderId: s,
                        warningType: null == b ? void 0 : b.type,
                        cta: o
                    }));
            },
            [b, n, t, s]
        );
    return (0, a.jsxs)('div', {
        className: x.feedback,
        children: [
            (0, a.jsx)(i.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: m.intl.string(m.t.L84yVl)
            }),
            (0, a.jsxs)('div', {
                className: x.buttonsContainer,
                children: [
                    (0, a.jsx)(i.P3F, {
                        className: c()([x.buttonsBackground, v ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive, { [x.disabled]: v }]),
                        onClick: () => k(u.ny.UPVOTE, _.NM.FEEDBACK_UPVOTE),
                        'aria-label': m.intl.string(m.t['2GrOCA']),
                        children: (0, a.jsx)(r.Z, {
                            className: x.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    }),
                    (0, a.jsx)(i.P3F, {
                        className: c()([x.buttonsBackground, h ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive, { [x.disabled]: h }]),
                        onClick: () => k(u.ny.DOWNVOTE, _.NM.FEEDBACK_DOWNVOTE),
                        'aria-label': m.intl.string(m.t.COp9BA),
                        children: (0, a.jsx)(l.Z, {
                            className: x.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    })
                ]
            })
        ]
    });
}
