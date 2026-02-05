"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(397927),
    a = n(20805),
    s = n(695311),
    o = n(985018);
function l(e) {
    let { display: t, entry: n, onAction: l, onClose: u } = e,
        c = (0, a.yl)(n),
        d = (0, s.A)({ applicationId: c ? n.extra.application_id : void 0, onClose: u });
    return "recent" === t && c
        ? (0, r.jsx)(i.Drp, {
              id: "view-activity",
              label: o.intl.string(o.t.GDWYR8),
              action: () => {
                  l?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), d();
              },
          })
        : null;
}
