(n.d(t, { Z: () => _ }), n(388685));
var r = n(255367),
    i = n(704215),
    l = n(481060),
    a = n(243778),
    o = n(496729),
    c = n(987562),
    s = n(981631),
    u = n(921944),
    d = n(388032);
function _() {
    let [e, t] = (0, a.bf)(i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: c.pv });
    return e !== i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, r.jsxs)(l.qXd, {
              color: l.DM8.BRAND,
              children: [
                  (0, r.jsx)(l.RyX, {
                      onClick: () => t(u.L.DISMISS),
                      noticeType: s.kVF.IGNORE_USER_FEEDBACK_NAGBAR
                  }),
                  d.intl.string(d.t.XkeW9P),
                  (0, r.jsx)(l.NoS, {
                      onClick: () => {
                          ((0, o.v3)(), t(u.L.TAKE_ACTION));
                      },
                      noticeType: s.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: d.intl.string(d.t.vcdNKi)
                  })
              ]
          });
}
