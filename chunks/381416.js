n.d(t, { s: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(388032),
    o = n(92850);
function a(e) {
    let { onDiscardApplication: t, onContinueApplication: n, guild: a } = e;
    return (0, r.jsxs)('div', {
        className: o.confirmation,
        children: [
            (0, r.jsx)('div', {
                className: o.iconWrapper,
                children: (0, r.jsx)(i.Gzi, {
                    size: 'md',
                    color: i.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, r.jsx)(i.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: null != a ? l.NW.formatToPlainString(l.t.f5Jaw8, { guildName: a.name }) : l.NW.string(l.t['0sTyER'])
            }),
            (0, r.jsxs)('div', {
                className: o.incompleteButtonsContainer,
                children: [
                    (0, r.jsx)(i.zxk, {
                        fullWidth: !0,
                        onClick: n,
                        look: i.zxk.Looks.FILLED,
                        color: i.zxk.Colors.PRIMARY,
                        size: i.zxk.Sizes.LARGE,
                        children: l.NW.string(l.t.h3aGmp)
                    }),
                    (0, r.jsx)(i.zxk, {
                        fullWidth: !0,
                        onClick: t,
                        look: i.zxk.Looks.FILLED,
                        color: i.zxk.Colors.RED,
                        size: i.zxk.Sizes.LARGE,
                        children: l.NW.string(l.t.OQFlFB)
                    })
                ]
            })
        ]
    });
}
