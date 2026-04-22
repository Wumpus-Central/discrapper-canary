a.d(t, { A: () => _ });
var n = a(627968),
    l = a(64700),
    i = a(573613),
    s = a(331322),
    r = a(834730),
    o = a(783878),
    d = a(821609),
    c = a(442433),
    u = a(611010),
    m = a(734057),
    h = a(71393),
    p = a(287809),
    x = a(214868),
    g = a(505206);
let v = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("44751").then(a.bind(a, 575538));
            return (t) => (0, n.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("33648").then(a.bind(a, 246323)),
                t = new u.kJ({
                    id: "123456789",
                    name: "Test Activity",
                    icon: null,
                    description: "A test activity for devtools",
                    type: 1,
                    coverImage: void 0,
                    primarySkuId: void 0,
                    bot: void 0,
                    splash: void 0,
                    thirdPartySkus: [],
                    isMonetized: !1,
                    isVerified: !1,
                    roleConnectionsVerificationUrl: void 0,
                    parentId: void 0,
                    connectionEntrypointUrl: void 0,
                });
            return () => (0, n.jsx)(e, { application: t, channelId: "987654321", onClose: c.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await a.e("10758").then(a.bind(a, 455557)),
                t = Object.values(h.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, n.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("49681"),
                    a.e("96382"),
                    a.e("20044"),
                    a.e("28136"),
                    a.e("43600"),
                    a.e("68587"),
                    a.e("63379"),
                    a.e("56026"),
                    a.e("16301"),
                    a.e("22191"),
                    a.e("13334"),
                    a.e("25961"),
                    a.e("13848"),
                    a.e("47810"),
                    a.e("54828"),
                    a.e("94683"),
                    a.e("50796"),
                    a.e("8458"),
                    a.e("94253"),
                    a.e("11810"),
                    a.e("72756"),
                    a.e("13337"),
                    a.e("54469"),
                    a.e("30131"),
                    a.e("87500"),
                ]).then(a.bind(a, 544676)),
                t = Object.values(h.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, n.jsx)(e, { ...a, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await a.e("32857").then(a.bind(a, 842112));
            return (t) => (0, n.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await a.e("15687").then(a.bind(a, 646938));
            return (t) => (0, n.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await a.e("50143").then(a.bind(a, 92962));
            return (t) => (0, n.jsx)(e, { ...t, onClose: c.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await a.e("46132").then(a.bind(a, 233503));
            return (t) => (0, n.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await a.e("32612").then(a.bind(a, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, n.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await a.e("68001").then(a.bind(a, 699896));
            return (t) =>
                (0, n.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        console.log("Leave role clicked"), (0, c.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await a.e("89346").then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: l } = await Promise.resolve().then(a.bind(a, 6161)),
                i = p.default.getCurrentUser(),
                s = {
                    id: "mock-entry-123",
                    author_id: i?.id ?? "123456789",
                    author_type: l.USER,
                    content_type: t.PLAYED_GAME,
                    participants: [],
                    traits: [],
                    extra: { type: "played_game_extra", game_name: "Test Game", application_id: "123456789" },
                };
            return () => (0, n.jsx)(e, { entry: s, requestId: "mock-request-123" });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([a.e("11810"), a.e("13578")]).then(
                    a.bind(a, 892921),
                ),
                t = Object.values(h.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, n.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, c.Z_)();
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("94989"), a.e("33")]).then(a.bind(a, 44536)),
                t = h.A.getGuilds(),
                l = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(m.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = m.A.getAllThreadsForParent(t.id);
                    if (e.length > 0) {
                        l = e[0];
                        break;
                    }
                }
                if (null != l) break;
            }
            return null == l
                ? (console.log("No thread channel found for ChannelListThreadContextMenu"), () => null)
                : (t) => (0, n.jsx)(e, { ...t, channel: l });
        },
        MembersTableSortContextMenu: async () => {
            let { default: e } = await a.e("73091").then(a.bind(a, 779662)),
                t = Object.values(h.A.getGuilds())[0];
            return null == t ? () => null : () => (0, n.jsx)(e, { guildId: t.id, onClose: c.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await a.e("21539").then(a.bind(a, 441358)),
                t = Object.values(h.A.getGuilds())[0];
            return null == t ? () => null : () => (0, n.jsx)(e, { guildId: t.id, onClose: c.Z_ });
        },
    },
    b = {
        GuildShopSortOptions: l.lazy(async () => {
            let { default: e } = await a.e("50974").then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, n.jsx)(t, { defaultSortOption: void 0, children: (0, n.jsx)(e, {}) }) };
        }),
    };
function _() {
    let e = l.useMemo(
            () =>
                Object.keys(v)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = l.useMemo(
            () =>
                Object.keys(b)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, u] = l.useState(null),
        [m, h] = l.useState(null),
        p = l.useCallback(
            (e) => {
                null != a && (0, c.L3)(e, v[a]);
            },
            [a],
        ),
        _ = null != m ? b[m] : null;
    return (0, n.jsx)(i.Ip, {
        className: g.nd,
        children: (0, n.jsxs)(s.B, {
            className: x.l$,
            gap: 16,
            children: [
                (0, n.jsxs)(s.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(r.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, n.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, n.jsxs)(s.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, n.jsx)(o.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: u,
                            selectionMode: "single",
                        }),
                        (0, n.jsx)(d.$, { variant: "primary", text: "Open", disabled: null == a, onClick: p }),
                    ],
                }),
                (0, n.jsxs)(s.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(r.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, n.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, n.jsx)(s.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, n.jsx)(o.Z, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: m,
                        onSelectionChange: h,
                        selectionMode: "single",
                    }),
                }),
                null != _ &&
                    (0, n.jsx)(l.Suspense, {
                        fallback: (0, n.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, n.jsx)(_, {}),
                    }),
            ],
        }),
    });
}
