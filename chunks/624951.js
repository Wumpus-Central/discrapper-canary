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
    x = e(21241),
    m = e(939496),
    f = e(985629),
    g = e(996988),
    p = e(792996),
    _ = e(41821);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { applicationId: n, onAction: e, onClose: I, activity: E } = t,
                { analyticsLocations: T } = (0, c.Ay)(o.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
                { data: N } = (0, u.YY)(n),
                h = (0, s.JC)(N),
                { themeType: C } = (0, m.E)(),
                v = C === g.d.MODAL || C === g.d.MODAL_V2,
                y = (0, A.o)(E?.application_id ?? n),
                S = h && v && null != N && !y,
                j = S ? [i.M.CLOUD_PLAY_NEW_BADGE] : [],
                [O] = (0, d.kn)(j);
            return S
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(x.A, { className: _.Xl }),
                          (0, l.jsxs)("div", {
                              className: _.DK,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: _.tJ,
                                      children: [
                                          O === i.M.CLOUD_PLAY_NEW_BADGE &&
                                              (0, l.jsx)(a.E, { type: "new", variant: "primary" }),
                                          (0, l.jsx)(r.E, {
                                              variant: "body-xs/medium",
                                              children: p.intl.string(p.t.IQjdmV),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(f.A, { application: N, onAction: e, onClose: I, analyticsLocations: T }),
                              ],
                          }),
                      ],
                  })
                : null;
        },
    },
);
