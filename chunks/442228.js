n.d(t, { A: () => m });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(123292),
    o = n(688810),
    u = n(183555),
    c = n(975732),
    d = n(308244),
    f = n(900179),
    h = n(375708),
    A = n(851929);
let m = r.memo(function (e) {
    let {
            userId: t,
            userBio: n,
            heading: i,
            onClose: m,
            animateOnHoverOrFocusOnly: S = !1,
            isHoveringOrFocusing: g = !1,
            hidePersonalInformation: x = !1,
            hideRestrictedProfile: T = !1,
            viewFullBioDisabled: E = !1,
        } = e,
        { context: p } = (0, u.NJ)(),
        { analyticsLocations: R } = (0, o.Ay)(),
        [v, y] = r.useState(!1),
        [C, j] = r.useState(!1),
        P = r.useRef(null);
    return x || null == n || "" === n
        ? null
        : (0, l.jsxs)(f.A, {
              heading: i,
              children: [
                  (0, l.jsx)("div", {
                      ref: (e) => {
                          (P.current = e),
                              null == e ||
                                  (y(!C && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && j(!0));
                      },
                      className: a()(A.mA, C && A.Em),
                      onBlur: function (e) {
                          null == P.current || P.current.contains(e.relatedTarget) || (P.current.scrollTop = 0);
                      },
                      children: (0, l.jsx)(d.A, {
                          userId: t,
                          userBio: n,
                          setLineClamp: !1,
                          textColor: "text-strong",
                          animateOnHoverOrFocusOnly: S,
                          isHoveringOrFocusing: g,
                      }),
                  }),
                  (v || C) &&
                      (0, l.jsx)("div", {
                          className: A.HV,
                          children: (0, l.jsx)(s.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: h.intl.string(h.t.YDiPq8),
                              onClick: function () {
                                  m?.(),
                                      (0, c.openUserProfileModal)({
                                          ...p,
                                          userId: t,
                                          hideRestrictedProfile: T,
                                          sourceAnalyticsLocations: R,
                                      });
                              },
                              disabled: E,
                          }),
                      }),
              ],
          });
});
