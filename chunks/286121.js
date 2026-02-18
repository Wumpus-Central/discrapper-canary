a.d(l, { $: () => r });
var t = a(627968),
    o = a(64700),
    n = a(732955),
    i = a(397927),
    s = a(728690);
let r = {
    title: "Menu",
    stories: [
        {
            name: "Menu",
            id: "menu",
            component: function (e) {
                let {
                        variant: l,
                        hideScroller: a,
                        showGroups: r,
                        showCheckboxItems: d,
                        showRadioItems: u,
                        showSwitchItems: c,
                        showSubmenus: b,
                        showIcons: p,
                        showShortcuts: m,
                        showSubtext: x,
                        showDisabledItems: v,
                        showColoredItems: h,
                        showLoading: y,
                        showTrailingIndicator: f,
                        dangerItemColor: g,
                    } = e,
                    [V, C] = o.useState(!0),
                    [S, j] = o.useState(!1),
                    [k, w] = o.useState("text"),
                    [T, M] = o.useState("cozy"),
                    [D, I] = o.useState(!0),
                    A = o.useRef(null);
                return (0, t.jsxs)("div", {
                    className: s.k,
                    children: [
                        !D && (0, t.jsx)(n.$nd, { text: "Open Menu", onClick: () => I(!0) }),
                        (0, t.jsx)(i.YNO, {
                            renderPopout: (e) => {
                                let { closePopout: o } = e;
                                return (0, t.jsxs)(i.W1t, {
                                    "data-menu-migrated": !0,
                                    navId: "menu-story",
                                    "aria-label": "Story Menu",
                                    variant: l,
                                    hideScroller: a,
                                    onClose: o,
                                    onSelect: () => {},
                                    children: [
                                        (0, t.jsx)(i.Drp, {
                                            id: "edit",
                                            label: "Edit Message",
                                            icon: p ? i.R2l : void 0,
                                            leadingAccessory: p ? { type: "icon", icon: i.R2l } : void 0,
                                            shortcut: m ? "⌘E" : void 0,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(i.Drp, {
                                            id: "pin",
                                            label: "Pin Message",
                                            icon: p ? i.tsw : void 0,
                                            leadingAccessory: p ? { type: "icon", icon: i.tsw } : void 0,
                                            subtext: x ? "Pin this message to the channel" : void 0,
                                            badge: "beta",
                                            loading: y,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(i.Drp, {
                                            id: "copy",
                                            label: "Copy Message Link",
                                            icon: p ? i.TdU : void 0,
                                            leadingAccessory: p ? { type: "icon", icon: i.TdU } : void 0,
                                            badge: "new",
                                            action: () => {},
                                        }),
                                        v &&
                                            (0, t.jsx)(i.Drp, {
                                                id: "disabled",
                                                label: "Disabled Item",
                                                icon: p ? i.Zes : void 0,
                                                leadingAccessory: p ? { type: "icon", icon: i.Zes } : void 0,
                                                disabled: !0,
                                                action: () => {},
                                            }),
                                        h &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(i.bXX, {}),
                                                    (0, t.jsx)(i.Drp, {
                                                        id: "brand-item",
                                                        label: "Brand Item",
                                                        color: "brand",
                                                        trailingIndicator: f ? { type: "icon", icon: i.I9m } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(i.Drp, {
                                                        id: "premium-item",
                                                        label: "Premium Item",
                                                        color: "premium",
                                                        icon: p ? i.Zes : void 0,
                                                        leadingAccessory: p ? { type: "icon", icon: i.Zes } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(i.Drp, {
                                                        id: "success-item",
                                                        label: "Success Item",
                                                        color: "success",
                                                        icon: p ? i.Zes : void 0,
                                                        leadingAccessory: p ? { type: "icon", icon: i.Zes } : void 0,
                                                        action: () => {},
                                                    }),
                                                ],
                                            }),
                                        b &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(i.bXX, {}),
                                                    (0, t.jsxs)(i.Drp, {
                                                        id: "submenu",
                                                        label: "More Options",
                                                        icon: p ? i.Zes : void 0,
                                                        children: [
                                                            (0, t.jsx)(i.Drp, {
                                                                id: "submenu-1",
                                                                label: "Submenu Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(i.Drp, {
                                                                id: "submenu-2",
                                                                label: "Submenu Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(i.Drp, {
                                                                id: "submenu-3",
                                                                label: "Submenu Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        d &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(i.bXX, {}),
                                                    (0, t.jsx)(i.sLh, {
                                                        id: "notifications",
                                                        label: "Enable Notifications Enable Notifications Enable Notifications",
                                                        checked: V,
                                                        action: () => C(!V),
                                                    }),
                                                    (0, t.jsx)(i.sLh, {
                                                        id: "mute",
                                                        label: "Mute Channel",
                                                        checked: S,
                                                        action: () => j(!S),
                                                    }),
                                                ],
                                            }),
                                        c &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(i.bXX, {}),
                                                    (0, t.jsx)(i.fPC, {
                                                        id: "switch-notifications",
                                                        label: "Push Notifications",
                                                        checked: V,
                                                        action: () => C(!V),
                                                    }),
                                                ],
                                            }),
                                        u &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(i.bXX, {}),
                                                    (0, t.jsxs)(i.rXV, {
                                                        label: "Channel Type",
                                                        children: [
                                                            (0, t.jsx)(i.iDA, {
                                                                id: "radio-text",
                                                                group: "channel-type",
                                                                label: "Text Channel Text Channel Text Channel Text Channel Text Channel Text Channel ",
                                                                checked: "text" === k,
                                                                action: () => w("text"),
                                                            }),
                                                            (0, t.jsx)(i.iDA, {
                                                                id: "radio-voice",
                                                                group: "channel-type",
                                                                label: "Voice Channel",
                                                                checked: "voice" === k,
                                                                action: () => w("voice"),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, t.jsx)(i.bXX, {}),
                                                    (0, t.jsxs)(i.rXV, {
                                                        label: "View Mode",
                                                        children: [
                                                            (0, t.jsx)(i.iDA, {
                                                                id: "radio-cozy",
                                                                group: "view-mode",
                                                                label: "Cozy",
                                                                checked: "cozy" === T,
                                                                action: () => M("cozy"),
                                                            }),
                                                            (0, t.jsx)(i.iDA, {
                                                                id: "radio-compact",
                                                                group: "view-mode",
                                                                label: "Compact",
                                                                checked: "compact" === T,
                                                                action: () => M("compact"),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        r &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(i.bXX, {}),
                                                    (0, t.jsxs)(i.rXV, {
                                                        label: "Grouped Items",
                                                        children: [
                                                            (0, t.jsx)(i.Drp, {
                                                                id: "group-1",
                                                                label: "Group Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(i.Drp, {
                                                                id: "group-2",
                                                                label: "Group Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(i.Drp, {
                                                                id: "group-3",
                                                                label: "Group Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        (0, t.jsx)(i.bXX, {}),
                                        (0, t.jsx)(i.Drp, {
                                            id: "delete",
                                            label: "Delete Message",
                                            color: g,
                                            icon: p ? i.ucK : void 0,
                                            action: () => {},
                                        }),
                                    ],
                                });
                            },
                            position: "bottom",
                            align: "center",
                            shouldShow: !0,
                            targetElementRef: A,
                            onRequestClose: () => I(!1),
                            children: () =>
                                (0, t.jsx)("div", {
                                    ref: A,
                                    style: { width: 1, height: 1, opacity: 0, pointerEvents: "none" },
                                }),
                        }),
                    ],
                });
            },
            controls: {
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "flexible",
                    options: [
                        { label: "Fixed", value: "fixed" },
                        { label: "Flexible", value: "flexible" },
                    ],
                },
                hideScroller: { type: "boolean", label: "Hide Scroller", defaultValue: !1 },
                showGroups: { type: "boolean", label: "Show Groups", defaultValue: !0 },
                showCheckboxItems: { type: "boolean", label: "Show Checkbox Items", defaultValue: !0 },
                showRadioItems: { type: "boolean", label: "Show Radio Items", defaultValue: !0 },
                showSwitchItems: { type: "boolean", label: "Show Switch Items", defaultValue: !0 },
                showSubmenus: { type: "boolean", label: "Show Submenus", defaultValue: !0 },
                showIcons: { type: "boolean", label: "Show Icons", defaultValue: !0 },
                showShortcuts: { type: "boolean", label: "Show Shortcuts", defaultValue: !0 },
                showSubtext: { type: "boolean", label: "Show Subtext", defaultValue: !1 },
                showDisabledItems: { type: "boolean", label: "Show Disabled Items", defaultValue: !0 },
                showColoredItems: { type: "boolean", label: "Show Colored Items", defaultValue: !0 },
                showLoading: { type: "boolean", label: "Show Loading", defaultValue: !1 },
                showTrailingIndicator: { type: "boolean", label: "Show Trailing Indicator", defaultValue: !1 },
                dangerItemColor: {
                    type: "select",
                    label: "Danger Item Color",
                    defaultValue: "danger",
                    options: [
                        { label: "Default", value: "default" },
                        { label: "Brand", value: "brand" },
                        { label: "Danger", value: "danger" },
                        { label: "Premium", value: "premium" },
                        { label: "Premium Gradient", value: "premium-gradient" },
                        { label: "Success", value: "success" },
                    ],
                },
            },
        },
    ],
};
