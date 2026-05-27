"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(140735),
    l = n(707554),
    u = n(123292),
    c = n(688810),
    d = n(183555),
    _ = n(975732),
    h = n(308244),
    f = n(375708),
    p = n(851929);
let E = r.memo(function (e) {
    let { user: t, onClose: n, bio: s, hidePersonalInformation: E, viewFullBioDisabled: m = !1 } = e,
        { context: g } = (0, d.NJ)(),
        { analyticsLocations: A } = (0, c.Ay)(),
        I = r.useId(),
        [T, S] = r.useState(!1),
        [y, N] = r.useState(!1),
        v = r.useRef(null);
    return E || null == s || "" === s
        ? null
        : (0, i.jsxs)("section", {
              "aria-labelledby": I,
              children: [
                  (0, i.jsx)(o.A, { children: (0, i.jsx)(l.H, { id: I, children: f.intl.string(f.t.ZzAR2Y) }) }),
                  (0, i.jsx)("div", {
                      ref: (e) => {
                          (v.current = e),
                              null == e ||
                                  (S(!y && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && N(!0));
                      },
                      className: a()(p.mA, y && p.Em),
                      onBlur: (e) => {
                          null == v.current || v.current.contains(e.relatedTarget) || (v.current.scrollTop = 0);
                      },
                      children: (0, i.jsx)(h.A, { userBio: s, setLineClamp: !1, textColor: "text-strong" }),
                  }),
                  (T || y) &&
                      (0, i.jsx)("div", {
                          className: p.HV,
                          children: (0, i.jsx)(u.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: f.intl.string(f.t.YDiPq8),
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
