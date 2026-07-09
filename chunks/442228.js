"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(123292),
    o = n(688810),
    d = n(183555),
    c = n(975732),
    u = n(308244),
    _ = n(900179),
    E = n(375708),
    A = n(851929);
let h = r.memo(function (e) {
    let {
            userId: t,
            userBio: n,
            heading: a,
            onClose: h,
            animateOnHoverOrFocusOnly: I = !1,
            isHoveringOrFocusing: f = !1,
            hidePersonalInformation: p = !1,
            hideRestrictedProfile: T = !1,
            viewFullBioDisabled: m = !1,
        } = e,
        { context: g } = (0, d.NJ)(),
        { analyticsLocations: S } = (0, o.Ay)(),
        [N, C] = r.useState(!1),
        [R, O] = r.useState(!1),
        L = r.useRef(null);
    return p || null == n || "" === n
        ? null
        : (0, i.jsxs)(_.A, {
              heading: a,
              children: [
                  (0, i.jsx)("div", {
                      ref: (e) => {
                          (L.current = e),
                              null == e ||
                                  (C(!R && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && O(!0));
                      },
                      className: s()(A.mA, R && A.Em),
                      onBlur: function (e) {
                          null == L.current || L.current.contains(e.relatedTarget) || (L.current.scrollTop = 0);
                      },
                      children: (0, i.jsx)(u.A, {
                          userId: t,
                          userBio: n,
                          setLineClamp: !1,
                          textColor: "text-strong",
                          animateOnHoverOrFocusOnly: I,
                          isHoveringOrFocusing: f,
                      }),
                  }),
                  (N || R) &&
                      (0, i.jsx)("div", {
                          className: A.HV,
                          children: (0, i.jsx)(l.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: E.intl.string(E.t.YDiPq8),
                              onClick: function () {
                                  h?.(),
                                      (0, c.openUserProfileModal)({
                                          ...g,
                                          userId: t,
                                          hideRestrictedProfile: T,
                                          sourceAnalyticsLocations: S,
                                      });
                              },
                              disabled: m,
                          }),
                      }),
              ],
          });
});
