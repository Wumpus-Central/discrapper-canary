n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(442433),
    r = n(611010),
    o = n(734057),
    d = n(71393),
    c = n(287809),
    u = n(815907),
    m = n(661251);
let h = {
        ClipsContextMenu: async () => {
            let { default: e } = await n.e("44751").then(n.bind(n, 575538));
            return (t) => (0, a.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await n.e("33648").then(n.bind(n, 246323)),
                t = new r.kJ({
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
            return () => (0, a.jsx)(e, { application: t, channelId: "987654321", onClose: l.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await n.e("10758").then(n.bind(n, 455557)),
                t = Object.values(d.A.getGuilds())[0];
            return null == t ? () => null : (n) => (0, a.jsx)(e, { ...n, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    n.e("49681"),
                    n.e("43600"),
                    n.e("68587"),
                    n.e("28136"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("8018"),
                    n.e("21968"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("24202"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("39048"),
                    n.e("17537"),
                    n.e("33105"),
                    n.e("56475"),
                    n.e("54469"),
                    n.e("59461"),
                ]).then(n.bind(n, 544676)),
                t = Object.values(d.A.getGuilds())[0];
            return null == t ? () => null : (n) => (0, a.jsx)(e, { ...n, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await n.e("32857").then(n.bind(n, 842112));
            return (t) => (0, a.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await n.e("15687").then(n.bind(n, 646938));
            return (t) => (0, a.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await n.e("50143").then(n.bind(n, 92962));
            return (t) => (0, a.jsx)(e, { ...t, onClose: l.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await n.e("46132").then(n.bind(n, 233503));
            return (t) => (0, a.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await n.e("32612").then(n.bind(n, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, a.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await n.e("68001").then(n.bind(n, 699896));
            return (t) =>
                (0, a.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        console.log("Leave role clicked"), (0, l.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await n.e("89346").then(n.bind(n, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(n.bind(n, 681154)),
                { ContentInventoryAuthorType: i } = await Promise.resolve().then(n.bind(n, 6161)),
                s = c.default.getCurrentUser(),
                l = {
                    id: "mock-entry-123",
                    author_id: s?.id ?? "123456789",
                    author_type: i.USER,
                    content_type: t.PLAYED_GAME,
                    participants: [],
                    traits: [],
                    extra: { type: "played_game_extra", game_name: "Test Game", application_id: "123456789" },
                };
            return () => (0, a.jsx)(e, { entry: l, requestId: "mock-request-123" });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([n.e("11810"), n.e("23342")]).then(
                    n.bind(n, 892921),
                ),
                t = Object.values(d.A.getGuilds())[0];
            return null == t
                ? () => null
                : (n) =>
                      (0, a.jsx)(e, {
                          ...n,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, l.Z_)();
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([n.e("94989"), n.e("69545")]).then(n.bind(n, 44536)),
                t = d.A.getGuilds(),
                i = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(o.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = o.A.getAllThreadsForParent(t.id);
                    if (e.length > 0) {
                        i = e[0];
                        break;
                    }
                }
                if (null != i) break;
            }
            return null == i
                ? (console.log("No thread channel found for ChannelListThreadContextMenu"), () => null)
                : (t) => (0, a.jsx)(e, { ...t, channel: i });
        },
        MembersTableSortContextMenu: async () => {
            let { default: e } = await n.e("73091").then(n.bind(n, 779662)),
                t = Object.values(d.A.getGuilds())[0];
            return null == t ? () => null : () => (0, a.jsx)(e, { guildId: t.id, onClose: l.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await n.e("21539").then(n.bind(n, 441358)),
                t = Object.values(d.A.getGuilds())[0];
            return null == t ? () => null : () => (0, a.jsx)(e, { guildId: t.id, onClose: l.Z_ });
        },
    },
    x = {
        GuildShopSortOptions: i.lazy(async () => {
            let { default: e } = await n.e("50974").then(n.bind(n, 324269)),
                { default: t } = await n.e("55197").then(n.bind(n, 558060));
            return { default: () => (0, a.jsx)(t, { defaultSortOption: void 0, children: (0, a.jsx)(e, {}) }) };
        }),
    };
function p() {
    let e = i.useMemo(
            () =>
                Object.keys(h)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = i.useMemo(
            () =>
                Object.keys(x)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [n, r] = i.useState(null),
        [o, d] = i.useState(null),
        c = i.useCallback(
            (e) => {
                null != n && (0, l.L3)(e, h[n]);
            },
            [n],
        ),
        p = null != o ? x[o] : null;
    return (0, a.jsx)(s.IpV, {
        className: m.nd,
        children: (0, a.jsxs)(s.BJc, {
            className: u.l$,
            gap: 16,
            children: [
                (0, a.jsxs)(s.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(s.Text, { variant: "eyebrow", children: "Context Menus" }),
                        (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, a.jsxs)(s.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, a.jsx)(s.ZiE, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: n,
                            onSelectionChange: r,
                            selectionMode: "single",
                        }),
                        (0, a.jsx)(s.Button, { variant: "primary", text: "Open", disabled: null == n, onClick: c }),
                    ],
                }),
                (0, a.jsxs)(s.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(s.Text, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, a.jsx)(s.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, a.jsx)(s.ZiE, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: o,
                        onSelectionChange: d,
                        selectionMode: "single",
                    }),
                }),
                null != p &&
                    (0, a.jsx)(i.Suspense, {
                        fallback: (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, a.jsx)(p, {}),
                    }),
            ],
        }),
    });
}
