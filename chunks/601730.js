"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(554146);
if (21552 == n.j) var l = n(417098);
var s = n(932001),
    a = n(722255),
    o = n(14594),
    c = n(652215),
    u = n(49999),
    d = n(985018);
function _() {
    let [e, t] = (0, s.Wl)(r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: o.aH });
    return e !== r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(l.$T, {
              color: l.Hv.BRAND,
              children: [
                  (0, i.jsx)(l.PM, { onClick: () => t(u.i.DISMISS), noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  d.intl.string(d.t.XkeW9N),
                  (0, i.jsx)(l.Z_, {
                      onClick: () => {
                          (0, a.u)(), t(u.i.TAKE_ACTION);
                      },
                      noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: d.intl.string(d.t.vcdNKv),
                  }),
              ],
          });
}
