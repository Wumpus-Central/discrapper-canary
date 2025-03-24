n.d(t, { Z: () => s });
var r = n(200651),
    i = n(657707),
    a = n(793030),
    o = n(834129),
    l = n(84848);
function s(e) {
    let { channel: t, content: n, subtitle: s, compact: c, action: u } = e;
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
        compact: c,
        contentClassName: l.content,
        children: [
            (0, r.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, r.jsx)(a.xv, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: n
                    }),
                    null != s &&
                        (0, r.jsx)(a.xv, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: s
                        })
                ]
            }),
            u
        ]
    });
}
