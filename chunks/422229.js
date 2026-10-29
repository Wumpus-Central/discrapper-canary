i.d(t, { A: () => D });
var n = i(477900);
i(582128);
var l = i(17928),
    d = i(192308),
    o = i(477782),
    a = i(964404),
    s = i(827343),
    r = i(280450),
    u = i(999926),
    A = i(652215),
    b = i(731854),
    c = i(513963),
    f = i(951829),
    p = i(105292);
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.x.DEFAULT,
        [i, D, h] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.x.DEFAULT,
                i = (0, l.bG)([r.default], () => r.default.getId()),
                n = (0, l.bG)([u.Ay], () => u.Ay.supports(b.O5.DISABLE_VIDEO)),
                d = (0, l.bG)([u.Ay], () => u.Ay.isLocalVideoDisabled(i, t), [i, t]);
            return [
                (null == e || e === i) && n,
                d,
                function (e) {
                    let n = e ? A.bb8.DISABLED : A.bb8.MANUAL_ENABLED;
                    s.default.setDisableLocalVideo(i, n, t);
                },
            ];
        })(e, t),
        E = (0, l.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return i
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
