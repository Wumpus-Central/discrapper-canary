r.d(t, { Z: () => g });
var n = r(255367);
r(73800);
var i = r(442837),
    a = r(481060),
    s = r(565138),
    o = r(430824),
    l = r(63063),
    c = r(981631),
    d = r(388032),
    u = r(905457),
    f = r(767688);
function g(e) {
    let { guildId: t, title: r, transitionState: g, children: h, buttons: b, onClose: m } = e,
        x = (0, i.e7)([o.Z], () => o.Z.getGuild(t));
    if (null == x) return null;
    let p = (0, n.jsx)(a.zxk, {
        variant: 'primary',
        text: d.intl.string(d.t.i4jeWV),
        onClick: m
    });
    return (0, n.jsxs)(a.Y0X, {
        transitionState: g,
        size: a.CgR.SMALL,
        className: u.container,
        parentComponent: 'LeaderboardSettingsBaseModal',
        children: [
            (0, n.jsxs)(a.xBx, {
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, n.jsx)('div', { className: u.gradientSplash }),
                    (0, n.jsx)('img', {
                        alt: '',
                        src: f,
                        className: u.heroImage
                    }),
                    (0, n.jsx)(a.LZC, { size: 16 }),
                    (0, n.jsx)(a.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: r
                    }),
                    (0, n.jsx)(a.LZC, { size: 4 }),
                    (0, n.jsxs)('div', {
                        className: u.guildContainer,
                        children: [
                            (0, n.jsx)(s.Z, {
                                size: s.Z.Sizes.SMOL,
                                guild: x,
                                className: u.guildIcon
                            }),
                            (0, n.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: x.name
                            })
                        ]
                    }),
                    (0, n.jsx)(a.olH, {
                        onClick: m,
                        innerClassName: u.closeButton,
                        className: u.close
                    })
                ]
            }),
            h,
            (0, n.jsxs)(a.mzw, {
                className: u.footer,
                children: [
                    (0, n.jsx)('div', {
                        className: u.footerButtons,
                        children: null != b ? b : p
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-secondary',
                        children: d.intl.format(d.t.zbMH0d, { link: l.Z.getArticleURL(c.BhN.GUILD_LEADERBOARD) })
                    })
                ]
            })
        ]
    });
}
