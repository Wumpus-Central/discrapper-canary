r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(620662),
    o = r(503438),
    l = r(733597),
    u = r(395361),
    c = r(475413),
    d = r(981631),
    f = r(388032),
    _ = r(249942);
function h(e) {
    var n, r;
    let { user: h, activity: p, onAction: m } = e,
        g = (0, l.Ih)(p, h),
        E = (0, l.Fe)(p, h);
    return (0, o.Z)(p) && ((0, s.Z)(p, d.xjy.PLAY) || (0, s.Z)(p, d.xjy.SYNC))
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.ef, {
                      icon: a.UserPlayIcon,
                      tooltipText: null !== (n = E.tooltip) && void 0 !== n ? n : f.intl.string(f.t.eU3inJ),
                      disabled: E.disabled,
                      submitting: E.loading,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == m || m({ action: 'PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON' }), E.onClick();
                      }
                  }),
                  (0, i.jsx)(a.TooltipContainer, {
                      text: g.tooltip,
                      className: _.primaryButton,
                      children: (0, i.jsx)(c.tG, {
                          icon: () => (0, i.jsx)(u.Z, {}),
                          text: null !== (r = g.label) && void 0 !== r ? r : f.intl.string(f.t.rRffNz),
                          disabled: g.disabled,
                          submitting: g.loading,
                          wrapperClassName: _.primaryButton,
                          fullWidth: !0,
                          onClick: (e) => {
                              null == e || e.stopPropagation(), null == m || m({ action: 'PRESS_PLAY_ON_SPOTIFY_BUTTON' }), g.onClick();
                          }
                      })
                  })
              ]
          })
        : null;
}
