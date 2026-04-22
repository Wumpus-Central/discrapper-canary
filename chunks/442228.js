n.d(t, { A: () => p });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    o = n(140735),
    s = n(707554),
    c = n(123292),
    u = n(688810),
    d = n(183555),
    f = n(657331),
    _ = n(389996),
    h = n(985018),
    A = n(63705);
let p = r.memo(function (e) {
    let { user: t, onClose: n, bio: l, hidePersonalInformation: p, viewFullBioDisabled: m = !1 } = e,
        { context: S } = (0, d.NJ)(),
        { analyticsLocations: g } = (0, u.Ay)(),
        b = r.useId(),
        [x, T] = r.useState(!1),
        [E, R] = r.useState(!1),
        v = r.useRef(null);
    return p || null == l || "" === l
        ? null
        : (0, a.jsxs)("section", {
              "aria-labelledby": b,
              children: [
                  (0, a.jsx)(o.A, { children: (0, a.jsx)(s.H, { id: b, children: h.intl.string(h.t.ZzAR2Y) }) }),
                  (0, a.jsx)("div", {
                      ref: (e) => {
                          (v.current = e),
                              null == e ||
                                  (T(!E && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && R(!0));
                      },
                      className: i()(A.mA, E && A.Em),
                      onBlur: (e) => {
                          null == v.current || v.current.contains(e.relatedTarget) || (v.current.scrollTop = 0);
                      },
                      children: (0, a.jsx)(_.A, { userBio: l, setLineClamp: !1, textColor: "text-strong" }),
                  }),
                  (x || E) &&
                      (0, a.jsx)("div", {
                          className: A.HV,
                          children: (0, a.jsx)(c.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: h.intl.string(h.t.YDiPq8),
                              onClick: () => {
                                  n?.(),
                                      (0, f.openUserProfileModal)({ ...S, userId: t.id, sourceAnalyticsLocations: g });
                              },
                              disabled: m,
                          }),
                      }),
              ],
          });
});
