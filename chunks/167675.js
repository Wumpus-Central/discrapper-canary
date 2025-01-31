t.d(n, { Z: () => _ }), t(47120);
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(740492),
    d = t(27584),
    o = t(295510),
    u = t(394059),
    s = t(65154),
    c = t(388032);
function _(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [t, _, E] = (0, d.Z)(e, n),
        f = (0, l.e7)([r.ZP], () => r.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(a.S89, {
              id: 'self-video-hide',
              label: c.intl.string(c.t.MH8ESU),
              checked: !_,
              action: () => {
                  if (f || _) return E(!_);
                  (0, a.h7j)((e) =>
                      (0, i.jsx)(o.Z, {
                          ...e,
                          type: u.K.VIDEO,
                          onConfirm: () => E(!_)
                      })
                  );
              }
          })
        : null;
}
