"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(417597),
    r = n(397927),
    l = n(966327),
    a = n(287809),
    o = n(985018),
    d = n(290616);
function c(e) {
    let { friendMemberIds: t } = e,
        n = (0, s.yK)([a.default], () =>
            t
                .slice(0, 3)
                .map((e) => a.default.getUser(e))
                .filter((e) => null != e),
        );
    if (0 === n.length) return null;
    let c = n[0],
        u = {
            count: t.length - 1,
            username: c.username,
            username2: 2 === t.length && n.length >= 2 ? n[1].username : "",
        },
        h = o.intl.format(o.t["5NHEPu"], u);
    return (0, i.jsxs)("div", {
        className: d.kL,
        children: [
            (0, i.jsx)("div", {
                className: d.yA,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: d.R3,
                            style: { zIndex: n.length - t },
                            children: (0, i.jsx)(l.A, { user: e, size: r._3J.SIZE_16 }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "text-subtle", children: h }),
        ],
    });
}
