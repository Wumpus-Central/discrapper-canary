n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(565138),
    s = n(430824),
    a = n(63063),
    d = n(981631),
    c = n(388032),
    u = n(905457),
    x = n(767688);
function m(e) {
    let { guildId: t, title: n, transitionState: m, children: j, buttons: f, onClose: g } = e,
        p = (0, i.e7)([s.Z], () => s.Z.getGuild(t));
    if (null == p) return null;
    let b = (0, r.jsx)(l.zxk, {
        onClick: g,
        children: c.intl.string(c.t.i4jeWV)
    });
    return (0, r.jsxs)(l.Y0X, {
        transitionState: m,
        size: l.CgR.SMALL,
        className: u.container,
        children: [
            (0, r.jsxs)(l.xBx, {
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, r.jsx)('div', { className: u.gradientSplash }),
                    (0, r.jsx)('img', {
                        alt: '',
                        src: x,
                        className: u.heroImage
                    }),
                    (0, r.jsx)(l.LZC, { size: 16 }),
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: n
                    }),
                    (0, r.jsx)(l.LZC, { size: 4 }),
                    (0, r.jsxs)('div', {
                        className: u.guildContainer,
                        children: [
                            (0, r.jsx)(o.Z, {
                                size: o.Z.Sizes.SMOL,
                                guild: p,
                                className: u.guildIcon
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: p.name
                            })
                        ]
                    }),
                    (0, r.jsx)(l.olH, {
                        onClick: g,
                        innerClassName: u.closeButton,
                        className: u.close
                    })
                ]
            }),
            j,
            (0, r.jsxs)(l.mzw, {
                className: u.footer,
                children: [
                    (0, r.jsx)('div', {
                        className: u.footerButtons,
                        children: null != f ? f : b
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-secondary',
                        children: c.intl.format(c.t.zbMH0d, { link: a.Z.getArticleURL(d.BhN.GUILD_LEADERBOARD) })
                    })
                ]
            })
        ]
    });
}
