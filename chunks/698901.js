n.d(t, { Z: () => c }), n(388685), n(642613);
var a = n(54381),
    l = n(442837),
    r = n(481060),
    i = n(536442),
    s = n(983380);
function o(e) {
    let { hotspotLocation: t } = e,
        [n, o] = (0, l.Wu)([i.qc], () => [i.qc.hasHotspot(t, !0), i.qc.getHotspotOverride(t)]);
    return (0, a.jsx)(r.q4e, {
        label: t,
        helperText: n ? "Active" : void 0,
        errorMessage: n ? "Inactive" : void 0,
        className: s.overrideSelect,
        value: o,
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
        onChange: (e) => (null != e ? (0, i.hv)(t, e) : (0, i.Po)(t)),
    });
}
function c() {
    return (0, a.jsx)(r.C3N, {
        label: "Hotspots",
        description:
            "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
        className: s.hotspotsSection,
        children: (0, a.jsx)(r.Kqy, {
            gap: 20,
            children: Object.keys(i.v6)
                .sort((e, t) => e.localeCompare(t))
                .map((e) => (0, a.jsx)(o, { hotspotLocation: e }, e)),
        }),
    });
}
