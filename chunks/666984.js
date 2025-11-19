n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(28664),
    a = n(481060),
    o = n(620662),
    s = n(503438),
    l = n(829820),
    c = n(395361),
    u = n(652853),
    d = n(732380),
    f = n(981631),
    _ = n(671955),
    p = n(388032),
    h = n(663907);
function m(e) {
    var t, n, m, g, E;
    let { user: b, activity: y, onAction: O } = e,
        { themeType: v } = (0, u.z)(),
        I = (0, l.Ih)(y, b),
        T = (0, l.Fe)(y, b);
    if (!(0, s.Z)(y) || (!(0, o.Z)(y, f.xjy.PLAY) && !(0, o.Z)(y, f.xjy.SYNC))) return null;
    let S = (e) => {
            null == e || e.stopPropagation(), null == O || O({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), I.onClick();
        },
        A = (e) => {
            e.stopPropagation(), null == O || O({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), T.onClick();
        };
    return v === _.l.MODAL_V2
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.u, {
                      text: T.tooltip,
                      children: (0, r.jsx)(d.O1, {
                          text: null != (t = T.label) ? t : p.intl.string(p.t.eU3inB),
                          onClick: A,
                          disabled: T.disabled,
                          loading: T.loading,
                      }),
                  }),
                  (0, r.jsx)(i.u, {
                      text: I.tooltip,
                      children: (0, r.jsx)(d.O1, {
                          text: null != (n = I.label) ? n : p.intl.string(p.t.rRffNz),
                          onClick: S,
                          disabled: I.disabled,
                          loading: I.loading,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: h.primaryButton,
                      children: (0, r.jsx)(i.u, {
                          text: I.tooltip,
                          children: (0, r.jsx)(d.O1, {
                              icon: () => (0, r.jsx)(c.Z, {}),
                              text: null != (m = I.label) ? m : p.intl.string(p.t.rRffNz),
                              onClick: S,
                              disabled: I.disabled,
                              loading: I.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, r.jsx)(d.pt, {
                      icon: a.iOO,
                      tooltipText: null != (g = T.tooltip) ? g : p.intl.string(p.t.eU3inB),
                      "aria-label": null != (E = T.label) ? E : p.intl.string(p.t.eU3inB),
                      disabled: T.disabled,
                      loading: T.loading,
                      onClick: A,
                  }),
              ],
          });
}
