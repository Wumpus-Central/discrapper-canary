a.d(l, { $: () => x });
var t = a(627968),
    o = a(64700),
    n = a(821609),
    i = a(861672),
    r = a(477782),
    s = a(22231),
    d = a(366605),
    u = a(624479),
    c = a(625903),
    b = a(509434),
    p = a(241326),
    m = a(265872),
    h = a(159402);
let x = {
    title: "Menu",
    stories: [
        {
            name: "Menu",
            id: "menu",
            component: function (e) {
                let {
                        variant: l,
                        hideScroller: a,
                        showGroups: x,
                        showCheckboxItems: v,
                        showRadioItems: f,
                        showSwitchItems: g,
                        showSubmenus: y,
                        showIcons: C,
                        showShortcuts: j,
                        showSubtext: V,
                        showDisabledItems: k,
                        showColoredItems: S,
                        showLoading: _,
                        showTrailingIndicator: w,
                        dangerItemColor: T,
                    } = e,
                    [M, A] = o.useState(!0),
                    [N, E] = o.useState(!1),
                    [D, L] = o.useState("text"),
                    [I, P] = o.useState("cozy"),
                    [O, R] = o.useState(!0),
                    B = o.useRef(null);
                return (0, t.jsxs)("div", {
                    className: h.k,
                    children: [
                        !O && (0, t.jsx)(n.$, { text: "Open Menu", onClick: () => R(!0) }),
                        (0, t.jsx)(m.Y, {
                            renderPopout: (e) => {
                                let { closePopout: o } = e;
                                return (0, t.jsxs)(i.W, {
                                    "data-menu-migrated": !0,
                                    navId: "menu-story",
                                    "aria-label": "Story Menu",
                                    variant: l,
                                    hideScroller: a,
                                    onClose: o,
                                    onSelect: () => {},
                                    children: [
                                        (0, t.jsx)(r.Dr, {
                                            id: "edit",
                                            label: "Edit Message",
                                            icon: C ? s.R : void 0,
                                            leadingAccessory: C ? { type: "icon", icon: s.R } : void 0,
                                            shortcut: j ? "⌘E" : void 0,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(r.Dr, {
                                            id: "pin",
                                            label: "Pin Message",
                                            icon: C ? d.t : void 0,
                                            leadingAccessory: C ? { type: "icon", icon: d.t } : void 0,
                                            subtext: V ? "Pin this message to the channel" : void 0,
                                            badge: "beta",
                                            loading: _,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(r.Dr, {
                                            id: "copy",
                                            label: "Copy Message Link",
                                            icon: C ? u.T : void 0,
                                            leadingAccessory: C ? { type: "icon", icon: u.T } : void 0,
                                            badge: "new",
                                            action: () => {},
                                        }),
                                        k &&
                                            (0, t.jsx)(r.Dr, {
                                                id: "disabled",
                                                label: "Disabled Item",
                                                icon: C ? c.Z : void 0,
                                                leadingAccessory: C ? { type: "icon", icon: c.Z } : void 0,
                                                disabled: !0,
                                                action: () => {},
                                            }),
                                        S &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(r.bX, {}),
                                                    (0, t.jsx)(r.Dr, {
                                                        id: "brand-item",
                                                        label: "Brand Item",
                                                        color: "brand",
                                                        trailingIndicator: w ? { type: "icon", icon: b.I } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(r.Dr, {
                                                        id: "premium-item",
                                                        label: "Premium Item",
                                                        color: "premium",
                                                        icon: C ? c.Z : void 0,
                                                        leadingAccessory: C ? { type: "icon", icon: c.Z } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(r.Dr, {
                                                        id: "success-item",
                                                        label: "Success Item",
                                                        color: "success",
                                                        icon: C ? c.Z : void 0,
                                                        leadingAccessory: C ? { type: "icon", icon: c.Z } : void 0,
                                                        action: () => {},
                                                    }),
                                                ],
                                            }),
                                        y &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(r.bX, {}),
                                                    (0, t.jsxs)(r.Dr, {
                                                        id: "submenu",
                                                        label: "More Options",
                                                        icon: C ? c.Z : void 0,
                                                        children: [
                                                            (0, t.jsx)(r.Dr, {
                                                                id: "submenu-1",
                                                                label: "Submenu Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(r.Dr, {
                                                                id: "submenu-2",
                                                                label: "Submenu Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(r.Dr, {
                                                                id: "submenu-3",
                                                                label: "Submenu Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        v &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(r.bX, {}),
                                                    (0, t.jsx)(r.sL, {
                                                        id: "notifications",
                                                        label: "Enable Notifications Enable Notifications Enable Notifications",
                                                        checked: M,
                                                        action: () => A(!M),
                                                    }),
                                                    (0, t.jsx)(r.sL, {
                                                        id: "mute",
                                                        label: "Mute Channel",
                                                        checked: N,
                                                        action: () => E(!N),
                                                    }),
                                                ],
                                            }),
                                        g &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(r.bX, {}),
                                                    (0, t.jsx)(r.fP, {
                                                        id: "switch-notifications",
                                                        label: "Push Notifications",
                                                        checked: M,
                                                        action: () => A(!M),
                                                    }),
                                                ],
                                            }),
                                        f &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(r.bX, {}),
                                                    (0, t.jsxs)(r.rX, {
                                                        label: "Channel Type",
                                                        children: [
                                                            (0, t.jsx)(r.iD, {
                                                                id: "radio-text",
                                                                group: "channel-type",
                                                                label: "Text Channel Text Channel Text Channel Text Channel Text Channel Text Channel ",
                                                                checked: "text" === D,
                                                                action: () => L("text"),
                                                            }),
                                                            (0, t.jsx)(r.iD, {
                                                                id: "radio-voice",
                                                                group: "channel-type",
                                                                label: "Voice Channel",
                                                                checked: "voice" === D,
                                                                action: () => L("voice"),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, t.jsx)(r.bX, {}),
                                                    (0, t.jsxs)(r.rX, {
                                                        label: "View Mode",
                                                        children: [
                                                            (0, t.jsx)(r.iD, {
                                                                id: "radio-cozy",
                                                                group: "view-mode",
                                                                label: "Cozy",
                                                                checked: "cozy" === I,
                                                                action: () => P("cozy"),
                                                            }),
                                                            (0, t.jsx)(r.iD, {
                                                                id: "radio-compact",
                                                                group: "view-mode",
                                                                label: "Compact",
                                                                checked: "compact" === I,
                                                                action: () => P("compact"),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        x &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(r.bX, {}),
                                                    (0, t.jsxs)(r.rX, {
                                                        label: "Grouped Items",
                                                        children: [
                                                            (0, t.jsx)(r.Dr, {
                                                                id: "group-1",
                                                                label: "Group Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(r.Dr, {
                                                                id: "group-2",
                                                                label: "Group Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(r.Dr, {
                                                                id: "group-3",
                                                                label: "Group Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        (0, t.jsx)(r.bX, {}),
                                        (0, t.jsx)(r.Dr, {
                                            id: "delete",
                                            label: "Delete Message",
                                            color: T,
                                            icon: C ? p.u : void 0,
                                            action: () => {},
                                        }),
                                    ],
                                });
                            },
                            position: "bottom",
                            align: "center",
                            shouldShow: !0,
                            targetElementRef: B,
                            onRequestClose: () => R(!1),
                            children: () =>
                                (0, t.jsx)("div", {
                                    ref: B,
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
