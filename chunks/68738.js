n.d(t, {
    A: () => x,
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
                n.e("8458"),
                n.e("47841"),
                n.e("60989"),
                n.e("24202"),
                n.e("38985"),
                n.e("36290"),
                n.e("59735"),
                n.e("54469"),
                n.e("22314"),
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
};

function x() {
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
        [t, n] = l.useState(null),
        s = l.useCallback(
            (e) => {
                null != t && (0, i.L3)(e, h[t]);
            },
            [t],
        );
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
                            value: t,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: "Open",
                            disabled: null == t,
                            onClick: s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
