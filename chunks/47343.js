n.d(t, { R: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(590965),
    c = n(695346),
    u = n(51331),
    d = n(259580),
    h = n(626135),
    f = n(44609),
    p = n(731971),
    g = n(981631),
    m = n(388032),
    _ = n(152143);
let x = () => {
    var e;
    let [t, n] = i.useState(!1),
        l = c.G6.useSetting(),
        {
            nickname: x,
            dmsAllowed: v,
            showActivity: E,
            mutedServer: b,
            setNickname: j,
            setDmsAllowed: I,
            setShowActivity: N,
            setMutedServer: O,
            guildId: y,
            inviteCode: S,
        } = (0, p.XW)(),
        C = null == (e = a.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        Z = (0, f.m4)({ location: "InviteSettingsControls" });
    return (0, r.jsxs)("div", {
        className: o()(_.editProfileContainer, { [_.opened]: t }),
        children: [
            (0, r.jsxs)(s.P3F, {
                className: _.header,
                onClick: () => {
                    t ||
                        h.default.track(g.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: y,
                            invite_code: S,
                        }),
                        n(!t);
                },
                children: [
                    (0, r.jsx)("div", {
                        className: _.headerIconWrapper,
                        children: (0, r.jsx)(s.ewm, { size: "md" }),
                    }),
                    (0, r.jsxs)("div", {
                        className: _.title,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: m.intl.string(m.t.A5wHQ0),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: m.intl.string(m.t.UKCSER),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: o()(_.caret, { [_.opened]: t }),
                        children: (0, r.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.DOWN,
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(_.customizationSection, { [_.opened]: t }, C ? null : _.condensed),
                children: [
                    C &&
                        (0, r.jsxs)("div", {
                            className: _.serverNickname,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: m.intl.string(m.t.me1lRk),
                                }),
                                (0, r.jsx)(s.oil, {
                                    placeholder: m.intl.string(m.t["09Q8ys"]),
                                    maxLength: g.l$U,
                                    value: x,
                                    onChange: j,
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.Z, {
                        title: m.intl.string(m.t["/2ed39"]),
                        value: v,
                        onChange: I,
                    }),
                    l &&
                        (0, r.jsx)(u.Z, {
                            title: m.intl.string(m.t.bN4m1N),
                            value: E,
                            onChange: N,
                        }),
                    Z &&
                        (0, r.jsx)(u.Z, {
                            title: m.intl.string(m.t["0nZCqK"]),
                            value: b,
                            onChange: O,
                        }),
                ],
            }),
        ],
    });
};
