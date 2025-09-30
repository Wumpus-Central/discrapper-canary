n.d(t, { Z: () => j });
var r = n(951288),
    i = n(657707),
    l = n(442837),
    o = n(481060),
    s = n(778825),
    a = n(398140),
    u = n(564344),
    c = n(854014),
    d = n(509613),
    f = n(28682),
    b = n(518950),
    y = n(25990),
    O = n(594174),
    g = n(313789),
    E = n(620163),
    p = n(726985),
    v = n(388032),
    T = n(88651);
let S = (0, d.x1)(g.n.PROFILE_PANE, {
        buildLayout: () => [],
        render: u.Z,
    }),
    j = (0, d.wf)(g.n.PROFILE_PANEL, {
        icon: i.tBG,
        useTitle: () => v.intl.string(v.t["vi7f+v"]),
        buildLayout: () => [S],
        notice: {
            stores: [s.Z, y.Z],
            element: a.Z,
        },
        trailing: {
            type: f.PU.BADGE_NEW,
            dismissibleContentTypes: (0, E.OF)(),
            badgeComponent: E.W8,
        },
        legacySearchKey: p.s6.PROFILE_CUSTOMIZATION,
        stronglyDiscouragedCustomTab: (e) => {
            var t;
            let { active: n, onClick: s } = e,
                a = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
                { avatarSrc: u, avatarDecorationSrc: d } = (0, b.Z)({
                    userId: null == a ? void 0 : a.id,
                    size: o.EFr.SIZE_48,
                });
            return null == a
                ? null
                : (0, r.jsx)(c.C, {
                      onClick: s,
                      active: n,
                      children: (0, r.jsxs)("div", {
                          className: T.profileCustomizationTab,
                          children: [
                              (0, r.jsx)(o.qEK, {
                                  src: u,
                                  avatarDecoration: d,
                                  size: o.EFr.SIZE_48,
                                  "aria-label": v.intl.string(v.t.lqaIxM),
                              }),
                              (0, r.jsxs)("div", {
                                  className: T.textContainer,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          color: "header-primary",
                                          variant: "text-md/medium",
                                          lineClamp: 1,
                                          children: null != (t = a.globalName) ? t : a.username,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: T.editProfilesRow,
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "currentColor",
                                                  children: v.intl.string(v.t.Ip9nBQ),
                                              }),
                                              (0, r.jsx)(i.vdY, {
                                                  size: "xxs",
                                                  color: "currentColor",
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  });
        },
    });
