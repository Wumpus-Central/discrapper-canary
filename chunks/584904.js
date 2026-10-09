n.d(e, { A: () => m });
var l = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    r = n(890856),
    s = n(688810),
    o = n(183555),
    c = n(402860),
    u = n(946356),
    d = n(939496),
    A = n(518477),
    f = n(996988),
    g = n(660183),
    p = n(260155);
function m(t) {
    let {
            children: e,
            className: n,
            profileModalScrollTarget: i,
            onAction: m,
            onClose: x,
            "aria-labelledby": _,
            ref: I,
            ...N
        } = t,
        { themeType: E } = (0, d.E)(),
        { analyticsLocations: h } = (0, s.Ay)(),
        { context: T } = (0, o.NJ)();
    return E === f.d.MODAL || E === f.d.MODAL_V2 || T?.userId == null
        ? (0, l.jsx)("article", {
              "aria-labelledby": _,
              children: (0, l.jsx)(u.A.Overlay, { ref: I, className: a()(p.Nr, n), ...N, children: e }),
          })
        : (0, l.jsx)("article", {
              "aria-labelledby": _,
              children: (0, l.jsx)(r.s, {
                  className: p.OV,
                  "aria-label": g.intl.string(g.t.pD1L1u),
                  focusProps: { ringTarget: I },
                  onClick: () => {
                      (m?.({ action: "PRESS_CARD" }),
                          (0, c.openUserProfileModal)({
                              tabSection: A.RP.ACTIVITY,
                              sourceAnalyticsLocations: h,
                              scrollTarget: i,
                              ...T,
                          }),
                          x?.());
                  },
                  children: (0, l.jsx)(u.A.Overlay, { ref: I, className: a()(p.Nr, n), ...N, children: e }),
              }),
          });
}
