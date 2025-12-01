n.d(t, { Z: () => h });
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
    p = n(671955),
    _ = n(388032),
    m = n(704543);
function h(e) {
    var t, n, h, g, E;
    let { user: b, activity: y, onAction: O } = e,
        { themeType: v } = (0, u.z)(),
        S = (0, l.Ih)(y, b),
        I = (0, l.Fe)(y, b);
    if (!(0, s.Z)(y) || (!(0, o.Z)(y, f.xjy.PLAY) && !(0, o.Z)(y, f.xjy.SYNC))) return null;
    let T = (e) => {
            null == e || e.stopPropagation(), null == O || O({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), S.onClick();
        },
        A = (e) => {
            e.stopPropagation(), null == O || O({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), I.onClick();
        };
    return v === p.l.MODAL_V2
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.u, {
                      text: I.tooltip,
                      children: (0, r.jsx)(d.O1, {
                          text: null != (t = I.label) ? t : _.intl.string(_.t.eU3inB),
                          onClick: A,
                          disabled: I.disabled,
                          loading: I.loading,
                      }),
                  }),
                  (0, r.jsx)(i.u, {
                      text: S.tooltip,
                      children: (0, r.jsx)(d.O1, {
                          text: null != (n = S.label) ? n : _.intl.string(_.t.rRffNz),
                          onClick: T,
                          disabled: S.disabled,
                          loading: S.loading,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: m.primaryButton,
                      children: (0, r.jsx)(i.u, {
                          text: S.tooltip,
                          children: (0, r.jsx)(d.O1, {
                              icon: () => (0, r.jsx)(c.Z, {}),
                              text: null != (h = S.label) ? h : _.intl.string(_.t.rRffNz),
                              onClick: T,
                              disabled: S.disabled,
                              loading: S.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, r.jsx)(d.pt, {
                      icon: a.iOO,
                      tooltipText: null != (g = I.tooltip) ? g : _.intl.string(_.t.eU3inB),
                      "aria-label": null != (E = I.label) ? E : _.intl.string(_.t.eU3inB),
                      disabled: I.disabled,
                      loading: I.loading,
                      onClick: A,
                  }),
              ],
          });
}
