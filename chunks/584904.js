n.d(e, { A: () => x });
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
    g = n(105292),
    m = n(260155);
function x(t) {
    let {
            children: e,
            className: n,
            profileModalScrollTarget: i,
            onAction: x,
            onClose: p,
            "aria-labelledby": _,
            ref: I,
            ...N
        } = t,
        { themeType: E } = (0, d.E)(),
        { analyticsLocations: T } = (0, s.Ay)(),
        { context: h } = (0, o.NJ)();
    return E === f.d.MODAL || E === f.d.MODAL_V2 || h?.userId == null
        ? (0, l.jsx)("article", {
              "aria-labelledby": _,
              children: (0, l.jsx)(u.A.Overlay, { ref: I, className: a()(m.Nr, n), ...N, children: e }),
          })
        : (0, l.jsx)("article", {
              "aria-labelledby": _,
              children: (0, l.jsx)(r.s, {
                  className: m.OV,
                  "aria-label": g.intl.string(g.t.pD1L1u),
                  focusProps: { ringTarget: I },
                  onClick: () => {
                      (x?.({ action: "PRESS_CARD" }),
                          (0, c.openUserProfileModal)({
                              tabSection: A.RP.ACTIVITY,
                              sourceAnalyticsLocations: T,
                              scrollTarget: i,
                              ...h,
                          }),
                          p?.());
                  },
                  children: (0, l.jsx)(u.A.Overlay, { ref: I, className: a()(m.Nr, n), ...N, children: e }),
              }),
          });
}
