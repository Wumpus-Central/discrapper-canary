n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(481060),
    o = n(620662),
    s = n(503438),
    l = n(829820),
    c = n(395361),
    u = n(652853),
    d = n(475413),
    _ = n(228168),
    f = n(981631),
    p = n(388032),
    h = n(227832);
function m(e) {
    var t, n, m, g;
    let { user: E, activity: b, onAction: y } = e,
        { themeType: O } = (0, u.z)(),
        v = (0, l.Ih)(b, E),
        I = (0, l.Fe)(b, E);
    if (!(0, s.Z)(b) || (!(0, o.Z)(b, f.xjy.PLAY) && !(0, o.Z)(b, f.xjy.SYNC))) return null;
    let T = (e) => {
            (null == e || e.stopPropagation(), null == y || y({ action: 'PRESS_PLAY_ON_SPOTIFY_BUTTON' }), v.onClick());
        },
        S = (e) => {
            (e.stopPropagation(), null == y || y({ action: 'PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON' }), I.onClick());
        };
    return O === _.lY.MODAL_V2
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.DY3, {
                      text: I.tooltip,
                      children: (0, r.jsx)(d.tG, {
                          text: null != (t = I.label) ? t : p.intl.string(p.t.eU3inJ),
                          disabled: I.disabled,
                          submitting: I.loading,
                          size: i.Ph.TINY,
                          themeColor: 'secondary',
                          onClick: S
                      })
                  }),
                  (0, r.jsx)(a.DY3, {
                      text: v.tooltip,
                      children: (0, r.jsx)(d.tG, {
                          text: null != (n = v.label) ? n : p.intl.string(p.t.rRffNz),
                          disabled: v.disabled,
                          submitting: v.loading,
                          size: i.Ph.TINY,
                          themeColor: 'secondary',
                          onClick: T
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.DY3, {
                      text: v.tooltip,
                      className: h.primaryButton,
                      children: (0, r.jsx)(d.tG, {
                          icon: () => (0, r.jsx)(c.Z, {}),
                          text: null != (m = v.label) ? m : p.intl.string(p.t.rRffNz),
                          disabled: v.disabled,
                          submitting: v.loading,
                          wrapperClassName: h.primaryButton,
                          themeColor: 'secondary',
                          fullWidth: !0,
                          onClick: T
                      })
                  }),
                  (0, r.jsx)(d.ef, {
                      icon: a.iOO,
                      tooltipText: null != (g = I.tooltip) ? g : p.intl.string(p.t.eU3inJ),
                      disabled: I.disabled,
                      submitting: I.loading,
                      themeColor: 'secondary',
                      fullWidth: !0,
                      onClick: S
                  })
              ]
          });
}
