"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(964404),
    a = n(121046),
    o = n(513963),
    c = n(951829),
    d = n(731854),
    u = n(985018);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        [n, h, A] = (0, a.A)(e, t),
        p = (0, s.bG)([r.Ay], () => r.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(l.sLh, {
              id: "self-video-hide",
              label: u.intl.string(u.t.MH8ESU),
              checked: !h,
              action: () => {
                  if (p || h) return A(!h);
                  (0, l.qfG)((e) => (0, i.jsx)(o.A, { ...e, type: c.f.VIDEO, onConfirm: () => A(!h) }));
              },
          })
        : null;
}
