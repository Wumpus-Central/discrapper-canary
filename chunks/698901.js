n.d(t, { Z: () => c }), n(388685), n(642613);
var a = n(951288),
    r = n(442837),
    l = n(481060),
    i = n(536442),
    o = n(983380);
function s(e) {
    let { hotspotLocation: t } = e,
        [n, s] = (0, r.Wu)([i.qc], () => [i.qc.hasHotspot(t, !0), i.qc.getHotspotOverride(t)]);
    return (0, a.jsx)(l.q4e, {
        label: t,
        successMessage: n ? "Active" : void 0,
        errorMessage: n ? "Inactive" : void 0,
        className: o.overrideSelect,
        value: s,
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
    return (0, a.jsx)(l.C3N, {
        label: "Hotspots",
        description:
            "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
        className: o.hotspotsSection,
        children: (0, a.jsx)(l.Kqy, {
            gap: 20,
            children: Object.keys(i.v6)
                .sort((e, t) => e.localeCompare(t))
                .map((e) => (0, a.jsx)(s, { hotspotLocation: e }, e)),
        }),
    });
}
