t.d(i, { Z: () => b });
var l = t(200651);
t(192379);
var a = t(442837),
    e = t(481060),
    r = t(58642),
    d = t(283595),
    c = t(417363),
    s = t(626135),
    o = t(630388),
    u = t(981631),
    h = t(388032);
function b(n, i) {
    let t = (0, a.e7)([c.Z], () => c.Z.isInstalled(n.id, n.branchId), [n.branchId, n.id]),
        b = (0, a.e7)([d.Z], () => !d.Z.hasRemovedLibraryApplicationThisSession);
    if (t && !n.isHidden()) return null;
    function I() {
        let i = (0, o.x9)(n.getFlags(), u.eHb.HIDDEN);
        r.h(n.id, n.branchId, i),
            s.default.track(u.rMx.APPLICATION_SETTINGS_UPDATED, {
                hidden_enabled: (0, o.yE)(i, u.eHb.HIDDEN),
                ...n.getAnalyticsData()
            });
    }
    return (0, l.jsx)(e.sNh, {
        id: 'in-library',
        label: n.isHidden() ? h.intl.string(h.t['0dnEUF']) : h.intl.string(h.t.TuJXLy),
        action: function () {
            null != n &&
                null != i &&
                (n.isHidden() || !b
                    ? I()
                    : (0, e.h7j)((n) =>
                          (0, l.jsx)(e.ConfirmModal, {
                              header: h.intl.string(h.t.oB7isr),
                              confirmText: h.intl.string(h.t.OWjIiY),
                              cancelText: h.intl.string(h.t['ETE/oK']),
                              onConfirm: () => I(),
                              confirmButtonColor: e.zxk.Colors.BRAND,
                              ...n,
                              children: (0, l.jsx)(e.Text, {
                                  variant: 'text-md/normal',
                                  children: h.intl.format(h.t.HXfjKi, { name: i.name })
                              })
                          })
                      ));
        }
    });
}
