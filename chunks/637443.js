n.d(t, {
    ShopAssetsPreviewInstructionModal: () => d,
    ShopPFXPreviewInstructionModal: () => u,
    c: () => c,
    g: () => o,
});
var a = n(951288);
n(647438);
var i = n(793030),
    l = n(481060),
    r = n(281598),
    s = n(117910);
let o = "shop-assets-preview-instructions-modal",
    c = "shop-pfx-preview-instructions-modal",
    d = (e) => {
        let { transitionState: t, onClose: n } = e;
        return (0, a.jsx)(i.Modal, {
            transitionState: t,
            title: "Upload Instructions",
            actions: [
                {
                    variant: "primary",
                    text: "Okay",
                    onClick: n,
                },
            ],
            onClose: n,
            children: (0, a.jsxs)("div", {
                className: s.modalContent,
                children: [
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/bold",
                        children: "Upload Shop assets for preview in the app!",
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: 'Toggle "Enable Preview" to switch between viewing the live and preview assets.',
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: "These are only visible to you. Reloading the app will reset the state.",
                    }),
                    (0, a.jsx)(l.Heading, {
                        variant: "heading-md/bold",
                        children: "Valid Upload Types",
                    }),
                    (0, a.jsxs)("ul", {
                        className: s.instructionsList,
                        children: [
                            (0, a.jsx)("li", { children: "One or more image or video files (jpg, png, webm)" }),
                            (0, a.jsx)("li", { children: "A folder containing image or video files" }),
                        ],
                    }),
                    (0, a.jsx)(l.Heading, {
                        variant: "heading-md/bold",
                        children: "Valid File Names",
                    }),
                    (0, a.jsx)("ul", {
                        className: s.instructionsList,
                        children: Object.keys(r.Kj).map((e) => (0, a.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        });
    },
    u = (e) => {
        let { transitionState: t, onClose: n } = e;
        return (0, a.jsx)(i.Modal, {
            transitionState: t,
            title: "PFX Preview Instructions",
            actions: [
                {
                    variant: "primary",
                    text: "Okay",
                    onClick: n,
                },
            ],
            onClose: n,
            children: (0, a.jsxs)("div", {
                className: s.modalContent,
                children: [
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: "1. Draft your PFX in the PFX Editor (in User Settings)",
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: "2. In this devtools dropdown, select one of your PFX drafts",
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children:
                            "The selected PFX should now be visible everywhere that already has a PFX, such as Shop cards, Shop PDPs, and user profiles (with PFX applied).",
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: 'Toggle "Enable Preview" to switch between viewing the live and preview PFX.',
                    }),
                ],
            }),
        });
    };
