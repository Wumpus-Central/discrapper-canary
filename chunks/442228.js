"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(688810),
    u = n(183555),
    c = n(657331),
    d = n(389996),
    _ = n(985018),
    f = n(200894);
let p = 57.75,
    h = i.memo(function (e) {
        let { user: t, onClose: n, bio: a, hidePersonalInformation: h, viewFullBioDisabled: m = !1 } = e,
            { context: g } = (0, u.NJ)(),
            { analyticsLocations: E } = (0, l.Ay)(),
            [A, I] = i.useState(!1),
            [T, y] = i.useState(!1),
            S = i.useRef(null),
            v = (e) => {
                (S.current = e),
                    null == e ||
                        (I(!T && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > p && y(!0));
            },
            C = () => {
                n?.(), (0, c.openUserProfileModal)({ ...g, userId: t.id, sourceAnalyticsLocations: E });
            },
            b = (e) => {
                null == S.current || S.current.contains(e.relatedTarget) || (S.current.scrollTop = 0);
            };
        return h || null == a || "" === a
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)("div", {
                          ref: v,
                          className: s()(f.mA, T && f.Em),
                          onBlur: b,
                          children: (0, r.jsx)(d.A, { userBio: a, setLineClamp: !1, textColor: "text-strong" }),
                      }),
                      (A || T) &&
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
