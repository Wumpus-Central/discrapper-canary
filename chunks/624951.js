n.d(e, { A: () => N });
var l = n(477900),
    i = n(554146),
    a = n(661531),
    r = n(812993),
    s = n(834730),
    o = n(146779),
    c = n(793574),
    u = n(688810),
    d = n(627363),
    A = n(131607),
    f = n(308335),
    p = n(21241),
    g = n(939496),
    m = n(985629),
    x = n(996988),
    _ = n(375708),
    I = n(41821);
function N(t) {
    let { applicationId: e, onAction: n, onClose: N, activity: E } = t,
        { analyticsLocations: h } = (0, u.Ay)(c.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: T } = (0, d.YY)(e),
        C = (0, o.JC)(T),
        { themeType: S } = (0, g.E)(),
        v = S === x.d.MODAL || S === x.d.MODAL_V2,
        y = (0, f.o)(E?.application_id ?? e),
        O = C && v && null != T && !y,
        j = O ? [i.M.CLOUD_PLAY_NEW_BADGE] : [],
        [P] = (0, A.kn)(j);
    return O
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(p.A, { className: I.Xl }),
                  (0, l.jsxs)("div", {
                      className: I.DK,
                      children: [
                          (0, l.jsxs)("div", {
                              className: I.tJ,
                              children: [
                                  P === i.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, l.jsx)(r.Lp, {
                                          text: _.intl.string(_.t.y2b7CA),
                                          color: a.A.colors.BACKGROUND_BRAND.css,
                                      }),
                                  (0, l.jsx)(s.E, { variant: "text-xs/medium", children: _.intl.string(_.t.IQjdmV) }),
                              ],
                          }),
                          (0, l.jsx)(m.A, { application: T, onAction: n, onClose: N, analyticsLocations: h }),
                      ],
                  }),
              ],
          })
        : null;
}
