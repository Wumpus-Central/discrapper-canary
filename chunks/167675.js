t.d(e, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(740492),
    o = t(27584),
    d = t(295510),
    u = t(394059),
    s = t(65154),
    c = t(388032);
function f(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [t, f, m] = (0, o.Z)(n, e),
        p = (0, r.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (p || f) return m(!f);
                  (0, l.openModal)((n) =>
                      (0, i.jsx)(d.Z, {
                          ...n,
                          type: u.K.VIDEO,
                          onConfirm: () => m(!f)
                      })
                  );
              }
          })
        : null;
}
