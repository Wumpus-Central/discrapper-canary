n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var s = n(311907),
    i = n(397927),
    l = n(450510),
    r = n(298922),
    o = n(661251);
function d(e) {
    let { hotspotLocation: t } = e,
        [n, r] = (0, s.yK)([l.HP], () => [l.HP.hasHotspot(t, !0), l.HP.getHotspotOverride(t)]);
    return (0, a.jsx)(i.l6P, {
        label: t,
        errorMessage: n ? "Inactive" : void 0,
        successMessage: n ? "Active" : void 0,
        value: r,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, l.Kl)(t, e) : (0, l.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function c() {
    return (0, a.jsx)(i.IpV, {
        className: o.nd,
        children: (0, a.jsx)(i.nVY, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: r.IN,
            children: (0, a.jsx)(i.BJc, {
                gap: 20,
                children: Object.keys(l._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, a.jsx)(d, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
