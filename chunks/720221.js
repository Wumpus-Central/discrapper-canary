n.d(t, { F: () => a }), n(228524);
var r = n(627968);
n(64700);
var i = n(106236);
let a = {
    title: "Slider",
    stories: [
        {
            id: "slider",
            name: "Slider",
            component: function (e) {
                let {
                        minValue: t,
                        maxValue: n,
                        initialValue: a,
                        markerCount: s,
                        stickToMarkers: o,
                        disabled: l,
                        equidistant: c,
                        label: u,
                        description: d,
                    } = e,
                    f = s > 0 ? Array.from({ length: s }, (e, r) => Math.floor(t + (r / (s - 1)) * (n - t))) : void 0;
                return (0, r.jsx)(
                    i.A,
                    {
                        label: u,
                        description: d,
                        layout: "horizontal-responsive",
                        minValue: t,
                        maxValue: n,
                        initialValue: a,
                        markers: f,
                        stickToMarkers: o,
                        disabled: l,
                        equidistant: c,
                    },
                    s,
                );
            },
            controls: {
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "This is a slider",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is a description of the slider",
                },
                minValue: {
                    type: "number",
                    label: "Min Value",
                    defaultValue: 0,
                },
                maxValue: {
                    type: "number",
                    label: "Max Value",
                    defaultValue: 100,
                },
                initialValue: {
                    type: "number",
                    label: "Initial Value",
                    defaultValue: 50,
                },
                markerCount: {
                    type: "number",
                    label: "Marker Count",
                    minValue: 3,
                    defaultValue: 3,
                },
                stickToMarkers: {
                    type: "boolean",
                    label: "Stick to Markers",
                    defaultValue: !1,
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                equidistant: {
                    type: "boolean",
                    label: "Equidistant",
                    defaultValue: !1,
                },
            },
        },
    ],
};
