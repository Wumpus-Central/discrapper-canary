n.d(t, { R: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    a = n(590965),
    c = n(695346),
    u = n(51331),
    d = n(259580),
    h = n(626135),
    p = n(44609),
    m = n(731971),
    f = n(981631),
    g = n(388032),
    _ = n(190981);
let x = () => {
    var e;
    let [t, n] = i.useState(!1),
        l = c.G6.useSetting(),
        {
            nickname: x,
            dmsAllowed: b,
            showActivity: E,
            mutedServer: v,
            setNickname: j,
            setDmsAllowed: I,
            setShowActivity: O,
            setMutedServer: S,
            guildId: N,
            inviteCode: C,
        } = (0, m.XW)(),
        y = null == (e = a.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        A = (0, p.m4)({ location: "InviteSettingsControls" });
    return (0, r.jsxs)("div", {
        className: s()(_.editProfileContainer, { [_.opened]: t }),
        children: [
            (0, r.jsxs)(o.P3F, {
                className: _.header,
                onClick: () => {
                    t ||
                        h.default.track(f.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: N,
                            invite_code: C,
                        }),
                        n(!t);
                },
                children: [
                    (0, r.jsx)("div", {
                        className: _.headerIconWrapper,
                        children: (0, r.jsx)(o.ewm, { size: "md" }),
                    }),
                    (0, r.jsxs)("div", {
                        className: _.title,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: g.intl.string(g.t.A5wHQ0),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: g.intl.string(g.t.UKCSER),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: s()(_.caret, { [_.opened]: t }),
                        children: (0, r.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.DOWN,
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(_.customizationSection, { [_.opened]: t }, y ? null : _.condensed),
                children: [
                    y &&
                        (0, r.jsxs)("div", {
                            className: _.serverNickname,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: g.intl.string(g.t.me1lRk),
                                }),
                                (0, r.jsx)(o.oil, {
                                    placeholder: g.intl.string(g.t["09Q8ys"]),
                                    maxLength: f.l$U,
                                    value: x,
                                    onChange: j,
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.Z, {
                        title: g.intl.string(g.t["/2ed39"]),
                        value: b,
                        onChange: I,
                    }),
                    l &&
                        (0, r.jsx)(u.Z, {
                            title: g.intl.string(g.t.bN4m1N),
                            value: E,
                            onChange: O,
                        }),
                    A &&
                        (0, r.jsx)(u.Z, {
                            title: g.intl.string(g.t["0nZCqK"]),
                            value: v,
                            onChange: S,
                        }),
                ],
            }),
        ],
    });
};
