n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    l = n(481060),
    o = n(565138),
    s = n(430824),
    r = n(63063),
    d = n(981631),
    c = n(388032),
    u = n(242024),
    m = n(767688);
function x(e) {
    let { guildId: t, title: n, transitionState: x, children: h, buttons: g, onClose: j } = e,
        p = (0, a.e7)([s.Z], () => s.Z.getGuild(t));
    if (null == p) return null;
    let _ = (0, i.jsx)(l.Button, {
        onClick: j,
        children: c.intl.string(c.t.i4jeWV)
    });
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: x,
        size: l.ModalSize.SMALL,
        className: u.container,
        children: [
            (0, i.jsxs)(l.ModalHeader, {
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, i.jsx)('div', { className: u.gradientSplash }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: m,
                        className: u.heroImage
                    }),
                    (0, i.jsx)(l.Spacer, { size: 16 }),
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: n
                    }),
                    (0, i.jsx)(l.Spacer, { size: 4 }),
                    (0, i.jsxs)('div', {
                        className: u.guildContainer,
                        children: [
                            (0, i.jsx)(o.Z, {
                                size: o.Z.Sizes.SMOL,
                                guild: p,
                                className: u.guildIcon
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: p.name
                            })
                        ]
                    }),
                    (0, i.jsx)(l.ModalCloseButton, {
                        onClick: j,
                        innerClassName: u.closeButton,
                        className: u.close
                    })
                ]
            }),
            h,
            (0, i.jsxs)(l.ModalFooter, {
                className: u.footer,
                children: [
                    (0, i.jsx)('div', {
                        className: u.footerButtons,
                        children: null != g ? g : _
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-secondary',
                        children: c.intl.format(c.t.zbMH0d, { link: r.Z.getArticleURL(d.BhN.GUILD_LEADERBOARD) })
                    })
                ]
            })
        ]
    });
}
