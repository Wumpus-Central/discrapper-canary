n.d(t, { A: () => A });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(123292),
    o = n(688810),
    u = n(183555),
    c = n(975732),
    d = n(308244),
    f = n(900179),
    h = n(375708),
    m = n(406225);
let A = r.memo(function (e) {
    let {
            userId: t,
            userBio: n,
            heading: a,
            onClose: A,
            animateOnHoverOrFocusOnly: x = !1,
            isHoveringOrFocusing: S = !1,
            hidePersonalInformation: g = !1,
            hideRestrictedProfile: T = !1,
            viewFullBioDisabled: E = !1,
        } = e,
        { context: p } = (0, u.NJ)(),
        { analyticsLocations: v } = (0, o.Ay)(),
        [y, R] = r.useState(!1),
        [j, C] = r.useState(!1),
        N = r.useRef(null);
    return g || null == n || "" === n
        ? null
        : (0, l.jsxs)(f.A, {
              heading: a,
              children: [
                  (0, l.jsx)("div", {
                      ref: (e) => {
                          (N.current = e),
                              null == e ||
                                  (R(!j && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && C(!0));
                      },
                      className: i()(m.mA, j && m.Em),
                      onBlur: function (e) {
                          null == N.current ||
                              N.current.contains(e.relatedTarget) ||
                              (null == N.current.querySelector('[aria-expanded="true"][aria-controls]') &&
                                  (N.current.scrollTop = 0));
                      },
                      children: (0, l.jsx)(d.A, {
                          userId: t,
                          userBio: n,
                          setLineClamp: !1,
                          textColor: "text-strong",
                          animateOnHoverOrFocusOnly: x,
                          isHoveringOrFocusing: S,
                      }),
                  }),
                  (y || j) &&
                      (0, l.jsx)("div", {
                          className: m.HV,
                          children: (0, l.jsx)(s.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: h.intl.string(h.t.YDiPq8),
                              onClick: function () {
                                  A?.(),
                                      (0, c.openUserProfileModal)({
                                          ...p,
                                          userId: t,
                                          hideRestrictedProfile: T,
                                          sourceAnalyticsLocations: v,
                                      });
                              },
                              disabled: E,
                          }),
                      }),
              ],
          });
});
