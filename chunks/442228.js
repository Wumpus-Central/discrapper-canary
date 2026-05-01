n.d(t, { A: () => S });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(140735),
    o = n(707554),
    u = n(123292),
    c = n(688810),
    d = n(183555),
    h = n(975732),
    f = n(308244),
    A = n(985018),
    m = n(851929);
let S = r.memo(function (e) {
    let { user: t, onClose: n, bio: a, hidePersonalInformation: S, viewFullBioDisabled: x = !1 } = e,
        { context: T } = (0, d.NJ)(),
        { analyticsLocations: g } = (0, c.Ay)(),
        E = r.useId(),
        [p, v] = r.useState(!1),
        [R, y] = r.useState(!1),
        C = r.useRef(null);
    return S || null == a || "" === a
        ? null
        : (0, l.jsxs)("section", {
              "aria-labelledby": E,
              children: [
                  (0, l.jsx)(s.A, { children: (0, l.jsx)(o.H, { id: E, children: A.intl.string(A.t.ZzAR2Y) }) }),
                  (0, l.jsx)("div", {
                      ref: (e) => {
                          (C.current = e),
                              null == e ||
                                  (v(!R && e.scrollHeight - e.clientHeight > 1),
                                  e.getBoundingClientRect().height > 57.75 && y(!0));
                      },
                      className: i()(m.mA, R && m.Em),
                      onBlur: (e) => {
                          null == C.current || C.current.contains(e.relatedTarget) || (C.current.scrollTop = 0);
                      },
                      children: (0, l.jsx)(f.A, { userBio: a, setLineClamp: !1, textColor: "text-strong" }),
                  }),
                  (p || R) &&
                      (0, l.jsx)("div", {
                          className: m.HV,
                          children: (0, l.jsx)(u.Q, {
                              textVariant: "text-xs/normal",
                              size: "sm",
                              variant: "secondary",
                              text: A.intl.string(A.t.YDiPq8),
                              onClick: () => {
                                  n?.(),
                                      (0, h.openUserProfileModal)({ ...T, userId: t.id, sourceAnalyticsLocations: g });
                              },
                              disabled: x,
                          }),
                      }),
              ],
          });
});
