n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(793030),
    l = n(442837),
    o = n(681715),
    a = n(481060),
    s = n(318713),
    c = n(271383),
    u = n(709054),
    d = n(884902),
    p = n(18853),
    f = n(388032),
    m = n(238937);
function g(e) {
    let { boost: t } = e,
        n = new Date(u.default.extractTimestamp(t.id)),
        {
            username: g,
            roleColor: v,
            roleColorStrings: x,
        } = (0, l.cj)([c.ZP], () => {
            var e, n, r, i;
            let l = c.ZP.getMember(t.guildId, t.userId);
            return {
                username:
                    null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? void 0 : e.username,
                roleColor: null != (r = null == l ? void 0 : l.colorString) ? r : null,
                roleColorStrings: null != (i = null == l ? void 0 : l.colorStrings) ? i : null,
            };
        }, [t]),
        _ = (0, d.X7)(t.guildId, t.userId, null != x ? x : null);
    return (0, r.jsxs)("div", {
        className: m.systemMessageContainer,
        children: [
            (0, r.jsx)(a.Ucv, {
                className: m.icon,
                color: "currentColor",
                size: "sm",
            }),
            (0, r.jsx)("span", {
                className: m.boostMessage,
                children: (0, r.jsxs)(i.xvT, {
                    tag: "span",
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(o.u, {
                            text: g,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1000,
                            children: (0, r.jsx)(a.PUh, {
                                className: m.boostMessageUser,
                                variant: "text-md/semibold",
                                name: g,
                                colorString: null != v ? v : null,
                                colorStrings: _,
                            }),
                        }),
                        f.intl.string(p.default.plwH8d),
                    ],
                }),
            }),
            (0, r.jsx)(s.Z, {
                timestamp: n,
                timestampFormat: "L",
                className: m.timestamp,
            }),
        ],
    });
}
