n.d(e, { z: () => L });
var i = n(951288),
    l = n(657707),
    u = n(442837),
    r = n(481060),
    s = n(778825),
    a = n(398140),
    o = n(564344),
    c = n(509613),
    E = n(28682),
    d = n(518950),
    T = n(25990),
    I = n(594174),
    O = n(313789),
    A = n(620163),
    S = n(726985),
    y = n(388032),
    _ = n(88651);
let g = (0, c.x1)(O.n.PROFILE_PANE, {
        buildLayout: () => [],
        render: o.Z,
    }),
    b = (0, c.wf)(O.n.PROFILE_PANEL, {
        useTitle: () => y.intl.string(y.t["vi7f+v"]),
        buildLayout: () => [g],
        notice: {
            stores: [s.Z, T.Z],
            element: a.Z,
        },
    }),
    L = (0, c.m7)(O.n.PROFILE_SIDEBAR_ITEM, {
        icon: l.tBG,
        useTitle: () => y.intl.string(y.t["vi7f+v"]),
        legacySearchKey: S.s6.PROFILE_CUSTOMIZATION,
        buildLayout: () => [b],
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, u.e7)([I.default], () => I.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: s } = (0, d.Z)({
                    userId: null == e ? void 0 : e.id,
                    size: r.EFr.SIZE_48,
                });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: _.profileCustomizationTab,
                      children: [
                          (0, i.jsx)(r.qEK, {
                              src: n,
                              avatarDecoration: s,
                              size: r.EFr.SIZE_48,
                              "aria-label": y.intl.string(y.t.lqaIxM),
                          }),
                          (0, i.jsxs)("div", {
                              className: _.textContainer,
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      color: "header-primary",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: _.editProfilesRow,
                                      children: [
                                          (0, i.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              children: y.intl.string(y.t.Ip9nBQ),
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
            dismissibleContentTypes: (0, A.OF)(),
            badgeComponent: A.W8,
        },
    });
