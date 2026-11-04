var l = e(477900),
    i = e(554146),
    a = e(805251),
    r = e(834730),
    s = e(359549),
    o = e(793574),
    c = e(688810),
    u = e(627363),
    d = e(263775),
    A = e(308335),
    f = e(21241),
    g = e(939496),
    m = e(985629),
    p = e(996988),
    x = e(792996),
    _ = e(41821);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { applicationId: n, onAction: e, onClose: I, activity: N } = t,
                { analyticsLocations: E } = (0, c.Ay)(o.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
                { data: T } = (0, u.YY)(n),
                h = (0, s.JC)(T),
                { themeType: C } = (0, g.E)(),
                S = C === p.d.MODAL || C === p.d.MODAL_V2,
                y = (0, A.o)(N?.application_id ?? n),
                v = h && S && null != T && !y,
                O = v ? [i.M.CLOUD_PLAY_NEW_BADGE] : [],
                [j] = (0, d.kn)(O);
            return v
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
                                          (0, l.jsx)(r.E, {
                                              variant: "body-xs/medium",
                                              children: x.intl.string(x.t.IQjdmV),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(m.A, { application: T, onAction: e, onClose: I, analyticsLocations: E }),
                              ],
                          }),
                      ],
                  })
                : null;
        },
    },
);
