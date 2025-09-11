n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(111028),
    a = n(834129),
    c = n(271383),
    u = n(709054),
    d = n(884902),
    p = n(989308),
    m = n(388032),
    g = n(238937);
function f(e) {
    let { boost: t } = e,
        n = new Date(u.default.extractTimestamp(t.id)),
        {
            username: f,
            roleColor: v,
            roleColorStrings: _,
        } = (0, o.cj)([c.ZP], () => {
            var e, n, r, i;
            let o = c.ZP.getMember(t.guildId, t.userId);
            return {
                username:
                    null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? void 0 : e.username,
                roleColor: null != (r = null == o ? void 0 : o.colorString) ? r : null,
                roleColorStrings: null != (i = null == o ? void 0 : o.colorStrings) ? i : null,
            };
        }, [t]),
        x = (0, d.X7)(t.guildId, t.userId, null != _ ? _ : null);
    return (0, r.jsx)(a.Z, {
        className: g.systemMessageContainer,
        contentClassName: g.systemMessageContent,
        iconNode: (0, r.jsx)(s.$Eu, {
            className: g.icon,
            color: "currentColor",
            size: "sm",
        }),
        iconContainerClassName: g.iconContainer,
        timestampClassName: g.timestamp,
        timestamp: n,
        timestampFormat: "L",
        compact: !0,
        children: (0, r.jsxs)("span", {
            className: g.boostMessage,
            children: [
                (0, r.jsx)(s.PUh, {
                    className: g.boostMessageUser,
                    variant: "text-md/semibold",
                    name: f,
                    colorString: null != v ? v : null,
                    colorStrings: x,
                }),
                (0, r.jsx)(i.xvT, {
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: (0, r.jsx)(l.Z, { children: m.intl.string(p.default.plwH8f) }),
                }),
            ],
        }),
    });
}
