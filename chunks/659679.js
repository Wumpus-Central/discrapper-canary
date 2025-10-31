n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(793030),
    o = n(442837),
    l = n(194983),
    a = n(481060),
    s = n(834129),
    c = n(271383),
    u = n(709054),
    d = n(884902),
    p = n(459196),
    f = n(388032),
    m = n(238937);
function g(e) {
    let { boost: t } = e,
        n = new Date(u.default.extractTimestamp(t.id)),
        {
            username: g,
            roleColor: v,
            roleColorStrings: x,
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
        _ = (0, d.X7)(t.guildId, t.userId, null != x ? x : null);
    return (0, r.jsx)(s.Z, {
        className: m.systemMessageContainer,
        contentClassName: m.systemMessageContent,
        iconNode: (0, r.jsx)(a.Ucv, {
            className: m.icon,
            color: "currentColor",
            size: "sm",
        }),
        iconContainerClassName: m.iconContainer,
        timestampClassName: m.timestamp,
        timestamp: n,
        timestampFormat: "L",
        compact: !0,
        children: (0, r.jsxs)("span", {
            className: m.boostMessage,
            children: [
                (0, r.jsx)(a.PUh, {
                    className: m.boostMessageUser,
                    variant: "text-md/semibold",
                    name: g,
                    colorString: null != v ? v : null,
                    colorStrings: _,
                }),
                (0, r.jsx)(i.xvT, {
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: (0, r.jsx)(l.Z, { children: f.intl.string(p.default.plwH8d) }),
                }),
            ],
        }),
    });
}
