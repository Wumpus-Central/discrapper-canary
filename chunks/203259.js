n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(39604),
    a = n(176127),
    o = n(388032),
    s = n(881177);
function c(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: c } = e;
    return (0, i.jsxs)(r.TooltipLayer, {
        tooltipClassName: s.reminderTooltip,
        tooltipContentClassName: s.tooltipContent,
        targetElementRef: { current: n },
        position: 'bottom',
        color: r.TooltipColors.PRIMARY,
        children: [
            (0, i.jsx)(a.Z, {}),
            (0, i.jsx)(r.Heading, {
                variant: 'heading-md/extrabold',
                children: o.intl.format(o.t['+qxkzM'], { count: c.newClipIds.length })
            }),
            (0, i.jsxs)('div', {
                className: s.buttonContainer,
                children: [
                    (0, i.jsx)(r.Button, {
                        color: r.Button.Colors.TRANSPARENT,
                        onClick: l.eL,
                        children: o.intl.string(o.t.WAI6xs)
                    }),
                    (0, i.jsx)(r.Button, {
                        color: r.Button.Colors.BRAND,
                        onClick: t,
                        children: o.intl.string(o.t.tQPBmp)
                    })
                ]
            })
        ]
    });
}
