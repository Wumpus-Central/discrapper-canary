n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    a = n(39604),
    o = n(176127),
    s = n(388032),
    c = n(703849);
function u(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: u } = e;
    return (0, r.jsxs)(l.gqK, {
        tooltipClassName: c.reminderTooltip,
        tooltipContentClassName: c.tooltipContent,
        targetElementRef: { current: n },
        position: "bottom",
        color: l.r6K.PRIMARY,
        children: [
            (0, r.jsx)(o.Z, {}),
            (0, r.jsx)(l.Heading, {
                variant: "heading-md/extrabold",
                children: s.intl.format(s.t["+qxkzM"], { count: u.newClipIds.length }),
            }),
            (0, r.jsxs)("div", {
                className: c.buttonContainer,
                children: [
                    (0, r.jsx)(i.zx, {
                        color: i.zx.Colors.TRANSPARENT,
                        onClick: a.eL,
                        children: s.intl.string(s.t.WAI6xs),
                    }),
                    (0, r.jsx)(l.Button, {
                        variant: "primary",
                        text: s.intl.string(s.t.tQPBmp),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
