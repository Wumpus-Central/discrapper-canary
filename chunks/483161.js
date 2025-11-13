n.d(e, { z: () => Z });
var i = n(951288),
    l = n(657707),
    u = n(442837),
    r = n(481060),
    s = n(778825),
    a = n(398140),
    o = n(564344),
    c = n(509613),
    E = n(28682),
    S = n(518950),
    d = n(25990),
    T = n(594174),
    I = n(313789),
    O = n(620163),
    g = n(726985),
    _ = n(388032),
    N = n(88651);
let A = (0, c.x1)(I.n.PROFILE_PANE, {
        buildLayout: () => [],
        render: o.Z,
    }),
    f = (0, c.wf)(I.n.PROFILE_PANEL, {
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        buildLayout: () => [A],
        notice: {
            stores: [s.Z, d.Z],
            element: a.Z,
        },
    }),
    Z = (0, c.m7)(I.n.PROFILE_SIDEBAR_ITEM, {
        icon: l.tBG,
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        getLegacySearchKey: () => g.s6.PROFILE_CUSTOMIZATION,
        buildLayout: () => [f],
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, u.e7)([T.default], () => T.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: s } = (0, S.Z)({
                    userId: null == e ? void 0 : e.id,
                    size: r.EFr.SIZE_48,
                });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: N.profileCustomizationTab,
                      children: [
                          (0, i.jsx)(r.qEK, {
                              src: n,
                              avatarDecoration: s,
                              size: r.EFr.SIZE_48,
                              "aria-label": _.intl.string(_.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: N.textContainer,
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      color: "header-primary",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: N.editProfilesRow,
                                      children: [
                                          (0, i.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: _.intl.string(_.t.Ip9nBS),
                                          }),
                                          (0, i.jsx)(l.vdY, {
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
            type: E.PU.BADGE_NEW,
            getDismissibleContentTypes: O.OF,
            badgeComponent: O.W8,
        },
    });
