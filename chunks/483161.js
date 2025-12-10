n.d(e, { z: () => f });
var i = n(54381),
    l = n(657707),
    s = n(442837),
    u = n(481060),
    r = n(778825),
    a = n(398140),
    o = n(564344),
    c = n(509613),
    d = n(970013),
    S = n(518950),
    T = n(25990),
    E = n(594174),
    g = n(313789),
    I = n(620163),
    _ = n(726985),
    O = n(388032),
    N = n(88651);
let A = (0, c.x1)(g.n.PROFILE_PANE, {
        StronglyDiscouragedCustomComponent: o.Z,
        buildLayout: () => [],
    }),
    C = (0, c.wf)(g.n.PROFILE_PANEL, {
        useTitle: () => O.intl.string(O.t["vi7f+q"]),
        notice: {
            stores: [r.Z, T.Z],
            element: a.Z,
        },
        buildLayout: () => [A],
    }),
    f = (0, c.m7)(g.n.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => O.intl.string(O.t["vi7f+q"]),
        getLegacySearchKey: () => _.s6.PROFILE_CUSTOMIZATION,
        icon: l.tBG,
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: r } = (0, S.Z)({
                    userId: null == e ? void 0 : e.id,
                    size: u.EFr.SIZE_48,
                });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: N.profileCustomizationTab,
                      children: [
                          (0, i.jsx)(u.qEK, {
                              src: n,
                              avatarDecoration: r,
                              size: u.EFr.SIZE_48,
                              "aria-label": O.intl.string(O.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: N.textContainer,
                              children: [
                                  (0, i.jsx)(u.Text, {
                                      color: "header-primary",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: N.editProfilesRow,
                                      children: [
                                          (0, i.jsx)(u.Text, {
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
            type: d.W.BADGE_NEW,
            getDismissibleContentTypes: I.OF,
            stronglyDiscouragedBadgeComponent: I.W8,
        },
        buildLayout: () => [C],
    });
