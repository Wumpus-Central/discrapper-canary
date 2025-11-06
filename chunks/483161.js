n.d(e, { z: () => b });
var i = n(951288),
    l = n(657707),
    r = n(442837),
    u = n(481060),
    s = n(778825),
    a = n(398140),
    o = n(564344),
    c = n(509613),
    E = n(28682),
    d = n(518950),
    S = n(25990),
    T = n(594174),
    O = n(313789),
    g = n(620163),
    I = n(726985),
    _ = n(388032),
    A = n(88651);
let f = (0, c.x1)(O.n.PROFILE_PANE, {
        buildLayout: () => [],
        render: o.Z,
    }),
    N = (0, c.wf)(O.n.PROFILE_PANEL, {
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        buildLayout: () => [f],
        notice: {
            stores: [s.Z, S.Z],
            element: a.Z,
        },
    }),
    b = (0, c.m7)(O.n.PROFILE_SIDEBAR_ITEM, {
        icon: l.tBG,
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        getLegacySearchKey: () => I.s6.PROFILE_CUSTOMIZATION,
        buildLayout: () => [N],
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: s } = (0, d.Z)({
                    userId: null == e ? void 0 : e.id,
                    size: u.EFr.SIZE_48,
                });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: A.profileCustomizationTab,
                      children: [
                          (0, i.jsx)(u.qEK, {
                              src: n,
                              avatarDecoration: s,
                              size: u.EFr.SIZE_48,
                              "aria-label": _.intl.string(_.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: A.textContainer,
                              children: [
                                  (0, i.jsx)(u.Text, {
                                      color: "header-primary",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: A.editProfilesRow,
                                      children: [
                                          (0, i.jsx)(u.Text, {
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
            getDismissibleContentTypes: g.OF,
            badgeComponent: g.W8,
        },
    });
