n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(704215),
    a = n(755721),
    o = n(481060),
    s = n(206074),
    l = n(100527),
    c = n(906732),
    u = n(728345),
    d = n(377171),
    f = n(243778),
    _ = n(584057),
    p = n(483517),
    h = n(652853),
    m = n(994102),
    g = n(671955),
    E = n(388032),
    b = n(230759);
function y(e) {
    let { applicationId: t, onAction: n, onClose: y, activity: O } = e,
        { analyticsLocations: v } = (0, c.ZP)(l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: I } = (0, u.IX)(t),
        T = (0, s.q)(I, l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { themeType: S } = (0, h.z)(),
        A = S === g.l.MODAL || S === g.l.MODAL_V2,
        C = (0, _.L)(O),
        N = T && A && null != I && !C,
        R = N ? [i.z.CLOUD_PLAY_NEW_BADGE] : [],
        [P] = (0, f.US)(R);
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(p.Z, { className: b.cloudPlayDivider }),
                  (0, r.jsxs)("div", {
                      className: b.cloudPlaySection,
                      children: [
                          (0, r.jsxs)("div", {
                              className: b.cloudPlaySectionTextContainer,
                              children: [
                                  P === i.z.CLOUD_PLAY_NEW_BADGE &&
                                      (0, r.jsx)(o.IGR, {
                                          text: E.intl.string(E.t.y2b7CA),
                                          color: d.Z.BG_BRAND,
                                      }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      children: E.intl.string(E.t.IQjdmZ),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(m.Z, {
                              application: I,
                              onAction: n,
                              onClose: y,
                              size: a.Ph.SMALL,
                              analyticsLocations: v,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
