l.d(t, { T: () => r });
var a = l(627968);
l(64700);
var n = l(930349);
let r = {
    title: "Editable Tile Button",
    stories: [
        {
            name: "Button Base",
            component: function (e) {
                return (0, a.jsx)(n.C, {
                    iconAlignment: e.iconAlignment,
                    editingMode: e.editingMode,
                    variant: e.variant,
                    "aria-label": e.ariaLabel,
                    onClick: () => {},
                    children: (0, a.jsx)(i, {}),
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
                iconAlignment: {
                    label: "Icon Alignment",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        { label: "Center", value: "center" },
                        { label: "Right", value: "right" },
                    ],
                },
                ariaLabel: { label: "Aria Label", type: "text", defaultValue: "Edit tile" },
            },
        },
    ],
};
function i() {
    return (0, a.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
