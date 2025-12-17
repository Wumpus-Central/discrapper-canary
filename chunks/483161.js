n.d(e, { z: () => C });
var i = n(54381),
    l = n(657707),
    s = n(442837),
    u = n(481060),
    r = n(778825),
    a = n(398140),
    o = n(564344),
    S = n(509613),
    T = n(970013),
    c = n(518950),
    E = n(25990),
    d = n(594174),
    g = n(313789),
    _ = n(620163),
    I = n(726985),
    N = n(388032),
    A = n(897192);
let O = (0, S.wf)(g.n.PROFILE_PANEL, {
        useTitle: () => N.intl.string(N.t["vi7f+q"]),
        notice: {
            stores: [r.Z, E.Z],
            element: a.Z,
        },
        StronglyDiscouragedCustomComponent: o.Z,
        buildLayout: () => [],
    }),
    C = (0, S.m7)(g.n.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => N.intl.string(N.t["vi7f+q"]),
        getLegacySearchKey: () => I.s6.PROFILE_CUSTOMIZATION,
        icon: l.tBG,
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: r } = (0, c.Z)({
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
                              avatarDecoration: r,
                              size: u.EFr.SIZE_48,
                              "aria-label": N.intl.string(N.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: A.textContainer,
                              children: [
                                  (0, i.jsx)(u.Text, {
                                      color: "text-strong",
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
                                              children: N.intl.string(N.t.Ip9nBS),
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
            type: T.W.BADGE_NEW,
            getDismissibleContentTypes: _.OF,
        },
        buildLayout: () => [O],
    });
