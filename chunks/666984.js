n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(620662),
    s = n(503438),
    o = n(733597),
    l = n(395361),
    u = n(475413),
    c = n(981631),
    d = n(388032),
    f = n(249942);
function _(e) {
    var t, n;
    let { user: _, activity: p, onAction: h } = e,
        m = (0, o.Ih)(p, _),
        g = (0, o.Fe)(p, _);
    return (0, s.Z)(p) && ((0, a.Z)(p, c.xjy.PLAY) || (0, a.Z)(p, c.xjy.SYNC))
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.ef, {
                      icon: r.iOO,
                      tooltipText: null !== (t = g.tooltip) && void 0 !== t ? t : d.intl.string(d.t.eU3inJ),
                      disabled: g.disabled,
                      submitting: g.loading,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == h || h({ action: 'PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON' }), g.onClick();
                      }
                  }),
                  (0, i.jsx)(r.DY3, {
                      text: m.tooltip,
                      className: f.primaryButton,
                      children: (0, i.jsx)(u.tG, {
                          icon: () => (0, i.jsx)(l.Z, {}),
                          text: null !== (n = m.label) && void 0 !== n ? n : d.intl.string(d.t.rRffNz),
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
