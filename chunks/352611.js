a.d(l, { playgroundConfig: () => tX });
var t = {};
(a.r(t), a(323874), a(14289), a(35956));
var o = a(477900),
    n = a(582128),
    i = a(503698),
    s = a.n(i),
    r = a(621466),
    d = a(834730),
    u = a(844222),
    c = a(331322),
    b = a(821609),
    p = a(646514),
    m = a(406117);
let y = "token",
    h = "asset-default",
    v = Object.values(t);
function x(e) {
    let { Animation: l, ...a } = e,
        { fit: t, autoPlay: i, loop: v, paused: x, pauseWhenOffscreen: g } = a,
        { asset: j } = l,
        C = a.anchor === h ? void 0 : a.anchor,
        S = (function (e) {
            if (e !== h) return e === y ? p.A.colors.BACKGROUND_BASE_LOW : e;
        })(a.padColor),
        k = n.useRef(null),
        [w, I] = n.useState(0),
        [T, A] = n.useState("");
    n.useEffect(() => {
        function e() {
            A(
                (function (e, l) {
                    let a = e?.firstElementChild;
                    if (!(0, r.vq)(a, HTMLElement)) return "Nothing rendered";
                    let { width: t, height: o } = a.getBoundingClientRect(),
                        n = `box ${Math.round(t)}\xd7${Math.round(o)} px`,
                        i = a.querySelector("video"),
                        s = a.querySelector("img"),
                        d = i?.currentSrc ?? (null == s ? "" : "" === s.currentSrc ? s.src : s.currentSrc);
                    if ("" === d) return `Loading \xb7 ${n}`;
                    let u = [
                        ["WebM video", l.webmUrl],
                        ["MP4 video", l.mp4Url],
                        ["HEVC video", l.hevcUrl],
                        ...(l.webpSizes ?? []).map((e) => [`${e.width}w animated WebP`, e.url]),
                    ].find((e) => {
                        let [, l] = e;
                        return null != l && new URL(l, window.location.href).href === d;
                    });
                    return `Showing ${u?.[0] ?? "poster"} \xb7 ${n}`;
                })(k.current, j),
            );
        }
        e();
        let l = window.setInterval(e, f);
        return () => window.clearInterval(l);
    }, [j]);
    let M = n.useContext(u.C),
        D = n.useMemo(
            () => ({
                ...M,
                reducedMotion: { ...M.reducedMotion, enabled: a.forceReducedMotion || M.reducedMotion.enabled },
            }),
            [M, a.forceReducedMotion],
        ),
        E = {
            width: V(a.width),
            height: V(a.height),
            aspectRatio: (function (e) {
                let l = e?.trim() ?? "";
                if ("" !== l) return l.includes("/") ? l : Number(l);
            })(a.aspectRatio),
        };
    return (0, o.jsxs)(c.B, {
        direction: "vertical",
        gap: 16,
        children: [
            (0, o.jsxs)(c.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, o.jsx)(b.$, {
                        text: "Restart",
                        variant: "secondary",
                        size: "sm",
                        onClick: () => I((e) => e + 1),
                    }),
                    (0, o.jsx)(d.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: "Drag the stage's corner to resize it.",
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                ref: k,
                className: s()(m.dw, { [m.WY]: a.checkerboard }),
                style: { width: `${a.stageWidth}%`, height: V(a.stageHeight) },
                children: (0, o.jsx)(u.C.Provider, {
                    value: D,
                    children: (0, o.jsx)(
                        l,
                        {
                            ...E,
                            fit: t,
                            anchor: C,
                            padColor: S,
                            autoPlay: i,
                            loop: v,
                            paused: x,
                            pauseWhenOffscreen: g,
                            className: a.showBoxEdge ? m.H : void 0,
                            "aria-label": `${j.name} animation`,
                        },
                        w,
                    ),
                }),
            }),
            (0, o.jsx)(d.E, { variant: "body-sm/normal", color: "text-subtle", children: T }),
        ],
    });
}
let f = 250,
    g = {
        name: "Animated Asset",
        id: "animated-asset",
        component: function (e) {
            let l = v.find((l) => l.asset.name === e.assetName) ?? v[0];
            return null == l
                ? (0, o.jsx)(d.E, {
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children:
                          "No animated assets yet. They show up here once the asset pipeline has generated their components.",
                  })
                : (0, o.jsx)(x, { ...e, Animation: l });
        },
        controls: {
            assetName: {
                label: "Asset",
                hint: "The generated component for each asset in the manifest.",
                type: "select",
                defaultValue: v[0]?.asset.name ?? "",
                options: v.map((e) => {
                    let { asset: l } = e;
                    return { label: l.name, value: l.name };
                }),
            },
            width: {
                label: "Width",
                hint: "Pixels (320) or any CSS length (50%). Empty fills the parent.",
                type: "text",
                defaultValue: void 0,
            },
            height: {
                label: "Height",
                hint: "Pixels or any CSS length. Empty follows the ratio.",
                type: "text",
                defaultValue: void 0,
            },
            aspectRatio: {
                label: "Aspect ratio",
                hint: "A number (1.5) or a ratio (16/9).",
                type: "text",
                defaultValue: void 0,
            },
            fit: {
                label: "Fit",
                type: "select",
                defaultValue: "crop",
                options: [
                    { label: "Crop", value: "crop" },
                    { label: "Pad", value: "pad" },
                ],
            },
            anchor: {
                label: "Anchor",
                type: "select",
                hint: "Asset default uses the asset's meta.json, or center.",
                defaultValue: h,
                options: [
                    { label: "Asset default", value: h },
                    ...[
                        "center",
                        "top",
                        "bottom",
                        "left",
                        "right",
                        "top-left",
                        "top-right",
                        "bottom-left",
                        "bottom-right",
                    ].map((e) => ({ label: e, value: e })),
                ],
            },
            padColor: {
                label: "Pad colour",
                type: "select",
                hint: "Asset default uses the asset's meta.json, or transparent.",
                defaultValue: h,
                options: [
                    { label: "Asset default", value: h },
                    { label: "Transparent", value: "transparent" },
                    { label: "Opaque #RRGGBB", value: "#5865f2" },
                    { label: "Translucent #RRGGBBAA", value: "#5865f280" },
                    { label: "Token: background base low", value: y },
                ],
                isVisible: (e) => "pad" === e.fit,
            },
            autoPlay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
            loop: { label: "Loop", type: "boolean", defaultValue: !0 },
            paused: { label: "Paused", type: "boolean", defaultValue: !1 },
            pauseWhenOffscreen: { label: "Pause when offscreen", type: "boolean", defaultValue: !0 },
            forceReducedMotion: {
                label: "Force reduced motion",
                hint: "Off follows your own reduced motion setting.",
                type: "boolean",
                defaultValue: !1,
            },
            stageWidth: { label: "Stage width (%)", type: "slider", defaultValue: 60, minValue: 10, maxValue: 100 },
            stageHeight: {
                label: "Stage height",
                hint: "Empty fits the asset. Needed for a % height.",
                type: "text",
                defaultValue: void 0,
            },
            checkerboard: { label: "Checkerboard", type: "boolean", defaultValue: !0 },
            showBoxEdge: { label: "Show box edge", type: "boolean", defaultValue: !0 },
        },
    };
function V(e) {
    let l = e?.trim() ?? "";
    if ("" !== l) return /^\d+(\.\d+)?$/.test(l) ? Number(l) : l;
}
var j = a(855986),
    C = a(287809),
    S = a(97808),
    k = a(818348),
    w = a(778712);
let I = {
    id: "avatar",
    name: "Avatar",
    component: function (e) {
        let { size: l = w._3.SIZE_48, status: a, isVR: t = !1, isMobile: n = !1 } = e,
            { user: i } = (0, j.cf)([C.default], () => ({ user: C.default.getCurrentUser() })),
            s = Number(l.split("_")[1]);
        return (0, o.jsx)(S.eu, {
            src: i?.getAvatarURL(void 0, s),
            size: l,
            "aria-label": "Sample User",
            status: a,
            isVR: t,
            isMobile: n,
        });
    },
    controls: {
        size: {
            type: "select",
            label: "Size",
            defaultValue: w._3.SIZE_48,
            options: Object.keys(w._3).map((e) => ({ label: e, value: w._3[e] })),
        },
        status: {
            type: "select",
            label: "Status",
            defaultValue: null,
            options: [{ label: "None", value: null }].concat(
                Object.keys(k.cl).map((e) => ({ label: e, value: k.cl[e] })),
            ),
        },
        isVR: { type: "boolean", label: "VR", defaultValue: !1 },
        isMobile: { type: "boolean", label: "Mobile", defaultValue: !1 },
    },
};
var T = a(812993),
    A = a(782603),
    M = a(27232),
    D = a(933832),
    E = a(194261),
    L = a(403581),
    N = a(534514);
let B = Object.keys(T.EG),
    R = [
        { label: "Round", value: "ROUND" },
        { label: "Round Left", value: "ROUND_LEFT" },
        { label: "Round Right", value: "ROUND_RIGHT" },
        { label: "Square", value: "SQUARE" },
    ],
    P = {
        bell: A.BellIcon,
        star: M.StarIcon,
        checkmark: D.CheckmarkLargeIcon,
        lock: E.LockIcon,
        nitro: L.NitroWheelIcon,
    };
function O(e) {
    return null != e && "" !== e ? e : void 0;
}
let z = {
        shape: { label: "Shape", type: "select", defaultValue: "ROUND", options: R },
        color: { label: "Background color", type: "color", defaultValue: void 0 },
        disableColor: { label: "Disable background color", type: "boolean", defaultValue: !1 },
    },
    G = {
        name: "NumberBadge",
        id: "number-badge",
        component: function (e) {
            let { count: l, shape: a, color: t, disableColor: n } = e;
            return (0, o.jsx)(T.hV, { count: l, shape: T.EG[a], color: O(t), disableColor: n });
        },
        controls: { count: { label: "Count", type: "number", defaultValue: 5, minValue: 0 }, ...z },
    },
    $ = {
        name: "IconBadge",
        id: "icon-badge",
        component: function (e) {
            let { icon: l, shape: a, color: t, disableColor: n } = e,
                i = P[l];
            return n
                ? (0, o.jsx)(T.fk, { icon: i, shape: T.EG[a], disableColor: !0, "aria-label": l })
                : (0, o.jsx)(T.fk, { icon: i, shape: T.EG[a], color: O(t), "aria-label": l });
        },
        controls: {
            icon: {
                label: "Icon",
                type: "select",
                defaultValue: "bell",
                options: [
                    { label: "Bell", value: "bell" },
                    { label: "Star", value: "star" },
                    { label: "Checkmark", value: "checkmark" },
                    { label: "Lock", value: "lock" },
                    { label: "Nitro", value: "nitro" },
                ],
            },
            ...z,
        },
    },
    F = [1, 42, 999, 1500];
var q = a(237528),
    H = a(289049);
let _ = {
        name: "Chip",
        id: "chip",
        component: q.v,
        controls: {
            text: { label: "Text", type: "text", defaultValue: "New" },
            variant: {
                label: "Variant",
                type: "select",
                defaultValue: "grayLight",
                options: [
                    { label: "Blurple Light", value: "blurpleLight" },
                    { label: "Blurple Dark", value: "blurpleDark" },
                    { label: "Green Light", value: "greenLight" },
                    { label: "Green Dark", value: "greenDark" },
                    { label: "Orange Light", value: "orangeLight" },
                    { label: "Yellow Light", value: "yellowLight" },
                    { label: "Red Light", value: "redLight" },
                    { label: "Red Dark", value: "redDark" },
                    { label: "Gray Light", value: "grayLight" },
                    { label: "Gray Medium", value: "grayMedium" },
                    { label: "Gray Dark", value: "grayDark" },
                ],
            },
        },
    },
    U = [
        {
            lightness: "Light",
            variants: ["blurpleLight", "greenLight", "orangeLight", "yellowLight", "redLight", "grayLight"],
        },
        { lightness: "Medium", variants: ["grayMedium"] },
        { lightness: "Dark", variants: ["blurpleDark", "greenDark", "redDark", "grayDark"] },
    ];
var W = a(993077),
    X = a(235986),
    Z = a(244367),
    Y = a(742158),
    K = a(503994);
