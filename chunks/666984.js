n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(620662),
    a = n(503438),
    s = n(829820),
    l = n(395361),
    c = n(475413),
    u = n(981631),
    d = n(388032),
    f = n(481736);
function p(e) {
    var t, n;
    let { user: p, activity: _, onAction: h } = e,
        m = (0, s.Ih)(_, p),
        g = (0, s.Fe)(_, p);
    return (0, a.Z)(_) && ((0, o.Z)(_, u.xjy.PLAY) || (0, o.Z)(_, u.xjy.SYNC))
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.ef, {
                      icon: i.iOO,
                      tooltipText: null !== (t = g.tooltip) && void 0 !== t ? t : d.NW.string(d.t.eU3inJ),
                      disabled: g.disabled,
                      submitting: g.loading,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == h || h({ action: 'PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON' }), g.onClick();
                      }
                  }),
                  (0, r.jsx)(i.DY3, {
                      text: m.tooltip,
                      className: f.primaryButton,
                      children: (0, r.jsx)(c.tG, {
                          icon: () => (0, r.jsx)(l.Z, {}),
                          text: null !== (n = m.label) && void 0 !== n ? n : d.NW.string(d.t.rRffNz),
                          disabled: m.disabled,
                          submitting: m.loading,
                          wrapperClassName: f.primaryButton,
                          fullWidth: !0,
                          onClick: (e) => {
                              null == e || e.stopPropagation(), null == h || h({ action: 'PRESS_PLAY_ON_SPOTIFY_BUTTON' }), m.onClick();
                          }
                      })
                  })
              ]
          })
        : null;
}
