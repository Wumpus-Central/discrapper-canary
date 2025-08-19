n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(704215),
    a = n(755721),
    o = n(481060),
    s = n(206074),
    l = n(728345),
    c = n(377171),
    u = n(243778),
    d = n(483517),
    f = n(652853),
    _ = n(994102),
    p = n(671955),
    h = n(388032),
    m = n(114004);
function g(e) {
    let { applicationId: t, onAction: n, onClose: g } = e,
        { data: E } = (0, l.IX)(t),
        b = (0, s.q)(E, "UserProfileActivityCard"),
        { themeType: y } = (0, f.z)(),
        O = y === p.l.MODAL || y === p.l.MODAL_V2,
        v = b && O && null != E,
        I = v ? [i.z.CLOUD_PLAY_NEW_BADGE] : [],
        [T] = (0, u.US)(I);
    return v
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.Z, { className: m.cloudPlayDivider }),
                  (0, r.jsxs)("div", {
                      className: m.cloudPlaySection,
                      children: [
                          (0, r.jsxs)("div", {
                              className: m.cloudPlaySectionTextContainer,
                              children: [
                                  T === i.z.CLOUD_PLAY_NEW_BADGE &&
                                      (0, r.jsx)(o.IGR, {
                                          text: h.intl.string(h.t.y2b7CA),
                                          color: c.Z.BG_BRAND,
                                      }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      children: h.intl.string(h.t.IQjdmZ),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(_.Z, {
                              application: E,
                              onAction: n,
                              onClose: g,
                              size: a.Ph.SMALL,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