W.Z.Types;
function Q(e) {
    let l,
        a,
        {
            type: t = W.Z.Types.DANGER,
            imageData: n,
            button: i,
            className: r,
            iconClassName: d,
            title: u,
            body: c,
            style: b,
            align: p = X.A.Align.START,
        } = e,
        m = X.A.Direction.HORIZONTAL;
    if (null != n) {
        let { position: e, ...a } = n;
        ((l = (0, o.jsx)(X.A.Child, {
            grow: 0,
            shrink: 0,
            children: (0, o.jsx)("img", { alt: "", className: s()(K.Kk, d), ...a }),
        })),
            "right" === e && (m = X.A.Direction.HORIZONTAL_REVERSE));
    } else null != i && (a = i);
    let y = !0;
    return (
        t === W.Z.Types.PRIMARY && (y = !1),
        (0, o.jsx)(W.Z, {
            className: s()(K.RJ, r),
            type: t,
            style: b,
            children: (0, o.jsxs)(X.A, {
                direction: m,
                align: p,
                children: [
                    l,
                    (0, o.jsxs)(X.A.Child, {
                        children: [
                            null != u && "" !== u
                                ? (0, o.jsx)(Y.z, {
                                      "data-migration-pending": !0,
                                      className: s()(K.$G, { [K.vV]: y }),
                                      children: u,
                                  })
                                : null,
                            (0, o.jsx)(Z.a, {
                                "data-migration-pending": !0,
                                className: s()(K.Vz, { [K.vV]: y }),
                                children: c,
                            }),
                            a,
                        ],
                    }),
                ],
            }),
        })
    );
}
Q.Types = W.Z.Types;
let J = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: l, title: a, body: t, hasButton: n } = e,
                    i = n ? (0, o.jsx)(b.$, { text: "Action" }) : void 0;
                return (0, o.jsx)(Q, { "data-migration-pending": !0, type: l, title: a, body: t, button: i });
            },
            controls: {
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: W.Z.Types.DANGER,
                    options: [
                        { label: "Primary", value: W.Z.Types.PRIMARY },
                        { label: "Danger", value: W.Z.Types.DANGER },
                        { label: "Warning", value: W.Z.Types.WARNING },
                        { label: "Success", value: W.Z.Types.SUCCESS },
                        { label: "Brand", value: W.Z.Types.BRAND },
                        { label: "Custom", value: W.Z.Types.CUSTOM },
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
                let { children: l, disabled: a, required: t, errorMessage: n } = e,
                    i = n?.trim() === "" ? void 0 : n;
                return (0, o.jsx)("div", {
                    style: { display: "flex", flexDirection: "column", gap: "16px" },
                    children: ["h1", "h2", "h3", "h4", "h5", "legend"].map((e) =>
                        (0, o.jsxs)(
                            "div",
                            {
                                style: { display: "flex", alignItems: "center", gap: "8px" },
                                children: [
                                    (0, o.jsxs)("code", {
                                        style: { minWidth: "60px", fontSize: "12px", color: "#666" },
                                        children: [e, ":"],
                                    }),
                                    (0, o.jsx)(Y.z, {
                                        "data-migration-pending": !0,
                                        tag: e,
                                        disabled: a,
                                        required: t,
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
var ee = a(22231),
    el = a(366605),
    ea = a(624479),
    et = a(625903),
    eo = a(509434),
    en = a(241326),
    ei = a(265872),
    es = a(165862),
    er = a(477782),
    ed = a(630271);
let eu = {
    title: "Menu",
    stories: [
        {
            name: "Menu",
            id: "menu",
            component: function (e) {
                let {
                        variant: l,
                        hideScroller: a,
                        showGroups: t,
                        showCheckboxItems: i,
                        showRadioItems: s,
                        showSwitchItems: r,
                        showSubmenus: d,
                        showIcons: u,
                        showShortcuts: c,
                        showSubtext: p,
                        showDisabledItems: m,
                        showColoredItems: y,
                        showLoading: h,
                        showTrailingIndicator: v,
                        dangerItemColor: x,
                    } = e,
                    [f, g] = n.useState(!0),
                    [V, j] = n.useState(!1),
                    [C, S] = n.useState("text"),
                    [k, w] = n.useState("cozy"),
                    [I, T] = n.useState(!0),
                    A = n.useRef(null);
                return (0, o.jsxs)("div", {
                    className: ed.k,
                    children: [
                        !I && (0, o.jsx)(b.$, { text: "Open Menu", onClick: () => T(!0) }),
                        (0, o.jsx)(ei.Y, {
                            renderPopout: (e) => {
                                let { closePopout: n } = e;
                                return (0, o.jsxs)(es.W, {
                                    "data-menu-migrated": !0,
                                    navId: "menu-story",
                                    "aria-label": "Story Menu",
                                    variant: l,
                                    hideScroller: a,
                                    onClose: n,
                                    onSelect: () => {},
                                    children: [
                                        (0, o.jsx)(er.Dr, {
                                            id: "edit",
                                            label: "Edit Message",
                                            icon: u ? ee.PencilIcon : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: ee.PencilIcon } : void 0,
                                            shortcut: c ? "\u2318E" : void 0,
                                            action: () => {},
                                        }),
                                        (0, o.jsx)(er.Dr, {
                                            id: "pin",
                                            label: "Pin Message",
                                            icon: u ? el.PinIcon : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: el.PinIcon } : void 0,
                                            subtext: p ? "Pin this message to the channel" : void 0,
                                            badge: "beta",
                                            loading: h,
                                            action: () => {},
                                        }),
                                        (0, o.jsx)(er.Dr, {
                                            id: "copy",
                                            label: "Copy Message Link",
                                            icon: u ? ea.CopyIcon : void 0,
                                            leadingAccessory: u ? { type: "icon", icon: ea.CopyIcon } : void 0,
                                            badge: "new",
                                            action: () => {},
                                        }),
                                        m &&
                                            (0, o.jsx)(er.Dr, {
                                                id: "disabled",
                                                label: "Disabled Item",
                                                icon: u ? et.SettingsIcon : void 0,
                                                leadingAccessory: u ? { type: "icon", icon: et.SettingsIcon } : void 0,
                                                disabled: !0,
                                                action: () => {},
                                            }),
                                        y &&
                                            (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                    (0, o.jsx)(er.bX, {}),
                                                    (0, o.jsx)(er.Dr, {
                                                        id: "brand-item",
                                                        label: "Brand Item",
                                                        color: "brand",
                                                        trailingIndicator: v
                                                            ? { type: "icon", icon: eo.LinkExternalSmallIcon }
                                                            : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, o.jsx)(er.Dr, {
                                                        id: "premium-item",
                                                        label: "Premium Item",
                                                        color: "premium",
                                                        icon: u ? et.SettingsIcon : void 0,
                                                        leadingAccessory: u
                                                            ? { type: "icon", icon: et.SettingsIcon }
                                                            : void 0,
                                                        action: () => {},
                                                    }),
                                                    (0, o.jsx)(er.Dr, {
                                                        id: "success-item",
                                                        label: "Success Item",
                                                        color: "success",
                                                        icon: u ? et.SettingsIcon : void 0,
                                                        leadingAccessory: u
                                                            ? { type: "icon", icon: et.SettingsIcon }
                                                            : void 0,
                                                        action: () => {},
                                                    }),
                                                ],
                                            }),
                                        d &&
                                            (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                    (0, o.jsx)(er.bX, {}),
                                                    (0, o.jsxs)(er.Dr, {
                                                        id: "submenu",
                                                        label: "More Options",
                                                        icon: u ? et.SettingsIcon : void 0,
                                                        children: [
                                                            (0, o.jsx)(er.Dr, {
                                                                id: "submenu-1",
                                                                label: "Submenu Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, o.jsx)(er.Dr, {
                                                                id: "submenu-2",
                                                                label: "Submenu Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, o.jsx)(er.Dr, {
                                                                id: "submenu-3",
                                                                label: "Submenu Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        i &&
                                            (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                    (0, o.jsx)(er.bX, {}),
                                                    (0, o.jsx)(er.sL, {
                                                        id: "notifications",
                                                        label: "Enable Notifications Enable Notifications Enable Notifications",
                                                        checked: f,
                                                        action: () => g(!f),
                                                    }),
                                                    (0, o.jsx)(er.sL, {
                                                        id: "mute",
                                                        label: "Mute Channel",
                                                        checked: V,
                                                        action: () => j(!V),
                                                    }),
                                                ],
                                            }),
                                        r &&
                                            (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                    (0, o.jsx)(er.bX, {}),
                                                    (0, o.jsx)(er.fP, {
                                                        id: "switch-notifications",
                                                        label: "Push Notifications",
                                                        checked: f,
                                                        action: () => g(!f),
                                                    }),
                                                ],
                                            }),
                                        s &&
                                            (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                    (0, o.jsx)(er.bX, {}),
                                                    (0, o.jsxs)(er.rX, {
                                                        label: "Channel Type",
                                                        children: [
                                                            (0, o.jsx)(er.iD, {
                                                                id: "radio-text",
                                                                group: "channel-type",
                                                                label: "Text Channel Text Channel Text Channel Text Channel Text Channel Text Channel ",
                                                                checked: "text" === C,
                                                                action: () => S("text"),
                                                            }),
                                                            (0, o.jsx)(er.iD, {
                                                                id: "radio-voice",
                                                                group: "channel-type",
                                                                label: "Voice Channel",
                                                                checked: "voice" === C,
                                                                action: () => S("voice"),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, o.jsx)(er.bX, {}),
                                                    (0, o.jsxs)(er.rX, {
                                                        label: "View Mode",
                                                        children: [
                                                            (0, o.jsx)(er.iD, {
                                                                id: "radio-cozy",
                                                                group: "view-mode",
                                                                label: "Cozy",
                                                                checked: "cozy" === k,
                                                                action: () => w("cozy"),
                                                            }),
                                                            (0, o.jsx)(er.iD, {
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
                                        t &&
                                            (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                    (0, o.jsx)(er.bX, {}),
                                                    (0, o.jsxs)(er.rX, {
                                                        label: "Grouped Items",
                                                        children: [
                                                            (0, o.jsx)(er.Dr, {
                                                                id: "group-1",
                                                                label: "Group Item 1",
                                                                action: () => {},
                                                            }),
                                                            (0, o.jsx)(er.Dr, {
                                                                id: "group-2",
                                                                label: "Group Item 2",
                                                                action: () => {},
                                                            }),
                                                            (0, o.jsx)(er.Dr, {
                                                                id: "group-3",
                                                                label: "Group Item 3",
                                                                action: () => {},
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        (0, o.jsx)(er.bX, {}),
                                        (0, o.jsx)(er.Dr, {
                                            id: "delete",
                                            label: "Delete Message",
                                            color: x,
                                            icon: u ? en.TrashIcon : void 0,
                                            action: () => {},
                                        }),
                                    ],
                                });
                            },
                            position: "bottom",
                            align: "center",
                            shouldShow: !0,
                            targetElementRef: A,
                            onRequestClose: () => T(!1),
                            children: () =>
                                (0, o.jsx)("div", {
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
var ec = a(417098),
    eb = a(652215);
let ep = Object.keys(ec.Hv);
function em(e) {
    return e
        .toLowerCase()
        .split("_")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
}
let ey = eb.kqX.LAUNCH_GAME_FAILURE,
    eh = {
        name: "Notice",
        id: "notice",
        component: function (e) {
            let {
                    message: l,
                    color: a,
                    actions: t,
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
                (0, o.jsxs)(ec.$T, {
                    color: ec.Hv[a],
                    style: Object.keys(c).length > 0 ? c : null,
                    children: [
                        l,
                        "cta" === t || "ctaWithSecondary" === t
                            ? (0, o.jsx)(ec.Z_, { noticeType: ey, minor: i, children: n })
                            : null,
                        "ctaWithSecondary" === t ? (0, o.jsx)(ec.zr, { minor: i, children: "Maybe later" }) : null,
                        "link" === t
                            ? (0, o.jsx)(ec.eC, { noticeType: ey, href: "https://support.discord.com", children: n })
                            : null,
                        s ? (0, o.jsx)(ec.PM, { noticeType: ey, onClick: () => {} }) : null,
                    ],
                })
            );
        },
        controls: {
            color: {
                label: "Color",
                type: "select",
                defaultValue: "BRAND",
                options: ep.map((e) => ({ label: em(e), value: e })),
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
var ev = a(205513);
let ex = {
    title: "Slider",
    stories: [
        {
            id: "slider",
            name: "Slider",
            component: function (e) {
                let {
                        minValue: l,
                        maxValue: a,
                        initialValue: t,
                        markerCount: n,
                        stickToMarkers: i,
                        disabled: s,
                        equidistant: r,
                        label: d,
                        description: u,
                    } = e,
                    c = n > 0 ? Array.from({ length: n }, (e, t) => Math.floor(l + (t / (n - 1)) * (a - l))) : void 0;
                return (0, o.jsx)(
                    ev.G,
                    {
                        label: d,
                        description: u,
                        layout: "horizontal-responsive",
                        minValue: l,
                        maxValue: a,
                        initialValue: t,
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
var ef = a(682163),
    eg = a(71393),
    eV = a(342952),
    ej = a(692617);
let eC = {
        id: "stacked-avatars",
        name: "StackedAvatars",
        component: function (e) {
            let { size: l = w._3.SIZE_24, maxUsers: a = 3, hideOverflowCount: t = !1 } = e,
                { users: n } = (0, j.cf)([C.default], () => ({
                    users: Object.values(C.default.getUsers()).slice(0, 10),
                }));
            return 0 === n.length ? null : (0, o.jsx)(eV.I, { users: n, maxUsers: a, size: l, hideOverflowCount: t });
        },
        controls: {
            size: {
                type: "select",
                label: "Size",
                defaultValue: w._3.SIZE_24,
                options: [
                    { label: "SIZE_16", value: w._3.SIZE_16 },
                    { label: "SIZE_20", value: w._3.SIZE_20 },
                    { label: "SIZE_24", value: w._3.SIZE_24 },
                ],
            },
            maxUsers: { type: "number", label: "Max Users", defaultValue: 3, minValue: 1 },
            hideOverflowCount: { type: "boolean", label: "Hide Overflow Count", defaultValue: !1 },
        },
    },
    eS = {
        id: "stacked-guild-icons",
        name: "StackedGuildIcons",
        component: function (e) {
            let {
                    size: l = ef.Ay.Sizes.SMALLER,
                    maxGuilds: a = 3,
                    hideOverflowCount: t = !1,
                    disableGuildNameTooltip: n = !1,
                } = e,
                { guilds: i } = (0, j.cf)([eg.A], () => ({ guilds: eg.A.getGuildsArray().slice(0, 10) }));
            return 0 === i.length
                ? null
                : (0, o.jsx)(ej.A, {
                      guilds: i,
                      maxGuilds: a,
                      size: l,
                      hideOverflowCount: t,
                      disableGuildNameTooltip: n,
                  });
        },
        controls: {
            size: {
                type: "select",
                label: "Size",
                defaultValue: ef.Ay.Sizes.SMALLER,
                options: [
                    { label: "SMOL", value: ef.Ay.Sizes.SMOL },
                    { label: "MINI", value: ef.Ay.Sizes.MINI },
                    { label: "SMALLER", value: ef.Ay.Sizes.SMALLER },
                ],
            },
            maxGuilds: { type: "number", label: "Max Guilds", defaultValue: 3, minValue: 1 },
            hideOverflowCount: { type: "boolean", label: "Hide Overflow Count", defaultValue: !1 },
            disableGuildNameTooltip: { type: "boolean", label: "Disable Guild Name Tooltip", defaultValue: !1 },
        },
    };
var ek = a(761508);
let ew = {
    title: "TabBar",
    stories: [
        {
            id: "tabbar",
            name: "TabBar",
            component: function (e) {
                let { look: l, type: a, tabCount: t } = e,
                    [i, s] = n.useState("tab1"),
                    r = Array.from({ length: t }, (e, l) => ({ id: `tab${l + 1}`, name: `Tab ${l + 1}` }));
                return (0, o.jsx)(ek.V, {
                    type: a,
                    look: l,
                    selectedItem: i,
                    onItemSelect: s,
                    children: r.map((e) => (0, o.jsx)(ek.V.Item, { id: e.id, children: e.name }, e.id)),
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
var eI = a(444550),
    eT = a(843282);
let eA = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
    ],
    eM = {
        id: "select",
        name: "Select",
        component: function (e) {
            let {
                    label: l,
                    description: a,
                    isDisabled: t,
                    isProcessing: i,
                    placeholder: s,
                    maxVisibleItems: r,
                    clearable: d,
                    closeOnSelect: u,
                    popoutPosition: c,
                    variant: b,
                } = e,
                [p, m] = n.useState("blue");
            return (0, o.jsx)(eT.Te, {
                variant: b,
                label: l,
                description: a,
                value: p,
                onChange: m,
                options: eA,
                placeholder: s,
                isDisabled: t,
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
    eD = {
        id: "searchable-select",
        name: "Searchable Select",
        component: function (e) {
            let {
                    placeholder: l,
                    isDisabled: a,
                    isProcessing: t,
                    clearable: i,
                    closeOnSelect: s,
                    clearQueryOnSelect: r,
                    filter: d,
                    ...u
                } = e,
                [b, p] = n.useState("blue"),
                [m, y] = n.useState(["blue"]);
            return (0, o.jsxs)(c.B, {
                gap: 24,
                children: [
                    (0, o.jsx)(eI.p, {
                        ...u,
                        value: b,
                        onChange: p,
                        options: eA,
                        placeholder: l,
                        isDisabled: a,
                        isProcessing: t,
                        clearable: i,
                        clearQueryOnSelect: r,
                        filter: d,
                    }),
                    (0, o.jsx)(eI.p, {
                        ...u,
                        multi: !0,
                        value: m,
                        onChange: y,
                        options: eA,
                        placeholder: l,
                        isDisabled: a,
                        isProcessing: t,
                        clearable: i,
                        closeOnSelect: s,
                        clearQueryOnSelect: r,
                        filter: d,
                    }),
                ],
            });
        },
        controls: {
            ...eM.controls,
            placeholder: { type: "text", label: "Placeholder", defaultValue: "Search for a color" },
            isDisabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
            isProcessing: { type: "boolean", label: "Processing", defaultValue: !1 },
            clearable: { type: "boolean", label: "Clearable", defaultValue: !0 },
            closeOnSelect: { type: "boolean", label: "Close On Select", defaultValue: !0 },
            clearQueryOnSelect: { type: "boolean", label: "Clear Query On Select", defaultValue: !1 },
            filter: { type: "boolean", label: "Filter", defaultValue: !0 },
        },
    };
var eE = a(95477),
    eL = a(582306),
    eN = a(201895);
let eB = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
    ],
    eR = {
        id: "void",
        name: "Void",
        deprecationNotice: "Void is deprecated. Use Mana instead.",
        groups: [
            { title: "Select", stories: [eM, eD] },
            ex,
            ew,
            { title: "Avatar", stories: [I] },
            {
                title: "Badges",
                stories: [
                    G,
                    $,
                    {
                        name: "All Badges",
                        id: "badges-all",
                        component: function () {
                            return (0, o.jsx)(c.B, {
                                gap: 16,
                                children: B.map((e) => {
                                    let l = T.EG[e],
                                        a = R.find((l) => l.value === e)?.label ?? e;
                                    return (0, o.jsxs)(
                                        c.B,
                                        {
                                            gap: 8,
                                            children: [
                                                (0, o.jsx)(N.D, { variant: "heading-xs/semibold", children: a }),
                                                (0, o.jsxs)(c.B, {
                                                    direction: "horizontal",
                                                    gap: 8,
                                                    align: "center",
                                                    children: [
                                                        F.map((e) => (0, o.jsx)(T.hV, { count: e, shape: l }, e)),
                                                        (0, o.jsx)(T.fk, {
                                                            icon: A.BellIcon,
                                                            shape: l,
                                                            "aria-label": "bell",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        e,
                                    );
                                }),
                            });
                        },
                    },
                ],
            },
            {
                title: "Chip",
                stories: [
                    _,
                    {
                        name: "All Variants",
                        id: "chip-all-variants",
                        component: function () {
                            return (0, o.jsx)("div", {
                                className: H.lx,
                                children: U.map((e) => {
                                    let { lightness: l, variants: a } = e;
                                    return (0, o.jsxs)(
                                        "div",
                                        {
                                            className: H.uW,
                                            children: [
                                                (0, o.jsx)("h3", { className: H.Gf, children: l }),
                                                (0, o.jsx)("div", {
                                                    className: H.f2,
                                                    children: a.map((e) =>
                                                        (0, o.jsx)(q.v, { text: e.replace(l, ""), variant: e }, e),
                                                    ),
                                                }),
                                            ],
                                        },
                                        l,
                                    );
                                }),
                            });
                        },
                    },
                ],
            },
            {
                title: "Notice",
                stories: [
                    eh,
                    {
                        name: "All Colors",
                        id: "notice-colors",
                        component: function (e) {
                            let { message: l } = e;
                            return (0, o.jsx)(c.B, {
                                gap: 8,
                                children: ep.map((e) =>
                                    (0, o.jsx)(ec.$T, { color: ec.Hv[e], children: `${em(e)}: ${l}` }, e),
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
                                [t, i] = n.useState(void 0),
                                [s, r] = n.useState(void 0),
                                [d, u] = n.useState(void 0);
                            return (0, o.jsxs)(c.B, {
                                gap: 8,
                                children: [
                                    (0, o.jsx)(eT.Te, {
                                        value: t,
                                        onChange: i,
                                        options: eB,
                                        placeholder: a,
                                        isDisabled: l,
                                    }),
                                    (0, o.jsx)(eE.k, { placeholder: a, disabled: l }),
                                    (0, o.jsx)(eI.p, {
                                        value: t,
                                        onChange: i,
                                        options: eB,
                                        placeholder: a,
                                        isDisabled: l,
                                    }),
                                    (0, o.jsx)(eL.J, { onSelect: r, value: s, disabled: l }),
                                    (0, o.jsx)(eN.c, { onChange: u, value: d, disabled: l }),
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
            J,
            eu,
            { title: "Stacked Avatars", stories: [eC] },
            { title: "Stacked Guild Icons", stories: [eS] },
        ],
    };
var eP = a(825860),
    eO = a(175841),
    ez = a(406810),
    eG = a(278416),
    e$ = a(260981),
    eF = a(540418),
    eq = a(907085),
    eH = a(179820),
    e_ = a(805251);
let eU = {
        none: void 0,
        CircleCheckIcon: a(628284).CircleCheckIcon,
        StarIcon: M.StarIcon,
        FireIcon: eP.FireIcon,
        SparklesIcon: eO.SparklesIcon,
        ClockIcon: ez.ClockIcon,
    },
    eW = {
        none: void 0,
        StarIcon: M.StarIcon,
        FireIcon: eP.FireIcon,
        SparklesIcon: eO.SparklesIcon,
        ClockIcon: ez.ClockIcon,
        LockIcon: E.LockIcon,
        TagIcon: eG.TagIcon,
        ExperimentalCommonIcon: e$.ExperimentalCommonIcon,
        ExperimentalRareIcon: eF.ExperimentalRareIcon,
        ExperimentalEpicIcon: eq.ExperimentalEpicIcon,
        ExperimentalMythicIcon: eH.ExperimentalMythicIcon,
    },
    eX = {
        title: "Badges",
        stories: [
            {
                name: "Badge",
                id: "badge",
                component: function (e) {
                    let { type: l, customText: a, variant: t, iconName: n } = e,
                        i = null != n && "" !== n && "none" !== n ? eW[n] : void 0;
                    return (0, o.jsx)(e_.E, {
                        type: "custom" === l && null != a && "" !== a ? { text: a } : l,
                        variant: t,
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
                        defaultValue: "secondary",
                        options: [
                            { label: "Secondary", value: "secondary" },
                            { label: "Primary", value: "primary" },
                            { label: "Expressive", value: "expressive" },
                            { label: "Warning", value: "warning" },
                            { label: "Critical", value: "critical" },
                            { label: "Success", value: "success" },
                            { label: "Notification", value: "notification" },
                            { label: "Premium", value: "premium" },
                            { label: "Inverted", value: "inverted" },
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
                            { label: "Lock", value: "LockIcon" },
                            { label: "Tag", value: "TagIcon" },
                            { label: "Rarity \u2014 Common", value: "ExperimentalCommonIcon" },
                            { label: "Rarity \u2014 Rare", value: "ExperimentalRareIcon" },
                            { label: "Rarity \u2014 Epic", value: "ExperimentalEpicIcon" },
                            { label: "Rarity \u2014 Mythic", value: "ExperimentalMythicIcon" },
                        ],
                    },
                },
            },
            {
                name: "Chip",
                id: "chip",
                component: function (e) {
                    let { text: l, variant: a, iconName: t } = e,
                        n = "" !== t && "none" !== t ? eU[t] : void 0;
                    return (0, o.jsx)(q.v, { text: l, variant: a, icon: n });
                },
                docs: "https://design.discord.tools/components/web/chip",
                controls: {
                    text: { label: "Text", type: "text", defaultValue: "Active" },
                    variant: {
                        label: "Variant",
                        type: "select",
                        defaultValue: "grayLight",
                        options: [
                            { label: "Blurple \u2014 Light", value: "blurpleLight" },
                            { label: "Blurple \u2014 Dark", value: "blurpleDark" },
                            { label: "Green \u2014 Light", value: "greenLight" },
                            { label: "Green \u2014 Dark", value: "greenDark" },
                            { label: "Orange \u2014 Light", value: "orangeLight" },
                            { label: "Yellow \u2014 Light", value: "yellowLight" },
                            { label: "Red \u2014 Light", value: "redLight" },
                            { label: "Red \u2014 Dark", value: "redDark" },
                            { label: "Gray \u2014 Light", value: "grayLight" },
                            { label: "Gray \u2014 Medium", value: "grayMedium" },
                            { label: "Gray \u2014 Dark", value: "grayDark" },
                        ],
                    },
                    iconName: {
                        label: "Icon",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Circle Check", value: "CircleCheckIcon" },
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
var eZ = a(408278),
    eY = a(111159),
    eK = a(876798),
    eQ = a(831544),
    eJ = a(83107),
    e0 = a(123292),
    e1 = a(825484),
    e2 = a(657718);
function e4(e) {
    let { pressed: l, ...a } = e;
    return (0, o.jsx)(e2.S, {
        ...a,
        "data-mana-component": "toggle-button",
        role: "button",
        "aria-pressed": l,
        variant: "togglebutton",
    });
}
let e3 = {
    title: "Buttons",
    stories: [
        {
            name: "Button",
            id: "button",
            component: b.$,
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
                return (0, o.jsx)(eZ.K, { ...e, icon: eY.ClydeIcon, "aria-label": "Clyde" });
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
                let { disabled: l, size: a, text: t } = e,
                    [i, s] = n.useState(!1);
                return (0, o.jsx)(e4, { text: t, size: a, disabled: l, pressed: i, onClick: () => s(!i) });
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
                let [l, a] = n.useState(!1);
                return (0, o.jsx)(eK.k, {
                    ...e,
                    icon: eQ.MicrophoneIcon,
                    selectedIcon: eJ.MicrophoneSlashIcon,
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
            component: e0.Q,
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
                return (0, o.jsxs)(e1.e, {
                    ...e,
                    children: [
                        (0, o.jsx)(b.$, { variant: "secondary", text: "Cancel" }),
                        (0, o.jsx)(b.$, { variant: "primary", text: "Submit" }),
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
var e8 = a(148149),
    e5 = a(771871),
    e6 = a(143129);
function e7() {
    return (0, o.jsxs)(c.B, {
        gap: 16,
        padding: { top: 16 },
        children: [
            (0, o.jsx)(eE.k, { label: "Display Name", placeholder: "Jane Doe" }),
            (0, o.jsx)(eE.k, { label: "Email", type: "email", placeholder: "jane@example.com" }),
            (0, o.jsx)(c.B, {
                direction: "horizontal",
                children: (0, o.jsx)(b.$, { text: "Save Changes", variant: "secondary", size: "sm" }),
            }),
        ],
    });
}
function e9() {
    let [e, l] = n.useState("mentions");
    return (0, o.jsx)(c.B, {
        gap: 16,
        padding: { top: 16 },
        children: (0, o.jsx)(e5.z, {
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
function le() {
    let [e, l] = n.useState(!0),
        [a, t] = n.useState(!1);
    return (0, o.jsxs)(c.B, {
        gap: 16,
        padding: { top: 16 },
        children: [
            (0, o.jsx)(e6.d, {
                label: "Allow direct messages",
                description: "Members of this server can send you direct messages.",
                checked: e,
                onChange: l,
            }),
            (0, o.jsx)(e6.d, {
                label: "Share activity status",
                description: "Show other members what you're playing.",
                checked: a,
                onChange: t,
            }),
        ],
    });
}
let ll = [
        { id: "account", label: "Account", icon: eY.ClydeIcon, panel: () => (0, o.jsx)(e7, {}) },
        { id: "notifications", label: "Notifications", count: 10, panel: () => (0, o.jsx)(e9, {}) },
        { id: "privacy", label: "Privacy", panel: () => (0, o.jsx)(le, {}) },
    ],
    la = {
        title: "Tabs",
        stories: [
            {
                name: "Tabs",
                id: "tabs",
                component: function (e) {
                    let { variant: l, showCounts: a, disabled: t, keyboardActivation: i, panelAnimation: s } = e,
                        [r, d] = n.useState("account"),
                        u = a ? ll : ll.map((e) => ({ ...e, count: void 0 }));
                    return (0, o.jsx)(e8.t, {
                        "aria-label": "User settings",
                        items: u,
                        selectedId: r,
                        onChange: d,
                        variant: l,
                        disabled: t,
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
var lt = a(70254),
    lo = a(840140),
    ln = a(184705),
    li = a(720341),
    ls = a(683071);
let lr = (0, a(400845).Ay)({
    kind: "user",
    name: "2025-10-mana-date-inputs",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function ld(e) {
    return lr.useConfig({ location: e }).enabled;
}
let lu = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: l, readOnly: a, showMinMax: t } = e,
                    [i, s] = n.useState((0, lt.Ec)((0, lt.Xj)())),
                    r = n.useCallback((e) => {
                        s(e);
                    }, []),
                    u = n.useCallback(() => {
                        s(null);
                    }, []),
                    p = n.useCallback(() => {
                        s((0, lt.Ec)((0, lt.Xj)()));
                    }, []),
                    m = n.useCallback(() => {
                        s((0, lo._U)("2024-12-25"));
                    }, []);
                return ld("CalendarStory")
                    ? (0, o.jsxs)(c.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, o.jsx)(li.V, {
                                  value: i,
                                  onChange: r,
                                  disabled: l,
                                  readOnly: a,
                                  minValue: t ? (0, lo._U)("2024-01-01") : void 0,
                                  maxValue: t ? (0, lo._U)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, o.jsxs)(d.E, {
                                  variant: "body-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != i ? (0, ln.default)(i.toDate((0, lt.Xj)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, o.jsxs)(c.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, o.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: u,
                                          disabled: l || a,
                                      }),
                                      (0, o.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: p,
                                          disabled: l || a,
                                      }),
                                      (0, o.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: m,
                                          disabled: l || a,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, o.jsx)(ls.w, {
                          type: "critical",
                          message:
                              "This component is experimental and only available behind the 2025-10-mana-date-inputs experiment. Do not use this in production yet.",
                          role: "none",
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
var lc = a(885574),
    lb = a(150934);
let lp = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: l, description: a, disabled: t, labelType: i, showIcons: s } = e,
                    [r, u] = n.useState(!1),
                    p = n.useCallback(() => {
                        u(!0);
                    }, []),
                    m = n.useCallback(() => {
                        u(!1);
                    }, []),
                    y = n.useCallback(() => {
                        u((e) => !e);
                    }, []);
                return (0, o.jsxs)(c.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, o.jsx)(lb.S, {
                            checked: r,
                            onChange: (e) => u(e),
                            disabled: t,
                            label: l,
                            description: null != a || "" === a ? a : void 0,
                            value: "checkbox-value",
                            labelType: i,
                            leadingIcon: s ? lc.CircleInformationIcon : void 0,
                        }),
                        (0, o.jsxs)(d.E, {
                            variant: "body-sm/normal",
                            children: ["Current state: ", r ? "Checked" : "Unchecked"],
                        }),
                        (0, o.jsxs)(c.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, o.jsx)(b.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: p,
                                    disabled: t,
                                }),
                                (0, o.jsx)(b.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: m,
                                    disabled: t,
                                }),
                                (0, o.jsx)(b.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: y,
                                    disabled: t,
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
var lm = a(167417);
let ly = {
    title: "CheckboxGroup",
    stories: [
        {
            id: "checkboxgroup",
            name: "CheckboxGroup",
            component: function (e) {
                let {
                        disabled: l,
                        optionCount: a,
                        label: t,
                        optionLabel: i,
                        description: s,
                        showIcons: r,
                        withMixedDisabledOptions: u,
                    } = e,
                    [p, m] = n.useState(["option1"]),
                    y = n.useMemo(
                        () =>
                            [
                                {
                                    label: null != i ? `${i} 1` : "Option 1",
                                    value: "option1",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                    disabled: !u && void 0,
                                },
                                {
                                    label: null != i ? `${i} 2` : "Option 2",
                                    value: "option2",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                    disabled: !!u || void 0,
                                },
                                {
                                    label: null != i ? `${i} 3` : "Option 3",
                                    value: "option3",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                    disabled: !u && void 0,
                                },
                                {
                                    label: null != i ? `${i} 4` : "Option 4",
                                    value: "option4",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                    disabled: !!u || void 0,
                                },
                                {
                                    label: null != i ? `${i} 5` : "Option 5",
                                    value: "option5",
                                    description: null == s || "" === s ? void 0 : s,
                                    leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                    disabled: !u && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, a))),
                        [a, i, s, r, u],
                    ),
                    h = n.useCallback((e) => {
                        m(e);
                    }, []),
                    v = n.useCallback(() => {
                        m(y.map((e) => e.value));
                    }, [y]),
                    x = n.useCallback(() => {
                        m([]);
                    }, []),
                    f = n.useCallback(() => {
                        y.length > 0 && m([y[0].value]);
                    }, [y]);
                return (0, o.jsxs)(c.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, o.jsx)(lm.$, { selectedValues: p, label: t, onChange: h, options: y, disabled: l }),
                        (0, o.jsxs)(d.E, {
                            variant: "body-sm/normal",
                            children: ["Current selection: ", p.length > 0 ? p.join(", ") : "None"],
                        }),
                        (0, o.jsxs)(c.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, o.jsx)(b.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: v,
                                    disabled: l || 0 === y.length,
                                }),
                                (0, o.jsx)(b.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: f,
                                    disabled: l || 0 === y.length,
                                }),
                                (0, o.jsx)(b.$, {
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
var lh = a(311409),
    lv = a(349494),
    lx = a(6781);
let lf = [
        { label: "3 days", value: "3-days", ms: 2592e5 },
        { label: "1 day", value: "1-day", ms: 864e5 },
        { label: "5 hours", value: "5-hours", ms: 18e6 },
        { label: "10 minutes", value: "10-minutes", ms: 6e5 },
        { label: "10 seconds, to see onEnd", value: "10-seconds", ms: 1e4 },
    ],
    lg = [
        { label: "Timer", value: "timer" },
        { label: "Days left", value: "days-left" },
    ],
    lV = [
        { label: "md (large promotions)", value: "md" },
        { label: "sm (badge size)", value: "sm" },
    ],
    lj = [
        { label: "Overlay secondary", value: "overlay-secondary" },
        { label: "Overlay primary", value: "overlay-primary" },
    ];
function lC(e) {
    let {
        endsAt: l,
        appearance: a,
        size: t,
        variant: n,
        showDays: i = !1,
        showSeconds: s = !1,
        showIcon: r = !0,
        onEnd: d,
    } = e;
    return "days-left" === a
        ? (0, o.jsx)(lh.G, { endsAt: l, appearance: "days-left", size: t, variant: n, showIcon: r, onEnd: d })
        : (0, o.jsx)(lh.G, {
              endsAt: l,
              appearance: "timer",
              size: t,
              variant: n,
              showDays: i,
              showSeconds: s,
              showIcon: r,
              onEnd: d,
          });
}
function lS(e) {
    let { endTime: l, ...a } = e,
        t = (0, lv.A8)(
            lf.find((e) => {
                let { value: a } = e;
                return a === l;
            })?.ms ?? 864e5,
        ),
        [i, s] = n.useState([]);
    return (0, o.jsxs)(c.B, {
        gap: 8,
        children: [
            (0, o.jsx)(c.B, {
                direction: "horizontal",
                align: "center",
                children: (0, o.jsx)(lC, {
                    endsAt: t,
                    onEnd: function () {
                        s((e) => [...e, new Date().toLocaleTimeString()]);
                    },
                    ...a,
                }),
            }),
            (0, o.jsx)(d.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: 0 === i.length ? "onEnd: not called yet" : `onEnd called at ${i.join(", ")}`,
            }),
        ],
    });
}
function lk(e) {
    let { children: l, onBackdrop: a = !1 } = e;
    return (0, o.jsx)(d.E, {
        variant: "body-xs/normal",
        color: a ? "none" : "text-muted",
        className: a ? lx.P : void 0,
        children: l,
    });
}
let lw = {
    appearance: { label: "Appearance", type: "select", defaultValue: "timer", options: lg },
    size: { label: "Size", type: "select", defaultValue: "md", options: lV },
    variant: { label: "Color", type: "select", defaultValue: "overlay-secondary", options: lj },
    showDays: {
        label: "Show days",
        hint: "Splits days out of the hours, for offers longer than a day.",
        type: "boolean",
        defaultValue: !1,
        isVisible: (e) => "timer" === e.appearance,
    },
    showSeconds: {
        label: "Show seconds",
        type: "boolean",
        defaultValue: !1,
        isVisible: (e) => "timer" === e.appearance,
    },
    showIcon: {
        label: "Show icon",
        hint: "Hide it when a clock or timer icon is already beside it.",
        type: "boolean",
        defaultValue: !0,
    },
    endTime: {
        label: "Ends in",
        type: "select",
        defaultValue: "3-days",
        options: lf.map((e) => {
            let { label: l, value: a } = e;
            return { label: l, value: a };
        }),
    },
};
var lI = a(441349);
let lT = {
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let { label: l, description: a, errorMessage: t, disabled: i, required: s, showMinMax: r } = e,
                    [d, u] = n.useState((0, lt.Ec)((0, lt.Xj)())),
                    p = n.useCallback((e) => {
                        u(e);
                    }, []),
                    m = n.useCallback(() => {
                        u(null);
                    }, []),
                    y = n.useCallback(() => {
                        u((0, lt.Ec)((0, lt.Xj)()));
                    }, []),
                    h = n.useCallback(() => {
                        u((0, lo._U)("2024-12-25"));
                    }, []);
                return ld("CalendarStory")
                    ? (0, o.jsxs)(c.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, o.jsx)(lI.l, {
                                  label: l,
                                  description: "" !== a ? a : void 0,
                                  value: d,
                                  onChange: p,
                                  disabled: i,
                                  required: s,
                                  minValue: r ? (0, lo._U)("2024-01-01") : void 0,
                                  maxValue: r ? (0, lo._U)("2024-12-31") : void 0,
                                  errorMessage: "" !== t ? t : void 0,
                                  helperText: null != d ? (0, ln.default)(d.toDate((0, lt.Xj)()), "MMMM d, yyyy") : "",
                              }),
                              (0, o.jsxs)(c.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, o.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: m,
                                          disabled: i,
                                      }),
                                      (0, o.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: y,
                                          disabled: i,
                                      }),
                                      (0, o.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: h,
                                          disabled: i,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, o.jsx)(ls.w, {
                          type: "critical",
                          message:
                              "This component is experimental and only available behind the 2025-10-mana-date-inputs experiment. Do not use this in production yet.",
                          role: "none",
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
var lA = a(912295),
    lM = a(393570),
    lD = a(755357),
    lE = a(10083),
    lL = a(51340),
    lN = a(372177),
    lB = a(561392),
    lR = a(286615),
    lP = a(452027),
    lO = a(81466),
    lz = a(862301),
    lG = a(116711),
    l$ = a(221174),
    lF = a(376887),
    lq = a(668953),
    lH = a(881636),
    l_ = a(859962);
function lU(e) {
    let {
            value: l,
            onChange: a,
            minValue: t,
            maxValue: i,
            isDisabled: r = !1,
            isReadOnly: u = !1,
            visibleMonths: c = 1,
            className: b,
            "aria-label": p,
        } = e,
        { i18n: m, locale: y } = (0, lG.G9)(),
        h = l?.start ?? null,
        [v, x] = n.useState(h);
    return (
        n.useEffect(() => {
            x(h);
        }, [h]),
        (0, o.jsx)(l$._e, {
            value: l,
            focusedValue: v,
            onFocusChange: x,
            onChange: a,
            minValue: t,
            maxValue: i,
            isDisabled: r,
            isReadOnly: u,
            visibleDuration: { months: c },
            "aria-label": p,
            "data-mana-component": "range-calendar",
            className: s()(l_.BJ, c > 1 && l_.Q7, b),
            children: (e) =>
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)("header", {
                            className: l_.I4,
                            children: [
                                (0, o.jsx)(eZ.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: lq.ChevronLargeLeftIcon,
                                    "aria-label": m.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, o.jsx)("div", {
                                    className: l_.Wb,
                                    "aria-live": "polite",
                                    children: Array.from({ length: c }, (l, a) => {
                                        let t = e.state.visibleRange.start
                                            .add({ months: a })
                                            .toDate(e.state.timeZone)
                                            .toLocaleDateString(y, {
                                                month: "long",
                                                year: "numeric",
                                                timeZone: e.state.timeZone,
                                            });
                                        return (0, o.jsx)(
                                            d.E,
                                            { variant: "body-md/medium", color: "text-strong", children: t },
                                            a,
                                        );
                                    }),
                                }),
                                (0, o.jsx)(eZ.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: lH.ChevronLargeRightIcon,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": m.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, o.jsx)("div", {
                            className: l_.US,
                            children: Array.from({ length: c }, (e, l) =>
                                (0, o.jsx)(lF.N, { offset: { months: l }, isRangeSelection: !0 }, l),
                            ),
                        }),
                    ],
                }),
        })
    );
}
var lW = a(341450);
function lX(e) {
    let {
            value: l,
            onChange: a,
            minValue: t,
            maxValue: n,
            placeholderValue: i,
            startName: r,
            endName: d,
            fullWidth: u = !1,
            granularity: c = "day",
            ...b
        } = e,
        { i18n: p } = (0, lG.G9)(),
        { fieldProps: m } = (0, lP.n)(b),
        { disabled: y, errorMessage: h, required: v = !1 } = m,
        x = { hasError: null != h && "" !== h },
        {
            refs: f,
            floatingStyles: g,
            isOpen: V,
            setIsOpen: j,
            context: C,
            getFloatingProps: S,
            getReferenceProps: k,
        } = (0, lB.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: w, styles: I } = (0, lR.DL)(C, {
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
    return (0, o.jsx)(lP.D, {
        ...m,
        children: (e) =>
            (0, o.jsx)(lz.F, {
                className: u ? lW.e2 : "minute" === c ? lW.oU : lW.qX,
                validation: x,
                ref: f.setReference,
                ...k(),
                children: (0, o.jsxs)(lM.Ur, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: T,
                    isDisabled: y,
                    isRequired: v,
                    minValue: t,
                    maxValue: n,
                    placeholderValue: i,
                    granularity: c,
                    startName: r,
                    endName: d,
                    "data-mana-component": "date-range-picker",
                    className: lW.Nz,
                    children: [
                        (0, o.jsxs)(lD.Y, {
                            className: lW.wO,
                            children: [
                                (0, o.jsx)(lE.J3, {
                                    slot: "start",
                                    children: (e) =>
                                        (0, o.jsx)(lE.Eu, {
                                            segment: e,
                                            className: s()(lW.mX, e.isPlaceholder && lW.qf),
                                        }),
                                }),
                                (0, o.jsx)("span", { className: lW.me, "aria-hidden": "true", children: "\u2192" }),
                                (0, o.jsx)(lE.J3, {
                                    slot: "end",
                                    children: (e) =>
                                        (0, o.jsx)(lE.Eu, {
                                            segment: e,
                                            className: s()(lW.mX, e.isPlaceholder && lW.qf),
                                        }),
                                }),
                                (0, o.jsx)(lL.$, {
                                    className: lW.B7,
                                    onClick: () => j(!V),
                                    "aria-label": p.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, o.jsx)(lO.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        V &&
                            w &&
                            (0, o.jsx)("div", {
                                ...S(),
                                ref: f.setFloating,
                                style: g,
                                className: lW.oO,
                                children: (0, o.jsx)(lA.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, o.jsx)(lN.lG, {
                                        "aria-label": p.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: I,
                                        className: lW.r3,
                                        children: (0, o.jsx)(lU, {
                                            value: l,
                                            onChange: T,
                                            minValue: t,
                                            maxValue: n,
                                            isDisabled: y,
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
let lZ = {
    title: "DateRangePicker",
    stories: [
        {
            id: "date-range-picker",
            name: "DateRangePicker",
            component: function (e) {
                let { label: l, errorMessage: a, description: t, disabled: i, required: s, showMinMax: r } = e,
                    [d, u] = n.useState({
                        start: (0, lt.Ec)((0, lt.Xj)()),
                        end: (0, lt.Ec)((0, lt.Xj)()).add({ days: 7 }),
                    }),
                    p = n.useCallback((e) => {
                        u(e);
                    }, []),
                    m = n.useCallback(() => {
                        u(null);
                    }, []),
                    y = n.useCallback(() => {
                        let e = (0, lt.Ec)((0, lt.Xj)());
                        u({ start: e, end: e.add({ days: 7 }) });
                    }, []),
                    h = (0, lt.Ec)((0, lt.Xj)()),
                    v = r ? h.subtract({ weeks: 1 }) : void 0,
                    x = r ? h.add({ weeks: 2 }) : void 0;
                return ld("DateRangePickerStory")
                    ? (0, o.jsxs)(c.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, o.jsx)(lX, {
                                  label: l,
                                  description: "" !== t ? t : void 0,
                                  value: d,
                                  onChange: p,
                                  disabled: i,
                                  required: s,
                                  errorMessage: "" !== a ? a : void 0,
                                  minValue: v,
                                  maxValue: x,
                                  helperText: (function () {
                                      if (null == d) return "";
                                      let e = (0, ln.default)(d.start.toDate((0, lt.Xj)()), "MMMM d, yyyy"),
                                          l = (0, ln.default)(d.end.toDate((0, lt.Xj)()), "MMMM d, yyyy");
                                      return `${e} \u{2013} ${l}`;
                                  })(),
                              }),
                              (0, o.jsxs)(c.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, o.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: m,
                                          disabled: i,
                                      }),
                                      (0, o.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "This Week",
                                          onClick: y,
                                          disabled: i,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, o.jsx)(ls.w, {
                          type: "critical",
                          message:
                              "This component is experimental and only available behind the 2025-10-mana-date-inputs experiment. Do not use this in production yet.",
                          role: "none",
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
var lY = a(270003),
    lK = a(691885),
    lQ = a(508274),
    lJ = a(109802),
    l0 = a(885105);
let l1 = [
        { label: "Aardvark", value: "aardvark", id: "aardvark" },
        { label: "Cat", value: "cat", id: "cat" },
        { label: "Dog", value: "dog", id: "dog" },
    ],
    l2 = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f, 0xe67e22, 0xe74c3c];
function l4(e) {
    let { title: l, children: a, auxiliaryContentPosition: t } = e;
    return (0, o.jsx)(lP.D, {
        disabled: !0,
        label: l,
        description: "This row is disabled at the Field level and at the control level.",
        helperText:
            "Every leaf (label, description, helper text, control) should render at a single 0.5 opacity layer.",
        auxiliaryContentPosition: t,
        children: a,
    });
}
function l3(e) {
    let { auxiliaryContentPosition: l } = e;
    return (0, o.jsxs)(c.B, {
        direction: "vertical",
        gap: 24,
        children: [
            (0, o.jsx)(l4, {
                title: "Button",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)("div", {
                    children: (0, o.jsx)(b.$, { text: "Remove", variant: "critical-primary", disabled: !0 }),
                }),
            }),
            (0, o.jsx)(l4, {
                title: "TextButton",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)("div", {
                    children: (0, o.jsx)(e0.Q, { text: "View details", variant: "primary", disabled: !0 }),
                }),
            }),
            (0, o.jsx)(l4, {
                title: "Switch",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)(e6.d, {
                    label: "Allow direct messages",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                }),
            }),
            (0, o.jsx)(l4, {
                title: "Checkbox",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)(lb.S, {
                    label: "Accept terms",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                    value: "accept-terms",
                }),
            }),
            (0, o.jsx)(l4, {
                title: "InputField",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)(lz.F, {
                    disabled: !0,
                    children: (0, o.jsx)(d.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: "Inner InputField content",
                    }),
                }),
            }),
            (0, o.jsx)(l4, {
                title: "Select",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)(lK.l, {
                    label: "Animal",
                    hideLabel: !0,
                    options: l1,
                    selectionMode: "single",
                    onSelectionChange: () => {},
                    disabled: !0,
                }),
            }),
            (0, o.jsx)(l4, {
                title: "CopyInput",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)(lJ.e, {
                    value: "https://discord.gg/disabled-example",
                    supportsCopy: !0,
                    onCopy: () => {},
                    disabled: !0,
                }),
            }),
            (0, o.jsx)(l4, {
                title: "ColorPicker",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)(lQ.sk, {
                    defaultColor: l2[0],
                    customColor: null,
                    colors: l2,
                    value: l2[0],
                    disabled: !0,
                    onChange: () => {},
                    renderDefaultButton: (e) => (0, o.jsx)(lQ.fy, { ...e }),
                    renderCustomButton: (e) => (0, o.jsx)(lQ.nJ, { ...e }),
                }),
            }),
            (0, o.jsx)(l4, {
                title: "TextInput",
                auxiliaryContentPosition: l,
                children: (0, o.jsx)(eE.k, {
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
let l8 = {
    title: "Forms",
    stories: [
        {
            name: "FieldSet",
            id: "fieldset",
            component: function (e) {
                let { label: l } = e;
                return (0, o.jsx)("div", {
                    children: (0, o.jsxs)(lY.n, {
                        label: "" === l ? void 0 : l,
                        children: [
                            (0, o.jsx)(eE.k, { label: "First Name" }),
                            (0, o.jsx)(eE.k, { label: "Last Name" }),
                            (0, o.jsx)(eE.k, { label: "Address" }),
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
                return (0, o.jsx)("div", {
                    children: (0, o.jsx)(lP.D, {
                        ...a,
                        description: "" === l ? void 0 : l,
                        icon: a.showIcon ? E.LockIcon : void 0,
                        children: (0, o.jsx)("div", {
                            className: l0.q,
                            children: (0, o.jsx)(d.E, {
                                color: "text-subtle",
                                variant: "body-md/medium",
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
            component: l3,
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
                return (0, o.jsx)(l3, { auxiliaryContentPosition: "under-label" });
            },
        },
    ],
};
var l5 = a(520923),
    l6 = a(318254),
    l7 = a(780338),
    l9 = a(340975);
function ae(e) {
    return "status" === e.variant;
}
function al(e) {
    return "promotion" === e.variant;
}
function aa(e) {
    return ae(e) && "connected" === e.type;
}
function at(e) {
    return "" !== e.primaryAction;
}
function ao(e) {
    return al(e) && !0 === e.countdown;
}
function an(e) {
    return ao(e) && "timer" === e.countdownAppearance;
}
function ai(e) {
    let { config: l } = e,
        a = null != (0, l9.XP)(),
        t = (0, l9.dR)();
    return (0, o.jsxs)(c.B, {
        gap: 4,
        children: [
            (0, o.jsxs)(c.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, o.jsx)(d.E, {
                        variant: "body-sm/semibold",
                        color: "text-subtle",
                        children: a
                            ? "Design preview: showing in the app"
                            : "Design preview: show this banner across the app",
                    }),
                    (0, o.jsx)(b.$, {
                        text: a ? "Update in app" : "Enable in app",
                        variant: "primary",
                        size: "sm",
                        onClick: () => (0, l9.nh)(l),
                    }),
                    a ? (0, o.jsx)(b.$, { text: "Disable", variant: "secondary", size: "sm", onClick: l9.aL }) : null,
                ],
            }),
            (0, o.jsxs)(c.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, o.jsx)(d.E, {
                        variant: "body-sm/semibold",
                        color: "text-subtle",
                        children: "Closes the playground, then plays in the app:",
                    }),
                    (0, o.jsx)(b.$, {
                        text: "Replay in app",
                        variant: "secondary",
                        size: "sm",
                        disabled: t,
                        onClick: () => (0, l9.nb)(l),
                    }),
                    a
                        ? (0, o.jsx)(b.$, {
                              text: "Hide in app",
                              variant: "secondary",
                              size: "sm",
                              disabled: t,
                              onClick: l9.MF,
                          })
                        : null,
                ],
            }),
            a && t
                ? (0, o.jsx)(d.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: "Hidden in the app while a more important notice is showing.",
                  })
                : null,
        ],
    });
}
function as(e) {
    let { children: l } = e;
    return (0, o.jsx)(d.E, { variant: "body-sm/semibold", color: "text-subtle", children: l });
}
let ar = {
        title: "Spend your Orbs for less in the Shop",
        message: "until the sale ends, with 30% off avatar decorations and profile effects.",
        primaryAction: { text: "Visit the Shop", onClick: () => {} },
        onDismiss: () => {},
    },
    ad = {
        title: "Get a year of Nitro for 30% off",
        message: "until the Black Friday sale ends, with HD streaming and custom profiles included.",
        primaryAction: { text: "Get Nitro", onClick: () => {} },
        onDismiss: () => {},
    },
    au = [
        { label: "Timer with hours and minutes", render: (e) => ({ endsAt: e, appearance: "timer" }) },
        {
            label: "Timer with days and seconds",
            render: (e) => ({ endsAt: e, appearance: "timer", showDays: !0, showSeconds: !0 }),
        },
        { label: "Days left", render: (e) => ({ endsAt: e, appearance: "days-left" }) },
        {
            label: "Days left without the icon, since a clock is already beside it",
            render: (e) => ({ endsAt: e, appearance: "days-left", showIcon: !1 }),
            leadingAccessory: (0, o.jsx)(ez.ClockIcon, { size: "sm", color: "currentColor" }),
        },
    ];
function ac() {
    let e = (0, lv.A8)(),
        l = (0, lv.A8)(lv.s8);
    return (0, o.jsxs)(c.B, {
        gap: 12,
        children: [
            (0, o.jsx)(as, { children: "Countdowns on time-limited promotions" }),
            au.map((l) => {
                let { label: a, render: t, leadingAccessory: n } = l;
                return (0, o.jsxs)(
                    c.B,
                    {
                        gap: 8,
                        children: [
                            (0, o.jsx)(d.E, { variant: "body-xs/normal", color: "text-muted", children: a }),
                            (0, o.jsx)(l5.q, {
                                variant: "promotion",
                                type: "expressive",
                                leadingAccessory: n ?? (0, o.jsx)(l6.OrbsIcon, { size: "sm", color: "currentColor" }),
                                countdown: t(e),
                                ...ar,
                            }),
                            (0, o.jsx)(l5.q, {
                                variant: "promotion",
                                type: "nitro",
                                leadingAccessory:
                                    n ?? (0, o.jsx)(L.NitroWheelIcon, { size: "refresh_sm", color: "currentColor" }),
                                countdown: t(e),
                                ...ad,
                            }),
                        ],
                    },
                    a,
                );
            }),
            (0, o.jsxs)(c.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(d.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: "Timer and days left on the last day",
                    }),
                    [au[0], au[2]].map((e) => {
                        let { label: a, render: t } = e;
                        return (0, o.jsx)(
                            l5.q,
                            {
                                variant: "promotion",
                                type: "expressive",
                                leadingAccessory: (0, o.jsx)(l6.OrbsIcon, { size: "sm", color: "currentColor" }),
                                countdown: t(l),
                                ...ar,
                            },
                            a,
                        );
                    }),
                ],
            }),
        ],
    });
}
let ab = [
        { label: "Critical", value: "critical" },
        { label: "Warning", value: "warning" },
        { label: "Info", value: "info" },
        { label: "Connected", value: "connected" },
    ],
    ap = [
        { label: "Expressive", value: "expressive" },
        { label: "Nitro", value: "nitro" },
    ],
    am = [
        { label: "None", value: "none" },
        { label: "Icon", value: "icon" },
        { label: "Image (16:9)", value: "image" },
        { label: "Wide image", value: "wide-image" },
    ],
    ay = [
        { label: "Voice", value: "voice" },
        { label: "Video", value: "video" },
        { label: "Stage", value: "stage" },
    ],
    ah = {
        variant: {
            label: "Variant",
            type: "select",
            defaultValue: "status",
            options: [
                { label: "Status", value: "status" },
                { label: "Promotion", value: "promotion" },
            ],
        },
        type: {
            label: "Type",
            type: "select",
            defaultValue: "warning",
            options: [...ab, ...ap],
            getOptions: (e) => (al(e) ? ap : ab),
        },
        title: { label: "Title", hint: "Optional bold lead-in.", type: "text", defaultValue: "" },
        message: {
            label: "Message",
            type: "text",
            defaultValue:
                "Discord will be down for maintenance tonight from 10pm to 11pm, so voice calls and messages might not work.",
        },
        link: {
            label: "Link",
            hint: "The `link` prop: a link after the message, to Discord Status. Leave empty for no link.",
            type: "text",
            defaultValue: "",
        },
        leadingAccessory: {
            label: "Leading graphic",
            type: "select",
            defaultValue: "none",
            options: [...am, ...ay],
            getOptions: (e) => (aa(e) ? ay : am),
            isVisible: (e) => al(e) || "info" === e.type || aa(e),
        },
        dismissible: {
            label: "Dismissible",
            hint: "Only critical banners can turn this off.",
            type: "boolean",
            defaultValue: !0,
            isVisible: (e) => ae(e) && "critical" === e.type,
        },
        primaryAction: { label: "Primary button", hint: "Leave empty for no buttons.", type: "text", defaultValue: "" },
        primaryActionIcon: { label: "Primary button icon", type: "boolean", defaultValue: !1, isVisible: at },
        secondaryAction: { label: "Secondary button", type: "text", defaultValue: "", isVisible: at },
        actionLoading: { label: "Primary button loading", type: "boolean", defaultValue: !1, isVisible: at },
        countdown: {
            label: "Countdown",
            hint: "A time-limited offer timer.",
            type: "boolean",
            defaultValue: !1,
            isVisible: al,
        },
        countdownAppearance: {
            label: "Countdown style",
            type: "select",
            defaultValue: "timer",
            options: [
                { label: "Timer", value: "timer" },
                { label: "Days left", value: "days-left" },
            ],
            isVisible: ao,
        },
        countdownShowDays: {
            label: "Countdown days",
            hint: "Splits days out of the hours.",
            type: "boolean",
            defaultValue: !1,
            isVisible: an,
        },
        countdownShowSeconds: { label: "Countdown seconds", type: "boolean", defaultValue: !1, isVisible: an },
    };
var av = a(329921),
    ax = a(43990),
    af = a(35481);
let ag = ["primary", "notification", "neutral", "active"],
    aV = ["xs", "sm", "md", "lg"];
function aj() {
    return (0, o.jsxs)("div", {
        className: af.Vg,
        children: [
            (0, o.jsx)("span", {}),
            aV.map((e) => (0, o.jsx)(d.E, { variant: "body-xs/semibold", color: "text-subtle", children: e }, e)),
            ag.map((e) =>
                (0, o.jsxs)(
                    n.Fragment,
                    {
                        children: [
                            (0, o.jsx)(d.E, { variant: "body-xs/semibold", color: "text-subtle", children: e }),
                            aV.map((l) =>
                                (0, o.jsx)(
                                    "span",
                                    { className: af.Hn, children: (0, o.jsx)(av.N, { variant: e, size: l }) },
                                    l,
                                ),
                            ),
                        ],
                    },
                    e,
                ),
            ),
        ],
    });
}
let aC = {
    title: "Indicator Dot",
    stories: [
        {
            name: "Indicator Dot",
            id: "indicator-dot",
            component: function (e) {
                let { variant: l, size: a, cutout: t, ariaLabel: n } = e;
                return (0, o.jsx)(av.N, {
                    variant: l,
                    size: a,
                    cutout: "none" === t ? void 0 : t,
                    "aria-label": null != n && "" !== n ? n : void 0,
                });
            },
            docs: "https://design.discord.tools/components/web/indicator-dot",
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "primary",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Notification", value: "notification" },
                        { label: "Neutral", value: "neutral" },
                        { label: "Active", value: "active" },
                    ],
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "XS (4px)", value: "xs" },
                        { label: "SM (6px)", value: "sm" },
                        { label: "MD (8px)", value: "md" },
                        { label: "LG (10px)", value: "lg" },
                    ],
                },
                cutout: {
                    label: "Cutout",
                    type: "select",
                    defaultValue: "none",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Base Lower", value: "base-lower" },
                    ],
                },
                ariaLabel: { label: "Aria Label", type: "text", defaultValue: void 0 },
            },
        },
        {
            name: "Indicator Dot (All)",
            id: "indicator-dot-all",
            component: function () {
                return (0, o.jsx)("div", {
                    className: af.XP,
                    children: [k.NJ.LIGHT, k.NJ.DARK].map((e) =>
                        (0, o.jsx)(
                            ax.N,
                            {
                                theme: e,
                                children: (e) =>
                                    (0, o.jsx)("div", { className: s()(e, af.MT), children: (0, o.jsx)(aj, {}) }),
                            },
                            e,
                        ),
                    ),
                });
            },
            docs: "https://design.discord.tools/components/web/indicator-dot",
        },
    ],
};
var aS = a(792996);
let ak = {
    type: {
        label: "Type",
        type: "select",
        defaultValue: "critical",
        options: ["info", "success", "warning", "critical"].map((e) => ({ label: e, value: e })),
    },
    text: {
        label: "Message",
        type: "text",
        defaultValue: "Something went wrong. Please try again, or reach out to support if it keeps happening.",
    },
    withLink: { label: "Message: use real copy with a link", type: "boolean", defaultValue: !1 },
    hidden: { label: "Hidden", type: "boolean", defaultValue: !1 },
    title: { label: "Title (empty for none)", type: "text", defaultValue: "Notice title" },
    dismissable: { label: "Dismissable", type: "boolean", defaultValue: !0 },
    ctaText: { label: "CTA text (empty for none)", type: "text", defaultValue: "Take action" },
    ctaLoading: { label: "CTA loading", type: "boolean", defaultValue: !1 },
    role: {
        label: "Role (screen reader behavior)",
        type: "select",
        defaultValue: "alert",
        options: [
            { label: "alert (announce immediately)", value: "alert" },
            { label: "status (announce when idle)", value: "status" },
            { label: "none (no announcement)", value: "none" },
        ],
    },
};
var aw = a(935063),
    aI = a(307301),
    aT = a(683438),
    aA = a(103557),
    aM = a(404778),
    aD = a(34011),
    aE = a(193885),
    aL = a(584454);
let aN = [
        { id: "strength", label: "Strength", icon: aw.AtIcon },
        { id: "wisdom", label: "Wisdom", icon: { type: "role", color: p.A.unsafe_rawColors.BRAND_500.css } },
        { id: "charisma", label: "Charisma" },
        { id: "intelligence", label: "Intelligence" },
        { id: "dexterity", label: "Dexterity" },
        { id: "constitution", label: "Constitution" },
    ],
    aB = {
        title: "Input Components",
        stories: [
            {
                name: "TextInput",
                component: function (e) {
                    let { leading: l, trailing: a, ...t } = e,
                        [i, s] = n.useState(""),
                        [r, d] = n.useState(aN),
                        u = n.useCallback(
                            (e) => {
                                d(r.filter((l) => !e.has(l.id)));
                            },
                            [r],
                        );
                    return (0, o.jsxs)(c.B, {
                        gap: 16,
                        children: [
                            (0, o.jsx)(eE.k, {
                                ...t,
                                value: i,
                                onChange: s,
                                leading: (function (e) {
                                    switch (e) {
                                        case "tags":
                                            return { type: "tags", label: "Tags", items: r, onRemove: u };
                                        case "icon":
                                            return { icon: aw.AtIcon, onClick: k.tE, "aria-label": "At" };
                                        case "text":
                                            return "https://discord.gg/";
                                        default:
                                            return;
                                    }
                                })(l),
                                trailing:
                                    "icon" === a
                                        ? { icon: aI.PlusSmallIcon, onClick: k.tE, "aria-label": "At" }
                                        : void 0,
                                maxLength: 500,
                            }),
                            "tags" === l
                                ? (0, o.jsx)(b.$, {
                                      text: "Reset Tags",
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => d(aN),
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
                    let [l, a] = n.useState("");
                    return (0, o.jsx)(aT.I, {
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
                    let [l, a] = n.useState("");
                    return (0, o.jsx)(aA.f, { ...e, value: l, onChange: a });
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
                    let { error: l, layout: a, maxRows: t, multiline: i, showAccessory: s, size: r, ...u } = e,
                        [p, m] = n.useState("Name"),
                        [y, h] = n.useState(null),
                        [v, x] = n.useState(0),
                        f = (0, o.jsx)(aD.w, {
                            ...u,
                            label: "Editable text",
                            error: "" === l ? void 0 : l,
                            maxRows: i ? t : void 0,
                            multiline: i,
                            onChange: m,
                            onCommit: h,
                            size: "content" === r ? void 0 : r,
                            trailing: s
                                ? {
                                      icon: aE.PaintbrushThinIcon,
                                      "aria-label": "Example accessory",
                                      onClick: () => x((e) => e + 1),
                                  }
                                : void 0,
                            value: p,
                        }),
                        g = (0, o.jsx)(d.E, { variant: "body-sm/normal", children: "Neighbor" });
                    return (0, o.jsxs)(c.B, {
                        gap: 16,
                        children: [
                            (0, o.jsx)(d.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    "Change the parent layout and field options to check sizing and feedback. Enter commits single-line input; Escape restores the value from focus.",
                            }),
                            (0, o.jsxs)(c.B, {
                                direction: "horizontal",
                                wrap: !0,
                                gap: 8,
                                children: [
                                    (0, o.jsx)(b.$, {
                                        text: "Short text",
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => m("Name"),
                                    }),
                                    (0, o.jsx)(b.$, {
                                        text: "Long text",
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => m("W".repeat(32)),
                                    }),
                                    (0, o.jsx)(b.$, {
                                        text: "Empty text",
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => m(""),
                                    }),
                                    (0, o.jsx)(b.$, {
                                        text: "Multiple lines",
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: !i,
                                        onClick: () => m("Line 1\nLine 2\nLine 3\nLine 4"),
                                    }),
                                ],
                            }),
                            "block" === a
                                ? (0, o.jsxs)("div", { children: [f, g] })
                                : (0, o.jsxs)(c.B, {
                                      direction: "row" === a ? "horizontal" : "vertical",
                                      align: "row" === a ? "start" : "stretch",
                                      children: [f, g],
                                  }),
                            (0, o.jsx)(d.E, {
                                variant: "body-sm/normal",
                                role: "status",
                                children: null == y ? "No commits" : `Last committed value: ${JSON.stringify(y)}`,
                            }),
                            s
                                ? (0, o.jsxs)(d.E, { variant: "body-sm/normal", children: ["Accessory clicks: ", v] })
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
                    let [l, a] = n.useState(0);
                    return (0, o.jsx)(aL.Q, { ...e, value: l, onChange: a });
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
                            description: t,
                            required: n,
                            error: i,
                            disabled: s,
                            placeholder: r,
                            value: d = "",
                            readOnly: u,
                            helperText: b,
                            successMessage: p,
                            showCharacterCount: m,
                        } = e,
                        y = {
                            label: l,
                            hideLabel: a,
                            description: t,
                            required: n,
                            value: d,
                            error: i,
                            disabled: s,
                            placeholder: r,
                            readOnly: u,
                            helperText: b,
                            showCharacterCount: m,
                            successMessage: p,
                        };
                    return (0, o.jsxs)(c.B, {
                        gap: 24,
                        children: [
                            (0, o.jsxs)(lY.n, {
                                label: "Text Input",
                                children: [
                                    (0, o.jsx)(eE.k, { ...y }),
                                    (0, o.jsx)(eE.k, { ...y, clearable: !0 }),
                                    (0, o.jsx)(eE.k, {
                                        ...y,
                                        leading: { icon: aw.AtIcon, onClick: k.tE, "aria-label": "At" },
                                    }),
                                    (0, o.jsx)(eE.k, { ...y, leading: aw.AtIcon }),
                                    (0, o.jsx)(eE.k, { ...y, leading: "https://discord.gg/" }),
                                    (0, o.jsx)(eE.k, {
                                        ...y,
                                        trailing: { icon: aw.AtIcon, onClick: k.tE, "aria-label": "At" },
                                    }),
                                    (0, o.jsx)(eE.k, { ...y, trailing: aw.AtIcon }),
                                    (0, o.jsx)(eE.k, {
                                        ...y,
                                        leading: { type: "tags", label: "Tags", items: aN.slice(0, 3) },
                                    }),
                                ],
                            }),
                            (0, o.jsx)(aM.c, {}),
                            (0, o.jsxs)(lY.n, {
                                label: "Search Bar",
                                children: [
                                    (0, o.jsx)(aT.I, { query: d, onChange: k.tE, disabled: s, placeholder: r }),
                                    (0, o.jsx)(aT.I, {
                                        query: d,
                                        onChange: k.tE,
                                        size: "sm",
                                        disabled: s,
                                        placeholder: r,
                                    }),
                                ],
                            }),
                            (0, o.jsx)(aM.c, {}),
                            (0, o.jsx)(lY.n, { label: "Text Area", children: (0, o.jsx)(aA.f, { ...y }) }),
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
var aR = a(3265),
    aP = a(224640),
    aO = a(430993),
    az = a(276293),
    aG = a(189213),
    a$ = a(890497),
    aF = a(772707),
    aq = a(347704),
    aH = a(192308),
    a_ = a(116833),
    aU = a(521489),
    aW = a(314116);
let aX = "/assets/f66ae7bb8510ab4f.svg";
function aZ() {
    return (0, o.jsx)(d.E, {
        variant: "body-sm/normal",
        color: "text-subtle",
        children: "Lost access to your radness? Talk to your radness provider to refresh your aura.",
    });
}
function aY(e) {
    let { setIsSafetyAccepted: l, setIsHelmetSelected: a } = e,
        [t, i] = n.useState([]),
        s = [
            { label: "I am wearing a helmet", value: "helmet" },
            { label: "I know where to find my personal flotation device", value: "pfd" },
            { label: "I completed the safety training", value: "training" },
        ];
    return (
        n.useEffect(() => {
            (l(t.length === s.length), a(t.includes("helmet")));
        }, [t, s.length, l, a]),
        (0, o.jsx)(lm.$, { label: "Safety checklist", options: s, selectedValues: t, onChange: i })
    );
}
function aK(e) {
    let { setIsPasscodeValid: l } = e,
        [a, t] = n.useState("");
    return (0, o.jsx)(eE.k, {
        placeholder: "Enter your passcode...",
        value: a,
        onChange: function (e) {
            (t(e), l(e.length > 0));
        },
    });
}
function aQ(e) {
    let {
            callbackDelay: l,
            failOnNext: a,
            failOnComplete: t,
            onCompleteAlert: i,
            onNextAlert: s,
            customErrorNotice: r,
            errorNoticeType: d,
            ...u
        } = e,
        [c, b] = n.useState("intro"),
        [p, m] = n.useState(!1),
        [y, h] = n.useState(!1),
        [v, x] = n.useState(!1),
        [f, g] = n.useState(null),
        V = n.useCallback(async () => {
            if (
                (g(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                s && alert("onNext callback fired"),
                a)
            ) {
                if ("" !== r.trim())
                    return (g({ message: r, type: d, role: "critical" === d ? "alert" : "status" }), !1);
                throw Error("onNext failed");
            }
            return !0;
        }, [l, a, s, r, d]),
        j = n.useCallback(async () => {
            if (
                (g(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                i && alert("onComplete callback fired"),
                t)
            ) {
                if ("" !== r.trim())
                    throw (
                        g({ message: r, type: d, role: "critical" === d ? "alert" : "status" }), Error("Custom error")
                    );
                throw Error("onComplete failed");
            }
        }, [l, t, i, r, d]),
        C = [
            {
                stepKey: "intro",
                modalProps: {
                    title: "Verify radness",
                    subtitle: "To verify your radness, we need to ask you a few deep and personal questions.",
                    notice: f ?? void 0,
                },
                body: (0, o.jsx)(aZ, {}),
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
                        null != f
                            ? f
                            : v
                              ? {
                                    message: "Great job, helmets are important for protecting your brain!",
                                    type: "warning",
                                    role: "status",
                                }
                              : void 0,
                },
                body: (0, o.jsx)(aY, { setIsSafetyAccepted: m, setIsHelmetSelected: x }),
                nextEnabled: p,
                onNext: V,
            },
            {
                stepKey: "passcode",
                modalProps: {
                    title: "Enter passcode",
                    subtitle: "Enter your passcode to complete the radness verification process.",
                    notice: f ?? void 0,
                },
                body: (0, o.jsx)(aK, { setIsPasscodeValid: h }),
                nextButtonProps: { text: "Verify passcode" },
                nextEnabled: y,
            },
        ],
        S = C.slice(1).map((e) => e.stepKey);
    return (0, o.jsx)(aq.t, { steps: C, currentStepKey: c, numberedSteps: S, onStepChange: b, onComplete: j, ...u });
}
let aJ = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                let { showPreview: l, showInput: a, subtitleIcon: t, ...n } = e,
                    i = t ? { text: n.subtitle ?? "Default subtitle", leadingIcon: az.TextIcon } : n.subtitle;
                return (0, o.jsxs)(c.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, o.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Click the button below to open the modal",
                        }),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Open Modal",
                            onClick: () =>
                                (0, aH.qf)(
                                    (e) =>
                                        (0, o.jsx)(aG.a, {
                                            ...e,
                                            ...n,
                                            title: n.title,
                                            subtitle: i,
                                            input: a
                                                ? (0, o.jsx)(aT.I, {
                                                      placeholder: "Search...",
                                                      onChange: () => {},
                                                      query: "",
                                                  })
                                                : void 0,
                                            preview: l
                                                ? (0, o.jsxs)(c.B, {
                                                      gap: 8,
                                                      children: [
                                                          (0, o.jsx)(d.E, {
                                                              variant: "body-lg/semibold",
                                                              children: "Preview Content",
                                                          }),
                                                          (0, o.jsx)(d.E, {
                                                              variant: "body-md/normal",
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
                                            children: (0, o.jsxs)(c.B, {
                                                gap: 16,
                                                children: [
                                                    (0, o.jsx)(a$.Z, {
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
                                                    (0, o.jsx)(eE.k, {
                                                        label: "Example Input",
                                                        placeholder: "Enter some text...",
                                                    }),
                                                    (0, o.jsx)(d.E, {
                                                        variant: "body-md/normal",
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
                let { cancelText: l, confirmDelay: a, confirmError: t, subtitle: i, formatSubtitle: s, ...r } = e,
                    u = n.useMemo(
                        () =>
                            s
                                ? (function (e) {
                                      let l,
                                          a = [],
                                          t = 0,
                                          n = /\*\*(.+?)\*\*/g,
                                          i = 0;
                                      for (; null !== (l = n.exec(e));)
                                          (l.index > t && a.push(e.substring(t, l.index)),
                                              a.push((0, o.jsx)("strong", { children: l[1] }, i++)),
                                              (t = n.lastIndex));
                                      return (t < e.length && a.push(e.substring(t)), a.length > 0 ? a : e);
                                  })(i)
                                : i,
                        [i, s],
                    );
                return (0, o.jsxs)(c.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, o.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Click the button below to open the confirm modal",
                        }),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Open Confirm Modal",
                            onClick: () =>
                                (0, aW.A)({
                                    ...r,
                                    subtitle: u,
                                    cancelText: "" === l ? void 0 : l,
                                    onConfirm: async (e) => {
                                        try {
                                            if ((await new Promise((e) => setTimeout(e, 1e3 * a)), t))
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
                let { graphic: l, subtitleIcon: t, ...i } = e,
                    s = t ? { text: i.subtitle ?? "Default subtitle", leadingIcon: az.TextIcon } : i.subtitle,
                    r = n.useMemo(() => {
                        switch (l) {
                            case 0:
                                return { type: "image", src: aX };
                            case 1:
                                return {
                                    type: "lottie",
                                    lottie: () => a.e(995947).then(a.t.bind(a, 604902, 19)),
                                    aspectRatio: "6/4",
                                };
                            case 2:
                                return { type: "rive", rive: aR.Q };
                            case 3:
                                return {
                                    type: "video",
                                    src: "https://cdn.discordapp.com/assets/content/06fafa729efafb6235e0ee9df9482566fa9e74b96a792a9265dca70113c71ab7.webm",
                                    fallbackImageSrc: aX,
                                    loop: !0,
                                    loopAt: 2.5,
                                };
                            case 4:
                                return {
                                    type: "dynamic",
                                    component: a_.DynamicGraphicComponent.DEMO,
                                    aspectRatio: "6/4",
                                    props: { text: "Dynamic Content" },
                                };
                            default:
                                return;
                        }
                    }, [l]);
                return (0, o.jsxs)(c.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, o.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Click the button below to open the expressive modal",
                        }),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Open ExpressiveModal",
                            onClick: () =>
                                (0, aH.qf)(
                                    (e) =>
                                        (0, o.jsx)(aF.k, {
                                            ...e,
                                            ...i,
                                            title: i.title,
                                            subtitle: s,
                                            graphic: r,
                                            actions: [
                                                { variant: "secondary", text: "Cancel", onClick: e.onClose },
                                                { variant: "primary", text: "Submit", onClick: e.onClose },
                                            ],
                                            children: (0, o.jsx)(c.B, {
                                                gap: 16,
                                                children: (0, o.jsx)(d.E, {
                                                    variant: "body-md/normal",
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
                let { dynamicText: l, ...t } = e,
                    n = {
                        type: "dynamic",
                        component: a_.DynamicGraphicComponent.DEMO,
                        aspectRatio: "6/4",
                        props: { text: l },
                    };
                return (0, o.jsxs)(c.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, o.jsx)(d.E, {
                            variant: "body-md/normal",
                            children:
                                "This example demonstrates the DynamicGraphic component rendering a React component inside the modal header.",
                        }),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Open Dynamic Graphic Modal",
                            onClick: () =>
                                (0, aH.mM)(
                                    async () => {
                                        let { ExpressiveModal: e } = await a.e(304823).then(a.bind(a, 158954));
                                        return (l) =>
                                            (0, o.jsx)(e, {
                                                ...l,
                                                ...t,
                                                title: t.title,
                                                subtitle: t.subtitle,
                                                graphic: n,
                                                actions: [
                                                    { variant: "secondary", text: "Cancel", onClick: l.onClose },
                                                    { variant: "primary", text: "Submit", onClick: l.onClose },
                                                ],
                                                children: (0, o.jsx)(c.B, {
                                                    gap: 16,
                                                    children: (0, o.jsx)(d.E, {
                                                        variant: "body-md/normal",
                                                        children:
                                                            "The header above is rendered using a React component via DynamicGraphic, allowing for dynamic, interactive content in the modal header.",
                                                    }),
                                                }),
                                            });
                                    },
                                    { dismissable: t.dismissable },
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
                return (0, o.jsxs)(c.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, o.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Click the button below to open the layer modal",
                        }),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Open Layer Modal",
                            onClick: () =>
                                (0, aH.qf)((e) =>
                                    (0, o.jsx)(aU.N, {
                                        ...e,
                                        ...l,
                                        children: (0, o.jsx)(c.B, {
                                            gap: 16,
                                            children: (0, o.jsx)(d.E, {
                                                variant: "body-md/normal",
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
                    failOnComplete: t,
                    onCompleteAlert: n,
                    onNextAlert: i,
                    customErrorNotice: s,
                    errorNoticeType: r,
                } = e;
                return (0, o.jsxs)(c.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, o.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Click the button below to open the multi-step modal",
                        }),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Open MultiStepModal",
                            onClick: () =>
                                (0, aH.qf)((e) =>
                                    (0, o.jsx)(aQ, {
                                        ...e,
                                        callbackDelay: l,
                                        failOnNext: a,
                                        failOnComplete: t,
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
                let { dismissable: l, tallContent: a, ...t } = e;
                return (0, o.jsxs)(c.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, o.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Click the button below to open the base modal",
                        }),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Open BaseModal",
                            onClick: () =>
                                (0, aH.qf)(
                                    (e) =>
                                        (0, o.jsx)(aP.d, {
                                            ...e,
                                            ...t,
                                            "aria-label": "Base Modal Example",
                                            children: (0, o.jsx)(aO.c, {
                                                children: (0, o.jsxs)(c.B, {
                                                    gap: 16,
                                                    children: [
                                                        (0, o.jsx)(d.E, {
                                                            variant: "body-lg/semibold",
                                                            children: "BaseModal Content",
                                                        }),
                                                        (0, o.jsx)(d.E, {
                                                            variant: "body-md/normal",
                                                            children:
                                                                "This is the raw BaseModal container. It provides the modal chrome (animation, sizing, padding, focus management) without any opinionated header, body, or action bar layout.",
                                                        }),
                                                        a
                                                            ? Array.from({ length: 20 }, (e, l) =>
                                                                  (0, o.jsxs)(
                                                                      d.E,
                                                                      {
                                                                          variant: "body-md/normal",
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
var a0 = a(249686),
    a1 = a.n(a0),
    a2 = a(43105),
    a4 = a(206248),
    a3 = a(566345),
    a8 = a(195118),
    a5 = a(31188),
    a6 = a(916845),
    a7 = a(627330),
    a9 = a(489387);
function te(e) {
    let {
            steps: l,
            caretConfig: a = { align: "center" },
            size: t = "md",
            onStepChange: i,
            onRequestClose: r,
            popoverRef: u,
            shouldShow: c,
            position: p,
            ...m
        } = e,
        [y, h] = n.useState(0);
    (n.useEffect(() => {
        c && h(0);
    }, [c]),
        n.useEffect(() => {
            i?.(y);
        }, [y, i]));
    let v = l[y],
        x = y + 1 === l.length,
        f = n.useCallback(() => {
            (v?.onCta?.(), x ? r?.() : h((e) => e + 1));
        }, [v, x, r]),
        g = n.useCallback(() => {
            r?.();
        }, [r]),
        V = n.useCallback(() => {
            r?.();
        }, [r]);
    if (!c || null == v) return null;
    let j = {
            text: v.action?.text ?? (x ? aS.intl.string(aS.t.i4jeWR) : aS.intl.string(aS.t.PDTjLN)),
            variant: v.action?.variant ?? "primary",
            onClick: f,
            ...v.action,
        },
        C = {
            targetElementRef: m.targetElementRef,
            hasVideo: m.hasVideo,
            scrollBehavior: m.scrollBehavior,
            position: p,
            shouldShow: c,
            onRequestClose: g,
            gradientColor: v.gradientColor,
            caretConfig: a,
            ...("edge" === m.alignmentStrategy
                ? { alignmentStrategy: "edge", align: m.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, o.jsx)(a8.x, {
        ...C,
        children: (0, o.jsxs)("div", {
            ref: u,
            children: [
                (0, o.jsx)(a6.q, { onClick: V, variant: null != v.gradientColor ? "color-mix" : void 0 }),
                null != v.graphic &&
                    (0, o.jsx)("div", {
                        className: s()(a9.graphic, { [a9[`graphic--${t}`]]: null != t }),
                        children: (0, o.jsx)(a3.v, {
                            ...v.graphic,
                            aspectRatio: v.graphic.aspectRatio ?? ("sm" === t ? "2/1" : "16/9"),
                        }),
                    }),
                (0, o.jsx)(a7.D, { title: v.title, body: v.body, badge: v.badge, textLink: v.textLink }),
                (0, o.jsx)("div", {
                    className: a9.actionBar,
                    children: (0, o.jsxs)("div", {
                        className: a9.multistepActionLayout,
                        children: [
                            (0, o.jsx)(d.E, {
                                variant: "body-xs/normal",
                                className: a9.multistepIndicator,
                                children: aS.intl.formatToPlainString(aS.t.rO31eY, {
                                    count: y + 1,
                                    totalSteps: l.length,
                                }),
                            }),
                            (0, o.jsx)(b.$, { size: "sm", ...j }),
                        ],
                    }),
                }),
                (0, o.jsx)(a5.F, {}),
            ],
        }),
    });
}
var tl = a(217838);
let ta = {
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
                        showTextLink: t,
                        caretAlign: i,
                        alignmentStrategy: s,
                        align: r,
                        size: d,
                        position: u,
                        ...c
                    } = e,
                    [p, m] = n.useState(!1),
                    y = n.useRef(null);
                return (0, o.jsxs)("div", {
                    style: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" },
                    children: [
                        (0, o.jsx)(
                            a2.A,
                            {
                                ...c,
                                position: u,
                                size: d,
                                align: r,
                                alignmentStrategy: s,
                                targetElementRef: y,
                                shouldShow: p,
                                onRequestClose: () => m(!1),
                                graphic: l
                                    ? {
                                          type: "image",
                                          src:
                                              "sm" === d
                                                  ? "https://cdn.discordapp.com/assets/content/7c8ee05f499cdf960d0b69208667276e8ca276aa2edcee6141d55e237d1ed5d2.svg"
                                                  : tl.A,
                                      }
                                    : void 0,
                                caretConfig: { align: i },
                                actions: a ? [{ text: "Close", onClick: () => m(!1) }] : void 0,
                                textLink: t
                                    ? { text: "Learn More", link: "https://discord.com", external: !0 }
                                    : void 0,
                            },
                            u,
                        ),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Toggle Popover",
                            buttonRef: y,
                            onClick: () => m(!p),
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
                let { showActions: l, previewUrl: a, assetUrl: t, ...i } = e,
                    [s, r] = n.useState(!1),
                    d = n.useRef(null);
                return (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(
                            a4.H,
                            {
                                ...i,
                                targetElementRef: d,
                                shouldShow: s,
                                onRequestClose: () => r(!1),
                                title: "Video Popover Demo",
                                body: "Click the video to view it in the media viewer!",
                                assetUrl: t,
                                previewUrl: a1()(a) ? void 0 : a,
                                badge: "new",
                                action: l ? { text: "Learn More", onClick: () => r(!1) } : void 0,
                            },
                            i.position,
                        ),
                        (0, o.jsx)(b.$, {
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
                    [t, i] = n.useState(!1),
                    s = n.useRef(null),
                    r = [
                        {
                            title: "Welcome to the Feature!",
                            body: "This is the first step of our multi-step introduction.",
                            asset: (0, o.jsx)("img", { src: tl.A, alt: "Step 1" }),
                            badge: "new",
                            action: { text: "Next" },
                            gradientColor: "blue",
                        },
                        {
                            title: "Learn the Benefits",
                            body: "Here are the amazing benefits you can enjoy with this feature.",
                            asset: (0, o.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/cd20f95b793bd4bdd462960744dae563a5409fc0a918a6a006c0d61f89fb6119.svg",
                                alt: "Step 2",
                            }),
                            action: { text: "Continue" },
                            gradientColor: "purple",
                        },
                        {
                            title: "Get Started!",
                            body: "You're all set to begin using this awesome feature.",
                            asset: (0, o.jsx)("img", { src: tl.A, alt: "Step 3" }),
                            action: { text: "Get Started", variant: l ? "expressive" : void 0 },
                            gradientColor: "nitro-pink",
                            textLink: { text: "Learn More", link: "https://discord.com", external: !0 },
                        },
                    ];
                return (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(
                            te,
                            {
                                ...a,
                                targetElementRef: s,
                                shouldShow: t,
                                onRequestClose: () => i(!1),
                                steps: r,
                                caretConfig: { align: "center" },
                                onStepChange: () => {},
                            },
                            a.position,
                        ),
                        (0, o.jsx)(b.$, {
                            variant: "primary",
                            text: "Show Multi-Step",
                            buttonRef: s,
                            onClick: () => i(!t),
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
var tt = a(911608);
let to = {
        title: "ProgressBar",
        stories: [
            {
                name: "ProgressBar",
                id: "progress-bar",
                component: function (e) {
                    let { value: l, isIndeterminate: a, size: t, animate: n, valueLabel: i, ariaLabel: s } = e,
                        r = "" !== i ? i : void 0,
                        d = "" !== s ? s : "Progress";
                    return a
                        ? (0, o.jsx)(tt.z, { isIndeterminate: !0, size: t, animate: n, valueLabel: r, "aria-label": d })
                        : (0, o.jsx)(tt.z, { value: l, size: t, animate: n, valueLabel: r, "aria-label": d });
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
    tn = {
        title: "RadioGroup",
        stories: [
            {
                id: "radiogroup",
                name: "RadioGroup",
                component: function (e) {
                    let {
                            disabled: l,
                            optionCount: a,
                            label: t,
                            optionLabel: i,
                            description: s,
                            showIcons: r,
                            withMixedDisabledOptions: u,
                        } = e,
                        [p, m] = n.useState("option1"),
                        y = n.useMemo(
                            () =>
                                [
                                    {
                                        name: null != i ? `${i} 1` : "Option 1",
                                        value: "option1",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                        disabled: !u && void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 2` : "Option 2",
                                        value: "option2",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                        disabled: !!u || void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 3` : "Option 3",
                                        value: "option3",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                        disabled: !u && void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 4` : "Option 4",
                                        value: "option4",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                        disabled: !!u || void 0,
                                    },
                                    {
                                        name: null != i ? `${i} 5` : "Option 5",
                                        value: "option5",
                                        desc: null == s || "" === s ? void 0 : s,
                                        leadingIcon: r ? lc.CircleInformationIcon : void 0,
                                        disabled: !u && void 0,
                                    },
                                ].slice(0, Math.max(1, Math.min(5, a))),
                            [a, i, s, r, u],
                        ),
                        h = n.useCallback((e) => {
                            m(e);
                        }, []),
                        v = n.useCallback(() => {
                            y.length > 0 && m(y[0].value);
                        }, [y]),
                        x = n.useCallback(() => {
                            y.length > 0 && m(y[y.length - 1].value);
                        }, [y]),
                        f = n.useCallback(() => {
                            m(void 0);
                        }, []);
                    return (0, o.jsxs)(c.B, {
                        direction: "vertical",
                        gap: "md",
                        children: [
                            (0, o.jsx)(e5.z, { value: p, label: t, onChange: h, options: y, disabled: l }),
                            (0, o.jsxs)(d.E, {
                                variant: "body-sm/normal",
                                children: ["Current selection: ", "string" == typeof p && "" !== p ? p : "None"],
                            }),
                            (0, o.jsxs)(c.B, {
                                direction: "horizontal",
                                gap: "sm",
                                children: [
                                    (0, o.jsx)(b.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Select First",
                                        onClick: v,
                                        disabled: l || 0 === y.length,
                                    }),
                                    (0, o.jsx)(b.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Select Last",
                                        onClick: x,
                                        disabled: l || 0 === y.length,
                                    }),
                                    (0, o.jsx)(b.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: f,
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
    ti = {
        title: "RangeCalendar",
        stories: [
            {
                id: "range-calendar",
                name: "RangeCalendar",
                component: function (e) {
                    let { disabled: l, readOnly: a, showMinMax: t } = e,
                        [i, s] = n.useState({
                            start: (0, lt.Ec)((0, lt.Xj)()),
                            end: (0, lt.Ec)((0, lt.Xj)()).add({ days: 7 }),
                        }),
                        r = n.useCallback((e) => {
                            s(e);
                        }, []),
                        u = n.useCallback(() => {
                            s(null);
                        }, []),
                        p = n.useCallback(() => {
                            let e = (0, lt.Ec)((0, lt.Xj)());
                            s({ start: e, end: e.add({ days: 7 }) });
                        }, []),
                        m = n.useCallback(() => {
                            s({ start: (0, lo._U)("2024-12-01"), end: (0, lo._U)("2024-12-31") });
                        }, []);
                    if (!ld("RangeCalendarStory"))
                        return (0, o.jsx)(ls.w, {
                            type: "critical",
                            message:
                                "This component is experimental and only available behind the 2025-10-mana-date-inputs experiment. Do not use this in production yet.",
                            role: "none",
                        });
                    function y(e) {
                        return null == e ? "None" : (0, ln.default)(e.toDate((0, lt.Xj)()), "MMMM d, yyyy");
                    }
                    return (0, o.jsxs)(c.B, {
                        direction: "vertical",
                        gap: "md",
                        children: [
                            (0, o.jsx)(lU, {
                                value: i,
                                onChange: r,
                                isDisabled: l,
                                isReadOnly: a,
                                minValue: t ? (0, lo._U)("2024-01-01") : void 0,
                                maxValue: t ? (0, lo._U)("2024-12-31") : void 0,
                                "aria-label": "Select a date range",
                            }),
                            (0, o.jsxs)(d.E, {
                                variant: "body-sm/normal",
                                children: [
                                    "Selected range: ",
                                    null != i ? `${y(i.start)} \u{2013} ${y(i.end)}` : "None",
                                ],
                            }),
                            (0, o.jsxs)(c.B, {
                                direction: "horizontal",
                                gap: "sm",
                                children: [
                                    (0, o.jsx)(b.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: u,
                                        disabled: l || a,
                                    }),
                                    (0, o.jsx)(b.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "This Week",
                                        onClick: p,
                                        disabled: l || a,
                                    }),
                                    (0, o.jsx)(b.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "December",
                                        onClick: m,
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
var ts = a(788984),
    tr = a(272318);
let td = Object.entries(ts)
    .filter((e) => {
        let l = e[1];
        return "function" == typeof l && "riveSrc" in l;
    })
    .map((e) => {
        let [l, a] = e;
        return { name: l, Component: a };
    })
    .sort((e, l) => e.name.localeCompare(l.name));
var tu = a(941030),
    tc = a(715022),
    tb = a(873200),
    tp = a(379649);
let tm = [
        { label: "Aardvark", value: "aardvark", id: "aardvark", description: "This is an aardvark" },
        { label: "Cat", value: "cat", id: "cat", description: "This is a cat" },
        { label: "Dog", value: "dog", id: "dog" },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", description: "This is a kangaroo" },
        { label: "Panda", value: "panda", id: "panda" },
        { label: "Snake", value: "snake", id: "snake", disabled: !0 },
    ],
    ty = [
        {
            label: "Aardvark",
            value: "aardvark",
            id: "aardvark",
            leading: az.TextIcon,
            trailing: { type: "badge", badgeType: "new" },
            description: "This is an aardvark",
        },
        { label: "Cat", value: "cat", id: "cat", leading: az.TextIcon, trailing: "20m", description: "This is a cat" },
        { label: "Dog", value: "dog", id: "dog", leading: az.TextIcon },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", leading: { type: "image", src: tp } },
        { label: "Panda", value: "panda", id: "panda", leading: { type: "avatar", src: tp } },
        { label: "Snake", value: "snake", id: "snake", leading: az.TextIcon, disabled: !0 },
    ],
    th = [
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
    tv = {
        title: "Select",
        stories: [
            {
                id: "select",
                name: "Select",
                component: function (e) {
                    let { selectionMode: l, withLeadingAndTrailing: a, withGroups: t, withLongLabels: i, ...s } = e,
                        [r, d] = n.useState(void 0),
                        [u, c] = n.useState([]),
                        b = tf(a, s.asyncOptions, t, i);
                    return "single" === l
                        ? (0, o.jsx)(lK.l, { ...s, selectionMode: l, options: b, onSelectionChange: d, value: r })
                        : (0, o.jsx)(lK.l, { ...s, selectionMode: l, options: b, onSelectionChange: c, value: u });
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
                    withLongLabels: { label: "Long option labels", type: "boolean", defaultValue: !1 },
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
                    let { selectionMode: l, withLeadingAndTrailing: a, asyncOptions: t, withGroups: i, ...s } = e,
                        [r, d] = n.useState(void 0),
                        [u, c] = n.useState([]),
                        b = tf(a, t, i);
                    return "single" === l
                        ? (0, o.jsx)(a$.Z, { ...s, selectionMode: l, onSelectionChange: d, value: r, options: b })
                        : (0, o.jsx)(a$.Z, { ...s, selectionMode: l, onSelectionChange: c, value: u, options: b });
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
                            hideLabel: t,
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
                        { required: y, disabled: h } = m,
                        v = tf(c, m.asyncOptions, b),
                        [x, f] = n.useState(null);
                    return (0, o.jsxs)(tb.iS, {
                        selectionMode: l,
                        onSelectionChange: f,
                        options: v,
                        value: x,
                        ...m,
                        children: [
                            (0, o.jsx)(tb.a3, {
                                label: a,
                                hideLabel: t,
                                placeholder: p,
                                required: y,
                                disabled: h,
                                description: i,
                                helperText: s,
                                errorMessage: r,
                                successMessage: d,
                                wrapTags: u,
                            }),
                            (0, o.jsx)(tb.X2, {}),
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
                            shouldFocusWrap: t,
                            withLeadingAndTrailing: i,
                            withGroups: s,
                        } = e,
                        [r, d] = n.useState(null),
                        { flatOptions: u, groups: c } = n.useMemo(() => (0, tc.yG)(th), []);
                    return (0, o.jsx)(tu.q, {
                        selectionMode: l,
                        required: a,
                        shouldFocusWrap: t,
                        items: s ? u : i ? ty : tm,
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
function tx(e) {
    return {
        ...e,
        label: `${e.label} \u{2014} a very long option label for testing marquee scrolling speed and overflow in the Select playground`,
    };
}
function tf(e, l, a, t) {
    let o = n.useRef(null);
    return n.useMemo(() => {
        let n = t
                ? a
                    ? th.map((e) => ({ ...e, options: e.options.map(tx) }))
                    : (e ? ty : tm).map(tx)
                : a
                  ? th
                  : e
                    ? ty
                    : tm,
            i = `${a ?? !1}-${e ?? !1}-${t ?? !1}`;
        return l
            ? (e) => {
                  let l = o.current;
                  return new Promise(
                      l?.key === i
                          ? (e) => e(l.options)
                          : (e) => setTimeout(() => ((o.current = { key: i, options: n }), e(n)), 1e3),
                  );
              }
            : n;
    }, [e, l, a, t]);
}
var tg = a(893007);
let tV = [0.5, 0.75, 1, 1.25, 1.5, 2],
    tj = {
        title: "Slider",
        stories: [
            {
                id: "slider",
                name: "Slider",
                component: function (e) {
                    let { label: l, description: a, disabled: t, step: i, hideTooltip: s } = e,
                        [r, u] = n.useState(50),
                        [b, p] = n.useState(50);
                    return (0, o.jsxs)(c.B, {
                        gap: 8,
                        children: [
                            (0, o.jsx)(tg.A, {
                                label: l,
                                description: a,
                                disabled: t,
                                step: i,
                                hideTooltip: s,
                                value: r,
                                onChange: u,
                                onChangeEnd: p,
                                formatValue: (e) => `${e}%`,
                            }),
                            (0, o.jsxs)(d.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: ["Saved on release: ", b, "%"],
                            }),
                        ],
                    });
                },
                controls: {
                    label: { type: "text", label: "Label", defaultValue: "Overlay opacity" },
                    description: { type: "text", label: "Description", defaultValue: "" },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    step: { type: "number", label: "Step", defaultValue: 1, minValue: 1 },
                    hideTooltip: { type: "boolean", label: "Hide tooltip", defaultValue: !1 },
                },
            },
            {
                id: "slider-marks",
                name: "With marks",
                component: function (e) {
                    let { label: l, disabled: a, snapToMarks: t } = e,
                        [i, s] = n.useState(1);
                    return (0, o.jsx)(tg.A, {
                        label: l,
                        disabled: a,
                        marks: tV,
                        snapToMarks: t,
                        defaultMark: 1,
                        minValue: 0.5,
                        maxValue: 2,
                        step: 0.05,
                        value: i,
                        onChange: s,
                        formatValue: (e) => `${e}x`,
                    });
                },
                controls: {
                    label: { type: "text", label: "Label", defaultValue: "Playback speed" },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    snapToMarks: { type: "boolean", label: "Snap to marks", defaultValue: !0 },
                },
            },
        ],
    },
    tC = {
        title: "Switch",
        stories: [
            {
                id: "switch",
                name: "Switch",
                component: function (e) {
                    let { disabled: l, hasIcon: a, label: t, description: i, required: s, errorMessage: r } = e,
                        [d, u] = n.useState(!1);
                    return (0, o.jsx)(e6.d, {
                        label: t,
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
var tS = a(11779),
    tk = a(431527);
let tw = [
        { id: "strength", label: "Strength", icon: tS.TextWarningIcon },
        { id: "dexterity", label: "Dexterity" },
        { id: "wisdom", label: "Wisdom" },
        { id: "charisma", label: "Charisma" },
    ],
    tI = [
        { id: "safety", label: "Safety Center", href: "https://discord.com/safety" },
        { id: "support", label: "Support", href: "https://support.discord.com" },
    ],
    tT = {
        title: "TagGroup",
        stories: [
            {
                name: "TagGroup",
                id: "tag-group",
                component: function (e) {
                    let { disabled: l, removeable: a, layout: t, size: i } = e,
                        s = (0, j.bG)([C.default], () => C.default.getCurrentUser()),
                        r = n.useMemo(
                            () => [
                                { id: "strength", label: "Strength", icon: tS.TextWarningIcon },
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
                        [d, u] = n.useState(r),
                        p = n.useCallback(
                            (e) => {
                                u(d.filter((l) => !e.has(l.id)));
                            },
                            [d],
                        ),
                        m = n.useCallback(() => {
                            u(r);
                        }, [r]),
                        y = (0, o.jsx)(tk.C, {
                            label: "Character attributes",
                            disabled: l,
                            layout: t,
                            size: i,
                            items: d,
                            onRemove: a ? p : void 0,
                        }),
                        h = a && (0, o.jsx)(b.$, { disabled: d.length === r.length, text: "Reset", onClick: m });
                    return "inline" === t
                        ? (0, o.jsxs)(c.B, {
                              gap: 24,
                              children: [(0, o.jsx)("div", { style: { display: "flex", gap: 4 }, children: y }), h],
                          })
                        : (0, o.jsxs)(c.B, { gap: 24, children: [y, h] });
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
                    return (0, o.jsx)(tk.C, { mode: "link", label: "Discord resources", disabled: l, items: tI });
                },
                controls: { disabled: { label: "Disabled", type: "boolean", defaultValue: !1 } },
            },
            {
                name: "TagGroup filter tags",
                id: "tag-group-filter",
                component: function (e) {
                    let { disabled: l, disallowEmptySelection: a, selectionMode: t, size: i } = e,
                        [s, r] = n.useState(() => new Set(["strength"])),
                        d = n.useMemo(() => new Set(["charisma"]), []),
                        u = n.useCallback((e) => {
                            "all" !== e && r(new Set(e));
                        }, []);
                    return (0, o.jsx)(c.B, {
                        gap: 24,
                        children: (0, o.jsx)(tk.C, {
                            variant: "filter",
                            label: "Character attributes",
                            disabled: l,
                            items: tw,
                            selectionMode: t,
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
var tA = a(95362),
    tM = a(206471),
    tD = a(404544);
let tE = {
    name: "Text",
    id: "text",
    component: d.E,
    controls: {
        variant: {
            label: "Variant",
            type: "select",
            defaultValue: "body-sm/normal",
            options: Object.values(tM.O).map((e) => ({ label: e, value: e })),
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
var tL = a(994484),
    tN = a(260509),
    tB = a(711014),
    tR = a(690521);
let tP = ["Wumpus", "Discord Staff", "Design Systems Team"],
    tO = { label: "Text", type: "text", defaultValue: "This is a toast message" };
var tz = a(992241),
    tG = a(381275);
let t$ = Object.assign(
    function (e) {
        let { children: l, "aria-label": a, "aria-labelledby": t } = e;
        return (0, o.jsx)(tz.M, {
            "data-mana-component": "toolbar",
            "aria-label": a,
            "aria-labelledby": t,
            className: tG.KE,
            children: l,
        });
    },
    {
        Group: function (e) {
            let { children: l, "aria-label": a, "aria-labelledby": t } = e;
            return (0, o.jsx)("div", {
                role: "group",
                "data-mana-component": "toolbar-group",
                "aria-label": a,
                "aria-labelledby": t,
                className: tG.Os,
                children: l,
            });
        },
        Separator: function () {
            return (0, o.jsx)("div", {
                role: "separator",
                "aria-orientation": "vertical",
                "data-mana-component": "toolbar-separator",
                className: tG.me,
            });
        },
    },
);
var tF = a(866665),
    tq = a(683063),
    tH = a(557464);
let t_ = {
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
                        align: t,
                        caretAlign: i,
                        customOffset: s,
                        delay: r,
                        spacing: d,
                        ariaHidden: u,
                        ...c
                    } = e,
                    p = n.useMemo(() => {
                        if ("center" !== i && null != i)
                            return "custom" === i ? { align: i, customOffset: s } : { align: i };
                    }, [i, s]);
                return (0, o.jsx)(tF.m, {
                    text: l,
                    position: a,
                    align: t,
                    delay: r,
                    spacing: d,
                    caretConfig: p,
                    ariaHidden: u,
                    ...c,
                    children: (0, o.jsx)(b.$, { variant: "primary", text: "Hover me" }),
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
                        showAsset: t,
                        assetSize: i,
                        padding: s,
                        position: r,
                        align: d,
                        caretAlign: u,
                        customOffset: c,
                        delay: p,
                        spacing: m,
                        forceOpen: y,
                        ...h
                    } = e,
                    v = n.useMemo(() => {
                        if ("center" !== u && null != u)
                            return "custom" === u ? { align: u, customOffset: c } : { align: u };
                    }, [u, c]),
                    x = n.useMemo(() => (t ? { type: "image", src: tH.A, aspectRatio: "1/1" } : void 0), [t]);
                return (0, o.jsx)(tq.u, {
                    title: l,
                    body: a,
                    position: r,
                    align: d,
                    padding: s,
                    delay: p,
                    spacing: m,
                    caretConfig: v,
                    asset: x,
                    assetSize: i,
                    forceOpen: y,
                    ...h,
                    children: (0, o.jsx)(b.$, { variant: "primary", text: "Hover me (rich)" }),
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
var tU = a(508382),
    tW = a(393743);
let tX = {
    collections: [
        {
            id: "mana",
            name: "Mana",
            groups: [
                {
                    title: "Text",
                    stories: [
                        tE,
                        {
                            name: "Typography Scales",
                            id: "text-scales",
                            component: function (e) {
                                return (0, o.jsx)(tA.Ar, {
                                    className: tD.H,
                                    children: Object.values(tM.O).map((l) =>
                                        (0, o.jsxs)(
                                            W.Z,
                                            {
                                                className: tD.N,
                                                children: [
                                                    (0, o.jsx)(d.E, { ...e, variant: l, children: e.children }),
                                                    (0, o.jsx)(d.E, {
                                                        variant: "body-xs/normal",
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
                eX,
                aC,
                e3,
                {
                    title: "Toolbar",
                    stories: [
                        {
                            name: "Toolbar",
                            id: "toolbar",
                            component: function () {
                                let [e, l] = n.useState(!1),
                                    [a, t] = n.useState(!1),
                                    i = e ? "Unmute microphone" : "Mute microphone";
                                return (0, o.jsxs)(t$, {
                                    "aria-label": "Message actions",
                                    children: [
                                        (0, o.jsxs)(t$.Group, {
                                            "aria-label": "Response actions",
                                            children: [
                                                (0, o.jsx)(b.$, { variant: "secondary", text: "Reply" }),
                                                (0, o.jsx)(tF.m, {
                                                    text: "More options",
                                                    children: (0, o.jsx)(eZ.K, {
                                                        variant: "secondary",
                                                        icon: eY.ClydeIcon,
                                                        "aria-label": "More options",
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)(t$.Separator, {}),
                                        (0, o.jsxs)(t$.Group, {
                                            "aria-label": "Message options",
                                            children: [
                                                (0, o.jsx)(tF.m, {
                                                    text: i,
                                                    children: (0, o.jsx)(eK.k, {
                                                        icon: eQ.MicrophoneIcon,
                                                        selectedIcon: eJ.MicrophoneSlashIcon,
                                                        pressed: e,
                                                        "aria-label": i,
                                                        onClick: () => l((e) => !e),
                                                    }),
                                                }),
                                                (0, o.jsx)(lb.S, {
                                                    label: "Include attachments",
                                                    checked: a,
                                                    onChange: t,
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            },
                            controls: {},
                        },
                    ],
                },
                lu,
                lp,
                ly,
                lT,
                lZ,
                tn,
                ti,
                tC,
                aJ,
                {
                    title: "InlineNotice",
                    stories: [
                        {
                            name: "InlineNotice",
                            id: "inline-notice",
                            component: function (e) {
                                let {
                                        type: l,
                                        text: a,
                                        withLink: t,
                                        hidden: i,
                                        title: s,
                                        dismissable: r,
                                        ctaText: d,
                                        ctaLoading: u,
                                        role: p,
                                    } = e,
                                    [m, y] = n.useState(!1),
                                    h = t
                                        ? aS.intl.format(aS.t.MOIaNd, {
                                              keyboardNavArticle: "https://support.discord.com",
                                          })
                                        : a;
                                return m
                                    ? (0, o.jsx)(c.B, {
                                          direction: "horizontal",
                                          children: (0, o.jsx)(b.$, {
                                              text: "Reset dismissed notice",
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: () => y(!1),
                                          }),
                                      })
                                    : (0, o.jsx)(ls.w, {
                                          type: l,
                                          hidden: i,
                                          message: h,
                                          title: "" === s ? void 0 : s,
                                          onDismiss: r ? () => y(!0) : void 0,
                                          action: "" === d ? void 0 : { text: d, onClick: () => {}, loading: u },
                                          role: p,
                                      });
                            },
                            controls: ak,
                        },
                    ],
                },
                {
                    title: "GlobalBanner",
                    stories: [
                        {
                            name: "GlobalBanner",
                            id: "global-banner",
                            component: function (e) {
                                let { actionLoading: l, ...a } = e,
                                    [t, i] = n.useState(!1),
                                    [s, r] = n.useState(0),
                                    u = n.useRef(null),
                                    p = !t && (0, lv.S0)(a),
                                    m = (0, j.bG)([C.default], () => (0, l9.iM)(C.default.getCurrentUser()));
                                return (0, o.jsxs)(c.B, {
                                    gap: 16,
                                    children: [
                                        (0, o.jsx)(d.E, {
                                            variant: "body-sm/semibold",
                                            color: "text-feedback-warning",
                                            children:
                                                "Work in progress: GlobalBanner isn't ready for product code yet.",
                                        }),
                                        m ? (0, o.jsx)(ai, { config: a }) : null,
                                        (0, o.jsxs)(c.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            children: [
                                                (0, o.jsx)(b.$, {
                                                    text: t ? "Show banner" : "Replay enter",
                                                    variant: "secondary",
                                                    size: "sm",
                                                    onClick: () => {
                                                        (i(!1), r((e) => e + 1));
                                                    },
                                                }),
                                                (0, o.jsx)(b.$, {
                                                    text: "Hide",
                                                    variant: "secondary",
                                                    size: "sm",
                                                    disabled: !p,
                                                    onClick: () => u.current?.dismiss(),
                                                }),
                                            ],
                                        }),
                                        t
                                            ? null
                                            : (0, o.jsx)(
                                                  lv.CF,
                                                  { ref: u, config: a, actionLoading: l, onDismiss: () => i(!0) },
                                                  s,
                                              ),
                                    ],
                                });
                            },
                            controls: ah,
                        },
                        {
                            name: "Every type, with countdowns",
                            id: "global-banner-variants",
                            component: function () {
                                return (0, o.jsxs)(c.B, {
                                    gap: 24,
                                    children: [
                                        (0, o.jsx)(d.E, {
                                            variant: "body-sm/semibold",
                                            color: "text-feedback-warning",
                                            children:
                                                "Work in progress: GlobalBanner isn't ready for product code yet.",
                                        }),
                                        (0, o.jsxs)(c.B, {
                                            gap: 12,
                                            children: [
                                                (0, o.jsx)(as, {
                                                    children:
                                                        "Every type with a title, as in the Figma R2 frames, and a link",
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "critical",
                                                    title: "Someone signed in to your account from a new device,",
                                                    message: "so change your password if it wasn\u2019t you.",
                                                    primaryAction: { text: "Change Password", onClick: () => {} },
                                                    secondaryAction: { text: "Review Devices", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "warning",
                                                    title: "Discord will be down for maintenance tonight",
                                                    message: "from 10pm to 11pm.",
                                                    link: { text: "Discord Status", href: "https://discordstatus.com" },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "info",
                                                    leadingAccessory: (0, o.jsx)(l7.BellSlashIcon, {
                                                        size: "refresh_sm",
                                                        color: "currentColor",
                                                    }),
                                                    title: "Desktop notifications are off,",
                                                    message:
                                                        "so turn them on to see new messages while Discord runs in the background.",
                                                    primaryAction: { text: "Turn On Notifications", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "connected",
                                                    leadingAccessory: "voice",
                                                    title: "You\u2019re in a voice call on your phone,",
                                                    message: "so transfer it here to keep talking from your computer.",
                                                    primaryAction: { text: "Transfer Call", onClick: () => {} },
                                                    secondaryAction: { text: "Stay on Phone", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "promotion",
                                                    type: "nitro",
                                                    leadingAccessory: (0, o.jsx)(L.NitroWheelIcon, {
                                                        size: "refresh_sm",
                                                        color: "currentColor",
                                                    }),
                                                    title: "Your Nitro trial is ready,",
                                                    message:
                                                        "so start it today to get HD streaming, bigger uploads, and custom profiles.",
                                                    primaryAction: { text: "Start Trial", onClick: () => {} },
                                                    secondaryAction: { text: "Explore Perks", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "promotion",
                                                    type: "expressive",
                                                    leadingAccessory: (0, o.jsx)(l6.OrbsIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                    }),
                                                    title: "New Quests are live,",
                                                    message:
                                                        "so complete one to earn Orbs for avatar decorations and profile effects in the Shop.",
                                                    primaryAction: { text: "Browse Quests", onClick: () => {} },
                                                    secondaryAction: { text: "Visit the Shop", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                            ],
                                        }),
                                        (0, o.jsxs)(c.B, {
                                            gap: 12,
                                            children: [
                                                (0, o.jsx)(as, { children: "Status banners" }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "critical",
                                                    message:
                                                        "Your Nitro payment didn\u2019t go through, so update your payment method to keep your perks.",
                                                    primaryAction: { text: "Update Payment", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "critical",
                                                    message:
                                                        "Verify your email address to keep sending messages and joining servers on Discord.",
                                                    primaryAction: { text: "Verify Email", onClick: () => {} },
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "warning",
                                                    title: "Your version of macOS is no longer supported,",
                                                    message: "so update it to keep getting Discord updates.",
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "info",
                                                    title: "Streamer Mode is on,",
                                                    message:
                                                        "so your personal details and server invite links are hidden on stream.",
                                                    primaryAction: { text: "Turn Off", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "connected",
                                                    leadingAccessory: "voice",
                                                    message:
                                                        "You\u2019re in a voice call in General with your mic muted, so unmute when you\u2019re ready to talk.",
                                                    primaryAction: { text: "Unmute Mic", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "connected",
                                                    leadingAccessory: "video",
                                                    message:
                                                        "You\u2019re in a video call with Wumpus, and your camera is off until you turn it on.",
                                                    primaryAction: { text: "Turn On Camera", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "status",
                                                    type: "connected",
                                                    leadingAccessory: "stage",
                                                    message:
                                                        "You\u2019ve been invited to speak on Stage in Town Hall, so join as a speaker when you\u2019re ready.",
                                                    primaryAction: { text: "Join as Speaker", onClick: () => {} },
                                                    secondaryAction: { text: "Stay in Audience", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                            ],
                                        }),
                                        (0, o.jsxs)(c.B, {
                                            gap: 12,
                                            children: [
                                                (0, o.jsx)(as, { children: "Promotions" }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "promotion",
                                                    type: "expressive",
                                                    leadingAccessory: (0, o.jsx)(l6.OrbsIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                    }),
                                                    title: "Earn 2x Orbs",
                                                    message:
                                                        "when you complete Quests this week, with no limit on how many you can finish.",
                                                    primaryAction: { text: "Find Quests", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "promotion",
                                                    type: "nitro",
                                                    message:
                                                        "Send a friend Nitro this week, and we\u2019ll add an avatar decoration to their gift.",
                                                    primaryAction: { text: "Send Nitro", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "promotion",
                                                    type: "expressive",
                                                    leadingAccessory: (0, o.jsx)(lv.vy, {}),
                                                    message:
                                                        "Get Discord on your phone and computer to keep up with your friends wherever you are.",
                                                    primaryAction: { text: "Get the App", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "promotion",
                                                    type: "expressive",
                                                    leadingAccessory: (0, o.jsx)(lv.lv, {}),
                                                    message:
                                                        "New avatar decorations and profile effects just landed in the Shop, including a Wumpus set.",
                                                    primaryAction: { text: "Visit the Shop", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "promotion",
                                                    type: "nitro",
                                                    leadingAccessory: (0, o.jsx)(L.NitroWheelIcon, {
                                                        size: "md",
                                                        color: "currentColor",
                                                    }),
                                                    message:
                                                        "Your Nitro trial ends in 3 days, but you can keep your perks for less with a yearly plan.",
                                                    primaryAction: { text: "Get Nitro", onClick: () => {} },
                                                    secondaryAction: { text: "Compare Plans", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                                (0, o.jsx)(l5.q, {
                                                    variant: "promotion",
                                                    type: "nitro",
                                                    title: "Come back to Nitro",
                                                    message:
                                                        "and pick up custom profiles, HD streaming, and bigger uploads where you left off.",
                                                    primaryAction: { text: "Get Nitro", onClick: () => {} },
                                                    onDismiss: () => {},
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)(ac, {}),
                                    ],
                                });
                            },
                            controls: {},
                        },
                    ],
                },
                {
                    title: "Countdown",
                    stories: [
                        {
                            name: "Countdown",
                            id: "countdown",
                            component: function (e) {
                                return (0, o.jsxs)(c.B, {
                                    gap: 16,
                                    children: [
                                        (0, o.jsx)(d.E, {
                                            variant: "body-sm/semibold",
                                            color: "text-feedback-warning",
                                            children: "Work in progress: Countdown isn't ready for product code yet.",
                                        }),
                                        (0, o.jsx)(lS, { ...e }, e.endTime),
                                    ],
                                });
                            },
                            controls: lw,
                        },
                        {
                            name: "Appearances, sizes, and colors",
                            id: "countdown-variants",
                            component: function () {
                                let e = (0, lv.A8)(2763e5);
                                return (0, o.jsxs)(c.B, {
                                    gap: 24,
                                    children: [
                                        (0, o.jsx)(d.E, {
                                            variant: "body-sm/semibold",
                                            color: "text-feedback-warning",
                                            children: "Work in progress: Countdown isn't ready for product code yet.",
                                        }),
                                        (0, o.jsx)("div", {
                                            className: lx.t,
                                            children: (0, o.jsx)(c.B, {
                                                gap: 16,
                                                children: lg.flatMap((l) =>
                                                    lV.map((a) =>
                                                        (0, o.jsxs)(
                                                            c.B,
                                                            {
                                                                gap: 8,
                                                                children: [
                                                                    (0, o.jsx)(lk, {
                                                                        onBackdrop: !0,
                                                                        children: `${l.label}, ${a.label}`,
                                                                    }),
                                                                    (0, o.jsxs)(c.B, {
                                                                        direction: "horizontal",
                                                                        gap: 12,
                                                                        align: "center",
                                                                        children: [
                                                                            lj.map((t) =>
                                                                                (0, o.jsx)(
                                                                                    lC,
                                                                                    {
                                                                                        endsAt: e,
                                                                                        appearance: l.value,
                                                                                        size: a.value,
                                                                                        variant: t.value,
                                                                                    },
                                                                                    t.value,
                                                                                ),
                                                                            ),
                                                                            "timer" === l.value
                                                                                ? lj.map((l) =>
                                                                                      (0, o.jsx)(
                                                                                          lC,
                                                                                          {
                                                                                              endsAt: e,
                                                                                              appearance: "timer",
                                                                                              size: a.value,
                                                                                              variant: l.value,
                                                                                              showDays: !0,
                                                                                              showSeconds: !0,
                                                                                          },
                                                                                          `${l.value}-full`,
                                                                                      ),
                                                                                  )
                                                                                : null,
                                                                            lj.map((t) =>
                                                                                (0, o.jsx)(
                                                                                    lC,
                                                                                    {
                                                                                        endsAt: e,
                                                                                        appearance: l.value,
                                                                                        size: a.value,
                                                                                        variant: t.value,
                                                                                        showIcon: !1,
                                                                                    },
                                                                                    `${t.value}-no-icon`,
                                                                                ),
                                                                            ),
                                                                        ],
                                                                    }),
                                                                ],
                                                            },
                                                            `${l.value}-${a.value}`,
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        }),
                                        (0, o.jsxs)(c.B, {
                                            gap: 8,
                                            children: [
                                                (0, o.jsx)(lk, { children: "sm next to a Badge, in a Shop listing" }),
                                                lg.map((l) =>
                                                    (0, o.jsxs)(
                                                        c.B,
                                                        {
                                                            direction: "horizontal",
                                                            gap: 8,
                                                            align: "center",
                                                            children: [
                                                                (0, o.jsx)(d.E, {
                                                                    variant: "body-md/semibold",
                                                                    color: "text-strong",
                                                                    children: "Winter Bundle",
                                                                }),
                                                                (0, o.jsx)(e_.E, { type: "new", variant: "secondary" }),
                                                                (0, o.jsx)(lC, {
                                                                    endsAt: e,
                                                                    appearance: l.value,
                                                                    size: "sm",
                                                                    variant: "overlay-secondary",
                                                                }),
                                                            ],
                                                        },
                                                        l.value,
                                                    ),
                                                ),
                                            ],
                                        }),
                                    ],
                                });
                            },
                            controls: {},
                        },
                    ],
                },
                aB,
                tv,
                tj,
                ta,
                to,
                {
                    title: "Toast",
                    stories: [
                        {
                            name: "Toast",
                            id: "toast",
                            component: function (e) {
                                let { text: l } = e;
                                return (0, o.jsxs)(c.B, {
                                    gap: 12,
                                    children: [
                                        (0, o.jsx)(tL.y, { text: l, variant: "default" }),
                                        (0, o.jsx)(tL.y, {
                                            text: l,
                                            variant: "default",
                                            icon: lc.CircleInformationIcon,
                                        }),
                                        (0, o.jsx)(tL.y, {
                                            text: l,
                                            variant: "default",
                                            icon: lc.CircleInformationIcon,
                                            iconColor: p.A.colors.ICON_BRAND,
                                            secondaryIconColor: p.A.colors.ICON_DEFAULT,
                                        }),
                                        (0, o.jsx)(tL.y, {
                                            text: l,
                                            variant: "default",
                                            icon: M.StarIcon,
                                            iconColor: p.A.colors.ICON_BRAND,
                                        }),
                                        (0, o.jsx)(tL.y, { text: l, variant: "success" }),
                                        (0, o.jsx)(tL.y, { text: l, variant: "critical" }),
                                    ],
                                });
                            },
                            controls: { text: tO },
                        },
                        {
                            name: "Toasts with entities",
                            id: "toast-entities",
                            component: function (e) {
                                let { text: l } = e,
                                    a = (0, j.bG)([tB.Ay, eg.A], () =>
                                        tB.Ay.getFlattenedGuildIds()
                                            .map((e) => eg.A.getGuild(e))
                                            .find((e) => e?.icon != null),
                                    ),
                                    t = tR.Ay.getURL("\uD83D\uDC4B"),
                                    n = tR.Ay.getURL("\uD83D\uDD25");
                                return (0, o.jsxs)(c.B, {
                                    gap: 12,
                                    children: [
                                        (0, o.jsx)(tL.y, {
                                            text: l,
                                            icon:
                                                "" !== t
                                                    ? { type: "emoji", src: t, alt: "\uD83D\uDC4B" }
                                                    : { type: "emoji", unicode: "\uD83D\uDC4B" },
                                        }),
                                        (0, o.jsx)(tL.y, {
                                            text: l,
                                            icon:
                                                "" !== n
                                                    ? { type: "emoji", src: n, alt: "\uD83D\uDD25" }
                                                    : { type: "emoji", unicode: "\uD83D\uDD25" },
                                        }),
                                        (0, o.jsx)(tL.y, {
                                            text: l,
                                            icon: {
                                                type: "avatar",
                                                src: "https://cdn.discordapp.com/embed/avatars/0.png",
                                                alt: "Nelly",
                                            },
                                        }),
                                        null != a &&
                                            (0, o.jsx)(tL.y, {
                                                text: a.name,
                                                icon: { type: "guild", src: (0, tN.Iv)(a, 48), name: a.name },
                                            }),
                                        tP.map((e) =>
                                            (0, o.jsx)(
                                                tL.y,
                                                { text: e, icon: { type: "guild", src: null, name: e } },
                                                e,
                                            ),
                                        ),
                                    ],
                                });
                            },
                            controls: { text: tO },
                        },
                    ],
                },
                t_,
                la,
                tT,
                l8,
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
                                        autoFlip: t,
                                        autoShift: i,
                                        strategy: s,
                                        portal: r,
                                        blockPointerEvents: u,
                                    } = e,
                                    [c, p] = n.useState(!1);
                                return (0, o.jsx)(tU.Ow, {
                                    open: c,
                                    onOpenChange: p,
                                    placement: l,
                                    spacing: a,
                                    autoFlip: t,
                                    autoShift: i,
                                    strategy: s,
                                    portal: r,
                                    blockPointerEvents: u,
                                    renderLayer: () =>
                                        (0, o.jsx)("div", {
                                            className: tW.q,
                                            children: (0, o.jsx)(d.E, {
                                                variant: "body-sm/medium",
                                                children: "FloatingLayer Content",
                                            }),
                                        }),
                                    children: (e) => {
                                        let { ref: l, props: a } = e;
                                        return (0, o.jsx)(b.$, {
                                            variant: "primary",
                                            text: "Target Element",
                                            onClick: () => p(!c),
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
                                blockPointerEvents: {
                                    label: "Block Pointer Events",
                                    type: "boolean",
                                    defaultValue: !1,
                                },
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
                                let [e, l] = n.useState(!0),
                                    a = n.useContext(u.C),
                                    [t, i] = n.useState(0),
                                    s = n.useMemo(
                                        () => ({ ...a, reducedMotion: { ...a.reducedMotion, enabled: e } }),
                                        [a, e],
                                    );
                                return (0, o.jsxs)(u.C.Provider, {
                                    value: s,
                                    children: [
                                        (0, o.jsx)("div", {
                                            className: tr.QT,
                                            children: (0, o.jsxs)(c.B, {
                                                gap: 8,
                                                children: [
                                                    (0, o.jsx)(e6.d, {
                                                        onChange: () => l((e) => !e),
                                                        label: "Force reduced motion",
                                                        checked: e,
                                                    }),
                                                    (0, o.jsx)(b.$, {
                                                        onClick: () => i((e) => e + 1),
                                                        text: "Reset animations",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, o.jsx)(
                                            "div",
                                            {
                                                className: tr.Vg,
                                                children: td.map((e) => {
                                                    let { name: l, Component: a } = e;
                                                    return (0, o.jsxs)(
                                                        "div",
                                                        {
                                                            className: tr.Hn,
                                                            children: [
                                                                (0, o.jsx)("div", {
                                                                    className: tr.k$,
                                                                    children: (0, o.jsx)(a, {
                                                                        style: { width: "100%", height: "100%" },
                                                                    }),
                                                                }),
                                                                (0, o.jsx)(d.E, {
                                                                    variant: "body-xs/normal",
                                                                    color: "text-subtle",
                                                                    className: tr.Pf,
                                                                    children: l,
                                                                }),
                                                            ],
                                                        },
                                                        l,
                                                    );
                                                }),
                                            },
                                            t,
                                        ),
                                    ],
                                });
                            },
                        },
                    ],
                },
                { title: "Animated Asset", stories: [g] },
            ],
        },
        eR,
    ],
};
