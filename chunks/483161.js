n.d(e, { z: () => _ });
var i = n(951288),
    l = n(657707),
    r = n(442837),
    u = n(481060),
    s = n(778825),
    a = n(398140),
    o = n(564344),
    c = n(509613),
    d = n(28682),
    E = n(518950),
    O = n(25990),
    T = n(594174),
    S = n(313789),
    g = n(620163),
    I = n(726985),
    y = n(388032),
    b = n(88651);
let A = (0, c.x1)(S.n.PROFILE_PANE, {
        buildLayout: () => [],
        render: o.Z,
    }),
    f = (0, c.wf)(S.n.PROFILE_PANEL, {
        useTitle: () => y.intl.string(y.t["vi7f+q"]),
        buildLayout: () => [A],
        notice: {
            stores: [s.Z, O.Z],
            element: a.Z,
        },
    }),
    _ = (0, c.m7)(S.n.PROFILE_SIDEBAR_ITEM, {
        icon: l.tBG,
        useTitle: () => y.intl.string(y.t["vi7f+q"]),
        legacySearchKey: I.s6.PROFILE_CUSTOMIZATION,
        buildLayout: () => [f],
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: s } = (0, E.Z)({
                    userId: null == e ? void 0 : e.id,
                    size: u.EFr.SIZE_48,
                });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: b.profileCustomizationTab,
                      children: [
                          (0, i.jsx)(u.qEK, {
                              src: n,
                              avatarDecoration: s,
                              size: u.EFr.SIZE_48,
                              "aria-label": y.intl.string(y.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: b.textContainer,
                              children: [
                                  (0, i.jsx)(u.Text, {
                                      color: "header-primary",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: b.editProfilesRow,
                                      children: [
                                          (0, i.jsx)(u.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: y.intl.string(y.t.Ip9nBS),
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
