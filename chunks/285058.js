n.d(t, {
    A: () => A,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(498642),
    o = n(954571),
    c = n(743790),
    d = n(10077),
    u = n(652215),
    _ = n(536482),
    p = n(985018),
    m = n(185316);

function g(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        o = (0, l.bG)([a.A], () => a.A.getMemberCount(t.id));
    return (0, r.jsxs)(s.BJc, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 20,
        children: [
            (0, r.jsx)(c.$, {
                guild: t,
                size: 48,
            }),
            (0, r.jsx)(s.dOG, {
                label: t.name,
                description: p.intl.format(p.t.zRl6XR, {
                    count: null != o ? o : 0,
                }),
                checked: !n,
                onChange: (e) =>
                    i({
                        checked: e,
                        guildId: t.id,
                    }),
            }),
        ],
    });
}
let A = function () {
    let {
            guilds: e,
            searchQuery: t,
            setSearchQuery: n,
            sortOrder: l,
            setSortOrder: a,
            hasActivityRestrictedGuilds: c,
            onToggleAllActivityRestrictedGuilds: A,
            onToggleActivityRestrictedGuild: f,
            isActivityRestricted: h,
            numActivityRestrictedGuilds: b,
            numTotalGuilds: E,
        } = (0, d.M)(),
        x = (0, i.useId)();
    return (0, r.jsxs)("div", {
        className: m.iE,
        children: [
            (0, r.jsxs)("div", {
                className: m.N1,
                children: [
                    (0, r.jsx)(s.IWV, {
                        query: t,
                        onChange: n,
                        onClear: () => {
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: b,
                                total_guild_count: E,
                            }),
                                n("");
                        },
                        onFocus: () =>
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: b,
                                total_guild_count: E,
                            }),
                        onBlur: () =>
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: b,
                                total_guild_count: E,
                            }),
                        placeholder: p.intl.string(p.t["H+nRYw"]),
                        "aria-label": p.intl.string(p.t["5h0QOP"]),
                        inputProps: {
                            "aria-controls": x,
                            "aria-expanded": !0,
                        },
                    }),
                    e.length > 0 &&
                        (0, r.jsxs)("div", {
                            className: m.gO,
                            children: [
                                (0, r.jsx)(s.l6P, {
                                    label: p.intl.string(p.t.LxVjvJ),
                                    hideLabel: !0,
                                    options: [
                                        {
                                            id: d.c.SERVER_ORDER,
                                            label: p.intl.string(p.t.STMPJ2),
                                            value: d.c.SERVER_ORDER,
                                        },
                                        {
                                            id: d.c.RECENTLY_JOINED,
                                            label: p.intl.string(p.t.CbaapP),
                                            value: d.c.RECENTLY_JOINED,
                                        },
                                        {
                                            id: d.c.ACTIVITY_SHARING_ON,
                                            label: p.intl.string(_.default.ZI51JZ),
                                            value: d.c.ACTIVITY_SHARING_ON,
                                        },
                                        {
                                            id: d.c.ACTIVITY_SHARING_OFF,
                                            label: p.intl.string(_.default["+kxafn"]),
                                            value: d.c.ACTIVITY_SHARING_OFF,
                                        },
                                    ],
                                    onSelectionChange: (e) => {
                                        o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: "sort_order_changed",
                                            sort_order: e,
                                            activity_restricted_guild_count: b,
                                            total_guild_count: E,
                                        }),
                                            a(e);
                                    },
                                    value: l,
                                    selectionMode: "single",
                                }),
                                (0, r.jsx)(s.QWc, {
                                    variant: "primary",
                                    onClick: A,
                                    text: c ? p.intl.string(p.t["7lxcLO"]) : p.intl.string(p.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(s.AC4, {
                "aria-live": "polite",
                role: "region",
                children: p.intl.format(_.default.EvzDff, {
                    count: e.length,
                }),
            }),
            (0, r.jsxs)("ul", {
                className: m.X1,
                id: x,
                "aria-label": p.intl.string(p.t["7hB4kg"]),
                children: [
                    0 === e.length &&
                        (0, r.jsx)("div", {
                            className: m.pb,
                            children: (0, r.jsx)(s.Text, {
                                className: m.R$,
                                variant: "text-lg/medium",
                                children: p.intl.string(p.t["Xe+fJM"]),
                            }),
                        }),
                    e.map((e) =>
                        (0, r.jsx)(
                            g,
                            {
                                guild: e,
                                isActivityRestricted: h(e.id),
                                onToggleActivityRestrictedGuild: f,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
