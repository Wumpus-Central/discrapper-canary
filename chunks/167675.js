n.d(t, { Z: () => f }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(740492),
    o = n(27584),
    l = n(295510),
    u = n(394059),
    c = n(65154),
    d = n(388032);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        [n, f, _] = (0, o.Z)(e, t),
        p = (0, r.e7)([s.ZP], () => s.ZP.disableHideSelfStreamAndVideoConfirmationAlert),
        h = () => {
            if (p || f) return _(!f);
            (0, a.h7j)((e) =>
                (0, i.jsx)(l.Z, {
                    ...e,
                    type: u.K.VIDEO,
                    onConfirm: () => _(!f)
                })
            );
        };
    return n
        ? (0, i.jsx)(a.S89, {
              id: 'self-video-hide',
              label: d.intl.string(d.t.MH8ESU),
              checked: !f,
              action: h
          })
        : null;
}
