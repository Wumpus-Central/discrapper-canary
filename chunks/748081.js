l.d(t, { T$: () => r });
var a = l(627968);
l(64700);
var n = l(930349);
let r = {
    title: "Editable Tile Button",
    stories: [
        {
            name: "Button Base",
            component: function (e) {
                return (0, a.jsxs)("div", {
                    style: { display: "flex", gap: "16px", alignItems: "center" },
                    children: [
                        (0, a.jsx)(n.C, {
                            editingMode: e.editingMode,
                            variant: e.variant,
                            showOverlay: e.showOverlay,
                            accessibleLabel: e.accessibleLabel,
                            onClick: () => {},
                            children: (0, a.jsx)(i, {}),
                        }),
                        (0, a.jsx)(n.C, {
                            editingMode: e.editingMode,
                            variant: e.variant,
                            showOverlay: e.showOverlay,
                            accessibleLabel: e.accessibleLabel,
                            onClick: () => {},
                            children: (0, a.jsx)(o, {}),
                        }),
                    ],
                });
            },
            id: "base-tile-button",
            controls: {
                editingMode: {
                    label: "Editing Mode",
                    type: "select",
                    defaultValue: "edit",
                    options: [
                        { label: "Add", value: "add" },
                        { label: "Edit", value: "edit" },
                    ],
                },
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "square",
                    options: [
                        { label: "Square", value: "square" },
                        { label: "Bar", value: "bar" },
                    ],
                },
                showOverlay: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                accessibleLabel: { label: "Aria Label", type: "text", defaultValue: "Avatar image" },
            },
        },
        {
            name: "Button Base - Deletable",
            component: function (e) {
                let t = { type: e.deleteType, accessibleLabel: e.deleteAccessibleLabel, onClick: () => {} };
                return (0, a.jsxs)("div", {
                    style: { display: "flex", gap: "16px", alignItems: "center" },
                    children: [
                        (0, a.jsx)(n.C, {
                            editingMode: "edit",
                            variant: e.variant,
                            showOverlay: e.showOverlay,
                            accessibleLabel: e.accessibleLabel,
                            onClick: () => {},
                            deleteButtonConfig: t,
                            children: (0, a.jsx)(i, {}),
                        }),
                        (0, a.jsx)(n.C, {
                            editingMode: "edit",
                            variant: e.variant,
                            showOverlay: e.showOverlay,
                            accessibleLabel: e.accessibleLabel,
                            onClick: () => {},
                            deleteButtonConfig: t,
                            children: (0, a.jsx)(o, {}),
                        }),
                    ],
                });
            },
            id: "deletable-tile-button",
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "square",
                    options: [
                        { label: "Square", value: "square" },
                        { label: "Bar", value: "bar" },
                    ],
                },
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
                deleteAccessibleLabel: { label: "Delete Aria Label", type: "text", defaultValue: "Remove decoration" },
            },
        },
        {
            name: "Delete Button",
            component: function (e) {
                return (0, a.jsx)(n.C.DeleteButton, {
                    type: e.type,
                    accessibleLabel: e.accessibleLabel,
                    onClick: () => {},
                });
            },
            id: "tile-delete-button",
            controls: {
                type: {
                    label: "Type",
                    type: "select",
                    defaultValue: "remove",
                    options: [
                        { label: "Remove", value: "remove" },
                        { label: "Reset", value: "reset" },
                    ],
                },
                accessibleLabel: { label: "Accessible Label", type: "text", defaultValue: "Remove decoration" },
            },
        },
    ],
};
function i() {
    return (0, a.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
function o() {
    return (0, a.jsx)("div", { style: { width: "60%", height: "60%", borderRadius: "50%", background: "red" } });
}
