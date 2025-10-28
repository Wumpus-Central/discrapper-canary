n.d(t, { R: () => m });
var r = n(951288),
    i = n(647438),
    s = n(481060),
    l = n(590965),
    a = n(590149),
    o = n(695346),
    c = n(51331),
    u = n(626135),
    d = n(978986),
    h = n(981631),
    g = n(388032),
    p = n(181174);
let m = () => {
    var e;
    let t = o.G6.useSetting(),
        {
            nickname: n,
            dmsAllowed: m,
            showActivity: f,
            setNickname: _,
            setDmsAllowed: x,
            setShowActivity: E,
            guildId: v,
            inviteCode: b,
        } = (0, d.XW)(),
        j = null == (e = l.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        I = i.useCallback(() => {
            u.default.track(h.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: v,
                invite_code: b,
            });
        }, [v, b]);
    return (0, r.jsxs)(a.Z, {
        className: p.accordion,
        icon: (0, r.jsx)(s.ewm, { size: "md" }),
        title: g.intl.string(g.t["A5wHQ/"]),
        subtitle: g.intl.string(g.t.UKCSEd),
        onOpen: I,
        maxHeight: j ? 220 : 130,
        children: [
            j &&
                (0, r.jsxs)("div", {
                    className: p.serverNickname,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: g.intl.string(g.t.me1lRk),
                        }),
                        (0, r.jsx)(s.oil, {
                            placeholder: g.intl.string(g.t["09Q8yp"]),
                            maxLength: h.l$U,
                            value: n,
                            onChange: _,
                        }),
                    ],
                }),
            (0, r.jsx)(c.ZP, {
                title: g.intl.string(g.t["/2ed37"]),
                value: m,
                onChange: x,
            }),
            t &&
                (0, r.jsx)(c.ZP, {
                    title: g.intl.string(g.t.bN4m1G),
                    value: f,
                    onChange: E,
                }),
        ],
    });
};
