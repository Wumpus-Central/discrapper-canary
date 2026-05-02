"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(554146),
    s = n(661531),
    a = n(777666),
    o = n(834730),
    l = n(737393),
    u = n(793574),
    c = n(688810),
    d = n(627363),
    _ = n(131607),
    f = n(308335),
    h = n(21241),
    p = n(939496),
    E = n(985629),
    m = n(996988),
    g = n(375708),
    A = n(104728);
function I(e) {
    let { applicationId: t, onAction: n, onClose: I, activity: T } = e,
        { analyticsLocations: S } = (0, c.Ay)(u.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: N } = (0, d.YY)(t),
        y = (0, l.J)(N),
        { themeType: C } = (0, p.E)(),
        v = C === m.d.MODAL || C === m.d.MODAL_V2,
        O = (0, f.o)(T?.application_id ?? t),
        R = y && v && null != N && !O,
        b = R ? [r.M.CLOUD_PLAY_NEW_BADGE] : [],
        [D] = (0, _.kn)(b);
    return R
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h.A, { className: A.Xl }),
                  (0, i.jsxs)("div", {
                      className: A.DK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: A.tJ,
                              children: [
                                  D === r.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, i.jsx)(a.Lp, {
                                          text: g.intl.string(g.t.y2b7CA),
                                          color: s.A.colors.BACKGROUND_BRAND.css,
                                      }),
                                  (0, i.jsx)(o.E, { variant: "text-xs/medium", children: g.intl.string(g.t.IQjdmV) }),
                              ],
                          }),
                          (0, i.jsx)(E.A, { application: N, onAction: n, onClose: I, analyticsLocations: S }),
                      ],
                  }),
              ],
          })
        : null;
}
