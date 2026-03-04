n.d(t, { A: () => d });
var i = n(627968),
    l = n(554146),
    r = n(397927),
    a = n(932001),
    s = n(722255),
    o = n(14594),
    c = n(652215),
    _ = n(49999),
    E = n(985018);
function d() {
    let [e, t] = (0, a.Wl)(l.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: o.aH });
    return e !== l.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(r.$Td, {
              color: r.Hv$.BRAND,
              children: [
                  (0, i.jsx)(r.PMB, { onClick: () => t(_.i.DISMISS), noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  E.intl.string(E.t.XkeW9N),
                  (0, i.jsx)(r.Z_L, {
                      onClick: () => {
                          (0, s.u)(), t(_.i.TAKE_ACTION);
                      },
                      noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: E.intl.string(E.t.vcdNKv),
                  }),
              ],
          });
}
