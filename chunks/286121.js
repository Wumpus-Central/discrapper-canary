n.d(t, {
    $: () => l,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(732955),
    s = n(397927),
    o = n(728690);
let l = {
    title: "Menu",
    stories: [
        {
            name: "Menu",
            id: "menu",
            component: function (e) {
                let {
                        variant: t,
                        hideScroller: n,
                        showGroups: l,
                        showCheckboxItems: c,
                        showRadioItems: u,
                        showSwitchItems: d,
                        showSubmenus: f,
                        showIcons: p,
                        showHints: _,
                        showSubtext: h,
                        showDisabledItems: m,
                        showColoredItems: g,
                        showLoading: E,
                        showTrailingIndicator: y,
                        dangerItemColor: b,
                    } = e,
                    [O, v] = i.useState(!0),
                    [A, I] = i.useState(!1),
                    [S, T] = i.useState("text"),
                    [C, N] = i.useState("cozy"),
                    [w, R] = i.useState(!0),
                    P = (e) =>
                        (0, r.jsxs)(s.W1t, {
                            navId: "menu-story",
                            "aria-label": "Story Menu",
                            variant: t,
                            hideScroller: n,
                            onClose: e,
                            onSelect: () => {},
                            children: [
                                (0, r.jsx)(s.Drp, {
                                    id: "edit",
                                    label: "Edit Message",
                                    icon: p ? s.R2l : void 0,
                                    hint: _ ? "⌘E" : void 0,
                                    action: () => {},
                                }),
                                (0, r.jsx)(s.Drp, {
                                    id: "pin",
                                    label: "Pin Message",
                                    icon: p ? s.tsw : void 0,
                                    subtext: h ? "Pin this message to the channel" : void 0,
                                    badge: "beta",
                                    loading: E,
                                    action: () => {},
                                }),
                                (0, r.jsx)(s.Drp, {
                                    id: "copy",
                                    label: "Copy Message Link",
                                    icon: p ? s.TdU : void 0,
                                    badge: "new",
                                    action: () => {},
                                }),
                                m &&
                                    (0, r.jsx)(s.Drp, {
                                        id: "disabled",
                                        label: "Disabled Item",
                                        icon: p ? s.Zes : void 0,
                                        disabled: !0,
                                        action: () => {},
                                    }),
                                g &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.bXX, {}),
                                            (0, r.jsx)(s.Drp, {
                                                id: "brand-item",
                                                label: "Brand Item",
                                                color: "brand",
                                                trailingIndicator: y
                                                    ? {
                                                          type: "icon",
                                                          icon: s.I9m,
                                                      }
                                                    : void 0,
                                                action: () => {},
                                            }),
                                            (0, r.jsx)(s.Drp, {
                                                id: "premium-item",
                                                label: "Premium Item",
                                                color: "premium",
                                                icon: p ? s.Zes : void 0,
                                                action: () => {},
                                            }),
                                            (0, r.jsx)(s.Drp, {
                                                id: "success-item",
                                                label: "Success Item",
                                                color: "success",
                                                icon: p ? s.Zes : void 0,
                                                action: () => {},
                                            }),
                                        ],
                                    }),
                                f &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.bXX, {}),
                                            (0, r.jsxs)(s.Drp, {
                                                id: "submenu",
                                                label: "More Options",
                                                icon: p ? s.Zes : void 0,
                                                children: [
                                                    (0, r.jsx)(s.Drp, {
                                                        id: "submenu-1",
                                                        label: "Submenu Item 1",
                                                        action: () => {},
                                                    }),
                                                    (0, r.jsx)(s.Drp, {
                                                        id: "submenu-2",
                                                        label: "Submenu Item 2",
                                                        action: () => {},
                                                    }),
                                                    (0, r.jsx)(s.Drp, {
                                                        id: "submenu-3",
                                                        label: "Submenu Item 3",
                                                        action: () => {},
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                c &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.bXX, {}),
                                            (0, r.jsx)(s.sLh, {
                                                id: "notifications",
                                                label: "Enable Notifications Enable Notifications Enable Notifications",
                                                checked: O,
                                                action: () => v(!O),
                                            }),
                                            (0, r.jsx)(s.sLh, {
                                                id: "mute",
                                                label: "Mute Channel",
                                                checked: A,
                                                action: () => I(!A),
                                            }),
                                        ],
                                    }),
                                d &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.bXX, {}),
                                            (0, r.jsx)(s.fPC, {
                                                id: "switch-notifications",
                                                label: "Push Notifications",
                                                checked: O,
                                                action: () => v(!O),
                                            }),
                                        ],
                                    }),
                                u &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.bXX, {}),
                                            (0, r.jsxs)(s.rXV, {
                                                label: "Channel Type",
                                                children: [
                                                    (0, r.jsx)(s.iDA, {
                                                        id: "radio-text",
                                                        group: "channel-type",
                                                        label: "Text Channel Text Channel Text Channel Text Channel Text Channel Text Channel ",
                                                        checked: "text" === S,
                                                        action: () => T("text"),
                                                    }),
                                                    (0, r.jsx)(s.iDA, {
                                                        id: "radio-voice",
                                                        group: "channel-type",
                                                        label: "Voice Channel",
                                                        checked: "voice" === S,
                                                        action: () => T("voice"),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(s.bXX, {}),
                                            (0, r.jsxs)(s.rXV, {
                                                label: "View Mode",
                                                children: [
                                                    (0, r.jsx)(s.iDA, {
                                                        id: "radio-cozy",
                                                        group: "view-mode",
                                                        label: "Cozy",
                                                        checked: "cozy" === C,
                                                        action: () => N("cozy"),
                                                    }),
                                                    (0, r.jsx)(s.iDA, {
                                                        id: "radio-compact",
                                                        group: "view-mode",
                                                        label: "Compact",
                                                        checked: "compact" === C,
                                                        action: () => N("compact"),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                l &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.bXX, {}),
                                            (0, r.jsxs)(s.rXV, {
                                                label: "Grouped Items",
                                                children: [
                                                    (0, r.jsx)(s.Drp, {
                                                        id: "group-1",
                                                        label: "Group Item 1",
                                                        action: () => {},
                                                    }),
                                                    (0, r.jsx)(s.Drp, {
                                                        id: "group-2",
                                                        label: "Group Item 2",
                                                        action: () => {},
                                                    }),
                                                    (0, r.jsx)(s.Drp, {
                                                        id: "group-3",
                                                        label: "Group Item 3",
                                                        action: () => {},
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                (0, r.jsx)(s.bXX, {}),
                                (0, r.jsx)(s.Drp, {
                                    id: "delete",
                                    label: "Delete Message",
                                    color: b,
                                    icon: p ? s.ucK : void 0,
                                    action: () => {},
                                }),
                            ],
                        }),
                    D = i.useRef(null);
                return (0, r.jsxs)("div", {
                    className: o.k,
                    children: [
                        !w &&
                            (0, r.jsx)(a.$nd, {
                                text: "Open Menu",
                                onClick: () => R(!0),
                            }),
                        (0, r.jsx)(s.YNO, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return P(t);
                            },
                            position: "bottom",
                            align: "center",
                            shouldShow: !0,
                            targetElementRef: D,
                            onRequestClose: () => R(!1),
                            children: () =>
                                (0, r.jsx)("div", {
                                    ref: D,
                                    style: {
                                        width: 1,
                                        height: 1,
                                        opacity: 0,
                                        pointerEvents: "none",
                                    },
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
                        {
                            label: "Fixed",
                            value: "fixed",
                        },
                        {
                            label: "Flexible",
                            value: "flexible",
                        },
                    ],
                },
                hideScroller: {
                    type: "boolean",
                    label: "Hide Scroller",
                    defaultValue: !1,
                },
                showGroups: {
                    type: "boolean",
                    label: "Show Groups",
                    defaultValue: !0,
                },
                showCheckboxItems: {
                    type: "boolean",
                    label: "Show Checkbox Items",
                    defaultValue: !0,
                },
                showRadioItems: {
                    type: "boolean",
                    label: "Show Radio Items",
                    defaultValue: !0,
                },
                showSwitchItems: {
                    type: "boolean",
                    label: "Show Switch Items",
                    defaultValue: !0,
                },
                showSubmenus: {
                    type: "boolean",
                    label: "Show Submenus",
                    defaultValue: !0,
                },
                showIcons: {
                    type: "boolean",
                    label: "Show Icons",
                    defaultValue: !0,
                },
                showHints: {
                    type: "boolean",
                    label: "Show Hints",
                    defaultValue: !0,
                },
                showSubtext: {
                    type: "boolean",
                    label: "Show Subtext",
                    defaultValue: !1,
                },
                showDisabledItems: {
                    type: "boolean",
                    label: "Show Disabled Items",
                    defaultValue: !0,
                },
                showColoredItems: {
                    type: "boolean",
                    label: "Show Colored Items",
                    defaultValue: !0,
                },
                showLoading: {
                    type: "boolean",
                    label: "Show Loading",
                    defaultValue: !1,
                },
                showTrailingIndicator: {
                    type: "boolean",
                    label: "Show Trailing Indicator",
                    defaultValue: !1,
                },
                dangerItemColor: {
                    type: "select",
                    label: "Danger Item Color",
                    defaultValue: "danger",
                    options: [
                        {
                            label: "Default",
                            value: "default",
                        },
                        {
                            label: "Brand",
                            value: "brand",
                        },
                        {
                            label: "Danger",
                            value: "danger",
                        },
                        {
                            label: "Premium",
                            value: "premium",
                        },
                        {
                            label: "Premium Gradient",
                            value: "premium-gradient",
                        },
                        {
                            label: "Success",
                            value: "success",
                        },
                    ],
                },
            },
        },
    ],
};
