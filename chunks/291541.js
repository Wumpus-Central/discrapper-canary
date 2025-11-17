n.d(t, { y: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(907862),
    s = n(453707),
    l = n(315416),
    c = n(715720);
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
function _(e, t) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
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
                var { showAsset: t, showActions: n, showTextLink: c, caretAlign: u, size: f } = e,
                    h = p(e, ["showAsset", "showActions", "showTextLink", "caretAlign", "size"]);
                let [m, g] = i.useState(!1),
                    E = i.useRef(null);
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(
                            o.J2,
                            _(d({}, h), {
                                size: f,
                                targetElementRef: E,
                                shouldShow: m,
                                onRequestClose: () => g(!1),
                                graphic: t
                                    ? {
                                          type: "image",
                                          src: "sm" === f ? l.Z : s.Z,
                                      }
                                    : void 0,
                                caretConfig: { align: u },
                                actions: n
                                    ? [
                                          {
                                              text: "Close",
                                              onClick: () => g(!1),
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
                        ),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Toggle Popover",
                            buttonRef: E,
                            onClick: () => g(!m),
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
                var { showActions: t } = e,
                    n = p(e, ["showActions"]);
                let [s, l] = i.useState(!1),
                    c = i.useRef(null);
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(
                            o.Mb,
                            _(d({}, n), {
                                targetElementRef: c,
                                shouldShow: s,
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
                        ),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Show Video Popover",
                            buttonRef: c,
                            onClick: () => l(!s),
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
                    [n, l] = i.useState(!1),
                    u = i.useRef(null),
                    d = [
                        {
                            title: "Welcome to the Feature!",
                            body: "This is the first step of our multi-step introduction.",
                            asset: (0, r.jsx)("img", {
                                src: s.Z,
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
                                src: c.Z,
                                alt: "Step 2",
                            }),
                            action: { text: "Continue" },
                            gradientColor: "purple",
                        },
                        {
                            title: "Get Started!",
                            body: "You're all set to begin using this awesome feature.",
                            asset: (0, r.jsx)("img", {
                                src: s.Z,
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
                        (0, r.jsx)(o.e4, {
                            targetElementRef: u,
                            shouldShow: n,
                            onRequestClose: () => l(!1),
                            steps: d,
                            caretConfig: {
                                position: "top",
                                align: "center",
                            },
                            onStepChange: () => {},
                        }),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Show Multi-Step",
                            buttonRef: u,
                            onClick: () => l(!n),
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
