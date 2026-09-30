n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(123292),
    o = n(688810),
    u = n(183555),
    c = n(402860),
    d = n(308244),
    f = n(900179),
    A = n(375708),
    S = n(975316);
let h = i.memo(function (e) {
    let {
            userId: t,
            userBio: n,
            onClose: a,
            animateOnHoverOrFocusOnly: h = !1,
            isHoveringOrFocusing: T = !1,
            hidePersonalInformation: m = !1,
            hideRestrictedProfile: g = !1,
            viewFullBioDisabled: x = !1,
        } = e,
        { context: E } = (0, u.NJ)(),
        { analyticsLocations: p } = (0, o.Ay)(),
        [R, y] = i.useState(!1),
        [C, v] = i.useState(!1),
        j = i.useRef(null);
    return m || null == n || "" === n
        ? null
        : (0, l.jsxs)(f.A, {
              heading: A.intl.string(A.t.ZzAR2Y),
              hideHeading: !0,
              children: [
                  (0, l.jsx)("div", {
                      ref: (e) => {
                          ((j.current = e),
                              null == e ||
                                  (y(!C && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && v(!0)));
                      },
                      className: r()(S.mA, C && S.Em),
                      onBlur: function (e) {
                          null == j.current ||
                              j.current.contains(e.relatedTarget) ||
                              (null == j.current.querySelector('[aria-expanded="true"][aria-controls]') &&
                                  (j.current.scrollTop = 0));
                      },
                      children: (0, l.jsx)(d.A, {
                          userId: t,
                          userBio: n,
                          setLineClamp: !1,
                          textColor: "text-strong",
                          animateOnHoverOrFocusOnly: h,
                          isHoveringOrFocusing: T,
                      }),
                  }),
                  (R || C) &&
                      (0, l.jsx)("div", {
                          className: S.HV,
                          children: (0, l.jsx)(s.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: A.intl.string(A.t.YDiPq8),
                              onClick: function () {
                                  (a?.(),
                                      (0, c.openUserProfileModal)({
                                          ...E,
                                          userId: t,
                                          hideRestrictedProfile: g,
                                          sourceAnalyticsLocations: p,
                                      }));
                              },
                              disabled: x,
                          }),
                      }),
              ],
          });
});
