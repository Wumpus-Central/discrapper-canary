t.d(n, { A: () => h });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(192308),
    s = t(477782),
    r = t(964404),
    o = t(121046),
    c = t(513963),
    u = t(951829),
    d = t(731854),
    A = t(985018);
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        [t, h, p] = (0, o.A)(e, n),
        m = (0, i.bG)([r.Ay], () => r.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, l.jsx)(s.sL, {
              id: "self-video-hide",
              label: A.intl.string(A.t.MH8ESU),
              checked: !h,
              action: () => {
                  if (m || h) return p(!h);
                  (0, a.openModal)((e) => (0, l.jsx)(c.A, { ...e, type: u.f.VIDEO, onConfirm: () => p(!h) }));
              },
          })
        : null;
}
