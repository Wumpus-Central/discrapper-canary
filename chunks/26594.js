"use strict";
n.d(t, { G: () => a });
var i = n(318254),
    r = n(375708),
    s = n(427483);
function a(e) {
    let { isGift: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e?.metadata?.orbs_reward;
    return null != n && n > 0
        ? {
              Icon: i.C,
              text: r.intl.format(t ? r.t["ZV+aS9"] : r.t["0StwHe"], { orbCount: n }),
              graphic: { type: "video", url: s.A },
          }
        : null;
}
