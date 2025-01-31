n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(103450),
    s = n(475413);
function o(e) {
    let { user: t, activity: n, onAction: o, onClose: l } = e,
        u = (0, a.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: l
        });
    if (null == u) return null;
    let { isJoining: c, handleJoinRequest: d, buttonCTA: f, tooltip: _, isEnabled: p, isEmbedded: h } = u;
    return h
        ? (0, i.jsx)(r.ua7, {
              text: _,
              children: (e) =>
                  (0, i.jsx)(s.tG, {
                      ...e,
                      icon: r.YVR,
                      text: f,
                      disabled: !p,
                      submitting: c,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == o || o({ action: 'PRESS_JOIN_BUTTON' }), d();
                      }
                  })
          })
        : (0, i.jsx)(r.ua7, {
              text: _,
              children: (e) =>
                  (0, i.jsx)(s.tG, {
                      ...e,
                      icon: r.iWm,
                      text: f,
                      disabled: !p,
                      submitting: c,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == o || o({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), d();
                      }
                  })
          });
}
