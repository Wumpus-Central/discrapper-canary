n.d(t, { A: () => A });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(123292),
    o = n(688810),
    u = n(183555),
    c = n(402860),
    d = n(308244),
    f = n(900179),
    h = n(375708),
    m = n(975316);
let A = r.memo(function (e) {
    let {
            userId: t,
            userBio: n,
            onClose: a,
            animateOnHoverOrFocusOnly: A = !1,
            isHoveringOrFocusing: T = !1,
            hidePersonalInformation: S = !1,
            hideRestrictedProfile: g = !1,
            viewFullBioDisabled: x = !1,
        } = e,
        { context: p } = (0, u.NJ)(),
        { analyticsLocations: E } = (0, o.Ay)(),
        [R, y] = r.useState(!1),
        [v, C] = r.useState(!1),
        j = r.useRef(null);
    return S || null == n || "" === n
        ? null
        : (0, l.jsxs)(f.A, {
              heading: h.intl.string(h.t.ZzAR2Y),
              hideHeading: !0,
              children: [
                  (0, l.jsx)("div", {
                      ref: (e) => {
                          (j.current = e),
                              null == e ||
                                  (y(!v && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && C(!0));
                      },
                      className: i()(m.mA, v && m.Em),
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
                          animateOnHoverOrFocusOnly: A,
                          isHoveringOrFocusing: T,
                      }),
                  }),
                  (R || v) &&
                      (0, l.jsx)("div", {
                          className: m.HV,
                          children: (0, l.jsx)(s.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: h.intl.string(h.t.YDiPq8),
                              onClick: function () {
                                  a?.(),
                                      (0, c.openUserProfileModal)({
                                          ...p,
                                          userId: t,
                                          hideRestrictedProfile: g,
                                          sourceAnalyticsLocations: E,
                                      });
                              },
                              disabled: x,
                          }),
                      }),
              ],
          });
});
