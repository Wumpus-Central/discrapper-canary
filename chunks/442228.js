n.d(t, { A: () => T });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(123292),
    o = n(688810),
    u = n(183555),
    c = n(402860),
    d = n(308244),
    f = n(900179),
    A = n(375708),
    S = n(975316);
let T = i.memo(function (e) {
    let {
            userId: t,
            userBio: n,
            onClose: r,
            animateOnHoverOrFocusOnly: T = !1,
            isHoveringOrFocusing: h = !1,
            hidePersonalInformation: m = !1,
            hideRestrictedProfile: g = !1,
            viewFullBioDisabled: x = !1,
        } = e,
        { context: E } = (0, u.NJ)(),
        { analyticsLocations: R } = (0, o.Ay)(),
        [p, C] = i.useState(!1),
        [y, j] = i.useState(!1),
        v = i.useRef(null);
    return m || null == n || "" === n
        ? null
        : (0, l.jsxs)(f.A, {
              heading: A.intl.string(A.t.ZzAR2Y),
              hideHeading: !0,
              children: [
                  (0, l.jsx)("div", {
                      ref: (e) => {
                          ((v.current = e),
                              null == e ||
                                  (C(!y && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && j(!0)));
                      },
                      className: a()(S.mA, y && S.Em),
                      onBlur: function (e) {
                          null == v.current ||
                              v.current.contains(e.relatedTarget) ||
                              (null == v.current.querySelector('[aria-expanded="true"][aria-controls]') &&
                                  (v.current.scrollTop = 0));
                      },
                      children: (0, l.jsx)(d.A, {
                          userId: t,
                          userBio: n,
                          setLineClamp: !1,
                          textColor: "text-strong",
                          animateOnHoverOrFocusOnly: T,
                          isHoveringOrFocusing: h,
                      }),
                  }),
                  (p || y) &&
                      (0, l.jsx)("div", {
                          className: S.HV,
                          children: (0, l.jsx)(s.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: A.intl.string(A.t.YDiPq8),
                              onClick: function () {
                                  (r?.(),
                                      (0, c.openUserProfileModal)({
                                          ...E,
                                          userId: t,
                                          hideRestrictedProfile: g,
                                          sourceAnalyticsLocations: R,
                                      }));
                              },
                              disabled: x,
                          }),
                      }),
              ],
          });
});
