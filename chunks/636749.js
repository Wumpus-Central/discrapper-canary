t.d(e, {
    Z: function () {
        return v;
    }
});
var a = t(200651),
    o = t(192379),
    s = t(120356),
    c = t.n(s),
    l = t(481060),
    i = t(446183),
    r = t(677281),
    d = t(378298),
    u = t(359119),
    m = t(473092),
    x = t(388032),
    b = t(445587),
    _ = t(24343);
function g() {
    return (0, a.jsxs)('div', {
        className: c()(_.toast, b.toast),
        children: [
            (0, a.jsx)(l.ShieldIcon, { color: l.tokens.colors.TEXT_BRAND }),
            (0, a.jsx)(l.Text, {
                className: _.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: x.intl.string(x.t['gd/Yqq'])
            })
        ]
    });
}
function v(n) {
    let { channelId: e, warningId: t, senderId: s, safetyWarning: _ } = n,
        v = o.useMemo(() => (null == _ ? void 0 : _.feedback_type) === u.ny.UPVOTE, [_]),
        h = o.useMemo(() => (null == _ ? void 0 : _.feedback_type) === u.ny.DOWNVOTE, [_]),
        k = o.useCallback(
            (n, o) => {
                (null == _ ? void 0 : _.feedback_type) !== n &&
                    ((0, d.Ms)(e, t, n),
                    (0, l.showToast)((0, l.createToast)(x.intl.string(x.t['gd/Yqq']), l.ToastType.CUSTOM, { component: (0, a.jsx)(g, {}) })),
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
            (0, a.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: x.intl.string(x.t.L84yVl)
            }),
            (0, a.jsxs)('div', {
                className: b.buttonsContainer,
                children: [
                    (0, a.jsx)(l.Clickable, {
                        className: c()([b.buttonsBackground, v ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive, { [b.disabled]: v }]),
                        onClick: () => k(u.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                        'aria-label': x.intl.string(x.t['2GrOCA']),
                        children: (0, a.jsx)(r.Z, {
                            className: b.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    }),
                    (0, a.jsx)(l.Clickable, {
                        className: c()([b.buttonsBackground, h ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive, { [b.disabled]: h }]),
                        onClick: () => k(u.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                        'aria-label': x.intl.string(x.t.COp9BA),
                        children: (0, a.jsx)(i.Z, {
                            className: b.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    })
                ]
            })
        ]
    });
}
