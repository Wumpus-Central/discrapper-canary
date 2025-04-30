n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(620662),
    o = n(503438),
    s = n(829820),
    l = n(395361),
    c = n(652853),
    u = n(475413),
    d = n(228168),
    f = n(981631),
    _ = n(388032),
    p = n(227832);
function h(e) {
    var t, n, h, m;
    let { user: g, activity: E, onAction: b } = e,
        { themeType: y } = (0, c.z)(),
        O = (0, s.Ih)(E, g),
        v = (0, s.Fe)(E, g);
    if (!(0, o.Z)(E) || (!(0, a.Z)(E, f.xjy.PLAY) && !(0, a.Z)(E, f.xjy.SYNC))) return null;
    let I = (e) => {
            null == e || e.stopPropagation(), null == b || b({ action: 'PRESS_PLAY_ON_SPOTIFY_BUTTON' }), O.onClick();
        },
        S = (e) => {
            e.stopPropagation(), null == b || b({ action: 'PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON' }), v.onClick();
        };
    return y === d.lY.MODAL_V2
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.DY3, {
                      text: v.tooltip,
                      children: (0, r.jsx)(u.tG, {
                          text: null != (t = v.label) ? t : _.intl.string(_.t.eU3inJ),
                          disabled: v.disabled,
                          submitting: v.loading,
                          size: i.PhG.TINY,
                          themeColor: 'secondary',
                          onClick: S
                      })
                  }),
                  (0, r.jsx)(i.DY3, {
                      text: O.tooltip,
                      children: (0, r.jsx)(u.tG, {
                          text: null != (n = O.label) ? n : _.intl.string(_.t.rRffNz),
                          disabled: O.disabled,
                          submitting: O.loading,
                          size: i.PhG.TINY,
                          themeColor: 'secondary',
                          onClick: I
                      })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.DY3, {
                      text: O.tooltip,
                      className: p.primaryButton,
                      children: (0, r.jsx)(u.tG, {
                          icon: () => (0, r.jsx)(l.Z, {}),
                          text: null != (h = O.label) ? h : _.intl.string(_.t.rRffNz),
                          disabled: O.disabled,
                          submitting: O.loading,
                          wrapperClassName: p.primaryButton,
                          fullWidth: !0,
                          onClick: I
                      })
                  }),
                  (0, r.jsx)(u.ef, {
                      icon: i.iOO,
                      tooltipText: null != (m = v.tooltip) ? m : _.intl.string(_.t.eU3inJ),
                      disabled: v.disabled,
                      submitting: v.loading,
                      fullWidth: !0,
                      onClick: S
                  })
              ]
          });
}
