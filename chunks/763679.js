n.d(t, { z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(681715),
    o = n(159691),
    s = n(620212),
    l = n(496675),
    c = n(585483),
    u = n(713913),
    d = n(443603),
    f = n(981631),
    _ = n(388032),
    p = n(744114);
function h(e) {
    let { disabled: t, channel: n } = e,
        h = (0, u.v)(s.U);
    return (0, i.e7)([l.Z], () => n.isPrivate() || (l.Z.can(f.Plq.ATTACH_FILES, n) && l.Z.can(f.Plq.SEND_MESSAGES, n)))
        ? (0, r.jsx)(a.u, {
              shouldShow: !t && null != h,
              keyboardShortcut: h,
              text: _.intl.string(_.t.nzoF5p),
              children: (0, r.jsx)(d.Z, {
                  disabled: t,
                  isActive: !1,
                  className: p.button,
                  "aria-label": _.intl.string(_.t.nzoF5p),
                  onClick: () => {
                      c.S.dispatch(f.CkL.UPLOAD_FILE);
                  },
                  children: (0, r.jsx)(o.XBm, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          })
        : null;
}
