n.d(l, { R: () => h });
var t = n(54381),
    i = n(473749),
    a = n(481060),
    r = n(590965),
    s = n(590149),
    u = n(695346),
    c = n(51331),
    d = n(626135),
    o = n(978986),
    m = n(981631),
    x = n(388032),
    g = n(181174);
let h = () => {
    var e;
    let l = u.G6.useSetting(),
        {
            nickname: n,
            dmsAllowed: h,
            showActivity: j,
            setNickname: p,
            setDmsAllowed: v,
            setShowActivity: N,
            guildId: f,
            inviteCode: E,
        } = (0, o.XW)(),
        _ = null == (e = r.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        Z = i.useCallback(() => {
            d.default.track(m.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: f,
                invite_code: E,
            });
        }, [f, E]);
    return (0, t.jsxs)(s.Z, {
        icon: (0, t.jsx)(a.ewm, { size: "md" }),
        title: x.intl.string(x.t["A5wHQ/"]),
        subtitle: x.intl.string(x.t.UKCSEd),
        onOpen: Z,
        maxHeight: _ ? 220 : 130,
        children: [
            _ &&
                (0, t.jsxs)("div", {
                    className: g.serverNickname,
                    children: [
                        (0, t.jsx)(a.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: x.intl.string(x.t.me1lRk),
                        }),
                        (0, t.jsx)(a.oil, {
                            placeholder: x.intl.string(x.t["09Q8yp"]),
                            maxLength: m.l$U,
                            value: n,
                            onChange: p,
                        }),
                    ],
                }),
            (0, t.jsx)(c.ZP, {
                title: x.intl.string(x.t["/2ed37"]),
                value: h,
                onChange: v,
            }),
            l &&
                (0, t.jsx)(c.ZP, {
                    title: x.intl.string(x.t.bN4m1G),
                    value: j,
                    onChange: N,
                }),
        ],
    });
};
