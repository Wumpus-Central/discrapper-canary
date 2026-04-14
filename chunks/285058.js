n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(498642),
    o = n(954571),
    d = n(743790),
    c = n(10077),
    u = n(652215),
    m = n(634411),
    g = n(985018),
    _ = n(829505);
function x(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: s } = e,
        o = (0, l.bG)([a.A], () => a.A.getMemberCount(t.id));
    return (0, i.jsxs)(r.BJc, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, i.jsx)("div", { className: _.FO, children: (0, i.jsx)(d.$, { guild: t, size: 48 }) }),
            (0, i.jsx)("div", {
                className: _.QH,
                children: (0, i.jsx)(r.dOG, {
                    label: t.name,
                    description: g.intl.format(g.t.zRl6XR, { count: o ?? 0 }),
                    checked: !n,
                    onChange: (e) => s({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let h = function (e) {
    let { notice: t } = e,
        {
            guilds: n,
            searchQuery: l,
            setSearchQuery: a,
            sortOrder: d,
            setSortOrder: h,
            hasActivityRestrictedGuilds: A,
            onToggleAllActivityRestrictedGuilds: p,
            onToggleActivityRestrictedGuild: T,
            isActivityRestricted: f,
            numActivityRestrictedGuilds: S,
            numTotalGuilds: E,
        } = (0, c.M)(),
        b = (0, s.useId)(),
        C = (0, s.useRef)(null),
        v = (0, s.useMemo)(
            () => [
                { id: c.c.SERVER_ORDER, label: g.intl.string(g.t.STMPJ2), value: c.c.SERVER_ORDER },
                { id: c.c.RECENTLY_JOINED, label: g.intl.string(g.t.CbaapP), value: c.c.RECENTLY_JOINED },
                { id: c.c.ACTIVITY_SHARING_ON, label: g.intl.string(m.default.ZI51JZ), value: c.c.ACTIVITY_SHARING_ON },
                {
                    id: c.c.ACTIVITY_SHARING_OFF,
                    label: g.intl.string(m.default["+kxafn"]),
                    value: c.c.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        N = v.find((e) => e.value === d)?.label ?? "";
    return (0, i.jsxs)("div", {
        className: _.iE,
        children: [
            t,
            (0, i.jsxs)("div", {
                className: _.N1,
                children: [
                    (0, i.jsx)(r.IWV, {
                        query: l,
                        onChange: a,
                        onClear: () => {
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: d,
                                activity_restricted_guild_count: S,
                                total_guild_count: E,
                            }),
                                a("");
                        },
                        onFocus: () =>
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: d,
                                activity_restricted_guild_count: S,
                                total_guild_count: E,
                            }),
                        onBlur: () =>
                            o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: d,
                                activity_restricted_guild_count: S,
                                total_guild_count: E,
                            }),
                        placeholder: g.intl.string(g.t["H+nRYw"]),
                        "aria-label": g.intl.string(g.t["5h0QOP"]),
                        inputProps: { "aria-controls": b, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: _.gO,
                            children: [
                                (0, i.jsx)(r.YNO, {
                                    targetElementRef: C,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, i.jsx)(r.W1t, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": g.intl.string(g.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, i.jsx)(r.rXV, {
                                                children: v.map((e) => {
                                                    let { id: t, label: n, value: s } = e;
                                                    return (0, i.jsx)(
                                                        r.iDA,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: d === s,
                                                            action: () => {
                                                                o.default.track(
                                                                    u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: s,
                                                                        activity_restricted_guild_count: S,
                                                                        total_guild_count: E,
                                                                    },
                                                                ),
                                                                    h(s);
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, i.jsxs)(r.DUT, {
                                            ...e,
                                            innerRef: C,
                                            className: _.Ku,
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: N,
                                                }),
                                                (0, i.jsx)(r.abt, { size: "xs", color: r.LU0.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, i.jsx)(r.QWc, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: p,
                                    text: A ? g.intl.string(g.t["7lxcLO"]) : g.intl.string(g.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(r.AC4, {
                "aria-live": "polite",
                role: "region",
                children: g.intl.format(m.default.EvzDff, { count: n.length }),
            }),
            (0, i.jsxs)("ul", {
                className: _.X1,
                id: b,
                "aria-label": g.intl.string(g.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, i.jsx)("div", {
                            className: _.pb,
                            children: (0, i.jsx)(r.Text, {
                                className: _.R$,
                                variant: "text-lg/medium",
                                children: g.intl.string(g.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, i.jsx)(
                            x,
                            { guild: e, isActivityRestricted: f(e.id), onToggleActivityRestrictedGuild: T },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
