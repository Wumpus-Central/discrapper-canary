i.d(n, { A: () => h });
var l = i(627968);
i(64700);
var a = i(665260),
    e = i(311907),
    r = i(314116),
    d = i(397927),
    c = i(59636),
    A = i(189081),
    s = i(194871),
    u = i(954571),
    o = i(652215),
    b = i(985018);
function h(t, n) {
    let i = (0, e.bG)([s.A], () => s.A.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        h = (0, e.bG)([A.A], () => !A.A.hasRemovedLibraryApplicationThisSession);
    if (i && !t.isHidden()) return null;
    function p() {
        let n = (0, a.PQ)(t.getFlags(), o.hM6.HIDDEN);
        c.V(t.id, t.branchId, n),
            u.default.track(o.HAw.APPLICATION_SETTINGS_UPDATED, {
                hidden_enabled: (0, a.Lt)(n, o.hM6.HIDDEN),
                ...t.getAnalyticsData(),
            });
    }
    return (0, l.jsx)(d.Drp, {
        id: "in-library",
        label: t.isHidden() ? b.intl.string(b.t["0dnEUJ"]) : b.intl.string(b.t.TuJXLx),
        action: function () {
            null != t &&
                null != n &&
                (t.isHidden() || !h
                    ? p()
                    : (0, r.A)({
                          title: b.intl.string(b.t.oB7isi),
                          subtitle: b.intl.format(b.t.HXfjKt, { name: n.name }),
                          variant: "primary",
                          confirmText: b.intl.string(b.t.OWjIiV),
                          onConfirm: () => p(),
                      }));
        },
    });
}
