n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(192308),
    r = n(477782),
    o = n(964404),
    d = n(827343),
    u = n(495544),
    s = n(969341),
    c = n(652215),
    _ = n(731854),
    A = n(513963),
    h = n(951829),
    E = n(985018);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT,
        [n, f, g] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT,
                n = (0, l.bG)([u.default], () => u.default.getId()),
                i = (0, l.bG)([s.Ay], () => s.Ay.supports(_.O5.DISABLE_VIDEO)),
                a = (0, l.bG)([s.Ay], () => s.Ay.isLocalVideoDisabled(n, t), [n, t]);
            return [
                (null == e || e === n) && i,
                a,
                (e) => {
                    let i = e ? c.bb8.DISABLED : c.bb8.MANUAL_ENABLED;
                    d.A.setDisableLocalVideo(n, i, t);
                },
            ];
        })(e, t),
        p = (0, l.bG)([o.Ay], () => o.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(r.sL, {
              id: "self-video-hide",
              label: E.intl.string(E.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (p || f) return g(!f);
                  (0, a.openModal)((e) => (0, i.jsx)(A.A, { ...e, type: h.f.VIDEO, onConfirm: () => g(!f) }));
              },
          })
        : null;
}
