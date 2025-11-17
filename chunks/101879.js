n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(704215),
    a = n(481060),
    o = n(243778),
    s = n(496729),
    l = n(987562),
    c = n(981631),
    u = n(921944),
    d = n(388032);
function f() {
    let [e, t] = (0, o.bf)(i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: l.pv });
    return e !== i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, r.jsxs)(a.qXd, {
              color: a.DM8.BRAND,
              children: [
                  (0, r.jsx)(a.RyX, {
                      onClick: () => t(u.L.DISMISS),
                      noticeType: c.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
                  }),
                  d.intl.string(d.t.XkeW9N),
                  (0, r.jsx)(a.NoS, {
                      onClick: () => {
                          (0, s.v3)(), t(u.L.TAKE_ACTION);
                      },
                      noticeType: c.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: d.intl.string(d.t.vcdNKv),
                  }),
              ],
          });
}
