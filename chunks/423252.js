n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(686546),
    o = n(305347),
    s = n(220250),
    l = n(388032),
    c = n(505044);
function u(e) {
    let { guildId: t, name: n } = e,
        u = (0, s.nv)(),
        d = (0, s.dG)(u.hex());
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsx)("div", {
                className: c.banner,
                style: { background: d },
            }),
            (0, r.jsx)("div", {
                className: c.avatarContainer,
                children: (0, r.jsx)(a.ZP, {
                    mask: a.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)("div", {
                        className: c.avatarWrapper,
                        children: (0, r.jsx)(o.Ft, {
                            guildId: t,
                            guildName: null != n ? n : "?",
                            guildIcon: null,
                            iconSize: 64,
                            acronymClassName: c.acronymText,
                        }),
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: c.header,
                children: (0, r.jsx)(i.Heading, {
                    variant: "heading-lg/medium",
                    color: "header-primary",
                    children: null != n ? n : l.intl.string(l.t.wZmueu),
                }),
            }),
            (0, r.jsx)("div", {
                className: c.body,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: l.intl.string(l.t["8mfCqY"]),
                }),
            }),
        ],
    });
}
