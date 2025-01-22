n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(740492),
    s = n(27584),
    o = n(295510),
    c = n(394059),
    d = n(65154),
    u = n(388032);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        [n, h, p] = (0, s.Z)(e, t),
        m = (0, l.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(r.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: u.intl.string(u.t.MH8ESU),
              checked: !h,
              action: () => {
                  if (m || h) return p(!h);
                  (0, r.openModal)((e) =>
                      (0, i.jsx)(o.Z, {
                          ...e,
                          type: c.K.VIDEO,
                          onConfirm: () => p(!h)
                      })
                  );
              }
          })
        : null;
}
