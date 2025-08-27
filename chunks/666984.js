n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(28664),
    a = n(755721),
    o = n(481060),
    s = n(620662),
    l = n(503438),
    c = n(829820),
    u = n(395361),
    d = n(652853),
    f = n(475413),
    _ = n(981631),
    p = n(671955),
    h = n(388032),
    m = n(704543);
function g(e) {
    var t, n, g, E;
    let { user: b, activity: y, onAction: O } = e,
        { themeType: v } = (0, d.z)(),
        I = (0, c.Ih)(y, b),
        T = (0, c.Fe)(y, b);
    if (!(0, l.Z)(y) || (!(0, s.Z)(y, _.xjy.PLAY) && !(0, s.Z)(y, _.xjy.SYNC))) return null;
    let S = (e) => {
            null == e || e.stopPropagation(), null == O || O({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), I.onClick();
        },
        A = (e) => {
            e.stopPropagation(), null == O || O({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), T.onClick();
        };
    return v === p.l.MODAL_V2
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.u, {
                      asContainer: !0,
                      text: T.tooltip,
                      children: (0, r.jsx)(f.tG, {
                          text: null != (t = T.label) ? t : h.intl.string(h.t.eU3inJ),
                          disabled: T.disabled,
                          submitting: T.loading,
                          size: a.Ph.TINY,
                          themeColor: "secondary",
                          onClick: A,
                      }),
                  }),
                  (0, r.jsx)(i.u, {
                      asContainer: !0,
                      text: I.tooltip,
                      children: (0, r.jsx)(f.tG, {
                          text: null != (n = I.label) ? n : h.intl.string(h.t.rRffNz),
                          disabled: I.disabled,
                          submitting: I.loading,
                          size: a.Ph.TINY,
                          themeColor: "secondary",
                          onClick: S,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.u, {
                      asContainer: !0,
                      text: I.tooltip,
                      children: (0, r.jsx)(f.tG, {
                          icon: () => (0, r.jsx)(u.Z, {}),
                          text: null != (g = I.label) ? g : h.intl.string(h.t.rRffNz),
                          disabled: I.disabled,
                          submitting: I.loading,
                          wrapperClassName: m.primaryButton,
                          themeColor: "secondary",
                          fullWidth: !0,
                          onClick: S,
                      }),
                  }),
                  (0, r.jsx)(f.ef, {
                      icon: o.iOO,
                      tooltipText: null != (E = T.tooltip) ? E : h.intl.string(h.t.eU3inJ),
                      disabled: T.disabled,
                      submitting: T.loading,
                      themeColor: "secondary",
                      fullWidth: !0,
                      onClick: A,
                  }),
              ],
          });
}
