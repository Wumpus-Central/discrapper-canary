t.d(i, { A: () => D });
var l = t(627968);
t(64700);
var d = t(17928),
    n = t(192308),
    o = t(477782),
    s = t(742023),
    a = t(827343),
    A = t(495544),
    r = t(235058),
    b = t(652215),
    u = t(731854),
    c = t(513963),
    p = t(951829),
    f = t(375708);
function D(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x.DEFAULT,
        [t, D, h] = (function (e) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x.DEFAULT,
                t = (0, d.bG)([A.default], () => A.default.getId()),
                l = (0, d.bG)([r.Ay], () => r.Ay.supports(u.O5.DISABLE_VIDEO)),
                n = (0, d.bG)([r.Ay], () => r.Ay.isLocalVideoDisabled(t, i), [t, i]);
            return [
                (null == e || e === t) && l,
                n,
                (e) => {
                    let l = e ? b.bb8.DISABLED : b.bb8.MANUAL_ENABLED;
                    a.A.setDisableLocalVideo(t, l, i);
                },
            ];
        })(e, i),
        E = (0, d.bG)([s.Ay], () => s.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, l.jsx)(o.sL, {
              id: "self-video-hide",
              label: f.intl.string(f.t.MH8ESU),
              checked: !D,
              action: () => {
                  if (E || D) return h(!D);
                  (0, n.openModal)((e) => (0, l.jsx)(c.A, { ...e, type: p.f.VIDEO, onConfirm: () => h(!D) }));
              },
          })
        : null;
}
