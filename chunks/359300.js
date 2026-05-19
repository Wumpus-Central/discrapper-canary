a.r(l), a.d(l, { manaCollection: () => aV, playgroundConfig: () => aC });
var t = a(627968),
    o = a(64700),
    i = a(17928),
    n = a(287809),
    s = a(97808),
    r = a(818348),
    d = a(778712);
let u = {
    id: "avatar",
    name: "Avatar",
    component: function (e) {
        let { size: l = d._3.SIZE_48, status: a, isVR: o = !1, isMobile: r = !1 } = e,
            { user: u } = (0, i.cf)([n.default], () => ({ user: n.default.getCurrentUser() })),
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
var c = a(27192),
    b = a(331322),
    p = a(834730),
    m = a(821609);
let x = {
    id: "void-checkbox",
    name: "Checkbox",
    component: function (e) {
        let { disabled: l, readOnly: a, displayOnly: i, type: n, size: s, align: r, shape: d, label: u } = e,
            [x, h] = o.useState(!1),
            y = o.useCallback((e, l) => {
                h(l);
            }, []),
            v = o.useCallback(() => {
                h(!0);
            }, []),
            g = o.useCallback(() => {
                h(!1);
            }, []),
            f = o.useCallback(() => {
                h((e) => !e);
            }, []);
        return (0, t.jsxs)(b.B, {
            direction: "vertical",
            gap: "md",
            children: [
                (0, t.jsx)(c.Kj, {
                    "data-migration-pending": !0,
                    value: x,
                    onChange: y,
                    disabled: l,
                    readOnly: a,
                    displayOnly: i,
                    type: n,
                    size: s,
                    align: r,
                    shape: d,
                    children: (0, t.jsx)(p.E, { variant: "text-md/normal", children: u }),
                }),
                (0, t.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    children: ["Current state: ", x ? "Checked" : "Unchecked"],
                }),
                (0, t.jsxs)(b.B, {
                    direction: "horizontal",
                    gap: "sm",
                    children: [
                        (0, t.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Check",
                            onClick: v,
                            disabled: l || a,
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Uncheck",
                            onClick: g,
                            disabled: l || a,
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Toggle",
                            onClick: f,
                            disabled: l || a,
                        }),
                    ],
                }),
            ],
        });
    },
    controls: {
        label: { type: "text", label: "Label", defaultValue: "Accept terms and conditions" },
        disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
        readOnly: { type: "boolean", label: "Read Only", defaultValue: !1 },
        displayOnly: { type: "boolean", label: "Display Only", defaultValue: !1 },
        type: {
            type: "select",
            label: "Type",
            defaultValue: c.Or.DEFAULT,
            options: [
                { label: "Default", value: c.Or.DEFAULT },
                { label: "Inverted", value: c.Or.INVERTED },
                { label: "Ghost", value: c.Or.GHOST },
                { label: "Row", value: c.Or.ROW },
            ],
        },
        size: { type: "number", label: "Size", defaultValue: 24 },
        align: {
            type: "select",
            label: "Alignment",
            defaultValue: c.zI.CENTER,
            options: [
                { label: "Center", value: c.zI.CENTER },
                { label: "Top", value: c.zI.TOP },
            ],
        },
        shape: {
            type: "select",
            label: "Shape",
            defaultValue: c.DO.BOX,
            options: [
                { label: "Box", value: c.DO.BOX },
                { label: "Small Box", value: c.DO.SMALL_BOX },
                { label: "Round", value: c.DO.ROUND },
            ],
        },
    },
};
var h = a(503698),
    y = a.n(h),
    v = a(489215);
