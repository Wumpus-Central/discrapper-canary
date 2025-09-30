n.d(t, { W: () => s });
var r = n(951288);
n(647438);
var i = n(35916),
    a = n(231338);
let o = [
        {
            label: "Aardvark",
            value: "aardvark",
            id: "aardvark",
        },
        {
            label: "Cat",
            value: "cat",
            id: "cat",
        },
        {
            label: "Dog",
            value: "dog",
            id: "dog",
        },
        {
            label: "Kangaroo",
            value: "kangaroo",
            id: "kangaroo",
        },
        {
            label: "Panda",
            value: "panda",
            id: "panda",
        },
        {
            label: "Snake",
            value: "snake",
            id: "snake",
            disabled: !0,
        },
    ],
    s = {
        title: "ListBox",
        stories: [
            {
                id: "listbox",
                name: "ListBox",
                component: function (e) {
                    let { selectionMode: t, required: n, shouldFocusWrap: s } = e;
                    return (0, r.jsx)(i.w, {
                        selectionMode: t,
                        required: n,
                        shouldFocusWrap: s,
                        items: o,
                        onSelectionChange: a.dG,
                    });
                },
                controls: {
                    selectionMode: {
                        label: "SelectionType",
                        type: "select",
                        options: [
                            {
                                label: "Single",
                                value: "single",
                            },
                            {
                                label: "Multiple",
                                value: "multiple",
                            },
                        ],
                        defaultValue: "single",
                    },
                    required: {
                        label: "Required",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    shouldFocusWrap: {
                        label: "ShouldFocusWrap",
                        type: "boolean",
                        defaultValue: !1,
                    },
                },
            },
        ],
    };
