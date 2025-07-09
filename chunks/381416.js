n.d(t, { s: () => s });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(388032),
    o = n(568410);
function s(e) {
    let { onDiscardApplication: t, onContinueApplication: n, guild: s } = e;
    return (0, r.jsxs)('div', {
        className: o.confirmation,
        children: [
            (0, r.jsx)('div', {
                className: o.iconWrapper,
                children: (0, r.jsx)(l.Gzi, {
                    size: 'md',
                    color: l.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: null != s ? a.intl.formatToPlainString(a.t.f5Jaw8, { guildName: s.name }) : a.intl.string(a.t['0sTyER'])
            }),
            (0, r.jsxs)('div', {
                className: o.incompleteButtonsContainer,
                children: [
                    (0, r.jsx)(i.zx, {
                        fullWidth: !0,
                        onClick: n,
                        look: i.zx.Looks.FILLED,
                        color: i.zx.Colors.PRIMARY,
                        size: i.zx.Sizes.LARGE,
                        children: a.intl.string(a.t.h3aGmp)
                    }),
                    (0, r.jsx)(i.zx, {
                        fullWidth: !0,
                        onClick: t,
                        look: i.zx.Looks.FILLED,
                        color: i.zx.Colors.RED,
                        size: i.zx.Sizes.LARGE,
                        children: a.intl.string(a.t.OQFlFB)
                    })
                ]
            })
        ]
    });
}
