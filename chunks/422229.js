t.d(i, { A: () => D });
var n = t(627968);
t(64700);
var l = t(17928),
    d = t(192308),
    o = t(477782),
    s = t(742023),
    a = t(827343),
    A = t(280450),
    r = t(186295),
    u = t(652215),
    b = t(731854),
    c = t(513963),
    f = t(951829),
    p = t(375708);
function D(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.x.DEFAULT,
        [t, D, h] = (function (e) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.x.DEFAULT,
                t = (0, l.bG)([A.default], () => A.default.getId()),
                n = (0, l.bG)([r.Ay], () => r.Ay.supports(b.O5.DISABLE_VIDEO)),
                d = (0, l.bG)([r.Ay], () => r.Ay.isLocalVideoDisabled(t, i), [t, i]);
            return [
                (null == e || e === t) && n,
                d,
                function (e) {
                    let n = e ? u.bb8.DISABLED : u.bb8.MANUAL_ENABLED;
                    a.A.setDisableLocalVideo(t, n, i);
                },
            ];
        })(e, i),
        E = (0, l.bG)([s.Ay], () => s.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, n.jsx)(o.sL, {
              id: "self-video-hide",
              label: p.intl.string(p.t.MH8ESU),
              checked: !D,
              action: function () {
                  if (E || D) return h(!D);
                  (0, d.openModal)((e) => (0, n.jsx)(c.A, { ...e, type: f.f.VIDEO, onConfirm: () => h(!D) }));
              },
          })
        : null;
}
