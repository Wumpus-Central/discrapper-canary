e.d(n, { A: () => g });
var i = e(627968),
    l = e(554146),
    r = e(827734),
    a = e(777666),
    s = e(834730),
    o = e(359549),
    c = e(793574),
    u = e(688810),
    d = e(627363),
    A = e(932001),
    x = e(308335),
    p = e(21241),
    f = e(939496),
    _ = e(985629),
    m = e(996988),
    E = e(985018),
    T = e(104728);
function g(t) {
    let { applicationId: n, onAction: e, onClose: g, activity: N } = t,
        { analyticsLocations: C } = (0, u.Ay)(c.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: I } = (0, d.YY)(n),
        O = (0, o.J)(I),
        { themeType: S } = (0, f.E)(),
        y = S === m.d.MODAL || S === m.d.MODAL_V2,
        h = (0, x.o)(N?.application_id ?? n),
        j = O && y && null != I && !h,
        v = j ? [l.M.CLOUD_PLAY_NEW_BADGE] : [],
        [P] = (0, A.kn)(v);
    return j
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.A, { className: T.Xl }),
                  (0, i.jsxs)("div", {
                      className: T.DK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: T.tJ,
                              children: [
                                  P === l.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, i.jsx)(a.Lp, {
                                          text: E.intl.string(E.t.y2b7CA),
                                          color: r.A.colors.BACKGROUND_BRAND.css,
                                      }),
                                  (0, i.jsx)(s.E, { variant: "text-xs/medium", children: E.intl.string(E.t.IQjdmV) }),
                              ],
                          }),
                          (0, i.jsx)(_.A, { application: I, onAction: e, onClose: g, analyticsLocations: C }),
                      ],
                  }),
              ],
          })
        : null;
}
