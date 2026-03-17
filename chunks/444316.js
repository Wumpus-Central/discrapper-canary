"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(417597),
    o = n(397927),
    d = n(966327),
    c = n(287809),
    u = n(260451),
    h = n(985018),
    _ = n(36522);
function p(e) {
    let { friendMemberIds: t, className: n, avatarSize: r = o._3J.SIZE_16 } = e,
        p = (0, a.yK)([c.default], () =>
            t
                .slice(0, 3)
                .map((e) => c.default.getUser(e))
                .filter((e) => null != e),
        ),
        { enabled: g } = u.SH.useConfig({ location: "InviteFriendMembers" }),
        m = s.useCallback(
            (e, t) =>
                (0, i.jsx)(o.Text, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: e }, t),
            [],
        );
    if (0 === p.length) return null;
    let f = p[0],
        A = {
            count: t.length - 1,
            username: f.username,
            username2: 2 === t.length && p.length >= 2 ? p[1].username : "",
        },
        x = g ? h.intl.format(h.t.qnYumI, { usernameHook: m, ...A }) : h.intl.format(h.t["5NHEPu"], A);
    return (0, i.jsxs)("div", {
        className: l()(_.kL, n),
        children: [
            (0, i.jsx)("div", {
                className: _.yA,
                style: { maxHeight: `${(0, o.FT9)(r)}px` },
                children: p.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: _.R3,
                            style: { zIndex: p.length - t },
                            children: (0, i.jsx)(d.A, { user: e, size: r }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(o.Text, { variant: "text-sm/normal", color: "text-subtle", children: x }),
        ],
    });
}
