n.d(e, { z: () => Z });
var i = n(54381),
    l = n(657707),
    s = n(442837),
    r = n(481060),
    u = n(778825),
    a = n(398140),
    o = n(564344),
    c = n(509613),
    d = n(28682),
    E = n(518950),
    S = n(25990),
    I = n(594174),
    T = n(313789),
    g = n(620163),
    _ = n(726985),
    O = n(388032),
    N = n(88651);
let A = (0, c.x1)(T.n.PROFILE_PANE, {
        buildLayout: () => [],
        render: o.Z,
    }),
    f = (0, c.wf)(T.n.PROFILE_PANEL, {
        useTitle: () => O.intl.string(O.t["vi7f+q"]),
        buildLayout: () => [A],
        notice: {
            stores: [u.Z, S.Z],
            element: a.Z,
        },
    }),
    Z = (0, c.m7)(T.n.PROFILE_SIDEBAR_ITEM, {
        icon: l.tBG,
        useTitle: () => O.intl.string(O.t["vi7f+q"]),
        getLegacySearchKey: () => _.s6.PROFILE_CUSTOMIZATION,
        buildLayout: () => [f],
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, s.e7)([I.default], () => I.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: u } = (0, E.Z)({
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
                              avatarDecoration: u,
                              size: r.EFr.SIZE_48,
                              "aria-label": O.intl.string(O.t.lqaIxI),
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
                                              children: O.intl.string(O.t.Ip9nBS),
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
            type: d.PU.BADGE_NEW,
            getDismissibleContentTypes: g.OF,
            badgeComponent: g.W8,
        },
    });
