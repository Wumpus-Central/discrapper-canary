n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(498642),
    l = n(954571),
    c = n(743790),
    u = n(10077),
    d = n(652215),
    f = n(536482),
    p = n(985018),
    _ = n(185316);
function h(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, a.bG)([o.A], () => o.A.getMemberCount(t.id));
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
                description: p.intl.format(p.t.zRl6XR, { count: null != l ? l : 0 }),
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
let m = function () {
    let {
            guilds: e,
            searchQuery: t,
            setSearchQuery: n,
            sortOrder: a,
            setSortOrder: o,
            hasActivityRestrictedGuilds: c,
            onToggleAllActivityRestrictedGuilds: m,
            onToggleActivityRestrictedGuild: g,
            isActivityRestricted: E,
            numActivityRestrictedGuilds: b,
            numTotalGuilds: y,
        } = (0, u.M)(),
        O = () => {
            l.default.track(d.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                interaction: "search_cleared",
                sort_order: a,
                activity_restricted_guild_count: b,
                total_guild_count: y,
            }),
                n("");
        },
        A = (0, i.useId)();
    return (0, r.jsxs)("div", {
        className: _.iE,
        children: [
            (0, r.jsxs)("div", {
                className: _.N1,
                children: [
                    (0, r.jsx)(s.IWV, {
                        query: t,
                        onChange: n,
                        onClear: O,
                        onFocus: () =>
                            l.default.track(d.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: a,
                                activity_restricted_guild_count: b,
                                total_guild_count: y,
                            }),
                        onBlur: () =>
                            l.default.track(d.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: a,
                                activity_restricted_guild_count: b,
                                total_guild_count: y,
                            }),
                        placeholder: p.intl.string(p.t["H+nRYw"]),
                        "aria-label": p.intl.string(p.t["5h0QOP"]),
                        inputProps: {
                            "aria-controls": A,
                            "aria-expanded": !0,
                        },
                    }),
                    e.length > 0 &&
                        (0, r.jsxs)("div", {
                            className: _.gO,
                            children: [
                                (0, r.jsx)(s.l6P, {
                                    label: p.intl.string(p.t.LxVjvJ),
                                    hideLabel: !0,
                                    options: [
                                        {
                                            id: u.c.SERVER_ORDER,
                                            label: p.intl.string(p.t.STMPJ2),
                                            value: u.c.SERVER_ORDER,
                                        },
                                        {
                                            id: u.c.RECENTLY_JOINED,
                                            label: p.intl.string(p.t.CbaapP),
                                            value: u.c.RECENTLY_JOINED,
                                        },
                                        {
                                            id: u.c.ACTIVITY_SHARING_ON,
                                            label: p.intl.string(f.default.ZI51JZ),
                                            value: u.c.ACTIVITY_SHARING_ON,
                                        },
                                        {
                                            id: u.c.ACTIVITY_SHARING_OFF,
                                            label: p.intl.string(f.default["+kxafn"]),
                                            value: u.c.ACTIVITY_SHARING_OFF,
                                        },
                                    ],
                                    onSelectionChange: (e) => {
                                        l.default.track(d.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: "sort_order_changed",
                                            sort_order: e,
                                            activity_restricted_guild_count: b,
                                            total_guild_count: y,
                                        }),
                                            o(e);
                                    },
                                    value: a,
                                    selectionMode: "single",
                                }),
                                (0, r.jsx)(s.QWc, {
                                    variant: "primary",
                                    onClick: m,
                                    text: c ? p.intl.string(p.t["7lxcLO"]) : p.intl.string(p.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(s.AC4, {
                "aria-live": "polite",
                role: "region",
                children: p.intl.format(f.default.EvzDff, { count: e.length }),
            }),
            (0, r.jsxs)("ul", {
                className: _.X1,
                id: A,
                "aria-label": p.intl.string(p.t["7hB4kg"]),
                children: [
                    0 === e.length &&
                        (0, r.jsx)("div", {
                            className: _.pb,
                            children: (0, r.jsx)(s.Text, {
                                className: _.R$,
                                variant: "text-lg/medium",
                                children: p.intl.string(p.t["Xe+fJM"]),
                            }),
                        }),
                    e.map((e) =>
                        (0, r.jsx)(
                            h,
                            {
                                guild: e,
                                isActivityRestricted: E(e.id),
                                onToggleActivityRestrictedGuild: g,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
