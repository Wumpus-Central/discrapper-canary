"use strict";
n.d(t, { t: () => E }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(18051),
    s = n(158954),
    o = n(116833),
    l = n(521489),
    u = n(397927),
    c = n(314116),
    d = n(67576),
    _ = n(293804);
function f(e) {
    let t,
        n = [],
        i = 0,
        a = /\*\*(.+?)\*\*/g,
        s = 0;
    for (; null !== (t = a.exec(e)); )
        t.index > i && n.push(e.substring(i, t.index)),
            n.push((0, r.jsx)("strong", { children: t[1] }, s++)),
            (i = a.lastIndex);
    return i < e.length && n.push(e.substring(i)), n.length > 0 ? n : e;
}
function p() {
    return (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "Lost access to your radness? Talk to your radness provider to refresh your aura.",
    });
}
function h(e) {
    let { setIsSafetyAccepted: t, setIsHelmetSelected: n } = e,
        [a, o] = i.useState([]),
        l = [
            { label: "I am wearing a helmet", value: "helmet" },
            { label: "I know where to find my personal flotation device", value: "pfd" },
            { label: "I completed the safety training", value: "training" },
        ];
    return (
        i.useEffect(() => {
            t(a.length === l.length), n(a.includes("helmet"));
        }, [a, l.length, t, n]),
        (0, r.jsx)(s.$QX, { label: "Safety checklist", options: l, selectedValues: a, onChange: o })
    );
}
function m(e) {
    let { setIsPasscodeValid: t } = e,
        [n, a] = i.useState(""),
        s = (e) => {
            a(e), t(e.length > 0);
        };
    return (0, r.jsx)(u.ksK, { placeholder: "Enter your passcode...", value: n, onChange: s });
}
function g(e) {
    let {
            callbackDelay: t,
            failOnNext: n,
            failOnComplete: a,
            onCompleteAlert: o,
            onNextAlert: l,
            customErrorNotice: u,
            errorNoticeType: c,
            ...d
        } = e,
        [_, f] = i.useState("intro"),
        [g, E] = i.useState(!1),
        [A, I] = i.useState(!1),
        [T, y] = i.useState(!1),
        [S, v] = i.useState(null),
        C = i.useCallback(async () => {
            if (
                (v(null),
                t > 0 && (await new Promise((e) => setTimeout(e, 1e3 * t))),
                l && alert("onNext callback fired"),
                n)
            ) {
                if ("" !== u.trim()) return v({ message: u, type: c }), !1;
                throw Error("onNext failed");
            }
            return !0;
        }, [t, n, l, u, c]),
        b = i.useCallback(async () => {
            if (
                (v(null),
                t > 0 && (await new Promise((e) => setTimeout(e, 1e3 * t))),
                o && alert("onComplete callback fired"),
                a)
            ) {
                if ("" !== u.trim()) throw (v({ message: u, type: c }), Error("Custom error"));
                throw Error("onComplete failed");
            }
        }, [t, a, o, u, c]),
        N = [
            {
                stepKey: "intro",
                modalProps: {
                    title: "Verify radness",
                    subtitle: "To verify your radness, we need to ask you a few deep and personal questions.",
                    notice: null != S ? { message: S.message, type: S.type } : void 0,
                },
                body: (0, r.jsx)(p, {}),
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
                        null != S
                            ? { message: S.message, type: S.type }
                            : T
                              ? {
                                    message: "Great job, helmets are important for protecting your brain!",
                                    type: "warning",
                                }
                              : void 0,
                },
                body: (0, r.jsx)(h, { setIsSafetyAccepted: E, setIsHelmetSelected: y }),
                nextEnabled: g,
                onNext: C,
            },
            {
                stepKey: "passcode",
                modalProps: {
                    title: "Enter passcode",
                    subtitle: "Enter your passcode to complete the radness verification process.",
                    notice: null != S ? { message: S.message, type: S.type } : void 0,
                },
                body: (0, r.jsx)(m, { setIsPasscodeValid: I }),
                nextButtonProps: { text: "Verify passcode" },
                nextEnabled: A,
            },
        ],
        R = N.slice(1).map((e) => e.stepKey);
    return (0, r.jsx)(s.t04, { steps: N, currentStepKey: _, numberedSteps: R, onStepChange: f, onComplete: b, ...d });
}
let E = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                let { showPreview: t, showInput: n, subtitleIcon: i, ...a } = e,
                    o = i ? { text: a.subtitle ?? "Default subtitle", leadingIcon: s.N$i } : a.subtitle;
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
                                        (0, r.jsx)(s.Modal, {
                                            ...e,
                                            ...a,
                                            title: a.title,
                                            subtitle: o,
                                            input: n
                                                ? (0, r.jsx)(u.IWV, {
                                                      placeholder: "Search...",
                                                      onChange: () => {},
                                                      query: "",
                                                  })
                                                : void 0,
                                            preview: t
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
                                                { variant: "secondary", text: "Cancel", onClick: e.onClose },
                                                { variant: "primary", text: "Submit", onClick: e.onClose },
                                            ],
                                            children: (0, r.jsxs)(u.BJc, {
                                                gap: 16,
                                                children: [
                                                    (0, r.jsx)(u.ZiE, {
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
                                    { dismissable: a.dismissable },
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
                let { cancelText: t, confirmDelay: n, confirmError: a, subtitle: s, formatSubtitle: o, ...l } = e,
                    d = i.useMemo(() => (o ? f(s) : s), [s, o]);
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
                                (0, c.A)({
                                    ...l,
                                    subtitle: d,
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
                let { graphic: t, subtitleIcon: l, ...c } = e,
                    f = l ? { text: c.subtitle ?? "Default subtitle", leadingIcon: s.N$i } : c.subtitle,
                    p = i.useMemo(
                        () =>
                            0 === t
                                ? { type: "image", src: d }
                                : 1 === t
                                  ? {
                                        type: "lottie",
                                        lottie: () => n.e("95947").then(n.t.bind(n, 604902, 19)),
                                        aspectRatio: "6/4",
                                    }
                                  : 2 === t
                                    ? { type: "rive", rive: a.PerfTestRive }
                                    : 3 === t
                                      ? { type: "video", src: _.A, fallbackImageSrc: d, loop: !0, loopAt: 2.5 }
                                      : 4 === t
                                        ? {
                                              type: "dynamic",
                                              component: o.DynamicGraphicComponent.DEMO,
                                              aspectRatio: "6/4",
                                              props: { text: "Dynamic Content" },
                                          }
                                        : void 0,
                        [t],
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
                                        (0, r.jsx)(s.ExpressiveModal, {
                                            ...e,
                                            ...c,
                                            title: c.title,
                                            subtitle: f,
                                            graphic: p,
                                            actions: [
                                                { variant: "secondary", text: "Cancel", onClick: e.onClose },
                                                { variant: "primary", text: "Submit", onClick: e.onClose },
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
                                    { dismissable: c.dismissable },
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
                let { dynamicText: t, ...i } = e,
                    a = {
                        type: "dynamic",
                        component: o.DynamicGraphicComponent.DEMO,
                        aspectRatio: "6/4",
                        props: { text: t },
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
                                            (0, r.jsx)(e, {
                                                ...t,
                                                ...i,
                                                title: i.title,
                                                subtitle: i.subtitle,
                                                graphic: a,
                                                actions: [
                                                    { variant: "secondary", text: "Cancel", onClick: t.onClose },
                                                    { variant: "primary", text: "Submit", onClick: t.onClose },
                                                ],
                                                children: (0, r.jsx)(u.BJc, {
                                                    gap: 16,
                                                    children: (0, r.jsx)(u.Text, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "The header above is rendered using a React component via DynamicGraphic, allowing for dynamic, interactive content in the modal header.",
                                                    }),
                                                }),
                                            });
                                    },
                                    { dismissable: i.dismissable },
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
                let { ...t } = e;
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
                                    (0, r.jsx)(l.N, {
                                        ...e,
                                        ...t,
                                        children: (0, r.jsx)(u.BJc, {
                                            gap: 16,
                                            children: (0, r.jsx)(u.Text, {
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
                    callbackDelay: t,
                    failOnNext: n,
                    failOnComplete: i,
                    onCompleteAlert: a,
                    onNextAlert: s,
                    customErrorNotice: o,
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
                                    (0, r.jsx)(g, {
                                        ...e,
                                        callbackDelay: t,
                                        failOnNext: n,
                                        failOnComplete: i,
                                        onCompleteAlert: a,
                                        onNextAlert: s,
                                        customErrorNotice: o,
                                        errorNoticeType: l,
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
    ],
};
