a.r(l), a.d(l, { manaCollection: () => ah, playgroundConfig: () => ax });
var t = a(627968),
    o = a(64700),
    n = a(17928),
    i = a(287809),
    r = a(97808),
    s = a(818348),
    d = a(778712);
let u = {
    id: "avatar",
    name: "Avatar",
    component: function (e) {
        let { size: l = d._3.SIZE_48, status: a, isVR: o = !1, isMobile: s = !1 } = e,
            { user: u } = (0, n.cf)([i.default], () => ({ user: i.default.getCurrentUser() })),
            c = Number(l.split("_")[1]);
        return (0, t.jsx)(r.eu, {
            src: u?.getAvatarURL(void 0, c),
            size: l,
            "aria-label": "Sample User",
            status: a,
            isVR: o,
            isMobile: s,
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
                Object.keys(s.cl).map((e) => ({ label: e, value: s.cl[e] })),
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
let h = {
    id: "void-checkbox",
    name: "Checkbox",
    component: function (e) {
        let { disabled: l, readOnly: a, displayOnly: n, type: i, size: r, align: s, shape: d, label: u } = e,
            [h, x] = o.useState(!1),
            v = o.useCallback((e, l) => {
                x(l);
            }, []),
            f = o.useCallback(() => {
                x(!0);
            }, []),
            g = o.useCallback(() => {
                x(!1);
            }, []),
            y = o.useCallback(() => {
                x((e) => !e);
            }, []);
        return (0, t.jsxs)(b.B, {
            direction: "vertical",
            gap: "md",
            children: [
                (0, t.jsx)(c.Kj, {
                    "data-migration-pending": !0,
                    value: h,
                    onChange: v,
                    disabled: l,
                    readOnly: a,
                    displayOnly: n,
                    type: i,
                    size: r,
                    align: s,
                    shape: d,
                    children: (0, t.jsx)(p.E, { variant: "text-md/normal", children: u }),
                }),
                (0, t.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    children: ["Current state: ", h ? "Checked" : "Unchecked"],
                }),
                (0, t.jsxs)(b.B, {
                    direction: "horizontal",
                    gap: "sm",
                    children: [
                        (0, t.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Check",
                            onClick: f,
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
                            onClick: y,
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
var x = a(503698),
    v = a.n(x),
    f = a(489215);
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
function y(e) {
    let { text: l, variant: a = "grayLight" } = e,
        o = g[a];
    return (0, t.jsx)(p.E, { variant: "eyebrow", className: v()(f.chip, f[o]), children: l });
}
var C = a(759146);
let j = ["blurple", "purple", "green", "orange", "yellow", "pink", "red", "gray"],
    V = ["Light", "Medium", "Dark"],
    k = {
        title: "Chip",
        stories: [
            {
                name: "Chip",
                id: "chip",
                component: y,
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
                        className: C.lx,
                        children: V.map((e) =>
                            (0, t.jsxs)(
                                "div",
                                {
                                    className: C.uW,
                                    children: [
                                        (0, t.jsx)("h3", { className: C.Gf, children: e }),
                                        (0, t.jsx)("div", {
                                            className: C.f2,
                                            children: j.map((l) => {
                                                let a = `${l}${e}`;
                                                return (0, t.jsx)(y, { text: l, variant: a }, a);
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
var S = a(359778),
    w = a(235986),
    _ = a(244367),
    T = a(742158),
    M = a(743513);
S.Z.Types;
function D(e) {
    let l,
        a,
        {
            type: o = S.Z.Types.DANGER,
            imageData: n,
            button: i,
            className: r,
            iconClassName: s,
            title: d,
            body: u,
            style: c,
            align: b = w.A.Align.START,
        } = e,
        p = w.A.Direction.HORIZONTAL;
    if (null != n) {
        let { position: e, ...a } = n;
        (l = (0, t.jsx)(w.A.Child, {
            grow: 0,
            shrink: 0,
            children: (0, t.jsx)("img", { alt: "", className: v()(M.Kk, s), ...a }),
        })),
            "right" === e && (p = w.A.Direction.HORIZONTAL_REVERSE);
    } else null != i && (a = i);
    let m = !0;
    return (
        o === S.Z.Types.PRIMARY && (m = !1),
        (0, t.jsx)(S.Z, {
            className: v()(M.RJ, r),
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
                                ? (0, t.jsx)(T.z, {
                                      "data-migration-pending": !0,
                                      className: v()(M.$G, { [M.vV]: m }),
                                      children: d,
                                  })
                                : null,
                            (0, t.jsx)(_.a, {
                                "data-migration-pending": !0,
                                className: v()(M.Vz, { [M.vV]: m }),
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
D.Types = S.Z.Types;
let E = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: l, title: a, body: o, hasButton: n } = e,
                    i = n ? (0, t.jsx)(m.$, { text: "Action" }) : void 0;
                return (0, t.jsx)(D, { "data-migration-pending": !0, type: l, title: a, body: o, button: i });
            },
            controls: {
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: S.Z.Types.DANGER,
                    options: [
                        { label: "Primary", value: S.Z.Types.PRIMARY },
                        { label: "Danger", value: S.Z.Types.DANGER },
                        { label: "Warning", value: S.Z.Types.WARNING },
                        { label: "Success", value: S.Z.Types.SUCCESS },
                        { label: "Brand", value: S.Z.Types.BRAND },
                        { label: "Custom", value: S.Z.Types.CUSTOM },
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
                                    (0, t.jsx)(T.z, {
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
var N = a(452027),
    A = a(512950),
    L = a(550079),
    I = a(477782),
    P = a(22231),
    O = a(366605),
    R = a(624479),
    B = a(625903),
    z = a(509434),
    F = a(241326),
    $ = a(922016),
    G = a(159402);
let H = {
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
                        showRadioItems: r,
                        showSwitchItems: s,
                        showSubmenus: d,
                        showIcons: u,
                        showShortcuts: c,
                        showSubtext: b,
                        showDisabledItems: p,
                        showColoredItems: h,
                        showLoading: x,
                        showTrailingIndicator: v,
                        dangerItemColor: f,
                    } = e,
                    [g, y] = o.useState(!0),
                    [C, j] = o.useState(!1),
                    [V, k] = o.useState("text"),
                    [S, w] = o.useState("cozy"),
                    [_, T] = o.useState(!0),
                    M = o.useRef(null);
                return (0, t.jsxs)("div", {
                    className: G.k,
                    children: [
                        !_ && (0, t.jsx)(m.$, { text: "Open Menu", onClick: () => T(!0) }),
                        (0, t.jsx)($.Y, {
                            renderPopout: (e) => {
                                let { closePopout: o } = e;
                                return (0, t.jsxs)(L.W, {
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
                                            icon: u ? P.R : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: P.R } : void 0,
                                            shortcut: c ? "⌘E" : void 0,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(I.Dr, {
                                            id: "pin",
                                            label: "Pin Message",
                                            icon: u ? O.t : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: O.t } : void 0,
                                            subtext: b ? "Pin this message to the channel" : void 0,
                                            badge: "beta",
                                            loading: x,
                                            action: () => {},
                                        }),
                                        (0, t.jsx)(I.Dr, {
                                            id: "copy",
                                            label: "Copy Message Link",
                                            icon: u ? R.T : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: R.T } : void 0,
                                            badge: "new",
                                            action: () => {},
                                        }),
                                        p &&
                                            (0, t.jsx)(I.Dr, {
                                                id: "disabled",
                                                label: "Disabled Item",
                                                icon: u ? B.Z : void 0,
                                                leadingAccessory: u ? { type: "icon", icon: B.Z } : void 0,
                                                disabled: !0,
                                                action: () => {},
                                            }),
                                        h &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsx)(I.Dr, {
                                                        id: "brand-item",
                                                        label: "Brand Item",
                                                        color: "brand",
                                                        trailingIndicator: v ? { type: "icon", icon: z.I } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(I.Dr, {
                                                        id: "premium-item",
                                                        label: "Premium Item",
                                                        color: "premium",
                                                        icon: u ? B.Z : void 0,
                                                        leadingAccessory: u ? { type: "icon", icon: B.Z } : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, t.jsx)(I.Dr, {
                                                        id: "success-item",
                                                        label: "Success Item",
                                                        color: "success",
                                                        icon: u ? B.Z : void 0,
                                                        leadingAccessory: u ? { type: "icon", icon: B.Z } : void 0,
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
                                                        icon: u ? B.Z : void 0,
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
                                        i &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsx)(I.sL, {
                                                        id: "notifications",
                                                        label: "Enable Notifications Enable Notifications Enable Notifications",
                                                        checked: g,
                                                        action: () => y(!g),
                                                    }),
                                                    (0, t.jsx)(I.sL, {
                                                        id: "mute",
                                                        label: "Mute Channel",
                                                        checked: C,
                                                        action: () => j(!C),
                                                    }),
                                                ],
                                            }),
                                        s &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(I.bX, {}),
                                                    (0, t.jsx)(I.fP, {
                                                        id: "switch-notifications",
                                                        label: "Push Notifications",
                                                        checked: g,
                                                        action: () => y(!g),
                                                    }),
                                                ],
                                            }),
                                        r &&
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
                                                                checked: "text" === V,
                                                                action: () => k("text"),
                                                            }),
                                                            (0, t.jsx)(I.iD, {
                                                                id: "radio-voice",
                                                                group: "channel-type",
                                                                label: "Voice Channel",
                                                                checked: "voice" === V,
                                                                action: () => k("voice"),
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
                                                                checked: "cozy" === S,
                                                                action: () => w("cozy"),
                                                            }),
                                                            (0, t.jsx)(I.iD, {
                                                                id: "radio-compact",
                                                                group: "view-mode",
                                                                label: "Compact",
                                                                checked: "compact" === S,
                                                                action: () => w("compact"),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        n &&
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
                                            color: f,
                                            icon: u ? F.u : void 0,
                                            action: () => {},
                                        }),
                                    ],
                                });
                            },
                            position: "bottom",
                            align: "center",
                            shouldShow: !0,
                            targetElementRef: M,
                            onRequestClose: () => T(!1),
                            children: () =>
                                (0, t.jsx)("div", {
                                    ref: M,
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
var W = a(417098);
let U = {
    title: "Notice",
    stories: [
        {
            id: "notice",
            name: "Notice",
            component: function (e) {
                let { color: l, message: a } = e,
                    o = {
                        BRAND: W.Hv.BRAND,
                        INFO: W.Hv.INFO,
                        WARNING: W.Hv.WARNING,
                        DANGER: W.Hv.DANGER,
                        DEFAULT: W.Hv.DEFAULT,
                        NEUTRAL: W.Hv.NEUTRAL,
                    };
                return (0, t.jsx)(W.$T, { color: o[l], children: a });
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
var q = a(933832),
    X = a(176781),
    Z = a(173936),
    K = a(972213),
    Y = a(785007);
let J = {
    title: "VoidRadioGroup",
    stories: [
        {
            id: "voidradiogroup",
            name: "VoidRadioGroup",
            component: function (e) {
                let {
                        optionCount: l,
                        size: a,
                        disabled: n,
                        orientation: i,
                        radioPosition: r,
                        withTransparentBackground: s,
                        label: d,
                        description: u,
                        withDescriptions: c,
                        withIcons: b,
                    } = e,
                    [p, m] = o.useState("option1"),
                    h = [q.A, X.x, Z.q, B.Z, K.d],
                    x = Array.from({ length: l }, (e, l) => ({
                        value: `option${l + 1}`,
                        name: `Option ${l + 1}`,
                        description: c ? `This is a description for option ${l + 1}` : void 0,
                        icon: b ? h[l % h.length] : void 0,
                    }));
                return (0, t.jsx)(Y.$d, {
                    "data-migration-pending": !0,
                    value: p,
                    onChange: (e) => {
                        let { value: l } = e;
                        return m(l);
                    },
                    options: x,
                    size: a,
                    disabled: n,
                    orientation: i,
                    radioPosition: r,
                    withTransparentBackground: s,
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
var Q = a(106236);
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
                        markerCount: n,
                        stickToMarkers: i,
                        disabled: r,
                        equidistant: s,
                        label: d,
                        description: u,
                    } = e,
                    c = n > 0 ? Array.from({ length: n }, (e, t) => Math.floor(l + (t / (n - 1)) * (a - l))) : void 0;
                return (0, t.jsx)(
                    Q.A,
                    {
                        label: d,
                        description: u,
                        layout: "horizontal-responsive",
                        minValue: l,
                        maxValue: a,
                        initialValue: o,
                        markers: c,
                        stickToMarkers: i,
                        disabled: r,
                        equidistant: s,
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
                let { look: l, type: a, tabCount: n } = e,
                    [i, r] = o.useState("tab1"),
                    s = Array.from({ length: n }, (e, l) => ({ id: `tab${l + 1}`, name: `Tab ${l + 1}` }));
                return (0, t.jsx)(et.V, {
                    type: a,
                    look: l,
                    selectedItem: i,
                    onItemSelect: r,
                    children: s.map((e) => (0, t.jsx)(et.V.Item, { id: e.id, children: e.name }, e.id)),
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
var en = a(444550),
    ei = a(843282);
let er = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
    ],
    es = {
        id: "select",
        name: "Select",
        component: function (e) {
            let {
                    label: l,
                    description: a,
                    isDisabled: n,
                    isProcessing: i,
                    placeholder: r,
                    maxVisibleItems: s,
                    clearable: d,
                    closeOnSelect: u,
                    popoutPosition: c,
                    variant: b,
                } = e,
                [p, m] = o.useState("blue");
            return (0, t.jsx)(ei.Te, {
                variant: b,
                label: l,
                description: a,
                value: p,
                onChange: m,
                options: er,
                placeholder: r,
                isDisabled: n,
                isProcessing: i,
                maxVisibleItems: s,
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
                    isProcessing: n,
                    clearable: i,
                    closeOnSelect: r,
                    clearQueryOnSelect: s,
                    filter: d,
                    ...u
                } = e,
                [c, p] = o.useState("blue"),
                [m, h] = o.useState(["blue"]);
            return (0, t.jsxs)(b.B, {
                gap: 24,
                children: [
                    (0, t.jsx)(en.p, {
                        ...u,
                        value: c,
                        onChange: p,
                        options: er,
                        placeholder: l,
                        isDisabled: a,
                        isProcessing: n,
                        clearable: i,
                        clearQueryOnSelect: s,
                        filter: d,
                    }),
                    (0, t.jsx)(en.p, {
                        ...u,
                        multi: !0,
                        value: m,
                        onChange: h,
                        options: er,
                        placeholder: l,
                        isDisabled: a,
                        isProcessing: n,
                        clearable: i,
                        closeOnSelect: r,
                        clearQueryOnSelect: s,
                        filter: d,
                    }),
                ],
            });
        },
        controls: {
            ...es.controls,
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
                                        N.D,
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
            { title: "Select", stories: [es, ed] },
            { title: "Checkbox", stories: [h] },
            ea,
            J,
            ee,
            eo,
            { title: "Avatar", stories: [u] },
            k,
            U,
            {
                title: "VoidInputs",
                stories: [
                    {
                        name: "VoidInputs",
                        id: "void-inputs",
                        component: function (e) {
                            let { disabled: l, placeholder: a } = e,
                                [n, i] = o.useState(void 0),
                                [r, s] = o.useState(void 0),
                                [d, u] = o.useState(void 0);
                            return (0, t.jsxs)(b.B, {
                                gap: 8,
                                children: [
                                    (0, t.jsx)(ei.Te, {
                                        value: n,
                                        onChange: i,
                                        options: ep,
                                        placeholder: a,
                                        isDisabled: l,
                                    }),
                                    (0, t.jsx)(ec.k, { placeholder: a, disabled: l }),
                                    (0, t.jsx)(en.p, {
                                        value: n,
                                        onChange: i,
                                        options: ep,
                                        placeholder: a,
                                        isDisabled: l,
                                    }),
                                    (0, t.jsx)(eu.J, { onSelect: s, value: r, disabled: l }),
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
            E,
            H,
        ],
    };
var eh = a(27232),
    ex = a(825860),
    ev = a(175841),
    ef = a(406810),
    eg = a(508770);
let ey = { none: void 0, StarIcon: eh.G, FireIcon: ex.Y, SparklesIcon: ev.B, ClockIcon: ef.O },
    eC = {
        title: "Badge",
        stories: [
            {
                name: "Badge",
                id: "badge",
                component: function (e) {
                    let { type: l, customText: a, variant: o, iconName: n } = e,
                        i = null != n && "" !== n && "none" !== n ? ey[n] : void 0;
                    return (0, t.jsx)(eg.E, {
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
                        ],
                    },
                },
            },
        ],
    };
var ej = a(408278),
    eV = a(123292),
    ek = a(825484),
    eS = a(111159);
let ew = {
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
                return (0, t.jsx)(ej.K, { ...e, icon: eS.p, "aria-label": "Clyde" });
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
            component: eV.Q,
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
                return (0, t.jsxs)(ek.e, {
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
var e_ = a(939546),
    eT = a(928231),
    eM = a(822986),
    eD = a(577684),
    eE = a(493108),
    eN = a(921853),
    eA = a(320448),
    eL = a(460890),
    eI = a(195529);
function eP(e) {
    let { offset: l, monthLabel: a, isRangeSelection: o = !1 } = e;
    return (0, t.jsxs)("div", {
        className: eI.F4,
        children: [
            null != a && (0, t.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: a }),
            (0, t.jsxs)(eD.r8, {
                offset: l,
                className: eI.ZP,
                weekdayStyle: "short",
                children: [
                    (0, t.jsx)(eD.co, {
                        children: (e) =>
                            (0, t.jsx)(eD.W$, {
                                className: eI.e4,
                                children: (0, t.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: e,
                                }),
                            }),
                    }),
                    (0, t.jsx)(eD.Xq, {
                        children: (e) =>
                            (0, t.jsx)(eD.Zr, {
                                date: e,
                                className: v()(eI.Hn, o && eI.KK),
                                children: (e) => {
                                    let { formattedDate: l } = e;
                                    return (0, t.jsx)("span", {
                                        className: eI.AY,
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
function eO(e) {
    let {
            value: l,
            onChange: a,
            minValue: n,
            maxValue: i,
            disabled: r = !1,
            readOnly: s = !1,
            className: d,
            "aria-label": u,
        } = e,
        { i18n: c } = (0, eL.G9)(),
        [b, m] = o.useState(l);
    return (
        o.useEffect(() => {
            m(l);
        }, [l]),
        (0, t.jsx)(eD.Vv, {
            value: l,
            focusedValue: b,
            onFocusChange: m,
            onChange: a,
            minValue: n,
            maxValue: i,
            isDisabled: r,
            isReadOnly: s,
            "aria-label": u,
            "data-mana-component": "calendar",
            className: v()(eI.BJ, d),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: eI.I4,
                            children: [
                                (0, t.jsx)(ej.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: eN.n,
                                    "aria-label": c.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: eI.Wb,
                                    children: (0, t.jsx)(p.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: (0, t.jsx)(eE.D, {}),
                                    }),
                                }),
                                (0, t.jsx)(ej.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: eA._,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": c.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", { className: eI.US, children: (0, t.jsx)(eP, {}) }),
                    ],
                }),
        })
    );
}
var eR = a(683071);
let eB = (0, a(250105).Ay)({
    kind: "user",
    name: "2025-10-mana-date-inputs",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function ez(e) {
    return eB.useConfig({ location: e }).enabled;
}
let eF = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: l, readOnly: a, showMinMax: n } = e,
                    [i, r] = o.useState((0, e_.Ec)((0, e_.Xj)())),
                    s = o.useCallback((e) => {
                        r(e);
                    }, []),
                    d = o.useCallback(() => {
                        r(null);
                    }, []),
                    u = o.useCallback(() => {
                        r((0, e_.Ec)((0, e_.Xj)()));
                    }, []),
                    c = o.useCallback(() => {
                        r((0, eT._U)("2024-12-25"));
                    }, []);
                return ez("CalendarStory")
                    ? (0, t.jsxs)(b.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(eO, {
                                  value: i,
                                  onChange: s,
                                  disabled: l,
                                  readOnly: a,
                                  minValue: n ? (0, eT._U)("2024-01-01") : void 0,
                                  maxValue: n ? (0, eT._U)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, t.jsxs)(p.E, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != i ? (0, eM.default)(i.toDate((0, e_.Xj)()), "MMMM d, yyyy") : "None",
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
                    : (0, t.jsxs)(eR.w, {
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
var e$ = a(885574),
    eG = a(150934);
let eH = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: l, description: a, disabled: n, labelType: i, showIcons: r } = e,
                    [s, d] = o.useState(!1),
                    u = o.useCallback(() => {
                        d(!0);
                    }, []),
                    c = o.useCallback(() => {
                        d(!1);
                    }, []),
                    h = o.useCallback(() => {
                        d((e) => !e);
                    }, []);
                return (0, t.jsxs)(b.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(eG.S, {
                            checked: s,
                            onChange: (e) => d(e),
                            disabled: n,
                            label: l,
                            description: null != a || "" === a ? a : void 0,
                            value: "checkbox-value",
                            labelType: i,
                            leadingIcon: r ? e$.m : void 0,
                        }),
                        (0, t.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", s ? "Checked" : "Unchecked"],
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
                                    disabled: n,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: c,
                                    disabled: n,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: h,
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
var eW = a(167417);
let eU = {
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
                        description: r,
                        showIcons: s,
                        withMixedDisabledOptions: d,
                    } = e,
                    [u, c] = o.useState(["option1"]),
                    h = o.useMemo(
                        () =>
                            [
                                {
                                    label: null != i ? `${i} 1` : "Option 1",
                                    value: "option1",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: s ? e$.m : void 0,
                                    disabled: !d && void 0,
                                },
                                {
                                    label: null != i ? `${i} 2` : "Option 2",
                                    value: "option2",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: s ? e$.m : void 0,
                                    disabled: !!d || void 0,
                                },
                                {
                                    label: null != i ? `${i} 3` : "Option 3",
                                    value: "option3",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: s ? e$.m : void 0,
                                    disabled: !d && void 0,
                                },
                                {
                                    label: null != i ? `${i} 4` : "Option 4",
                                    value: "option4",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: s ? e$.m : void 0,
                                    disabled: !!d || void 0,
                                },
                                {
                                    label: null != i ? `${i} 5` : "Option 5",
                                    value: "option5",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: s ? e$.m : void 0,
                                    disabled: !d && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, a))),
                        [a, i, r, s, d],
                    ),
                    x = o.useCallback((e) => {
                        c(e);
                    }, []),
                    v = o.useCallback(() => {
                        c(h.map((e) => e.value));
                    }, [h]),
                    f = o.useCallback(() => {
                        c([]);
                    }, []),
                    g = o.useCallback(() => {
                        h.length > 0 && c([h[0].value]);
                    }, [h]);
                return (0, t.jsxs)(b.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(eW.$, { selectedValues: u, label: n, onChange: x, options: h, disabled: l }),
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
                                    onClick: v,
                                    disabled: l || 0 === h.length,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: g,
                                    disabled: l || 0 === h.length,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear All",
                                    onClick: f,
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
var eq = a(693321),
    eX = a(770378),
    eZ = a(521767),
    eK = a(170676),
    eY = a(197867),
    eJ = a(987062),
    eQ = a(561392),
    e0 = a(716263),
    e1 = a(81466),
    e2 = a(862301),
    e6 = a(760345);
function e8(e) {
    let { value: l, onChange: a, minValue: o, maxValue: n, placeholderValue: i, ...r } = e,
        { i18n: s } = (0, eL.G9)(),
        { fieldProps: d } = (0, N.n)(r),
        { disabled: u, errorMessage: c, required: b = !1 } = d,
        p = { hasError: null != c && "" !== c },
        {
            refs: m,
            floatingStyles: h,
            isOpen: x,
            setIsOpen: f,
            context: g,
            getFloatingProps: y,
            getReferenceProps: C,
        } = (0, eQ.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: j, styles: V } = (0, e0.DL)(g, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        k = (e) => {
            a?.(e), f(!1);
        };
    return (0, t.jsx)(N.D, {
        ...d,
        children: (e) =>
            (0, t.jsx)(e2.F, {
                className: e6.LF,
                validation: p,
                ref: m.setReference,
                ...C(),
                children: (0, t.jsxs)(eX.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: k,
                    isDisabled: u,
                    isRequired: b,
                    minValue: o,
                    maxValue: n,
                    placeholderValue: i,
                    granularity: "day",
                    "data-mana-component": "date-picker",
                    className: e6.Nz,
                    children: [
                        (0, t.jsxs)(eZ.Y, {
                            className: e6.wO,
                            children: [
                                (0, t.jsx)(eK.J3, {
                                    children: (e) =>
                                        (0, t.jsx)(eK.Eu, {
                                            segment: e,
                                            className: v()(e6.mX, e.isPlaceholder && e6.qf),
                                        }),
                                }),
                                (0, t.jsx)(eY.$, {
                                    className: e6.B7,
                                    onClick: () => f(!x),
                                    "aria-label": s.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(e1.C, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        x &&
                            j &&
                            (0, t.jsx)("div", {
                                ...y(),
                                ref: m.setFloating,
                                style: h,
                                className: e6.oO,
                                children: (0, t.jsx)(eq.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(eJ.lG, {
                                        "aria-label": s.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: V,
                                        className: e6.r3,
                                        children: (0, t.jsx)(eO, {
                                            value: l,
                                            onChange: k,
                                            minValue: o,
                                            maxValue: n,
                                            disabled: u,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
let e5 = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let { label: l, description: a, errorMessage: n, disabled: i, required: r, showMinMax: s } = e,
                    [d, u] = o.useState((0, e_.Ec)((0, e_.Xj)())),
                    c = o.useCallback((e) => {
                        u(e);
                    }, []),
                    p = o.useCallback(() => {
                        u(null);
                    }, []),
                    h = o.useCallback(() => {
                        u((0, e_.Ec)((0, e_.Xj)()));
                    }, []),
                    x = o.useCallback(() => {
                        u((0, eT._U)("2024-12-25"));
                    }, []);
                return ez("CalendarStory")
                    ? (0, t.jsxs)(b.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(e8, {
                                  label: l,
                                  description: "" !== a ? a : void 0,
                                  value: d,
                                  onChange: c,
                                  disabled: i,
                                  required: r,
                                  minValue: s ? (0, eT._U)("2024-01-01") : void 0,
                                  maxValue: s ? (0, eT._U)("2024-12-31") : void 0,
                                  errorMessage: "" !== n ? n : void 0,
                                  helperText: null != d ? (0, eM.default)(d.toDate((0, e_.Xj)()), "MMMM d, yyyy") : "",
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
                                          disabled: i,
                                      }),
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: h,
                                          disabled: i,
                                      }),
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: x,
                                          disabled: i,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(eR.w, {
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
var e4 = a(668953),
    e3 = a(881636);
function e9(e) {
    let {
            value: l,
            onChange: a,
            minValue: n,
            maxValue: i,
            isDisabled: r = !1,
            isReadOnly: s = !1,
            visibleMonths: d = 1,
            className: u,
            "aria-label": c,
        } = e,
        { i18n: b, locale: m } = (0, eL.G9)(),
        h = l?.start ?? null,
        [x, f] = o.useState(h);
    return (
        o.useEffect(() => {
            f(h);
        }, [h]),
        (0, t.jsx)(eD._e, {
            value: l,
            focusedValue: x,
            onFocusChange: f,
            onChange: a,
            minValue: n,
            maxValue: i,
            isDisabled: r,
            isReadOnly: s,
            visibleDuration: { months: d },
            "aria-label": c,
            "data-mana-component": "range-calendar",
            className: v()(eI.BJ, d > 1 && eI.Q7, u),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: eI.I4,
                            children: [
                                (0, t.jsx)(ej.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: e4.f,
                                    "aria-label": b.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: eI.Wb,
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
                                (0, t.jsx)(ej.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: e3.u,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": b.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: eI.US,
                            children: Array.from({ length: d }, (e, l) =>
                                (0, t.jsx)(eP, { offset: { months: l }, isRangeSelection: !0 }, l),
                            ),
                        }),
                    ],
                }),
        })
    );
}
function e7(e) {
    let {
            value: l,
            onChange: a,
            minValue: o,
            maxValue: n,
            placeholderValue: i,
            startName: r,
            endName: s,
            fullWidth: d = !1,
            ...u
        } = e,
        { i18n: c } = (0, eL.G9)(),
        { fieldProps: b } = (0, N.n)(u),
        { disabled: p, errorMessage: m, required: h = !1 } = b,
        x = { hasError: null != m && "" !== m },
        {
            refs: f,
            floatingStyles: g,
            isOpen: y,
            setIsOpen: C,
            context: j,
            getFloatingProps: V,
            getReferenceProps: k,
        } = (0, eQ.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: S, styles: w } = (0, e0.DL)(j, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        _ = (e) => {
            a(e), e?.start != null && e?.end != null && C(!1);
        };
    return (0, t.jsx)(N.D, {
        ...b,
        children: (e) =>
            (0, t.jsx)(e2.F, {
                className: d ? e6.e2 : e6.qX,
                validation: x,
                ref: f.setReference,
                ...k(),
                children: (0, t.jsxs)(eX.Ur, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: _,
                    isDisabled: p,
                    isRequired: h,
                    minValue: o,
                    maxValue: n,
                    placeholderValue: i,
                    granularity: "day",
                    startName: r,
                    endName: s,
                    "data-mana-component": "date-range-picker",
                    className: e6.Nz,
                    children: [
                        (0, t.jsxs)(eZ.Y, {
                            className: e6.wO,
                            children: [
                                (0, t.jsx)(eK.J3, {
                                    slot: "start",
                                    children: (e) =>
                                        (0, t.jsx)(eK.Eu, {
                                            segment: e,
                                            className: v()(e6.mX, e.isPlaceholder && e6.qf),
                                        }),
                                }),
                                (0, t.jsx)("span", { className: e6.me, "aria-hidden": "true", children: "→" }),
                                (0, t.jsx)(eK.J3, {
                                    slot: "end",
                                    children: (e) =>
                                        (0, t.jsx)(eK.Eu, {
                                            segment: e,
                                            className: v()(e6.mX, e.isPlaceholder && e6.qf),
                                        }),
                                }),
                                (0, t.jsx)(eY.$, {
                                    className: e6.B7,
                                    onClick: () => C(!y),
                                    "aria-label": c.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(e1.C, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        y &&
                            S &&
                            (0, t.jsx)("div", {
                                ...V(),
                                ref: f.setFloating,
                                style: g,
                                className: e6.oO,
                                children: (0, t.jsx)(eq.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(eJ.lG, {
                                        "aria-label": c.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: w,
                                        className: e6.r3,
                                        children: (0, t.jsx)(e9, {
                                            value: l,
                                            onChange: _,
                                            minValue: o,
                                            maxValue: n,
                                            isDisabled: p,
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
let le = {
    title: "DateRangePicker",
    stories: [
        {
            id: "date-range-picker",
            name: "DateRangePicker",
            component: function (e) {
                let { label: l, errorMessage: a, description: n, disabled: i, required: r, showMinMax: s } = e,
                    [d, u] = o.useState({
                        start: (0, e_.Ec)((0, e_.Xj)()),
                        end: (0, e_.Ec)((0, e_.Xj)()).add({ days: 7 }),
                    }),
                    c = o.useCallback((e) => {
                        u(e);
                    }, []),
                    p = o.useCallback(() => {
                        u(null);
                    }, []),
                    h = o.useCallback(() => {
                        let e = (0, e_.Ec)((0, e_.Xj)());
                        u({ start: e, end: e.add({ days: 7 }) });
                    }, []),
                    x = (0, e_.Ec)((0, e_.Xj)()),
                    v = s ? x.subtract({ weeks: 1 }) : void 0,
                    f = s ? x.add({ weeks: 2 }) : void 0;
                return ez("DateRangePickerStory")
                    ? (0, t.jsxs)(b.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(e7, {
                                  label: l,
                                  description: "" !== n ? n : void 0,
                                  value: d,
                                  onChange: c,
                                  disabled: i,
                                  required: r,
                                  errorMessage: "" !== a ? a : void 0,
                                  minValue: v,
                                  maxValue: f,
                                  helperText: (() => {
                                      if (null == d) return "";
                                      let e = (0, eM.default)(d.start.toDate((0, e_.Xj)()), "MMMM d, yyyy"),
                                          l = (0, eM.default)(d.end.toDate((0, e_.Xj)()), "MMMM d, yyyy");
                                      return `${e} – ${l}`;
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
                                          disabled: i,
                                      }),
                                      (0, t.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "This Week",
                                          onClick: h,
                                          disabled: i,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(eR.w, {
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
var ll = a(270003),
    la = a(194261),
    lt = a(243721),
    lo = a(691885),
    ln = a(109802),
    li = a(508274),
    lr = a(121830);
let ls = [
        { label: "Aardvark", value: "aardvark", id: "aardvark" },
        { label: "Cat", value: "cat", id: "cat" },
        { label: "Dog", value: "dog", id: "dog" },
    ],
    ld = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f, 0xe67e22, 0xe74c3c];
function lu(e) {
    let { title: l, children: a, auxiliaryContentPosition: o } = e;
    return (0, t.jsx)(N.D, {
        disabled: !0,
        label: l,
        description: "This row is disabled at the Field level and at the control level.",
        helperText:
            "Every leaf (label, description, helper text, control) should render at a single 0.5 opacity layer.",
        auxiliaryContentPosition: o,
        children: a,
    });
}
function lc(e) {
    let { auxiliaryContentPosition: l } = e;
    return (0, t.jsxs)(b.B, {
        direction: "vertical",
        gap: 24,
        children: [
            (0, t.jsx)(lu, {
                title: "Button",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(m.$, { text: "Remove", variant: "critical-primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(lu, {
                title: "TextButton",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(eV.Q, { text: "View details", variant: "primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(lu, {
                title: "Switch",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(lt.d, {
                    label: "Allow direct messages",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                }),
            }),
            (0, t.jsx)(lu, {
                title: "Checkbox",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(eG.S, {
                    label: "Accept terms",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                    value: "accept-terms",
                }),
            }),
            (0, t.jsx)(lu, {
                title: "InputField",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(e2.F, {
                    disabled: !0,
                    children: (0, t.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: "Inner InputField content",
                    }),
                }),
            }),
            (0, t.jsx)(lu, {
                title: "Select",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(lo.l, {
                    label: "Animal",
                    hideLabel: !0,
                    options: ls,
                    selectionMode: "single",
                    onSelectionChange: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(lu, {
                title: "CopyInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(ln.e, {
                    value: "https://discord.gg/disabled-example",
                    supportsCopy: !0,
                    onCopy: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(lu, {
                title: "ColorPicker",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(li.sk, {
                    defaultColor: ld[0],
                    customColor: null,
                    colors: ld,
                    value: ld[0],
                    disabled: !0,
                    onChange: () => {},
                    renderDefaultButton: (e) => (0, t.jsx)(li.fy, { ...e }),
                    renderCustomButton: (e) => (0, t.jsx)(li.nJ, { ...e }),
                }),
            }),
            (0, t.jsx)(lu, {
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
let lb = {
    title: "Forms",
    stories: [
        {
            name: "FieldSet",
            id: "fieldset",
            component: function (e) {
                let { label: l } = e;
                return (0, t.jsx)("div", {
                    children: (0, t.jsxs)(ll.n, {
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
                    children: (0, t.jsx)(N.D, {
                        ...a,
                        description: "" === l ? void 0 : l,
                        icon: a.showIcon ? la.X : void 0,
                        children: (0, t.jsx)("div", {
                            className: lr.q,
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
            component: lc,
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
                return (0, t.jsx)(lc, { auxiliaryContentPosition: "under-label" });
            },
        },
    ],
};
var lp = a(404778),
    lm = a(935063),
    lh = a(661531),
    lx = a(307301),
    lv = a(892547),
    lf = a(260598);
let lg = [
        { id: "strength", label: "Strength", icon: lm.X },
        { id: "wisdom", label: "Wisdom", icon: { type: "role", color: lh.A.unsafe_rawColors.BRAND_500.css } },
        { id: "charisma", label: "Charisma" },
        { id: "intelligence", label: "Intelligence" },
        { id: "dexterity", label: "Dexterity" },
        { id: "constitution", label: "Constitution" },
    ],
    ly = {
        title: "Input Components",
        stories: [
            {
                name: "TextInput",
                component: function (e) {
                    let { leading: l, trailing: a, ...n } = e,
                        [i, r] = o.useState(""),
                        [d, u] = o.useState(lg),
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
                                ...n,
                                value: i,
                                onChange: r,
                                leading: (function (e) {
                                    switch (e) {
                                        case "tags":
                                            return { type: "tags", label: "Tags", items: d, onRemove: c };
                                        case "icon":
                                            return { icon: lm.X, onClick: s.tE, "aria-label": "At" };
                                        case "text":
                                            return "https://discord.gg/";
                                        default:
                                            return;
                                    }
                                })(l),
                                trailing: "icon" === a ? { icon: lx.j, onClick: s.tE, "aria-label": "At" } : void 0,
                                maxLength: 500,
                            }),
                            "tags" === l
                                ? (0, t.jsx)(m.$, {
                                      text: "Reset Tags",
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => u(lg),
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
                    return (0, t.jsx)(lv.I, {
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
                    return (0, t.jsx)(lf.f, { ...e, value: l, onChange: a });
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
                            required: n,
                            error: i,
                            disabled: r,
                            placeholder: d,
                            value: u = "",
                            readOnly: c,
                            helperText: p,
                            successMessage: m,
                            showCharacterCount: h,
                        } = e,
                        x = {
                            label: l,
                            hideLabel: a,
                            description: o,
                            required: n,
                            value: u,
                            error: i,
                            disabled: r,
                            placeholder: d,
                            readOnly: c,
                            helperText: p,
                            showCharacterCount: h,
                            successMessage: m,
                        };
                    return (0, t.jsxs)(b.B, {
                        gap: 24,
                        children: [
                            (0, t.jsxs)(ll.n, {
                                label: "Text Input",
                                children: [
                                    (0, t.jsx)(ec.k, { ...x }),
                                    (0, t.jsx)(ec.k, { ...x, clearable: !0 }),
                                    (0, t.jsx)(ec.k, {
                                        ...x,
                                        leading: { icon: lm.X, onClick: s.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(ec.k, { ...x, leading: lm.X }),
                                    (0, t.jsx)(ec.k, { ...x, leading: "https://discord.gg/" }),
                                    (0, t.jsx)(ec.k, {
                                        ...x,
                                        trailing: { icon: lm.X, onClick: s.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(ec.k, { ...x, trailing: lm.X }),
                                    (0, t.jsx)(ec.k, {
                                        ...x,
                                        leading: { type: "tags", label: "Tags", items: lg.slice(0, 3) },
                                    }),
                                ],
                            }),
                            (0, t.jsx)(lp.c, {}),
                            (0, t.jsxs)(ll.n, {
                                label: "Search Bar",
                                children: [
                                    (0, t.jsx)(lv.I, { query: u, onChange: s.tE, disabled: r, placeholder: d }),
                                    (0, t.jsx)(lv.I, {
                                        query: u,
                                        onChange: s.tE,
                                        size: "sm",
                                        disabled: r,
                                        placeholder: d,
                                    }),
                                ],
                            }),
                            (0, t.jsx)(lp.c, {}),
                            (0, t.jsx)(ll.n, { label: "Text Area", children: (0, t.jsx)(lf.f, { ...x }) }),
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
var lC = a(102079),
    lj = a(224640),
    lV = a(430993),
    lk = a(276293),
    lS = a(189213),
    lw = a(772707),
    l_ = a(347704),
    lT = a(116833),
    lM = a(521489),
    lD = a(192308),
    lE = a(783878),
    lN = a(314116);
let lA = "/assets/f66ae7bb8510ab4f.svg";
function lL() {
    return (0, t.jsx)(p.E, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "Lost access to your radness? Talk to your radness provider to refresh your aura.",
    });
}
function lI(e) {
    let { setIsSafetyAccepted: l, setIsHelmetSelected: a } = e,
        [n, i] = o.useState([]),
        r = [
            { label: "I am wearing a helmet", value: "helmet" },
            { label: "I know where to find my personal flotation device", value: "pfd" },
            { label: "I completed the safety training", value: "training" },
        ];
    return (
        o.useEffect(() => {
            l(n.length === r.length), a(n.includes("helmet"));
        }, [n, r.length, l, a]),
        (0, t.jsx)(eW.$, { label: "Safety checklist", options: r, selectedValues: n, onChange: i })
    );
}
function lP(e) {
    let { setIsPasscodeValid: l } = e,
        [a, n] = o.useState("");
    return (0, t.jsx)(ec.k, {
        placeholder: "Enter your passcode...",
        value: a,
        onChange: (e) => {
            n(e), l(e.length > 0);
        },
    });
}
function lO(e) {
    let {
            callbackDelay: l,
            failOnNext: a,
            failOnComplete: n,
            onCompleteAlert: i,
            onNextAlert: r,
            customErrorNotice: s,
            errorNoticeType: d,
            ...u
        } = e,
        [c, b] = o.useState("intro"),
        [p, m] = o.useState(!1),
        [h, x] = o.useState(!1),
        [v, f] = o.useState(!1),
        [g, y] = o.useState(null),
        C = o.useCallback(async () => {
            if (
                (y(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                r && alert("onNext callback fired"),
                a)
            ) {
                if ("" !== s.trim()) return y({ message: s, type: d }), !1;
                throw Error("onNext failed");
            }
            return !0;
        }, [l, a, r, s, d]),
        j = o.useCallback(async () => {
            if (
                (y(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                i && alert("onComplete callback fired"),
                n)
            ) {
                if ("" !== s.trim()) throw (y({ message: s, type: d }), Error("Custom error"));
                throw Error("onComplete failed");
            }
        }, [l, n, i, s, d]),
        V = [
            {
                stepKey: "intro",
                modalProps: {
                    title: "Verify radness",
                    subtitle: "To verify your radness, we need to ask you a few deep and personal questions.",
                    notice: null != g ? { message: g.message, type: g.type } : void 0,
                },
                body: (0, t.jsx)(lL, {}),
                nextButtonProps: { text: "Verify" },
                onNext: C,
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
                            : v
                              ? {
                                    message: "Great job, helmets are important for protecting your brain!",
                                    type: "warning",
                                }
                              : void 0,
                },
                body: (0, t.jsx)(lI, { setIsSafetyAccepted: m, setIsHelmetSelected: f }),
                nextEnabled: p,
                onNext: C,
            },
            {
                stepKey: "passcode",
                modalProps: {
                    title: "Enter passcode",
                    subtitle: "Enter your passcode to complete the radness verification process.",
                    notice: null != g ? { message: g.message, type: g.type } : void 0,
                },
                body: (0, t.jsx)(lP, { setIsPasscodeValid: x }),
                nextButtonProps: { text: "Verify passcode" },
                nextEnabled: h,
            },
        ],
        k = V.slice(1).map((e) => e.stepKey);
    return (0, t.jsx)(l_.t, { steps: V, currentStepKey: c, numberedSteps: k, onStepChange: b, onComplete: j, ...u });
}
let lR = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                let { showPreview: l, showInput: a, subtitleIcon: o, ...n } = e,
                    i = o ? { text: n.subtitle ?? "Default subtitle", leadingIcon: lk.N } : n.subtitle;
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
                                (0, lD.openModal)(
                                    (e) =>
                                        (0, t.jsx)(lS.Modal, {
                                            ...e,
                                            ...n,
                                            title: n.title,
                                            subtitle: i,
                                            input: a
                                                ? (0, t.jsx)(lv.I, {
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
                                                    (0, t.jsx)(lE.Z, {
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
                let { cancelText: l, confirmDelay: a, confirmError: n, subtitle: i, formatSubtitle: r, ...s } = e,
                    d = o.useMemo(
                        () =>
                            r
                                ? (function (e) {
                                      let l,
                                          a = [],
                                          o = 0,
                                          n = /\*\*(.+?)\*\*/g,
                                          i = 0;
                                      for (; null !== (l = n.exec(e)); )
                                          l.index > o && a.push(e.substring(o, l.index)),
                                              a.push((0, t.jsx)("strong", { children: l[1] }, i++)),
                                              (o = n.lastIndex);
                                      return o < e.length && a.push(e.substring(o)), a.length > 0 ? a : e;
                                  })(i)
                                : i,
                        [i, r],
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
                                (0, lN.A)({
                                    ...s,
                                    subtitle: d,
                                    cancelText: "" === l ? void 0 : l,
                                    onConfirm: async (e) => {
                                        try {
                                            if ((await new Promise((e) => setTimeout(e, 1e3 * a)), n))
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
                let { graphic: l, subtitleIcon: n, ...i } = e,
                    r = n ? { text: i.subtitle ?? "Default subtitle", leadingIcon: lk.N } : i.subtitle,
                    s = o.useMemo(
                        () =>
                            0 === l
                                ? { type: "image", src: lA }
                                : 1 === l
                                  ? {
                                        type: "lottie",
                                        lottie: () => a.e("95947").then(a.t.bind(a, 604902, 19)),
                                        aspectRatio: "6/4",
                                    }
                                  : 2 === l
                                    ? { type: "rive", rive: lC.Q }
                                    : 3 === l
                                      ? {
                                            type: "video",
                                            src: "https://cdn.discordapp.com/assets/content/06fafa729efafb6235e0ee9df9482566fa9e74b96a792a9265dca70113c71ab7.webm",
                                            fallbackImageSrc: lA,
                                            loop: !0,
                                            loopAt: 2.5,
                                        }
                                      : 4 === l
                                        ? {
                                              type: "dynamic",
                                              component: lT.DynamicGraphicComponent.DEMO,
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
                                (0, lD.openModal)(
                                    (e) =>
                                        (0, t.jsx)(lw.k, {
                                            ...e,
                                            ...i,
                                            title: i.title,
                                            subtitle: r,
                                            graphic: s,
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
                        component: lT.DynamicGraphicComponent.DEMO,
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
                                (0, lD.openModalLazy)(
                                    async () => {
                                        let { ExpressiveModal: e } = await a.e("4823").then(a.bind(a, 158954));
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
                                (0, lD.openModal)((e) =>
                                    (0, t.jsx)(lM.N, {
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
                    onCompleteAlert: n,
                    onNextAlert: i,
                    customErrorNotice: r,
                    errorNoticeType: s,
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
                                (0, lD.openModal)((e) =>
                                    (0, t.jsx)(lO, {
                                        ...e,
                                        callbackDelay: l,
                                        failOnNext: a,
                                        failOnComplete: o,
                                        onCompleteAlert: n,
                                        onNextAlert: i,
                                        customErrorNotice: r,
                                        errorNoticeType: s,
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
                                (0, lD.openModal)(
                                    (e) =>
                                        (0, t.jsx)(lj.d, {
                                            ...e,
                                            ...o,
                                            "aria-label": "Base Modal Example",
                                            children: (0, t.jsx)(lV.c, {
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
                                                                              " — This is filler content to demonstrate overflow and scrolling behavior.",
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
var lB = a(43105),
    lz = a(338854),
    lF = a(353795),
    l$ = a(312640),
    lG = a(798618),
    lH = a(916845),
    lW = a(627330),
    lU = a(985018),
    lq = a(824078);
function lX(e) {
    let {
            steps: l,
            caretConfig: a = { align: "center" },
            size: n = "md",
            onStepChange: i,
            onRequestClose: r,
            popoverRef: s,
            shouldShow: d,
            position: u,
            ...c
        } = e,
        [b, h] = o.useState(0);
    o.useEffect(() => {
        d && h(0);
    }, [d]),
        o.useEffect(() => {
            i?.(b);
        }, [b, i]);
    let x = l[b],
        f = b + 1 === l.length,
        g = o.useCallback(() => {
            x?.onCta?.(), f ? r?.() : h((e) => e + 1);
        }, [x, f, r]),
        y = o.useCallback(() => {
            r?.();
        }, [r]),
        C = o.useCallback(() => {
            r?.();
        }, [r]);
    if (!d || null == x) return null;
    let j = {
            text: x.action?.text ?? (f ? lU.intl.string(lU.t.i4jeWR) : lU.intl.string(lU.t.PDTjLN)),
            variant: x.action?.variant ?? "primary",
            onClick: g,
            ...x.action,
        },
        V = {
            targetElementRef: c.targetElementRef,
            hasVideo: c.hasVideo,
            scrollBehavior: c.scrollBehavior,
            position: u,
            shouldShow: d,
            onRequestClose: y,
            gradientColor: x.gradientColor,
            caretConfig: a,
            ...("edge" === c.alignmentStrategy
                ? { alignmentStrategy: "edge", align: c.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, t.jsx)(l$.x, {
        ...V,
        children: (0, t.jsxs)("div", {
            ref: s,
            children: [
                (0, t.jsx)(lH.q, { onClick: C, variant: null != x.gradientColor ? "color-mix" : void 0 }),
                null != x.graphic &&
                    (0, t.jsx)("div", {
                        className: v()(lq.graphic, { [lq[`graphic--${n}`]]: null != n }),
                        children: (0, t.jsx)(lF.v, {
                            ...x.graphic,
                            aspectRatio: x.graphic.aspectRatio ?? ("sm" === n ? "2/1" : "16/9"),
                        }),
                    }),
                (0, t.jsx)(lW.D, { title: x.title, body: x.body, badge: x.badge, textLink: x.textLink }),
                (0, t.jsx)("div", {
                    className: lq.actionBar,
                    children: (0, t.jsxs)("div", {
                        className: lq.multistepActionLayout,
                        children: [
                            (0, t.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: lq.multistepIndicator,
                                children: lU.intl.formatToPlainString(lU.t.rO31eY, {
                                    count: b + 1,
                                    totalSteps: l.length,
                                }),
                            }),
                            (0, t.jsx)(m.$, { size: "sm", ...j }),
                        ],
                    }),
                }),
                (0, t.jsx)(lG.F, {}),
            ],
        }),
    });
}
let lZ =
        "https://cdn.discordapp.com/assets/content/26736d800236761a21973e6fe690dfd5fa484f664976b3bba91b98d5d47bb1f7.svg",
    lK = {
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
                            alignmentStrategy: r,
                            align: s,
                            size: d,
                            position: u,
                            ...c
                        } = e,
                        [b, p] = o.useState(!1),
                        h = o.useRef(null);
                    return (0, t.jsxs)("div", {
                        style: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" },
                        children: [
                            (0, t.jsx)(
                                lB.A,
                                {
                                    ...c,
                                    position: u,
                                    size: d,
                                    align: s,
                                    alignmentStrategy: r,
                                    targetElementRef: h,
                                    shouldShow: b,
                                    onRequestClose: () => p(!1),
                                    graphic: l
                                        ? {
                                              type: "image",
                                              src:
                                                  "sm" === d
                                                      ? "https://cdn.discordapp.com/assets/content/7c8ee05f499cdf960d0b69208667276e8ca276aa2edcee6141d55e237d1ed5d2.svg"
                                                      : lZ,
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
                            (0, t.jsx)(m.$, {
                                variant: "primary",
                                text: "Toggle Popover",
                                buttonRef: h,
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
                        [n, i] = o.useState(!1),
                        r = o.useRef(null);
                    return (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(
                                lz.H,
                                {
                                    ...a,
                                    targetElementRef: r,
                                    shouldShow: n,
                                    onRequestClose: () => i(!1),
                                    title: "Video Popover Demo",
                                    body: "Click the video to view it in the media viewer!",
                                    assetUrl:
                                        "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                                    badge: "new",
                                    action: l ? { text: "Learn More", onClick: () => i(!1) } : void 0,
                                },
                                a.position,
                            ),
                            (0, t.jsx)(m.$, {
                                variant: "primary",
                                text: "Show Video Popover",
                                buttonRef: r,
                                onClick: () => i(!n),
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
                        [n, i] = o.useState(!1),
                        r = o.useRef(null),
                        s = [
                            {
                                title: "Welcome to the Feature!",
                                body: "This is the first step of our multi-step introduction.",
                                asset: (0, t.jsx)("img", { src: lZ, alt: "Step 1" }),
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
                                asset: (0, t.jsx)("img", { src: lZ, alt: "Step 3" }),
                                action: { text: "Get Started", variant: l ? "expressive" : void 0 },
                                gradientColor: "nitro-pink",
                                textLink: { text: "Learn More", link: "https://discord.com", external: !0 },
                            },
                        ];
                    return (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(
                                lX,
                                {
                                    ...a,
                                    targetElementRef: r,
                                    shouldShow: n,
                                    onRequestClose: () => i(!1),
                                    steps: s,
                                    caretConfig: { align: "center" },
                                    onStepChange: () => {},
                                },
                                a.position,
                            ),
                            (0, t.jsx)(m.$, {
                                variant: "primary",
                                text: "Show Multi-Step",
                                buttonRef: r,
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
var lY = a(144228);
let lJ = {
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
                            description: r,
                            showIcons: s,
                            withMixedDisabledOptions: d,
                        } = e,
                        [u, c] = o.useState("option1"),
                        h = o.useMemo(
                            () =>
                                [
                                    {
                                        name: null != i ? `${i} 1` : "Option 1",
                                        value: "option1",
                                        desc: null == r || "" === r ? void 0 : r,
                                        leadingIcon: s ? e$.m : void 0,
                                        disabled: !d && void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 2` : "Option 2",
                                        value: "option2",
                                        desc: null == r || "" === r ? void 0 : r,
                                        leadingIcon: s ? e$.m : void 0,
                                        disabled: !!d || void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 3` : "Option 3",
                                        value: "option3",
                                        desc: null == r || "" === r ? void 0 : r,
                                        leadingIcon: s ? e$.m : void 0,
                                        disabled: !d && void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 4` : "Option 4",
                                        value: "option4",
                                        desc: null == r || "" === r ? void 0 : r,
                                        leadingIcon: s ? e$.m : void 0,
                                        disabled: !!d || void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 5` : "Option 5",
                                        value: "option5",
                                        desc: null == r || "" === r ? void 0 : r,
                                        leadingIcon: s ? e$.m : void 0,
                                        disabled: !d && void 0,
                                    },
                                ].slice(0, Math.max(1, Math.min(5, a))),
                            [a, i, r, s, d],
                        ),
                        x = o.useCallback((e) => {
                            c(e);
                        }, []),
                        v = o.useCallback(() => {
                            h.length > 0 && c(h[0].value);
                        }, [h]),
                        f = o.useCallback(() => {
                            h.length > 0 && c(h[h.length - 1].value);
                        }, [h]),
                        g = o.useCallback(() => {
                            c(void 0);
                        }, []);
                    return (0, t.jsxs)(b.B, {
                        direction: "vertical",
                        gap: "md",
                        children: [
                            (0, t.jsx)(lY.z, { value: u, label: n, onChange: x, options: h, disabled: l }),
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
                                        onClick: v,
                                        disabled: l || 0 === h.length,
                                    }),
                                    (0, t.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Select Last",
                                        onClick: f,
                                        disabled: l || 0 === h.length,
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
    lQ = {
        title: "RangeCalendar",
        stories: [
            {
                id: "range-calendar",
                name: "RangeCalendar",
                component: function (e) {
                    let { disabled: l, readOnly: a, showMinMax: n } = e,
                        [i, r] = o.useState({
                            start: (0, e_.Ec)((0, e_.Xj)()),
                            end: (0, e_.Ec)((0, e_.Xj)()).add({ days: 7 }),
                        }),
                        s = o.useCallback((e) => {
                            r(e);
                        }, []),
                        d = o.useCallback(() => {
                            r(null);
                        }, []),
                        u = o.useCallback(() => {
                            let e = (0, e_.Ec)((0, e_.Xj)());
                            r({ start: e, end: e.add({ days: 7 }) });
                        }, []),
                        c = o.useCallback(() => {
                            r({ start: (0, eT._U)("2024-12-01"), end: (0, eT._U)("2024-12-31") });
                        }, []);
                    if (!ez("RangeCalendarStory"))
                        return (0, t.jsxs)(eR.w, {
                            type: "critical",
                            children: [
                                "This component is experimental and only available behind the ",
                                (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                                " ",
                                "experiment. Do not use this in production yet.",
                            ],
                        });
                    let h = (e) => (null == e ? "None" : (0, eM.default)(e.toDate((0, e_.Xj)()), "MMMM d, yyyy"));
                    return (0, t.jsxs)(b.B, {
                        direction: "vertical",
                        gap: "md",
                        children: [
                            (0, t.jsx)(e9, {
                                value: i,
                                onChange: s,
                                isDisabled: l,
                                isReadOnly: a,
                                minValue: n ? (0, eT._U)("2024-01-01") : void 0,
                                maxValue: n ? (0, eT._U)("2024-12-31") : void 0,
                                "aria-label": "Select a date range",
                            }),
                            (0, t.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                children: ["Selected range: ", null != i ? `${h(i.start)} – ${h(i.end)}` : "None"],
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
var l0 = a(593924),
    l1 = a(844222),
    l2 = a(692327);
let l6 = Object.entries(l0)
    .filter((e) => {
        let l = e[1];
        return "function" == typeof l && "riveSrc" in l;
    })
    .map((e) => {
        let [l, a] = e;
        return { name: l, Component: a };
    })
    .sort((e, l) => e.name.localeCompare(l.name));
var l8 = a(649998),
    l5 = a(732771),
    l4 = a(379649);
let l3 = [
        { label: "Aardvark", value: "aardvark", id: "aardvark", description: "This is an aardvark" },
        { label: "Cat", value: "cat", id: "cat", description: "This is a cat" },
        { label: "Dog", value: "dog", id: "dog" },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", description: "This is a kangaroo" },
        { label: "Panda", value: "panda", id: "panda" },
        { label: "Snake", value: "snake", id: "snake", disabled: !0 },
    ],
    l9 = [
        {
            label: "Aardvark",
            value: "aardvark",
            id: "aardvark",
            leading: lk.N,
            trailing: { type: "badge", badgeType: "new" },
            description: "This is an aardvark",
        },
        { label: "Cat", value: "cat", id: "cat", leading: lk.N, trailing: "20m", description: "This is a cat" },
        { label: "Dog", value: "dog", id: "dog", leading: lk.N },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", leading: { type: "image", src: l4 } },
        { label: "Panda", value: "panda", id: "panda", leading: { type: "avatar", src: l4 } },
        { label: "Snake", value: "snake", id: "snake", leading: lk.N, disabled: !0 },
    ],
    l7 = {
        title: "Select",
        stories: [
            {
                id: "select",
                name: "Select",
                component: function (e) {
                    let { selectionMode: l, withLeadingAndTrailing: a, ...n } = e,
                        [i, r] = o.useState(void 0),
                        [s, d] = o.useState([]),
                        u = ae(a, n.asyncOptions);
                    return "single" === l
                        ? (0, t.jsx)(lo.l, { ...n, selectionMode: l, options: u, onSelectionChange: r, value: i })
                        : (0, t.jsx)(lo.l, { ...n, selectionMode: l, options: u, onSelectionChange: d, value: s });
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
                    let { selectionMode: l, withLeadingAndTrailing: a, asyncOptions: n, ...i } = e,
                        [r, s] = o.useState(void 0),
                        [d, u] = o.useState([]),
                        c = ae(a, n);
                    return "single" === l
                        ? (0, t.jsx)(lE.Z, { ...i, selectionMode: l, onSelectionChange: s, value: r, options: c })
                        : (0, t.jsx)(lE.Z, { ...i, selectionMode: l, onSelectionChange: u, value: d, options: c });
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
                            hideLabel: n,
                            description: i,
                            helperText: r,
                            errorMessage: s,
                            successMessage: d,
                            wrapTags: u,
                            withLeadingAndTrailing: c,
                            placeholder: b,
                            ...p
                        } = e,
                        { required: m, disabled: h } = p,
                        x = ae(c, p.asyncOptions),
                        [v, f] = o.useState(null);
                    return (0, t.jsxs)(l5.iS, {
                        selectionMode: l,
                        onSelectionChange: f,
                        options: x,
                        value: v,
                        ...p,
                        children: [
                            (0, t.jsx)(l5.a3, {
                                label: a,
                                hideLabel: n,
                                placeholder: b,
                                required: m,
                                disabled: h,
                                description: i,
                                helperText: r,
                                errorMessage: s,
                                successMessage: d,
                                wrapTags: u,
                            }),
                            (0, t.jsx)(l5.X2, {}),
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
                    let { selectionMode: l, required: a, shouldFocusWrap: n, withLeadingAndTrailing: i } = e,
                        [r, s] = o.useState(null);
                    return (0, t.jsx)(l8.q, {
                        selectionMode: l,
                        required: a,
                        shouldFocusWrap: n,
                        items: i ? l9 : l3,
                        onSelectionChange: s,
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
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    shouldFocusWrap: { label: "Should focus wrap", type: "boolean", defaultValue: !1 },
                },
            },
        ],
    };
function ae(e, l) {
    let a = o.useRef(null);
    return o.useMemo(() => {
        let t = e ? l9 : l3;
        return l
            ? (e) =>
                  new Promise(
                      null != a.current ? (e) => e(a.current) : (e) => setTimeout(() => ((a.current = t), e(t)), 1e3),
                  )
            : t;
    }, [e, l]);
}
let al = {
    title: "Switch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let { disabled: l, hasIcon: a, label: n, description: i, required: r, errorMessage: s } = e,
                    [d, u] = o.useState(!1);
                return (0, t.jsx)(lt.d, {
                    label: n,
                    description: i,
                    required: r,
                    errorMessage: s,
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
var aa = a(340351),
    at = a(11779);
let ao = {
        title: "TagGroup",
        stories: [
            {
                name: "TagGroup",
                id: "tag-group",
                component: function (e) {
                    let { selectionMode: l, removeable: a, layout: r } = e,
                        s = (0, n.bG)([i.default], () => i.default.getCurrentUser()),
                        d = o.useMemo(
                            () => [
                                { id: "strength", label: "Strength", icon: at.r },
                                { id: "dexterity", label: "Dexterity", icon: { type: "role", color: "#ff44aa" } },
                                {
                                    id: "wisdom",
                                    label: "Wisdom",
                                    icon: { type: "avatar", src: s?.getAvatarURL(void 0, 16) ?? "" },
                                },
                                { id: "charisma", label: "Charisma" },
                            ],
                            [s],
                        ),
                        [u, c] = o.useState(d),
                        p = o.useCallback(
                            (e) => {
                                c(u.filter((l) => !e.has(l.id)));
                            },
                            [u],
                        ),
                        h = o.useCallback(() => {
                            c(d);
                        }, [d]),
                        x = (0, t.jsx)(aa.C, {
                            label: "Categories",
                            selectionMode: l,
                            layout: r,
                            items: u,
                            onRemove: a ? p : void 0,
                        }),
                        v = a && (0, t.jsx)(m.$, { disabled: u.length === d.length, text: "Reset", onClick: h });
                    return "inline" === r
                        ? (0, t.jsxs)(b.B, {
                              gap: 24,
                              children: [(0, t.jsx)("div", { style: { display: "flex", gap: 4 }, children: x }), v],
                          })
                        : (0, t.jsxs)(b.B, { gap: 24, children: [x, v] });
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
    an = [
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
var ai = a(364522),
    ar = a(653197);
let as = {
    name: "Text",
    id: "text",
    component: p.E,
    controls: {
        variant: {
            label: "Variant",
            type: "select",
            defaultValue: "text-sm/normal",
            options: Object.values(an).map((e) => ({ label: e, value: e })),
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
var ad = a(459192),
    au = a(990078),
    ac = a(557464);
let ab = {
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
                        customOffset: r,
                        delay: s,
                        spacing: d,
                        ariaHidden: u,
                        ...c
                    } = e,
                    b = o.useMemo(() => {
                        if ("center" !== i && null != i)
                            return "custom" === i ? { align: i, customOffset: r } : { align: i };
                    }, [i, r]);
                return (0, t.jsx)(au.m, {
                    text: l,
                    position: a,
                    align: n,
                    delay: s,
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
                        showAsset: n,
                        assetSize: i,
                        padding: r,
                        position: s,
                        align: d,
                        caretAlign: u,
                        customOffset: c,
                        delay: b,
                        spacing: p,
                        forceOpen: h,
                        ...x
                    } = e,
                    v = o.useMemo(() => {
                        if ("center" !== u && null != u)
                            return "custom" === u ? { align: u, customOffset: c } : { align: u };
                    }, [u, c]),
                    f = o.useMemo(() => (n ? { type: "image", src: ac.A, aspectRatio: "1/1" } : void 0), [n]);
                return (0, t.jsx)(ad.u, {
                    title: l,
                    body: a,
                    position: s,
                    align: d,
                    padding: r,
                    delay: b,
                    spacing: p,
                    caretConfig: v,
                    asset: f,
                    assetSize: i,
                    forceOpen: h,
                    ...x,
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
var ap = a(508382),
    am = a(481224);
let ah = {
        id: "mana",
        name: "Mana",
        groups: [
            {
                title: "Text",
                stories: [
                    as,
                    {
                        name: "Typography Scales",
                        id: "text-scales",
                        component: function (e) {
                            return (0, t.jsx)(ai.Ar, {
                                className: ar.H,
                                children: Object.values(an).map((l) =>
                                    (0, t.jsxs)(
                                        S.Z,
                                        {
                                            className: ar.N,
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
            eC,
            ew,
            eF,
            eH,
            eU,
            e5,
            le,
            lJ,
            lQ,
            al,
            lR,
            ly,
            l7,
            lK,
            ab,
            ao,
            lb,
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
                                    strategy: r,
                                    portal: s,
                                    blockPointerEvents: d,
                                } = e,
                                [u, c] = o.useState(!1);
                            return (0, t.jsx)(ap.Ow, {
                                open: u,
                                onOpenChange: c,
                                placement: l,
                                spacing: a,
                                autoFlip: n,
                                autoShift: i,
                                strategy: r,
                                portal: s,
                                blockPointerEvents: d,
                                renderLayer: () =>
                                    (0, t.jsx)("div", {
                                        className: am.q,
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
                                a = o.useContext(l1.C),
                                [n, i] = o.useState(0);
                            return (0, t.jsxs)(l1.C.Provider, {
                                value: { ...a, reducedMotion: { ...a.reducedMotion, enabled: e } },
                                children: [
                                    (0, t.jsx)("div", {
                                        className: l2.QT,
                                        children: (0, t.jsxs)(b.B, {
                                            gap: 8,
                                            children: [
                                                (0, t.jsx)(lt.d, {
                                                    onChange: () => l((e) => !e),
                                                    label: "Force reduced motion",
                                                    checked: e,
                                                }),
                                                (0, t.jsx)(m.$, {
                                                    onClick: () => i((e) => e + 1),
                                                    text: "Reset animations",
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, t.jsx)(
                                        "div",
                                        {
                                            className: l2.Vg,
                                            children: l6.map((e) => {
                                                let { name: l, Component: a } = e;
                                                return (0, t.jsxs)(
                                                    "div",
                                                    {
                                                        className: l2.Hn,
                                                        children: [
                                                            (0, t.jsx)("div", {
                                                                className: l2.k$,
                                                                children: (0, t.jsx)(a, {
                                                                    style: { width: "100%", height: "100%" },
                                                                }),
                                                            }),
                                                            (0, t.jsx)(p.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-subtle",
                                                                className: l2.Pf,
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
    ax = { collections: [ah, em] };
