"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(688810),
    u = n(183555),
    c = n(657331),
    d = n(389996),
    _ = n(985018),
    f = n(200894);
let p = 57.75,
    h = i.memo(function (e) {
        let { user: t, onClose: n, bio: s, hidePersonalInformation: h, viewFullBioDisabled: m = !1 } = e,
            { context: E } = (0, u.NJ)(),
            { analyticsLocations: g } = (0, l.Ay)(),
            A = i.useId(),
            [I, T] = i.useState(!1),
            [S, y] = i.useState(!1),
            v = i.useRef(null),
            N = (e) => {
                (v.current = e),
                    null == e ||
                        (T(!S && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > p && y(!0));
            },
            C = () => {
                n?.(), (0, c.openUserProfileModal)({ ...E, userId: t.id, sourceAnalyticsLocations: g });
            },
            R = (e) => {
                null == v.current || v.current.contains(e.relatedTarget) || (v.current.scrollTop = 0);
            };
        return h || null == s || "" === s
            ? null
            : (0, r.jsxs)("section", {
                  "aria-labelledby": A,
                  children: [
                      (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { id: A, children: _.intl.string(_.t.ZzAR2Y) }) }),
                      (0, r.jsx)("div", {
                          ref: N,
                          className: a()(f.mA, S && f.Em),
                          onBlur: R,
                          children: (0, r.jsx)(d.A, { userBio: s, setLineClamp: !1, textColor: "text-strong" }),
                      }),
                      (I || S) &&
                          (0, r.jsx)("div", {
                              className: f.HV,
                              children: (0, r.jsx)(o.QWc, {
                                  textVariant: "text-xs/normal",
                                  size: "sm",
                                  variant: "secondary",
                                  text: _.intl.string(_.t.YDiPq8),
                                  onClick: C,
                                  disabled: m,
                              }),
                          }),
                  ],
              });
    });
