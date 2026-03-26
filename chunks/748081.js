l.d(t, { T$: () => s });
var a = l(627968);
l(64700);
var n = l(930349);
function r() {
    return (0, a.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
function i() {
    return (0, a.jsx)("div", { style: { width: "60%", height: "60%", borderRadius: "50%", background: "red" } });
}
let o = {
        label: "Variant",
        type: "select",
        defaultValue: "square",
        options: [
            { label: "Square", value: "square" },
            { label: "Bar", value: "bar" },
        ],
    },
    s = {
        title: "Editable Tile Button",
        stories: [
            {
                name: "Add Button",
                component: function (e) {
                    let { variant: t, accessibleLabel: l } = e;
                    return (0, a.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, a.jsx)(n.k, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                children: (0, a.jsx)(r, {}),
                            }),
                            (0, a.jsx)(n.k, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                children: (0, a.jsx)(i, {}),
                            }),
                        ],
                    });
                },
                id: "add-tile-button",
                controls: {
                    variant: o,
                    accessibleLabel: { label: "Aria Label", type: "text", defaultValue: "Avatar image" },
                },
            },
            {
                name: "Edit Button",
                component: function (e) {
                    let { variant: t, showOverlay: l, accessibleLabel: o } = e;
                    return (0, a.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, a.jsx)(n.N, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: o,
                                showOverlay: l,
                                children: (0, a.jsx)(r, {}),
                            }),
                            (0, a.jsx)(n.N, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: o,
                                showOverlay: l,
                                children: (0, a.jsx)(i, {}),
                            }),
                        ],
                    });
                },
                id: "edit-tile-button",
                controls: {
                    variant: o,
                    showOverlay: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Aria Label", type: "text", defaultValue: "Avatar image" },
                },
            },
            {
                name: "Edit Button - Deletable",
                component: function (e) {
                    let { variant: t, showOverlay: l, accessibleLabel: o, deleteType: s, deleteAccessibleLabel: u } = e,
                        c = { type: s, accessibleLabel: u, onClick: () => {} };
                    return (0, a.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, a.jsx)(n.N, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: o,
                                showOverlay: l,
                                deleteButtonConfig: c,
                                children: (0, a.jsx)(r, {}),
                            }),
                            (0, a.jsx)(n.N, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: o,
                                showOverlay: l,
                                deleteButtonConfig: c,
                                children: (0, a.jsx)(i, {}),
                            }),
                        ],
                    });
                },
                id: "deletable-edit-tile-button",
                controls: {
                    variant: o,
                    showOverlay: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Aria Label", type: "text", defaultValue: "Avatar image" },
                    deleteType: {
                        label: "Delete Button Type",
                        type: "select",
                        defaultValue: "remove",
                        options: [
                            { label: "Remove", value: "remove" },
                            { label: "Reset", value: "reset" },
                        ],
                    },
                    deleteAccessibleLabel: {
                        label: "Delete Aria Label",
                        type: "text",
                        defaultValue: "Remove decoration",
                    },
                },
            },
        ],
    };
