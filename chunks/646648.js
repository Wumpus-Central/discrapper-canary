i.d(t, { A: () => m });
var l = i(627968);
i(64700);
var n = i(990078),
    s = i(835723),
    a = i(833349),
    d = i(90644),
    r = i(353411),
    o = i(879945),
    c = i(939496),
    u = i(993401),
    A = i(652215),
    h = i(996988),
    g = i(985018),
    x = i(514566);
function m(e) {
    let { user: t, activity: i, onAction: m } = e,
        { themeType: C } = (0, c.E)(),
        _ = (0, r._B)(i, t),
        p = (0, r.J$)(i, t);
    if (!(0, d.A)(i) || (!(0, a.A)(i, A.jUm.PLAY) && !(0, a.A)(i, A.jUm.SYNC))) return null;
    let N = (e) => {
            e?.stopPropagation(), m?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), _.onClick();
        },
        f = (e) => {
            e.stopPropagation(), m?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), p.onClick();
        };
    return C === h.d.MODAL_V2
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(n.m, {
                      text: p.tooltip,
                      children: (0, l.jsx)(u.FD, {
                          text: p.label ?? g.intl.string(g.t.eU3inB),
                          onClick: f,
                          disabled: p.disabled,
                          loading: p.loading,
                      }),
                  }),
                  (0, l.jsx)(n.m, {
                      text: _.tooltip,
                      children: (0, l.jsx)(u.FD, {
                          text: _.label ?? g.intl.string(g.t.rRffNz),
                          onClick: N,
                          disabled: _.disabled,
                          loading: _.loading,
                      }),
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: x.FS,
                      children: (0, l.jsx)(n.m, {
                          text: _.tooltip,
                          children: (0, l.jsx)(u.FD, {
                              icon: () => (0, l.jsx)(o.A, {}),
                              text: _.label ?? g.intl.string(g.t.rRffNz),
                              onClick: N,
                              disabled: _.disabled,
                              loading: _.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, l.jsx)(u.q3, {
                      icon: s.J,
                      tooltipText: p.tooltip ?? g.intl.string(g.t.eU3inB),
                      "aria-label": p.label ?? g.intl.string(g.t.eU3inB),
                      disabled: p.disabled,
                      loading: p.loading,
                      onClick: f,
                  }),
              ],
          });
}
