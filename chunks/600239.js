a.d(t, { ShopAssetsPreviewInstructionModal: () => u, ShopPFXPreviewInstructionModal: () => m, g: () => c, k: () => d });
var n = a(627968);
a(64700);
var l = a(189213),
    s = a(834730),
    i = a(297264),
    r = a(25176),
    o = a(997946);
let d = "shop-assets-preview-instructions-modal",
    c = "shop-pfx-preview-instructions-modal";
function u(e) {
    let { transitionState: t, onClose: a } = e;
    return (0, n.jsx)(l.Modal, {
        transitionState: t,
        title: "Shop Assets Preview Instructions",
        actions: [{ variant: "primary", text: "thx dude", onClick: a }],
        onClose: a,
        children: (0, n.jsxs)("div", {
            className: o.jE,
            children: [
                (0, n.jsx)(s.E, {
                    variant: "text-md/bold",
                    children: "This tool allows you to upload and preview assets in the app.",
                }),
                (0, n.jsx)(s.E, {
                    variant: "text-md/normal",
                    children: 'Toggle "Enable Preview" to switch between viewing the live and preview assets.',
                }),
                (0, n.jsxs)(s.E, {
                    variant: "text-md/normal",
                    children: [
                        "Easiest option: drop the whole drop package. This is a folder containing the named subfolders for each asset grouping (",
                        (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "collection" }),
                        ",",
                        " ",
                        (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "avatar_decorations" }),
                        ",",
                        " ",
                        (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "frames" }),
                        ").",
                    ],
                }),
                (0, n.jsx)(s.E, {
                    variant: "text-md/normal",
                    children: "You can also drop just the subfolders you want to preview.",
                }),
                (0, n.jsx)(s.E, {
                    variant: "text-md/normal",
                    children: "These are only visible to you. Reloading the app will reset the uploads.",
                }),
                (0, n.jsxs)("div", {
                    className: o.CT,
                    children: [
                        (0, n.jsx)(i.D, { variant: "heading-lg/bold", children: "Avatar Decorations" }),
                        (0, n.jsxs)(s.E, {
                            variant: "text-md/normal",
                            children: [
                                "Drop an",
                                " ",
                                (0, n.jsx)(s.E, {
                                    tag: "span",
                                    variant: "text-md/bold",
                                    children: "avatar_decorations",
                                }),
                                " ",
                                "folder containing the PNG files for each Avatar Decoration.",
                            ],
                        }),
                        (0, n.jsxs)(s.E, {
                            variant: "text-md/normal",
                            children: [
                                "Then, select from in the",
                                " ",
                                (0, n.jsx)(s.E, {
                                    tag: "span",
                                    variant: "text-md/bold",
                                    children: "Avatar Decoration",
                                }),
                                " ",
                                "dropdown to preview in the Shop.",
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: o.CT,
                    children: [
                        (0, n.jsx)(i.D, { variant: "heading-lg/bold", children: "Profile Frames" }),
                        (0, n.jsxs)(s.E, {
                            variant: "text-md/normal",
                            children: [
                                "Drop a",
                                " ",
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "frames" }),
                                " ",
                                "folder which contains subfolders for each Profile Frame.",
                            ],
                        }),
                        (0, n.jsxs)(s.E, {
                            variant: "text-md/normal",
                            children: [
                                "Each Profile Frame subfolder should contain these folders:",
                                " ",
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "foreground" }),
                                " ",
                                "and",
                                " ",
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "background" }),
                                ".",
                            ],
                        }),
                        (0, n.jsx)(s.E, {
                            variant: "text-md/normal",
                            children: "Each of those folders should contain the actual layer image files.",
                        }),
                        (0, n.jsxs)(s.E, {
                            variant: "text-md/normal",
                            children: [
                                "Then, select from the",
                                " ",
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "Profile Frame" }),
                                " ",
                                "dropdown to preview everywhere that already has a Profile Frame.",
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: o.CT,
                    children: [
                        (0, n.jsx)(i.D, { variant: "heading-lg/bold", children: "Profile Effects" }),
                        (0, n.jsx)(s.E, {
                            variant: "text-md/normal",
                            children: "First draft your Profile Effect in the Profile Effect Editor tool, found here:",
                        }),
                        (0, n.jsx)(s.E, {
                            className: o.Ou,
                            variant: "text-md/bold",
                            children: "DevTools > Collectibles Preview > Profile Effects",
                        }),
                        (0, n.jsxs)(s.E, {
                            variant: "text-md/normal",
                            children: [
                                "Then, in this devtools",
                                " ",
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "Profile Effect" }),
                                " ",
                                "dropdown, select from your drafts to preview everywhere that already has a Profile Effect.",
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: o.CT,
                    children: [
                        (0, n.jsx)(i.D, { variant: "heading-lg/bold", children: "Nameplates" }),
                        (0, n.jsx)(s.E, {
                            variant: "text-md/normal",
                            children: "Nameplate previews live elsewhere! Find the tool at:",
                        }),
                        (0, n.jsx)(s.E, {
                            className: o.Ou,
                            variant: "text-md/bold",
                            children: "DevTools > Collectibles Preview > Nameplates",
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: o.CT,
                    children: [
                        (0, n.jsx)(i.D, { variant: "heading-lg/bold", children: "Collection Assets" }),
                        (0, n.jsxs)(s.E, {
                            variant: "text-md/normal",
                            children: [
                                "Put these in a",
                                " ",
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-md/bold", children: "collection" }),
                                " ",
                                "folder, or drop the files directly. The tool will recognize them by filename.",
                            ],
                        }),
                        (0, n.jsx)(i.D, {
                            className: o.J2,
                            variant: "heading-md/bold",
                            children: "Valid Upload Types",
                        }),
                        (0, n.jsxs)("ul", {
                            className: o.SS,
                            children: [
                                (0, n.jsx)("li", { children: "One or more image or video files (jpg, png, webm)" }),
                                (0, n.jsx)("li", { children: "A folder containing image or video files" }),
                            ],
                        }),
                        (0, n.jsx)(i.D, { className: o.J2, variant: "heading-md/bold", children: "Valid File Names" }),
                        (0, n.jsx)("ul", {
                            className: o.SS,
                            children: Array.from(r.Li).map((e) => (0, n.jsx)("li", { children: e }, e)),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function m(e) {
    let { transitionState: t, onClose: a } = e;
    return (0, n.jsx)(l.Modal, {
        transitionState: t,
        title: "PFX Preview Instructions",
        actions: [{ variant: "primary", text: "k whatever", onClick: a }],
        onClose: a,
        children: (0, n.jsxs)("div", {
            className: o.jE,
            children: [
                (0, n.jsx)(s.E, {
                    variant: "text-md/normal",
                    children: "1. Draft your PFX in the PFX Editor (in User Settings)",
                }),
                (0, n.jsx)(s.E, {
                    variant: "text-md/normal",
                    children: "2. In this devtools dropdown, select one of your PFX drafts",
                }),
                (0, n.jsx)(s.E, {
                    variant: "text-md/normal",
                    children:
                        "The selected PFX should now be visible everywhere that already has a PFX, such as Shop cards, Shop PDPs, and user profiles (with PFX applied).",
                }),
                (0, n.jsx)(s.E, {
                    variant: "text-md/normal",
                    children: 'Toggle "Enable Preview" to switch between viewing the live and preview PFX.',
                }),
            ],
        }),
    });
}
