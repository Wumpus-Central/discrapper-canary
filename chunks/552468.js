e.d(n, { A: () => o });
var i = e(627968),
    l = e(477782),
    r = e(20805),
    a = e(695311),
    s = e(985018);
function o(t) {
    let { display: n, entry: e, onAction: o, onClose: c } = t,
        u = (0, r.yl)(e),
        d = (0, a.A)({ applicationId: u ? e.extra.application_id : void 0, onClose: c });
    return "recent" === n && u
        ? (0, i.jsx)(l.Dr, {
              id: "view-activity",
              label: s.intl.string(s.t.GDWYR8),
              action: () => {
                  o?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), d();
              },
          })
        : null;
}
