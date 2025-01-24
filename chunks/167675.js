e.d(t, {
    Z: function () {
        return f;
    }
}),
    e(47120);
var r = e(200651);
e(192379);
var i = e(442837),
    u = e(481060),
    l = e(740492),
    a = e(27584),
    o = e(295510),
    d = e(394059),
    c = e(65154),
    s = e(388032);
function f(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        [e, f, E] = (0, a.Z)(n, t),
        _ = (0, i.e7)([l.ZP], () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return e
        ? (0, r.jsx)(u.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: s.intl.string(s.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (_ || f) return E(!f);
                  (0, u.openModal)((n) =>
                      (0, r.jsx)(o.Z, {
                          ...n,
                          type: d.K.VIDEO,
                          onConfirm: () => E(!f)
                      })
                  );
              }
          })
        : null;
}
