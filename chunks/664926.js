n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(399606),
    s = n(481060),
    l = n(700582),
    a = n(594174),
    o = n(388032),
    c = n(105156);
function u(e) {
    let { friendMemberIds: t } = e,
        n = (0, i.Wu)([a.default], () =>
            t
                .slice(0, 3)
                .map((e) => a.default.getUser(e))
                .filter((e) => null != e),
        );
    if (0 === n.length) return null;
    let u = n[0],
        d = {
            count: t.length - 1,
            username: u.username,
            username2: 2 === t.length && n.length >= 2 ? n[1].username : "",
        },
        h = o.intl.format(o.t["5NHEPu"], d);
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsx)("div", {
                className: c.avatarStack,
                children: n.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: c.avatarWrapper,
                            style: { zIndex: n.length - t },
                            children: (0, r.jsx)(l.Z, {
                                user: e,
                                size: s.EFr.SIZE_16,
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: h,
            }),
        ],
    });
}
