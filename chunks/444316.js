"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(417597),
    a = n(397927),
    o = n(966327),
    d = n(287809),
    c = n(985018),
    u = n(36522);
function h(e) {
    let { friendMemberIds: t, className: n, avatarSize: s = a._3J.SIZE_16 } = e,
        h = (0, l.yK)([d.default], () =>
            t
                .slice(0, 3)
                .map((e) => d.default.getUser(e))
                .filter((e) => null != e),
        );
    if (0 === h.length) return null;
    let _ = h[0],
        p = {
            count: t.length - 1,
            username: _.username,
            username2: 2 === t.length && h.length >= 2 ? h[1].username : "",
        },
        g = c.intl.format(c.t["5NHEPu"], p);
    return (0, i.jsxs)("div", {
        className: r()(u.kL, n),
        children: [
            (0, i.jsx)("div", {
                className: u.yA,
                style: { maxHeight: `${(0, a.FT9)(s)}px` },
                children: h.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: u.R3,
                            style: { zIndex: h.length - t },
                            children: (0, i.jsx)(o.A, { user: e, size: s }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(a.Text, { variant: "text-sm/normal", color: "text-subtle", children: g }),
        ],
    });
}
