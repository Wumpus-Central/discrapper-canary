a.d(t, { ShopAssetsPreviewInstructionModal: () => u, ShopPFXPreviewInstructionModal: () => m, g: () => c, k: () => d });
var n = a(627968);
a(64700);
var l = a(189213),
    i = a(834730),
    s = a(534514),
    r = a(559474),
    o = a(997946);
let d = "shop-assets-preview-instructions-modal",
    c = "shop-pfx-preview-instructions-modal",
    u = (e) => {
        let { transitionState: t, onClose: a } = e;
        return (0, n.jsx)(l.Modal, {
            transitionState: t,
            title: "Upload Instructions",
            actions: [{ variant: "primary", text: "Okay", onClick: a }],
            onClose: a,
            children: (0, n.jsxs)("div", {
                className: o.j,
                children: [
                    (0, n.jsx)(i.E, {
                        variant: "text-md/bold",
                        children: "Upload Shop assets for preview in the app!",
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-md/normal",
                        children: 'Toggle "Enable Preview" to switch between viewing the live and preview assets.',
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-md/normal",
                        children: "These are only visible to you. Reloading the app will reset the state.",
                    }),
                    (0, n.jsx)(s.D, { variant: "heading-md/bold", children: "Valid Upload Types" }),
                    (0, n.jsxs)("ul", {
                        className: o.S,
                        children: [
                            (0, n.jsx)("li", { children: "One or more image or video files (jpg, png, webm)" }),
                            (0, n.jsx)("li", { children: "A folder containing image or video files" }),
                        ],
                    }),
                    (0, n.jsx)(s.D, { variant: "heading-md/bold", children: "Valid File Names" }),
                    (0, n.jsx)("ul", {
                        className: o.S,
                        children: Array.from(r.Li).map((e) => (0, n.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        });
    },
    m = (e) => {
        let { transitionState: t, onClose: a } = e;
        return (0, n.jsx)(l.Modal, {
            transitionState: t,
            title: "PFX Preview Instructions",
            actions: [{ variant: "primary", text: "Okay", onClick: a }],
            onClose: a,
            children: (0, n.jsxs)("div", {
                className: o.j,
                children: [
                    (0, n.jsx)(i.E, {
                        variant: "text-md/normal",
                        children: "1. Draft your PFX in the PFX Editor (in User Settings)",
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-md/normal",
                        children: "2. In this devtools dropdown, select one of your PFX drafts",
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-md/normal",
                        children:
                            "The selected PFX should now be visible everywhere that already has a PFX, such as Shop cards, Shop PDPs, and user profiles (with PFX applied).",
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-md/normal",
                        children: 'Toggle "Enable Preview" to switch between viewing the live and preview PFX.',
                    }),
                ],
            }),
        });
    };
