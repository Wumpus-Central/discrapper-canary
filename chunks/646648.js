n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    s = n(833349),
    o = n(90644),
    l = n(353411),
    c = n(879945),
    u = n(939496),
    d = n(993401),
    f = n(652215),
    p = n(996988),
    _ = n(985018),
    h = n(380297);

function m(e) {
    var t, n, m, g, E;
    let { user: b, activity: y, onAction: O } = e,
        { themeType: A } = (0, u.E)(),
        v = (0, l._B)(y, b),
        S = (0, l.J$)(y, b);
    if (!(0, o.A)(y) || (!(0, s.A)(y, f.jUm.PLAY) && !(0, s.A)(y, f.jUm.SYNC))) return null;
    let I = (e) => {
            null == e || e.stopPropagation(),
                null == O ||
                    O({
                        action: "PRESS_PLAY_ON_SPOTIFY_BUTTON",
                    }),
                v.onClick();
        },
        T = (e) => {
            e.stopPropagation(),
                null == O ||
                    O({
                        action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON",
                    }),
                S.onClick();
        };
    return A === p.d.MODAL_V2
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.m, {
                      text: S.tooltip,
                      children: (0, r.jsx)(d.FD, {
                          text: null != (g = S.label) ? g : _.intl.string(_.t.eU3inB),
                          onClick: T,
                          disabled: S.disabled,
                          loading: S.loading,
                      }),
                  }),
                  (0, r.jsx)(i.m, {
                      text: v.tooltip,
                      children: (0, r.jsx)(d.FD, {
                          text: null != (E = v.label) ? E : _.intl.string(_.t.rRffNz),
                          onClick: I,
                          disabled: v.disabled,
                          loading: v.loading,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: h.FS,
                      children: (0, r.jsx)(i.m, {
                          text: v.tooltip,
                          children: (0, r.jsx)(d.FD, {
                              icon: () => (0, r.jsx)(c.A, {}),
                              text: null != (t = v.label) ? t : _.intl.string(_.t.rRffNz),
                              onClick: I,
                              disabled: v.disabled,
                              loading: v.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, r.jsx)(d.q3, {
                      icon: a.J2m,
                      tooltipText: null != (n = S.tooltip) ? n : _.intl.string(_.t.eU3inB),
                      "aria-label": null != (m = S.label) ? m : _.intl.string(_.t.eU3inB),
                      disabled: S.disabled,
                      loading: S.loading,
                      onClick: T,
                  }),
              ],
          });
}
