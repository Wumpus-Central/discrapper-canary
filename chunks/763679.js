n.d(t, { z: () => g });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(681715),
    o = n(159691),
    s = n(620212),
    l = n(496675),
    c = n(585483),
    u = n(713913),
    d = n(541716),
    f = n(443603),
    _ = n(981631),
    p = n(388032),
    h = n(564355);
let m = [d.Ie.NORMAL, d.Ie.SIDEBAR, d.Ie.CREATE_FORUM_POST];
function g(e) {
    let { disabled: t, channel: n, inputType: d } = e,
        g = (0, u.v)(s.U);
    return (0, i.e7)(
        [l.Z],
        () => n.isPrivate() || (l.Z.can(_.Plq.ATTACH_FILES, n) && l.Z.can(_.Plq.SEND_MESSAGES, n)),
    ) && m.includes(d)
        ? (0, r.jsx)(a.u, {
              shouldShow: !t && null != g,
              keyboardShortcut: g,
              text: p.intl.string(p.t.nzoF5p),
              children: (0, r.jsx)(f.Z, {
                  disabled: t,
                  isActive: !1,
                  className: h.button,
                  "aria-label": p.intl.string(p.t.nzoF5p),
                  onClick: () => {
                      c.S.dispatch(_.CkL.UPLOAD_FILE, { channelId: n.id });
                  },
                  children: (0, r.jsx)(o.XBm, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          })
        : null;
}
