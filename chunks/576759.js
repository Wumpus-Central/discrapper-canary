n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(704215),
    a = n(692547),
    o = n(481060),
    s = n(206074),
    l = n(100527),
    c = n(906732),
    u = n(728345),
    d = n(243778),
    f = n(584057),
    p = n(483517),
    _ = n(652853),
    m = n(994102),
    h = n(671955),
    g = n(388032),
    E = n(114004);
function b(e) {
    var t;
    let { applicationId: n, onAction: b, onClose: y, activity: O } = e,
        { analyticsLocations: v } = (0, c.ZP)(l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: S } = (0, u.IX)(n),
        I = (0, s.q)(S),
        { themeType: T } = (0, _.z)(),
        A = T === h.l.MODAL || T === h.l.MODAL_V2,
        C = (0, f.L)(null != (t = null == O ? void 0 : O.application_id) ? t : n),
        N = I && A && null != S && !C,
        P = N ? [i.z.CLOUD_PLAY_NEW_BADGE] : [],
        [R] = (0, d.US)(P);
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(p.Z, { className: E.cloudPlayDivider }),
                  (0, r.jsxs)("div", {
                      className: E.cloudPlaySection,
                      children: [
                          (0, r.jsxs)("div", {
                              className: E.cloudPlaySectionTextContainer,
                              children: [
                                  R === i.z.CLOUD_PLAY_NEW_BADGE &&
                                      (0, r.jsx)(o.IGR, {
                                          text: g.intl.string(g.t.y2b7CA),
                                          color: a.Z.colors.BG_BRAND.css,
                                      }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      children: g.intl.string(g.t.IQjdmV),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(m.Z, {
                              application: S,
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
