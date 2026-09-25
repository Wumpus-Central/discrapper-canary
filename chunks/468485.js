(a.r(l), a.d(l, { manaCollection: () => aJ, playgroundConfig: () => a0 }));
var t = a(477900),
    o = a(582128),
    n = a(17928),
    i = a(287809),
    s = a(97808),
    r = a(818348),
    d = a(778712);
let u = {
    id: "avatar",
    name: "Avatar",
    component: function (e) {
        let { size: l = d._3.SIZE_48, status: a, isVR: o = !1, isMobile: r = !1 } = e,
            { user: u } = (0, n.cf)([i.default], () => ({ user: i.default.getCurrentUser() })),
            c = Number(l.split("_")[1]);
        return (0, t.jsx)(s.eu, {
            src: u?.getAvatarURL(void 0, c),
            size: l,
            "aria-label": "Sample User",
            status: a,
            isVR: o,
            isMobile: r,
        });
    },
    controls: {
        size: {
            type: "select",
            label: "Size",
            defaultValue: d._3.SIZE_48,
            options: Object.keys(d._3).map((e) => ({ label: e, value: d._3[e] })),
        },
        status: {
            type: "select",
            label: "Status",
            defaultValue: null,
            options: [{ label: "None", value: null }].concat(
                Object.keys(r.cl).map((e) => ({ label: e, value: r.cl[e] })),
            ),
        },
        isVR: { type: "boolean", label: "VR", defaultValue: !1 },
        isMobile: { type: "boolean", label: "Mobile", defaultValue: !1 },
    },
};
var c = a(237528),
    b = a(289049);
let p = {
        name: "Chip",
        id: "chip",
        component: c.v,
        controls: {
            text: { label: "Text", type: "text", defaultValue: "New" },
            variant: {
                label: "Variant",
                type: "select",
                defaultValue: "grayLight",
                options: [
                    { label: "Blurple Light", value: "blurpleLight" },
                    { label: "Blurple Medium", value: "blurpleMedium" },
                    { label: "Blurple Dark", value: "blurpleDark" },
                    { label: "Purple Light", value: "purpleLight" },
                    { label: "Purple Medium", value: "purpleMedium" },
                    { label: "Purple Dark", value: "purpleDark" },
                    { label: "Green Light", value: "greenLight" },
                    { label: "Green Medium", value: "greenMedium" },
                    { label: "Green Dark", value: "greenDark" },
                    { label: "Orange Light", value: "orangeLight" },
                    { label: "Orange Medium", value: "orangeMedium" },
                    { label: "Orange Dark", value: "orangeDark" },
                    { label: "Yellow Light", value: "yellowLight" },
                    { label: "Yellow Medium", value: "yellowMedium" },
                    { label: "Yellow Dark", value: "yellowDark" },
                    { label: "Pink Light", value: "pinkLight" },
                    { label: "Pink Medium", value: "pinkMedium" },
                    { label: "Pink Dark", value: "pinkDark" },
                    { label: "Red Light", value: "redLight" },
                    { label: "Red Medium", value: "redMedium" },
                    { label: "Red Dark", value: "redDark" },
                    { label: "Gray Light", value: "grayLight" },
                    { label: "Gray Medium", value: "grayMedium" },
                    { label: "Gray Dark", value: "grayDark" },
                ],
            },
        },
    },
    m = ["blurple", "purple", "green", "orange", "yellow", "pink", "red", "gray"],
    x = ["Light", "Medium", "Dark"];
var y = a(993077),
    h = a(821609),
    v = a(503698),
    g = a.n(v),
    f = a(235986),
    V = a(244367),
    j = a(742158),
    C = a(503994);
