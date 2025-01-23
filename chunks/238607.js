r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(103450),
    s = r(475413);
function l(e) {
    let { user: n, activity: r, onAction: l, onClose: u } = e,
        c = (0, o.e)({
            activity: null != r ? r : void 0,
            embeddedActivity: void 0,
            user: n,
            onClose: u
        });
    if (null == c) return null;
    let { isJoining: d, handleJoinRequest: f, buttonCTA: p, tooltip: h, isEnabled: _, isEmbedded: m } = c;
    return m
        ? (0, i.jsx)(a.Tooltip, {
              text: h,
              children: (e) =>
                  (0, i.jsx)(s.tG, {
                      ...e,
                      icon: a.DoorEnterIcon,
                      text: p,
                      disabled: !_,
                      submitting: d,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == l || l({ action: 'PRESS_JOIN_BUTTON' }), f();
                      }
                  })
          })
        : (0, i.jsx)(a.Tooltip, {
              text: h,
              children: (e) =>
                  (0, i.jsx)(s.tG, {
                      ...e,
                      icon: a.GameControllerIcon,
                      text: p,
                      disabled: !_,
                      submitting: d,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == l || l({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), f();
                      }
                  })
          });
}
