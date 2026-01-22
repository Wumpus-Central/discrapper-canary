n.d(t, { A: () => d }), n(896048), n(638769);
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    r = n(450510),
    s = n(298922),
    o = n(661251);
function c(e) {
    let { hotspotLocation: t } = e,
        [n, s] = (0, l.yK)([r.HP], () => [r.HP.hasHotspot(t, !0), r.HP.getHotspotOverride(t)]);
    return (0, a.jsx)(i.l6P, {
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
        onSelectionChange: (e) => (null != e ? (0, r.Kl)(t, e) : (0, r.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function d() {
    return (0, a.jsx)(i.IpV, {
        className: o.nd,
        children: (0, a.jsx)(i.nVY, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: s.IN,
            children: (0, a.jsx)(i.BJc, {
                gap: 20,
                children: Object.keys(r._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, a.jsx)(c, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
