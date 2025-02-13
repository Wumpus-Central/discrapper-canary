n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(481060),
    a = n(565138),
    d = n(430824),
    o = n(63063),
    r = n(981631),
    c = n(388032),
    u = n(742972),
    x = n(767688);
function m(e) {
    let { guildId: t, title: n, transitionState: m, children: _, buttons: h, onClose: g } = e,
        j = (0, l.e7)([d.Z], () => d.Z.getGuild(t));
    if (null == j) return null;
    let f = (0, i.jsx)(s.zxk, {
        onClick: g,
        children: c.intl.string(c.t.i4jeWV)
    });
    return (0, i.jsxs)(s.Y0X, {
        transitionState: m,
        size: s.CgR.SMALL,
        className: u.container,
        children: [
            (0, i.jsxs)(s.xBx, {
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, i.jsx)('div', { className: u.gradientSplash }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: x,
                        className: u.heroImage
                    }),
                    (0, i.jsx)(s.LZC, { size: 16 }),
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: n
                    }),
                    (0, i.jsx)(s.LZC, { size: 4 }),
                    (0, i.jsxs)('div', {
                        className: u.guildContainer,
                        children: [
                            (0, i.jsx)(a.Z, {
                                size: a.Z.Sizes.SMOL,
                                guild: j,
                                className: u.guildIcon
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: j.name
                            })
                        ]
                    }),
                    (0, i.jsx)(s.olH, {
                        onClick: g,
                        innerClassName: u.closeButton,
                        className: u.close
                    })
                ]
            }),
            _,
            (0, i.jsxs)(s.mzw, {
                className: u.footer,
                children: [
                    (0, i.jsx)('div', {
                        className: u.footerButtons,
                        children: null != h ? h : f
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-secondary',
                        children: c.intl.format(c.t.zbMH0d, { link: o.Z.getArticleURL(r.BhN.GUILD_LEADERBOARD) })
                    })
                ]
            })
        ]
    });
}
