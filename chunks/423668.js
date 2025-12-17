n.d(t, { y: () => l }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(159691),
    o = n(481060),
    s = n(777122);
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
                        showSubtext: m,
                        showDisabledItems: h,
                        showColoredItems: g,
                        dangerItemColor: E,
                    } = e,
                    [b, y] = i.useState(!0),
                    [O, v] = i.useState(!1),
                    [S, I] = i.useState("text"),
                    [T, C] = i.useState("cozy"),
                    [A, N] = i.useState(!0),
                    P = (e) =>
                        (0, r.jsxs)(o.v2r, {
                            navId: "menu-story",
                            "aria-label": "Story Menu",
                            variant: t,
                            hideScroller: n,
                            onClose: e,
                            onSelect: () => {},
                            children: [
                                (0, r.jsx)(o.sNh, {
                                    id: "edit",
                                    label: "Edit Message",
                                    icon: p ? o.vdY : void 0,
                                    hint: _ ? "\u2318E" : void 0,
                                    action: () => {},
                                }),
                                (0, r.jsx)(o.sNh, {
                                    id: "pin",
                                    label: "Pin Message",
                                    icon: p ? o.qQX : void 0,
                                    subtext: m ? "Pin this message to the channel" : void 0,
                                    hint: (0, r.jsx)(o.$jN, { type: o.$jN.Type.PULSING_ELLIPSIS }),
                                    action: () => {},
                                }),
                                (0, r.jsx)(o.sNh, {
                                    id: "copy",
                                    label: "Copy Message Link",
                                    icon: p ? o.TIy : void 0,
                                    action: () => {},
                                }),
                                h &&
                                    (0, r.jsx)(o.sNh, {
                                        id: "disabled",
                                        label: "Disabled Item",
                                        icon: p ? o.ewm : void 0,
                                        disabled: !0,
                                        action: () => {},
                                    }),
                                g &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(o.Clw, {}),
                                            (0, r.jsx)(o.sNh, {
                                                id: "brand-item",
                                                label: "Brand Item",
                                                color: "brand",
                                                icon: p ? o.ewm : void 0,
                                                action: () => {},
                                            }),
                                            (0, r.jsx)(o.sNh, {
                                                id: "premium-item",
                                                label: "Premium Item",
                                                color: "premium",
                                                icon: p ? o.ewm : void 0,
                                                action: () => {},
                                            }),
                                            (0, r.jsx)(o.sNh, {
                                                id: "success-item",
                                                label: "Success Item",
                                                color: "success",
                                                icon: p ? o.ewm : void 0,
                                                action: () => {},
                                            }),
                                        ],
                                    }),
                                f &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(o.Clw, {}),
                                            (0, r.jsxs)(o.sNh, {
                                                id: "submenu",
                                                label: "More Options",
                                                icon: p ? o.ewm : void 0,
                                                children: [
                                                    (0, r.jsx)(o.sNh, {
                                                        id: "submenu-1",
                                                        label: "Submenu Item 1",
                                                        action: () => {},
                                                    }),
                                                    (0, r.jsx)(o.sNh, {
                                                        id: "submenu-2",
                                                        label: "Submenu Item 2",
                                                        action: () => {},
                                                    }),
                                                    (0, r.jsx)(o.sNh, {
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
                                            (0, r.jsx)(o.Clw, {}),
                                            (0, r.jsx)(o.S89, {
                                                id: "notifications",
                                                label: "Enable Notifications",
                                                checked: b,
                                                action: () => y(!b),
                                            }),
                                            (0, r.jsx)(o.S89, {
                                                id: "mute",
                                                label: "Mute Channel",
                                                checked: O,
                                                action: () => v(!O),
                                            }),
                                        ],
                                    }),
                                d &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(o.Clw, {}),
                                            (0, r.jsx)(o.m76, {
                                                id: "switch-notifications",
                                                label: "Push Notifications",
                                                checked: b,
                                                action: () => y(!b),
                                            }),
                                        ],
                                    }),
                                u &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(o.Clw, {}),
                                            (0, r.jsxs)(o.kSQ, {
                                                label: "Channel Type",
                                                children: [
                                                    (0, r.jsx)(o.k5B, {
                                                        id: "radio-text",
                                                        group: "channel-type",
                                                        label: "Text Channel",
                                                        checked: "text" === S,
                                                        action: () => I("text"),
                                                    }),
                                                    (0, r.jsx)(o.k5B, {
                                                        id: "radio-voice",
                                                        group: "channel-type",
                                                        label: "Voice Channel",
                                                        checked: "voice" === S,
                                                        action: () => I("voice"),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(o.Clw, {}),
                                            (0, r.jsxs)(o.kSQ, {
                                                label: "View Mode",
                                                children: [
                                                    (0, r.jsx)(o.k5B, {
                                                        id: "radio-cozy",
                                                        group: "view-mode",
                                                        label: "Cozy",
                                                        checked: "cozy" === T,
                                                        action: () => C("cozy"),
                                                    }),
                                                    (0, r.jsx)(o.k5B, {
                                                        id: "radio-compact",
                                                        group: "view-mode",
                                                        label: "Compact",
                                                        checked: "compact" === T,
                                                        action: () => C("compact"),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                l &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(o.Clw, {}),
                                            (0, r.jsxs)(o.kSQ, {
                                                label: "Grouped Items",
                                                children: [
                                                    (0, r.jsx)(o.sNh, {
                                                        id: "group-1",
                                                        label: "Group Item 1",
                                                        action: () => {},
                                                    }),
                                                    (0, r.jsx)(o.sNh, {
                                                        id: "group-2",
                                                        label: "Group Item 2",
                                                        action: () => {},
                                                    }),
                                                    (0, r.jsx)(o.sNh, {
                                                        id: "group-3",
                                                        label: "Group Item 3",
                                                        action: () => {},
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                (0, r.jsx)(o.Clw, {}),
                                (0, r.jsx)(o.sNh, {
                                    id: "delete",
                                    label: "Delete Message",
                                    color: E,
                                    icon: p ? o.XHJ : void 0,
                                    action: () => {},
                                }),
                            ],
                        }),
                    R = i.useRef(null);
                return (0, r.jsxs)("div", {
                    className: s.container,
                    children: [
                        !A &&
                            (0, r.jsx)(a.zxk, {
                                text: "Open Menu",
                                onClick: () => N(!0),
                            }),
                        (0, r.jsx)(o.yRy, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return P(t);
                            },
                            position: "bottom",
                            align: "center",
                            shouldShow: !0,
                            targetElementRef: R,
                            onRequestClose: () => N(!1),
                            children: () =>
                                (0, r.jsx)("div", {
                                    ref: R,
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
