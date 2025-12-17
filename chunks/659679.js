n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(793030),
    l = n(681715),
    o = n(481060),
    a = n(318713),
    s = n(665957),
    c = n(884902),
    u = n(556970),
    d = n(388032),
    f = n(676229);
function p(e) {
    let { boost: t } = e,
        { timestamp: n, username: p, roleColor: m, roleColorStrings: g } = (0, s._)(t),
        v = (0, c.X7)(t.guildId, t.userId, null != g ? g : null);
    return (0, r.jsxs)("div", {
        className: f.systemMessageContainer,
        children: [
            (0, r.jsx)(o.Ucv, {
                className: f.icon,
                color: "currentColor",
                size: "sm",
            }),
            (0, r.jsx)("span", {
                className: f.boostMessage,
                children: (0, r.jsxs)(i.xvT, {
                    tag: "span",
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(l.u, {
                            text: p,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1000,
                            children: (0, r.jsx)(o.PUh, {
                                className: f.boostMessageUser,
                                variant: "text-md/semibold",
                                name: p,
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
                className: f.timestamp,
            }),
        ],
    });
}
