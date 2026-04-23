i.d(t, { A: () => h });
var l = i(627968);
i(64700);
var a = i(665260),
    e = i(311907),
    r = i(314116),
    d = i(477782),
    c = i(59636),
    A = i(189081),
    s = i(194871),
    u = i(954571),
    o = i(652215),
    b = i(985018);
function h(n, t) {
    let i = (0, e.bG)([s.A], () => s.A.isInstalled(n.id, n.branchId), [n.branchId, n.id]),
        h = (0, e.bG)([A.A], () => !A.A.hasRemovedLibraryApplicationThisSession);
    if (i && !n.isHidden()) return null;
    function I() {
        let t = (0, a.PQ)(n.getFlags(), o.hM6.HIDDEN);
        c.V(n.id, n.branchId, t),
            u.default.track(o.HAw.APPLICATION_SETTINGS_UPDATED, {
                hidden_enabled: (0, a.Lt)(t, o.hM6.HIDDEN),
                ...n.getAnalyticsData(),
            });
    }
    return (0, l.jsx)(d.Dr, {
        id: "in-library",
        label: n.isHidden() ? b.intl.string(b.t["0dnEUJ"]) : b.intl.string(b.t.TuJXLx),
        action: function () {
            null != n &&
                null != t &&
                (n.isHidden() || !h
                    ? I()
                    : (0, r.A)({
                          title: b.intl.string(b.t.oB7isi),
                          subtitle: b.intl.format(b.t.HXfjKt, { name: t.name }),
                          variant: "primary",
                          confirmText: b.intl.string(b.t.OWjIiV),
                          onConfirm: () => I(),
                      }));
        },
    });
}
