r.d(t, { Z: () => f });
var n = r(255367);
r(73800);
var i = r(442837),
    a = r(481060),
    o = r(565138),
    s = r(430824),
    l = r(63063),
    d = r(981631),
    c = r(388032),
    u = r(613281),
    g = r(767688);
function f(e) {
    let { guildId: t, title: r, transitionState: f, children: x, buttons: h, onClose: m } = e,
        b = (0, i.e7)([s.Z], () => s.Z.getGuild(t));
    if (null == b) return null;
    let p = (0, n.jsx)(a.zxk, {
        variant: "primary",
        text: c.intl.string(c.t.i4jeWV),
        onClick: m,
    });
    return (0, n.jsxs)(a.Y0X, {
        transitionState: f,
        size: a.CgR.SMALL,
        className: u.container,
        parentComponent: "LeaderboardSettingsBaseModal",
        children: [
            (0, n.jsxs)(a.xBx, {
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, n.jsx)("div", { className: u.gradientSplash }),
                    (0, n.jsx)("img", {
                        alt: "",
                        src: g,
                        className: u.heroImage,
                    }),
                    (0, n.jsx)(a.LZC, { size: 16 }),
                    (0, n.jsx)(a.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: u.title,
                        children: r,
                    }),
                    (0, n.jsx)(a.LZC, { size: 4 }),
                    (0, n.jsxs)("div", {
                        className: u.guildContainer,
                        children: [
                            (0, n.jsx)(o.Z, {
                                size: o.Z.Sizes.SMOL,
                                guild: b,
                                className: u.guildIcon,
                            }),
                            (0, n.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                color: "text-secondary",
                                children: b.name,
                            }),
                        ],
                    }),
                    (0, n.jsx)(a.olH, {
                        onClick: m,
                        innerClassName: u.closeButton,
                        className: u.close,
                    }),
                ],
            }),
            x,
            (0, n.jsxs)(a.mzw, {
                className: u.footer,
                children: [
                    (0, n.jsx)("div", {
                        className: u.footerButtons,
                        children: null != h ? h : p,
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-secondary",
                        children: c.intl.format(c.t.zbMH0d, { link: l.Z.getArticleURL(d.BhN.GUILD_LEADERBOARD) }),
                    }),
                ],
            }),
        ],
    });
}
