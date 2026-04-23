l.d(t, { Z: () => m });
var a = l(627968);
l(64700);
var n = l(403581),
    r = l(691540),
    i = l(857250),
    o = l(97483),
    s = l(750338),
    d = l(23003),
    c = l(576765),
    u = l(88433);
let p = { none: void 0, nitroWheel: n.t },
    m = {
        title: "Marketing Home",
        stories: [
            {
                name: "Bento Box",
                component: function (e) {
                    let {
                            title: t,
                            description: l,
                            ctaMode: n,
                            descriptionCtaText: m,
                            action1Text: b,
                            action1Variant: h,
                            action2Text: x,
                            action2Variant: y,
                            icon: v,
                            iconPosition: g,
                            index: f,
                            size: _,
                            badgeText: E,
                            badgeVariant: C,
                            isReducedMotion: S,
                            previewImageStyle: j,
                        } = e,
                        T = () => (0, r.P0)((0, i.o)("CTA clicked!", o.Ck.SUCCESS)),
                        P = p[v],
                        I =
                            "descriptionCta" === n
                                ? { descriptionCta: m, onClick: T }
                                : "actions" === n
                                  ? {
                                        actions: [
                                            {
                                                text: b,
                                                variant: h,
                                                onClick: T,
                                                ...(null != P ? { icon: P, iconPosition: g } : {}),
                                            },
                                            ...(x.length > 0 ? [{ text: x, variant: y, onClick: T }] : []),
                                        ],
                                    }
                                  : {};
                    return (0, a.jsx)("div", {
                        children: (0, a.jsx)(s.A, {
                            name: d.NI.EMOJIS,
                            title: t,
                            description: l,
                            previewImage: c.A,
                            videoUrl: u.A,
                            shouldLoadVideo: !0,
                            index: f,
                            size: _,
                            badgeText: E.length > 0 ? E : void 0,
                            badgeVariant: C,
                            isReducedMotion: S,
                            previewImageStyle: j,
                            ...I,
                        }),
                    });
                },
                id: "bento-box",
                controls: {
                    title: { label: "Title", type: "text", defaultValue: "Express yourself with emoji" },
                    description: {
                        label: "Description",
                        type: "text",
                        defaultValue: "Use any emoji anywhere — even in servers that don't have them unlocked.",
                    },
                    ctaMode: {
                        label: "CTA Mode",
                        type: "select",
                        defaultValue: "descriptionCta",
                        options: [
                            { label: "descriptionCta + onClick", value: "descriptionCta" },
                            { label: "actions", value: "actions" },
                            { label: "None", value: "none" },
                        ],
                    },
                    descriptionCtaText: { label: "descriptionCta Text", type: "text", defaultValue: "Take me there" },
                    action1Text: { label: "Action 1 Text", type: "text", defaultValue: "Primary action" },
                    action1Variant: {
                        label: "Action 1 Variant",
                        type: "select",
                        defaultValue: "primary",
                        options: [
                            { label: "Primary", value: "primary" },
                            { label: "Secondary", value: "secondary" },
                        ],
                    },
                    action2Text: {
                        label: "Action 2 Text (leave empty to hide)",
                        type: "text",
                        defaultValue: "Secondary action",
                    },
                    action2Variant: {
                        label: "Action 2 Variant",
                        type: "select",
                        defaultValue: "secondary",
                        options: [
                            { label: "Primary", value: "primary" },
                            { label: "Secondary", value: "secondary" },
                        ],
                    },
                    icon: {
                        label: "Action 1 Icon (actions mode only)",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Nitro Wheel", value: "nitroWheel" },
                        ],
                    },
                    iconPosition: {
                        label: "Action 1 Icon Position (actions mode only)",
                        type: "select",
                        defaultValue: "start",
                        options: [
                            { label: "Start", value: "start" },
                            { label: "End", value: "end" },
                        ],
                    },
                    index: { label: "Index", type: "number", defaultValue: 0 },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: d.A0.LARGE,
                        options: [
                            { label: "Small", value: d.A0.SMALL },
                            { label: "Medium", value: d.A0.MEDIUM },
                            { label: "Large", value: d.A0.LARGE },
                        ],
                    },
                    badgeText: { label: "Badge Text", type: "text", defaultValue: "" },
                    badgeVariant: {
                        label: "Badge Variant",
                        type: "select",
                        defaultValue: "gradient",
                        options: [
                            { label: "Gradient", value: "gradient" },
                            { label: "Expressive", value: "expressive" },
                        ],
                    },
                    isReducedMotion: { label: "Reduced Motion", type: "boolean", defaultValue: !1 },
                    previewImageStyle: {
                        label: "Preview Image Style",
                        type: "select",
                        defaultValue: d.Tb.CONTAINED,
                        options: [
                            { label: "Contained", value: d.Tb.CONTAINED },
                            { label: "Overlay", value: d.Tb.OVERLAY },
                        ],
                    },
                },
            },
        ],
    };
