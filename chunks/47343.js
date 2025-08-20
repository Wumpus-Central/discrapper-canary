n.d(t, { R: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
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
    g = n(981631),
    f = n(388032),
    _ = n(152143);
let x = () => {
    var e;
    let [t, n] = i.useState(!1),
        l = c.G6.useSetting(),
        {
            nickname: x,
            dmsAllowed: E,
            showActivity: v,
            mutedServer: j,
            setNickname: b,
            setDmsAllowed: I,
            setShowActivity: O,
            setMutedServer: N,
            guildId: y,
            inviteCode: S,
        } = (0, m.XW)(),
        C = null == (e = a.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        Z = (0, p.m4)({ location: "InviteSettingsControls" });
    return (0, r.jsxs)("div", {
        className: s()(_.editProfileContainer, { [_.opened]: t }),
        children: [
            (0, r.jsxs)(o.P3F, {
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
                        children: (0, r.jsx)(o.ewm, { size: "md" }),
                    }),
                    (0, r.jsxs)("div", {
                        className: _.title,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: f.intl.string(f.t.A5wHQ0),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: f.intl.string(f.t.UKCSER),
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
                className: s()(_.customizationSection, { [_.opened]: t }, C ? null : _.condensed),
                children: [
                    C &&
                        (0, r.jsxs)("div", {
                            className: _.serverNickname,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: f.intl.string(f.t.me1lRk),
                                }),
                                (0, r.jsx)(o.oil, {
                                    placeholder: f.intl.string(f.t["09Q8ys"]),
                                    maxLength: g.l$U,
                                    value: x,
                                    onChange: b,
                                }),
                            ],
                        }),
                    (0, r.jsx)(u.Z, {
                        title: f.intl.string(f.t["/2ed39"]),
                        value: E,
                        onChange: I,
                    }),
                    l &&
                        (0, r.jsx)(u.Z, {
                            title: f.intl.string(f.t.bN4m1N),
                            value: v,
                            onChange: O,
                        }),
                    Z &&
                        (0, r.jsx)(u.Z, {
                            title: f.intl.string(f.t["0nZCqK"]),
                            value: j,
                            onChange: N,
                        }),
                ],
            }),
        ],
    });
};
