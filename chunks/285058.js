n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(331322),
    r = n(243721),
    o = n(892547),
    d = n(265872),
    u = n(861672),
    c = n(477782),
    g = n(939249),
    m = n(834730),
    _ = n(847374),
    A = n(827734),
    h = n(123292),
    p = n(140735),
    x = n(498642),
    E = n(954571),
    T = n(743790),
    S = n(10077),
    f = n(652215),
    b = n(395277),
    C = n(985018),
    v = n(842449);
function N(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: s } = e,
        o = (0, l.bG)([x.A], () => x.A.getMemberCount(t.id));
    return (0, i.jsxs)(a.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, i.jsx)("div", { className: v.FO, children: (0, i.jsx)(T.K, { guild: t, size: 48 }) }),
            (0, i.jsx)("div", {
                className: v.QH,
                children: (0, i.jsx)(r.d, {
                    label: t.name,
                    description: C.intl.format(C.t.zRl6XR, { count: o ?? 0 }),
                    checked: !n,
                    onChange: (e) => s({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let I = function (e) {
    let { notice: t } = e,
        {
            guilds: n,
            searchQuery: l,
            setSearchQuery: a,
            sortOrder: r,
            setSortOrder: x,
            hasActivityRestrictedGuilds: T,
            onToggleAllActivityRestrictedGuilds: I,
            onToggleActivityRestrictedGuild: y,
            isActivityRestricted: j,
            numActivityRestrictedGuilds: O,
            numTotalGuilds: R,
        } = (0, S.M)(),
        L = (0, s.useId)(),
        D = (0, s.useRef)(null),
        P = (0, s.useMemo)(
            () => [
                { id: S.c.SERVER_ORDER, label: C.intl.string(C.t.STMPJ2), value: S.c.SERVER_ORDER },
                { id: S.c.RECENTLY_JOINED, label: C.intl.string(C.t.CbaapP), value: S.c.RECENTLY_JOINED },
                { id: S.c.ACTIVITY_SHARING_ON, label: C.intl.string(b.default.ZI51JZ), value: S.c.ACTIVITY_SHARING_ON },
                {
                    id: S.c.ACTIVITY_SHARING_OFF,
                    label: C.intl.string(b.default["+kxafn"]),
                    value: S.c.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        G = P.find((e) => e.value === r)?.label ?? "";
    return (0, i.jsxs)("div", {
        className: v.iE,
        children: [
            t,
            (0, i.jsxs)("div", {
                className: v.N1,
                children: [
                    (0, i.jsx)(o.I, {
                        query: l,
                        onChange: a,
                        onClear: () => {
                            E.default.track(f.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: r,
                                activity_restricted_guild_count: O,
                                total_guild_count: R,
                            }),
                                a("");
                        },
                        onFocus: () =>
                            E.default.track(f.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: r,
                                activity_restricted_guild_count: O,
                                total_guild_count: R,
                            }),
                        onBlur: () =>
                            E.default.track(f.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: r,
                                activity_restricted_guild_count: O,
                                total_guild_count: R,
                            }),
                        placeholder: C.intl.string(C.t["H+nRYw"]),
                        "aria-label": C.intl.string(C.t["5h0QOP"]),
                        inputProps: { "aria-controls": L, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: v.gO,
                            children: [
                                (0, i.jsx)(d.Y, {
                                    targetElementRef: D,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, i.jsx)(u.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": C.intl.string(C.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, i.jsx)(c.rX, {
                                                children: P.map((e) => {
                                                    let { id: t, label: n, value: s } = e;
                                                    return (0, i.jsx)(
                                                        c.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: r === s,
                                                            action: () => {
                                                                E.default.track(
                                                                    f.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: s,
                                                                        activity_restricted_guild_count: O,
                                                                        total_guild_count: R,
                                                                    },
                                                                ),
                                                                    x(s);
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, i.jsxs)(g.D, {
                                            ...e,
                                            innerRef: D,
                                            className: v.Ku,
                                            children: [
                                                (0, i.jsx)(m.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: G,
                                                }),
                                                (0, i.jsx)(_.a, { size: "xs", color: A.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, i.jsx)(h.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: I,
                                    text: T ? C.intl.string(C.t["7lxcLO"]) : C.intl.string(C.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(p.A, {
                "aria-live": "polite",
                role: "region",
                children: C.intl.format(b.default.EvzDff, { count: n.length }),
            }),
            (0, i.jsxs)("ul", {
                className: v.X1,
                id: L,
                "aria-label": C.intl.string(C.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, i.jsx)("div", {
                            className: v.pb,
                            children: (0, i.jsx)(m.E, {
                                className: v.R$,
                                variant: "text-lg/medium",
                                children: C.intl.string(C.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, i.jsx)(
                            N,
                            { guild: e, isActivityRestricted: j(e.id), onToggleActivityRestrictedGuild: y },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
