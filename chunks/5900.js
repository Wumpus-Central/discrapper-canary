a.d(l, { V: () => d });
var t = a(627968),
    o = a(64700),
    n = a(397927),
    i = a(459192),
    s = a(990078),
    r = a(557464);
let d = {
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
                        caretAlign: r,
                        customOffset: d,
                        delay: u,
                        spacing: c,
                        ariaHidden: b,
                        ...p
                    } = e,
                    m = o.useMemo(() => {
                        if ("center" !== r && null != r)
                            return "custom" === r ? { align: r, customOffset: d } : { align: r };
                    }, [r, d]);
                return (0, t.jsx)(s.m, {
                    text: l,
                    position: a,
                    align: i,
                    delay: u,
                    spacing: c,
                    caretConfig: m,
                    ariaHidden: b,
                    ...p,
                    children: (0, t.jsx)(n.Button, { variant: "primary", text: "Hover me" }),
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
                        showAsset: s,
                        assetSize: d,
                        padding: u,
                        position: c,
                        align: b,
                        caretAlign: p,
                        customOffset: m,
                        delay: x,
                        spacing: v,
                        forceOpen: h,
                        ...y
                    } = e,
                    f = o.useMemo(() => {
                        if ("center" !== p && null != p)
                            return "custom" === p ? { align: p, customOffset: m } : { align: p };
                    }, [p, m]),
                    g = o.useMemo(() => (s ? { type: "image", src: r.A, aspectRatio: "1/1" } : void 0), [s]);
                return (0, t.jsx)(i.u, {
                    title: l,
                    body: a,
                    position: c,
                    align: b,
                    padding: u,
                    delay: x,
                    spacing: v,
                    caretConfig: f,
                    asset: g,
                    assetSize: d,
                    forceOpen: h,
                    ...y,
                    children: (0, t.jsx)(n.Button, { variant: "primary", text: "Hover me (rich)" }),
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
