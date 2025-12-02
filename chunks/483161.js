n.d(e, { z: () => b });
var i = n(54381),
    r = n(657707),
    l = n(442837),
    s = n(481060),
    u = n(778825),
    a = n(398140),
    o = n(564344),
    c = n(509613),
    d = n(28682),
    E = n(518950),
    S = n(25990),
    T = n(594174),
    I = n(313789),
    g = n(620163),
    O = n(726985),
    _ = n(388032),
    N = n(88651);
let f = (0, c.x1)(I.n.PROFILE_PANE, {
        buildLayout: () => [],
        render: o.Z,
    }),
    A = (0, c.wf)(I.n.PROFILE_PANEL, {
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        buildLayout: () => [f],
        notice: {
            stores: [u.Z, S.Z],
            element: a.Z,
        },
    }),
    b = (0, c.m7)(I.n.PROFILE_SIDEBAR_ITEM, {
        icon: r.tBG,
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        getLegacySearchKey: () => O.s6.PROFILE_CUSTOMIZATION,
        buildLayout: () => [A],
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, l.e7)([T.default], () => T.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: u } = (0, E.Z)({
                    userId: null == e ? void 0 : e.id,
                    size: s.EFr.SIZE_48,
                });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: N.profileCustomizationTab,
                      children: [
                          (0, i.jsx)(s.qEK, {
                              src: n,
                              avatarDecoration: u,
                              size: s.EFr.SIZE_48,
                              "aria-label": _.intl.string(_.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: N.textContainer,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      color: "header-primary",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: N.editProfilesRow,
                                      children: [
                                          (0, i.jsx)(s.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: _.intl.string(_.t.Ip9nBS),
                                          }),
                                          (0, i.jsx)(r.vdY, {
                                              size: "xxs",
                                              color: "currentColor",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        trailing: {
            type: d.PU.BADGE_NEW,
            getDismissibleContentTypes: g.OF,
            badgeComponent: g.W8,
        },
    });
