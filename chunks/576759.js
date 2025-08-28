n.d(t, { Z: () => b }), n(388685);
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
    _ = n(483517),
    p = n(652853),
    h = n(994102),
    m = n(671955),
    g = n(388032),
    E = n(114004);
function b(e) {
    let { applicationId: t, onAction: n, onClose: b } = e,
        { analyticsLocations: y } = (0, c.ZP)(l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: O } = (0, u.IX)(t),
        v = (0, s.q)(O, l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { themeType: I } = (0, p.z)(),
        T = I === m.l.MODAL || I === m.l.MODAL_V2,
        S = v && T && null != O,
        A = S ? [i.z.CLOUD_PLAY_NEW_BADGE] : [],
        [C] = (0, f.US)(A);
    return S
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(_.Z, { className: E.cloudPlayDivider }),
                  (0, r.jsxs)("div", {
                      className: E.cloudPlaySection,
                      children: [
                          (0, r.jsxs)("div", {
                              className: E.cloudPlaySectionTextContainer,
                              children: [
                                  C === i.z.CLOUD_PLAY_NEW_BADGE &&
                                      (0, r.jsx)(o.IGR, {
                                          text: g.intl.string(g.t.y2b7CA),
                                          color: d.Z.BG_BRAND,
                                      }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      children: g.intl.string(g.t.IQjdmZ),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(h.Z, {
                              application: O,
                              onAction: n,
                              onClose: b,
                              size: a.Ph.SMALL,
                              analyticsLocations: y,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
