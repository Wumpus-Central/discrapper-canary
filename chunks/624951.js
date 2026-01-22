n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(554146),
    a = n(827734),
    s = n(397927),
    o = n(359549),
    l = n(793574),
    c = n(688810),
    u = n(627363),
    d = n(379848),
    f = n(308335),
    p = n(21241),
    _ = n(939496),
    h = n(985629),
    m = n(996988),
    g = n(985018),
    E = n(468115);

function b(e) {
    var t;
    let { applicationId: n, onAction: b, onClose: y, activity: O } = e,
        { analyticsLocations: A } = (0, c.Ay)(l.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: v } = (0, u.YY)(n),
        S = (0, o.J)(v),
        { themeType: I } = (0, _.E)(),
        T = I === m.d.MODAL || I === m.d.MODAL_V2,
        C = (0, f.o)(null != (t = null == O ? void 0 : O.application_id) ? t : n),
        N = S && T && null != v && !C,
        R = N ? [i.M.CLOUD_PLAY_NEW_BADGE] : [],
        [w] = (0, d.kn)(R);
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(p.A, {
                      className: E.Xl,
                  }),
                  (0, r.jsxs)("div", {
                      className: E.DK,
                      children: [
                          (0, r.jsxs)("div", {
                              className: E.tJ,
                              children: [
                                  w === i.M.CLOUD_PLAY_NEW_BADGE &&
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
                          (0, r.jsx)(h.A, {
                              application: v,
                              onAction: b,
                              onClose: y,
                              analyticsLocations: A,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
