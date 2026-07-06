"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(123292),
    l = n(688810),
    u = n(183555),
    c = n(975732),
    d = n(308244),
    _ = n(900179),
    h = n(375708),
    f = n(851929);
let E = r.memo(function (e) {
    let {
            userId: t,
            userBio: n,
            heading: s,
            onClose: E,
            animateOnHoverOrFocusOnly: p = !1,
            isHoveringOrFocusing: m = !1,
            hidePersonalInformation: g = !1,
            hideRestrictedProfile: A = !1,
            viewFullBioDisabled: I = !1,
        } = e,
        { context: T } = (0, u.NJ)(),
        { analyticsLocations: S } = (0, l.Ay)(),
        [N, C] = r.useState(!1),
        [y, O] = r.useState(!1),
        R = r.useRef(null);
    return g || null == n || "" === n
        ? null
        : (0, i.jsxs)(_.A, {
              heading: s,
              children: [
                  (0, i.jsx)("div", {
                      ref: (e) => {
                          (R.current = e),
                              null == e ||
                                  (C(!y && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && O(!0));
                      },
                      className: a()(f.mA, y && f.Em),
                      onBlur: function (e) {
                          null == R.current || R.current.contains(e.relatedTarget) || (R.current.scrollTop = 0);
                      },
                      children: (0, i.jsx)(d.A, {
                          userId: t,
                          userBio: n,
                          setLineClamp: !1,
                          textColor: "text-strong",
                          animateOnHoverOrFocusOnly: p,
                          isHoveringOrFocusing: m,
                      }),
                  }),
                  (N || y) &&
                      (0, i.jsx)("div", {
                          className: f.HV,
                          children: (0, i.jsx)(o.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: h.intl.string(h.t.YDiPq8),
                              onClick: function () {
                                  E?.(),
                                      (0, c.openUserProfileModal)({
                                          ...T,
                                          userId: t,
                                          hideRestrictedProfile: A,
                                          sourceAnalyticsLocations: S,
                                      });
                              },
                              disabled: I,
                          }),
                      }),
              ],
          });
});
