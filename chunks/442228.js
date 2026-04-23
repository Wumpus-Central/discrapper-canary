"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(140735),
    l = n(707554),
    u = n(123292),
    c = n(688810),
    d = n(183555),
    _ = n(657331),
    f = n(389996),
    p = n(985018),
    h = n(851929);
let E = i.memo(function (e) {
    let { user: t, onClose: n, bio: s, hidePersonalInformation: E, viewFullBioDisabled: m = !1 } = e,
        { context: g } = (0, d.NJ)(),
        { analyticsLocations: A } = (0, c.Ay)(),
        I = i.useId(),
        [T, S] = i.useState(!1),
        [y, N] = i.useState(!1),
        v = i.useRef(null);
    return E || null == s || "" === s
        ? null
        : (0, r.jsxs)("section", {
              "aria-labelledby": I,
              children: [
                  (0, r.jsx)(o.A, { children: (0, r.jsx)(l.H, { id: I, children: p.intl.string(p.t.ZzAR2Y) }) }),
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          (v.current = e),
                              null == e ||
                                  (S(!y && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && N(!0));
                      },
                      className: a()(h.mA, y && h.Em),
                      onBlur: (e) => {
                          null == v.current || v.current.contains(e.relatedTarget) || (v.current.scrollTop = 0);
                      },
                      children: (0, r.jsx)(f.A, { userBio: s, setLineClamp: !1, textColor: "text-strong" }),
                  }),
                  (T || y) &&
                      (0, r.jsx)("div", {
                          className: h.HV,
                          children: (0, r.jsx)(u.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: p.intl.string(p.t.YDiPq8),
                              onClick: () => {
                                  n?.(),
                                      (0, _.openUserProfileModal)({ ...g, userId: t.id, sourceAnalyticsLocations: A });
                              },
                              disabled: m,
                          }),
                      }),
              ],
          });
});
