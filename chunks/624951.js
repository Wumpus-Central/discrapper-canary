e.d(n, { A: () => g });
var l = e(477900),
    i = e(554146),
    r = e(661531),
    a = e(812993),
    s = e(834730),
    o = e(146779),
    c = e(793574),
    u = e(688810),
    d = e(627363),
    A = e(131607),
    x = e(308335),
    p = e(21241),
    f = e(939496),
    m = e(985629),
    _ = e(996988),
    T = e(375708),
    E = e(41821);
function g(t) {
    let { applicationId: n, onAction: e, onClose: g, activity: N } = t,
        { analyticsLocations: C } = (0, u.Ay)(c.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: I } = (0, d.YY)(n),
        y = (0, o.JC)(I),
        { themeType: j } = (0, f.E)(),
        O = j === _.d.MODAL || j === _.d.MODAL_V2,
        S = (0, x.o)(N?.application_id ?? n),
        h = y && O && null != I && !S,
        v = h ? [i.M.CLOUD_PLAY_NEW_BADGE] : [],
        [P] = (0, A.kn)(v);
    return h
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(p.A, { className: E.Xl }),
                  (0, l.jsxs)("div", {
                      className: E.DK,
                      children: [
                          (0, l.jsxs)("div", {
                              className: E.tJ,
                              children: [
                                  P === i.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, l.jsx)(a.Lp, {
                                          text: T.intl.string(T.t.y2b7CA),
                                          color: r.A.colors.BACKGROUND_BRAND.css,
                                      }),
                                  (0, l.jsx)(s.E, { variant: "text-xs/medium", children: T.intl.string(T.t.IQjdmV) }),
                              ],
                          }),
                          (0, l.jsx)(m.A, { application: I, onAction: e, onClose: g, analyticsLocations: C }),
                      ],
                  }),
              ],
          })
        : null;
}
