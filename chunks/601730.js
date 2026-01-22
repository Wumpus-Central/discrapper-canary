n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(554146),
    a = n(397927),
    s = n(379848),
    o = n(722255),
    l = n(14594),
    c = n(652215),
    u = n(49999),
    d = n(985018);

function f() {
    let [e, t] = (0, s.Wl)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
        cooldownDurationMs: l.aH,
    });
    return e !== i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, r.jsxs)(a.$Td, {
              color: a.Hv$.BRAND,
              children: [
                  (0, r.jsx)(a.PMB, {
                      onClick: () => t(u.i.DISMISS),
                      noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                  }),
                  d.intl.string(d.t.XkeW9N),
                  (0, r.jsx)(a.Z_L, {
                      onClick: () => {
                          (0, o.u)(), t(u.i.TAKE_ACTION);
                      },
                      noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: d.intl.string(d.t.vcdNKv),
                  }),
              ],
          });
}
