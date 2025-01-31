n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(39604),
    r = n(176127),
    s = n(388032),
    o = n(881177);
function c(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: c } = e;
    return (0, i.jsxs)(l.Cys, {
        tooltipClassName: o.reminderTooltip,
        tooltipContentClassName: o.tooltipContent,
        targetElementRef: { current: n },
        position: 'bottom',
        color: l.FGA.PRIMARY,
        children: [
            (0, i.jsx)(r.Z, {}),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-md/extrabold',
                children: s.intl.format(s.t['+qxkzM'], { count: c.newClipIds.length })
            }),
            (0, i.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.TRANSPARENT,
                        onClick: a.eL,
                        children: s.intl.string(s.t.WAI6xs)
                    }),
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        onClick: t,
                        children: s.intl.string(s.t.tQPBmp)
                    })
                ]
            })
        ]
    });
}
