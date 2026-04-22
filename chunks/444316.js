t.d(i, { A: () => x });
var l = t(627968),
    s = t(64700),
    a = t(503698),
    n = t.n(a),
    r = t(417597),
    d = t(778712),
    o = t(834730),
    c = t(966327),
    u = t(287809),
    h = t(260451),
    m = t(985018),
    _ = t(197691);
function x(e) {
    let { friendMemberIds: i, className: t, avatarSize: a = d._3.SIZE_16 } = e,
        x = (0, r.yK)([u.default], () =>
            i
                .slice(0, 3)
                .map((e) => u.default.getUser(e))
                .filter((e) => null != e),
        ),
        { enabled: g } = h.SH.useConfig({ location: "InviteFriendMembers" }),
        A = s.useCallback(
            (e, i) => (0, l.jsx)(o.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: e }, i),
            [],
        );
    if (0 === x.length) return null;
    let p = x[0],
        v = {
            count: i.length - 1,
            username: p.username,
            username2: 2 === i.length && x.length >= 2 ? x[1].username : "",
        },
        E = g ? m.intl.format(m.t.qnYumI, { usernameHook: A, ...v }) : m.intl.format(m.t["5NHEPu"], v);
    return (0, l.jsxs)("div", {
        className: n()(_.kL, t),
        children: [
            (0, l.jsx)("div", {
                className: _.yA,
                style: { maxHeight: `${(0, d.FT)(a)}px` },
                children: x.map((e, i) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: _.R3,
                            style: { zIndex: x.length - i },
                            children: (0, l.jsx)(c.A, { user: e, size: a }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", children: E }),
        ],
    });
}