y.Z.Types;
function S(e) {
    let l,
        a,
        {
            type: o = y.Z.Types.DANGER,
            imageData: n,
            button: i,
            className: s,
            iconClassName: r,
            title: d,
            body: u,
            style: c,
            align: b = f.A.Align.START,
        } = e,
        p = f.A.Direction.HORIZONTAL;
    if (null != n) {
        let { position: e, ...a } = n;
        ((l = (0, t.jsx)(f.A.Child, {
            grow: 0,
            shrink: 0,
            children: (0, t.jsx)("img", { alt: "", className: g()(C.Kk, r), ...a }),
        })),
            "right" === e && (p = f.A.Direction.HORIZONTAL_REVERSE));
    } else null != i && (a = i);
    let m = !0;
    return (
        o === y.Z.Types.PRIMARY && (m = !1),
        (0, t.jsx)(y.Z, {
            className: g()(C.RJ, s),
            type: o,
            style: c,
            children: (0, t.jsxs)(f.A, {
                direction: p,
                align: b,
                children: [
                    l,
                    (0, t.jsxs)(f.A.Child, {
                        children: [
                            null != d && "" !== d
                                ? (0, t.jsx)(j.z, {
                                      "data-migration-pending": !0,
                                      className: g()(C.$G, { [C.vV]: m }),
                                      children: d,
                                  })
                                : null,
                            (0, t.jsx)(V.a, {
                                "data-migration-pending": !0,
                                className: g()(C.Vz, { [C.vV]: m }),
                                children: u,
                            }),
                            a,
                        ],
                    }),
                ],
            }),
        })
    );
}
S.Types = y.Z.Types;
let k = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: l, title: a, body: o, hasButton: n } = e,
                    i = n ? (0, t.jsx)(h.$, { text: "Action" }) : void 0;
                return (0, t.jsx)(S, { "data-migration-pending": !0, type: l, title: a, body: o, button: i });
            },
            controls: {
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: y.Z.Types.DANGER,
                    options: [
                        { label: "Primary", value: y.Z.Types.PRIMARY },
                        { label: "Danger", value: y.Z.Types.DANGER },
                        { label: "Warning", value: y.Z.Types.WARNING },
                        { label: "Success", value: y.Z.Types.SUCCESS },
                        { label: "Brand", value: y.Z.Types.BRAND },
                        { label: "Custom", value: y.Z.Types.CUSTOM },
                    ],
                },
                title: { type: "text", label: "Title", defaultValue: "Important Notice" },
                body: {
                    type: "text",
                    label: "Body",
                    defaultValue: "This is an important message that you should pay attention to.",
                },
                hasButton: { type: "boolean", label: "Has Button", defaultValue: !1 },
            },
        },
        {
            id: "formtitle",
            name: "FormTitle",
            component: function (e) {
                let { children: l, disabled: a, required: o, errorMessage: n } = e,
                    i = n?.trim() === "" ? void 0 : n;
                return (0, t.jsx)("div", {
                    style: { display: "flex", flexDirection: "column", gap: "16px" },
                    children: ["h1", "h2", "h3", "h4", "h5", "legend"].map((e) =>
                        (0, t.jsxs)(
                            "div",
                            {
                                style: { display: "flex", alignItems: "center", gap: "8px" },
                                children: [
                                    (0, t.jsxs)("code", {
                                        style: { minWidth: "60px", fontSize: "12px", color: "#666" },
                                        children: [e, ":"],
                                    }),
                                    (0, t.jsx)(j.z, {
                                        "data-migration-pending": !0,
                                        tag: e,
                                        disabled: a,
                                        required: o,
                                        error: i,
                                        errorId: null != i ? `error-id-${e}` : void 0,
                                        children: l,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                });
            },
            controls: {
                children: { type: "text", label: "Title Text", defaultValue: "Form Title" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
            },
        },
    ],
};
var w = a(782603),
    M = a(194261),
    T = a(231483),
    I = a(175841),
    E = a(346411),
    D = a(331322),
    A = a(452027);
let L = [
    "heading-sm/normal",
    "heading-sm/medium",
    "heading-sm/semibold",
    "heading-sm/bold",
    "heading-sm/extrabold",
    "heading-md/normal",
    "heading-md/medium",
    "heading-md/semibold",
    "heading-md/bold",
    "heading-md/extrabold",
    "heading-lg/normal",
    "heading-lg/medium",
    "heading-lg/semibold",
    "heading-lg/bold",
    "heading-lg/extrabold",
    "heading-xl/normal",
    "heading-xl/medium",
    "heading-xl/semibold",
    "heading-xl/bold",
    "heading-xl/extrabold",
    "heading-xxl/normal",
    "heading-xxl/medium",
    "heading-xxl/semibold",
    "heading-xxl/bold",
    "heading-xxl/extrabold",
    "experimental/heading-xs/medium",
    "experimental/heading-xs/semibold",
    "experimental/heading-sm/medium",
    "experimental/heading-sm/semibold",
    "experimental/heading-md/medium",
    "experimental/heading-md/semibold",
    "experimental/heading-lg/medium",
    "experimental/heading-lg/semibold",
    "experimental/heading-xl/medium",
    "experimental/heading-xl/semibold",
    "experimental/heading-xxl/medium",
    "experimental/heading-xxl/semibold",
    "eyebrow",
    "heading-deprecated-12/normal",
    "heading-deprecated-12/medium",
    "heading-deprecated-12/semibold",
    "heading-deprecated-12/bold",
    "heading-deprecated-12/extrabold",
    "redesign/heading-18/medium",
    "redesign/heading-18/semibold",
    "redesign/heading-18/bold",
    "text-xxs/normal",
    "text-xxs/medium",
    "text-xxs/semibold",
    "text-xxs/bold",
    "text-xs/normal",
    "text-xs/medium",
    "text-xs/semibold",
    "text-xs/bold",
    "text-sm/normal",
    "text-sm/medium",
    "text-sm/semibold",
    "text-sm/bold",
    "text-md/normal",
    "text-md/medium",
    "text-md/semibold",
    "text-md/bold",
    "text-lg/normal",
    "text-lg/medium",
    "text-lg/semibold",
    "text-lg/bold",
    "redesign/message-preview/normal",
    "redesign/message-preview/medium",
    "redesign/message-preview/semibold",
    "redesign/message-preview/bold",
    "redesign/channel-title/normal",
    "redesign/channel-title/medium",
    "redesign/channel-title/semibold",
    "redesign/channel-title/bold",
    "experimental/body-xs/normal",
    "experimental/body-xs/medium",
    "experimental/body-xs/semibold",
    "experimental/body-sm/normal",
    "experimental/body-sm/medium",
    "experimental/body-sm/semibold",
    "experimental/body-md/normal",
    "experimental/body-md/medium",
    "experimental/body-md/semibold",
    "experimental/body-lg/normal",
    "experimental/body-lg/medium",
    "experimental/body-lg/semibold",
    "experimental/footnote/normal",
    "experimental/footnote/medium",
    "experimental/footnote/semibold",
    "display-sm",
    "display-md",
    "display-lg",
    "experimental/display-xs",
    "experimental/display-sm",
    "experimental/display-md",
    "experimental/display-lg",
    "nitro-sm",
    "nitro-md",
    "nitro-lg",
    "nitro-xs",
    "experimental/nitro-xs",
    "experimental/nitro-sm",
    "experimental/nitro-md",
    "experimental/nitro-lg",
    "code",
    "experimental/mono-md/normal",
    "experimental/mono-md/bold",
];
var N = a(512950);
let R = {
    Default: void 0,
    Bell: w.BellIcon,
    Lock: M.LockIcon,
    Shield: T.ShieldIcon,
    Sparkles: I.SparklesIcon,
    Wrench: E.WrenchIcon,
};
function P(e, l) {
    return e ? (0, t.jsx)(h.$, { text: l, variant: "secondary", size: "sm" }) : void 0;
}
let O = {
    name: "HelpMessage",
    id: "help-message",
    component: function (e) {
        let {
            text: l,
            messageType: a,
            icon: o,
            iconAlign: n,
            textColor: i,
            textVariant: s,
            action: r,
            actionText: d,
            hidden: u,
        } = e;
        return (0, t.jsx)(N.p, {
            messageType: a,
            icon: R[o],
            iconAlign: n,
            textColor: i,
            textVariant: s,
            action: P(r, d),
            hidden: u,
            children: l,
        });
    },
    controls: {
        messageType: {
            label: "Message Type",
            type: "select",
            defaultValue: N.Y.INFO,
            options: Object.entries(N.Y).map((e) => {
                let [l, a] = e;
                return { label: l, value: a };
            }),
        },
        text: { label: "Text", type: "text", defaultValue: "This is a help message" },
        icon: {
            label: "Icon",
            type: "select",
            defaultValue: "Default",
            options: Object.keys(R).map((e) => ({ label: e, value: e })),
        },
        iconAlign: {
            label: "Icon Align",
            type: "select",
            defaultValue: "start",
            options: [
                { label: "Start", value: "start" },
                { label: "Center", value: "center" },
            ],
        },
        textColor: {
            label: "Text Color",
            type: "select",
            defaultValue: "text-default",
            options: [
                "text-default",
                "text-strong",
                "text-subtle",
                "text-muted",
                "text-feedback-positive",
                "text-feedback-critical",
                "text-feedback-warning",
                "text-feedback-info",
                "currentColor",
                "none",
            ].map((e) => ({ label: e, value: e })),
        },
        textVariant: {
            label: "Text Variant",
            type: "select",
            defaultValue: "text-sm/medium",
            options: Object.values(L).map((e) => ({ label: e, value: e })),
        },
        action: { label: "Action Button", type: "boolean", defaultValue: !1 },
        actionText: { label: "Action Text", type: "text", defaultValue: "Learn more" },
        hidden: { label: "Hidden", type: "boolean", defaultValue: !1 },
    },
};
var B = a(22231),
    z = a(366605),
    $ = a(624479),
    G = a(625903),
    F = a(509434),
    _ = a(241326),
    H = a(922016),
    q = a(980707),
    U = a(477782),
    W = a(630271);
let X = {
    title: "Menu",
    stories: [
        {
            name: "Menu",
            id: "menu",
            component: function (e) {
                let {
                        variant: l,
                        hideScroller: a,
                        showGroups: n,
                        showCheckboxItems: i,
                        showRadioItems: s,
                        showSwitchItems: r,
                        showSubmenus: d,
                        showIcons: u,
                        showShortcuts: c,
                        showSubtext: b,
                        showDisabledItems: p,
                        showColoredItems: m,
                        showLoading: x,
                        showTrailingIndicator: y,
                        dangerItemColor: v,
                    } = e,
                    [g, f] = o.useState(!0),
                    [V, j] = o.useState(!1),
                    [C, S] = o.useState("text"),
                    [k, w] = o.useState("cozy"),
                    [M, T] = o.useState(!0),
                    I = o.useRef(null);
                return (0, t.jsxs)("div", {
                    className: W.k,
                    children: [
                        !M && (0, t.jsx)(h.$, { text: "Open Menu", onClick: () => T(!0) }),
                        (0, t.jsx)(H.Y, {
                            renderPopout: (e) => {
                                let { closePopout: o } = e;
                                return (0, t.jsxs)(q.W, {
                                    "data-menu-migrated": !0,
                                    navId: "menu-story",
                                    "aria-label": "Story Menu",
                                    variant: l,
                                    hideScroller: a,
                                    onClose: o,
                                    onSelect: () => {},
                                    children: [
                                        (0, t.jsx)(U.Dr, {
                                            id: "edit",
                                            label: "Edit Message",
                                            icon: u ? B.PencilIcon : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: B.PencilIcon } : void 0,
                                            shortcut: c ? "\u2318E" : void 0,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(U.Dr, {
                                            id: "pin",
                                            label: "Pin Message",
                                            icon: u ? z.t : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: z.t } : void 0,
                                            subtext: b ? "Pin this message to the channel" : void 0,
                                            badge: "beta",
                                            loading: x,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(U.Dr, {
                                            id: "copy",
                                            label: "Copy Message Link",
                                            icon: u ? $.CopyIcon : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: $.CopyIcon } : void 0,
                                            badge: "new",
                                            action: () => {},
                                        }),
                                        p &&
                                            (0, t.jsx)(U.Dr, {
                                                id: "disabled",
                                                label: "Disabled Item",
                                                icon: u ? G.SettingsIcon : void 0,
                                                leadingAccessory: u ? { type: "icon", icon: G.SettingsIcon } : void 0,
                                                disabled: !0,
                                                action: () => {},
                                            }),
                                        m &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(U.bX, {}),
                                                    (0, t.jsx)(U.Dr, {
                                                        id: "brand-item",
                                                        label: "Brand Item",
                                                        color: "brand",
                                                        trailingIndicator: y ? { type: "icon", icon: F.I } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(U.Dr, {
                                                        id: "premium-item",
                                                        label: "Premium Item",
                                                        color: "premium",
                                                        icon: u ? G.SettingsIcon : void 0,
                                                        leadingAccessory: u
                                                            ? { type: "icon", icon: G.SettingsIcon }
                                                            : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(U.Dr, {
                                                        id: "success-item",
                                                        label: "Success Item",
                                                        color: "success",
                                                        icon: u ? G.SettingsIcon : void 0,
                                                        leadingAccessory: u
                                                            ? { type: "icon", icon: G.SettingsIcon }
                                                            : void 0,
                                                        action: () => {},
                                                    }),
                                                ],
                                            }),
                                        d &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(U.bX, {}),
                                                    (0, t.jsxs)(U.Dr, {
                                                        id: "submenu",
                                                        label: "More Options",
                                                        icon: u ? G.SettingsIcon : void 0,
                                                        children: [
                                                            (0, t.jsx)(U.Dr, {
                                                                id: "submenu-1",
                                                                label: "Submenu Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(U.Dr, {
                                                                id: "submenu-2",
                                                                label: "Submenu Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(U.Dr, {
                                                                id: "submenu-3",
                                                                label: "Submenu Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        i &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(U.bX, {}),
                                                    (0, t.jsx)(U.sL, {
                                                        id: "notifications",
                                                        label: "Enable Notifications Enable Notifications Enable Notifications",
                                                        checked: g,
                                                        action: () => f(!g),
                                                    }),
                                                    (0, t.jsx)(U.sL, {
                                                        id: "mute",
                                                        label: "Mute Channel",
                                                        checked: V,
                                                        action: () => j(!V),
                                                    }),
                                                ],
                                            }),
                                        r &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(U.bX, {}),
                                                    (0, t.jsx)(U.fP, {
                                                        id: "switch-notifications",
                                                        label: "Push Notifications",
                                                        checked: g,
                                                        action: () => f(!g),
                                                    }),
                                                ],
                                            }),
                                        s &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(U.bX, {}),
                                                    (0, t.jsxs)(U.rX, {
                                                        label: "Channel Type",
                                                        children: [
                                                            (0, t.jsx)(U.iD, {
                                                                id: "radio-text",
                                                                group: "channel-type",
                                                                label: "Text Channel Text Channel Text Channel Text Channel Text Channel Text Channel ",
                                                                checked: "text" === C,
                                                                action: () => S("text"),
                                                            }),
                                                            (0, t.jsx)(U.iD, {
                                                                id: "radio-voice",
                                                                group: "channel-type",
                                                                label: "Voice Channel",
                                                                checked: "voice" === C,
                                                                action: () => S("voice"),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, t.jsx)(U.bX, {}),
                                                    (0, t.jsxs)(U.rX, {
                                                        label: "View Mode",
                                                        children: [
                                                            (0, t.jsx)(U.iD, {
                                                                id: "radio-cozy",
                                                                group: "view-mode",
                                                                label: "Cozy",
                                                                checked: "cozy" === k,
                                                                action: () => w("cozy"),
                                                            }),
                                                            (0, t.jsx)(U.iD, {
                                                                id: "radio-compact",
                                                                group: "view-mode",
                                                                label: "Compact",
                                                                checked: "compact" === k,
                                                                action: () => w("compact"),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        n &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(U.bX, {}),
                                                    (0, t.jsxs)(U.rX, {
                                                        label: "Grouped Items",
                                                        children: [
                                                            (0, t.jsx)(U.Dr, {
                                                                id: "group-1",
                                                                label: "Group Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(U.Dr, {
                                                                id: "group-2",
                                                                label: "Group Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(U.Dr, {
                                                                id: "group-3",
                                                                label: "Group Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        (0, t.jsx)(U.bX, {}),
                                        (0, t.jsx)(U.Dr, {
                                            id: "delete",
                                            label: "Delete Message",
                                            color: v,
                                            icon: u ? _.TrashIcon : void 0,
                                            action: () => {},
                                        }),
                                    ],
                                });
                            },
                            position: "bottom",
                            align: "center",
                            shouldShow: !0,
                            targetElementRef: I,
                            onRequestClose: () => T(!1),
                            children: () =>
                                (0, t.jsx)("div", {
                                    ref: I,
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
var Z = a(417098),
    K = a(652215);
let Y = Object.keys(Z.Hv);
function Q(e) {
    return e
        .toLowerCase()
        .split("_")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
}
let J = K.kqX.PREMIUM_TIER_0,
    ee = {
        name: "Notice",
        id: "notice",
        component: function (e) {
            let {
                    message: l,
                    color: a,
                    actions: o,
                    actionLabel: n,
                    minorButtons: i,
                    dismissible: s,
                    customBackground: r,
                    customText: d,
                } = e,
                u = "CUSTOM" === a,
                c = {};
            return (
                u && null != r && "" !== r && (c.backgroundColor = r),
                u && null != d && "" !== d && (c.color = d),
                (0, t.jsxs)(Z.$T, {
                    color: Z.Hv[a],
                    style: Object.keys(c).length > 0 ? c : null,
                    children: [
                        l,
                        "cta" === o || "ctaWithSecondary" === o
                            ? (0, t.jsx)(Z.Z_, { noticeType: J, minor: i, children: n })
                            : null,
                        "ctaWithSecondary" === o ? (0, t.jsx)(Z.zr, { minor: i, children: "Maybe later" }) : null,
                        "link" === o
                            ? (0, t.jsx)(Z.eC, { noticeType: J, href: "https://support.discord.com", children: n })
                            : null,
                        s ? (0, t.jsx)(Z.PM, { noticeType: J, onClick: () => {} }) : null,
                    ],
                })
            );
        },
        controls: {
            color: {
                label: "Color",
                type: "select",
                defaultValue: "BRAND",
                options: Y.map((e) => ({ label: Q(e), value: e })),
            },
            message: {
                label: "Message",
                type: "text",
                defaultValue: "This is a notice message with important information.",
            },
            actions: {
                label: "Actions",
                type: "select",
                defaultValue: "none",
                options: [
                    { label: "None", value: "none" },
                    { label: "Primary button", value: "cta" },
                    { label: "Primary + secondary buttons", value: "ctaWithSecondary" },
                    { label: "Link", value: "link" },
                ],
            },
            actionLabel: { label: "Action label", type: "text", defaultValue: "Upgrade" },
            minorButtons: { label: 'Use smaller "minor" buttons', type: "boolean", defaultValue: !1 },
            dismissible: { label: "Show close button", type: "boolean", defaultValue: !1 },
            customBackground: { label: "Background (Custom color only)", type: "color", defaultValue: void 0 },
            customText: { label: "Text color (Custom color only)", type: "color", defaultValue: void 0 },
        },
    };
var el = a(299163);
let ea = {
    title: "Slider",
    stories: [
        {
            id: "slider",
            name: "Slider",
            component: function (e) {
                let {
                        minValue: l,
                        maxValue: a,
                        initialValue: o,
                        markerCount: n,
                        stickToMarkers: i,
                        disabled: s,
                        equidistant: r,
                        label: d,
                        description: u,
                    } = e,
                    c = n > 0 ? Array.from({ length: n }, (e, t) => Math.floor(l + (t / (n - 1)) * (a - l))) : void 0;
                return (0, t.jsx)(
                    el.A,
                    {
                        label: d,
                        description: u,
                        layout: "horizontal-responsive",
                        minValue: l,
                        maxValue: a,
                        initialValue: o,
                        markers: c,
                        stickToMarkers: i,
                        disabled: s,
                        equidistant: r,
                    },
                    n,
                );
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "This is a slider" },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is a description of the slider",
                },
                minValue: { type: "number", label: "Min Value", defaultValue: 0 },
                maxValue: { type: "number", label: "Max Value", defaultValue: 100 },
                initialValue: { type: "number", label: "Initial Value", defaultValue: 50 },
                markerCount: { type: "number", label: "Marker Count", minValue: 3, defaultValue: 3 },
                stickToMarkers: { type: "boolean", label: "Stick to Markers", defaultValue: !1 },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                equidistant: { type: "boolean", label: "Equidistant", defaultValue: !1 },
            },
        },
    ],
};
var et = a(548118),
    eo = a(71393),
    en = a(342952),
    ei = a(692617);
let es = {
        id: "stacked-avatars",
        name: "StackedAvatars",
        component: function (e) {
            let { size: l = d._3.SIZE_24, maxUsers: a = 3, hideOverflowCount: o = !1 } = e,
                { users: s } = (0, n.cf)([i.default], () => ({
                    users: Object.values(i.default.getUsers()).slice(0, 10),
                }));
            return 0 === s.length ? null : (0, t.jsx)(en.I, { users: s, maxUsers: a, size: l, hideOverflowCount: o });
        },
        controls: {
            size: {
                type: "select",
                label: "Size",
                defaultValue: d._3.SIZE_24,
                options: [
                    { label: "SIZE_16", value: d._3.SIZE_16 },
                    { label: "SIZE_20", value: d._3.SIZE_20 },
                    { label: "SIZE_24", value: d._3.SIZE_24 },
                ],
            },
            maxUsers: { type: "number", label: "Max Users", defaultValue: 3, minValue: 1 },
            hideOverflowCount: { type: "boolean", label: "Hide Overflow Count", defaultValue: !1 },
        },
    },
    er = {
        id: "stacked-guild-icons",
        name: "StackedGuildIcons",
        component: function (e) {
            let {
                    size: l = et.Ay.Sizes.SMALLER,
                    maxGuilds: a = 3,
                    hideOverflowCount: o = !1,
                    disableGuildNameTooltip: i = !1,
                } = e,
                { guilds: s } = (0, n.cf)([eo.A], () => ({ guilds: eo.A.getGuildsArray().slice(0, 10) }));
            return 0 === s.length
                ? null
                : (0, t.jsx)(ei.A, {
                      guilds: s,
                      maxGuilds: a,
                      size: l,
                      hideOverflowCount: o,
                      disableGuildNameTooltip: i,
                  });
        },
        controls: {
            size: {
                type: "select",
                label: "Size",
                defaultValue: et.Ay.Sizes.SMALLER,
                options: [
                    { label: "SMOL", value: et.Ay.Sizes.SMOL },
                    { label: "MINI", value: et.Ay.Sizes.MINI },
                    { label: "SMALLER", value: et.Ay.Sizes.SMALLER },
                ],
            },
            maxGuilds: { type: "number", label: "Max Guilds", defaultValue: 3, minValue: 1 },
            hideOverflowCount: { type: "boolean", label: "Hide Overflow Count", defaultValue: !1 },
            disableGuildNameTooltip: { type: "boolean", label: "Disable Guild Name Tooltip", defaultValue: !1 },
        },
    };
var ed = a(761508);
let eu = {
    title: "TabBar",
    stories: [
        {
            id: "tabbar",
            name: "TabBar",
            component: function (e) {
                let { look: l, type: a, tabCount: n } = e,
                    [i, s] = o.useState("tab1"),
                    r = Array.from({ length: n }, (e, l) => ({ id: `tab${l + 1}`, name: `Tab ${l + 1}` }));
                return (0, t.jsx)(ed.V, {
                    type: a,
                    look: l,
                    selectedItem: i,
                    onItemSelect: s,
                    children: r.map((e) => (0, t.jsx)(ed.V.Item, { id: e.id, children: e.name }, e.id)),
                });
            },
            controls: {
                look: {
                    type: "select",
                    label: "Look",
                    defaultValue: "brand",
                    options: [
                        { label: "Brand", value: "brand" },
                        { label: "Grey", value: "grey" },
                        { label: "Custom", value: "custom" },
                    ],
                },
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: "top",
                    options: [
                        { label: "Top", value: "top" },
                        { label: "Side", value: "side" },
                        { label: "Top Pill", value: "top-pill" },
                    ],
                },
                tabCount: { type: "number", label: "Number of Tabs", defaultValue: 3 },
            },
        },
    ],
};
var ec = a(444550),
    eb = a(843282);
let ep = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
    ],
    em = {
        id: "select",
        name: "Select",
        component: function (e) {
            let {
                    label: l,
                    description: a,
                    isDisabled: n,
                    isProcessing: i,
                    placeholder: s,
                    maxVisibleItems: r,
                    clearable: d,
                    closeOnSelect: u,
                    popoutPosition: c,
                    variant: b,
                } = e,
                [p, m] = o.useState("blue");
            return (0, t.jsx)(eb.Te, {
                variant: b,
                label: l,
                description: a,
                value: p,
                onChange: m,
                options: ep,
                placeholder: s,
                isDisabled: n,
                isProcessing: i,
                maxVisibleItems: r,
                clearable: d,
                closeOnSelect: u,
                popoutPosition: c,
            });
        },
        controls: {
            label: { type: "text", label: "Label", defaultValue: "Color" },
            description: { type: "text", label: "Description", defaultValue: "Choose a color" },
            placeholder: { type: "text", label: "Placeholder", defaultValue: "Choose a color" },
            variant: {
                type: "select",
                label: "Variant",
                defaultValue: "filled",
                options: [
                    { label: "Filled", value: "filled" },
                    { label: "Text Only", value: "text-only" },
                ],
            },
            isDisabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
            isProcessing: { type: "boolean", label: "Processing", defaultValue: !1 },
            clearable: { type: "boolean", label: "Clearable", defaultValue: !0 },
            closeOnSelect: { type: "boolean", label: "Close On Select", defaultValue: !0 },
            maxVisibleItems: { type: "number", label: "Max Visible Items", defaultValue: 5 },
            popoutPosition: {
                type: "select",
                label: "Popout Position",
                defaultValue: "bottom",
                options: [
                    { label: "Bottom", value: "bottom" },
                    { label: "Top", value: "top" },
                    { label: "Center", value: "center" },
                    { label: "Left", value: "left" },
                    { label: "Right", value: "right" },
                    { label: "Window Center", value: "window_center" },
                ],
            },
        },
    },
    ex = {
        id: "searchable-select",
        name: "Searchable Select",
        component: function (e) {
            let {
                    placeholder: l,
                    isDisabled: a,
                    isProcessing: n,
                    clearable: i,
                    closeOnSelect: s,
                    clearQueryOnSelect: r,
                    filter: d,
                    ...u
                } = e,
                [c, b] = o.useState("blue"),
                [p, m] = o.useState(["blue"]);
            return (0, t.jsxs)(D.B, {
                gap: 24,
                children: [
                    (0, t.jsx)(ec.p, {
                        ...u,
                        value: c,
                        onChange: b,
                        options: ep,
                        placeholder: l,
                        isDisabled: a,
                        isProcessing: n,
                        clearable: i,
                        clearQueryOnSelect: r,
                        filter: d,
                    }),
                    (0, t.jsx)(ec.p, {
                        ...u,
                        multi: !0,
                        value: p,
                        onChange: m,
                        options: ep,
                        placeholder: l,
                        isDisabled: a,
                        isProcessing: n,
                        clearable: i,
                        closeOnSelect: s,
                        clearQueryOnSelect: r,
                        filter: d,
                    }),
                ],
            });
        },
        controls: {
            ...em.controls,
            placeholder: { type: "text", label: "Placeholder", defaultValue: "Search for a color" },
            isDisabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
            isProcessing: { type: "boolean", label: "Processing", defaultValue: !1 },
            clearable: { type: "boolean", label: "Clearable", defaultValue: !0 },
            closeOnSelect: { type: "boolean", label: "Close On Select", defaultValue: !0 },
            clearQueryOnSelect: { type: "boolean", label: "Clear Query On Select", defaultValue: !1 },
            filter: { type: "boolean", label: "Filter", defaultValue: !0 },
        },
    };
var ey = a(95477),
    eh = a(582306),
    ev = a(666944);
let eg = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
    ],
    ef = {
        id: "void",
        name: "Void",
        deprecationNotice: "Void is deprecated. Use Mana instead.",
        groups: [
            {
                title: "HelpMessage",
                stories: [
                    O,
                    {
                        name: "All Types",
                        id: "help-message-types",
                        component: function (e) {
                            let { text: l, actionText: a } = e;
                            return (0, t.jsx)(D.B, {
                                gap: 16,
                                children: [!1, !0].map((e) =>
                                    (0, t.jsx)(
                                        A.D,
                                        {
                                            label: e ? "With action" : "No action",
                                            children: (0, t.jsx)(D.B, {
                                                gap: 8,
                                                children: Object.values(N.Y).map((o) =>
                                                    (0, t.jsx)(
                                                        N.p,
                                                        { messageType: o, action: P(e, a), children: l },
                                                        o,
                                                    ),
                                                ),
                                            }),
                                        },
                                        String(e),
                                    ),
                                ),
                            });
                        },
                        controls: {
                            text: { label: "Text", type: "text", defaultValue: "This is a help message" },
                            actionText: { label: "Action Text", type: "text", defaultValue: "Learn more" },
                        },
                    },
                ],
            },
            { title: "Select", stories: [em, ex] },
            ea,
            eu,
            { title: "Avatar", stories: [u] },
            {
                title: "Chip",
                stories: [
                    p,
                    {
                        name: "All Variants",
                        id: "chip-all-variants",
                        component: function () {
                            return (0, t.jsx)("div", {
                                className: b.lx,
                                children: x.map((e) =>
                                    (0, t.jsxs)(
                                        "div",
                                        {
                                            className: b.uW,
                                            children: [
                                                (0, t.jsx)("h3", { className: b.Gf, children: e }),
                                                (0, t.jsx)("div", {
                                                    className: b.f2,
                                                    children: m.map((l) => {
                                                        let a = `${l}${e}`;
                                                        return (0, t.jsx)(c.v, { text: l, variant: a }, a);
                                                    }),
                                                }),
                                            ],
                                        },
                                        e,
                                    ),
                                ),
                            });
                        },
                    },
                ],
            },
            {
                title: "Notice",
                stories: [
                    ee,
                    {
                        name: "All Colors",
                        id: "notice-colors",
                        component: function (e) {
                            let { message: l } = e;
                            return (0, t.jsx)(D.B, {
                                gap: 8,
                                children: Y.map((e) =>
                                    (0, t.jsx)(Z.$T, { color: Z.Hv[e], children: `${Q(e)}: ${l}` }, e),
                                ),
                            });
                        },
                        controls: {
                            message: { label: "Message", type: "text", defaultValue: "This is a notice message." },
                        },
                    },
                ],
            },
            {
                title: "VoidInputs",
                stories: [
                    {
                        name: "VoidInputs",
                        id: "void-inputs",
                        component: function (e) {
                            let { disabled: l, placeholder: a } = e,
                                [n, i] = o.useState(void 0),
                                [s, r] = o.useState(void 0),
                                [d, u] = o.useState(void 0);
                            return (0, t.jsxs)(D.B, {
                                gap: 8,
                                children: [
                                    (0, t.jsx)(eb.Te, {
                                        value: n,
                                        onChange: i,
                                        options: eg,
                                        placeholder: a,
                                        isDisabled: l,
                                    }),
                                    (0, t.jsx)(ey.k, { placeholder: a, disabled: l }),
                                    (0, t.jsx)(ec.p, {
                                        value: n,
                                        onChange: i,
                                        options: eg,
                                        placeholder: a,
                                        isDisabled: l,
                                    }),
                                    (0, t.jsx)(eh.J, { onSelect: r, value: s, disabled: l }),
                                    (0, t.jsx)(ev.c, { onChange: u, value: d, disabled: l }),
                                ],
                            });
                        },
                        controls: {
                            disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                            placeholder: { type: "text", label: "Placeholder", defaultValue: "Placeholder" },
                        },
                    },
                ],
            },
            k,
            X,
            { title: "Stacked Avatars", stories: [es] },
            { title: "Stacked Guild Icons", stories: [er] },
        ],
    };
var eV = a(27232),
    ej = a(825860),
    eC = a(406810),
    eS = a(260981),
    ek = a(540418),
    ew = a(907085),
    eM = a(179820),
    eT = a(508770);
let eI = {
        none: void 0,
        StarIcon: eV.StarIcon,
        FireIcon: ej.FireIcon,
        SparklesIcon: I.SparklesIcon,
        ClockIcon: eC.ClockIcon,
        ExperimentalCommonIcon: eS.p,
        ExperimentalRareIcon: ek.A,
        ExperimentalEpicIcon: ew.b,
        ExperimentalMythicIcon: eM.O,
    },
    eE = {
        title: "Badge",
        stories: [
            {
                name: "Badge",
                id: "badge",
                component: function (e) {
                    let { type: l, customText: a, variant: o, iconName: n } = e,
                        i = null != n && "" !== n && "none" !== n ? eI[n] : void 0;
                    return (0, t.jsx)(eT.E, {
                        type: "custom" === l && null != a && "" !== a ? { text: a } : l,
                        variant: o,
                        icon: i,
                    });
                },
                docs: "https://design.discord.tools/components/web/badge",
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: "new",
                        options: [
                            { label: "New", value: "new" },
                            { label: "Beta", value: "beta" },
                            { label: "Early Access", value: "early_access" },
                            { label: "Free Trial", value: "free_trial" },
                            { label: "Custom Text", value: "custom" },
                        ],
                    },
                    customText: { label: "Custom Text", type: "text", defaultValue: "Custom" },
                    variant: {
                        label: "Variant",
                        type: "select",
                        defaultValue: "default",
                        options: [
                            { label: "Default", value: "default" },
                            { label: "Brand", value: "brand" },
                            { label: "Expressive", value: "expressive" },
                            { label: "Rarity \u2014 Common", value: "rarity-common" },
                            { label: "Rarity \u2014 Rare", value: "rarity-rare" },
                            { label: "Rarity \u2014 Epic", value: "rarity-epic" },
                            { label: "Rarity \u2014 Mythic", value: "rarity-mythic" },
                        ],
                    },
                    iconName: {
                        label: "Icon",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Star", value: "StarIcon" },
                            { label: "Fire", value: "FireIcon" },
                            { label: "Sparkles", value: "SparklesIcon" },
                            { label: "Clock", value: "ClockIcon" },
                            { label: "Rarity \u2014 Common", value: "ExperimentalCommonIcon" },
                            { label: "Rarity \u2014 Rare", value: "ExperimentalRareIcon" },
                            { label: "Rarity \u2014 Epic", value: "ExperimentalEpicIcon" },
                            { label: "Rarity \u2014 Mythic", value: "ExperimentalMythicIcon" },
                        ],
                    },
                },
            },
        ],
    };
var eD = a(408278),
    eA = a(111159),
    eL = a(876798),
    eN = a(831544),
    eR = a(83107),
    eP = a(123292),
    eO = a(825484),
    eB = a(657718);
function ez(e) {
    let { pressed: l, ...a } = e;
    return (0, t.jsx)(eB.S, {
        ...a,
        "data-mana-component": "toggle-button",
        role: "button",
        "aria-pressed": l,
        variant: "togglebutton",
    });
}
let e$ = {
    title: "Buttons",
    stories: [
        {
            name: "Button",
            id: "button",
            component: h.$,
            docs: "https://design.discord.tools/components/web/buttons/button",
            controls: {
                text: { label: "Text", type: "text", defaultValue: "Click me" },
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "primary",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                        { label: "Critical Primary", value: "critical-primary" },
                        { label: "Critical Secondary", value: "critical-secondary" },
                        { label: "Active", value: "active" },
                        { label: "Overlay Primary", value: "overlay-primary" },
                        { label: "Overlay Secondary", value: "overlay-secondary" },
                        { label: "Expressive", value: "expressive" },
                    ],
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                    ],
                },
                disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                loading: { label: "Loading", type: "boolean", defaultValue: !1 },
                fullWidth: { label: "Full Width", type: "boolean", defaultValue: !1 },
                minWidth: { label: "Min width", type: "text", defaultValue: "" },
            },
        },
        {
            name: "IconButton",
            id: "icon-button",
            docs: "https://design.discord.tools/components/web/buttons/icon-button",
            component: function (e) {
                return (0, t.jsx)(eD.K, { ...e, icon: eA.p, "aria-label": "Clyde" });
            },
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "primary",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                        { label: "Critical Primary", value: "critical-primary" },
                        { label: "Critical Secondary", value: "critical-secondary" },
                        { label: "Active", value: "active" },
                        { label: "Overlay Primary", value: "overlay-primary" },
                        { label: "Overlay Secondary", value: "overlay-secondary" },
                        { label: "Icon Only", value: "icon-only" },
                    ],
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                    ],
                },
                disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                loading: { label: "Loading", type: "boolean", defaultValue: !1 },
            },
        },
        {
            id: "toggle-button",
            name: "ToggleButton",
            component: function (e) {
                let { disabled: l, size: a, text: n } = e,
                    [i, s] = o.useState(!1);
                return (0, t.jsx)(ez, { text: n, size: a, disabled: l, pressed: i, onClick: () => s(!i) });
            },
            controls: {
                text: { type: "text", label: "Text", defaultValue: "Toggle me" },
                size: {
                    type: "select",
                    label: "Size",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                    ],
                },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
            },
        },
        {
            name: "ToggleIconButton",
            id: "toggle-icon-button",
            component: function (e) {
                let [l, a] = o.useState(!1);
                return (0, t.jsx)(eL.k, {
                    ...e,
                    icon: eN.MicrophoneIcon,
                    selectedIcon: eR.z,
                    pressed: l,
                    "aria-label": l ? "Unmute microphone" : "Mute microphone",
                    onClick: () => a((e) => !e),
                });
            },
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "default",
                    options: [
                        { label: "Default", value: "default" },
                        { label: "Critical", value: "critical" },
                        { label: "Icon Only", value: "icon-only" },
                    ],
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                    ],
                },
                disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
            },
        },
        {
            name: "TextButton",
            id: "text-button",
            docs: "https://design.discord.tools/components/web/buttons/text-button",
            component: eP.Q,
            controls: {
                text: { label: "Text", type: "text", defaultValue: "Link Button" },
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "primary",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                        { label: "Always White", value: "always-white" },
                        { label: "Critical", value: "critical" },
                    ],
                },
                disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
            },
        },
        {
            name: "ButtonGroup",
            id: "button-group",
            docs: "https://design.discord.tools/components/web/buttons/button-group",
            component: function (e) {
                return (0, t.jsxs)(eO.e, {
                    ...e,
                    children: [
                        (0, t.jsx)(h.$, { variant: "secondary", text: "Cancel" }),
                        (0, t.jsx)(h.$, { variant: "primary", text: "Submit" }),
                    ],
                });
            },
            controls: {
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                    ],
                },
                direction: {
                    label: "Direction",
                    type: "select",
                    defaultValue: "horizontal",
                    options: [
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Vertical", value: "vertical" },
                    ],
                },
                fullWidth: { label: "Full Width", type: "boolean", defaultValue: !1 },
            },
        },
    ],
};
var eG = a(501907),
    eF = a(315648),
    e_ = a(353509),
    eH = a(834730),
    eq = a(219052);
function eU(e) {
    let {
            items: l,
            selectedId: a,
            defaultSelectedId: o,
            onChange: n,
            variant: i = "default",
            disabled: s = !1,
            keyboardActivation: r = "manual",
            panelAnimation: d = "none",
            "aria-label": u,
            "aria-labelledby": c,
        } = e,
        b = (0, eG.J)();
    return (0, t.jsxs)(eF.tU, {
        className: eq.vR,
        selectedKey: a,
        defaultSelectedKey: o,
        onSelectionChange: function (e) {
            let a = l.find((l) => l.id === e);
            null != a && n?.(a.id);
        },
        keyboardActivation: r,
        isDisabled: s,
        "data-mana-component": "tabs",
        "data-variant": i,
        children: [
            (0, t.jsxs)("div", {
                className: eq.bB,
                children: [
                    (0, t.jsx)("div", { className: eq.H$ }),
                    (0, t.jsx)(eF.wb, {
                        className: eq.ld,
                        "aria-label": u,
                        "aria-labelledby": c,
                        children: l.map((e) =>
                            (0, t.jsx)(
                                eW,
                                { item: e, formattedCount: null != e.count ? b.format(e.count) : void 0 },
                                e.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, t.jsx)(eF.T2, {
                className: eq.C3,
                "data-animation": d,
                children: l.map((e) => (0, t.jsx)(eX, { item: e, animation: d }, e.id)),
            }),
        ],
    });
}
function eW(e) {
    let { item: l, formattedCount: a } = e,
        n = o.useRef(null);
    return (0, t.jsx)(eF.oz, {
        id: l.id,
        ref: n,
        className: eq.AS,
        isDisabled: l.disabled,
        "aria-label": l["aria-label"],
        children: (e) => {
            let { isDisabled: o } = e;
            return (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsxs)("span", {
                        className: eq.PG,
                        children: [
                            null != l.icon &&
                                (0, t.jsx)(eB.a, {
                                    icon: l.icon,
                                    iconOpticalOffsetMargin: 0,
                                    iconPosition: "start",
                                    size: "md",
                                    ref: n,
                                    disabled: o,
                                }),
                            (0, t.jsx)(eH.E, {
                                tag: "span",
                                variant: "text-md/medium",
                                color: "none",
                                children: l.label,
                            }),
                            null != a &&
                                (0, t.jsxs)(eH.E, {
                                    tag: "span",
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: ["(", a, ")"],
                                }),
                        ],
                    }),
                    (0, t.jsx)(e_.i, { className: eq.q3, "aria-hidden": "true" }),
                ],
            });
        },
    });
}
function eX(e) {
    let { item: l, animation: a } = e;
    return (0, t.jsx)(eF.Kp, { id: l.id, className: eq.nd, "data-animation": a, children: l.panel() });
}
var eZ = a(144228),
    eK = a(193249);
function eY() {
    return (0, t.jsxs)(D.B, {
        gap: 16,
        padding: { top: 16 },
        children: [
            (0, t.jsx)(ey.k, { label: "Display Name", placeholder: "Jane Doe" }),
            (0, t.jsx)(ey.k, { label: "Email", type: "email", placeholder: "jane@example.com" }),
            (0, t.jsx)(D.B, {
                direction: "horizontal",
                children: (0, t.jsx)(h.$, { text: "Save Changes", variant: "secondary", size: "sm" }),
            }),
        ],
    });
}
function eQ() {
    let [e, l] = o.useState("mentions");
    return (0, t.jsx)(D.B, {
        gap: 16,
        padding: { top: 16 },
        children: (0, t.jsx)(eZ.z, {
            label: "Notify me about",
            value: e,
            onChange: l,
            options: [
                { value: "all", name: "All messages" },
                { value: "mentions", name: "Only @mentions" },
                { value: "none", name: "Nothing", desc: "You can still browse this server at your own pace." },
            ],
        }),
    });
}
function eJ() {
    let [e, l] = o.useState(!0),
        [a, n] = o.useState(!1);
    return (0, t.jsxs)(D.B, {
        gap: 16,
        padding: { top: 16 },
        children: [
            (0, t.jsx)(eK.d, {
                label: "Allow direct messages",
                description: "Members of this server can send you direct messages.",
                checked: e,
                onChange: l,
            }),
            (0, t.jsx)(eK.d, {
                label: "Share activity status",
                description: "Show other members what you're playing.",
                checked: a,
                onChange: n,
            }),
        ],
    });
}
let e0 = [
        { id: "account", label: "Account", icon: eA.p, panel: () => (0, t.jsx)(eY, {}) },
        { id: "notifications", label: "Notifications", count: 10, panel: () => (0, t.jsx)(eQ, {}) },
        { id: "privacy", label: "Privacy", panel: () => (0, t.jsx)(eJ, {}) },
    ],
    e1 = {
        title: "Tabs",
        stories: [
            {
                name: "Tabs",
                id: "tabs",
                component: function (e) {
                    let { variant: l, showCounts: a, disabled: n, keyboardActivation: i, panelAnimation: s } = e,
                        [r, d] = o.useState("account"),
                        u = a ? e0 : e0.map((e) => ({ ...e, count: void 0 }));
                    return (0, t.jsx)(eU, {
                        "aria-label": "User settings",
                        items: u,
                        selectedId: r,
                        onChange: d,
                        variant: l,
                        disabled: n,
                        keyboardActivation: i,
                        panelAnimation: s,
                    });
                },
                controls: {
                    variant: {
                        label: "Variant",
                        type: "select",
                        defaultValue: "default",
                        options: [
                            { label: "Default", value: "default" },
                            { label: "Overlay", value: "overlay" },
                        ],
                    },
                    showCounts: { label: "Show Counts", type: "boolean", defaultValue: !0 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    keyboardActivation: {
                        label: "Keyboard Activation",
                        type: "select",
                        defaultValue: "manual",
                        options: [
                            { label: "Manual", value: "manual" },
                            { label: "Automatic", value: "automatic" },
                        ],
                    },
                    panelAnimation: {
                        label: "Panel Animation",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Fade", value: "fade" },
                        ],
                    },
                },
            },
        ],
    };
var e2 = a(620409),
    e4 = a(840140),
    e3 = a(822986),
    e6 = a(720341),
    e8 = a(683071);
let e5 = (0, a(240921).Ay)({
    kind: "user",
    name: "2025-10-mana-date-inputs",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function e9(e) {
    return e5.useConfig({ location: e }).enabled;
}
let e7 = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: l, readOnly: a, showMinMax: n } = e,
                    [i, s] = o.useState((0, e2.Ec)((0, e2.Xj)())),
                    r = o.useCallback((e) => {
                        s(e);
                    }, []),
                    d = o.useCallback(() => {
                        s(null);
                    }, []),
                    u = o.useCallback(() => {
                        s((0, e2.Ec)((0, e2.Xj)()));
                    }, []),
                    c = o.useCallback(() => {
                        s((0, e4._U)("2024-12-25"));
                    }, []);
                return e9("CalendarStory")
                    ? (0, t.jsxs)(D.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(e6.V, {
                                  value: i,
                                  onChange: r,
                                  disabled: l,
                                  readOnly: a,
                                  minValue: n ? (0, e4._U)("2024-01-01") : void 0,
                                  maxValue: n ? (0, e4._U)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, t.jsxs)(eH.E, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != i ? (0, e3.default)(i.toDate((0, e2.Xj)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, t.jsxs)(D.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(h.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: d,
                                          disabled: l || a,
                                      }),
                                      (0, t.jsx)(h.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: u,
                                          disabled: l || a,
                                      }),
                                      (0, t.jsx)(h.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: c,
                                          disabled: l || a,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(e8.w, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " experiment. Do not use this in production yet.",
                          ],
                      });
            },
            controls: {
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                readOnly: { type: "boolean", label: "Read Only", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (2024)", defaultValue: !1 },
            },
        },
    ],
};
var le = a(885574),
    ll = a(150934);
let la = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: l, description: a, disabled: n, labelType: i, showIcons: s } = e,
                    [r, d] = o.useState(!1),
                    u = o.useCallback(() => {
                        d(!0);
                    }, []),
                    c = o.useCallback(() => {
                        d(!1);
                    }, []),
                    b = o.useCallback(() => {
                        d((e) => !e);
                    }, []);
                return (0, t.jsxs)(D.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(ll.S, {
                            checked: r,
                            onChange: (e) => d(e),
                            disabled: n,
                            label: l,
                            description: null != a || "" === a ? a : void 0,
                            value: "checkbox-value",
                            labelType: i,
                            leadingIcon: s ? le.CircleInformationIcon : void 0,
                        }),
                        (0, t.jsxs)(eH.E, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", r ? "Checked" : "Unchecked"],
                        }),
                        (0, t.jsxs)(D.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(h.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: u,
                                    disabled: n,
                                }),
                                (0, t.jsx)(h.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: c,
                                    disabled: n,
                                }),
                                (0, t.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: b,
                                    disabled: n,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Accept terms and conditions" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                labelType: {
                    type: "select",
                    label: "Label Type",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                    ],
                    defaultValue: "primary",
                },
                description: { type: "text", label: "Description", defaultValue: "" },
                showIcons: { type: "boolean", label: "Show Icons", defaultValue: !1 },
            },
        },
    ],
};
var lt = a(167417);
let lo = {
    title: "CheckboxGroup",
    stories: [
        {
            id: "checkboxgroup",
            name: "CheckboxGroup",
            component: function (e) {
                let {
                        disabled: l,
                        optionCount: a,
                        label: n,
                        optionLabel: i,
                        description: s,
                        showIcons: r,
                        withMixedDisabledOptions: d,
                    } = e,
                    [u, c] = o.useState(["option1"]),
                    b = o.useMemo(
                        () =>
                            [
                                {
                                    label: null != i ? `${i} 1` : "Option 1",
                                    value: "option1",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? le.CircleInformationIcon : void 0,
                                    disabled: !d && void 0,
                                },
                                {
                                    label: null != i ? `${i} 2` : "Option 2",
                                    value: "option2",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? le.CircleInformationIcon : void 0,
                                    disabled: !!d || void 0,
                                },
                                {
                                    label: null != i ? `${i} 3` : "Option 3",
                                    value: "option3",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? le.CircleInformationIcon : void 0,
                                    disabled: !d && void 0,
                                },
                                {
                                    label: null != i ? `${i} 4` : "Option 4",
                                    value: "option4",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? le.CircleInformationIcon : void 0,
                                    disabled: !!d || void 0,
                                },
                                {
                                    label: null != i ? `${i} 5` : "Option 5",
                                    value: "option5",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? le.CircleInformationIcon : void 0,
                                    disabled: !d && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, a))),
                        [a, i, s, r, d],
                    ),
                    p = o.useCallback((e) => {
                        c(e);
                    }, []),
                    m = o.useCallback(() => {
                        c(b.map((e) => e.value));
                    }, [b]),
                    x = o.useCallback(() => {
                        c([]);
                    }, []),
                    y = o.useCallback(() => {
                        b.length > 0 && c([b[0].value]);
                    }, [b]);
                return (0, t.jsxs)(D.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(lt.$, { selectedValues: u, label: n, onChange: p, options: b, disabled: l }),
                        (0, t.jsxs)(eH.E, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", u.length > 0 ? u.join(", ") : "None"],
                        }),
                        (0, t.jsxs)(D.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(h.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: m,
                                    disabled: l || 0 === b.length,
                                }),
                                (0, t.jsx)(h.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: y,
                                    disabled: l || 0 === b.length,
                                }),
                                (0, t.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear All",
                                    onClick: x,
                                    disabled: l,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Mana Checkbox Group" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                optionCount: {
                    type: "select",
                    label: "Number of Options",
                    options: [
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "5", value: 5 },
                    ],
                    defaultValue: 3,
                },
                optionLabel: { type: "text", label: "Option Label", defaultValue: "Option" },
                description: { type: "text", label: "Description", defaultValue: "" },
                showIcons: { type: "boolean", label: "Show Icons", defaultValue: !1 },
                withMixedDisabledOptions: { type: "boolean", label: "Mixed Disabled Options", defaultValue: !1 },
            },
        },
    ],
};
var ln = a(441349);
let li = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let { label: l, description: a, errorMessage: n, disabled: i, required: s, showMinMax: r } = e,
                    [d, u] = o.useState((0, e2.Ec)((0, e2.Xj)())),
                    c = o.useCallback((e) => {
                        u(e);
                    }, []),
                    b = o.useCallback(() => {
                        u(null);
                    }, []),
                    p = o.useCallback(() => {
                        u((0, e2.Ec)((0, e2.Xj)()));
                    }, []),
                    m = o.useCallback(() => {
                        u((0, e4._U)("2024-12-25"));
                    }, []);
                return e9("CalendarStory")
                    ? (0, t.jsxs)(D.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(ln.l, {
                                  label: l,
                                  description: "" !== a ? a : void 0,
                                  value: d,
                                  onChange: c,
                                  disabled: i,
                                  required: s,
                                  minValue: r ? (0, e4._U)("2024-01-01") : void 0,
                                  maxValue: r ? (0, e4._U)("2024-12-31") : void 0,
                                  errorMessage: "" !== n ? n : void 0,
                                  helperText: null != d ? (0, e3.default)(d.toDate((0, e2.Xj)()), "MMMM d, yyyy") : "",
                              }),
                              (0, t.jsxs)(D.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(h.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: b,
                                          disabled: i,
                                      }),
                                      (0, t.jsx)(h.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: p,
                                          disabled: i,
                                      }),
                                      (0, t.jsx)(h.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: m,
                                          disabled: i,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(e8.w, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " experiment. Do not use this in production yet.",
                          ],
                      });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Select a date" },
                description: { type: "text", label: "Description", defaultValue: "Choose your preferred date" },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (2024)", defaultValue: !1 },
            },
        },
    ],
};
var ls = a(117530),
    lr = a(413934),
    ld = a(139018),
    lu = a(695599),
    lc = a(160844),
    lb = a(576967),
    lp = a(561392),
    lm = a(499957),
    lx = a(81466),
    ly = a(862301),
    lh = a(460890),
    lv = a(514180),
    lg = a(376887),
    lf = a(668953),
    lV = a(881636),
    lj = a(859962);
