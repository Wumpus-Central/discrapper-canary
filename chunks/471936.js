a.d(l, { t: () => T }), a(321073);
var t = a(627968),
    n = a(64700),
    o = a(600186),
    i = a(224640),
    r = a(430993),
    s = a(276293),
    d = a(189213),
    u = a(772707),
    c = a(167417),
    b = a(347704),
    p = a(116833),
    m = a(521489),
    h = a(331322),
    x = a(834730),
    g = a(821609),
    f = a(192308),
    v = a(892547),
    y = a(783878),
    _ = a(292666),
    C = a(314116),
    j = a(67576),
    V = a(293804);
function k() {
    return (0, t.jsx)(x.E, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "Lost access to your radness? Talk to your radness provider to refresh your aura.",
    });
}
function S(e) {
    let { setIsSafetyAccepted: l, setIsHelmetSelected: a } = e,
        [o, i] = n.useState([]),
        r = [
            { label: "I am wearing a helmet", value: "helmet" },
            { label: "I know where to find my personal flotation device", value: "pfd" },
            { label: "I completed the safety training", value: "training" },
        ];
    return (
        n.useEffect(() => {
            l(o.length === r.length), a(o.includes("helmet"));
        }, [o, r.length, l, a]),
        (0, t.jsx)(c.$, { label: "Safety checklist", options: r, selectedValues: o, onChange: i })
    );
}
function w(e) {
    let { setIsPasscodeValid: l } = e,
        [a, o] = n.useState("");
    return (0, t.jsx)(_.k, {
        placeholder: "Enter your passcode...",
        value: a,
        onChange: (e) => {
            o(e), l(e.length > 0);
        },
    });
}
function M(e) {
    let {
            callbackDelay: l,
            failOnNext: a,
            failOnComplete: o,
            onCompleteAlert: i,
            onNextAlert: r,
            customErrorNotice: s,
            errorNoticeType: d,
            ...u
        } = e,
        [c, p] = n.useState("intro"),
        [m, h] = n.useState(!1),
        [x, g] = n.useState(!1),
        [f, v] = n.useState(!1),
        [y, _] = n.useState(null),
        C = n.useCallback(async () => {
            if (
                (_(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                r && alert("onNext callback fired"),
                a)
            ) {
                if ("" !== s.trim()) return _({ message: s, type: d }), !1;
                throw Error("onNext failed");
            }
            return !0;
        }, [l, a, r, s, d]),
        j = n.useCallback(async () => {
            if (
                (_(null),
                l > 0 && (await new Promise((e) => setTimeout(e, 1e3 * l))),
                i && alert("onComplete callback fired"),
                o)
            ) {
                if ("" !== s.trim()) throw (_({ message: s, type: d }), Error("Custom error"));
                throw Error("onComplete failed");
            }
        }, [l, o, i, s, d]),
        V = [
            {
                stepKey: "intro",
                modalProps: {
                    title: "Verify radness",
                    subtitle: "To verify your radness, we need to ask you a few deep and personal questions.",
                    notice: null != y ? { message: y.message, type: y.type } : void 0,
                },
                body: (0, t.jsx)(k, {}),
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
                        null != y
                            ? { message: y.message, type: y.type }
                            : f
                              ? {
                                    message: "Great job, helmets are important for protecting your brain!",
                                    type: "warning",
                                }
                              : void 0,
                },
                body: (0, t.jsx)(S, { setIsSafetyAccepted: h, setIsHelmetSelected: v }),
                nextEnabled: m,
                onNext: C,
            },
            {
                stepKey: "passcode",
                modalProps: {
                    title: "Enter passcode",
                    subtitle: "Enter your passcode to complete the radness verification process.",
                    notice: null != y ? { message: y.message, type: y.type } : void 0,
                },
                body: (0, t.jsx)(w, { setIsPasscodeValid: g }),
                nextButtonProps: { text: "Verify passcode" },
                nextEnabled: x,
            },
        ],
        M = V.slice(1).map((e) => e.stepKey);
    return (0, t.jsx)(b.t, { steps: V, currentStepKey: c, numberedSteps: M, onStepChange: p, onComplete: j, ...u });
}
let T = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                let { showPreview: l, showInput: a, subtitleIcon: n, ...o } = e,
                    i = n ? { text: o.subtitle ?? "Default subtitle", leadingIcon: s.N } : o.subtitle;
                return (0, t.jsxs)(h.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the modal",
                        }),
                        (0, t.jsx)(g.$, {
                            variant: "primary",
                            text: "Open Modal",
                            onClick: () =>
                                (0, f.openModal)(
                                    (e) =>
                                        (0, t.jsx)(d.Modal, {
                                            ...e,
                                            ...o,
                                            title: o.title,
                                            subtitle: i,
                                            input: a
                                                ? (0, t.jsx)(v.I, {
                                                      placeholder: "Search...",
                                                      onChange: () => {},
                                                      query: "",
                                                  })
                                                : void 0,
                                            preview: l
                                                ? (0, t.jsxs)(h.B, {
                                                      gap: 8,
                                                      children: [
                                                          (0, t.jsx)(x.E, {
                                                              variant: "text-lg/semibold",
                                                              children: "Preview Content",
                                                          }),
                                                          (0, t.jsx)(x.E, {
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
                                            children: (0, t.jsxs)(h.B, {
                                                gap: 16,
                                                children: [
                                                    (0, t.jsx)(y.Z, {
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
                                                    (0, t.jsx)(_.k, {
                                                        label: "Example Input",
                                                        placeholder: "Enter some text...",
                                                    }),
                                                    (0, t.jsx)(x.E, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "This is the main content area of the modal. You can place any content here.",
                                                    }),
                                                ],
                                            }),
                                        }),
                                    { dismissable: o.dismissable },
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
                let { cancelText: l, confirmDelay: a, confirmError: o, subtitle: i, formatSubtitle: r, ...s } = e,
                    d = n.useMemo(
                        () =>
                            r
                                ? (function (e) {
                                      let l,
                                          a = [],
                                          n = 0,
                                          o = /\*\*(.+?)\*\*/g,
                                          i = 0;
                                      for (; null !== (l = o.exec(e)); )
                                          l.index > n && a.push(e.substring(n, l.index)),
                                              a.push((0, t.jsx)("strong", { children: l[1] }, i++)),
                                              (n = o.lastIndex);
                                      return n < e.length && a.push(e.substring(n)), a.length > 0 ? a : e;
                                  })(i)
                                : i,
                        [i, r],
                    );
                return (0, t.jsxs)(h.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the confirm modal",
                        }),
                        (0, t.jsx)(g.$, {
                            variant: "primary",
                            text: "Open Confirm Modal",
                            onClick: () =>
                                (0, C.A)({
                                    ...s,
                                    subtitle: d,
                                    cancelText: "" === l ? void 0 : l,
                                    onConfirm: async (e) => {
                                        try {
                                            if ((await new Promise((e) => setTimeout(e, 1e3 * a)), o))
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
                let { graphic: l, subtitleIcon: i, ...r } = e,
                    d = i ? { text: r.subtitle ?? "Default subtitle", leadingIcon: s.N } : r.subtitle,
                    c = n.useMemo(
                        () =>
                            0 === l
                                ? { type: "image", src: j }
                                : 1 === l
                                  ? {
                                        type: "lottie",
                                        lottie: () => a.e("95947").then(a.t.bind(a, 604902, 19)),
                                        aspectRatio: "6/4",
                                    }
                                  : 2 === l
                                    ? { type: "rive", rive: o.Q }
                                    : 3 === l
                                      ? { type: "video", src: V.A, fallbackImageSrc: j, loop: !0, loopAt: 2.5 }
                                      : 4 === l
                                        ? {
                                              type: "dynamic",
                                              component: p.DynamicGraphicComponent.DEMO,
                                              aspectRatio: "6/4",
                                              props: { text: "Dynamic Content" },
                                          }
                                        : void 0,
                        [l],
                    );
                return (0, t.jsxs)(h.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the expressive modal",
                        }),
                        (0, t.jsx)(g.$, {
                            variant: "primary",
                            text: "Open ExpressiveModal",
                            onClick: () =>
                                (0, f.openModal)(
                                    (e) =>
                                        (0, t.jsx)(u.k, {
                                            ...e,
                                            ...r,
                                            title: r.title,
                                            subtitle: d,
                                            graphic: c,
                                            actions: [
                                                { variant: "secondary", text: "Cancel", onClick: e.onClose },
                                                { variant: "primary", text: "Submit", onClick: e.onClose },
                                            ],
                                            children: (0, t.jsx)(h.B, {
                                                gap: 16,
                                                children: (0, t.jsx)(x.E, {
                                                    variant: "text-md/normal",
                                                    children:
                                                        "This is an expressive modal with a gradient background and optional badge.",
                                                }),
                                            }),
                                        }),
                                    { dismissable: r.dismissable },
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
                let { dynamicText: l, ...n } = e,
                    o = {
                        type: "dynamic",
                        component: p.DynamicGraphicComponent.DEMO,
                        aspectRatio: "6/4",
                        props: { text: l },
                    };
                return (0, t.jsxs)(h.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "text-md/normal",
                            children:
                                "This example demonstrates the DynamicGraphic component rendering a React component inside the modal header.",
                        }),
                        (0, t.jsx)(g.$, {
                            variant: "primary",
                            text: "Open Dynamic Graphic Modal",
                            onClick: () =>
                                (0, f.openModalLazy)(
                                    async () => {
                                        let { ExpressiveModal: e } = await a.e("4823").then(a.bind(a, 158954));
                                        return (l) =>
                                            (0, t.jsx)(e, {
                                                ...l,
                                                ...n,
                                                title: n.title,
                                                subtitle: n.subtitle,
                                                graphic: o,
                                                actions: [
                                                    { variant: "secondary", text: "Cancel", onClick: l.onClose },
                                                    { variant: "primary", text: "Submit", onClick: l.onClose },
                                                ],
                                                children: (0, t.jsx)(h.B, {
                                                    gap: 16,
                                                    children: (0, t.jsx)(x.E, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "The header above is rendered using a React component via DynamicGraphic, allowing for dynamic, interactive content in the modal header.",
                                                    }),
                                                }),
                                            });
                                    },
                                    { dismissable: n.dismissable },
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
                return (0, t.jsxs)(h.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the layer modal",
                        }),
                        (0, t.jsx)(g.$, {
                            variant: "primary",
                            text: "Open Layer Modal",
                            onClick: () =>
                                (0, f.openModal)((e) =>
                                    (0, t.jsx)(m.N, {
                                        ...e,
                                        ...l,
                                        children: (0, t.jsx)(h.B, {
                                            gap: 16,
                                            children: (0, t.jsx)(x.E, {
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
                    failOnComplete: n,
                    onCompleteAlert: o,
                    onNextAlert: i,
                    customErrorNotice: r,
                    errorNoticeType: s,
                } = e;
                return (0, t.jsxs)(h.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the multi-step modal",
                        }),
                        (0, t.jsx)(g.$, {
                            variant: "primary",
                            text: "Open MultiStepModal",
                            onClick: () =>
                                (0, f.openModal)((e) =>
                                    (0, t.jsx)(M, {
                                        ...e,
                                        callbackDelay: l,
                                        failOnNext: a,
                                        failOnComplete: n,
                                        onCompleteAlert: o,
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
                let { dismissable: l, tallContent: a, ...n } = e;
                return (0, t.jsxs)(h.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the base modal",
                        }),
                        (0, t.jsx)(g.$, {
                            variant: "primary",
                            text: "Open BaseModal",
                            onClick: () =>
                                (0, f.openModal)(
                                    (e) =>
                                        (0, t.jsx)(i.d, {
                                            ...e,
                                            ...n,
                                            "aria-label": "Base Modal Example",
                                            children: (0, t.jsx)(r.c, {
                                                children: (0, t.jsxs)(h.B, {
                                                    gap: 16,
                                                    children: [
                                                        (0, t.jsx)(x.E, {
                                                            variant: "text-lg/semibold",
                                                            children: "BaseModal Content",
                                                        }),
                                                        (0, t.jsx)(x.E, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "This is the raw BaseModal container. It provides the modal chrome (animation, sizing, padding, focus management) without any opinionated header, body, or action bar layout.",
                                                        }),
                                                        a
                                                            ? Array.from({ length: 20 }, (e, l) =>
                                                                  (0, t.jsxs)(
                                                                      x.E,
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
