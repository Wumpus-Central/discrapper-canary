n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(964404),
    r = n(121046),
    o = n(513963),
    c = n(951829),
    d = n(731854),
    u = n(985018);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        [n, h, A] = (0, r.A)(e, t),
        _ = (0, l.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(s.sLh, {
              id: "self-video-hide",
              label: u.intl.string(u.t.MH8ESU),
              checked: !h,
              action: () => {
                  if (_ || h) return A(!h);
                  (0, s.qfG)((e) => (0, i.jsx)(o.A, { ...e, type: c.f.VIDEO, onConfirm: () => A(!h) }));
              },
          })
        : null;
}
