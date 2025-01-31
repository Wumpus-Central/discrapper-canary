n.d(t, { Z: () => u }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(740492),
    s = n(984014),
    o = n(295510),
    c = n(394059),
    d = n(388032);
function u(e, t) {
    let [n, u, h] = (0, s.Z)(e, t),
        p = (0, l.e7)([r.ZP], () => r.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(a.S89, {
              id: 'self-stream-hide',
              label: d.intl.string(d.t.aol7iY),
              checked: !u,
              action: () => {
                  if (p || u) return h(!u);
                  (0, a.h7j)((e) =>
                      (0, i.jsx)(o.Z, {
                          ...e,
                          type: c.K.STREAM,
                          onConfirm: () => h(!u)
                      })
                  );
              }
          })
        : null;
}
