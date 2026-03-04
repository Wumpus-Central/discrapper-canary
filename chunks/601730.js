"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(554146),
    l = n(397927),
    s = n(932001),
    a = n(722255),
    o = n(14594),
    E = n(652215),
    c = n(49999),
    _ = n(985018);
function d() {
    let [e, t] = (0, s.Wl)(r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: o.aH });
    return e !== r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(l.$Td, {
              color: l.Hv$.BRAND,
              children: [
                  (0, i.jsx)(l.PMB, { onClick: () => t(c.i.DISMISS), noticeType: E.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  _.intl.string(_.t.XkeW9N),
                  (0, i.jsx)(l.Z_L, {
                      onClick: () => {
                          (0, a.u)(), t(c.i.TAKE_ACTION);
                      },
                      noticeType: E.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: _.intl.string(_.t.vcdNKv),
                  }),
              ],
          });
}
