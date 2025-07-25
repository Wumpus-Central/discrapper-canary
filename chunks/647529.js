n.d(t, { Z: () => x });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    l = n(565138),
    a = n(430824),
    s = n(63063),
    d = n(981631),
    c = n(388032),
    u = n(905457),
    m = n(767688);
function x(e) {
    let { guildId: t, title: n, transitionState: x, children: g, buttons: j, onClose: p } = e,
        f = (0, i.e7)([a.Z], () => a.Z.getGuild(t));
    if (null == f) return null;
    let b = (0, r.jsx)(o.zxk, {
        variant: 'primary',
        text: c.intl.string(c.t.i4jeWV),
        onClick: p
    });
    return (0, r.jsxs)(o.Y0X, {
        transitionState: x,
        size: o.CgR.SMALL,
        className: u.container,
        parentComponent: 'LeaderboardSettingsBaseModal',
        children: [
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, r.jsx)('div', { className: u.gradientSplash }),
                    (0, r.jsx)('img', {
                        alt: '',
                        src: m,
                        className: u.heroImage
                    }),
                    (0, r.jsx)(o.LZC, { size: 16 }),
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: n
                    }),
                    (0, r.jsx)(o.LZC, { size: 4 }),
                    (0, r.jsxs)('div', {
                        className: u.guildContainer,
                        children: [
                            (0, r.jsx)(l.Z, {
                                size: l.Z.Sizes.SMOL,
                                guild: f,
                                className: u.guildIcon
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: f.name
                            })
                        ]
                    }),
                    (0, r.jsx)(o.olH, {
                        onClick: p,
                        innerClassName: u.closeButton,
                        className: u.close
                    })
                ]
            }),
            g,
            (0, r.jsxs)(o.mzw, {
                className: u.footer,
                children: [
                    (0, r.jsx)('div', {
                        className: u.footerButtons,
                        children: null != j ? j : b
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-secondary',
                        children: c.intl.format(c.t.zbMH0d, { link: s.Z.getArticleURL(d.BhN.GUILD_LEADERBOARD) })
                    })
                ]
            })
        ]
    });
}
