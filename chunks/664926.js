t.d(l, { Z: () => d });
var n = t(54381);
t(473749);
var i = t(399606),
    a = t(481060),
    r = t(700582),
    s = t(594174),
    u = t(388032),
    c = t(105156);
function d(e) {
    let { friendMemberIds: l } = e,
        t = (0, i.Wu)([s.default], () =>
            l
                .slice(0, 3)
                .map((e) => s.default.getUser(e))
                .filter((e) => null != e),
        );
    if (0 === t.length) return null;
    let d = t[0],
        o = {
            count: l.length - 1,
            username: d.username,
            username2: 2 === l.length && t.length >= 2 ? t[1].username : "",
        },
        m = u.intl.format(u.t["5NHEPu"], o);
    return (0, n.jsxs)("div", {
        className: c.container,
        children: [
            (0, n.jsx)("div", {
                className: c.avatarStack,
                children: t.map((e, l) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: c.avatarWrapper,
                            style: { zIndex: t.length - l },
                            children: (0, n.jsx)(r.Z, {
                                user: e,
                                size: a.EFr.SIZE_16,
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, n.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: m,
            }),
        ],
    });
}
