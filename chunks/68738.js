n.d(t, {
    A: () => g,
}),
    n(638769),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(397927),
    i = n(442433),
    s = n(611010),
    o = n(71393),
    c = n(287809),
    d = n(815907),
    u = n(661251);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {
        ClipsContextMenu: async () => {
            let { default: e } = await n.e("44751").then(n.bind(n, 575538));
            return (t) => (0, a.jsx)(e, m({}, t));
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await n.e("33648").then(n.bind(n, 246323)),
                t = new s.kJ({
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
            return () =>
                (0, a.jsx)(e, {
                    application: t,
                    channelId: "987654321",
                    onClose: i.Z_,
                });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await n.e("10758").then(n.bind(n, 455557)),
                t = Object.values(o.A.getGuilds())[0];
            return null == t
                ? () => null
                : (n) =>
                      (0, a.jsx)(
                          e,
                          p(m({}, n), {
                              guild: t,
                          }),
                      );
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    n.e("10614"),
                    n.e("49681"),
                    n.e("68587"),
                    n.e("43600"),
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
                    n.e("11810"),
                    n.e("8458"),
                    n.e("39048"),
                    n.e("60989"),
                    n.e("24202"),
                    n.e("38985"),
                    n.e("36290"),
                    n.e("59735"),
                    n.e("54469"),
                    n.e("59461"),
                ]).then(n.bind(n, 544676)),
                t = Object.values(o.A.getGuilds())[0];
            return null == t
                ? () => null
                : (n) =>
                      (0, a.jsx)(
                          e,
                          p(m({}, n), {
                              guild: t,
                          }),
                      );
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await n.e("32857").then(n.bind(n, 842112));
            return (t) =>
                (0, a.jsx)(
                    e,
                    p(m({}, t), {
                        folderId: 1,
                        folderColor: void 0,
                        folderName: void 0,
                        unread: !1,
                    }),
                );
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await n.e("15687").then(n.bind(n, 646938));
            return (t) =>
                (0, a.jsx)(
                    e,
                    p(m({}, t), {
                        id: "123456789",
                        label: "Copy Test ID",
                    }),
                );
        },
        UserSettingsCogContextMenu: async () => {
            let { default: e } = await n.e("95153").then(n.bind(n, 50120)),
                t = c.default.getCurrentUser();
            return null == t
                ? () => null
                : (n) =>
                      (0, a.jsx)(
                          e,
                          p(m({}, n), {
                              user: t,
                              webBuildOverride: null,
                              premiumSubscription: null,
                          }),
                      );
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await n.e("46132").then(n.bind(n, 233503));
            return (t) => (0, a.jsx)(e, m({}, t));
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await n.e("32612").then(n.bind(n, 960015)),
                t = {
                    id: "123456789",
                    name: "Test Forum Tag",
                };
            return () =>
                (0, a.jsx)(e, {
                    tag: t,
                });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await n.e("68001").then(n.bind(n, 699896));
            return (t) =>
                (0, a.jsx)(
                    e,
                    p(m({}, t), {
                        roleId: "123456789",
                        onLeaveRole: () => {
                            console.log("Leave role clicked"), (0, i.Z_)();
                        },
                    }),
                );
        },
        StaffOnlyEntryDebugMenu: async () => {
            var e;
            let { default: t } = await n.e("89346").then(n.bind(n, 949881)),
                { ContentInventoryEntryType: l } = await Promise.resolve().then(n.bind(n, 681154)),
                { ContentInventoryAuthorType: r } = await Promise.resolve().then(n.bind(n, 6161)),
                i = c.default.getCurrentUser(),
                s = {
                    id: "mock-entry-123",
                    author_id: null != (e = null == i ? void 0 : i.id) ? e : "123456789",
                    author_type: r.USER,
                    content_type: l.PLAYED_GAME,
                    participants: [],
                    traits: [],
                    extra: {
                        type: "played_game_extra",
                        game_name: "Test Game",
                        application_id: "123456789",
                    },
                };
            return () =>
                (0, a.jsx)(t, {
                    entry: s,
                    requestId: "mock-request-123",
                });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([n.e("10614"), n.e("11810"), n.e("23342")]).then(
                    n.bind(n, 892921),
                ),
                t = Object.values(o.A.getGuilds())[0];
            return null == t
                ? () => null
                : (n) =>
                      (0, a.jsx)(
                          e,
                          p(m({}, n), {
                              addFormField: (e) => {
                                  console.log("Add form field:", e), (0, i.Z_)();
                              },
                              guild: t,
                              allowTerms: !0,
                          }),
                      );
        },
        MembersTableSortContextMenu: async () => {
            let { default: e } = await n.e("73091").then(n.bind(n, 779662)),
                t = Object.values(o.A.getGuilds())[0];
            return null == t
                ? () => null
                : () =>
                      (0, a.jsx)(e, {
                          guildId: t.id,
                          onClose: i.Z_,
                      });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await n.e("21539").then(n.bind(n, 441358)),
                t = Object.values(o.A.getGuilds())[0];
            return null == t
                ? () => null
                : () =>
                      (0, a.jsx)(e, {
                          guildId: t.id,
                          onClose: i.Z_,
                      });
        },
    },
    x = {
        GuildShopSortOptions: l.lazy(async () => {
            let { default: e } = await n.e("50974").then(n.bind(n, 324269)),
                { default: t } = await n.e("55197").then(n.bind(n, 558060));
            return {
                default: () =>
                    (0, a.jsx)(t, {
                        defaultSortOption: void 0,
                        children: (0, a.jsx)(e, {}),
                    }),
            };
        }),
    };

function g() {
    let e = l.useMemo(
            () =>
                Object.keys(h)
                    .map((e) => ({
                        label: e,
                        value: e,
                        id: e,
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = l.useMemo(
            () =>
                Object.keys(x)
                    .map((e) => ({
                        label: e,
                        value: e,
                        id: e,
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [n, s] = l.useState(null),
        [o, c] = l.useState(null),
        m = l.useCallback(
            (e) => {
                null != n && (0, i.L3)(e, h[n]);
            },
            [n],
        ),
        p = null != o ? x[o] : null;
    return (0, a.jsx)(r.IpV, {
        className: u.nd,
        children: (0, a.jsxs)(r.BJc, {
            className: d.l$,
            gap: 16,
            children: [
                (0, a.jsxs)(r.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: "eyebrow",
                            children: "Context Menus",
                        }),
                        (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, a.jsxs)(r.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, a.jsx)(r.ZiE, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: n,
                            onSelectionChange: s,
                            selectionMode: "single",
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: "Open",
                            disabled: null == n,
                            onClick: m,
                        }),
                    ],
                }),
                (0, a.jsxs)(r.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: "eyebrow",
                            children: "Popout Menus",
                        }),
                        (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, a.jsx)(r.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, a.jsx)(r.ZiE, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: o,
                        onSelectionChange: c,
                        selectionMode: "single",
                    }),
                }),
                null != p &&
                    (0, a.jsx)(l.Suspense, {
                        fallback: (0, a.jsx)(r.Text, {
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
