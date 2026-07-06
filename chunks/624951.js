"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(554146),
    s = n(661531),
    a = n(812993),
    o = n(834730),
    l = n(737393),
    u = n(793574),
    c = n(688810),
    d = n(627363),
    _ = n(131607),
    h = n(308335),
    f = n(21241),
    E = n(939496),
    p = n(985629),
    m = n(996988),
    g = n(375708),
    A = n(104728);
function I(e) {
    let { applicationId: t, onAction: n, onClose: I, activity: T } = e,
        { analyticsLocations: S } = (0, c.Ay)(u.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: N } = (0, d.YY)(t),
        C = (0, l.JC)(N),
        { themeType: y } = (0, E.E)(),
        O = y === m.d.MODAL || y === m.d.MODAL_V2,
        R = (0, h.o)(T?.application_id ?? t),
        v = C && O && null != N && !R,
        b = v ? [r.M.CLOUD_PLAY_NEW_BADGE] : [],
        [L] = (0, _.kn)(b);
    return v
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(f.A, { className: A.Xl }),
                  (0, i.jsxs)("div", {
                      className: A.DK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: A.tJ,
                              children: [
                                  L === r.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, i.jsx)(a.Lp, {
                                          text: g.intl.string(g.t.y2b7CA),
                                          color: s.A.colors.BACKGROUND_BRAND.css,
                                      }),
                                  (0, i.jsx)(o.E, { variant: "text-xs/medium", children: g.intl.string(g.t.IQjdmV) }),
                              ],
                          }),
                          (0, i.jsx)(p.A, { application: N, onAction: n, onClose: I, analyticsLocations: S }),
                      ],
                  }),
              ],
          })
        : null;
}
