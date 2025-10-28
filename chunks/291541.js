t.d(l, { y: () => p }), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(481060),
    i = t(907862),
    r = t(453707),
    s = t(241539),
    u = t(715720);
function d(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (l) {
                var a;
                (a = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[l] = a);
            });
    }
    return e;
}
function c(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}
function b(e, l) {
    if (null == e) return {};
    var t,
        a,
        n = (function (e, l) {
            if (null == e) return {};
            var t,
                a,
                n = {},
                o = Object.keys(e);
            for (a = 0; a < o.length; a++) (t = o[a]), l.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
        })(e, l);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++)
            (t = o[a]), !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
    }
    return n;
}
let p = {
    title: "Popover",
    stories: [
        {
            name: "Popover",
            id: "popover",
            docs: "https://design.discord.tools/components/web/popover",
            component: function (e) {
                var { showAsset: l, showActions: t, showTextLink: u, caretAlign: p, size: y } = e,
                    m = b(e, ["showAsset", "showActions", "showTextLink", "caretAlign", "size"]);
                let [f, v] = n.useState(!1),
                    h = n.useRef(null);
                return (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(
                            i.J2,
                            c(d({}, m), {
                                size: y,
                                targetElementRef: h,
                                shouldShow: f,
                                onRequestClose: () => v(!1),
                                graphic: l
                                    ? {
                                          type: "image",
                                          src: "sm" === y ? s.Z : r.Z,
                                      }
                                    : void 0,
                                caretConfig: { align: p },
                                actions: t
                                    ? [
                                          {
                                              text: "Close",
                                              onClick: () => v(!1),
                                          },
                                      ]
                                    : void 0,
                                textLink: u
                                    ? {
                                          text: "Learn More",
                                          link: "https://discord.com",
                                          external: !0,
                                      }
                                    : void 0,
                            }),
                        ),
                        (0, a.jsx)(o.Button, {
                            variant: "primary",
                            text: "Toggle Popover",
                            buttonRef: h,
                            onClick: () => v(!f),
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
                var { showActions: l } = e,
                    t = b(e, ["showActions"]);
                let [r, s] = n.useState(!1),
                    u = n.useRef(null);
                return (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(
                            i.Mb,
                            c(d({}, t), {
                                targetElementRef: u,
                                shouldShow: r,
                                onRequestClose: () => s(!1),
                                title: "Video Popover Demo",
                                body: "Click the video to view it in the media viewer!",
                                assetUrl:
                                    "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                                badge: "new",
                                action: l
                                    ? {
                                          text: "Learn More",
                                          onClick: () => s(!1),
                                      }
                                    : void 0,
                            }),
                        ),
                        (0, a.jsx)(o.Button, {
                            variant: "primary",
                            text: "Show Video Popover",
                            buttonRef: u,
                            onClick: () => s(!r),
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
                let { showExpressive: l } = e,
                    [t, s] = n.useState(!1),
                    d = n.useRef(null),
                    c = [
                        {
                            title: "Welcome to the Feature!",
                            body: "This is the first step of our multi-step introduction.",
                            asset: (0, a.jsx)("img", {
                                src: r.Z,
                                alt: "Step 1",
                            }),
                            badge: "new",
                            action: { text: "Next" },
                            gradientColor: "blue",
                        },
                        {
                            title: "Learn the Benefits",
                            body: "Here are the amazing benefits you can enjoy with this feature.",
                            asset: (0, a.jsx)("img", {
                                src: u.Z,
                                alt: "Step 2",
                            }),
                            action: { text: "Continue" },
                            gradientColor: "purple",
                        },
                        {
                            title: "Get Started!",
                            body: "You're all set to begin using this awesome feature.",
                            asset: (0, a.jsx)("img", {
                                src: r.Z,
                                alt: "Step 3",
                            }),
                            action: {
                                text: "Get Started",
                                variant: l ? "expressive" : void 0,
                            },
                            gradientColor: "nitro-pink",
                            textLink: {
                                text: "Learn More",
                                link: "https://discord.com",
                                external: !0,
                            },
                        },
                    ];
                return (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(i.e4, {
                            targetElementRef: d,
                            shouldShow: t,
                            onRequestClose: () => s(!1),
                            steps: c,
                            caretConfig: {
                                position: "top",
                                align: "center",
                            },
                            onStepChange: () => {},
                        }),
                        (0, a.jsx)(o.Button, {
                            variant: "primary",
                            text: "Show Multi-Step",
                            buttonRef: d,
                            onClick: () => s(!t),
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
