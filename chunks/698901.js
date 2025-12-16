n.d(t, { Z: () => u }), n(388685), n(642613);
var a = n(54381);
n(473749);
var r = n(442837),
    l = n(199849),
    i = n(481060),
    s = n(536442),
    o = n(2968),
    c = n(663618);
function d(e) {
    let { hotspotLocation: t } = e,
        [n, i] = (0, r.Wu)([s.qc], () => [s.qc.hasHotspot(t, !0), s.qc.getHotspotOverride(t)]);
    return (0, a.jsx)(l.y6, {
        label: t,
        helperText: n ? "Active" : void 0,
        errorMessage: n ? "Inactive" : void 0,
        className: o.overrideSelect,
        value: i,
        options: [
            {
                value: void 0,
                label: "No Override",
            },
            {
                value: !0,
                label: "Force Active",
            },
            {
                value: !1,
                label: "Force Inactive",
            },
        ],
        onChange: (e) => (null != e ? (0, s.hv)(t, e) : (0, s.Po)(t)),
    });
}
function u() {
    return (0, a.jsx)(i.zJl, {
        className: c.panel,
        children: (0, a.jsx)(i.C3N, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: o.hotspotsSection,
            children: (0, a.jsx)(i.Kqy, {
                gap: 20,
                children: Object.keys(s.v6)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, a.jsx)(d, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
