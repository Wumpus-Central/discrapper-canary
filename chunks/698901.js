n.d(t, { Z: () => d }), n(388685), n(642613);
var a = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    l = n(536442),
    s = n(2968),
    o = n(663618);
function c(e) {
    let { hotspotLocation: t } = e,
        [n, s] = (0, r.Wu)([l.qc], () => [l.qc.hasHotspot(t, !0), l.qc.getHotspotOverride(t)]);
    return (0, a.jsx)(i.PhF, {
        label: t,
        errorMessage: n ? "Inactive" : void 0,
        successMessage: n ? "Active" : void 0,
        value: s,
        options: [
            {
                id: "none",
                value: void 0,
                label: "No Override",
            },
            {
                id: "active",
                value: !0,
                label: "Force Active",
            },
            {
                id: "inactive",
                value: !1,
                label: "Force Inactive",
            },
        ],
        onSelectionChange: (e) => (null != e ? (0, l.hv)(t, e) : (0, l.Po)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function d() {
    return (0, a.jsx)(i.zJl, {
        className: o.panel,
        children: (0, a.jsx)(i.C3N, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: s.hotspotsSection,
            children: (0, a.jsx)(i.Kqy, {
                gap: 20,
                children: Object.keys(l.v6)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, a.jsx)(c, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
