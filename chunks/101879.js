(n.d(t, { Z: () => _ }), n(388685));
var i = n(255367),
    r = n(704215),
    l = n(481060),
    o = n(243778),
    s = n(496729),
    a = n(987562),
    c = n(981631),
    d = n(921944),
    u = n(388032);
function _() {
    let [e, t] = (0, o.bf)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: a.pv });
    return e !== r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(l.qXd, {
              color: l.DM8.BRAND,
              children: [
                  (0, i.jsx)(l.RyX, {
                      onClick: () => t(d.L.DISMISS),
                      noticeType: c.kVF.IGNORE_USER_FEEDBACK_NAGBAR
                  }),
                  u.intl.string(u.t.XkeW9P),
                  (0, i.jsx)(l.NoS, {
                      onClick: () => {
                          ((0, s.v3)(), t(d.L.TAKE_ACTION));
                      },
                      noticeType: c.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: u.intl.string(u.t.vcdNKi)
                  })
              ]
          });
}
