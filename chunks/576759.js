n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
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
    E = n(230759);
function b(e) {
    let { applicationId: t, onAction: n, onClose: b, activity: y } = e,
        { analyticsLocations: O } = (0, l.ZP)(s.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: v } = (0, c.IX)(t),
        I = (0, o.q)(v, s.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { themeType: T } = (0, p.z)(),
        S = T === m.l.MODAL || T === m.l.MODAL_V2,
        A = (0, f.L)(y),
        C = I && S && null != v && !A,
        N = C ? [i.z.CLOUD_PLAY_NEW_BADGE] : [],
        [R] = (0, d.US)(N);
    return C
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(_.Z, { className: E.cloudPlayDivider }),
                  (0, r.jsxs)("div", {
                      className: E.cloudPlaySection,
                      children: [
                          (0, r.jsxs)("div", {
                              className: E.cloudPlaySectionTextContainer,
                              children: [
                                  R === i.z.CLOUD_PLAY_NEW_BADGE &&
                                      (0, r.jsx)(a.IGR, {
                                          text: g.intl.string(g.t.y2b7CA),
                                          color: u.Z.BG_BRAND,
                                      }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-xs/medium",
                                      children: g.intl.string(g.t.IQjdmZ),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(h.Z, {
                              application: v,
                              onAction: n,
                              onClose: b,
                              analyticsLocations: O,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