function lC(e) {
    let {
            value: l,
            onChange: a,
            minValue: n,
            maxValue: i,
            isDisabled: s = !1,
            isReadOnly: r = !1,
            visibleMonths: d = 1,
            className: u,
            "aria-label": c,
        } = e,
        { i18n: b, locale: p } = (0, lh.G9)(),
        m = l?.start ?? null,
        [x, y] = o.useState(m);
    return (
        o.useEffect(() => {
            y(m);
        }, [m]),
        (0, t.jsx)(lv._e, {
            value: l,
            focusedValue: x,
            onFocusChange: y,
            onChange: a,
            minValue: n,
            maxValue: i,
            isDisabled: s,
            isReadOnly: r,
            visibleDuration: { months: d },
            "aria-label": c,
            "data-mana-component": "range-calendar",
            className: g()(lj.BJ, d > 1 && lj.Q7, u),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: lj.I4,
                            children: [
                                (0, t.jsx)(eD.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: lf.f,
                                    "aria-label": b.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: lj.Wb,
                                    "aria-live": "polite",
                                    children: Array.from({ length: d }, (l, a) => {
                                        let o = e.state.visibleRange.start
                                            .add({ months: a })
                                            .toDate(e.state.timeZone)
                                            .toLocaleDateString(p, { month: "long", year: "numeric" });
                                        return (0, t.jsx)(
                                            eH.E,
                                            { variant: "text-md/medium", color: "text-strong", children: o },
                                            a,
                                        );
                                    }),
                                }),
                                (0, t.jsx)(eD.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: lV.u,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": b.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: lj.US,
                            children: Array.from({ length: d }, (e, l) =>
                                (0, t.jsx)(lg.N, { offset: { months: l }, isRangeSelection: !0 }, l),
                            ),
                        }),
                    ],
                }),
        })
    );
}
var lS = a(341450);
function lk(e) {
    let {
            value: l,
            onChange: a,
            minValue: o,
            maxValue: n,
            placeholderValue: i,
            startName: s,
            endName: r,
            fullWidth: d = !1,
            granularity: u = "day",
            ...c
        } = e,
        { i18n: b } = (0, lh.G9)(),
        { fieldProps: p } = (0, A.n)(c),
        { disabled: m, errorMessage: x, required: y = !1 } = p,
        h = { hasError: null != x && "" !== x },
        {
            refs: v,
            floatingStyles: f,
            isOpen: V,
            setIsOpen: j,
            context: C,
            getFloatingProps: S,
            getReferenceProps: k,
        } = (0, lp.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: w, styles: M } = (0, lm.DL)(C, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        T = (e) => {
            (a(e), e?.start != null && e?.end != null && j(!1));
        };
    return (0, t.jsx)(A.D, {
        ...p,
        children: (e) =>
            (0, t.jsx)(ly.F, {
                className: d ? lS.e2 : "minute" === u ? lS.oU : lS.qX,
                validation: h,
                ref: v.setReference,
                ...k(),
                children: (0, t.jsxs)(lr.Ur, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: T,
                    isDisabled: m,
                    isRequired: y,
                    minValue: o,
                    maxValue: n,
                    placeholderValue: i,
                    granularity: u,
                    startName: s,
                    endName: r,
                    "data-mana-component": "date-range-picker",
                    className: lS.Nz,
                    children: [
                        (0, t.jsxs)(ld.Y, {
                            className: lS.wO,
                            children: [
                                (0, t.jsx)(lu.J3, {
                                    slot: "start",
                                    children: (e) =>
                                        (0, t.jsx)(lu.Eu, {
                                            segment: e,
                                            className: g()(lS.mX, e.isPlaceholder && lS.qf),
                                        }),
                                }),
                                (0, t.jsx)("span", { className: lS.me, "aria-hidden": "true", children: "\u2192" }),
                                (0, t.jsx)(lu.J3, {
                                    slot: "end",
                                    children: (e) =>
                                        (0, t.jsx)(lu.Eu, {
                                            segment: e,
                                            className: g()(lS.mX, e.isPlaceholder && lS.qf),
                                        }),
                                }),
                                (0, t.jsx)(lc.$, {
                                    className: lS.B7,
                                    onClick: () => j(!V),
                                    "aria-label": b.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(lx.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        V &&
                            w &&
                            (0, t.jsx)("div", {
                                ...S(),
                                ref: v.setFloating,
                                style: f,
                                className: lS.oO,
                                children: (0, t.jsx)(ls.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(lb.lG, {
                                        "aria-label": b.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: M,
                                        className: lS.r3,
                                        children: (0, t.jsx)(lC, {
                                            value: l,
                                            onChange: T,
                                            minValue: o,
                                            maxValue: n,
                                            isDisabled: m,
                                            visibleMonths: 2,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
let lw = {
    title: "DateRangePicker",
    stories: [
        {
            id: "date-range-picker",
            name: "DateRangePicker",
            component: function (e) {
                let { label: l, errorMessage: a, description: n, disabled: i, required: s, showMinMax: r } = e,
                    [d, u] = o.useState({
                        start: (0, e2.Ec)((0, e2.Xj)()),
                        end: (0, e2.Ec)((0, e2.Xj)()).add({ days: 7 }),
                    }),
                    c = o.useCallback((e) => {
                        u(e);
                    }, []),
                    b = o.useCallback(() => {
                        u(null);
                    }, []),
                    p = o.useCallback(() => {
                        let e = (0, e2.Ec)((0, e2.Xj)());
                        u({ start: e, end: e.add({ days: 7 }) });
                    }, []),
                    m = (0, e2.Ec)((0, e2.Xj)()),
                    x = r ? m.subtract({ weeks: 1 }) : void 0,
                    y = r ? m.add({ weeks: 2 }) : void 0;
                return e9("DateRangePickerStory")
                    ? (0, t.jsxs)(D.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(lk, {
                                  label: l,
                                  description: "" !== n ? n : void 0,
                                  value: d,
                                  onChange: c,
                                  disabled: i,
                                  required: s,
                                  errorMessage: "" !== a ? a : void 0,
                                  minValue: x,
                                  maxValue: y,
                                  helperText: (function () {
                                      if (null == d) return "";
                                      let e = (0, e3.default)(d.start.toDate((0, e2.Xj)()), "MMMM d, yyyy"),
                                          l = (0, e3.default)(d.end.toDate((0, e2.Xj)()), "MMMM d, yyyy");
                                      return `${e} \u{2013} ${l}`;
                                  })(),
                              }),
                              (0, t.jsxs)(D.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(h.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: b,
                                          disabled: i,
                                      }),
                                      (0, t.jsx)(h.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "This Week",
                                          onClick: p,
                                          disabled: i,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(e8.w, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " experiment. Do not use this in production yet.",
                          ],
                      });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Select a date range" },
                description: { type: "text", label: "Description", defaultValue: "Choose your preferred date range" },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (\xb11 week)", defaultValue: !1 },
            },
        },
    ],
};
var lM = a(270003),
    lT = a(691885),
    lI = a(508274),
    lE = a(109802),
    lD = a(885105);
let lA = [
        { label: "Aardvark", value: "aardvark", id: "aardvark" },
        { label: "Cat", value: "cat", id: "cat" },
        { label: "Dog", value: "dog", id: "dog" },
    ],
    lL = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f, 0xe67e22, 0xe74c3c];
function lN(e) {
    let { title: l, children: a, auxiliaryContentPosition: o } = e;
    return (0, t.jsx)(A.D, {
        disabled: !0,
        label: l,
        description: "This row is disabled at the Field level and at the control level.",
        helperText:
            "Every leaf (label, description, helper text, control) should render at a single 0.5 opacity layer.",
        auxiliaryContentPosition: o,
        children: a,
    });
}
function lR(e) {
    let { auxiliaryContentPosition: l } = e;
    return (0, t.jsxs)(D.B, {
        direction: "vertical",
        gap: 24,
        children: [
            (0, t.jsx)(lN, {
                title: "Button",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(h.$, { text: "Remove", variant: "critical-primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(lN, {
                title: "TextButton",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(eP.Q, { text: "View details", variant: "primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(lN, {
                title: "Switch",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(eK.d, {
                    label: "Allow direct messages",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                }),
            }),
            (0, t.jsx)(lN, {
                title: "Checkbox",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(ll.S, {
                    label: "Accept terms",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                    value: "accept-terms",
                }),
            }),
            (0, t.jsx)(lN, {
                title: "InputField",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(ly.F, {
                    disabled: !0,
                    children: (0, t.jsx)(eH.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: "Inner InputField content",
                    }),
                }),
            }),
            (0, t.jsx)(lN, {
                title: "Select",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(lT.l, {
                    label: "Animal",
                    hideLabel: !0,
                    options: lA,
                    selectionMode: "single",
                    onSelectionChange: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(lN, {
                title: "CopyInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(lE.e, {
                    value: "https://discord.gg/disabled-example",
                    supportsCopy: !0,
                    onCopy: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(lN, {
                title: "ColorPicker",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(lI.sk, {
                    defaultColor: lL[0],
                    customColor: null,
                    colors: lL,
                    value: lL[0],
                    disabled: !0,
                    onChange: () => {},
                    renderDefaultButton: (e) => (0, t.jsx)(lI.fy, { ...e }),
                    renderCustomButton: (e) => (0, t.jsx)(lI.nJ, { ...e }),
                }),
            }),
            (0, t.jsx)(lN, {
                title: "TextInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(ey.k, {
                    label: "Username",
                    hideLabel: !0,
                    value: "disabled-user",
                    onChange: () => {},
                    disabled: !0,
                }),
            }),
        ],
    });
}
let lP = {
        title: "Forms",
        stories: [
            {
                name: "FieldSet",
                id: "fieldset",
                component: function (e) {
                    let { label: l } = e;
                    return (0, t.jsx)("div", {
                        children: (0, t.jsxs)(lM.n, {
                            label: "" === l ? void 0 : l,
                            children: [
                                (0, t.jsx)(ey.k, { label: "First Name" }),
                                (0, t.jsx)(ey.k, { label: "Last Name" }),
                                (0, t.jsx)(ey.k, { label: "Address" }),
                            ],
                        }),
                    });
                },
                controls: { label: { type: "text", label: "Label", defaultValue: "Billing Address" } },
            },
            {
                name: "Field",
                id: "formcontrol",
                component: function (e) {
                    let { description: l, ...a } = e;
                    return (0, t.jsx)("div", {
                        children: (0, t.jsx)(A.D, {
                            ...a,
                            description: "" === l ? void 0 : l,
                            icon: a.showIcon ? M.LockIcon : void 0,
                            children: (0, t.jsx)("div", {
                                className: lD.q,
                                children: (0, t.jsx)(eH.E, {
                                    color: "text-subtle",
                                    variant: "text-md/medium",
                                    children: "Field",
                                }),
                            }),
                        }),
                    });
                },
                controls: {
                    label: { type: "text", label: "Label", defaultValue: "First Name" },
                    description: {
                        type: "text",
                        label: "Description",
                        defaultValue: "This is the first name of the user",
                    },
                    helperText: {
                        type: "text",
                        label: "Helper Text",
                        defaultValue: "This is the helper text for the form control",
                    },
                    required: { type: "boolean", label: "Required", defaultValue: !1 },
                    errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                    layout: {
                        type: "select",
                        label: "Layout",
                        defaultValue: "vertical",
                        options: [
                            { label: "Vertical", value: "vertical" },
                            { label: "Horizontal", value: "horizontal" },
                            { label: "Horizontal (Responsive)", value: "horizontal-responsive" },
                        ],
                    },
                    badge: {
                        type: "select",
                        label: "Badge",
                        defaultValue: void 0,
                        options: [
                            { label: "None", value: void 0 },
                            { label: "New", value: "new" },
                            { label: "Beta", value: "beta" },
                            { label: "Early Access", value: "early_access" },
                            { label: "Free Trial", value: "free_trial" },
                        ],
                    },
                    showIcon: { type: "boolean", label: "Show Icon", defaultValue: !1 },
                },
            },
            {
                name: "Field (Disabled, under-control)",
                id: "field-disabled-under-control",
                component: lR,
                controls: {
                    auxiliaryContentPosition: {
                        type: "select",
                        label: "Auxiliary Content Position",
                        defaultValue: "under-control",
                        options: [
                            { label: "Under Control (default)", value: "under-control" },
                            { label: "Under Label", value: "under-label" },
                        ],
                    },
                },
            },
            {
                name: "Field (Disabled, under-label)",
                id: "field-disabled-under-label",
                component: function () {
                    return (0, t.jsx)(lR, { auxiliaryContentPosition: "under-label" });
                },
            },
        ],
    },
    lO = ["info", "success", "warning", "critical"],
    lB = {
        name: "InlineNotice",
        id: "inline-notice",
        component: function (e) {
            let { text: l, type: a, iconAlign: o, hidden: n } = e;
            return (0, t.jsx)(e8.w, { type: a, iconAlign: o, hidden: n, children: l });
        },
        controls: {
            type: {
                label: "Type",
                type: "select",
                defaultValue: "info",
                options: lO.map((e) => ({ label: e, value: e })),
            },
            text: { label: "Text", type: "text", defaultValue: "This is an inline notice" },
            iconAlign: {
                label: "Icon Align",
                type: "select",
                defaultValue: "start",
                options: [
                    { label: "Start", value: "start" },
                    { label: "Center", value: "center" },
                ],
            },
            hidden: { label: "Hidden", type: "boolean", defaultValue: !1 },
        },
    };
var lz = a(935063),
    l$ = a(307301),
    lG = a(683438),
    lF = a(103557),
    l_ = a(404778),
    lH = a(34011),
    lq = a(193885),
    lU = a(661531),
    lW = a(584454);
let lX = [
        { id: "strength", label: "Strength", icon: lz.X },
        { id: "wisdom", label: "Wisdom", icon: { type: "role", color: lU.A.unsafe_rawColors.BRAND_500.css } },
        { id: "charisma", label: "Charisma" },
        { id: "intelligence", label: "Intelligence" },
        { id: "dexterity", label: "Dexterity" },
        { id: "constitution", label: "Constitution" },
    ],
    lZ = {
        title: "Input Components",
        stories: [
            {
                name: "TextInput",
                component: function (e) {
                    let { leading: l, trailing: a, ...n } = e,
                        [i, s] = o.useState(""),
                        [d, u] = o.useState(lX),
                        c = o.useCallback(
                            (e) => {
                                u(d.filter((l) => !e.has(l.id)));
                            },
                            [d],
                        );
                    return (0, t.jsxs)(D.B, {
                        gap: 16,
                        children: [
                            (0, t.jsx)(ey.k, {
                                ...n,
                                value: i,
                                onChange: s,
                                leading: (function (e) {
                                    switch (e) {
                                        case "tags":
                                            return { type: "tags", label: "Tags", items: d, onRemove: c };
                                        case "icon":
                                            return { icon: lz.X, onClick: r.tE, "aria-label": "At" };
                                        case "text":
                                            return "https://discord.gg/";
                                        default:
                                            return;
                                    }
                                })(l),
                                trailing: "icon" === a ? { icon: l$.j, onClick: r.tE, "aria-label": "At" } : void 0,
                                maxLength: 500,
                            }),
                            "tags" === l
                                ? (0, t.jsx)(h.$, {
                                      text: "Reset Tags",
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => u(lX),
                                  })
                                : null,
                        ],
                    });
                },
                id: "text-input",
                controls: {
                    type: {
                        label: "Input Type",
                        type: "select",
                        defaultValue: "text",
                        options: [
                            { label: "Text", value: "text" },
                            { label: "Password", value: "password" },
                            { label: "Email", value: "email" },
                        ],
                    },
                    label: { label: "Label", type: "text", defaultValue: "Example Label" },
                    hideLabel: { label: "Hide Label", type: "boolean", defaultValue: !1 },
                    description: { label: "Description", type: "text", defaultValue: "This is an example description" },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Enter some text..." },
                    error: { label: "Error Message", type: "text", defaultValue: void 0 },
                    helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
                    minLength: { label: "Min Length", type: "number", defaultValue: 0 },
                    showCharacterCount: { label: "Show Character Count", type: "boolean", defaultValue: !1 },
                    clearable: { label: "Clearable", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    readOnly: { label: "Read Only", type: "boolean", defaultValue: !1 },
                    leading: {
                        label: "Leading",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Tags", value: "tags" },
                            { label: "Icon", value: "icon" },
                            { label: "Text", value: "text" },
                        ],
                    },
                    trailing: {
                        label: "Trailing",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Icon", value: "icon" },
                        ],
                    },
                },
            },
            {
                name: "SearchBar",
                component: function (e) {
                    let [l, a] = o.useState("");
                    return (0, t.jsx)(lG.I, {
                        ...e,
                        query: l,
                        onChange: a,
                        onClear: e.clearable ? () => a("") : void 0,
                    });
                },
                id: "search-bar",
                controls: {
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Search..." },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "md",
                        options: [
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                        ],
                    },
                    clearable: { label: "Clearable", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "TextArea",
                id: "text-area",
                component: function (e) {
                    let [l, a] = o.useState("");
                    return (0, t.jsx)(lF.f, { ...e, value: l, onChange: a });
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Example Label" },
                    hideLabel: { label: "Hide Label", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    description: { label: "Description", type: "text", defaultValue: "This is an example description" },
                    helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Enter your message..." },
                    error: { label: "Error Message", type: "text", defaultValue: void 0 },
                    rows: { label: "Rows", type: "number", defaultValue: 3 },
                    autosize: { label: "Autosize", type: "boolean", defaultValue: !1 },
                    maxLength: { label: "Max Length", type: "number", defaultValue: 1e3 },
                    showCharacterCount: { label: "Show Character Count", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "EditableText",
                id: "editable-text",
                component: function (e) {
                    let { error: l, layout: a, maxRows: n, multiline: i, showAccessory: s, size: r, ...d } = e,
                        [u, c] = o.useState("Name"),
                        [b, p] = o.useState(null),
                        [m, x] = o.useState(0),
                        y = (0, t.jsx)(lH.w, {
                            ...d,
                            label: "Editable text",
                            error: "" === l ? void 0 : l,
                            maxRows: i ? n : void 0,
                            multiline: i,
                            onChange: c,
                            onCommit: p,
                            size: "content" === r ? void 0 : r,
                            trailing: s
                                ? { icon: lq.V, "aria-label": "Example accessory", onClick: () => x((e) => e + 1) }
                                : void 0,
                            value: u,
                        }),
                        v = (0, t.jsx)(eH.E, { variant: "text-sm/normal", children: "Neighbor" });
                    return (0, t.jsxs)(D.B, {
                        gap: 16,
                        children: [
                            (0, t.jsx)(eH.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    "Change the parent layout and field options to check sizing and feedback. Enter commits single-line input; Escape restores the value from focus.",
                            }),
                            (0, t.jsxs)(D.B, {
                                direction: "horizontal",
                                wrap: !0,
                                gap: 8,
                                children: [
                                    (0, t.jsx)(h.$, {
                                        text: "Short text",
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => c("Name"),
                                    }),
                                    (0, t.jsx)(h.$, {
                                        text: "Long text",
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => c("W".repeat(32)),
                                    }),
                                    (0, t.jsx)(h.$, {
                                        text: "Empty text",
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => c(""),
                                    }),
                                    (0, t.jsx)(h.$, {
                                        text: "Multiple lines",
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: !i,
                                        onClick: () => c("Line 1\nLine 2\nLine 3\nLine 4"),
                                    }),
                                ],
                            }),
                            "block" === a
                                ? (0, t.jsxs)("div", { children: [y, v] })
                                : (0, t.jsxs)(D.B, {
                                      direction: "row" === a ? "horizontal" : "vertical",
                                      align: "row" === a ? "start" : "stretch",
                                      children: [y, v],
                                  }),
                            (0, t.jsx)(eH.E, {
                                variant: "text-sm/normal",
                                role: "status",
                                children: null == b ? "No commits" : `Last committed value: ${JSON.stringify(b)}`,
                            }),
                            s
                                ? (0, t.jsxs)(eH.E, { variant: "text-sm/normal", children: ["Accessory clicks: ", m] })
                                : null,
                        ],
                    });
                },
                controls: {
                    layout: {
                        label: "Parent layout",
                        type: "select",
                        defaultValue: "row",
                        options: [
                            { label: "Flex row", value: "row" },
                            { label: "Flex column", value: "column" },
                            { label: "Block", value: "block" },
                        ],
                    },
                    fullWidth: { label: "Full width", type: "boolean", defaultValue: !1 },
                    size: {
                        label: "Control height",
                        type: "select",
                        defaultValue: "sm",
                        options: [
                            { label: "Content", value: "content" },
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                        ],
                    },
                    hideLabel: { label: "Hide label", type: "boolean", defaultValue: !0 },
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Add text" },
                    helperText: { label: "Helper text", type: "text", defaultValue: void 0 },
                    error: { label: "Error message", type: "text", defaultValue: void 0 },
                    minLength: { label: "Minimum length", type: "number", defaultValue: 1, minValue: 0 },
                    maxLength: { label: "Maximum length", type: "number", defaultValue: 32, minValue: 0 },
                    multiline: { label: "Multiline", type: "boolean", defaultValue: !1 },
                    maxRows: { label: "Maximum visible rows", type: "number", defaultValue: 3, minValue: 1 },
                    showAccessory: { label: "Trailing accessory", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    readOnly: { label: "Read only", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "NumberInput",
                id: "number-input",
                component: function (e) {
                    let [l, a] = o.useState(0);
                    return (0, t.jsx)(lW.Q, { ...e, value: l, onChange: a });
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Example Label" },
                    hideLabel: { label: "Hide Label", type: "boolean", defaultValue: !1 },
                    description: { label: "Description", type: "text", defaultValue: "This is an example description" },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Enter a number..." },
                    error: { label: "Error Message", type: "text", defaultValue: void 0 },
                    helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
                    min: { label: "Min", type: "number", defaultValue: void 0 },
                    max: { label: "Max", type: "number", defaultValue: void 0 },
                    step: { label: "Step", type: "number", defaultValue: 1 },
                    mode: {
                        label: "Mode",
                        type: "select",
                        defaultValue: "integer",
                        options: [
                            { label: "Integer", value: "integer" },
                            { label: "Decimal", value: "decimal" },
                        ],
                    },
                    clearable: { label: "Clearable", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    readOnly: { label: "Read Only", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "Input Collection",
                id: "input-collection",
                component: function (e) {
                    let {
                            label: l,
                            hideLabel: a,
                            description: o,
                            required: n,
                            error: i,
                            disabled: s,
                            placeholder: d,
                            value: u = "",
                            readOnly: c,
                            helperText: b,
                            successMessage: p,
                            showCharacterCount: m,
                        } = e,
                        x = {
                            label: l,
                            hideLabel: a,
                            description: o,
                            required: n,
                            value: u,
                            error: i,
                            disabled: s,
                            placeholder: d,
                            readOnly: c,
                            helperText: b,
                            showCharacterCount: m,
                            successMessage: p,
                        };
                    return (0, t.jsxs)(D.B, {
                        gap: 24,
                        children: [
                            (0, t.jsxs)(lM.n, {
                                label: "Text Input",
                                children: [
                                    (0, t.jsx)(ey.k, { ...x }),
                                    (0, t.jsx)(ey.k, { ...x, clearable: !0 }),
                                    (0, t.jsx)(ey.k, {
                                        ...x,
                                        leading: { icon: lz.X, onClick: r.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(ey.k, { ...x, leading: lz.X }),
                                    (0, t.jsx)(ey.k, { ...x, leading: "https://discord.gg/" }),
                                    (0, t.jsx)(ey.k, {
                                        ...x,
                                        trailing: { icon: lz.X, onClick: r.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(ey.k, { ...x, trailing: lz.X }),
                                    (0, t.jsx)(ey.k, {
                                        ...x,
                                        leading: { type: "tags", label: "Tags", items: lX.slice(0, 3) },
                                    }),
                                ],
                            }),
                            (0, t.jsx)(l_.c, {}),
                            (0, t.jsxs)(lM.n, {
                                label: "Search Bar",
                                children: [
                                    (0, t.jsx)(lG.I, { query: u, onChange: r.tE, disabled: s, placeholder: d }),
                                    (0, t.jsx)(lG.I, {
                                        query: u,
                                        onChange: r.tE,
                                        size: "sm",
                                        disabled: s,
                                        placeholder: d,
                                    }),
                                ],
                            }),
                            (0, t.jsx)(l_.c, {}),
                            (0, t.jsx)(lM.n, { label: "Text Area", children: (0, t.jsx)(lF.f, { ...x }) }),
                        ],
                    });
                },
                controls: {
                    value: { label: "Value", type: "text", defaultValue: "" },
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Enter some text..." },
                    label: { label: "Label", type: "text", defaultValue: "Example Label" },
                    hideLabel: { label: "Hide Label", type: "boolean", defaultValue: !1 },
                    description: { label: "Description", type: "text", defaultValue: "This is an example description" },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    error: { label: "Error Message", type: "text", defaultValue: void 0 },
                    successMessage: { label: "Success Message", type: "text", defaultValue: void 0 },
                    helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
                    showCharacterCount: { label: "Show Character Count", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    readOnly: { label: "Read Only", type: "boolean", defaultValue: !1 },
                },
            },
        ],
    };
a(321073);
var lK = a(102079),
    lY = a(224640),
    lQ = a(430993),
    lJ = a(276293),
    l0 = a(189213),
    l1 = a(890497),
    l2 = a(772707),
    l4 = a(347704),
    l3 = a(192308),
    l6 = a(116833),
    l8 = a(521489),
    l5 = a(314116);
let l9 = "/assets/f66ae7bb8510ab4f.svg";
function l7() {
    return (0, t.jsx)(eH.E, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "Lost access to your radness? Talk to your radness provider to refresh your aura.",
    });
}
function ae(e) {
    let { setIsSafetyAccepted: l, setIsHelmetSelected: a } = e,
        [n, i] = o.useState([]),
        s = [
            { label: "I am wearing a helmet", value: "helmet" },
            { label: "I know where to find my personal flotation device", value: "pfd" },
            { label: "I completed the safety training", value: "training" },
        ];
    return (
        o.useEffect(() => {
            (l(n.length === s.length), a(n.includes("helmet")));
        }, [n, s.length, l, a]),
        (0, t.jsx)(lt.$, { label: "Safety checklist", options: s, selectedValues: n, onChange: i })
    );
}
function al(e) {
    let { setIsPasscodeValid: l } = e,
        [a, n] = o.useState("");
    return (0, t.jsx)(ey.k, {
        placeholder: "Enter your passcode...",
        value: a,
        onChange: function (e) {
            (n(e), l(e.length > 0));
        },
    });
}
function aa(e) {
    let {
            callbackDelay: l,
            failOnNext: a,
            failOnComplete: n,
            onCompleteAlert: i,
            onNextAlert: s,
            customErrorNotice: r,
            errorNoticeType: d,
            ...u
        } = e,
        [c, b] = o.useState("intro"),
        [p, m] = o.useState(!1),
        [x, y] = o.useState(!1),
        [h, v] = o.useState(!1),
        [g, f] = o.useState(null),
        V = o.useCallback(async () => {
            if (
                (f(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                s && alert("onNext callback fired"),
                a)
            ) {
                if ("" !== r.trim()) return (f({ message: r, type: d }), !1);
                throw Error("onNext failed");
            }
            return !0;
        }, [l, a, s, r, d]),
        j = o.useCallback(async () => {
            if (
                (f(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                i && alert("onComplete callback fired"),
                n)
            ) {
                if ("" !== r.trim()) throw (f({ message: r, type: d }), Error("Custom error"));
                throw Error("onComplete failed");
            }
        }, [l, n, i, r, d]),
        C = [
            {
                stepKey: "intro",
                modalProps: {
                    title: "Verify radness",
                    subtitle: "To verify your radness, we need to ask you a few deep and personal questions.",
                    notice: null != g ? { message: g.message, type: g.type } : void 0,
                },
                body: (0, t.jsx)(l7, {}),
                nextButtonProps: { text: "Verify" },
                onNext: V,
            },
            {
                stepKey: "safety",
                modalProps: {
                    title: "Safety first",
                    subtitle:
                        "Before we get started verifying your radness, we need to make sure you're safe and sound.",
                    notice:
                        null != g
                            ? { message: g.message, type: g.type }
                            : h
                              ? {
                                    message: "Great job, helmets are important for protecting your brain!",
                                    type: "warning",
                                }
                              : void 0,
                },
                body: (0, t.jsx)(ae, { setIsSafetyAccepted: m, setIsHelmetSelected: v }),
                nextEnabled: p,
                onNext: V,
            },
            {
                stepKey: "passcode",
                modalProps: {
                    title: "Enter passcode",
                    subtitle: "Enter your passcode to complete the radness verification process.",
                    notice: null != g ? { message: g.message, type: g.type } : void 0,
                },
                body: (0, t.jsx)(al, { setIsPasscodeValid: y }),
                nextButtonProps: { text: "Verify passcode" },
                nextEnabled: x,
            },
        ],
        S = C.slice(1).map((e) => e.stepKey);
    return (0, t.jsx)(l4.t, { steps: C, currentStepKey: c, numberedSteps: S, onStepChange: b, onComplete: j, ...u });
}
let at = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                let { showPreview: l, showInput: a, subtitleIcon: o, ...n } = e,
                    i = o ? { text: n.subtitle ?? "Default subtitle", leadingIcon: lJ.N } : n.subtitle;
                return (0, t.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(eH.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the modal",
                        }),
                        (0, t.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Modal",
                            onClick: () =>
                                (0, l3.openModal)(
                                    (e) =>
                                        (0, t.jsx)(l0.a, {
                                            ...e,
                                            ...n,
                                            title: n.title,
                                            subtitle: i,
                                            input: a
                                                ? (0, t.jsx)(lG.I, {
                                                      placeholder: "Search...",
                                                      onChange: () => {},
                                                      query: "",
                                                  })
                                                : void 0,
                                            preview: l
                                                ? (0, t.jsxs)(D.B, {
                                                      gap: 8,
                                                      children: [
                                                          (0, t.jsx)(eH.E, {
                                                              variant: "text-lg/semibold",
                                                              children: "Preview Content",
                                                          }),
                                                          (0, t.jsx)(eH.E, {
                                                              variant: "text-md/normal",
                                                              color: "text-subtle",
                                                              children:
                                                                  "This is preview content that appears in the modal footer.",
                                                          }),
                                                      ],
                                                  })
                                                : void 0,
                                            actions: [
                                                { variant: "secondary", text: "Cancel", onClick: e.onClose },
                                                { variant: "primary", text: "Submit", onClick: e.onClose },
                                            ],
                                            children: (0, t.jsxs)(D.B, {
                                                gap: 16,
                                                children: [
                                                    (0, t.jsx)(l1.Z, {
                                                        maxOptionsVisible: 10,
                                                        label: "Example Select",
                                                        selectionMode: "multiple",
                                                        options: [
                                                            { label: "Option 1", value: "option1", id: "option1" },
                                                            { label: "Option 2", value: "option2", id: "option2" },
                                                            { label: "Option 3", value: "option3", id: "option3" },
                                                            { label: "Option 4", value: "option4", id: "option4" },
                                                            { label: "Option 5", value: "option5", id: "option5" },
                                                            { label: "Option 6", value: "option6", id: "option6" },
                                                            { label: "Option 7", value: "option7", id: "option7" },
                                                            { label: "Option 8", value: "option8", id: "option8" },
                                                        ],
                                                        onSelectionChange: () => {},
                                                    }),
                                                    (0, t.jsx)(ey.k, {
                                                        label: "Example Input",
                                                        placeholder: "Enter some text...",
                                                    }),
                                                    (0, t.jsx)(eH.E, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "This is the main content area of the modal. You can place any content here.",
                                                    }),
                                                ],
                                            }),
                                        }),
                                    { dismissable: n.dismissable },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Example Modal" },
                subtitle: { label: "Subtitle", type: "text", defaultValue: "This is a modal subtitle" },
                subtitleIcon: { label: "Subtitle Icon", type: "boolean", defaultValue: !1 },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                    ],
                },
                showInput: { label: "Show Search Input", type: "boolean", defaultValue: !1 },
                showPreview: { label: "Show Preview", type: "boolean", defaultValue: !1 },
                dismissable: { label: "Dismissable", type: "boolean", defaultValue: !0 },
            },
        },
        {
            name: "ConfirmModal [Alpha]",
            id: "confirm-modal",
            component: function (e) {
                let { cancelText: l, confirmDelay: a, confirmError: n, subtitle: i, formatSubtitle: s, ...r } = e,
                    d = o.useMemo(
                        () =>
                            s
                                ? (function (e) {
                                      let l,
                                          a = [],
                                          o = 0,
                                          n = /\*\*(.+?)\*\*/g,
                                          i = 0;
                                      for (; null !== (l = n.exec(e));)
                                          (l.index > o && a.push(e.substring(o, l.index)),
                                              a.push((0, t.jsx)("strong", { children: l[1] }, i++)),
                                              (o = n.lastIndex));
                                      return (o < e.length && a.push(e.substring(o)), a.length > 0 ? a : e);
                                  })(i)
                                : i,
                        [i, s],
                    );
                return (0, t.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(eH.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the confirm modal",
                        }),
                        (0, t.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Confirm Modal",
                            onClick: () =>
                                (0, l5.A)({
                                    ...r,
                                    subtitle: d,
                                    cancelText: "" === l ? void 0 : l,
                                    onConfirm: async (e) => {
                                        try {
                                            if ((await new Promise((e) => setTimeout(e, 1e3 * a)), n))
                                                throw Error("Confirm error");
                                        } catch (l) {
                                            throw (
                                                e("Something went wrong reticulating splines. Please try again later."),
                                                l
                                            );
                                        }
                                    },
                                }),
                        }),
                    ],
                });
            },
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Reticulate splines" },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "Are you sure you want to permanently reticulate **Spliney McSplineface**?",
                },
                formatSubtitle: { label: "Format Subtitle (**bold**)", type: "boolean", defaultValue: !0 },
                confirmText: { label: "Confirm Text", type: "text", defaultValue: "Reticulate" },
                cancelText: { label: "Cancel Text", type: "text", defaultValue: "" },
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "critical",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Critical", value: "critical" },
                    ],
                },
                confirmDelay: { label: "Confirm Delay (seconds)", type: "number", defaultValue: 0 },
                confirmError: { label: "Confirm Error", type: "boolean", defaultValue: !1 },
            },
        },
        {
            name: "ExpressiveModal",
            id: "expressive-modal",
            docs: "https://design.discord.tools/components/web/modals/expressive-modal",
            component: function (e) {
                let { graphic: l, subtitleIcon: n, ...i } = e,
                    s = n ? { text: i.subtitle ?? "Default subtitle", leadingIcon: lJ.N } : i.subtitle,
                    r = o.useMemo(() => {
                        switch (l) {
                            case 0:
                                return { type: "image", src: l9 };
                            case 1:
                                return {
                                    type: "lottie",
                                    lottie: () => a.e("995947").then(a.t.bind(a, 604902, 19)),
                                    aspectRatio: "6/4",
                                };
                            case 2:
                                return { type: "rive", rive: lK.Q };
                            case 3:
                                return {
                                    type: "video",
                                    src: "https://cdn.discordapp.com/assets/content/06fafa729efafb6235e0ee9df9482566fa9e74b96a792a9265dca70113c71ab7.webm",
                                    fallbackImageSrc: l9,
                                    loop: !0,
                                    loopAt: 2.5,
                                };
                            case 4:
                                return {
                                    type: "dynamic",
                                    component: l6.DynamicGraphicComponent.DEMO,
                                    aspectRatio: "6/4",
                                    props: { text: "Dynamic Content" },
                                };
                            default:
                                return;
                        }
                    }, [l]);
                return (0, t.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(eH.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the expressive modal",
                        }),
                        (0, t.jsx)(h.$, {
                            variant: "primary",
                            text: "Open ExpressiveModal",
                            onClick: () =>
                                (0, l3.openModal)(
                                    (e) =>
                                        (0, t.jsx)(l2.k, {
                                            ...e,
                                            ...i,
                                            title: i.title,
                                            subtitle: s,
                                            graphic: r,
                                            actions: [
                                                { variant: "secondary", text: "Cancel", onClick: e.onClose },
                                                { variant: "primary", text: "Submit", onClick: e.onClose },
                                            ],
                                            children: (0, t.jsx)(D.B, {
                                                gap: 16,
                                                children: (0, t.jsx)(eH.E, {
                                                    variant: "text-md/normal",
                                                    children:
                                                        "This is an expressive modal with a gradient background and optional badge.",
                                                }),
                                            }),
                                        }),
                                    { dismissable: i.dismissable },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Expressive Modal" },
                subtitle: { label: "Subtitle", type: "text", defaultValue: "This modal has a gradient background" },
                subtitleIcon: { label: "Subtitle Icon", type: "boolean", defaultValue: !1 },
                gradientColor: {
                    label: "Gradient Color",
                    type: "select",
                    defaultValue: "purple",
                    options: [
                        { label: "Purple", value: "purple" },
                        { label: "Blue", value: "blue" },
                        { label: "Nitro Pink", value: "nitro-pink" },
                    ],
                },
                graphic: {
                    label: "Graphic",
                    type: "select",
                    defaultValue: 0,
                    options: [
                        { label: "Image", value: 0 },
                        { label: "Lottie", value: 1 },
                        { label: "Rive", value: 2 },
                        { label: "Looping Video", value: 3 },
                        { label: "Dynamic Content", value: 4 },
                    ],
                },
                badge: {
                    label: "Badge",
                    type: "select",
                    defaultValue: "new",
                    options: [
                        { label: "None", value: void 0 },
                        { label: "New", value: "new" },
                        { label: "Beta", value: "beta" },
                        { label: "Early Access", value: "early_access" },
                    ],
                },
                dismissable: { label: "Dismissable", type: "boolean", defaultValue: !0 },
            },
        },
        {
            name: "Dynamic Graphic Modal",
            id: "dynamic-graphic-modal",
            component: function (e) {
                let { dynamicText: l, ...o } = e,
                    n = {
                        type: "dynamic",
                        component: l6.DynamicGraphicComponent.DEMO,
                        aspectRatio: "6/4",
                        props: { text: l },
                    };
                return (0, t.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(eH.E, {
                            variant: "text-md/normal",
                            children:
                                "This example demonstrates the DynamicGraphic component rendering a React component inside the modal header.",
                        }),
                        (0, t.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Dynamic Graphic Modal",
                            onClick: () =>
                                (0, l3.openModalLazy)(
                                    async () => {
                                        let { ExpressiveModal: e } = await a.e("304823").then(a.bind(a, 158954));
                                        return (l) =>
                                            (0, t.jsx)(e, {
                                                ...l,
                                                ...o,
                                                title: o.title,
                                                subtitle: o.subtitle,
                                                graphic: n,
                                                actions: [
                                                    { variant: "secondary", text: "Cancel", onClick: l.onClose },
                                                    { variant: "primary", text: "Submit", onClick: l.onClose },
                                                ],
                                                children: (0, t.jsx)(D.B, {
                                                    gap: 16,
                                                    children: (0, t.jsx)(eH.E, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "The header above is rendered using a React component via DynamicGraphic, allowing for dynamic, interactive content in the modal header.",
                                                    }),
                                                }),
                                            });
                                    },
                                    { dismissable: o.dismissable },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Dynamic Graphic Modal" },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "This modal uses a React component in the header",
                },
                dynamicText: { label: "Dynamic Text", type: "text", defaultValue: "Hello from DynamicGraphic!" },
                gradientColor: {
                    label: "Gradient Color",
                    type: "select",
                    defaultValue: "purple",
                    options: [
                        { label: "Purple", value: "purple" },
                        { label: "Blue", value: "blue" },
                        { label: "Nitro Pink", value: "nitro-pink" },
                    ],
                },
                badge: {
                    label: "Badge",
                    type: "select",
                    defaultValue: void 0,
                    options: [
                        { label: "None", value: void 0 },
                        { label: "New", value: "new" },
                        { label: "Beta", value: "beta" },
                        { label: "Early Access", value: "early_access" },
                    ],
                },
                dismissable: { label: "Dismissable", type: "boolean", defaultValue: !0 },
            },
        },
        {
            name: "LayerModal",
            id: "layer-modal",
            component: function (e) {
                let { ...l } = e;
                return (0, t.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(eH.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the layer modal",
                        }),
                        (0, t.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Layer Modal",
                            onClick: () =>
                                (0, l3.openModal)((e) =>
                                    (0, t.jsx)(l8.N, {
                                        ...e,
                                        ...l,
                                        children: (0, t.jsx)(D.B, {
                                            gap: 16,
                                            children: (0, t.jsx)(eH.E, {
                                                variant: "text-md/normal",
                                                children: "This is the layer modal content",
                                            }),
                                        }),
                                    }),
                                ),
                        }),
                    ],
                });
            },
        },
        {
            name: "MultiStepModal [Alpha]",
            id: "multi-step-modal",
            component: function (e) {
                let {
                    callbackDelay: l,
                    failOnNext: a,
                    failOnComplete: o,
                    onCompleteAlert: n,
                    onNextAlert: i,
                    customErrorNotice: s,
                    errorNoticeType: r,
                } = e;
                return (0, t.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(eH.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the multi-step modal",
                        }),
                        (0, t.jsx)(h.$, {
                            variant: "primary",
                            text: "Open MultiStepModal",
                            onClick: () =>
                                (0, l3.openModal)((e) =>
                                    (0, t.jsx)(aa, {
                                        ...e,
                                        callbackDelay: l,
                                        failOnNext: a,
                                        failOnComplete: o,
                                        onCompleteAlert: n,
                                        onNextAlert: i,
                                        customErrorNotice: s,
                                        errorNoticeType: r,
                                    }),
                                ),
                        }),
                    ],
                });
            },
            controls: {
                callbackDelay: { label: "Delay Callbacks (seconds)", type: "number", defaultValue: 0 },
                failOnNext: { label: "Fail onNext", type: "boolean", defaultValue: !1 },
                failOnComplete: { label: "Fail onComplete", type: "boolean", defaultValue: !1 },
                onCompleteAlert: { label: "onComplete Alert", type: "boolean", defaultValue: !1 },
                onNextAlert: { label: "onNext Alert", type: "boolean", defaultValue: !1 },
                customErrorNotice: { label: "Custom Error Notice", type: "text", defaultValue: "" },
                errorNoticeType: {
                    label: "Error Notice Type",
                    type: "select",
                    defaultValue: "critical",
                    options: [
                        { label: "Critical", value: "critical" },
                        { label: "Warning", value: "warning" },
                        { label: "Info", value: "info" },
                        { label: "Success", value: "success" },
                    ],
                },
            },
        },
        {
            name: "BaseModal",
            id: "base-modal",
            component: function (e) {
                let { dismissable: l, tallContent: a, ...o } = e;
                return (0, t.jsxs)(D.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(eH.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the base modal",
                        }),
                        (0, t.jsx)(h.$, {
                            variant: "primary",
                            text: "Open BaseModal",
                            onClick: () =>
                                (0, l3.openModal)(
                                    (e) =>
                                        (0, t.jsx)(lY.d, {
                                            ...e,
                                            ...o,
                                            "aria-label": "Base Modal Example",
                                            children: (0, t.jsx)(lQ.c, {
                                                children: (0, t.jsxs)(D.B, {
                                                    gap: 16,
                                                    children: [
                                                        (0, t.jsx)(eH.E, {
                                                            variant: "text-lg/semibold",
                                                            children: "BaseModal Content",
                                                        }),
                                                        (0, t.jsx)(eH.E, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "This is the raw BaseModal container. It provides the modal chrome (animation, sizing, padding, focus management) without any opinionated header, body, or action bar layout.",
                                                        }),
                                                        a
                                                            ? Array.from({ length: 20 }, (e, l) =>
                                                                  (0, t.jsxs)(
                                                                      eH.E,
                                                                      {
                                                                          variant: "text-md/normal",
                                                                          children: [
                                                                              "Item ",
                                                                              l + 1,
                                                                              " \u2014 This is filler content to demonstrate overflow and scrolling behavior.",
                                                                          ],
                                                                      },
                                                                      l,
                                                                  ),
                                                              )
                                                            : null,
                                                    ],
                                                }),
                                            }),
                                        }),
                                    { dismissable: l },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                        { label: "Large", value: "lg" },
                        { label: "Extra Large", value: "xl" },
                        { label: "Extra Extra Large", value: "xxl" },
                    ],
                },
                paddingSize: {
                    label: "Padding Size",
                    type: "select",
                    defaultValue: "sm",
                    options: [
                        { label: "Small (24px)", value: "sm" },
                        { label: "Large (32px)", value: "lg" },
                    ],
                },
                animationVariant: {
                    label: "Animation Variant",
                    type: "select",
                    defaultValue: "default",
                    options: [
                        { label: "Default", value: "default" },
                        { label: "Subtle", value: "subtle" },
                    ],
                },
                fullScreenOnMobile: { label: "Full Screen on Mobile", type: "boolean", defaultValue: !0 },
                role: {
                    label: "Role",
                    type: "select",
                    defaultValue: "dialog",
                    options: [
                        { label: "Dialog", value: "dialog" },
                        { label: "Alert Dialog", value: "alertdialog" },
                    ],
                },
                maxHeight: {
                    label: "Max Height",
                    type: "select",
                    defaultValue: "default",
                    options: [
                        { label: "Default", value: "default" },
                        { label: "Viewport", value: "viewport" },
                    ],
                },
                dismissable: { label: "Dismissable", type: "boolean", defaultValue: !0 },
                tallContent: { label: "Tall Content", type: "boolean", defaultValue: !1 },
            },
        },
    ],
};
var ao = a(249686),
    an = a.n(ao),
    ai = a(43105),
    as = a(206248),
    ar = a(353795),
    ad = a(273875),
    au = a(798618),
    ac = a(916845),
    ab = a(627330),
    ap = a(375708),
    am = a(489387);
function ax(e) {
    let {
            steps: l,
            caretConfig: a = { align: "center" },
            size: n = "md",
            onStepChange: i,
            onRequestClose: s,
            popoverRef: r,
            shouldShow: d,
            position: u,
            ...c
        } = e,
        [b, p] = o.useState(0);
    (o.useEffect(() => {
        d && p(0);
    }, [d]),
        o.useEffect(() => {
            i?.(b);
        }, [b, i]));
    let m = l[b],
        x = b + 1 === l.length,
        y = o.useCallback(() => {
            (m?.onCta?.(), x ? s?.() : p((e) => e + 1));
        }, [m, x, s]),
        v = o.useCallback(() => {
            s?.();
        }, [s]),
        f = o.useCallback(() => {
            s?.();
        }, [s]);
    if (!d || null == m) return null;
    let V = {
            text: m.action?.text ?? (x ? ap.intl.string(ap.t.i4jeWR) : ap.intl.string(ap.t.PDTjLN)),
            variant: m.action?.variant ?? "primary",
            onClick: y,
            ...m.action,
        },
        j = {
            targetElementRef: c.targetElementRef,
            hasVideo: c.hasVideo,
            scrollBehavior: c.scrollBehavior,
            position: u,
            shouldShow: d,
            onRequestClose: v,
            gradientColor: m.gradientColor,
            caretConfig: a,
            ...("edge" === c.alignmentStrategy
                ? { alignmentStrategy: "edge", align: c.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, t.jsx)(ad.x, {
        ...j,
        children: (0, t.jsxs)("div", {
            ref: r,
            children: [
                (0, t.jsx)(ac.q, { onClick: f, variant: null != m.gradientColor ? "color-mix" : void 0 }),
                null != m.graphic &&
                    (0, t.jsx)("div", {
                        className: g()(am.graphic, { [am[`graphic--${n}`]]: null != n }),
                        children: (0, t.jsx)(ar.v, {
                            ...m.graphic,
                            aspectRatio: m.graphic.aspectRatio ?? ("sm" === n ? "2/1" : "16/9"),
                        }),
                    }),
                (0, t.jsx)(ab.D, { title: m.title, body: m.body, badge: m.badge, textLink: m.textLink }),
                (0, t.jsx)("div", {
                    className: am.actionBar,
                    children: (0, t.jsxs)("div", {
                        className: am.multistepActionLayout,
                        children: [
                            (0, t.jsx)(eH.E, {
                                variant: "text-xs/normal",
                                className: am.multistepIndicator,
                                children: ap.intl.formatToPlainString(ap.t.rO31eY, {
                                    count: b + 1,
                                    totalSteps: l.length,
                                }),
                            }),
                            (0, t.jsx)(h.$, { size: "sm", ...V }),
                        ],
                    }),
                }),
                (0, t.jsx)(au.F, {}),
            ],
        }),
    });
}
let ay =
        "https://cdn.discordapp.com/assets/content/26736d800236761a21973e6fe690dfd5fa484f664976b3bba91b98d5d47bb1f7.svg",
    ah = {
        title: "Popover",
        stories: [
            {
                name: "Popover",
                id: "popover",
                docs: "https://design.discord.tools/components/web/popover",
                component: function (e) {
                    let {
                            showAsset: l,
                            showActions: a,
                            showTextLink: n,
                            caretAlign: i,
                            alignmentStrategy: s,
                            align: r,
                            size: d,
                            position: u,
                            ...c
                        } = e,
                        [b, p] = o.useState(!1),
                        m = o.useRef(null);
                    return (0, t.jsxs)("div", {
                        style: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" },
                        children: [
                            (0, t.jsx)(
                                ai.A,
                                {
                                    ...c,
                                    position: u,
                                    size: d,
                                    align: r,
                                    alignmentStrategy: s,
                                    targetElementRef: m,
                                    shouldShow: b,
                                    onRequestClose: () => p(!1),
                                    graphic: l
                                        ? {
                                              type: "image",
                                              src:
                                                  "sm" === d
                                                      ? "https://cdn.discordapp.com/assets/content/7c8ee05f499cdf960d0b69208667276e8ca276aa2edcee6141d55e237d1ed5d2.svg"
                                                      : ay,
                                          }
                                        : void 0,
                                    caretConfig: { align: i },
                                    actions: a ? [{ text: "Close", onClick: () => p(!1) }] : void 0,
                                    textLink: n
                                        ? { text: "Learn More", link: "https://discord.com", external: !0 }
                                        : void 0,
                                },
                                u,
                            ),
                            (0, t.jsx)(h.$, {
                                variant: "primary",
                                text: "Toggle Popover",
                                buttonRef: m,
                                onClick: () => p(!b),
                            }),
                        ],
                    });
                },
                controls: {
                    title: { label: "Title", type: "text", defaultValue: "Sample Popover" },
                    body: {
                        label: "Body Text",
                        type: "text",
                        defaultValue: "This is a sample popover with customizable properties.",
                    },
                    position: {
                        label: "Position",
                        type: "select",
                        defaultValue: "top",
                        options: [
                            { label: "Top", value: "top" },
                            { label: "Bottom", value: "bottom" },
                            { label: "Left", value: "left" },
                            { label: "Right", value: "right" },
                        ],
                    },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "md",
                        options: [
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                        ],
                    },
                    badge: {
                        label: "Badge",
                        type: "select",
                        defaultValue: "new",
                        options: [
                            { label: "None", value: void 0 },
                            { label: "New", value: "new" },
                            { label: "Beta", value: "beta" },
                            { label: "Early Access", value: "early_access" },
                        ],
                    },
                    gradientColor: {
                        label: "Gradient Color",
                        type: "select",
                        defaultValue: void 0,
                        options: [
                            { label: "None", value: void 0 },
                            { label: "Purple", value: "purple" },
                            { label: "Blue", value: "blue" },
                            { label: "Nitro Pink", value: "nitro-pink" },
                        ],
                    },
                    caretAlign: {
                        label: "Caret Align",
                        type: "select",
                        defaultValue: "center",
                        options: [
                            { label: "Center", value: "center" },
                            { label: "Start", value: "start" },
                            { label: "End", value: "end" },
                        ],
                    },
                    alignmentStrategy: {
                        label: "Alignment Strategy",
                        type: "select",
                        defaultValue: "trigger-center",
                        options: [
                            { label: "Trigger Center (caret points at trigger)", value: "trigger-center" },
                            { label: "Edge (popover edge aligns with trigger)", value: "edge" },
                        ],
                    },
                    align: {
                        label: 'Align (only applies with "edge" strategy)',
                        type: "select",
                        defaultValue: void 0,
                        options: [
                            { label: "None", value: void 0 },
                            { label: "Top", value: "top" },
                            { label: "Center", value: "center" },
                            { label: "Bottom", value: "bottom" },
                            { label: "Left", value: "left" },
                            { label: "Right", value: "right" },
                        ],
                    },
                    showAsset: { label: "Show Asset", type: "boolean", defaultValue: !0 },
                    showActions: { label: "Show Actions", type: "boolean", defaultValue: !0 },
                    showTextLink: { label: "Show Text Link", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "VideoPopover",
                id: "video-popover",
                docs: "https://design.discord.tools/components/web/popover",
                component: function (e) {
                    let { showActions: l, previewUrl: a, assetUrl: n, ...i } = e,
                        [s, r] = o.useState(!1),
                        d = o.useRef(null);
                    return (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(
                                as.H,
                                {
                                    ...i,
                                    targetElementRef: d,
                                    shouldShow: s,
                                    onRequestClose: () => r(!1),
                                    title: "Video Popover Demo",
                                    body: "Click the video to view it in the media viewer!",
                                    assetUrl: n,
                                    previewUrl: an()(a) ? void 0 : a,
                                    badge: "new",
                                    action: l ? { text: "Learn More", onClick: () => r(!1) } : void 0,
                                },
                                i.position,
                            ),
                            (0, t.jsx)(h.$, {
                                variant: "primary",
                                text: "Show Video Popover",
                                buttonRef: d,
                                onClick: () => r(!s),
                            }),
                        ],
                    });
                },
                controls: {
                    showActions: { label: "Show Actions", type: "boolean", defaultValue: !0 },
                    assetUrl: {
                        label: "Asset URL",
                        type: "text",
                        defaultValue: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                    },
                    previewUrl: { label: "Preview URL", type: "text", defaultValue: "" },
                },
            },
            {
                name: "MultiStepPopover",
                id: "multi-step-popover",
                docs: "https://design.discord.tools/components/web/popover",
                component: function (e) {
                    let { showExpressive: l, ...a } = e,
                        [n, i] = o.useState(!1),
                        s = o.useRef(null),
                        r = [
                            {
                                title: "Welcome to the Feature!",
                                body: "This is the first step of our multi-step introduction.",
                                asset: (0, t.jsx)("img", { src: ay, alt: "Step 1" }),
                                badge: "new",
                                action: { text: "Next" },
                                gradientColor: "blue",
                            },
                            {
                                title: "Learn the Benefits",
                                body: "Here are the amazing benefits you can enjoy with this feature.",
                                asset: (0, t.jsx)("img", {
                                    src: "https://cdn.discordapp.com/assets/content/cd20f95b793bd4bdd462960744dae563a5409fc0a918a6a006c0d61f89fb6119.svg",
                                    alt: "Step 2",
                                }),
                                action: { text: "Continue" },
                                gradientColor: "purple",
                            },
                            {
                                title: "Get Started!",
                                body: "You're all set to begin using this awesome feature.",
                                asset: (0, t.jsx)("img", { src: ay, alt: "Step 3" }),
                                action: { text: "Get Started", variant: l ? "expressive" : void 0 },
                                gradientColor: "nitro-pink",
                                textLink: { text: "Learn More", link: "https://discord.com", external: !0 },
                            },
                        ];
                    return (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(
                                ax,
                                {
                                    ...a,
                                    targetElementRef: s,
                                    shouldShow: n,
                                    onRequestClose: () => i(!1),
                                    steps: r,
                                    caretConfig: { align: "center" },
                                    onStepChange: () => {},
                                },
                                a.position,
                            ),
                            (0, t.jsx)(h.$, {
                                variant: "primary",
                                text: "Show Multi-Step",
                                buttonRef: s,
                                onClick: () => i(!n),
                            }),
                        ],
                    });
                },
                controls: {
                    showExpressive: { label: "Show Expressive Button", type: "boolean", defaultValue: !1 },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "md",
                        options: [
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                        ],
                    },
                },
            },
        ],
    };
var av = a(911608);
let ag = {
        title: "ProgressBar",
        stories: [
            {
                name: "ProgressBar",
                id: "progress-bar",
                component: function (e) {
                    let { value: l, isIndeterminate: a, size: o, animate: n, valueLabel: i, ariaLabel: s } = e,
                        r = "" !== i ? i : void 0,
                        d = "" !== s ? s : "Progress";
                    return a
                        ? (0, t.jsx)(av.z, { isIndeterminate: !0, size: o, animate: n, valueLabel: r, "aria-label": d })
                        : (0, t.jsx)(av.z, { value: l, size: o, animate: n, valueLabel: r, "aria-label": d });
                },
                controls: {
                    value: { label: "Value", type: "slider", defaultValue: 50, minValue: 0, maxValue: 100 },
                    isIndeterminate: { label: "Indeterminate", type: "boolean", defaultValue: !1 },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "lg",
                        options: [
                            { label: "xs (2px)", value: "xs" },
                            { label: "sm (4px)", value: "sm" },
                            { label: "md (6px)", value: "md" },
                            { label: "lg (8px)", value: "lg" },
                        ],
                    },
                    animate: { label: "Animate", type: "boolean", defaultValue: !0 },
                    valueLabel: { label: "Value label (overrides aria-valuetext)", type: "text", defaultValue: "" },
                    ariaLabel: { label: "Accessible name (aria-label)", type: "text", defaultValue: "Progress" },
                },
            },
        ],
    },
    af = {
        title: "RadioGroup",
        stories: [
            {
                id: "radiogroup",
                name: "RadioGroup",
                component: function (e) {
                    let {
                            disabled: l,
                            optionCount: a,
                            label: n,
                            optionLabel: i,
                            description: s,
                            showIcons: r,
                            withMixedDisabledOptions: d,
                        } = e,
                        [u, c] = o.useState("option1"),
                        b = o.useMemo(
                            () =>
                                [
                                    {
                                        name: null != i ? `${i} 1` : "Option 1",
                                        value: "option1",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? le.CircleInformationIcon : void 0,
                                        disabled: !d && void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 2` : "Option 2",
                                        value: "option2",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? le.CircleInformationIcon : void 0,
                                        disabled: !!d || void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 3` : "Option 3",
                                        value: "option3",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? le.CircleInformationIcon : void 0,
                                        disabled: !d && void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 4` : "Option 4",
                                        value: "option4",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? le.CircleInformationIcon : void 0,
                                        disabled: !!d || void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 5` : "Option 5",
                                        value: "option5",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? le.CircleInformationIcon : void 0,
                                        disabled: !d && void 0,
                                    },
                                ].slice(0, Math.max(1, Math.min(5, a))),
                            [a, i, s, r, d],
                        ),
                        p = o.useCallback((e) => {
                            c(e);
                        }, []),
                        m = o.useCallback(() => {
                            b.length > 0 && c(b[0].value);
                        }, [b]),
                        x = o.useCallback(() => {
                            b.length > 0 && c(b[b.length - 1].value);
                        }, [b]),
                        y = o.useCallback(() => {
                            c(void 0);
                        }, []);
                    return (0, t.jsxs)(D.B, {
                        direction: "vertical",
                        gap: "md",
                        children: [
                            (0, t.jsx)(eZ.z, { value: u, label: n, onChange: p, options: b, disabled: l }),
                            (0, t.jsxs)(eH.E, {
                                variant: "text-sm/normal",
                                children: ["Current selection: ", "string" == typeof u && "" !== u ? u : "None"],
                            }),
                            (0, t.jsxs)(D.B, {
                                direction: "horizontal",
                                gap: "sm",
                                children: [
                                    (0, t.jsx)(h.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Select First",
                                        onClick: m,
                                        disabled: l || 0 === b.length,
                                    }),
                                    (0, t.jsx)(h.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Select Last",
                                        onClick: x,
                                        disabled: l || 0 === b.length,
                                    }),
                                    (0, t.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: y,
                                        disabled: l,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                controls: {
                    label: { type: "text", label: "Label", defaultValue: "Mana Radio Group" },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    optionCount: {
                        type: "select",
                        label: "Number of Options",
                        options: [
                            { label: "1", value: 1 },
                            { label: "2", value: 2 },
                            { label: "3", value: 3 },
                            { label: "4", value: 4 },
                            { label: "5", value: 5 },
                        ],
                        defaultValue: 3,
                    },
                    optionLabel: { type: "text", label: "Option Label", defaultValue: "Option" },
                    description: { type: "text", label: "Description", defaultValue: "" },
                    showIcons: { type: "boolean", label: "Show Icons", defaultValue: !1 },
                    withMixedDisabledOptions: { type: "boolean", label: "Mixed Disabled Options", defaultValue: !1 },
                },
            },
        ],
    },
    aV = {
        title: "RangeCalendar",
        stories: [
            {
                id: "range-calendar",
                name: "RangeCalendar",
                component: function (e) {
                    let { disabled: l, readOnly: a, showMinMax: n } = e,
                        [i, s] = o.useState({
                            start: (0, e2.Ec)((0, e2.Xj)()),
                            end: (0, e2.Ec)((0, e2.Xj)()).add({ days: 7 }),
                        }),
                        r = o.useCallback((e) => {
                            s(e);
                        }, []),
                        d = o.useCallback(() => {
                            s(null);
                        }, []),
                        u = o.useCallback(() => {
                            let e = (0, e2.Ec)((0, e2.Xj)());
                            s({ start: e, end: e.add({ days: 7 }) });
                        }, []),
                        c = o.useCallback(() => {
                            s({ start: (0, e4._U)("2024-12-01"), end: (0, e4._U)("2024-12-31") });
                        }, []);
                    if (!e9("RangeCalendarStory"))
                        return (0, t.jsxs)(e8.w, {
                            type: "critical",
                            children: [
                                "This component is experimental and only available behind the ",
                                (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                                " experiment. Do not use this in production yet.",
                            ],
                        });
                    function b(e) {
                        return null == e ? "None" : (0, e3.default)(e.toDate((0, e2.Xj)()), "MMMM d, yyyy");
                    }
                    return (0, t.jsxs)(D.B, {
                        direction: "vertical",
                        gap: "md",
                        children: [
                            (0, t.jsx)(lC, {
                                value: i,
                                onChange: r,
                                isDisabled: l,
                                isReadOnly: a,
                                minValue: n ? (0, e4._U)("2024-01-01") : void 0,
                                maxValue: n ? (0, e4._U)("2024-12-31") : void 0,
                                "aria-label": "Select a date range",
                            }),
                            (0, t.jsxs)(eH.E, {
                                variant: "text-sm/normal",
                                children: [
                                    "Selected range: ",
                                    null != i ? `${b(i.start)} \u{2013} ${b(i.end)}` : "None",
                                ],
                            }),
                            (0, t.jsxs)(D.B, {
                                direction: "horizontal",
                                gap: "sm",
                                children: [
                                    (0, t.jsx)(h.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: d,
                                        disabled: l || a,
                                    }),
                                    (0, t.jsx)(h.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "This Week",
                                        onClick: u,
                                        disabled: l || a,
                                    }),
                                    (0, t.jsx)(h.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "December",
                                        onClick: c,
                                        disabled: l || a,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                controls: {
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    readOnly: { type: "boolean", label: "Read Only", defaultValue: !1 },
                    showMinMax: { type: "boolean", label: "Show Min/Max (2024)", defaultValue: !1 },
                },
            },
        ],
    };
var aj = a(593924),
    aC = a(844222),
    aS = a(272318);
let ak = Object.entries(aj)
    .filter((e) => {
        let l = e[1];
        return "function" == typeof l && "riveSrc" in l;
    })
    .map((e) => {
        let [l, a] = e;
        return { name: l, Component: a };
    })
    .sort((e, l) => e.name.localeCompare(l.name));
var aw = a(649998),
    aM = a(715022),
    aT = a(453318),
    aI = a(379649);
let aE = [
        { label: "Aardvark", value: "aardvark", id: "aardvark", description: "This is an aardvark" },
        { label: "Cat", value: "cat", id: "cat", description: "This is a cat" },
        { label: "Dog", value: "dog", id: "dog" },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", description: "This is a kangaroo" },
        { label: "Panda", value: "panda", id: "panda" },
        { label: "Snake", value: "snake", id: "snake", disabled: !0 },
    ],
    aD = [
        {
            label: "Aardvark",
            value: "aardvark",
            id: "aardvark",
            leading: lJ.N,
            trailing: { type: "badge", badgeType: "new" },
            description: "This is an aardvark",
        },
        { label: "Cat", value: "cat", id: "cat", leading: lJ.N, trailing: "20m", description: "This is a cat" },
        { label: "Dog", value: "dog", id: "dog", leading: lJ.N },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", leading: { type: "image", src: aI } },
        { label: "Panda", value: "panda", id: "panda", leading: { type: "avatar", src: aI } },
        { label: "Snake", value: "snake", id: "snake", leading: lJ.N, disabled: !0 },
    ],
    aA = [
        {
            label: "Domesticated",
            options: [
                { label: "Cat", value: "cat", id: "cat", description: "This is a cat" },
                { label: "Dog", value: "dog", id: "dog" },
            ],
        },
        {
            label: "Wild",
            options: [
                { label: "Aardvark", value: "aardvark", id: "aardvark", description: "This is an aardvark" },
                { label: "Kangaroo", value: "kangaroo", id: "kangaroo", description: "This is a kangaroo" },
                { label: "Panda", value: "panda", id: "panda" },
                { label: "Snake", value: "snake", id: "snake", disabled: !0 },
            ],
        },
    ],
    aL = {
        title: "Select",
        stories: [
            {
                id: "select",
                name: "Select",
                component: function (e) {
                    let { selectionMode: l, withLeadingAndTrailing: a, withGroups: n, ...i } = e,
                        [s, r] = o.useState(void 0),
                        [d, u] = o.useState([]),
                        c = aN(a, i.asyncOptions, n);
                    return "single" === l
                        ? (0, t.jsx)(lT.l, { ...i, selectionMode: l, options: c, onSelectionChange: r, value: s })
                        : (0, t.jsx)(lT.l, { ...i, selectionMode: l, options: c, onSelectionChange: u, value: d });
                },
                controls: {
                    selectionMode: {
                        label: "SelectionType",
                        type: "select",
                        options: [
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                        defaultValue: "single",
                    },
                    withLeadingAndTrailing: {
                        label: "Show leading and trailing content",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    asyncOptions: { label: "Async loaded options", type: "boolean", defaultValue: !1 },
                    withGroups: { label: "Group options under headers", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    readOnly: { type: "boolean", label: "Read Only", defaultValue: !1 },
                    clearable: { type: "boolean", label: "Clearable", defaultValue: !1 },
                    fullWidth: { type: "boolean", label: "Full width", defaultValue: !1 },
                    closeOnSelect: { type: "boolean", label: "Close on select", defaultValue: !1 },
                    shouldFocusWrap: { type: "boolean", label: "Should listbox focus wrap", defaultValue: !1 },
                    wrapTags: { type: "boolean", label: "Wrap tags", defaultValue: !1 },
                    maxOptionsVisible: { type: "number", label: "Max options visible", defaultValue: 5 },
                    label: { type: "text", label: "Label", defaultValue: "Sort by" },
                    helperText: { type: "text", label: "Helper text", defaultValue: void 0 },
                    hideLabel: { type: "boolean", label: "Hide Label", defaultValue: !1 },
                    placeholder: { type: "text", label: "Placeholder", defaultValue: void 0 },
                    description: { type: "text", label: "Description", defaultValue: "This is an example description" },
                    errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                    successMessage: { type: "text", label: "Success Message", defaultValue: "" },
                    layout: {
                        type: "select",
                        label: "Layout",
                        defaultValue: "vertical",
                        options: [
                            { label: "Vertical", value: "vertical" },
                            { label: "Horizontal", value: "horizontal" },
                            { label: "Horizontal (Responsive)", value: "horizontal-responsive" },
                        ],
                    },
                },
            },
            {
                id: "searchable-select",
                name: "SearchableSelect",
                component: function (e) {
                    let { selectionMode: l, withLeadingAndTrailing: a, asyncOptions: n, withGroups: i, ...s } = e,
                        [r, d] = o.useState(void 0),
                        [u, c] = o.useState([]),
                        b = aN(a, n, i);
                    return "single" === l
                        ? (0, t.jsx)(l1.Z, { ...s, selectionMode: l, onSelectionChange: d, value: r, options: b })
                        : (0, t.jsx)(l1.Z, { ...s, selectionMode: l, onSelectionChange: c, value: u, options: b });
                },
                controls: {
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        options: [
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                        defaultValue: "single",
                    },
                    withLeadingAndTrailing: {
                        label: "Show leading and trailing content",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    asyncOptions: { label: "Async loaded options", type: "boolean", defaultValue: !1 },
                    withGroups: { label: "Group options under headers", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    clearable: { type: "boolean", label: "Clearable", defaultValue: !1 },
                    closeOnSelect: { type: "boolean", label: "Close on select", defaultValue: !1 },
                    shouldFocusWrap: { type: "boolean", label: "Should listbox focus wrap", defaultValue: !1 },
                    wrapTags: { type: "boolean", label: "Wrap tags", defaultValue: !1 },
                    maxOptionsVisible: { type: "number", label: "Max options visible", defaultValue: 5 },
                    label: { type: "text", label: "Label", defaultValue: "Sort by" },
                    hideLabel: { type: "boolean", label: "Hide Label", defaultValue: !1 },
                    placeholder: { type: "text", label: "Placeholder", defaultValue: void 0 },
                    description: { type: "text", label: "Description", defaultValue: "This is an example description" },
                    helperText: {
                        type: "text",
                        label: "Helper Text",
                        defaultValue:
                            "This is an example of helper text, which can be used to provide additional information about the field.",
                    },
                    errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                    successMessage: { type: "text", label: "Success Message", defaultValue: "" },
                },
            },
            {
                id: "combobox",
                name: "ComboBox",
                component: function (e) {
                    let {
                            selectionMode: l,
                            label: a,
                            hideLabel: n,
                            description: i,
                            helperText: s,
                            errorMessage: r,
                            successMessage: d,
                            wrapTags: u,
                            withLeadingAndTrailing: c,
                            withGroups: b,
                            placeholder: p,
                            ...m
                        } = e,
                        { required: x, disabled: y } = m,
                        h = aN(c, m.asyncOptions, b),
                        [v, g] = o.useState(null);
                    return (0, t.jsxs)(aT.iS, {
                        selectionMode: l,
                        onSelectionChange: g,
                        options: h,
                        value: v,
                        ...m,
                        children: [
                            (0, t.jsx)(aT.a3, {
                                label: a,
                                hideLabel: n,
                                placeholder: p,
                                required: x,
                                disabled: y,
                                description: i,
                                helperText: s,
                                errorMessage: r,
                                successMessage: d,
                                wrapTags: u,
                            }),
                            (0, t.jsx)(aT.X2, {}),
                        ],
                    });
                },
                controls: {
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        options: [
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                        defaultValue: "single",
                    },
                    withLeadingAndTrailing: {
                        label: "Show leading and trailing content",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    asyncOptions: { label: "Async loaded options", type: "boolean", defaultValue: !1 },
                    withGroups: { label: "Group options under headers", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    clearable: { type: "boolean", label: "Clearable", defaultValue: !1 },
                    closeOnSelect: { type: "boolean", label: "Close on select", defaultValue: !1 },
                    shouldFocusWrap: { type: "boolean", label: "Should listbox focus wrap", defaultValue: !1 },
                    wrapTags: { type: "boolean", label: "Wrap tags", defaultValue: !1 },
                    label: { type: "text", label: "Label", defaultValue: "Sort by" },
                    hideLabel: { type: "boolean", label: "Hide Label", defaultValue: !1 },
                    placeholder: { type: "text", label: "Placeholder", defaultValue: void 0 },
                    description: { type: "text", label: "Description", defaultValue: "This is an example description" },
                    helperText: {
                        type: "text",
                        label: "Helper Text",
                        defaultValue:
                            "This is an example of helper text, which can be used to provide additional information about the field.",
                    },
                    errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                    successMessage: { type: "text", label: "Success Message", defaultValue: "" },
                },
            },
            {
                id: "listbox",
                name: "ListBox",
                component: function (e) {
                    let {
                            selectionMode: l,
                            required: a,
                            shouldFocusWrap: n,
                            withLeadingAndTrailing: i,
                            withGroups: s,
                        } = e,
                        [r, d] = o.useState(null),
                        { flatOptions: u, groups: c } = o.useMemo(() => (0, aM.yG)(aA), []);
                    return (0, t.jsx)(aw.q, {
                        selectionMode: l,
                        required: a,
                        shouldFocusWrap: n,
                        items: s ? u : i ? aD : aE,
                        groups: s ? c : void 0,
                        onSelectionChange: d,
                        selectedItems: r,
                    });
                },
                controls: {
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        options: [
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                        defaultValue: "single",
                    },
                    withLeadingAndTrailing: {
                        label: "Show leading and trailing content",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    withGroups: { label: "Group options under headers", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    shouldFocusWrap: { label: "Should focus wrap", type: "boolean", defaultValue: !1 },
                },
            },
        ],
    };
function aN(e, l, a) {
    let t = o.useRef(null);
    return o.useMemo(() => {
        let o = a ? aA : e ? aD : aE;
        return l
            ? (e) =>
                  new Promise(
                      null != t.current ? (e) => e(t.current) : (e) => setTimeout(() => ((t.current = o), e(o)), 1e3),
                  )
            : o;
    }, [e, l, a]);
}
let aR = {
    title: "Switch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let { disabled: l, hasIcon: a, label: n, description: i, required: s, errorMessage: r } = e,
                    [d, u] = o.useState(!1);
                return (0, t.jsx)(eK.d, {
                    label: n,
                    description: i,
                    required: s,
                    errorMessage: r,
                    hasIcon: a,
                    onChange: u,
                    disabled: l,
                    checked: d,
                });
            },
            controls: {
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                label: { type: "text", label: "Label", defaultValue: "Always underline links" },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue:
                        "Make links to websites, help articles, and other pages stand out more by underlining them.",
                },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                hasIcon: { type: "boolean", label: "Has Icon", defaultValue: !1 },
            },
        },
    ],
};
var aP = a(11779),
    aO = a(872162);
let aB = [
        { id: "strength", label: "Strength", icon: aP.r },
        { id: "dexterity", label: "Dexterity" },
        { id: "wisdom", label: "Wisdom" },
        { id: "charisma", label: "Charisma" },
    ],
    az = [
        { id: "safety", label: "Safety Center", href: "https://discord.com/safety" },
        { id: "support", label: "Support", href: "https://support.discord.com" },
    ],
    a$ = {
        title: "TagGroup",
        stories: [
            {
                name: "TagGroup",
                id: "tag-group",
                component: function (e) {
                    let { disabled: l, removeable: a, layout: s, size: r } = e,
                        d = (0, n.bG)([i.default], () => i.default.getCurrentUser()),
                        u = o.useMemo(
                            () => [
                                { id: "strength", label: "Strength", icon: aP.r },
                                { id: "dexterity", label: "Dexterity", icon: { type: "role", color: "#ff44aa" } },
                                {
                                    id: "wisdom",
                                    label: "Wisdom",
                                    icon: { type: "avatar", src: d?.getAvatarURL(void 0, 16) ?? "" },
                                },
                                { id: "charisma", label: "Charisma" },
                            ],
                            [d],
                        ),
                        [c, b] = o.useState(u),
                        p = o.useCallback(
                            (e) => {
                                b(c.filter((l) => !e.has(l.id)));
                            },
                            [c],
                        ),
                        m = o.useCallback(() => {
                            b(u);
                        }, [u]),
                        x = (0, t.jsx)(aO.C, {
                            label: "Character attributes",
                            disabled: l,
                            layout: s,
                            size: r,
                            items: c,
                            onRemove: a ? p : void 0,
                        }),
                        y = a && (0, t.jsx)(h.$, { disabled: c.length === u.length, text: "Reset", onClick: m });
                    return "inline" === s
                        ? (0, t.jsxs)(D.B, {
                              gap: 24,
                              children: [(0, t.jsx)("div", { style: { display: "flex", gap: 4 }, children: x }), y],
                          })
                        : (0, t.jsxs)(D.B, { gap: 24, children: [x, y] });
                },
                controls: {
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    removeable: { label: "Removeable", type: "boolean", defaultValue: !1 },
                    layout: {
                        label: "Layout",
                        type: "select",
                        defaultValue: "default",
                        options: [
                            { label: "Default", value: "default" },
                            { label: "Inline", value: "inline" },
                        ],
                    },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: void 0,
                        options: [
                            { label: "Automatic", value: void 0 },
                            { label: "Extra small", value: "xs" },
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                        ],
                    },
                },
            },
            {
                name: "TagGroup links",
                id: "tag-group-links",
                component: function (e) {
                    let { disabled: l } = e;
                    return (0, t.jsx)(aO.C, { mode: "link", label: "Discord resources", disabled: l, items: az });
                },
                controls: { disabled: { label: "Disabled", type: "boolean", defaultValue: !1 } },
            },
            {
                name: "TagGroup filter tags",
                id: "tag-group-filter",
                component: function (e) {
                    let { disabled: l, disallowEmptySelection: a, selectionMode: n, size: i } = e,
                        [s, r] = o.useState(() => new Set(["strength"])),
                        d = o.useMemo(() => new Set(["charisma"]), []),
                        u = o.useCallback((e) => {
                            "all" !== e && r(new Set(e));
                        }, []);
                    return (0, t.jsx)(D.B, {
                        gap: 24,
                        children: (0, t.jsx)(aO.C, {
                            variant: "filter",
                            label: "Character attributes",
                            disabled: l,
                            items: aB,
                            selectionMode: n,
                            selectedKeys: s,
                            onSelectionChange: u,
                            disabledKeys: d,
                            disallowEmptySelection: a,
                            size: i,
                        }),
                    });
                },
                controls: {
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    disallowEmptySelection: { label: "Disallow Empty Selection", type: "boolean", defaultValue: !1 },
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        defaultValue: "multiple",
                        options: [
                            { label: "None (static)", value: "none" },
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                    },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "md",
                        options: [
                            { label: "Extra small", value: "xs" },
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                        ],
                    },
                },
            },
        ],
    };
var aG = a(364522),
    aF = a(404544);
let a_ = {
    name: "Text",
    id: "text",
    component: eH.E,
    controls: {
        variant: {
            label: "Variant",
            type: "select",
            defaultValue: "text-sm/normal",
            options: Object.values(L).map((e) => ({ label: e, value: e })),
        },
        color: {
            label: "Color",
            type: "select",
            defaultValue: "text-strong",
            options: [
                { label: "Text Primary", value: "text-strong" },
                { label: "Text Secondary", value: "text-subtle" },
                { label: "Text Tertiary", value: "text-muted" },
                { label: "Text Muted", value: "text-muted" },
                { label: "Header Primary", value: "text-strong" },
                { label: "Header Secondary", value: "text-default" },
                { label: "Header Muted", value: "text-muted" },
                { label: "Feedback Positive", value: "text-feedback-positive" },
                { label: "Feedback Critical", value: "text-feedback-critical" },
                { label: "Feedback Warning", value: "text-feedback-warning" },
                { label: "Feedback Info", value: "text-feedback-info" },
            ],
        },
        children: { label: "Text", type: "text", defaultValue: "Hello, world!" },
    },
};
var aH = a(782641),
    aq = a(381275);
let aU = Object.assign(
    function (e) {
        let { children: l, "aria-label": a, "aria-labelledby": o } = e;
        return (0, t.jsx)(aH.M, {
            "data-mana-component": "toolbar",
            "aria-label": a,
            "aria-labelledby": o,
            className: aq.KE,
            children: l,
        });
    },
    {
        Group: function (e) {
            let { children: l, "aria-label": a, "aria-labelledby": o } = e;
            return (0, t.jsx)("div", {
                role: "group",
                "data-mana-component": "toolbar-group",
                "aria-label": a,
                "aria-labelledby": o,
                className: aq.Os,
                children: l,
            });
        },
        Separator: function () {
            return (0, t.jsx)("div", {
                role: "separator",
                "aria-orientation": "vertical",
                "data-mana-component": "toolbar-separator",
                className: aq.me,
            });
        },
    },
);
var aW = a(866665),
    aX = a(683063),
    aZ = a(557464);
let aK = {
    title: "Tooltip",
    stories: [
        {
            name: "Tooltip",
            id: "tooltip",
            docs: "https://design.discord.tools/components/web/tooltip",
            component: function (e) {
                let {
                        text: l,
                        position: a,
                        align: n,
                        caretAlign: i,
                        customOffset: s,
                        delay: r,
                        spacing: d,
                        ariaHidden: u,
                        ...c
                    } = e,
                    b = o.useMemo(() => {
                        if ("center" !== i && null != i)
                            return "custom" === i ? { align: i, customOffset: s } : { align: i };
                    }, [i, s]);
                return (0, t.jsx)(aW.m, {
                    text: l,
                    position: a,
                    align: n,
                    delay: r,
                    spacing: d,
                    caretConfig: b,
                    ariaHidden: u,
                    ...c,
                    children: (0, t.jsx)(h.$, { variant: "primary", text: "Hover me" }),
                });
            },
            controls: {
                text: { label: "Text", type: "text", defaultValue: "Here's a tooltip!" },
                position: {
                    label: "Position",
                    type: "select",
                    defaultValue: "top",
                    options: [
                        { label: "Top", value: "top" },
                        { label: "Bottom", value: "bottom" },
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
                align: {
                    label: "Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        { label: "Top", value: "top" },
                        { label: "Center", value: "center" },
                        { label: "Bottom", value: "bottom" },
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
                caretAlign: {
                    label: "Caret Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        { label: "Start", value: "start" },
                        { label: "Center", value: "center" },
                        { label: "End", value: "end" },
                        { label: "Custom", value: "custom" },
                    ],
                },
                customOffset: { label: "Custom Offset", type: "number", defaultValue: 0 },
                delay: { label: "Delay (ms)", type: "number", defaultValue: 0 },
                spacing: { label: "Spacing (px)", type: "number", defaultValue: 11 },
                keyboardShortcut: { label: "Keyboard Shortcut", type: "text", defaultValue: "mod+k" },
                ariaHidden: { label: "Aria Hidden", type: "boolean", defaultValue: !1 },
            },
        },
        {
            name: "RichTooltip",
            id: "rich-tooltip",
            docs: "https://design.discord.tools/components/web/tooltip",
            component: function (e) {
                let {
                        title: l,
                        body: a,
                        showAsset: n,
                        assetSize: i,
                        padding: s,
                        position: r,
                        align: d,
                        caretAlign: u,
                        customOffset: c,
                        delay: b,
                        spacing: p,
                        forceOpen: m,
                        ...x
                    } = e,
                    y = o.useMemo(() => {
                        if ("center" !== u && null != u)
                            return "custom" === u ? { align: u, customOffset: c } : { align: u };
                    }, [u, c]),
                    v = o.useMemo(() => (n ? { type: "image", src: aZ.A, aspectRatio: "1/1" } : void 0), [n]);
                return (0, t.jsx)(aX.u, {
                    title: l,
                    body: a,
                    position: r,
                    align: d,
                    padding: s,
                    delay: b,
                    spacing: p,
                    caretConfig: y,
                    asset: v,
                    assetSize: i,
                    forceOpen: m,
                    ...x,
                    children: (0, t.jsx)(h.$, { variant: "primary", text: "Hover me (rich)" }),
                });
            },
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Title goes here" },
                body: { label: "Body", type: "text", defaultValue: "Body copy goes in this section." },
                assetSize: {
                    label: "Asset Size",
                    type: "select",
                    defaultValue: 16,
                    options: [
                        { label: "16px", value: 16 },
                        { label: "20px", value: 20 },
                        { label: "24px", value: 24 },
                        { label: "32px", value: 32 },
                        { label: "48px", value: 48 },
                        { label: "80px", value: 80 },
                    ],
                },
                padding: {
                    label: "Padding",
                    type: "select",
                    defaultValue: "default",
                    options: [
                        { label: "Default", value: "default" },
                        { label: "Large", value: "lg" },
                    ],
                },
                position: {
                    label: "Position",
                    type: "select",
                    defaultValue: "top",
                    options: [
                        { label: "Top", value: "top" },
                        { label: "Bottom", value: "bottom" },
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
                align: {
                    label: "Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        { label: "Top", value: "top" },
                        { label: "Center", value: "center" },
                        { label: "Bottom", value: "bottom" },
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
                caretAlign: {
                    label: "Caret Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        { label: "Start", value: "start" },
                        { label: "Center", value: "center" },
                        { label: "End", value: "end" },
                        { label: "Custom", value: "custom" },
                    ],
                },
                customOffset: { label: "Custom Offset", type: "number", defaultValue: 0 },
                delay: { label: "Delay (ms)", type: "number", defaultValue: 0 },
                spacing: { label: "Spacing (px)", type: "number", defaultValue: 11 },
                forceOpen: { label: "Force Open", type: "boolean", defaultValue: !1 },
                showAsset: { label: "Show Asset", type: "boolean", defaultValue: !0 },
            },
        },
    ],
};
var aY = a(508382),
    aQ = a(393743);
let aJ = {
        id: "mana",
        name: "Mana",
        groups: [
            {
                title: "Text",
                stories: [
                    a_,
                    {
                        name: "Typography Scales",
                        id: "text-scales",
                        component: function (e) {
                            return (0, t.jsx)(aG.Ar, {
                                className: aF.H,
                                children: Object.values(L).map((l) =>
                                    (0, t.jsxs)(
                                        y.Z,
                                        {
                                            className: aF.N,
                                            children: [
                                                (0, t.jsx)(eH.E, { ...e, variant: l, children: e.children }),
                                                (0, t.jsx)(eH.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-subtle",
                                                    children: l,
                                                }),
                                            ],
                                        },
                                        l,
                                    ),
                                ),
                            });
                        },
                        controls: { children: { label: "Text", type: "text", defaultValue: "Hello, world!" } },
                    },
                ],
            },
            eE,
            e$,
            {
                title: "Toolbar",
                stories: [
                    {
                        name: "Toolbar",
                        id: "toolbar",
                        component: function () {
                            let [e, l] = o.useState(!1),
                                [a, n] = o.useState(!1),
                                i = e ? "Unmute microphone" : "Mute microphone";
                            return (0, t.jsxs)(aU, {
                                "aria-label": "Message actions",
                                children: [
                                    (0, t.jsxs)(aU.Group, {
                                        "aria-label": "Response actions",
                                        children: [
                                            (0, t.jsx)(h.$, { variant: "secondary", text: "Reply" }),
                                            (0, t.jsx)(aW.m, {
                                                text: "More options",
                                                children: (0, t.jsx)(eD.K, {
                                                    variant: "secondary",
                                                    icon: eA.p,
                                                    "aria-label": "More options",
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(aU.Separator, {}),
                                    (0, t.jsxs)(aU.Group, {
                                        "aria-label": "Message options",
                                        children: [
                                            (0, t.jsx)(aW.m, {
                                                text: i,
                                                children: (0, t.jsx)(eL.k, {
                                                    icon: eN.MicrophoneIcon,
                                                    selectedIcon: eR.z,
                                                    pressed: e,
                                                    "aria-label": i,
                                                    onClick: () => l((e) => !e),
                                                }),
                                            }),
                                            (0, t.jsx)(ll.S, { label: "Include attachments", checked: a, onChange: n }),
                                        ],
                                    }),
                                ],
                            });
                        },
                        controls: {},
                    },
                ],
            },
            e7,
            la,
            lo,
            li,
            lw,
            af,
            aV,
            aR,
            at,
            {
                title: "InlineNotice",
                stories: [
                    lB,
                    {
                        name: "All Types",
                        id: "inline-notice-types",
                        component: function (e) {
                            let { text: l } = e;
                            return (0, t.jsx)(D.B, {
                                gap: 16,
                                children: lO.map((e) => (0, t.jsx)(e8.w, { type: e, children: `${e}: ${l}` }, e)),
                            });
                        },
                        controls: { text: { label: "Text", type: "text", defaultValue: "This is an inline notice" } },
                    },
                ],
            },
            lZ,
            aL,
            ah,
            ag,
            aK,
            e1,
            a$,
            lP,
            {
                title: "FloatingLayer",
                stories: [
                    {
                        name: "FloatingLayer",
                        id: "popover-layer",
                        component: function (e) {
                            let {
                                    placement: l,
                                    spacing: a,
                                    autoFlip: n,
                                    autoShift: i,
                                    strategy: s,
                                    portal: r,
                                    blockPointerEvents: d,
                                } = e,
                                [u, c] = o.useState(!1);
                            return (0, t.jsx)(aY.Ow, {
                                open: u,
                                onOpenChange: c,
                                placement: l,
                                spacing: a,
                                autoFlip: n,
                                autoShift: i,
                                strategy: s,
                                portal: r,
                                blockPointerEvents: d,
                                renderLayer: () =>
                                    (0, t.jsx)("div", {
                                        className: aQ.q,
                                        children: (0, t.jsx)(eH.E, {
                                            variant: "text-sm/medium",
                                            children: "FloatingLayer Content",
                                        }),
                                    }),
                                children: (e) => {
                                    let { ref: l, props: a } = e;
                                    return (0, t.jsx)(h.$, {
                                        variant: "primary",
                                        text: "Target Element",
                                        onClick: () => c(!u),
                                        ...a,
                                        buttonRef: l,
                                    });
                                },
                            });
                        },
                        controls: {
                            placement: {
                                label: "Placement",
                                type: "select",
                                defaultValue: "bottom",
                                options: [
                                    { label: "Top", value: "top" },
                                    { label: "Top Start", value: "top-start" },
                                    { label: "Top End", value: "top-end" },
                                    { label: "Bottom", value: "bottom" },
                                    { label: "Bottom Start", value: "bottom-start" },
                                    { label: "Bottom End", value: "bottom-end" },
                                    { label: "Left", value: "left" },
                                    { label: "Left Start", value: "left-start" },
                                    { label: "Left End", value: "left-end" },
                                    { label: "Right", value: "right" },
                                    { label: "Right Start", value: "right-start" },
                                    { label: "Right End", value: "right-end" },
                                ],
                            },
                            spacing: { label: "Spacing (px)", type: "number", defaultValue: 8 },
                            autoFlip: { label: "Auto Flip", type: "boolean", defaultValue: !0 },
                            autoShift: { label: "Auto Shift", type: "boolean", defaultValue: !0 },
                            strategy: {
                                label: "Strategy",
                                type: "select",
                                defaultValue: "fixed",
                                options: [
                                    { label: "Fixed", value: "fixed" },
                                    { label: "Absolute", value: "absolute" },
                                ],
                            },
                            portal: { label: "Portal", type: "boolean", defaultValue: !0 },
                            blockPointerEvents: { label: "Block Pointer Events", type: "boolean", defaultValue: !1 },
                        },
                    },
                ],
            },
            {
                title: "Rive Animations",
                stories: [
                    {
                        name: "All Animations",
                        id: "rive-all-animations",
                        component: function () {
                            let [e, l] = o.useState(!0),
                                a = o.useContext(aC.C),
                                [n, i] = o.useState(0);
                            return (0, t.jsxs)(aC.C.Provider, {
                                value: { ...a, reducedMotion: { ...a.reducedMotion, enabled: e } },
                                children: [
                                    (0, t.jsx)("div", {
                                        className: aS.QT,
                                        children: (0, t.jsxs)(D.B, {
                                            gap: 8,
                                            children: [
                                                (0, t.jsx)(eK.d, {
                                                    onChange: () => l((e) => !e),
                                                    label: "Force reduced motion",
                                                    checked: e,
                                                }),
                                                (0, t.jsx)(h.$, {
                                                    onClick: () => i((e) => e + 1),
                                                    text: "Reset animations",
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, t.jsx)(
                                        "div",
                                        {
                                            className: aS.Vg,
                                            children: ak.map((e) => {
                                                let { name: l, Component: a } = e;
                                                return (0, t.jsxs)(
                                                    "div",
                                                    {
                                                        className: aS.Hn,
                                                        children: [
                                                            (0, t.jsx)("div", {
                                                                className: aS.k$,
                                                                children: (0, t.jsx)(a, {
                                                                    style: { width: "100%", height: "100%" },
                                                                }),
                                                            }),
                                                            (0, t.jsx)(eH.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-subtle",
                                                                className: aS.Pf,
                                                                children: l,
                                                            }),
                                                        ],
                                                    },
                                                    l,
                                                );
                                            }),
                                        },
                                        n,
                                    ),
                                ],
                            });
                        },
                    },
                ],
            },
        ],
    },
    a0 = { collections: [aJ, ef] };
