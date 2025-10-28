t.d(l, { W: () => o });
var a = t(951288);
t(647438);
var n = t(561779);
let o = {
    title: "Slider",
    stories: [
        {
            id: "slider",
            name: "Slider",
            component: function (e) {
                let {
                        minValue: l,
                        maxValue: t,
                        initialValue: o,
                        markerCount: i,
                        stickToMarkers: r,
                        disabled: s,
                        equidistant: u,
                    } = e,
                    d = i > 0 ? Array.from({ length: i }, (e, a) => Math.floor(l + (a / (i - 1)) * (t - l))) : void 0;
                return (0, a.jsx)(
                    n.i,
                    {
                        minValue: l,
                        maxValue: t,
                        initialValue: o,
                        markers: d,
                        stickToMarkers: r,
                        disabled: s,
                        equidistant: u,
                    },
                    i,
                );
            },
            controls: {
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
