l.d(t, { L: () => p });
var n = l(627968),
    i = l(64700),
    a = l(397927),
    s = l(539895),
    r = l(844330),
    c = l(253932),
    u = l(650832),
    d = l(954571),
    o = l(960736),
    m = l(652215),
    g = l(985018),
    x = l(117081);
let h = () => (0, n.jsx)("div", { className: x.m });
function j(e) {
    let { label: t, children: l } = e;
    return (0, n.jsxs)(a.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(a.Text, { variant: "text-sm/medium", color: "text-default", children: t }), l],
    });
}
function A(e) {
    let { label: t, checked: l, onChange: i } = e;
    return (0, n.jsxs)(a.BJc, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, n.jsx)(a.Text, { variant: "text-sm/medium", color: "text-default", children: t }),
            (0, n.jsx)(u.Ay, { value: l, onChange: i, title: "" }),
        ],
    });
}
let p = () => {
    let e = c.tz.useSetting(),
        {
            nickname: t,
            dmsAllowed: l,
            showActivity: u,
            setNickname: x,
            setDmsAllowed: p,
            setShowActivity: _,
            guildId: E,
            inviteCode: N,
        } = (0, o.lD)(),
        v = s.A.getProps().invite?.is_nickname_changeable,
        f = i.useCallback(() => {
            d.default.track(m.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, { guild_id: E, invite_code: N });
        }, [E, N]);
    return (0, n.jsxs)(r.A, {
        icon: (0, n.jsx)(a.Zes, { size: "refresh_sm" }),
        title: g.intl.string(g.t["A5wHQ/"]),
        subtitle: g.intl.string(g.t.UKCSEd),
        onOpen: f,
        maxHeight: v ? 220 : 130,
        children: [
            v &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(j, {
                            label: g.intl.string(g.t.me1lRk),
                            children: (0, n.jsx)(a.ksK, {
                                placeholder: g.intl.string(g.t["09Q8yp"]),
                                maxLength: m.d0r,
                                value: t,
                                onChange: x,
                            }),
                        }),
                        (0, n.jsx)(h, {}),
                    ],
                }),
            (0, n.jsx)(A, { label: g.intl.string(g.t["/2ed37"]), checked: l, onChange: p }),
            (0, n.jsx)(h, {}),
            e && (0, n.jsx)(A, { label: g.intl.string(g.t.bN4m1G), checked: u, onChange: _ }),
        ],
    });
};
