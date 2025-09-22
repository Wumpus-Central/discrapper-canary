n.d(t, { Z: () => S });
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
    g = n(518950),
    O = n(25990),
    y = n(594174),
    E = n(313789),
    b = n(620163),
    p = n(726985),
    T = n(388032),
    v = n(88651);
let N = (0, d.x1)(E.n.PROFILE_PANE, {
        getLayout: () => [],
        render: u.Z,
    }),
    S = (0, d.wf)(E.n.PROFILE_PANEL, {
        icon: i.tBG,
        useTitle: () => T.intl.string(T.t["vi7f+v"]),
        getLayout: () => [N],
        notice: {
            stores: [s.Z, O.Z],
            element: a.Z,
        },
        trailing: {
            type: f.PU.BADGE_NEW,
            dismissibleContentTypes: (0, b.OF)(),
            badgeComponent: b.W8,
        },
        legacySearchKey: p.s6.PROFILE_CUSTOMIZATION,
        stronglyDiscouragedCustomTab: (e) => {
            var t;
            let { active: n, onClick: s } = e,
                a = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
                { avatarSrc: u, avatarDecorationSrc: d } = (0, g.Z)({
                    userId: null == a ? void 0 : a.id,
                    size: o.EFr.SIZE_48,
                });
            return null == a
                ? null
                : (0, r.jsx)(c.C, {
                      onClick: s,
                      active: n,
                      children: (0, r.jsxs)("div", {
                          className: v.profileCustomizationTab,
                          children: [
                              (0, r.jsx)(o.qEK, {
                                  src: u,
                                  avatarDecoration: d,
                                  size: o.EFr.SIZE_48,
                                  "aria-label": T.intl.string(T.t.lqaIxM),
                              }),
                              (0, r.jsxs)("div", {
                                  className: v.textContainer,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          color: "header-primary",
                                          variant: "text-md/medium",
                                          lineClamp: 1,
                                          children: null != (t = a.globalName) ? t : a.username,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: v.editProfilesRow,
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "currentColor",
                                                  children: T.intl.string(T.t.Ip9nBQ),
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
