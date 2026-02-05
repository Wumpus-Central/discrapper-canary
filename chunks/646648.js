"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    s = n(833349),
    o = n(90644),
    l = n(353411),
    u = n(879945),
    c = n(939496),
    d = n(993401),
    _ = n(652215),
    f = n(996988),
    p = n(985018),
    h = n(380297);
function m(e) {
    let { user: t, activity: n, onAction: m } = e,
        { themeType: g } = (0, c.E)(),
        E = (0, l._B)(n, t),
        A = (0, l.J$)(n, t);
    if (!(0, o.A)(n) || (!(0, s.A)(n, _.jUm.PLAY) && !(0, s.A)(n, _.jUm.SYNC))) return null;
    let I = (e) => {
            e?.stopPropagation(), m?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), E.onClick();
        },
        T = (e) => {
            e.stopPropagation(), m?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), A.onClick();
        };
    return g === f.d.MODAL_V2
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.m, {
                      text: A.tooltip,
                      children: (0, r.jsx)(d.FD, {
                          text: A.label ?? p.intl.string(p.t.eU3inB),
                          onClick: T,
                          disabled: A.disabled,
                          loading: A.loading,
                      }),
                  }),
                  (0, r.jsx)(i.m, {
                      text: E.tooltip,
                      children: (0, r.jsx)(d.FD, {
                          text: E.label ?? p.intl.string(p.t.rRffNz),
                          onClick: I,
                          disabled: E.disabled,
                          loading: E.loading,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: h.FS,
                      children: (0, r.jsx)(i.m, {
                          text: E.tooltip,
                          children: (0, r.jsx)(d.FD, {
                              icon: () => (0, r.jsx)(u.A, {}),
                              text: E.label ?? p.intl.string(p.t.rRffNz),
                              onClick: I,
                              disabled: E.disabled,
                              loading: E.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, r.jsx)(d.q3, {
                      icon: a.J2m,
                      tooltipText: A.tooltip ?? p.intl.string(p.t.eU3inB),
                      "aria-label": A.label ?? p.intl.string(p.t.eU3inB),
                      disabled: A.disabled,
                      loading: A.loading,
                      onClick: T,
                  }),
              ],
          });
}
