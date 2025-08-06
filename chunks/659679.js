n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var o = n(793030),
    i = n(442837),
    l = n(481060),
    s = n(111028),
    a = n(834129),
    c = n(271383),
    u = n(709054),
    d = n(884902),
    p = n(93841),
    f = n(388032),
    m = n(326319);
function g(e) {
    let { boost: t } = e,
        n = new Date(u.default.extractTimestamp(t.id)),
        {
            username: g,
            roleColor: x,
            roleColorStrings: _,
        } = (0, i.cj)([c.ZP], () => {
            var e, n, r, o;
            let i = c.ZP.getMember(t.guildId, t.userId);
            return {
                username:
                    null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? void 0 : e.username,
                roleColor: null != (r = null == i ? void 0 : i.colorString) ? r : null,
                roleColorStrings: null != (o = null == i ? void 0 : i.colorStrings) ? o : null,
            };
        }, [t]),
        v = (0, d.X7)(t.guildId, t.userId, null != _ ? _ : null);
    return (0, r.jsx)(a.Z, {
        className: m.systemMessageContainer,
        contentClassName: m.systemMessageContent,
        iconNode: (0, r.jsx)(l.$Eu, {
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
                (0, r.jsx)(l.PUh, {
                    className: m.boostMessageUser,
                    variant: "text-md/semibold",
                    name: g,
                    colorString: null != x ? x : null,
                    colorStrings: v,
                }),
                (0, r.jsx)(o.xv, {
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: (0, r.jsx)(s.Z, { children: f.intl.string(p.default.plwH8f) }),
                }),
            ],
        }),
    });
}
