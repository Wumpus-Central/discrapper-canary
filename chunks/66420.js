n.d(t, { Z: () => s });
var r = n(200651),
    i = n(657707),
    l = n(793030),
    a = n(834129),
    o = n(510064);
function s(e) {
    let { channel: t, message: n, content: s, subtitle: c, compact: u, action: d } = e,
        p = n.reactions.length > 0;
    return (0, r.jsxs)(a.Z, {
        iconNode: t.isGroupDM()
            ? (0, r.jsx)(i.Dkj, {
                  size: 'md',
                  color: 'var(--premium-tier-2-purple-for-gradients-2)'
              })
            : (0, r.jsx)(i.vdY, {
                  size: 'md',
                  color: 'var(--premium-tier-2-purple-for-gradients-2)'
              }),
        iconContainerClassName: o.iconContainer,
        compact: u,
        contentClassName: o.content,
        className: p ? o.withReactions : o.noReactions,
        children: [
            (0, r.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, r.jsx)(l.xv, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: s
                    }),
                    null != c &&
                        (0, r.jsx)(l.xv, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: c
                        })
                ]
            }),
            d
        ]
    });
}
