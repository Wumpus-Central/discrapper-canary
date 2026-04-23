a.d(l, { F: () => n });
var t = a(627968);
a(64700);
var o = a(106236);
let n = {
    title: "Slider",
    stories: [
        {
            id: "slider",
            name: "Slider",
            component: function (e) {
                let {
                        minValue: l,
                        maxValue: a,
                        initialValue: n,
                        markerCount: i,
                        stickToMarkers: r,
                        disabled: s,
                        equidistant: d,
                        label: u,
                        description: c,
                    } = e,
                    b = i > 0 ? Array.from({ length: i }, (e, t) => Math.floor(l + (t / (i - 1)) * (a - l))) : void 0;
                return (0, t.jsx)(
                    o.A,
                    {
                        label: u,
                        description: c,
                        layout: "horizontal-responsive",
                        minValue: l,
                        maxValue: a,
                        initialValue: n,
                        markers: b,
                        stickToMarkers: r,
                        disabled: s,
                        equidistant: d,
                    },
                    i,
                );
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "This is a slider" },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is a description of the slider",
                },
                minValue: { type: "number", label: "Min Value", defaultValue: 0 },
                maxValue: { type: "number", label: "Max Value", defaultValue: 100 },
                initialValue: { type: "number", label: "Initial Value", defaultValue: 50 },
                markerCount: { type: "number", label: "Marker Count", minValue: 3, defaultValue: 3 },
                stickToMarkers: { type: "boolean", label: "Stick to Markers", defaultValue: !1 },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                equidistant: { type: "boolean", label: "Equidistant", defaultValue: !1 },
            },
        },
    ],
};
