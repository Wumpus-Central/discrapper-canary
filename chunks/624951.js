"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(554146),
    a = n(827734),
    s = n(397927),
    o = n(359549),
    l = n(793574),
    u = n(688810),
    c = n(627363),
    d = n(379848),
    _ = n(308335),
    f = n(21241),
    p = n(939496),
    h = n(985629),
    m = n(996988),
    g = n(985018),
    E = n(468115);
function A(e) {
    let { applicationId: t, onAction: n, onClose: A, activity: I } = e,
        { analyticsLocations: T } = (0, u.Ay)(l.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: y } = (0, c.YY)(t),
        S = (0, o.J)(y),
        { themeType: v } = (0, p.E)(),
        C = v === m.d.MODAL || v === m.d.MODAL_V2,
        b = (0, _.o)(I?.application_id ?? t),
        N = S && C && null != y && !b,
        R = N ? [i.M.CLOUD_PLAY_NEW_BADGE] : [],
        [O] = (0, d.kn)(R);
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.A, { className: E.Xl }),
                  (0, r.jsxs)("div", {
                      className: E.DK,
                      children: [
                          (0, r.jsxs)("div", {
                              className: E.tJ,
                              children: [
                                  O === i.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, r.jsx)(s.LpS, {
                                          text: g.intl.string(g.t.y2b7CA),
                                          color: a.A.colors.BACKGROUND_BRAND.css,
                                      }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-xs/medium",
                                      children: g.intl.string(g.t.IQjdmV),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(h.A, { application: y, onAction: n, onClose: A, analyticsLocations: T }),
                      ],
                  }),
              ],
          })
        : null;
}
