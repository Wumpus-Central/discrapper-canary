n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(498642),
    o = n(954571),
    c = n(743790),
    d = n(10077),
    u = n(652215),
    _ = n(536482),
    m = n(985018),
    A = n(185316);
function g(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: s } = e,
        o = (0, a.bG)([r.A], () => r.A.getMemberCount(t.id));
    return (0, i.jsxs)(l.BJc, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 20,
        children: [
            (0, i.jsx)("div", { className: A.FO, children: (0, i.jsx)(c.$, { guild: t, size: 48 }) }),
            (0, i.jsx)("div", {
                className: A.QH,
                children: (0, i.jsx)(l.dOG, {
                    label: t.name,
                    description: m.intl.format(m.t.zRl6XR, { count: o ?? 0 }),
                    checked: !n,
                    onChange: (e) => s({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let h = function () {
    let {
            guilds: e,
            searchQuery: t,
            setSearchQuery: n,
            sortOrder: a,
            setSortOrder: r,
            hasActivityRestrictedGuilds: c,
            onToggleAllActivityRestrictedGuilds: h,
            onToggleActivityRestrictedGuild: x,
            isActivityRestricted: p,
            numActivityRestrictedGuilds: E,
            numTotalGuilds: C,
        } = (0, d.M)(),
        T = (0, s.useId)();
    return (0, i.jsxs)("div", {
        className: A.iE,
        children: [
            (0, i.jsxs)("div", {
                className: A.N1,
                children: [
                    (0, i.jsx)(l.IWV, {
                        query: t,
                        onChange: n,
                        onClear: () => {
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: a,
                                activity_restricted_guild_count: E,
                                total_guild_count: C,
                            }),
                                n("");
                        },
                        onFocus: () =>
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: a,
                                activity_restricted_guild_count: E,
                                total_guild_count: C,
                            }),
                        onBlur: () =>
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: a,
                                activity_restricted_guild_count: E,
                                total_guild_count: C,
                            }),
                        placeholder: m.intl.string(m.t["H+nRYw"]),
                        "aria-label": m.intl.string(m.t["5h0QOP"]),
                        inputProps: { "aria-controls": T, "aria-expanded": !0 },
                    }),
                    e.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: A.gO,
                            children: [
                                (0, i.jsx)(l.l6P, {
                                    label: m.intl.string(m.t.LxVjvJ),
                                    hideLabel: !0,
                                    options: [
                                        {
                                            id: d.c.SERVER_ORDER,
                                            label: m.intl.string(m.t.STMPJ2),
                                            value: d.c.SERVER_ORDER,
                                        },
                                        {
                                            id: d.c.RECENTLY_JOINED,
                                            label: m.intl.string(m.t.CbaapP),
                                            value: d.c.RECENTLY_JOINED,
                                        },
                                        {
                                            id: d.c.ACTIVITY_SHARING_ON,
                                            label: m.intl.string(_.default.ZI51JZ),
                                            value: d.c.ACTIVITY_SHARING_ON,
                                        },
                                        {
                                            id: d.c.ACTIVITY_SHARING_OFF,
                                            label: m.intl.string(_.default["+kxafn"]),
                                            value: d.c.ACTIVITY_SHARING_OFF,
                                        },
                                    ],
                                    onSelectionChange: (e) => {
                                        o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: "sort_order_changed",
                                            sort_order: e,
                                            activity_restricted_guild_count: E,
                                            total_guild_count: C,
                                        }),
                                            r(e);
                                    },
                                    value: a,
                                    selectionMode: "single",
                                }),
                                (0, i.jsx)(l.QWc, {
                                    variant: "primary",
                                    onClick: h,
                                    text: c ? m.intl.string(m.t["7lxcLO"]) : m.intl.string(m.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(l.AC4, {
                "aria-live": "polite",
                role: "region",
                children: m.intl.format(_.default.EvzDff, { count: e.length }),
            }),
            (0, i.jsxs)("ul", {
                className: A.X1,
                id: T,
                "aria-label": m.intl.string(m.t["7hB4kg"]),
                children: [
                    0 === e.length &&
                        (0, i.jsx)("div", {
                            className: A.pb,
                            children: (0, i.jsx)(l.Text, {
                                className: A.R$,
                                variant: "text-lg/medium",
                                children: m.intl.string(m.t["Xe+fJM"]),
                            }),
                        }),
                    e.map((e) =>
                        (0, i.jsx)(
                            g,
                            { guild: e, isActivityRestricted: p(e.id), onToggleActivityRestrictedGuild: x },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
