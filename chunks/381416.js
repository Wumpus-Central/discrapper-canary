n.d(t, { s: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(388032),
    a = n(652536);
function s(e) {
    let { onDiscardApplication: t, onContinueApplication: n, guild: s } = e;
    return (0, i.jsxs)('div', {
        className: a.confirmation,
        children: [
            (0, i.jsx)('div', {
                className: a.iconWrapper,
                children: (0, i.jsx)(l.Gzi, {
                    size: 'md',
                    color: l.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: null != s ? r.intl.formatToPlainString(r.t.f5Jaw8, { guildName: s.name }) : r.intl.string(r.t['0sTyER'])
            }),
            (0, i.jsxs)('div', {
                className: a.incompleteButtonsContainer,
                children: [
                    (0, i.jsx)(l.zxk, {
                        fullWidth: !0,
                        onClick: n,
                        look: l.zxk.Looks.FILLED,
                        color: l.zxk.Colors.PRIMARY,
                        size: l.zxk.Sizes.LARGE,
                        children: r.intl.string(r.t.h3aGmp)
                    }),
                    (0, i.jsx)(l.zxk, {
                        fullWidth: !0,
                        onClick: t,
                        look: l.zxk.Looks.FILLED,
                        color: l.zxk.Colors.RED,
                        size: l.zxk.Sizes.LARGE,
                        children: r.intl.string(r.t.OQFlFB)
                    })
                ]
            })
        ]
    });
}
