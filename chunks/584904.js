n.d(e, { A: () => x });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(890856),
    o = n(688810),
    c = n(183555),
    u = n(402860),
    d = n(946356),
    A = n(939496),
    f = n(518477),
    p = n(996988),
    g = n(375708),
    m = n(260155);
let x = i.forwardRef(function (t, e) {
    let {
            children: n,
            className: i,
            profileModalScrollTarget: a,
            onAction: x,
            onClose: _,
            "aria-labelledby": I,
            ...N
        } = t,
        { themeType: E } = (0, A.E)(),
        { analyticsLocations: T } = (0, o.Ay)(),
        { context: C } = (0, c.NJ)();
    return E === p.d.MODAL || E === p.d.MODAL_V2 || C?.userId == null
        ? (0, l.jsx)("article", {
              "aria-labelledby": I,
              children: (0, l.jsx)(d.A.Overlay, { ref: e, className: r()(m.Nr, i), ...N, children: n }),
          })
        : (0, l.jsx)("article", {
              "aria-labelledby": I,
              children: (0, l.jsx)(s.s, {
                  className: m.OV,
                  "aria-label": g.intl.string(g.t.pD1L1u),
                  focusProps: { ringTarget: e },
                  onClick: () => {
                      (x?.({ action: "PRESS_CARD" }),
                          (0, u.openUserProfileModal)({
                              tabSection: f.RP.ACTIVITY,
                              sourceAnalyticsLocations: T,
                              scrollTarget: a,
                              ...C,
                          }),
                          _?.());
                  },
                  children: (0, l.jsx)(d.A.Overlay, { ref: e, className: r()(m.Nr, i), ...N, children: n }),
              }),
          });
});
