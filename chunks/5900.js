"use strict";
n.d(t, { V: () => u });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(459192),
    o = n(990078),
    l = n(710617);
let u = {
    title: "Tooltip",
    stories: [
        {
            name: "Tooltip",
            id: "tooltip",
            docs: "https://design.discord.tools/components/web/tooltip",
            component: function (e) {
                let {
                        text: t,
                        position: n,
                        align: s,
                        caretAlign: l,
                        customOffset: u,
                        delay: c,
                        spacing: d,
                        ariaHidden: _,
                        ...f
                    } = e,
                    p = i.useMemo(() => {
                        if ("center" !== l && null != l)
                            return "custom" === l ? { align: l, customOffset: u } : { align: l };
                    }, [l, u]);
                return (0, r.jsx)(o.m, {
                    text: t,
                    position: n,
                    align: s,
                    delay: c,
                    spacing: d,
                    caretConfig: p,
                    ariaHidden: _,
                    ...f,
                    children: (0, r.jsx)(a.Button, { variant: "primary", text: "Hover me" }),
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
                        title: t,
                        body: n,
                        showAsset: o,
                        assetSize: u,
                        position: c,
                        align: d,
                        caretAlign: _,
                        customOffset: f,
                        delay: p,
                        spacing: h,
                        forceOpen: m,
                        ...g
                    } = e,
                    E = i.useMemo(() => {
                        if ("center" !== _ && null != _)
                            return "custom" === _ ? { align: _, customOffset: f } : { align: _ };
                    }, [_, f]),
                    A = i.useMemo(() => (o ? { type: "image", src: l.A, aspectRatio: "1/1" } : void 0), [o]);
                return (0, r.jsx)(s.u, {
                    title: t,
                    body: n,
                    position: c,
                    align: d,
                    delay: p,
                    spacing: h,
                    caretConfig: E,
                    asset: A,
                    assetSize: u,
                    forceOpen: m,
                    ...g,
                    children: (0, r.jsx)(a.Button, { variant: "primary", text: "Hover me (rich)" }),
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
