t.d(n, { Z: () => f }), t(47120);
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(740492),
    o = t(27584),
    u = t(295510),
    d = t(394059),
    s = t(65154),
    c = t(388032);
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [t, f, v] = (0, o.Z)(e, n),
        p = (0, l.e7)([r.ZP], () => r.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(a.S89, {
              id: 'self-video-hide',
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (p || f) return v(!f);
                  (0, a.h7j)((e) =>
                      (0, i.jsx)(u.Z, {
                          ...e,
                          type: d.K.VIDEO,
                          onConfirm: () => v(!f)
                      })
                  );
              }
          })
        : null;
}
