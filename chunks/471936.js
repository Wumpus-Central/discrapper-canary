n.d(t, {
    t: () => T,
}),
    n(747238),
    n(321073),
    n(65821),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(18051),
    o = n(158954),
    s = n(116833),
    l = n(783878),
    c = n(521489),
    u = n(397927),
    d = n(314116),
    f = n(67576),
    p = n(293804);

function _(e, t, n) {
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

function h() {
    return (h =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}

function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
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

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e, t) {
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
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function O(e) {
    let t,
        n = [],
        i = 0,
        a = /\*\*(.+?)\*\*/g,
        o = 0;
    for (; null !== (t = a.exec(e)); )
        t.index > i && n.push(e.substring(i, t.index)),
            n.push(
                (0, r.jsx)(
                    "strong",
                    {
                        children: t[1],
                    },
                    o++,
                ),
            ),
            (i = a.lastIndex);
    return i < e.length && n.push(e.substring(i)), n.length > 0 ? n : e;
}

function v() {
    return (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "Lost access to your radness? Talk to your radness provider to refresh your aura.",
    });
}

function A(e) {
    let { setIsSafetyAccepted: t, setIsHelmetSelected: n } = e,
        [a, s] = i.useState([]),
        l = [
            {
                label: "I am wearing a helmet",
                value: "helmet",
            },
            {
                label: "I know where to find my personal flotation device",
                value: "pfd",
            },
            {
                label: "I completed the safety training",
                value: "training",
            },
        ];
    return (
        i.useEffect(() => {
            t(a.length === l.length), n(a.includes("helmet"));
        }, [a, l.length, t, n]),
        (0, r.jsx)(o.$QX, {
            label: "Safety checklist",
            options: l,
            selectedValues: a,
            onChange: s,
        })
    );
}

function I(e) {
    let { setIsPasscodeValid: t } = e,
        [n, a] = i.useState(""),
        o = (e) => {
            a(e), t(e.length > 0);
        };
    return (0, r.jsx)(u.ksK, {
        placeholder: "Enter your passcode...",
        value: n,
        onChange: o,
    });
}

function S(e) {
    let {
            callbackDelay: t,
            failOnNext: n,
            failOnComplete: a,
            onCompleteAlert: s,
            onNextAlert: l,
            customErrorNotice: c,
            errorNoticeType: u,
        } = e,
        d = y(e, [
            "callbackDelay",
            "failOnNext",
            "failOnComplete",
            "onCompleteAlert",
            "onNextAlert",
            "customErrorNotice",
            "errorNoticeType",
        ]),
        [f, p] = i.useState("intro"),
        [_, h] = i.useState(!1),
        [g, E] = i.useState(!1),
        [b, O] = i.useState(!1),
        [S, T] = i.useState(null),
        C = i.useCallback(async () => {
            if (
                (T(null),
                t > 0 && (await new Promise((e) => setTimeout(e, 1e3 * t))),
                l && alert("onNext callback fired"),
                n)
            ) {
                if ("" !== c.trim())
                    return (
                        T({
                            message: c,
                            type: u,
                        }),
                        !1
                    );
                throw Error("onNext failed");
            }
            return !0;
        }, [t, n, l, c, u]),
        N = i.useCallback(async () => {
            if (
                (T(null),
                t > 0 && (await new Promise((e) => setTimeout(e, 1e3 * t))),
                s && alert("onComplete callback fired"),
                a)
            ) {
                if ("" !== c.trim())
                    throw (
                        (T({
                            message: c,
                            type: u,
                        }),
                        Error("Custom error"))
                    );
                throw Error("onComplete failed");
            }
        }, [t, a, s, c, u]),
        w = [
            {
                stepKey: "intro",
                modalProps: {
                    title: "Verify radness",
                    subtitle: "To verify your radness, we need to ask you a few deep and personal questions.",
                    notice:
                        null != S
                            ? {
                                  message: S.message,
                                  type: S.type,
                              }
                            : void 0,
                },
                body: (0, r.jsx)(v, {}),
                nextButtonProps: {
                    text: "Verify",
                },
                onNext: C,
            },
            {
                stepKey: "safety",
                modalProps: {
                    title: "Safety first",
                    subtitle:
                        "Before we get started verifying your radness, we need to make sure you're safe and sound.",
                    notice:
                        null != S
                            ? {
                                  message: S.message,
                                  type: S.type,
                              }
                            : b
                              ? {
                                    message: "Great job, helmets are important for protecting your brain!",
                                    type: "warning",
                                }
                              : void 0,
                },
                body: (0, r.jsx)(A, {
                    setIsSafetyAccepted: h,
                    setIsHelmetSelected: O,
                }),
                nextEnabled: _,
                onNext: C,
            },
            {
                stepKey: "passcode",
                modalProps: {
                    title: "Enter passcode",
                    subtitle: "Enter your passcode to complete the radness verification process.",
                    notice:
                        null != S
                            ? {
                                  message: S.message,
                                  type: S.type,
                              }
                            : void 0,
                },
                body: (0, r.jsx)(I, {
                    setIsPasscodeValid: E,
                }),
                nextButtonProps: {
                    text: "Verify passcode",
                },
                nextEnabled: g,
            },
        ],
        R = w.slice(1).map((e) => e.stepKey);
    return (0, r.jsx)(
        o.t04,
        m(
            {
                steps: w,
                currentStepKey: f,
                numberedSteps: R,
                onStepChange: p,
                onComplete: N,
            },
            d,
        ),
    );
}
let T = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                var t;
                let { showPreview: n, showInput: i, subtitleIcon: a } = e,
                    s = y(e, ["showPreview", "showInput", "subtitleIcon"]),
                    c = a
                        ? {
                              text: null != (t = s.subtitle) ? t : "Default subtitle",
                              leadingIcon: o.N$i,
                          }
                        : s.subtitle;
                return (0, r.jsxs)(u.BJc, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Modal",
                            onClick: () =>
                                (0, u.qfG)(
                                    (e) =>
                                        (0, r.jsx)(
                                            o.Modal,
                                            E(m({}, e, s), {
                                                title: s.title,
                                                subtitle: c,
                                                input: i
                                                    ? (0, r.jsx)(u.IWV, {
                                                          placeholder: "Search...",
                                                          onChange: () => {},
                                                          query: "",
                                                      })
                                                    : void 0,
                                                preview: n
                                                    ? (0, r.jsxs)(u.BJc, {
                                                          gap: 8,
                                                          children: [
                                                              (0, r.jsx)(u.Text, {
                                                                  variant: "text-lg/semibold",
                                                                  children: "Preview Content",
                                                              }),
                                                              (0, r.jsx)(u.Text, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-subtle",
                                                                  children:
                                                                      "This is preview content that appears in the modal footer.",
                                                              }),
                                                          ],
                                                      })
                                                    : void 0,
                                                actions: [
                                                    {
                                                        variant: "secondary",
                                                        text: "Cancel",
                                                        onClick: e.onClose,
                                                    },
                                                    {
                                                        variant: "primary",
                                                        text: "Submit",
                                                        onClick: e.onClose,
                                                    },
                                                ],
                                                children: (0, r.jsxs)(u.BJc, {
                                                    gap: 16,
                                                    children: [
                                                        (0, r.jsx)(l.Z, {
                                                            maxOptionsVisible: 10,
                                                            label: "Example Select",
                                                            selectionMode: "multiple",
                                                            options: [
                                                                {
                                                                    label: "Option 1",
                                                                    value: "option1",
                                                                    id: "option1",
                                                                },
                                                                {
                                                                    label: "Option 2",
                                                                    value: "option2",
                                                                    id: "option2",
                                                                },
                                                                {
                                                                    label: "Option 3",
                                                                    value: "option3",
                                                                    id: "option3",
                                                                },
                                                                {
                                                                    label: "Option 4",
                                                                    value: "option4",
                                                                    id: "option4",
                                                                },
                                                                {
                                                                    label: "Option 5",
                                                                    value: "option5",
                                                                    id: "option5",
                                                                },
                                                                {
                                                                    label: "Option 6",
                                                                    value: "option6",
                                                                    id: "option6",
                                                                },
                                                                {
                                                                    label: "Option 7",
                                                                    value: "option7",
                                                                    id: "option7",
                                                                },
                                                                {
                                                                    label: "Option 8",
                                                                    value: "option8",
                                                                    id: "option8",
                                                                },
                                                            ],
                                                            onSelectionChange: () => {},
                                                        }),
                                                        (0, r.jsx)(u.ksK, {
                                                            label: "Example Input",
                                                            placeholder: "Enter some text...",
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "This is the main content area of the modal. You can place any content here.",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ),
                                    {
                                        dismissable: s.dismissable,
                                    },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Example Modal",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "This is a modal subtitle",
                },
                subtitleIcon: {
                    label: "Subtitle Icon",
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
                showInput: {
                    label: "Show Search Input",
                    type: "boolean",
                    defaultValue: !1,
                },
                showPreview: {
                    label: "Show Preview",
                    type: "boolean",
                    defaultValue: !1,
                },
                dismissable: {
                    label: "Dismissable",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "ConfirmModal [Alpha]",
            id: "confirm-modal",
            component: function (e) {
                let { cancelText: t, confirmDelay: n, confirmError: a, subtitle: o, formatSubtitle: s } = e,
                    l = y(e, ["cancelText", "confirmDelay", "confirmError", "subtitle", "formatSubtitle"]),
                    c = i.useMemo(() => (s ? O(o) : o), [o, s]);
                return (0, r.jsxs)(u.BJc, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the confirm modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Confirm Modal",
                            onClick: () =>
                                (0, d.A)(
                                    E(m({}, l), {
                                        subtitle: c,
                                        cancelText: "" === t ? void 0 : t,
                                        onConfirm: async (e) => {
                                            try {
                                                if ((await new Promise((e) => setTimeout(e, 1e3 * n)), a))
                                                    throw Error("Confirm error");
                                            } catch (t) {
                                                throw (
                                                    (e(
                                                        "Something went wrong reticulating splines. Please try again later.",
                                                    ),
                                                    t)
                                                );
                                            }
                                        },
                                    }),
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Reticulate splines",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "Are you sure you want to permanently reticulate **Spliney McSplineface**?",
                },
                formatSubtitle: {
                    label: "Format Subtitle (**bold**)",
                    type: "boolean",
                    defaultValue: !0,
                },
                confirmText: {
                    label: "Confirm Text",
                    type: "text",
                    defaultValue: "Reticulate",
                },
                cancelText: {
                    label: "Cancel Text",
                    type: "text",
                    defaultValue: "",
                },
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "critical",
                    options: [
                        {
                            label: "Primary",
                            value: "primary",
                        },
                        {
                            label: "Critical",
                            value: "critical",
                        },
                    ],
                },
                confirmDelay: {
                    label: "Confirm Delay (seconds)",
                    type: "number",
                    defaultValue: 0,
                },
                confirmError: {
                    label: "Confirm Error",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "ExpressiveModal",
            id: "expressive-modal",
            docs: "https://design.discord.tools/components/web/modals/expressive-modal",
            component: function (e) {
                var t;
                let { graphic: l, subtitleIcon: c } = e,
                    d = y(e, ["graphic", "subtitleIcon"]),
                    _ = c
                        ? {
                              text: null != (t = d.subtitle) ? t : "Default subtitle",
                              leadingIcon: o.N$i,
                          }
                        : d.subtitle,
                    h = i.useMemo(
                        () =>
                            0 === l
                                ? {
                                      type: "image",
                                      src: f,
                                  }
                                : 1 === l
                                  ? {
                                        type: "lottie",
                                        lottie: () => n.e("95947").then(n.t.bind(n, 604902, 19)),
                                        aspectRatio: "6/4",
                                    }
                                  : 2 === l
                                    ? {
                                          type: "rive",
                                          rive: a.PerfTestRive,
                                      }
                                    : 3 === l
                                      ? {
                                            type: "video",
                                            src: p.A,
                                            fallbackImageSrc: f,
                                            loop: !0,
                                            loopAt: 2.5,
                                        }
                                      : 4 === l
                                        ? {
                                              type: "dynamic",
                                              component: s.DynamicGraphicComponent.DEMO,
                                              aspectRatio: "6/4",
                                              props: {
                                                  text: "Dynamic Content",
                                              },
                                          }
                                        : void 0,
                        [l],
                    );
                return (0, r.jsxs)(u.BJc, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the expressive modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open ExpressiveModal",
                            onClick: () =>
                                (0, u.qfG)(
                                    (e) =>
                                        (0, r.jsx)(
                                            o.ExpressiveModal,
                                            E(m({}, e, d), {
                                                title: d.title,
                                                subtitle: _,
                                                graphic: h,
                                                actions: [
                                                    {
                                                        variant: "secondary",
                                                        text: "Cancel",
                                                        onClick: e.onClose,
                                                    },
                                                    {
                                                        variant: "primary",
                                                        text: "Submit",
                                                        onClick: e.onClose,
                                                    },
                                                ],
                                                children: (0, r.jsx)(u.BJc, {
                                                    gap: 16,
                                                    children: (0, r.jsx)(u.Text, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "This is an expressive modal with a gradient background and optional badge.",
                                                    }),
                                                }),
                                            }),
                                        ),
                                    {
                                        dismissable: d.dismissable,
                                    },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Expressive Modal",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "This modal has a gradient background",
                },
                subtitleIcon: {
                    label: "Subtitle Icon",
                    type: "boolean",
                    defaultValue: !1,
                },
                gradientColor: {
                    label: "Gradient Color",
                    type: "select",
                    defaultValue: "purple",
                    options: [
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
                graphic: {
                    label: "Graphic",
                    type: "select",
                    defaultValue: 0,
                    options: [
                        {
                            label: "Image",
                            value: 0,
                        },
                        {
                            label: "Lottie",
                            value: 1,
                        },
                        {
                            label: "Rive",
                            value: 2,
                        },
                        {
                            label: "Looping Video",
                            value: 3,
                        },
                        {
                            label: "Dynamic Content",
                            value: 4,
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
                dismissable: {
                    label: "Dismissable",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "Dynamic Graphic Modal",
            id: "dynamic-graphic-modal",
            component: function (e) {
                let { dynamicText: t } = e,
                    i = y(e, ["dynamicText"]),
                    a = {
                        type: "dynamic",
                        component: s.DynamicGraphicComponent.DEMO,
                        aspectRatio: "6/4",
                        props: {
                            text: t,
                        },
                    };
                return (0, r.jsxs)(u.BJc, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children:
                                "This example demonstrates the DynamicGraphic component rendering a React component inside the modal header.",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Dynamic Graphic Modal",
                            onClick: () =>
                                (0, u.mMO)(
                                    async () => {
                                        let { ExpressiveModal: e } = await Promise.resolve().then(n.bind(n, 158954));
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                E(m({}, t, i), {
                                                    title: i.title,
                                                    subtitle: i.subtitle,
                                                    graphic: a,
                                                    actions: [
                                                        {
                                                            variant: "secondary",
                                                            text: "Cancel",
                                                            onClick: t.onClose,
                                                        },
                                                        {
                                                            variant: "primary",
                                                            text: "Submit",
                                                            onClick: t.onClose,
                                                        },
                                                    ],
                                                    children: (0, r.jsx)(u.BJc, {
                                                        gap: 16,
                                                        children: (0, r.jsx)(u.Text, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "The header above is rendered using a React component via DynamicGraphic, allowing for dynamic, interactive content in the modal header.",
                                                        }),
                                                    }),
                                                }),
                                            );
                                    },
                                    {
                                        dismissable: i.dismissable,
                                    },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Dynamic Graphic Modal",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "This modal uses a React component in the header",
                },
                dynamicText: {
                    label: "Dynamic Text",
                    type: "text",
                    defaultValue: "Hello from DynamicGraphic!",
                },
                gradientColor: {
                    label: "Gradient Color",
                    type: "select",
                    defaultValue: "purple",
                    options: [
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
                badge: {
                    label: "Badge",
                    type: "select",
                    defaultValue: void 0,
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
                dismissable: {
                    label: "Dismissable",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "LayerModal",
            id: "layer-modal",
            component: function (e) {
                let {} = e,
                    t = h({}, e);
                return (0, r.jsxs)(u.BJc, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the layer modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Layer Modal",
                            onClick: () =>
                                (0, u.qfG)((e) =>
                                    (0, r.jsx)(
                                        c.N,
                                        E(m({}, e, t), {
                                            children: (0, r.jsx)(u.BJc, {
                                                gap: 16,
                                                children: (0, r.jsx)(u.Text, {
                                                    variant: "text-md/normal",
                                                    children: "This is the layer modal content",
                                                }),
                                            }),
                                        }),
                                    ),
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
                    callbackDelay: t,
                    failOnNext: n,
                    failOnComplete: i,
                    onCompleteAlert: a,
                    onNextAlert: o,
                    customErrorNotice: s,
                    errorNoticeType: l,
                } = e;
                return (0, r.jsxs)(u.BJc, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the multi-step modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open MultiStepModal",
                            onClick: () =>
                                (0, u.qfG)((e) =>
                                    (0, r.jsx)(
                                        S,
                                        E(m({}, e), {
                                            callbackDelay: t,
                                            failOnNext: n,
                                            failOnComplete: i,
                                            onCompleteAlert: a,
                                            onNextAlert: o,
                                            customErrorNotice: s,
                                            errorNoticeType: l,
                                        }),
                                    ),
                                ),
                        }),
                    ],
                });
            },
            controls: {
                callbackDelay: {
                    label: "Delay Callbacks (seconds)",
                    type: "number",
                    defaultValue: 0,
                },
                failOnNext: {
                    label: "Fail onNext",
                    type: "boolean",
                    defaultValue: !1,
                },
                failOnComplete: {
                    label: "Fail onComplete",
                    type: "boolean",
                    defaultValue: !1,
                },
                onCompleteAlert: {
                    label: "onComplete Alert",
                    type: "boolean",
                    defaultValue: !1,
                },
                onNextAlert: {
                    label: "onNext Alert",
                    type: "boolean",
                    defaultValue: !1,
                },
                customErrorNotice: {
                    label: "Custom Error Notice",
                    type: "text",
                    defaultValue: "",
                },
                errorNoticeType: {
                    label: "Error Notice Type",
                    type: "select",
                    defaultValue: "critical",
                    options: [
                        {
                            label: "Critical",
                            value: "critical",
                        },
                        {
                            label: "Warning",
                            value: "warning",
                        },
                        {
                            label: "Info",
                            value: "info",
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
