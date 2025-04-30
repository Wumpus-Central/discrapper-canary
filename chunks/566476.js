n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(399606),
    a = n(481060),
    o = n(385499),
    c = n(246946),
    u = n(790162);
function d(e) {
    let { className: t, avatarURL: n, name: i, bot: d, verifiedBot: m, userTag: g } = e,
        p = (0, s.e7)([c.Z], () => c.Z.hidePersonalInformation);
    return (0, r.jsxs)('div', {
        className: l()(u.container, t),
        children: [
            (0, r.jsx)(a.qEK, {
                className: u.avatar,
                src: n,
                size: a.EFr.SIZE_24,
                'aria-label': i
            }),
            (0, r.jsxs)('div', {
                className: u.textContainer,
                children: [
                    (0, r.jsx)(a.Text, {
                        tag: 'span',
                        className: u.name,
                        color: 'header-primary',
                        variant: 'text-sm/semibold',
                        children: i
                    }),
                    d
                        ? (0, r.jsx)(o.Z, {
                              className: u.botTag,
                              verified: m
                          })
                        : null,
                    p
                        ? null
                        : (0, r.jsx)(a.Text, {
                              tag: 'span',
                              color: 'interactive-normal',
                              className: u.userTag,
                              variant: 'text-sm/normal',
                              children: g
                          })
                ]
            })
        ]
    });
}
