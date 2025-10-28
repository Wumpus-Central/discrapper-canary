n.d(e, { z: () => b });
var i = n(951288),
    l = n(657707),
    u = n(442837),
    r = n(481060),
    s = n(778825),
    o = n(398140),
    a = n(564344),
    c = n(509613),
    E = n(28682),
    d = n(518950),
    T = n(25990),
    I = n(594174),
    O = n(313789),
    y = n(620163),
    S = n(726985),
    A = n(388032),
    g = n(88651);
let _ = (0, c.x1)(O.n.PROFILE_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    L = (0, c.wf)(O.n.PROFILE_PANEL, {
        useTitle: () => A.intl.string(A.t["vi7f+q"]),
        buildLayout: () => [_],
        notice: {
            stores: [s.Z, T.Z],
            element: o.Z,
        },
    }),
    b = (0, c.m7)(O.n.PROFILE_SIDEBAR_ITEM, {
        icon: l.tBG,
        useTitle: () => A.intl.string(A.t["vi7f+q"]),
        legacySearchKey: S.s6.PROFILE_CUSTOMIZATION,
        buildLayout: () => [L],
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
                      className: g.profileCustomizationTab,
                      children: [
                          (0, i.jsx)(r.qEK, {
                              src: n,
                              avatarDecoration: s,
                              size: r.EFr.SIZE_48,
                              "aria-label": A.intl.string(A.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: g.textContainer,
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      color: "header-primary",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: g.editProfilesRow,
                                      children: [
                                          (0, i.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: A.intl.string(A.t.Ip9nBS),
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
            getDismissibleContentTypes: y.OF,
            badgeComponent: y.W8,
        },
    });
