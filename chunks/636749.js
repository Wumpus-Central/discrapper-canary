t.d(e, {
    Z: function () {
        return g;
    }
});
var a = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
    c = t(481060),
    l = t(446183),
    r = t(677281),
    d = t(378298),
    u = t(359119),
    m = t(473092),
    x = t(388032),
    b = t(445587),
    _ = t(24343);
function v() {
    return (0, a.jsxs)('div', {
        className: i()(_.toast, b.toast),
        children: [
            (0, a.jsx)(c.ShieldIcon, { color: c.tokens.colors.TEXT_BRAND }),
            (0, a.jsx)(c.Text, {
                className: _.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: x.intl.string(x.t['gd/Yqq'])
            })
        ]
    });
}
function g(n) {
    let { channelId: e, warningId: t, senderId: s, safetyWarning: _ } = n,
        g = o.useMemo(() => (null == _ ? void 0 : _.feedback_type) === u.ny.UPVOTE, [_]),
        N = o.useMemo(() => (null == _ ? void 0 : _.feedback_type) === u.ny.DOWNVOTE, [_]),
        h = o.useCallback(
            (n, o) => {
                (null == _ ? void 0 : _.feedback_type) !== n &&
                    ((0, d.Ms)(e, t, n),
                    (0, c.showToast)((0, c.createToast)(x.intl.string(x.t['gd/Yqq']), c.ToastType.CUSTOM, { component: (0, a.jsx)(v, {}) })),
                    (0, m.qc)({
                        channelId: e,
                        warningId: t,
                        senderId: s,
                        warningType: null == _ ? void 0 : _.type,
                        cta: o
                    }));
            },
            [_, e, t, s]
        );
    return (0, a.jsxs)('div', {
        className: b.feedback,
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: x.intl.string(x.t.L84yVl)
            }),
            (0, a.jsxs)('div', {
                className: b.buttonsContainer,
                children: [
                    (0, a.jsx)(c.Clickable, {
                        className: i()([b.buttonsBackground, g ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive, { [b.disabled]: g }]),
                        onClick: () => h(u.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                        'aria-label': x.intl.string(x.t['2GrOCA']),
                        children: (0, a.jsx)(r.Z, {
                            className: b.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    }),
                    (0, a.jsx)(c.Clickable, {
                        className: i()([b.buttonsBackground, N ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive, { [b.disabled]: N }]),
                        onClick: () => h(u.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                        'aria-label': x.intl.string(x.t.COp9BA),
                        children: (0, a.jsx)(l.Z, {
                            className: b.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    })
                ]
            })
        ]
    });
}
