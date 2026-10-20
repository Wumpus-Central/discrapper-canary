n.d(e, { A: () => I });
var l = n(477900),
    i = n(554146),
    a = n(62010),
    r = n(834730),
    s = n(359549),
    o = n(793574),
    c = n(688810),
    u = n(627363),
    d = n(131607),
    A = n(308335),
    f = n(21241),
    p = n(939496),
    g = n(985629),
    m = n(996988),
    x = n(105292),
    _ = n(41821);
function I(t) {
    let { applicationId: e, onAction: n, onClose: I, activity: N } = t,
        { analyticsLocations: E } = (0, c.Ay)(o.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: T } = (0, u.YY)(e),
        h = (0, s.JC)(T),
        { themeType: C } = (0, p.E)(),
        S = C === m.d.MODAL || C === m.d.MODAL_V2,
        v = (0, A.o)(N?.application_id ?? e),
        y = h && S && null != T && !v,
        O = y ? [i.M.CLOUD_PLAY_NEW_BADGE] : [],
        [j] = (0, d.kn)(O);
    return y
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(f.A, { className: _.Xl }),
                  (0, l.jsxs)("div", {
                      className: _.DK,
                      children: [
                          (0, l.jsxs)("div", {
                              className: _.tJ,
                              children: [
                                  j === i.M.CLOUD_PLAY_NEW_BADGE &&
                                      (0, l.jsx)(a.E, { type: "new", variant: "primary" }),
                                  (0, l.jsx)(r.E, { variant: "text-xs/medium", children: x.intl.string(x.t.IQjdmV) }),
                              ],
                          }),
                          (0, l.jsx)(g.A, { application: T, onAction: n, onClose: I, analyticsLocations: E }),
                      ],
                  }),
              ],
          })
        : null;
}
