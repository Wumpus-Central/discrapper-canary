n.d(t, { Z: () => l });
var r = n(255367),
    i = n(657707),
    a = n(793030),
    o = n(834129),
    s = n(510064);
function l(e) {
    let { channel: t, message: n, content: l, subtitle: c, compact: u, action: d } = e,
        f = n.reactions.length > 0;
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
        iconContainerClassName: s.iconContainer,
        compact: u,
        contentClassName: s.content,
        className: f ? s.withReactions : s.noReactions,
        children: [
            (0, r.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, r.jsx)(a.xv, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: l
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
