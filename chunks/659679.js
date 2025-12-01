n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(793030),
    o = n(681715),
    l = n(481060),
    a = n(318713),
    s = n(665957),
    c = n(884902),
    u = n(130231),
    d = n(388032),
    p = n(238937);
function f(e) {
    let { boost: t } = e,
        { timestamp: n, username: f, roleColor: m, roleColorStrings: g } = (0, s._)(t),
        v = (0, c.X7)(t.guildId, t.userId, null != g ? g : null);
    return (0, r.jsxs)("div", {
        className: p.systemMessageContainer,
        children: [
            (0, r.jsx)(l.Ucv, {
                className: p.icon,
                color: "currentColor",
                size: "sm",
            }),
            (0, r.jsx)("span", {
                className: p.boostMessage,
                children: (0, r.jsxs)(i.xvT, {
                    tag: "span",
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(o.u, {
                            text: f,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1000,
                            children: (0, r.jsx)(l.PUh, {
                                className: p.boostMessageUser,
                                variant: "text-md/semibold",
                                name: f,
                                colorString: null != m ? m : null,
                                colorStrings: v,
                            }),
                        }),
                        d.intl.string(u.default.plwH8d),
                    ],
                }),
            }),
            (0, r.jsx)(a.Z, {
                timestamp: n,
                timestampFormat: "L",
                className: p.timestamp,
            }),
        ],
    });
}
