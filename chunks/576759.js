n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(704215),
    a = n(481060),
    o = n(206074),
    s = n(100527),
    l = n(906732),
    c = n(728345),
    u = n(377171),
    d = n(243778),
    f = n(584057),
    _ = n(483517),
    p = n(652853),
    h = n(994102),
    m = n(671955),
    g = n(388032),
    E = n(114004);
function b(e) {
    var t;
    let { applicationId: n, onAction: b, onClose: y, activity: O } = e,
        { analyticsLocations: v } = (0, l.ZP)(s.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: I } = (0, c.IX)(n),
        T = (0, o.q)(I),
        { themeType: S } = (0, p.z)(),
        A = S === m.l.MODAL || S === m.l.MODAL_V2,
        C = (0, f.L)(null != (t = null == O ? void 0 : O.application_id) ? t : n),
        N = T && A && null != I && !C,
        R = N ? [i.z.CLOUD_PLAY_NEW_BADGE] : [],
        [P] = (0, d.US)(R);
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(_.Z, { className: E.cloudPlayDivider }),
                  (0, r.jsxs)("div", {
                      className: E.cloudPlaySection,
                      children: [
                          (0, r.jsxs)("div", {
                              className: E.cloudPlaySectionTextContainer,
                              children: [
                                  P === i.z.CLOUD_PLAY_NEW_BADGE &&
                                      (0, r.jsx)(a.IGR, {
                                          text: g.intl.string(g.t.y2b7CA),
                                          color: u.Z.BG_BRAND,
                                      }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-xs/medium",
                                      children: g.intl.string(g.t.IQjdmV),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(h.Z, {
                              application: I,
                              onAction: b,
                              onClose: y,
                              analyticsLocations: v,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
