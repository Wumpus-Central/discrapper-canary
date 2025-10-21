n.d(t, { R: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(590965),
    c = n(695346),
    u = n(51331),
    d = n(259580),
    h = n(626135),
    g = n(978986),
    p = n(981631),
    m = n(388032),
    f = n(181174);
let _ = () => {
    var e;
    let [t, n] = i.useState(!1),
        s = c.G6.useSetting(),
        {
            nickname: _,
            dmsAllowed: x,
            showActivity: E,
            setNickname: v,
            setDmsAllowed: b,
            setShowActivity: j,
            guildId: I,
            inviteCode: N,
        } = (0, g.XW)(),
        y = null == (e = o.Z.getProps().invite) ? void 0 : e.is_nickname_changeable;
    return (0, r.jsxs)("div", {
        className: l()(f.editProfileContainer, { [f.opened]: t }),
        children: [
            (0, r.jsxs)(a.P3F, {
                className: f.header,
                onClick: () => {
                    t ||
                        h.default.track(p.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: I,
                            invite_code: N,
                        }),
                        n(!t);
                },
                children: [
                    (0, r.jsx)("div", {
                        className: f.headerIconWrapper,
                        children: (0, r.jsx)(a.ewm, { size: "md" }),
                    }),
                    (0, r.jsxs)("div", {
                        className: f.title,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: m.intl.string(m.t["A5wHQ/"]),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: m.intl.string(m.t.UKCSEd),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: l()(f.caret, { [f.opened]: t }),
                        children: (0, r.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.DOWN,
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(f.customizationSection, { [f.opened]: t }, y ? null : f.condensed),
                children: [
                    y &&
                        (0, r.jsxs)("div", {
                            className: f.serverNickname,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: m.intl.string(m.t.me1lRk),
                                }),
                                (0, r.jsx)(a.oil, {
                                    placeholder: m.intl.string(m.t["09Q8yp"]),
                                    maxLength: p.l$U,
                                    value: _,
                                    onChange: v,
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.ZP, {
                        title: m.intl.string(m.t["/2ed37"]),
                        value: x,
                        onChange: b,
                    }),
                    s &&
                        (0, r.jsx)(u.ZP, {
                            title: m.intl.string(m.t.bN4m1G),
                            value: E,
                            onChange: j,
                        }),
                ],
            }),
        ],
    });
};
