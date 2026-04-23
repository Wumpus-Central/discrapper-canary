a.d(t, { A: () => h });
var n = a(627968);
a(64700);
var l = a(311907),
    i = a(691885),
    s = a(573613),
    r = a(270003),
    o = a(331322),
    d = a(450510),
    c = a(320681),
    u = a(505206);
function m(e) {
    let { hotspotLocation: t } = e,
        [a, s] = (0, l.yK)([d.HP], () => [d.HP.hasHotspot(t, !0), d.HP.getHotspotOverride(t)]);
    return (0, n.jsx)(i.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: s,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, d.Kl)(t, e) : (0, d.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function h() {
    return (0, n.jsx)(s.Ip, {
        className: u.nd,
        children: (0, n.jsx)(r.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: c.IN,
            children: (0, n.jsx)(o.B, {
                gap: 20,
                children: Object.keys(d._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, n.jsx)(m, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
