n.d(t, { Z: () => s });
var r = n(200651),
    i = n(657707),
    a = n(793030),
    o = n(834129),
    l = n(918360);
function s(e) {
    let { channel: t, message: n, content: s, subtitle: c, compact: u, action: d } = e,
        p = n.reactions.length > 0;
    return (0, r.jsxs)(o.Z, {
        iconNode: t.isGroupDM()
            ? (0, r.jsx)(i.Dkj, {
                  size: 'md',
                  color: 'var(--premium-tier-2-purple-for-gradients-2)'
              })
            : (0, r.jsx)(i.vdY, {
                  size: 'md',
                  color: 'var(--premium-tier-2-purple-for-gradients-2)'
              }),
        iconContainerClassName: l.iconContainer,
        compact: u,
        contentClassName: l.content,
        className: p ? l.withReactions : l.noReactions,
        children: [
            (0, r.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, r.jsx)(a.xv, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: s
                    }),
                    null != c &&
                        (0, r.jsx)(a.xv, {
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
