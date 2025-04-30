n.d(t, { Z: () => E }), n(388685);
var r = n(200651),
    i = n(704215),
    l = n(481060),
    o = n(243778),
    a = n(496729),
    s = n(987562),
    c = n(981631),
    u = n(921944),
    d = n(388032);
function E() {
    let [e, t] = (0, o.bf)(i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: s.pv });
    return e !== i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, r.jsxs)(l.qXd, {
              color: l.DM8.BRAND,
              children: [
                  (0, r.jsx)(l.RyX, {
                      onClick: () => t(u.L.DISMISS),
                      noticeType: c.kVF.IGNORE_USER_FEEDBACK_NAGBAR
                  }),
                  d.intl.string(d.t.XkeW9P),
                  (0, r.jsx)(l.NoS, {
                      onClick: () => {
                          (0, a.v3)(), t(u.L.TAKE_ACTION);
                      },
                      noticeType: c.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: d.intl.string(d.t.vcdNKi)
                  })
              ]
          });
}
