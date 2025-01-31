t.d(i, { Z: () => o });
var l = t(200651);
t(192379);
var a = t(481060),
    e = t(58642),
    r = t(626135),
    d = t(630388),
    c = t(981631),
    s = t(388032);
function o(n) {
    return null == n
        ? null
        : (0, l.jsx)(a.S89, {
              id: 'on-overlay',
              label: s.intl.string(s.t.rgZKg4),
              action: function () {
                  if (null == n) return;
                  let i = (0, d.x9)(n.getFlags(), c.eHb.OVERLAY_DISABLED);
                  e.h(n.id, n.branchId, i),
                      r.default.track(c.rMx.APPLICATION_SETTINGS_UPDATED, {
                          overlay_disabled: (0, d.yE)(i, c.eHb.OVERLAY_DISABLED),
                          ...n.getAnalyticsData()
                      });
              },
              checked: n.hasFlag(c.eHb.OVERLAY_DISABLED)
          });
}
