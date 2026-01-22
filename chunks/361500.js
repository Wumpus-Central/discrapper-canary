n.d(t, { t: () => m }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(342494),
    o = n(217838),
    l = n(972687),
    c = n(89608);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = {
    title: "Popover",
    stories: [
        {
            name: "Popover",
            id: "popover",
            docs: "https://design.discord.tools/components/web/popover",
            component: function (e) {
                let {
                        showAsset: t,
                        showActions: n,
                        showTextLink: c,
                        caretAlign: u,
                        alignmentStrategy: f,
                        align: h,
                        size: m,
                        position: g,
                    } = e,
                    E = _(e, [
                        "showAsset",
                        "showActions",
                        "showTextLink",
                        "caretAlign",
                        "alignmentStrategy",
                        "align",
                        "size",
                        "position",
                    ]),
                    [b, y] = i.useState(!1),
                    O = i.useRef(null);
                return (0, r.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "400px",
                    },
                    children: [
                        (0, r.jsx)(
                            s.AM,
                            p(d({}, E), {
                                position: g,
                                size: m,
                                align: h,
                                alignmentStrategy: f,
                                targetElementRef: O,
                                shouldShow: b,
                                onRequestClose: () => y(!1),
                                graphic: t
                                    ? {
                                          type: "image",
                                          src: "sm" === m ? l.A : o.A,
                                      }
                                    : void 0,
                                caretConfig: { align: u },
                                actions: n
                                    ? [
                                          {
                                              text: "Close",
                                              onClick: () => y(!1),
                                          },
                                      ]
                                    : void 0,
                                textLink: c
                                    ? {
                                          text: "Learn More",
                                          link: "https://discord.com",
                                          external: !0,
                                      }
                                    : void 0,
                            }),
                            g,
                        ),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Toggle Popover",
                            buttonRef: O,
                            onClick: () => y(!b),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Sample Popover",
                },
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
                        {
                            label: "Top",
                            value: "top",
                        },
                        {
                            label: "Bottom",
                            value: "bottom",
                        },
                        {
                            label: "Left",
                            value: "left",
                        },
                        {
                            label: "Right",
                            value: "right",
                        },
                    ],
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        {
                            label: "Small",
                            value: "sm",
                        },
                        {
                            label: "Medium",
                            value: "md",
                        },
                    ],
                },
                badge: {
                    label: "Badge",
                    type: "select",
                    defaultValue: "new",
                    options: [
                        {
                            label: "None",
                            value: void 0,
                        },
                        {
                            label: "New",
                            value: "new",
                        },
                        {
                            label: "Beta",
                            value: "beta",
                        },
                        {
                            label: "Early Access",
                            value: "early_access",
                        },
                    ],
                },
                gradientColor: {
                    label: "Gradient Color",
                    type: "select",
                    defaultValue: void 0,
                    options: [
                        {
                            label: "None",
                            value: void 0,
                        },
                        {
                            label: "Purple",
                            value: "purple",
                        },
                        {
                            label: "Blue",
                            value: "blue",
                        },
                        {
                            label: "Nitro Pink",
                            value: "nitro-pink",
                        },
                    ],
                },
                caretAlign: {
                    label: "Caret Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        {
                            label: "Center",
                            value: "center",
                        },
                        {
                            label: "Start",
                            value: "start",
                        },
                        {
                            label: "End",
                            value: "end",
                        },
                    ],
                },
                alignmentStrategy: {
                    label: "Alignment Strategy",
                    type: "select",
                    defaultValue: "trigger-center",
                    options: [
                        {
                            label: "Trigger Center (caret points at trigger)",
                            value: "trigger-center",
                        },
                        {
                            label: "Edge (popover edge aligns with trigger)",
                            value: "edge",
                        },
                    ],
                },
                align: {
                    label: 'Align (only applies with "edge" strategy)',
                    type: "select",
                    defaultValue: void 0,
                    options: [
                        {
                            label: "None",
                            value: void 0,
                        },
                        {
                            label: "Top",
                            value: "top",
                        },
                        {
                            label: "Center",
                            value: "center",
                        },
                        {
                            label: "Bottom",
                            value: "bottom",
                        },
                        {
                            label: "Left",
                            value: "left",
                        },
                        {
                            label: "Right",
                            value: "right",
                        },
                    ],
                },
                showAsset: {
                    label: "Show Asset",
                    type: "boolean",
                    defaultValue: !0,
                },
                showActions: {
                    label: "Show Actions",
                    type: "boolean",
                    defaultValue: !0,
                },
                showTextLink: {
                    label: "Show Text Link",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "VideoPopover",
            id: "video-popover",
            docs: "https://design.discord.tools/components/web/popover",
            component: function (e) {
                let { showActions: t } = e,
                    n = _(e, ["showActions"]),
                    [o, l] = i.useState(!1),
                    c = i.useRef(null);
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(
                            s.HZ,
                            p(d({}, n), {
                                targetElementRef: c,
                                shouldShow: o,
                                onRequestClose: () => l(!1),
                                title: "Video Popover Demo",
                                body: "Click the video to view it in the media viewer!",
                                assetUrl:
                                    "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                                badge: "new",
                                action: t
                                    ? {
                                          text: "Learn More",
                                          onClick: () => l(!1),
                                      }
                                    : void 0,
                            }),
                            n.position,
                        ),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Show Video Popover",
                            buttonRef: c,
                            onClick: () => l(!o),
                        }),
                    ],
                });
            },
            controls: {
                showActions: {
                    label: "Show Actions",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "MultiStepPopover",
            id: "multi-step-popover",
            docs: "https://design.discord.tools/components/web/popover",
            component: function (e) {
                let { showExpressive: t } = e,
                    n = _(e, ["showExpressive"]),
                    [l, u] = i.useState(!1),
                    f = i.useRef(null),
                    h = [
                        {
                            title: "Welcome to the Feature!",
                            body: "This is the first step of our multi-step introduction.",
                            asset: (0, r.jsx)("img", {
                                src: o.A,
                                alt: "Step 1",
                            }),
                            badge: "new",
                            action: { text: "Next" },
                            gradientColor: "blue",
                        },
                        {
                            title: "Learn the Benefits",
                            body: "Here are the amazing benefits you can enjoy with this feature.",
                            asset: (0, r.jsx)("img", {
                                src: c.A,
                                alt: "Step 2",
                            }),
                            action: { text: "Continue" },
                            gradientColor: "purple",
                        },
                        {
                            title: "Get Started!",
                            body: "You're all set to begin using this awesome feature.",
                            asset: (0, r.jsx)("img", {
                                src: o.A,
                                alt: "Step 3",
                            }),
                            action: {
                                text: "Get Started",
                                variant: t ? "expressive" : void 0,
                            },
                            gradientColor: "nitro-pink",
                            textLink: {
                                text: "Learn More",
                                link: "https://discord.com",
                                external: !0,
                            },
                        },
                    ];
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(
                            s.pu,
                            p(d({}, n), {
                                targetElementRef: f,
                                shouldShow: l,
                                onRequestClose: () => u(!1),
                                steps: h,
                                caretConfig: { align: "center" },
                                onStepChange: () => {},
                            }),
                            n.position,
                        ),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Show Multi-Step",
                            buttonRef: f,
                            onClick: () => u(!l),
                        }),
                    ],
                });
            },
            controls: {
                showExpressive: {
                    label: "Show Expressive Button",
                    type: "boolean",
                    defaultValue: !1,
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        {
                            label: "Small",
                            value: "sm",
                        },
                        {
                            label: "Medium",
                            value: "md",
                        },
                    ],
                },
            },
        },
    ],
};
