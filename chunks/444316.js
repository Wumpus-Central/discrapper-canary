i.d(t, { A: () => g });
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(417597),
    d = i(397927),
    o = i(966327),
    c = i(287809),
    u = i(260451),
    m = i(985018),
    x = i(290616);
function g(e) {
    let { friendMemberIds: t, className: i, avatarSize: a = d._3J.SIZE_16 } = e,
        g = (0, r.yK)([c.default], () =>
            t
                .slice(0, 3)
                .map((e) => c.default.getUser(e))
                .filter((e) => null != e),
        ),
        { enabled: h } = u.SH.useConfig({ location: "InviteFriendMembers" }),
        _ = n.useCallback(
            (e, t) =>
                (0, l.jsx)(d.Text, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: e }, t),
            [],
        );
    if (0 === g.length) return null;
    let p = g[0],
        A = {
            count: t.length - 1,
            username: p.username,
            username2: 2 === t.length && g.length >= 2 ? g[1].username : "",
        },
        j = h ? m.intl.format(m.t.qnYumI, { usernameHook: _, ...A }) : m.intl.format(m.t["5NHEPu"], A);
    return (0, l.jsxs)("div", {
        className: s()(x.kL, i),
        children: [
            (0, l.jsx)("div", {
                className: x.yA,
                style: { maxHeight: `${(0, d.FT9)(a)}px` },
                children: g.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: x.R3,
                            style: { zIndex: g.length - t },
                            children: (0, l.jsx)(o.A, { user: e, size: a }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsx)(d.Text, { variant: "text-sm/normal", color: "text-subtle", children: j }),
        ],
    });
}
