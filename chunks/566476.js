n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(399606),
    l = n(481060),
    o = n(385499),
    c = n(246946),
    d = n(790162);
function u(e) {
    let { className: t, avatarURL: n, name: i, bot: u, verifiedBot: m, userTag: g } = e,
        p = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation);
    return (0, r.jsxs)('div', {
        className: s()(d.container, t),
        children: [
            (0, r.jsx)(l.qEK, {
                className: d.avatar,
                src: n,
                size: l.EFr.SIZE_24,
                'aria-label': i
            }),
            (0, r.jsxs)('div', {
                className: d.textContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        tag: 'span',
                        className: d.name,
                        color: 'header-primary',
                        variant: 'text-sm/semibold',
                        children: i
                    }),
                    u
                        ? (0, r.jsx)(o.Z, {
                              className: d.botTag,
                              verified: m
                          })
                        : null,
                    p
                        ? null
                        : (0, r.jsx)(l.Text, {
                              tag: 'span',
                              color: 'interactive-normal',
                              className: d.userTag,
                              variant: 'text-sm/normal',
                              children: g
                          })
                ]
            })
        ]
    });
}
