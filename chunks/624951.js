e.d(n, { A: () => N });
var i = e(627968),
    l = e(554146),
    a = e(661531),
    r = e(812993),
    s = e(834730),
    o = e(737393),
    c = e(793574),
    u = e(688810),
    d = e(627363),
    A = e(131607),
    x = e(308335),
    p = e(21241),
    f = e(939496),
    _ = e(985629),
    m = e(996988),
    T = e(375708),
    E = e(104728);
function N(t) {
    let { applicationId: n, onAction: e, onClose: N, activity: g } = t,
        { analyticsLocations: C } = (0, u.Ay)(c.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: I } = (0, d.YY)(n),
        j = (0, o.J)(I),
        { themeType: y } = (0, f.E)(),
        S = y === m.d.MODAL || y === m.d.MODAL_V2,
        O = (0, x.o)(g?.application_id ?? n),
        h = j && S && null != I && !O,
        P = h ? [l.M.CLOUD_PLAY_NEW_BADGE] : [],
        [v] = (0, A.kn)(P);
    return h
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.A, { className: E.Xl }),
                  (0, i.jsxs)("div", {
                      className: E.DK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: E.tJ,
                              children: [
                                  v === l.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, i.jsx)(r.Lp, {
                                          text: T.intl.string(T.t.y2b7CA),
                                          color: a.A.colors.BACKGROUND_BRAND.css,
                                      }),
                                  (0, i.jsx)(s.E, { variant: "text-xs/medium", children: T.intl.string(T.t.IQjdmV) }),
                              ],
                          }),
                          (0, i.jsx)(_.A, { application: I, onAction: e, onClose: N, analyticsLocations: C }),
                      ],
                  }),
              ],
          })
        : null;
}