let g = {
    blurpleLight: "blurple-light",
    blurpleMedium: "blurple-medium",
    blurpleDark: "blurple-dark",
    purpleLight: "purple-light",
    purpleMedium: "purple-medium",
    purpleDark: "purple-dark",
    greenLight: "green-light",
    greenMedium: "green-medium",
    greenDark: "green-dark",
    orangeLight: "orange-light",
    orangeMedium: "orange-medium",
    orangeDark: "orange-dark",
    yellowLight: "yellow-light",
    yellowMedium: "yellow-medium",
    yellowDark: "yellow-dark",
    pinkLight: "pink-light",
    pinkMedium: "pink-medium",
    pinkDark: "pink-dark",
    redLight: "red-light",
    redMedium: "red-medium",
    redDark: "red-dark",
    grayLight: "gray-light",
    grayMedium: "gray-medium",
    grayDark: "gray-dark",
};
function f(e) {
    let { text: l, variant: a = "grayLight" } = e,
        o = g[a];
    return (0, t.jsx)(p.E, { variant: "eyebrow", className: y()(v.chip, v[o]), children: l });
}
var V = a(759146);
let C = ["blurple", "purple", "green", "orange", "yellow", "pink", "red", "gray"],
    j = ["Light", "Medium", "Dark"],
    S = {
        title: "Chip",
        stories: [
            {
                name: "Chip",
                id: "chip",
                component: f,
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
            {
                name: "All Variants",
                id: "chip-all-variants",
                component: function () {
                    return (0, t.jsx)("div", {
                        className: V.lx,
                        children: j.map((e) =>
                            (0, t.jsxs)(
                                "div",
                                {
                                    className: V.uW,
                                    children: [
                                        (0, t.jsx)("h3", { className: V.Gf, children: e }),
                                        (0, t.jsx)("div", {
                                            className: V.f2,
                                            children: C.map((l) => {
                                                let a = `${l}${e}`;
                                                return (0, t.jsx)(f, { text: l, variant: a }, a);
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
    };
var k = a(359778),
    w = a(235986),
    T = a(244367),
    M = a(742158),
    D = a(743513);
k.Z.Types;
function E(e) {
    let l,
        a,
        {
            type: o = k.Z.Types.DANGER,
            imageData: i,
            button: n,
            className: s,
            iconClassName: r,
            title: d,
            body: u,
            style: c,
            align: b = w.A.Align.START,
        } = e,
        p = w.A.Direction.HORIZONTAL;
    if (null != i) {
        let { position: e, ...a } = i;
        (l = (0, t.jsx)(w.A.Child, {
            grow: 0,
            shrink: 0,
            children: (0, t.jsx)("img", { alt: "", className: y()(D.Kk, r), ...a }),
        })),
            "right" === e && (p = w.A.Direction.HORIZONTAL_REVERSE);
    } else null != n && (a = n);
    let m = !0;
    return (
        o === k.Z.Types.PRIMARY && (m = !1),
        (0, t.jsx)(k.Z, {
            className: y()(D.RJ, s),
            type: o,
            style: c,
            children: (0, t.jsxs)(w.A, {
                direction: p,
                align: b,
                children: [
                    l,
                    (0, t.jsxs)(w.A.Child, {
                        children: [
                            null != d && "" !== d
                                ? (0, t.jsx)(M.z, {
                                      "data-migration-pending": !0,
                                      className: y()(D.$G, { [D.vV]: m }),
                                      children: d,
                                  })
                                : null,
                            (0, t.jsx)(T.a, {
                                "data-migration-pending": !0,
                                className: y()(D.Vz, { [D.vV]: m }),
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
E.Types = k.Z.Types;
let N = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: l, title: a, body: o, hasButton: i } = e,
                    n = i ? (0, t.jsx)(m.$, { text: "Action" }) : void 0;
                return (0, t.jsx)(E, { "data-migration-pending": !0, type: l, title: a, body: o, button: n });
            },
            controls: {
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: k.Z.Types.DANGER,
                    options: [
                        { label: "Primary", value: k.Z.Types.PRIMARY },
                        { label: "Danger", value: k.Z.Types.DANGER },
                        { label: "Warning", value: k.Z.Types.WARNING },
                        { label: "Success", value: k.Z.Types.SUCCESS },
                        { label: "Brand", value: k.Z.Types.BRAND },
                        { label: "Custom", value: k.Z.Types.CUSTOM },
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
                let { children: l, disabled: a, required: o, errorMessage: i } = e,
                    n = i?.trim() === "" ? void 0 : i;
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
                                    (0, t.jsx)(M.z, {
                                        "data-migration-pending": !0,
                                        tag: e,
                                        disabled: a,
                                        required: o,
                                        error: n,
                                        errorId: null != n ? `error-id-${e}` : void 0,
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
var L = a(452027),
    A = a(512950),
    R = a(980707),
    I = a(477782),
    O = a(22231),
    P = a(366605),
    B = a(624479),
    z = a(625903),
    F = a(509434),
    $ = a(241326),
    G = a(922016),
    _ = a(159402);
let q = {
    title: "Menu",
    stories: [
        {
            name: "Menu",
            id: "menu",
            component: function (e) {
                let {
                        variant: l,
                        hideScroller: a,
                        showGroups: i,
                        showCheckboxItems: n,
                        showRadioItems: s,
                        showSwitchItems: r,
                        showSubmenus: d,
                        showIcons: u,
                        showShortcuts: c,
                        showSubtext: b,
                        showDisabledItems: p,
                        showColoredItems: x,
                        showLoading: h,
                        showTrailingIndicator: y,
                        dangerItemColor: v,
                    } = e,
                    [g, f] = o.useState(!0),
                    [V, C] = o.useState(!1),
                    [j, S] = o.useState("text"),
                    [k, w] = o.useState("cozy"),
                    [T, M] = o.useState(!0),
                    D = o.useRef(null);
                return (0, t.jsxs)("div", {
                    className: _.k,
                    children: [
                        !T && (0, t.jsx)(m.$, { text: "Open Menu", onClick: () => M(!0) }),
                        (0, t.jsx)(G.Y, {
                            renderPopout: (e) => {
                                let { closePopout: o } = e;
                                return (0, t.jsxs)(R.W, {
                                    "data-menu-migrated": !0,
                                    navId: "menu-story",
                                    "aria-label": "Story Menu",
                                    variant: l,
                                    hideScroller: a,
                                    onClose: o,
                                    onSelect: () => {},
                                    children: [
                                        (0, t.jsx)(I.Dr, {
                                            id: "edit",
                                            label: "Edit Message",
                                            icon: u ? O.R : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: O.R } : void 0,
                                            shortcut: c ? "\u2318E" : void 0,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(I.Dr, {
                                            id: "pin",
                                            label: "Pin Message",
                                            icon: u ? P.t : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: P.t } : void 0,
                                            subtext: b ? "Pin this message to the channel" : void 0,
                                            badge: "beta",
                                            loading: h,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(I.Dr, {
                                            id: "copy",
                                            label: "Copy Message Link",
                                            icon: u ? B.T : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: B.T } : void 0,
                                            badge: "new",
                                            action: () => {},
                                        }),
                                        p &&
                                            (0, t.jsx)(I.Dr, {
                                                id: "disabled",
                                                label: "Disabled Item",
                                                icon: u ? z.Z : void 0,
                                                leadingAccessory: u ? { type: "icon", icon: z.Z } : void 0,
                                                disabled: !0,
                                                action: () => {},
                                            }),
                                        x &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsx)(I.Dr, {
                                                        id: "brand-item",
                                                        label: "Brand Item",
                                                        color: "brand",
                                                        trailingIndicator: y ? { type: "icon", icon: F.I } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(I.Dr, {
                                                        id: "premium-item",
                                                        label: "Premium Item",
                                                        color: "premium",
                                                        icon: u ? z.Z : void 0,
                                                        leadingAccessory: u ? { type: "icon", icon: z.Z } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(I.Dr, {
                                                        id: "success-item",
                                                        label: "Success Item",
                                                        color: "success",
                                                        icon: u ? z.Z : void 0,
                                                        leadingAccessory: u ? { type: "icon", icon: z.Z } : void 0,
                                                        action: () => {},
                                                    }),
                                                ],
                                            }),
                                        d &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsxs)(I.Dr, {
                                                        id: "submenu",
                                                        label: "More Options",
                                                        icon: u ? z.Z : void 0,
                                                        children: [
                                                            (0, t.jsx)(I.Dr, {
                                                                id: "submenu-1",
                                                                label: "Submenu Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(I.Dr, {
                                                                id: "submenu-2",
                                                                label: "Submenu Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(I.Dr, {
                                                                id: "submenu-3",
                                                                label: "Submenu Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        n &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsx)(I.sL, {
                                                        id: "notifications",
                                                        label: "Enable Notifications Enable Notifications Enable Notifications",
                                                        checked: g,
                                                        action: () => f(!g),
                                                    }),
                                                    (0, t.jsx)(I.sL, {
                                                        id: "mute",
                                                        label: "Mute Channel",
                                                        checked: V,
                                                        action: () => C(!V),
                                                    }),
                                                ],
                                            }),
                                        r &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsx)(I.fP, {
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
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsxs)(I.rX, {
                                                        label: "Channel Type",
                                                        children: [
                                                            (0, t.jsx)(I.iD, {
                                                                id: "radio-text",
                                                                group: "channel-type",
                                                                label: "Text Channel Text Channel Text Channel Text Channel Text Channel Text Channel ",
                                                                checked: "text" === j,
                                                                action: () => S("text"),
                                                            }),
                                                            (0, t.jsx)(I.iD, {
                                                                id: "radio-voice",
                                                                group: "channel-type",
                                                                label: "Voice Channel",
                                                                checked: "voice" === j,
                                                                action: () => S("voice"),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsxs)(I.rX, {
                                                        label: "View Mode",
                                                        children: [
                                                            (0, t.jsx)(I.iD, {
                                                                id: "radio-cozy",
                                                                group: "view-mode",
                                                                label: "Cozy",
                                                                checked: "cozy" === k,
                                                                action: () => w("cozy"),
                                                            }),
                                                            (0, t.jsx)(I.iD, {
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
                                        i &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsxs)(I.rX, {
                                                        label: "Grouped Items",
                                                        children: [
                                                            (0, t.jsx)(I.Dr, {
                                                                id: "group-1",
                                                                label: "Group Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(I.Dr, {
                                                                id: "group-2",
                                                                label: "Group Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, t.jsx)(I.Dr, {
                                                                id: "group-3",
                                                                label: "Group Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        (0, t.jsx)(I.bX, {}),
                                        (0, t.jsx)(I.Dr, {
                                            id: "delete",
                                            label: "Delete Message",
                                            color: v,
                                            icon: u ? $.u : void 0,
                                            action: () => {},
                                        }),
                                    ],
                                });
                            },
                            position: "bottom",
                            align: "center",
                            shouldShow: !0,
                            targetElementRef: D,
                            onRequestClose: () => M(!1),
                            children: () =>
                                (0, t.jsx)("div", {
                                    ref: D,
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
var H = a(417098);
let X = {
    title: "Notice",
    stories: [
        {
            id: "notice",
            name: "Notice",
            component: function (e) {
                let { color: l, message: a } = e,
                    o = {
                        BRAND: H.Hv.BRAND,
                        INFO: H.Hv.INFO,
                        WARNING: H.Hv.WARNING,
                        DANGER: H.Hv.DANGER,
                        DEFAULT: H.Hv.DEFAULT,
                        NEUTRAL: H.Hv.NEUTRAL,
                    };
                return (0, t.jsx)(H.$T, { color: o[l], children: a });
            },
            controls: {
                color: {
                    type: "select",
                    label: "Color",
                    defaultValue: "BRAND",
                    options: [
                        { label: "Brand", value: "BRAND" },
                        { label: "Info", value: "INFO" },
                        { label: "Warning", value: "WARNING" },
                        { label: "Danger", value: "DANGER" },
                        { label: "Default", value: "DEFAULT" },
                        { label: "Neutral", value: "NEUTRAL" },
                    ],
                },
                message: {
                    type: "text",
                    label: "Message",
                    defaultValue: "This is a notice message with important information.",
                },
            },
        },
    ],
};
var U = a(933832),
    W = a(176781),
    Z = a(173936),
    Y = a(972213),
    K = a(785007);
let Q = {
    title: "VoidRadioGroup",
    stories: [
        {
            id: "voidradiogroup",
            name: "VoidRadioGroup",
            component: function (e) {
                let {
                        optionCount: l,
                        size: a,
                        disabled: i,
                        orientation: n,
                        radioPosition: s,
                        withTransparentBackground: r,
                        label: d,
                        description: u,
                        withDescriptions: c,
                        withIcons: b,
                    } = e,
                    [p, m] = o.useState("option1"),
                    x = [U.A, W.x, Z.q, z.Z, Y.d],
                    h = Array.from({ length: l }, (e, l) => ({
                        value: `option${l + 1}`,
                        name: `Option ${l + 1}`,
                        description: c ? `This is a description for option ${l + 1}` : void 0,
                        icon: b ? x[l % x.length] : void 0,
                    }));
                return (0, t.jsx)(K.$d, {
                    "data-migration-pending": !0,
                    value: p,
                    onChange: (e) => {
                        let { value: l } = e;
                        return m(l);
                    },
                    options: h,
                    size: a,
                    disabled: i,
                    orientation: n,
                    radioPosition: s,
                    withTransparentBackground: r,
                    label: d,
                    description: u,
                });
            },
            controls: {
                optionCount: {
                    type: "select",
                    label: "Number of Options",
                    defaultValue: 3,
                    options: [
                        { label: "2 Options", value: 2 },
                        { label: "3 Options", value: 3 },
                        { label: "4 Options", value: 4 },
                        { label: "5 Options", value: 5 },
                        { label: "6 Options", value: 6 },
                    ],
                },
                withDescriptions: { type: "boolean", label: "Show Descriptions", defaultValue: !0 },
                withIcons: { type: "boolean", label: "Show Icons", defaultValue: !0 },
                size: {
                    type: "select",
                    label: "Size",
                    defaultValue: "medium",
                    options: [
                        { label: "Small", value: "small" },
                        { label: "Medium", value: "medium" },
                        { label: "Large", value: "large" },
                    ],
                },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                orientation: {
                    type: "select",
                    label: "Orientation",
                    defaultValue: "vertical",
                    options: [
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Vertical", value: "vertical" },
                    ],
                },
                radioPosition: {
                    type: "select",
                    label: "Radio Position",
                    defaultValue: "left",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
                withTransparentBackground: { type: "boolean", label: "With Transparent Background", defaultValue: !1 },
                label: { type: "text", label: "Label", defaultValue: "Radio Group" },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is a description for the radio group",
                },
            },
        },
    ],
};
var J = a(106236);
let ee = {
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
                        markerCount: i,
                        stickToMarkers: n,
                        disabled: s,
                        equidistant: r,
                        label: d,
                        description: u,
                    } = e,
                    c = i > 0 ? Array.from({ length: i }, (e, t) => Math.floor(l + (t / (i - 1)) * (a - l))) : void 0;
                return (0, t.jsx)(
                    J.A,
                    {
                        label: d,
                        description: u,
                        layout: "horizontal-responsive",
                        minValue: l,
                        maxValue: a,
                        initialValue: o,
                        markers: c,
                        stickToMarkers: n,
                        disabled: s,
                        equidistant: r,
                    },
                    i,
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
var el = a(395515);
let ea = {
    title: "VoidSwitch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let [l, a] = o.useState(!1);
                return (0, t.jsx)(el.T, { "data-migration-pending": !0, ...e, onChange: a, checked: l });
            },
            controls: {
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                label: { type: "text", label: "Label", defaultValue: "Switch Label" },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is the description for the switch",
                },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
            },
        },
    ],
};
var et = a(761508);
let eo = {
    title: "TabBar",
    stories: [
        {
            id: "tabbar",
            name: "TabBar",
            component: function (e) {
                let { look: l, type: a, tabCount: i } = e,
                    [n, s] = o.useState("tab1"),
                    r = Array.from({ length: i }, (e, l) => ({ id: `tab${l + 1}`, name: `Tab ${l + 1}` }));
                return (0, t.jsx)(et.V, {
                    type: a,
                    look: l,
                    selectedItem: n,
                    onItemSelect: s,
                    children: r.map((e) => (0, t.jsx)(et.V.Item, { id: e.id, children: e.name }, e.id)),
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
var ei = a(444550),
    en = a(843282);
let es = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
    ],
    er = {
        id: "select",
        name: "Select",
        component: function (e) {
            let {
                    label: l,
                    description: a,
                    isDisabled: i,
                    isProcessing: n,
                    placeholder: s,
                    maxVisibleItems: r,
                    clearable: d,
                    closeOnSelect: u,
                    popoutPosition: c,
                    variant: b,
                } = e,
                [p, m] = o.useState("blue");
            return (0, t.jsx)(en.Te, {
                variant: b,
                label: l,
                description: a,
                value: p,
                onChange: m,
                options: es,
                placeholder: s,
                isDisabled: i,
                isProcessing: n,
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
    ed = {
        id: "searchable-select",
        name: "Searchable Select",
        component: function (e) {
            let {
                    placeholder: l,
                    isDisabled: a,
                    isProcessing: i,
                    clearable: n,
                    closeOnSelect: s,
                    clearQueryOnSelect: r,
                    filter: d,
                    ...u
                } = e,
                [c, p] = o.useState("blue"),
                [m, x] = o.useState(["blue"]);
            return (0, t.jsxs)(b.B, {
                gap: 24,
                children: [
                    (0, t.jsx)(ei.p, {
                        ...u,
                        value: c,
                        onChange: p,
                        options: es,
                        placeholder: l,
                        isDisabled: a,
                        isProcessing: i,
                        clearable: n,
                        clearQueryOnSelect: r,
                        filter: d,
                    }),
                    (0, t.jsx)(ei.p, {
                        ...u,
                        multi: !0,
                        value: m,
                        onChange: x,
                        options: es,
                        placeholder: l,
                        isDisabled: a,
                        isProcessing: i,
                        clearable: n,
                        closeOnSelect: s,
                        clearQueryOnSelect: r,
                        filter: d,
                    }),
                ],
            });
        },
        controls: {
            ...er.controls,
            placeholder: { type: "text", label: "Placeholder", defaultValue: "Search for a color" },
            isDisabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
            isProcessing: { type: "boolean", label: "Processing", defaultValue: !1 },
            clearable: { type: "boolean", label: "Clearable", defaultValue: !0 },
            closeOnSelect: { type: "boolean", label: "Close On Select", defaultValue: !0 },
            clearQueryOnSelect: { type: "boolean", label: "Clear Query On Select", defaultValue: !1 },
            filter: { type: "boolean", label: "Filter", defaultValue: !0 },
        },
    };
var eu = a(582306),
    ec = a(292666),
    eb = a(666944);
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
        id: "void",
        name: "Void",
        groups: [
            {
                title: "HelpMessage",
                stories: [
                    {
                        name: "HelpMessage",
                        id: "help-message",
                        component: function (e) {
                            let { text: l } = e;
                            return (0, t.jsx)(b.B, {
                                gap: 16,
                                children: Object.values(A.Y).map((e) =>
                                    (0, t.jsx)(
                                        L.D,
                                        { label: e, children: (0, t.jsx)(A.p, { messageType: e, children: l }, e) },
                                        e,
                                    ),
                                ),
                            });
                        },
                        controls: { text: { label: "Text", type: "text", defaultValue: "This is a help message" } },
                    },
                ],
            },
            { title: "Select", stories: [er, ed] },
            { title: "Checkbox", stories: [x] },
            ea,
            Q,
            ee,
            eo,
            { title: "Avatar", stories: [u] },
            S,
            X,
            {
                title: "VoidInputs",
                stories: [
                    {
                        name: "VoidInputs",
                        id: "void-inputs",
                        component: function (e) {
                            let { disabled: l, placeholder: a } = e,
                                [i, n] = o.useState(void 0),
                                [s, r] = o.useState(void 0),
                                [d, u] = o.useState(void 0);
                            return (0, t.jsxs)(b.B, {
                                gap: 8,
                                children: [
                                    (0, t.jsx)(en.Te, {
                                        value: i,
                                        onChange: n,
                                        options: ep,
                                        placeholder: a,
                                        isDisabled: l,
                                    }),
                                    (0, t.jsx)(ec.k, { placeholder: a, disabled: l }),
                                    (0, t.jsx)(ei.p, {
                                        value: i,
                                        onChange: n,
                                        options: ep,
                                        placeholder: a,
                                        isDisabled: l,
                                    }),
                                    (0, t.jsx)(eu.J, { onSelect: r, value: s, disabled: l }),
                                    (0, t.jsx)(eb.c, { onChange: u, value: d, disabled: l }),
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
            N,
            q,
        ],
    };
var ex = a(27232),
    eh = a(825860),
    ey = a(175841),
    ev = a(406810),
    eg = a(260981),
    ef = a(540418),
    eV = a(907085),
    eC = a(179820),
    ej = a(508770);
let eS = {
        none: void 0,
        StarIcon: ex.G,
        FireIcon: eh.Y,
        SparklesIcon: ey.B,
        ClockIcon: ev.O,
        ExperimentalCommonIcon: eg.p,
        ExperimentalRareIcon: ef.A,
        ExperimentalEpicIcon: eV.b,
        ExperimentalMythicIcon: eC.O,
    },
    ek = {
        title: "Badge",
        stories: [
            {
                name: "Badge",
                id: "badge",
                component: function (e) {
                    let { type: l, customText: a, variant: o, iconName: i } = e,
                        n = null != i && "" !== i && "none" !== i ? eS[i] : void 0;
                    return (0, t.jsx)(ej.E, {
                        type: "custom" === l && null != a && "" !== a ? { text: a } : l,
                        variant: o,
                        icon: n,
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
var ew = a(408278),
    eT = a(123292),
    eM = a(825484),
    eD = a(111159);
let eE = {
    title: "Buttons",
    stories: [
        {
            name: "Button",
            id: "button",
            component: m.$,
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
                return (0, t.jsx)(ew.K, { ...e, icon: eD.p, "aria-label": "Clyde" });
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
            name: "TextButton",
            id: "text-button",
            docs: "https://design.discord.tools/components/web/buttons/text-button",
            component: eT.Q,
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
                return (0, t.jsxs)(eM.e, {
                    ...e,
                    children: [
                        (0, t.jsx)(m.$, { variant: "secondary", text: "Cancel" }),
                        (0, t.jsx)(m.$, { variant: "primary", text: "Submit" }),
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
var eN = a(939546),
    eL = a(928231),
    eA = a(822986),
    eR = a(577684),
    eI = a(493108),
    eO = a(921853),
    eP = a(320448),
    eB = a(460890),
    ez = a(195529);
function eF(e) {
    let { offset: l, monthLabel: a, isRangeSelection: o = !1 } = e;
    return (0, t.jsxs)("div", {
        className: ez.F4,
        children: [
            null != a && (0, t.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: a }),
            (0, t.jsxs)(eR.r8, {
                offset: l,
                className: ez.ZP,
                weekdayStyle: "short",
                children: [
                    (0, t.jsx)(eR.co, {
                        children: (e) =>
                            (0, t.jsx)(eR.W$, {
                                className: ez.e4,
                                children: (0, t.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: e,
                                }),
                            }),
                    }),
                    (0, t.jsx)(eR.Xq, {
                        children: (e) =>
                            (0, t.jsx)(eR.Zr, {
                                date: e,
                                className: y()(ez.Hn, o && ez.KK),
                                children: (e) => {
                                    let { formattedDate: l } = e;
                                    return (0, t.jsx)("span", {
                                        className: ez.AY,
                                        children: (0, t.jsx)(p.E, {
                                            variant: "text-md/normal",
                                            color: "currentColor",
                                            children: l,
                                        }),
                                    });
                                },
                            }),
                    }),
                ],
            }),
        ],
    });
}
function e$(e) {
    let {
            value: l,
            onChange: a,
            minValue: i,
            maxValue: n,
            disabled: s = !1,
            readOnly: r = !1,
            className: d,
            "aria-label": u,
        } = e,
        { i18n: c } = (0, eB.G9)(),
        [b, m] = o.useState(l);
    return (
        o.useEffect(() => {
            m(l);
        }, [l]),
        (0, t.jsx)(eR.Vv, {
            value: l,
            focusedValue: b,
            onFocusChange: m,
            onChange: a,
            minValue: i,
            maxValue: n,
            isDisabled: s,
            isReadOnly: r,
            "aria-label": u,
            "data-mana-component": "calendar",
            className: y()(ez.BJ, d),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: ez.I4,
                            children: [
                                (0, t.jsx)(ew.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: eO.n,
                                    "aria-label": c.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: ez.Wb,
                                    children: (0, t.jsx)(p.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: (0, t.jsx)(eI.D, {}),
                                    }),
                                }),
                                (0, t.jsx)(ew.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: eP._,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": c.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", { className: ez.US, children: (0, t.jsx)(eF, {}) }),
                    ],
                }),
        })
    );
}
var eG = a(683071);
let e_ = (0, a(240921).Ay)({
    kind: "user",
    name: "2025-10-mana-date-inputs",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function eq(e) {
    return e_.useConfig({ location: e }).enabled;
}
let eH = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: l, readOnly: a, showMinMax: i } = e,
                    [n, s] = o.useState((0, eN.Ec)((0, eN.Xj)())),
                    r = o.useCallback((e) => {
                        s(e);
                    }, []),
                    d = o.useCallback(() => {
                        s(null);
                    }, []),
                    u = o.useCallback(() => {
                        s((0, eN.Ec)((0, eN.Xj)()));
                    }, []),
                    c = o.useCallback(() => {
                        s((0, eL._U)("2024-12-25"));
                    }, []);
                return eq("CalendarStory")
                    ? (0, t.jsxs)(b.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(e$, {
                                  value: n,
                                  onChange: r,
                                  disabled: l,
                                  readOnly: a,
                                  minValue: i ? (0, eL._U)("2024-01-01") : void 0,
                                  maxValue: i ? (0, eL._U)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, t.jsxs)(p.E, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != n ? (0, eA.default)(n.toDate((0, eN.Xj)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, t.jsxs)(b.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: d,
                                          disabled: l || a,
                                      }),
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: u,
                                          disabled: l || a,
                                      }),
                                      (0, t.jsx)(m.$, {
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
                    : (0, t.jsxs)(eG.w, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " ",
                              "experiment. Do not use this in production yet.",
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
var eX = a(885574),
    eU = a(150934);
let eW = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: l, description: a, disabled: i, labelType: n, showIcons: s } = e,
                    [r, d] = o.useState(!1),
                    u = o.useCallback(() => {
                        d(!0);
                    }, []),
                    c = o.useCallback(() => {
                        d(!1);
                    }, []),
                    x = o.useCallback(() => {
                        d((e) => !e);
                    }, []);
                return (0, t.jsxs)(b.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(eU.S, {
                            checked: r,
                            onChange: (e) => d(e),
                            disabled: i,
                            label: l,
                            description: null != a || "" === a ? a : void 0,
                            value: "checkbox-value",
                            labelType: n,
                            leadingIcon: s ? eX.m : void 0,
                        }),
                        (0, t.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", r ? "Checked" : "Unchecked"],
                        }),
                        (0, t.jsxs)(b.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: u,
                                    disabled: i,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: c,
                                    disabled: i,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: x,
                                    disabled: i,
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
var eZ = a(167417);
let eY = {
    title: "CheckboxGroup",
    stories: [
        {
            id: "checkboxgroup",
            name: "CheckboxGroup",
            component: function (e) {
                let {
                        disabled: l,
                        optionCount: a,
                        label: i,
                        optionLabel: n,
                        description: s,
                        showIcons: r,
                        withMixedDisabledOptions: d,
                    } = e,
                    [u, c] = o.useState(["option1"]),
                    x = o.useMemo(
                        () =>
                            [
                                {
                                    label: null != n ? `${n} 1` : "Option 1",
                                    value: "option1",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? eX.m : void 0,
                                    disabled: !d && void 0,
                                },
                                {
                                    label: null != n ? `${n} 2` : "Option 2",
                                    value: "option2",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? eX.m : void 0,
                                    disabled: !!d || void 0,
                                },
                                {
                                    label: null != n ? `${n} 3` : "Option 3",
                                    value: "option3",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? eX.m : void 0,
                                    disabled: !d && void 0,
                                },
                                {
                                    label: null != n ? `${n} 4` : "Option 4",
                                    value: "option4",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? eX.m : void 0,
                                    disabled: !!d || void 0,
                                },
                                {
                                    label: null != n ? `${n} 5` : "Option 5",
                                    value: "option5",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? eX.m : void 0,
                                    disabled: !d && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, a))),
                        [a, n, s, r, d],
                    ),
                    h = o.useCallback((e) => {
                        c(e);
                    }, []),
                    y = o.useCallback(() => {
                        c(x.map((e) => e.value));
                    }, [x]),
                    v = o.useCallback(() => {
                        c([]);
                    }, []),
                    g = o.useCallback(() => {
                        x.length > 0 && c([x[0].value]);
                    }, [x]);
                return (0, t.jsxs)(b.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(eZ.$, { selectedValues: u, label: i, onChange: h, options: x, disabled: l }),
                        (0, t.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", u.length > 0 ? u.join(", ") : "None"],
                        }),
                        (0, t.jsxs)(b.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: y,
                                    disabled: l || 0 === x.length,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: g,
                                    disabled: l || 0 === x.length,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear All",
                                    onClick: v,
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
var eK = a(693321),
    eQ = a(770378),
    eJ = a(521767),
    e0 = a(817724),
    e1 = a(650682),
    e2 = a(987062),
    e3 = a(561392),
    e4 = a(716263),
    e6 = a(81466),
    e7 = a(862301),
    e5 = a(760345);
function e8(e) {
    let { value: l, onChange: a, minValue: o, maxValue: i, placeholderValue: n, granularity: s = "day", ...r } = e,
        { i18n: d } = (0, eB.G9)(),
        { fieldProps: u } = (0, L.n)(r),
        { disabled: c, errorMessage: b, required: p = !1 } = u,
        m = { hasError: null != b && "" !== b },
        {
            refs: x,
            floatingStyles: h,
            isOpen: v,
            setIsOpen: g,
            context: f,
            getFloatingProps: V,
            getReferenceProps: C,
        } = (0, e3.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: j, styles: S } = (0, e4.DL)(f, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        k = (e) => {
            a?.(e), g(!1);
        };
    return (0, t.jsx)(L.D, {
        ...u,
        children: (e) =>
            (0, t.jsx)(e7.F, {
                className: "minute" === s ? e5.XF : e5.LF,
                validation: m,
                ref: x.setReference,
                ...C(),
                children: (0, t.jsxs)(eQ.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: k,
                    isDisabled: c,
                    isRequired: p,
                    minValue: o,
                    maxValue: i,
                    placeholderValue: n,
                    granularity: s,
                    "data-mana-component": "date-picker",
                    className: e5.Nz,
                    children: [
                        (0, t.jsxs)(eJ.Y, {
                            className: e5.wO,
                            children: [
                                (0, t.jsx)(e0.J3, {
                                    children: (e) =>
                                        (0, t.jsx)(e0.Eu, {
                                            segment: e,
                                            className: y()(e5.mX, e.isPlaceholder && e5.qf),
                                        }),
                                }),
                                (0, t.jsx)(e1.$, {
                                    className: e5.B7,
                                    onClick: () => g(!v),
                                    "aria-label": d.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(e6.C, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        v &&
                            j &&
                            (0, t.jsx)("div", {
                                ...V(),
                                ref: x.setFloating,
                                style: h,
                                className: e5.oO,
                                children: (0, t.jsx)(eK.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(e2.lG, {
                                        "aria-label": d.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: S,
                                        className: e5.r3,
                                        children: (0, t.jsx)(e$, {
                                            value: l,
                                            onChange: k,
                                            minValue: o,
                                            maxValue: i,
                                            disabled: c,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
let e9 = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let { label: l, description: a, errorMessage: i, disabled: n, required: s, showMinMax: r } = e,
                    [d, u] = o.useState((0, eN.Ec)((0, eN.Xj)())),
                    c = o.useCallback((e) => {
                        u(e);
                    }, []),
                    p = o.useCallback(() => {
                        u(null);
                    }, []),
                    x = o.useCallback(() => {
                        u((0, eN.Ec)((0, eN.Xj)()));
                    }, []),
                    h = o.useCallback(() => {
                        u((0, eL._U)("2024-12-25"));
                    }, []);
                return eq("CalendarStory")
                    ? (0, t.jsxs)(b.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(e8, {
                                  label: l,
                                  description: "" !== a ? a : void 0,
                                  value: d,
                                  onChange: c,
                                  disabled: n,
                                  required: s,
                                  minValue: r ? (0, eL._U)("2024-01-01") : void 0,
                                  maxValue: r ? (0, eL._U)("2024-12-31") : void 0,
                                  errorMessage: "" !== i ? i : void 0,
                                  helperText: null != d ? (0, eA.default)(d.toDate((0, eN.Xj)()), "MMMM d, yyyy") : "",
                              }),
                              (0, t.jsxs)(b.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: p,
                                          disabled: n,
                                      }),
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: x,
                                          disabled: n,
                                      }),
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: h,
                                          disabled: n,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(eG.w, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " ",
                              "experiment. Do not use this in production yet.",
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
var le = a(668953),
    ll = a(881636);
function la(e) {
    let {
            value: l,
            onChange: a,
            minValue: i,
            maxValue: n,
            isDisabled: s = !1,
            isReadOnly: r = !1,
            visibleMonths: d = 1,
            className: u,
            "aria-label": c,
        } = e,
        { i18n: b, locale: m } = (0, eB.G9)(),
        x = l?.start ?? null,
        [h, v] = o.useState(x);
    return (
        o.useEffect(() => {
            v(x);
        }, [x]),
        (0, t.jsx)(eR._e, {
            value: l,
            focusedValue: h,
            onFocusChange: v,
            onChange: a,
            minValue: i,
            maxValue: n,
            isDisabled: s,
            isReadOnly: r,
            visibleDuration: { months: d },
            "aria-label": c,
            "data-mana-component": "range-calendar",
            className: y()(ez.BJ, d > 1 && ez.Q7, u),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: ez.I4,
                            children: [
                                (0, t.jsx)(ew.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: le.f,
                                    "aria-label": b.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: ez.Wb,
                                    "aria-live": "polite",
                                    children: Array.from({ length: d }, (l, a) => {
                                        let o = e.state.visibleRange.start
                                            .add({ months: a })
                                            .toDate(e.state.timeZone)
                                            .toLocaleDateString(m, { month: "long", year: "numeric" });
                                        return (0, t.jsx)(
                                            p.E,
                                            { variant: "text-md/medium", color: "text-strong", children: o },
                                            a,
                                        );
                                    }),
                                }),
                                (0, t.jsx)(ew.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: ll.u,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": b.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: ez.US,
                            children: Array.from({ length: d }, (e, l) =>
                                (0, t.jsx)(eF, { offset: { months: l }, isRangeSelection: !0 }, l),
                            ),
                        }),
                    ],
                }),
        })
    );
}
function lt(e) {
    let {
            value: l,
            onChange: a,
            minValue: o,
            maxValue: i,
            placeholderValue: n,
            startName: s,
            endName: r,
            fullWidth: d = !1,
            granularity: u = "day",
            ...c
        } = e,
        { i18n: b } = (0, eB.G9)(),
        { fieldProps: p } = (0, L.n)(c),
        { disabled: m, errorMessage: x, required: h = !1 } = p,
        v = { hasError: null != x && "" !== x },
        {
            refs: g,
            floatingStyles: f,
            isOpen: V,
            setIsOpen: C,
            context: j,
            getFloatingProps: S,
            getReferenceProps: k,
        } = (0, e3.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: w, styles: T } = (0, e4.DL)(j, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        M = (e) => {
            a(e), e?.start != null && e?.end != null && C(!1);
        };
    return (0, t.jsx)(L.D, {
        ...p,
        children: (e) =>
            (0, t.jsx)(e7.F, {
                className: d ? e5.e2 : "minute" === u ? e5.oU : e5.qX,
                validation: v,
                ref: g.setReference,
                ...k(),
                children: (0, t.jsxs)(eQ.Ur, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: M,
                    isDisabled: m,
                    isRequired: h,
                    minValue: o,
                    maxValue: i,
                    placeholderValue: n,
                    granularity: u,
                    startName: s,
                    endName: r,
                    "data-mana-component": "date-range-picker",
                    className: e5.Nz,
                    children: [
                        (0, t.jsxs)(eJ.Y, {
                            className: e5.wO,
                            children: [
                                (0, t.jsx)(e0.J3, {
                                    slot: "start",
                                    children: (e) =>
                                        (0, t.jsx)(e0.Eu, {
                                            segment: e,
                                            className: y()(e5.mX, e.isPlaceholder && e5.qf),
                                        }),
                                }),
                                (0, t.jsx)("span", { className: e5.me, "aria-hidden": "true", children: "\u2192" }),
                                (0, t.jsx)(e0.J3, {
                                    slot: "end",
                                    children: (e) =>
                                        (0, t.jsx)(e0.Eu, {
                                            segment: e,
                                            className: y()(e5.mX, e.isPlaceholder && e5.qf),
                                        }),
                                }),
                                (0, t.jsx)(e1.$, {
                                    className: e5.B7,
                                    onClick: () => C(!V),
                                    "aria-label": b.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(e6.C, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        V &&
                            w &&
                            (0, t.jsx)("div", {
                                ...S(),
                                ref: g.setFloating,
                                style: f,
                                className: e5.oO,
                                children: (0, t.jsx)(eK.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(e2.lG, {
                                        "aria-label": b.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: T,
                                        className: e5.r3,
                                        children: (0, t.jsx)(la, {
                                            value: l,
                                            onChange: M,
                                            minValue: o,
                                            maxValue: i,
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
let lo = {
    title: "DateRangePicker",
    stories: [
        {
            id: "date-range-picker",
            name: "DateRangePicker",
            component: function (e) {
                let { label: l, errorMessage: a, description: i, disabled: n, required: s, showMinMax: r } = e,
                    [d, u] = o.useState({
                        start: (0, eN.Ec)((0, eN.Xj)()),
                        end: (0, eN.Ec)((0, eN.Xj)()).add({ days: 7 }),
                    }),
                    c = o.useCallback((e) => {
                        u(e);
                    }, []),
                    p = o.useCallback(() => {
                        u(null);
                    }, []),
                    x = o.useCallback(() => {
                        let e = (0, eN.Ec)((0, eN.Xj)());
                        u({ start: e, end: e.add({ days: 7 }) });
                    }, []),
                    h = (0, eN.Ec)((0, eN.Xj)()),
                    y = r ? h.subtract({ weeks: 1 }) : void 0,
                    v = r ? h.add({ weeks: 2 }) : void 0;
                return eq("DateRangePickerStory")
                    ? (0, t.jsxs)(b.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(lt, {
                                  label: l,
                                  description: "" !== i ? i : void 0,
                                  value: d,
                                  onChange: c,
                                  disabled: n,
                                  required: s,
                                  errorMessage: "" !== a ? a : void 0,
                                  minValue: y,
                                  maxValue: v,
                                  helperText: (() => {
                                      if (null == d) return "";
                                      let e = (0, eA.default)(d.start.toDate((0, eN.Xj)()), "MMMM d, yyyy"),
                                          l = (0, eA.default)(d.end.toDate((0, eN.Xj)()), "MMMM d, yyyy");
                                      return `${e} \u{2013} ${l}`;
                                  })(),
                              }),
                              (0, t.jsxs)(b.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: p,
                                          disabled: n,
                                      }),
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "This Week",
                                          onClick: x,
                                          disabled: n,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(eG.w, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " ",
                              "experiment. Do not use this in production yet.",
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
var li = a(270003),
    ln = a(194261),
    ls = a(243721),
    lr = a(691885),
    ld = a(109802),
    lu = a(508274),
    lc = a(121830);
let lb = [
        { label: "Aardvark", value: "aardvark", id: "aardvark" },
        { label: "Cat", value: "cat", id: "cat" },
        { label: "Dog", value: "dog", id: "dog" },
    ],
    lp = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f, 0xe67e22, 0xe74c3c];
function lm(e) {
    let { title: l, children: a, auxiliaryContentPosition: o } = e;
    return (0, t.jsx)(L.D, {
        disabled: !0,
        label: l,
        description: "This row is disabled at the Field level and at the control level.",
        helperText:
            "Every leaf (label, description, helper text, control) should render at a single 0.5 opacity layer.",
        auxiliaryContentPosition: o,
        children: a,
    });
}
function lx(e) {
    let { auxiliaryContentPosition: l } = e;
    return (0, t.jsxs)(b.B, {
        direction: "vertical",
        gap: 24,
        children: [
            (0, t.jsx)(lm, {
                title: "Button",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(m.$, { text: "Remove", variant: "critical-primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(lm, {
                title: "TextButton",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(eT.Q, { text: "View details", variant: "primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(lm, {
                title: "Switch",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(ls.d, {
                    label: "Allow direct messages",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                }),
            }),
            (0, t.jsx)(lm, {
                title: "Checkbox",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(eU.S, {
                    label: "Accept terms",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                    value: "accept-terms",
                }),
            }),
            (0, t.jsx)(lm, {
                title: "InputField",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(e7.F, {
                    disabled: !0,
                    children: (0, t.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: "Inner InputField content",
                    }),
                }),
            }),
            (0, t.jsx)(lm, {
                title: "Select",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(lr.l, {
                    label: "Animal",
                    hideLabel: !0,
                    options: lb,
                    selectionMode: "single",
                    onSelectionChange: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(lm, {
                title: "CopyInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(ld.e, {
                    value: "https://discord.gg/disabled-example",
                    supportsCopy: !0,
                    onCopy: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(lm, {
                title: "ColorPicker",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(lu.sk, {
                    defaultColor: lp[0],
                    customColor: null,
                    colors: lp,
                    value: lp[0],
                    disabled: !0,
                    onChange: () => {},
                    renderDefaultButton: (e) => (0, t.jsx)(lu.fy, { ...e }),
                    renderCustomButton: (e) => (0, t.jsx)(lu.nJ, { ...e }),
                }),
            }),
            (0, t.jsx)(lm, {
                title: "TextInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(ec.k, {
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
let lh = {
    title: "Forms",
    stories: [
        {
            name: "FieldSet",
            id: "fieldset",
            component: function (e) {
                let { label: l } = e;
                return (0, t.jsx)("div", {
                    children: (0, t.jsxs)(li.n, {
                        label: "" === l ? void 0 : l,
                        children: [
                            (0, t.jsx)(ec.k, { label: "First Name" }),
                            (0, t.jsx)(ec.k, { label: "Last Name" }),
                            (0, t.jsx)(ec.k, { label: "Address" }),
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
                    children: (0, t.jsx)(L.D, {
                        ...a,
                        description: "" === l ? void 0 : l,
                        icon: a.showIcon ? ln.X : void 0,
                        children: (0, t.jsx)("div", {
                            className: lc.q,
                            children: (0, t.jsx)(p.E, {
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
                description: { type: "text", label: "Description", defaultValue: "This is the first name of the user" },
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
            component: lx,
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
                return (0, t.jsx)(lx, { auxiliaryContentPosition: "under-label" });
            },
        },
    ],
};
var ly = a(404778),
    lv = a(935063),
    lg = a(661531),
    lf = a(307301),
    lV = a(892547),
    lC = a(260598);
let lj = [
        { id: "strength", label: "Strength", icon: lv.X },
        { id: "wisdom", label: "Wisdom", icon: { type: "role", color: lg.A.unsafe_rawColors.BRAND_500.css } },
        { id: "charisma", label: "Charisma" },
        { id: "intelligence", label: "Intelligence" },
        { id: "dexterity", label: "Dexterity" },
        { id: "constitution", label: "Constitution" },
    ],
    lS = {
        title: "Input Components",
        stories: [
            {
                name: "TextInput",
                component: function (e) {
                    let { leading: l, trailing: a, ...i } = e,
                        [n, s] = o.useState(""),
                        [d, u] = o.useState(lj),
                        c = o.useCallback(
                            (e) => {
                                u(d.filter((l) => !e.has(l.id)));
                            },
                            [d],
                        );
                    return (0, t.jsxs)(b.B, {
                        gap: 16,
                        children: [
                            (0, t.jsx)(ec.k, {
                                ...i,
                                value: n,
                                onChange: s,
                                leading: (function (e) {
                                    switch (e) {
                                        case "tags":
                                            return { type: "tags", label: "Tags", items: d, onRemove: c };
                                        case "icon":
                                            return { icon: lv.X, onClick: r.tE, "aria-label": "At" };
                                        case "text":
                                            return "https://discord.gg/";
                                        default:
                                            return;
                                    }
                                })(l),
                                trailing: "icon" === a ? { icon: lf.j, onClick: r.tE, "aria-label": "At" } : void 0,
                                maxLength: 500,
                            }),
                            "tags" === l
                                ? (0, t.jsx)(m.$, {
                                      text: "Reset Tags",
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => u(lj),
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
                            { label: "Number", value: "number" },
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
                    return (0, t.jsx)(lV.I, {
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
                    return (0, t.jsx)(lC.f, { ...e, value: l, onChange: a });
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
                name: "Input Collection",
                id: "input-collection",
                component: function (e) {
                    let {
                            label: l,
                            hideLabel: a,
                            description: o,
                            required: i,
                            error: n,
                            disabled: s,
                            placeholder: d,
                            value: u = "",
                            readOnly: c,
                            helperText: p,
                            successMessage: m,
                            showCharacterCount: x,
                        } = e,
                        h = {
                            label: l,
                            hideLabel: a,
                            description: o,
                            required: i,
                            value: u,
                            error: n,
                            disabled: s,
                            placeholder: d,
                            readOnly: c,
                            helperText: p,
                            showCharacterCount: x,
                            successMessage: m,
                        };
                    return (0, t.jsxs)(b.B, {
                        gap: 24,
                        children: [
                            (0, t.jsxs)(li.n, {
                                label: "Text Input",
                                children: [
                                    (0, t.jsx)(ec.k, { ...h }),
                                    (0, t.jsx)(ec.k, { ...h, clearable: !0 }),
                                    (0, t.jsx)(ec.k, {
                                        ...h,
                                        leading: { icon: lv.X, onClick: r.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(ec.k, { ...h, leading: lv.X }),
                                    (0, t.jsx)(ec.k, { ...h, leading: "https://discord.gg/" }),
                                    (0, t.jsx)(ec.k, {
                                        ...h,
                                        trailing: { icon: lv.X, onClick: r.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(ec.k, { ...h, trailing: lv.X }),
                                    (0, t.jsx)(ec.k, {
                                        ...h,
                                        leading: { type: "tags", label: "Tags", items: lj.slice(0, 3) },
                                    }),
                                ],
                            }),
                            (0, t.jsx)(ly.c, {}),
                            (0, t.jsxs)(li.n, {
                                label: "Search Bar",
                                children: [
                                    (0, t.jsx)(lV.I, { query: u, onChange: r.tE, disabled: s, placeholder: d }),
                                    (0, t.jsx)(lV.I, {
                                        query: u,
                                        onChange: r.tE,
                                        size: "sm",
                                        disabled: s,
                                        placeholder: d,
                                    }),
                                ],
                            }),
                            (0, t.jsx)(ly.c, {}),
                            (0, t.jsx)(li.n, { label: "Text Area", children: (0, t.jsx)(lC.f, { ...h }) }),
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
var lk = a(102079),
    lw = a(224640),
    lT = a(430993),
    lM = a(276293),
    lD = a(189213),
    lE = a(772707),
    lN = a(347704),
    lL = a(116833),
    lA = a(521489),
    lR = a(192308),
    lI = a(783878),
    lO = a(314116);
let lP = "/assets/f66ae7bb8510ab4f.svg";
function lB() {
    return (0, t.jsx)(p.E, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "Lost access to your radness? Talk to your radness provider to refresh your aura.",
    });
}
function lz(e) {
    let { setIsSafetyAccepted: l, setIsHelmetSelected: a } = e,
        [i, n] = o.useState([]),
        s = [
            { label: "I am wearing a helmet", value: "helmet" },
            { label: "I know where to find my personal flotation device", value: "pfd" },
            { label: "I completed the safety training", value: "training" },
        ];
    return (
        o.useEffect(() => {
            l(i.length === s.length), a(i.includes("helmet"));
        }, [i, s.length, l, a]),
        (0, t.jsx)(eZ.$, { label: "Safety checklist", options: s, selectedValues: i, onChange: n })
    );
}
function lF(e) {
    let { setIsPasscodeValid: l } = e,
        [a, i] = o.useState("");
    return (0, t.jsx)(ec.k, {
        placeholder: "Enter your passcode...",
        value: a,
        onChange: (e) => {
            i(e), l(e.length > 0);
        },
    });
}
function l$(e) {
    let {
            callbackDelay: l,
            failOnNext: a,
            failOnComplete: i,
            onCompleteAlert: n,
            onNextAlert: s,
            customErrorNotice: r,
            errorNoticeType: d,
            ...u
        } = e,
        [c, b] = o.useState("intro"),
        [p, m] = o.useState(!1),
        [x, h] = o.useState(!1),
        [y, v] = o.useState(!1),
        [g, f] = o.useState(null),
        V = o.useCallback(async () => {
            if (
                (f(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                s && alert("onNext callback fired"),
                a)
            ) {
                if ("" !== r.trim()) return f({ message: r, type: d }), !1;
                throw Error("onNext failed");
            }
            return !0;
        }, [l, a, s, r, d]),
        C = o.useCallback(async () => {
            if (
                (f(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                n && alert("onComplete callback fired"),
                i)
            ) {
                if ("" !== r.trim()) throw (f({ message: r, type: d }), Error("Custom error"));
                throw Error("onComplete failed");
            }
        }, [l, i, n, r, d]),
        j = [
            {
                stepKey: "intro",
                modalProps: {
                    title: "Verify radness",
                    subtitle: "To verify your radness, we need to ask you a few deep and personal questions.",
                    notice: null != g ? { message: g.message, type: g.type } : void 0,
                },
                body: (0, t.jsx)(lB, {}),
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
                            : y
                              ? {
                                    message: "Great job, helmets are important for protecting your brain!",
                                    type: "warning",
                                }
                              : void 0,
                },
                body: (0, t.jsx)(lz, { setIsSafetyAccepted: m, setIsHelmetSelected: v }),
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
                body: (0, t.jsx)(lF, { setIsPasscodeValid: h }),
                nextButtonProps: { text: "Verify passcode" },
                nextEnabled: x,
            },
        ],
        S = j.slice(1).map((e) => e.stepKey);
    return (0, t.jsx)(lN.t, { steps: j, currentStepKey: c, numberedSteps: S, onStepChange: b, onComplete: C, ...u });
}
let lG = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                let { showPreview: l, showInput: a, subtitleIcon: o, ...i } = e,
                    n = o ? { text: i.subtitle ?? "Default subtitle", leadingIcon: lM.N } : i.subtitle;
                return (0, t.jsxs)(b.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the modal",
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "primary",
                            text: "Open Modal",
                            onClick: () =>
                                (0, lR.openModal)(
                                    (e) =>
                                        (0, t.jsx)(lD.Modal, {
                                            ...e,
                                            ...i,
                                            title: i.title,
                                            subtitle: n,
                                            input: a
                                                ? (0, t.jsx)(lV.I, {
                                                      placeholder: "Search...",
                                                      onChange: () => {},
                                                      query: "",
                                                  })
                                                : void 0,
                                            preview: l
                                                ? (0, t.jsxs)(b.B, {
                                                      gap: 8,
                                                      children: [
                                                          (0, t.jsx)(p.E, {
                                                              variant: "text-lg/semibold",
                                                              children: "Preview Content",
                                                          }),
                                                          (0, t.jsx)(p.E, {
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
                                            children: (0, t.jsxs)(b.B, {
                                                gap: 16,
                                                children: [
                                                    (0, t.jsx)(lI.Z, {
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
                                                    (0, t.jsx)(ec.k, {
                                                        label: "Example Input",
                                                        placeholder: "Enter some text...",
                                                    }),
                                                    (0, t.jsx)(p.E, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "This is the main content area of the modal. You can place any content here.",
                                                    }),
                                                ],
                                            }),
                                        }),
                                    { dismissable: i.dismissable },
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
                let { cancelText: l, confirmDelay: a, confirmError: i, subtitle: n, formatSubtitle: s, ...r } = e,
                    d = o.useMemo(
                        () =>
                            s
                                ? (function (e) {
                                      let l,
                                          a = [],
                                          o = 0,
                                          i = /\*\*(.+?)\*\*/g,
                                          n = 0;
                                      for (; null !== (l = i.exec(e)); )
                                          l.index > o && a.push(e.substring(o, l.index)),
                                              a.push((0, t.jsx)("strong", { children: l[1] }, n++)),
                                              (o = i.lastIndex);
                                      return o < e.length && a.push(e.substring(o)), a.length > 0 ? a : e;
                                  })(n)
                                : n,
                        [n, s],
                    );
                return (0, t.jsxs)(b.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the confirm modal",
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "primary",
                            text: "Open Confirm Modal",
                            onClick: () =>
                                (0, lO.A)({
                                    ...r,
                                    subtitle: d,
                                    cancelText: "" === l ? void 0 : l,
                                    onConfirm: async (e) => {
                                        try {
                                            if ((await new Promise((e) => setTimeout(e, 1e3 * a)), i))
                                                throw Error("Confirm error");
                                        } catch (l) {
                                            throw (
                                                (e(
                                                    "Something went wrong reticulating splines. Please try again later.",
                                                ),
                                                l)
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
                let { graphic: l, subtitleIcon: i, ...n } = e,
                    s = i ? { text: n.subtitle ?? "Default subtitle", leadingIcon: lM.N } : n.subtitle,
                    r = o.useMemo(
                        () =>
                            0 === l
                                ? { type: "image", src: lP }
                                : 1 === l
                                  ? {
                                        type: "lottie",
                                        lottie: () => a.e("95947").then(a.t.bind(a, 604902, 19)),
                                        aspectRatio: "6/4",
                                    }
                                  : 2 === l
                                    ? { type: "rive", rive: lk.Q }
                                    : 3 === l
                                      ? {
                                            type: "video",
                                            src: "https://cdn.discordapp.com/assets/content/06fafa729efafb6235e0ee9df9482566fa9e74b96a792a9265dca70113c71ab7.webm",
                                            fallbackImageSrc: lP,
                                            loop: !0,
                                            loopAt: 2.5,
                                        }
                                      : 4 === l
                                        ? {
                                              type: "dynamic",
                                              component: lL.DynamicGraphicComponent.DEMO,
                                              aspectRatio: "6/4",
                                              props: { text: "Dynamic Content" },
                                          }
                                        : void 0,
                        [l],
                    );
                return (0, t.jsxs)(b.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the expressive modal",
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "primary",
                            text: "Open ExpressiveModal",
                            onClick: () =>
                                (0, lR.openModal)(
                                    (e) =>
                                        (0, t.jsx)(lE.k, {
                                            ...e,
                                            ...n,
                                            title: n.title,
                                            subtitle: s,
                                            graphic: r,
                                            actions: [
                                                { variant: "secondary", text: "Cancel", onClick: e.onClose },
                                                { variant: "primary", text: "Submit", onClick: e.onClose },
                                            ],
                                            children: (0, t.jsx)(b.B, {
                                                gap: 16,
                                                children: (0, t.jsx)(p.E, {
                                                    variant: "text-md/normal",
                                                    children:
                                                        "This is an expressive modal with a gradient background and optional badge.",
                                                }),
                                            }),
                                        }),
                                    { dismissable: n.dismissable },
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
                    i = {
                        type: "dynamic",
                        component: lL.DynamicGraphicComponent.DEMO,
                        aspectRatio: "6/4",
                        props: { text: l },
                    };
                return (0, t.jsxs)(b.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(p.E, {
                            variant: "text-md/normal",
                            children:
                                "This example demonstrates the DynamicGraphic component rendering a React component inside the modal header.",
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "primary",
                            text: "Open Dynamic Graphic Modal",
                            onClick: () =>
                                (0, lR.openModalLazy)(
                                    async () => {
                                        let { ExpressiveModal: e } = await a.e("4823").then(a.bind(a, 158954));
                                        return (l) =>
                                            (0, t.jsx)(e, {
                                                ...l,
                                                ...o,
                                                title: o.title,
                                                subtitle: o.subtitle,
                                                graphic: i,
                                                actions: [
                                                    { variant: "secondary", text: "Cancel", onClick: l.onClose },
                                                    { variant: "primary", text: "Submit", onClick: l.onClose },
                                                ],
                                                children: (0, t.jsx)(b.B, {
                                                    gap: 16,
                                                    children: (0, t.jsx)(p.E, {
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
                return (0, t.jsxs)(b.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the layer modal",
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "primary",
                            text: "Open Layer Modal",
                            onClick: () =>
                                (0, lR.openModal)((e) =>
                                    (0, t.jsx)(lA.N, {
                                        ...e,
                                        ...l,
                                        children: (0, t.jsx)(b.B, {
                                            gap: 16,
                                            children: (0, t.jsx)(p.E, {
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
                    onCompleteAlert: i,
                    onNextAlert: n,
                    customErrorNotice: s,
                    errorNoticeType: r,
                } = e;
                return (0, t.jsxs)(b.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the multi-step modal",
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "primary",
                            text: "Open MultiStepModal",
                            onClick: () =>
                                (0, lR.openModal)((e) =>
                                    (0, t.jsx)(l$, {
                                        ...e,
                                        callbackDelay: l,
                                        failOnNext: a,
                                        failOnComplete: o,
                                        onCompleteAlert: i,
                                        onNextAlert: n,
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
                return (0, t.jsxs)(b.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the base modal",
                        }),
                        (0, t.jsx)(m.$, {
                            variant: "primary",
                            text: "Open BaseModal",
                            onClick: () =>
                                (0, lR.openModal)(
                                    (e) =>
                                        (0, t.jsx)(lw.d, {
                                            ...e,
                                            ...o,
                                            "aria-label": "Base Modal Example",
                                            children: (0, t.jsx)(lT.c, {
                                                children: (0, t.jsxs)(b.B, {
                                                    gap: 16,
                                                    children: [
                                                        (0, t.jsx)(p.E, {
                                                            variant: "text-lg/semibold",
                                                            children: "BaseModal Content",
                                                        }),
                                                        (0, t.jsx)(p.E, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "This is the raw BaseModal container. It provides the modal chrome (animation, sizing, padding, focus management) without any opinionated header, body, or action bar layout.",
                                                        }),
                                                        a
                                                            ? Array.from({ length: 20 }, (e, l) =>
                                                                  (0, t.jsxs)(
                                                                      p.E,
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
var l_ = a(43105),
    lq = a(338854),
    lH = a(353795),
    lX = a(312640),
    lU = a(798618),
    lW = a(916845),
    lZ = a(627330),
    lY = a(375708),
    lK = a(824078);
function lQ(e) {
    let {
            steps: l,
            caretConfig: a = { align: "center" },
            size: i = "md",
            onStepChange: n,
            onRequestClose: s,
            popoverRef: r,
            shouldShow: d,
            position: u,
            ...c
        } = e,
        [b, x] = o.useState(0);
    o.useEffect(() => {
        d && x(0);
    }, [d]),
        o.useEffect(() => {
            n?.(b);
        }, [b, n]);
    let h = l[b],
        v = b + 1 === l.length,
        g = o.useCallback(() => {
            h?.onCta?.(), v ? s?.() : x((e) => e + 1);
        }, [h, v, s]),
        f = o.useCallback(() => {
            s?.();
        }, [s]),
        V = o.useCallback(() => {
            s?.();
        }, [s]);
    if (!d || null == h) return null;
    let C = {
            text: h.action?.text ?? (v ? lY.intl.string(lY.t.i4jeWR) : lY.intl.string(lY.t.PDTjLN)),
            variant: h.action?.variant ?? "primary",
            onClick: g,
            ...h.action,
        },
        j = {
            targetElementRef: c.targetElementRef,
            hasVideo: c.hasVideo,
            scrollBehavior: c.scrollBehavior,
            position: u,
            shouldShow: d,
            onRequestClose: f,
            gradientColor: h.gradientColor,
            caretConfig: a,
            ...("edge" === c.alignmentStrategy
                ? { alignmentStrategy: "edge", align: c.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, t.jsx)(lX.x, {
        ...j,
        children: (0, t.jsxs)("div", {
            ref: r,
            children: [
                (0, t.jsx)(lW.q, { onClick: V, variant: null != h.gradientColor ? "color-mix" : void 0 }),
                null != h.graphic &&
                    (0, t.jsx)("div", {
                        className: y()(lK.graphic, { [lK[`graphic--${i}`]]: null != i }),
                        children: (0, t.jsx)(lH.v, {
                            ...h.graphic,
                            aspectRatio: h.graphic.aspectRatio ?? ("sm" === i ? "2/1" : "16/9"),
                        }),
                    }),
                (0, t.jsx)(lZ.D, { title: h.title, body: h.body, badge: h.badge, textLink: h.textLink }),
                (0, t.jsx)("div", {
                    className: lK.actionBar,
                    children: (0, t.jsxs)("div", {
                        className: lK.multistepActionLayout,
                        children: [
                            (0, t.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: lK.multistepIndicator,
                                children: lY.intl.formatToPlainString(lY.t.rO31eY, {
                                    count: b + 1,
                                    totalSteps: l.length,
                                }),
                            }),
                            (0, t.jsx)(m.$, { size: "sm", ...C }),
                        ],
                    }),
                }),
                (0, t.jsx)(lU.F, {}),
            ],
        }),
    });
}
let lJ =
        "https://cdn.discordapp.com/assets/content/26736d800236761a21973e6fe690dfd5fa484f664976b3bba91b98d5d47bb1f7.svg",
    l0 = {
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
                            showTextLink: i,
                            caretAlign: n,
                            alignmentStrategy: s,
                            align: r,
                            size: d,
                            position: u,
                            ...c
                        } = e,
                        [b, p] = o.useState(!1),
                        x = o.useRef(null);
                    return (0, t.jsxs)("div", {
                        style: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" },
                        children: [
                            (0, t.jsx)(
                                l_.A,
                                {
                                    ...c,
                                    position: u,
                                    size: d,
                                    align: r,
                                    alignmentStrategy: s,
                                    targetElementRef: x,
                                    shouldShow: b,
                                    onRequestClose: () => p(!1),
                                    graphic: l
                                        ? {
                                              type: "image",
                                              src:
                                                  "sm" === d
                                                      ? "https://cdn.discordapp.com/assets/content/7c8ee05f499cdf960d0b69208667276e8ca276aa2edcee6141d55e237d1ed5d2.svg"
                                                      : lJ,
                                          }
                                        : void 0,
                                    caretConfig: { align: n },
                                    actions: a ? [{ text: "Close", onClick: () => p(!1) }] : void 0,
                                    textLink: i
                                        ? { text: "Learn More", link: "https://discord.com", external: !0 }
                                        : void 0,
                                },
                                u,
                            ),
                            (0, t.jsx)(m.$, {
                                variant: "primary",
                                text: "Toggle Popover",
                                buttonRef: x,
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
                    let { showActions: l, ...a } = e,
                        [i, n] = o.useState(!1),
                        s = o.useRef(null);
                    return (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(
                                lq.H,
                                {
                                    ...a,
                                    targetElementRef: s,
                                    shouldShow: i,
                                    onRequestClose: () => n(!1),
                                    title: "Video Popover Demo",
                                    body: "Click the video to view it in the media viewer!",
                                    assetUrl:
                                        "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                                    badge: "new",
                                    action: l ? { text: "Learn More", onClick: () => n(!1) } : void 0,
                                },
                                a.position,
                            ),
                            (0, t.jsx)(m.$, {
                                variant: "primary",
                                text: "Show Video Popover",
                                buttonRef: s,
                                onClick: () => n(!i),
                            }),
                        ],
                    });
                },
                controls: { showActions: { label: "Show Actions", type: "boolean", defaultValue: !0 } },
            },
            {
                name: "MultiStepPopover",
                id: "multi-step-popover",
                docs: "https://design.discord.tools/components/web/popover",
                component: function (e) {
                    let { showExpressive: l, ...a } = e,
                        [i, n] = o.useState(!1),
                        s = o.useRef(null),
                        r = [
                            {
                                title: "Welcome to the Feature!",
                                body: "This is the first step of our multi-step introduction.",
                                asset: (0, t.jsx)("img", { src: lJ, alt: "Step 1" }),
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
                                asset: (0, t.jsx)("img", { src: lJ, alt: "Step 3" }),
                                action: { text: "Get Started", variant: l ? "expressive" : void 0 },
                                gradientColor: "nitro-pink",
                                textLink: { text: "Learn More", link: "https://discord.com", external: !0 },
                            },
                        ];
                    return (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(
                                lQ,
                                {
                                    ...a,
                                    targetElementRef: s,
                                    shouldShow: i,
                                    onRequestClose: () => n(!1),
                                    steps: r,
                                    caretConfig: { align: "center" },
                                    onStepChange: () => {},
                                },
                                a.position,
                            ),
                            (0, t.jsx)(m.$, {
                                variant: "primary",
                                text: "Show Multi-Step",
                                buttonRef: s,
                                onClick: () => n(!i),
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
var l1 = a(911608);
let l2 = {
    title: "ProgressBar",
    stories: [
        {
            name: "ProgressBar",
            id: "progress-bar",
            component: function (e) {
                let { value: l, isIndeterminate: a, size: o, animate: i, valueLabel: n, ariaLabel: s } = e,
                    r = "" !== n ? n : void 0,
                    d = "" !== s ? s : "Progress";
                return a
                    ? (0, t.jsx)(l1.z, { isIndeterminate: !0, size: o, animate: i, valueLabel: r, "aria-label": d })
                    : (0, t.jsx)(l1.z, { value: l, size: o, animate: i, valueLabel: r, "aria-label": d });
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
};
var l3 = a(773812);
let l4 = {
        title: "RadioGroup",
        stories: [
            {
                id: "radiogroup",
                name: "RadioGroup",
                component: function (e) {
                    let {
                            disabled: l,
                            optionCount: a,
                            label: i,
                            optionLabel: n,
                            description: s,
                            showIcons: r,
                            withMixedDisabledOptions: d,
                        } = e,
                        [u, c] = o.useState("option1"),
                        x = o.useMemo(
                            () =>
                                [
                                    {
                                        name: null != n ? `${n} 1` : "Option 1",
                                        value: "option1",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? eX.m : void 0,
                                        disabled: !d && void 0,
                                    },
                                    {
                                        name: null != n ? `${n} 2` : "Option 2",
                                        value: "option2",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? eX.m : void 0,
                                        disabled: !!d || void 0,
                                    },
                                    {
                                        name: null != n ? `${n} 3` : "Option 3",
                                        value: "option3",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? eX.m : void 0,
                                        disabled: !d && void 0,
                                    },
                                    {
                                        name: null != n ? `${n} 4` : "Option 4",
                                        value: "option4",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? eX.m : void 0,
                                        disabled: !!d || void 0,
                                    },
                                    {
                                        name: null != n ? `${n} 5` : "Option 5",
                                        value: "option5",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? eX.m : void 0,
                                        disabled: !d && void 0,
                                    },
                                ].slice(0, Math.max(1, Math.min(5, a))),
                            [a, n, s, r, d],
                        ),
                        h = o.useCallback((e) => {
                            c(e);
                        }, []),
                        y = o.useCallback(() => {
                            x.length > 0 && c(x[0].value);
                        }, [x]),
                        v = o.useCallback(() => {
                            x.length > 0 && c(x[x.length - 1].value);
                        }, [x]),
                        g = o.useCallback(() => {
                            c(void 0);
                        }, []);
                    return (0, t.jsxs)(b.B, {
                        direction: "vertical",
                        gap: "md",
                        children: [
                            (0, t.jsx)(l3.z, { value: u, label: i, onChange: h, options: x, disabled: l }),
                            (0, t.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                children: ["Current selection: ", "string" == typeof u && "" !== u ? u : "None"],
                            }),
                            (0, t.jsxs)(b.B, {
                                direction: "horizontal",
                                gap: "sm",
                                children: [
                                    (0, t.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Select First",
                                        onClick: y,
                                        disabled: l || 0 === x.length,
                                    }),
                                    (0, t.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Select Last",
                                        onClick: v,
                                        disabled: l || 0 === x.length,
                                    }),
                                    (0, t.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: g,
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
    l6 = {
        title: "RangeCalendar",
        stories: [
            {
                id: "range-calendar",
                name: "RangeCalendar",
                component: function (e) {
                    let { disabled: l, readOnly: a, showMinMax: i } = e,
                        [n, s] = o.useState({
                            start: (0, eN.Ec)((0, eN.Xj)()),
                            end: (0, eN.Ec)((0, eN.Xj)()).add({ days: 7 }),
                        }),
                        r = o.useCallback((e) => {
                            s(e);
                        }, []),
                        d = o.useCallback(() => {
                            s(null);
                        }, []),
                        u = o.useCallback(() => {
                            let e = (0, eN.Ec)((0, eN.Xj)());
                            s({ start: e, end: e.add({ days: 7 }) });
                        }, []),
                        c = o.useCallback(() => {
                            s({ start: (0, eL._U)("2024-12-01"), end: (0, eL._U)("2024-12-31") });
                        }, []);
                    if (!eq("RangeCalendarStory"))
                        return (0, t.jsxs)(eG.w, {
                            type: "critical",
                            children: [
                                "This component is experimental and only available behind the ",
                                (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                                " ",
                                "experiment. Do not use this in production yet.",
                            ],
                        });
                    let x = (e) => (null == e ? "None" : (0, eA.default)(e.toDate((0, eN.Xj)()), "MMMM d, yyyy"));
                    return (0, t.jsxs)(b.B, {
                        direction: "vertical",
                        gap: "md",
                        children: [
                            (0, t.jsx)(la, {
                                value: n,
                                onChange: r,
                                isDisabled: l,
                                isReadOnly: a,
                                minValue: i ? (0, eL._U)("2024-01-01") : void 0,
                                maxValue: i ? (0, eL._U)("2024-12-31") : void 0,
                                "aria-label": "Select a date range",
                            }),
                            (0, t.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                children: [
                                    "Selected range: ",
                                    null != n ? `${x(n.start)} \u{2013} ${x(n.end)}` : "None",
                                ],
                            }),
                            (0, t.jsxs)(b.B, {
                                direction: "horizontal",
                                gap: "sm",
                                children: [
                                    (0, t.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: d,
                                        disabled: l || a,
                                    }),
                                    (0, t.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "This Week",
                                        onClick: u,
                                        disabled: l || a,
                                    }),
                                    (0, t.jsx)(m.$, {
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
var l7 = a(593924),
    l5 = a(844222),
    l8 = a(692327);
let l9 = Object.entries(l7)
    .filter((e) => {
        let l = e[1];
        return "function" == typeof l && "riveSrc" in l;
    })
    .map((e) => {
        let [l, a] = e;
        return { name: l, Component: a };
    })
    .sort((e, l) => e.name.localeCompare(l.name));
var ae = a(540637),
    al = a(732771),
    aa = a(379649);
let at = [
        { label: "Aardvark", value: "aardvark", id: "aardvark", description: "This is an aardvark" },
        { label: "Cat", value: "cat", id: "cat", description: "This is a cat" },
        { label: "Dog", value: "dog", id: "dog" },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", description: "This is a kangaroo" },
        { label: "Panda", value: "panda", id: "panda" },
        { label: "Snake", value: "snake", id: "snake", disabled: !0 },
    ],
    ao = [
        {
            label: "Aardvark",
            value: "aardvark",
            id: "aardvark",
            leading: lM.N,
            trailing: { type: "badge", badgeType: "new" },
            description: "This is an aardvark",
        },
        { label: "Cat", value: "cat", id: "cat", leading: lM.N, trailing: "20m", description: "This is a cat" },
        { label: "Dog", value: "dog", id: "dog", leading: lM.N },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", leading: { type: "image", src: aa } },
        { label: "Panda", value: "panda", id: "panda", leading: { type: "avatar", src: aa } },
        { label: "Snake", value: "snake", id: "snake", leading: lM.N, disabled: !0 },
    ],
    ai = {
        title: "Select",
        stories: [
            {
                id: "select",
                name: "Select",
                component: function (e) {
                    let { selectionMode: l, withLeadingAndTrailing: a, ...i } = e,
                        [n, s] = o.useState(void 0),
                        [r, d] = o.useState([]),
                        u = an(a, i.asyncOptions);
                    return "single" === l
                        ? (0, t.jsx)(lr.l, { ...i, selectionMode: l, options: u, onSelectionChange: s, value: n })
                        : (0, t.jsx)(lr.l, { ...i, selectionMode: l, options: u, onSelectionChange: d, value: r });
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
                    let { selectionMode: l, withLeadingAndTrailing: a, asyncOptions: i, ...n } = e,
                        [s, r] = o.useState(void 0),
                        [d, u] = o.useState([]),
                        c = an(a, i);
                    return "single" === l
                        ? (0, t.jsx)(lI.Z, { ...n, selectionMode: l, onSelectionChange: r, value: s, options: c })
                        : (0, t.jsx)(lI.Z, { ...n, selectionMode: l, onSelectionChange: u, value: d, options: c });
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
                            hideLabel: i,
                            description: n,
                            helperText: s,
                            errorMessage: r,
                            successMessage: d,
                            wrapTags: u,
                            withLeadingAndTrailing: c,
                            placeholder: b,
                            ...p
                        } = e,
                        { required: m, disabled: x } = p,
                        h = an(c, p.asyncOptions),
                        [y, v] = o.useState(null);
                    return (0, t.jsxs)(al.iS, {
                        selectionMode: l,
                        onSelectionChange: v,
                        options: h,
                        value: y,
                        ...p,
                        children: [
                            (0, t.jsx)(al.a3, {
                                label: a,
                                hideLabel: i,
                                placeholder: b,
                                required: m,
                                disabled: x,
                                description: n,
                                helperText: s,
                                errorMessage: r,
                                successMessage: d,
                                wrapTags: u,
                            }),
                            (0, t.jsx)(al.X2, {}),
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
                    let { selectionMode: l, required: a, shouldFocusWrap: i, withLeadingAndTrailing: n } = e,
                        [s, r] = o.useState(null);
                    return (0, t.jsx)(ae.q, {
                        selectionMode: l,
                        required: a,
                        shouldFocusWrap: i,
                        items: n ? ao : at,
                        onSelectionChange: r,
                        selectedItems: s,
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
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    shouldFocusWrap: { label: "Should focus wrap", type: "boolean", defaultValue: !1 },
                },
            },
        ],
    };
function an(e, l) {
    let a = o.useRef(null);
    return o.useMemo(() => {
        let t = e ? ao : at;
        return l
            ? (e) =>
                  new Promise(
                      null != a.current ? (e) => e(a.current) : (e) => setTimeout(() => ((a.current = t), e(t)), 1e3),
                  )
            : t;
    }, [e, l]);
}
let as = {
    title: "Switch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let { disabled: l, hasIcon: a, label: i, description: n, required: s, errorMessage: r } = e,
                    [d, u] = o.useState(!1);
                return (0, t.jsx)(ls.d, {
                    label: i,
                    description: n,
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
var ar = a(528265),
    ad = a(11779);
let au = {
        title: "TagGroup",
        stories: [
            {
                name: "TagGroup",
                id: "tag-group",
                component: function (e) {
                    let { selectionMode: l, removeable: a, layout: s } = e,
                        r = (0, i.bG)([n.default], () => n.default.getCurrentUser()),
                        d = o.useMemo(
                            () => [
                                { id: "strength", label: "Strength", icon: ad.r },
                                { id: "dexterity", label: "Dexterity", icon: { type: "role", color: "#ff44aa" } },
                                {
                                    id: "wisdom",
                                    label: "Wisdom",
                                    icon: { type: "avatar", src: r?.getAvatarURL(void 0, 16) ?? "" },
                                },
                                { id: "charisma", label: "Charisma" },
                            ],
                            [r],
                        ),
                        [u, c] = o.useState(d),
                        p = o.useCallback(
                            (e) => {
                                c(u.filter((l) => !e.has(l.id)));
                            },
                            [u],
                        ),
                        x = o.useCallback(() => {
                            c(d);
                        }, [d]),
                        h = (0, t.jsx)(ar.C, {
                            label: "Categories",
                            selectionMode: l,
                            layout: s,
                            items: u,
                            onRemove: a ? p : void 0,
                        }),
                        y = a && (0, t.jsx)(m.$, { disabled: u.length === d.length, text: "Reset", onClick: x });
                    return "inline" === s
                        ? (0, t.jsxs)(b.B, {
                              gap: 24,
                              children: [(0, t.jsx)("div", { style: { display: "flex", gap: 4 }, children: h }), y],
                          })
                        : (0, t.jsxs)(b.B, { gap: 24, children: [h, y] });
                },
                controls: {
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        defaultValue: "multiple",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                    },
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
                },
            },
        ],
    },
    ac = [
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
        "display-sm",
        "display-md",
        "display-lg",
        "code",
    ];
var ab = a(364522),
    ap = a(653197);
let am = {
    name: "Text",
    id: "text",
    component: p.E,
    controls: {
        variant: {
            label: "Variant",
            type: "select",
            defaultValue: "text-sm/normal",
            options: Object.values(ac).map((e) => ({ label: e, value: e })),
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
var ax = a(459192),
    ah = a(990078),
    ay = a(557464);
let av = {
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
                        align: i,
                        caretAlign: n,
                        customOffset: s,
                        delay: r,
                        spacing: d,
                        ariaHidden: u,
                        ...c
                    } = e,
                    b = o.useMemo(() => {
                        if ("center" !== n && null != n)
                            return "custom" === n ? { align: n, customOffset: s } : { align: n };
                    }, [n, s]);
                return (0, t.jsx)(ah.m, {
                    text: l,
                    position: a,
                    align: i,
                    delay: r,
                    spacing: d,
                    caretConfig: b,
                    ariaHidden: u,
                    ...c,
                    children: (0, t.jsx)(m.$, { variant: "primary", text: "Hover me" }),
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
                        showAsset: i,
                        assetSize: n,
                        padding: s,
                        position: r,
                        align: d,
                        caretAlign: u,
                        customOffset: c,
                        delay: b,
                        spacing: p,
                        forceOpen: x,
                        ...h
                    } = e,
                    y = o.useMemo(() => {
                        if ("center" !== u && null != u)
                            return "custom" === u ? { align: u, customOffset: c } : { align: u };
                    }, [u, c]),
                    v = o.useMemo(() => (i ? { type: "image", src: ay.A, aspectRatio: "1/1" } : void 0), [i]);
                return (0, t.jsx)(ax.u, {
                    title: l,
                    body: a,
                    position: r,
                    align: d,
                    padding: s,
                    delay: b,
                    spacing: p,
                    caretConfig: y,
                    asset: v,
                    assetSize: n,
                    forceOpen: x,
                    ...h,
                    children: (0, t.jsx)(m.$, { variant: "primary", text: "Hover me (rich)" }),
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
var ag = a(508382),
    af = a(481224);
let aV = {
        id: "mana",
        name: "Mana",
        groups: [
            {
                title: "Text",
                stories: [
                    am,
                    {
                        name: "Typography Scales",
                        id: "text-scales",
                        component: function (e) {
                            return (0, t.jsx)(ab.Ar, {
                                className: ap.H,
                                children: Object.values(ac).map((l) =>
                                    (0, t.jsxs)(
                                        k.Z,
                                        {
                                            className: ap.N,
                                            children: [
                                                (0, t.jsx)(p.E, { ...e, variant: l, children: e.children }),
                                                (0, t.jsx)(p.E, {
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
            ek,
            eE,
            eH,
            eW,
            eY,
            e9,
            lo,
            l4,
            l6,
            as,
            lG,
            lS,
            ai,
            l0,
            l2,
            av,
            au,
            lh,
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
                                    autoFlip: i,
                                    autoShift: n,
                                    strategy: s,
                                    portal: r,
                                    blockPointerEvents: d,
                                } = e,
                                [u, c] = o.useState(!1);
                            return (0, t.jsx)(ag.Ow, {
                                open: u,
                                onOpenChange: c,
                                placement: l,
                                spacing: a,
                                autoFlip: i,
                                autoShift: n,
                                strategy: s,
                                portal: r,
                                blockPointerEvents: d,
                                renderLayer: () =>
                                    (0, t.jsx)("div", {
                                        className: af.q,
                                        children: (0, t.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            children: "FloatingLayer Content",
                                        }),
                                    }),
                                children: (e) => {
                                    let { ref: l, props: a } = e;
                                    return (0, t.jsx)(m.$, {
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
                                a = o.useContext(l5.C),
                                [i, n] = o.useState(0);
                            return (0, t.jsxs)(l5.C.Provider, {
                                value: { ...a, reducedMotion: { ...a.reducedMotion, enabled: e } },
                                children: [
                                    (0, t.jsx)("div", {
                                        className: l8.QT,
                                        children: (0, t.jsxs)(b.B, {
                                            gap: 8,
                                            children: [
                                                (0, t.jsx)(ls.d, {
                                                    onChange: () => l((e) => !e),
                                                    label: "Force reduced motion",
                                                    checked: e,
                                                }),
                                                (0, t.jsx)(m.$, {
                                                    onClick: () => n((e) => e + 1),
                                                    text: "Reset animations",
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, t.jsx)(
                                        "div",
                                        {
                                            className: l8.Vg,
                                            children: l9.map((e) => {
                                                let { name: l, Component: a } = e;
                                                return (0, t.jsxs)(
                                                    "div",
                                                    {
                                                        className: l8.Hn,
                                                        children: [
                                                            (0, t.jsx)("div", {
                                                                className: l8.k$,
                                                                children: (0, t.jsx)(a, {
                                                                    style: { width: "100%", height: "100%" },
                                                                }),
                                                            }),
                                                            (0, t.jsx)(p.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-subtle",
                                                                className: l8.Pf,
                                                                children: l,
                                                            }),
                                                        ],
                                                    },
                                                    l,
                                                );
                                            }),
                                        },
                                        i,
                                    ),
                                ],
                            });
                        },
                    },
                ],
            },
        ],
    },
    aC = { collections: [aV, em] };
