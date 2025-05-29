n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    s = n(481060),
    a = n(565138),
    o = n(430824),
    l = n(63063),
    c = n(981631),
    d = n(388032),
    u = n(905457),
    f = n(767688);
function g(e) {
    let { guildId: t, title: n, transitionState: g, children: h, buttons: b, onClose: m } = e,
        x = (0, i.e7)([o.Z], () => o.Z.getGuild(t));
    if (null == x) return null;
    let _ = (0, r.jsx)(s.zxk, {
        onClick: m,
        children: d.intl.string(d.t.i4jeWV)
    });
    return (0, r.jsxs)(s.Y0X, {
        transitionState: g,
        size: s.CgR.SMALL,
        className: u.container,
        children: [
            (0, r.jsxs)(s.xBx, {
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, r.jsx)('div', { className: u.gradientSplash }),
                    (0, r.jsx)('img', {
                        alt: '',
                        src: f,
                        className: u.heroImage
                    }),
                    (0, r.jsx)(s.LZC, { size: 16 }),
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: n
                    }),
                    (0, r.jsx)(s.LZC, { size: 4 }),
                    (0, r.jsxs)('div', {
                        className: u.guildContainer,
                        children: [
                            (0, r.jsx)(a.Z, {
                                size: a.Z.Sizes.SMOL,
                                guild: x,
                                className: u.guildIcon
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: x.name
                            })
                        ]
                    }),
                    (0, r.jsx)(s.olH, {
                        onClick: m,
                        innerClassName: u.closeButton,
                        className: u.close
                    })
                ]
            }),
            h,
            (0, r.jsxs)(s.mzw, {
                className: u.footer,
                children: [
                    (0, r.jsx)('div', {
                        className: u.footerButtons,
                        children: null != b ? b : _
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-secondary',
                        children: d.intl.format(d.t.zbMH0d, { link: l.Z.getArticleURL(c.BhN.GUILD_LEADERBOARD) })
                    })
                ]
            })
        ]
    });
}
