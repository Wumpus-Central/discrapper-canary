"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(554146),
    a = n(661531),
    s = n(812993),
    l = n(834730),
    o = n(737393),
    d = n(793574),
    c = n(688810),
    u = n(627363),
    _ = n(131607),
    E = n(308335),
    A = n(21241),
    h = n(939496),
    I = n(985629),
    f = n(996988),
    p = n(375708),
    T = n(104728);
function m(e) {
    let { applicationId: t, onAction: n, onClose: m, activity: g } = e,
        { analyticsLocations: S } = (0, c.Ay)(d.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: N } = (0, u.YY)(t),
        C = (0, o.JC)(N),
        { themeType: R } = (0, h.E)(),
        O = R === f.d.MODAL || R === f.d.MODAL_V2,
        L = (0, E.o)(g?.application_id ?? t),
        D = C && O && null != N && !L,
        y = D ? [r.M.CLOUD_PLAY_NEW_BADGE] : [],
        [v] = (0, _.kn)(y);
    return D
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(A.A, { className: T.Xl }),
                  (0, i.jsxs)("div", {
                      className: T.DK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: T.tJ,
                              children: [
                                  v === r.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, i.jsx)(s.Lp, {
                                          text: p.intl.string(p.t.y2b7CA),
                                          color: a.A.colors.BACKGROUND_BRAND.css,
                                      }),
                                  (0, i.jsx)(l.E, { variant: "text-xs/medium", children: p.intl.string(p.t.IQjdmV) }),
                              ],
                          }),
                          (0, i.jsx)(I.A, { application: N, onAction: n, onClose: m, analyticsLocations: S }),
                      ],
                  }),
              ],
          })
        : null;
}
