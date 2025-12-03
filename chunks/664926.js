n.d(l, { Z: () => d });
var t = n(54381);
n(473749);
var a = n(399606),
    i = n(481060),
    r = n(700582),
    s = n(594174),
    u = n(388032),
    c = n(105156);
function d(e) {
    let { friendMemberIds: l } = e,
        n = (0, a.Wu)([s.default], () =>
            l
                .slice(0, 3)
                .map((e) => s.default.getUser(e))
                .filter((e) => null != e),
        );
    if (0 === n.length) return null;
    let d = n[0],
        o = {
            count: l.length - 1,
            username: d.username,
            username2: 2 === l.length && n.length >= 2 ? n[1].username : "",
        },
        m = u.intl.format(u.t["5NHEPu"], o);
    return (0, t.jsxs)("div", {
        className: c.container,
        children: [
            (0, t.jsx)("div", {
                className: c.avatarStack,
                children: n.map((e, l) =>
                    (0, t.jsx)(
                        "div",
                        {
                            className: c.avatarWrapper,
                            style: { zIndex: n.length - l },
                            children: (0, t.jsx)(r.Z, {
                                user: e,
                                size: i.EFr.SIZE_16,
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, t.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: m,
            }),
        ],
    });
}
