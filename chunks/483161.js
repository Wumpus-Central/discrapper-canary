n.d(e, { z: () => b });
var i = n(54381),
    l = n(657707),
    s = n(442837),
    u = n(481060),
    r = n(570140),
    a = n(809206),
    o = n(230711),
    T = n(18438),
    S = n(778825),
    c = n(398140),
    E = n(564344),
    d = n(509613),
    _ = n(970013),
    g = n(518950),
    I = n(25990),
    N = n(594174),
    A = n(313789),
    O = n(526665),
    C = n(620163),
    f = n(97551),
    P = n(726985),
    R = n(981631),
    L = n(388032),
    p = n(897192);
let m = (0, d.wf)(A.n.PROFILE_PANEL, {
        usePredicate: () => !(0, O.gN)("LegacyProfilePanel"),
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        notice: {
            stores: [S.Z, I.Z],
            element: c.Z,
        },
        initialize: () => () =>
            r.Z.wait(() => {
                (0, T.It)(), (0, a.P6)(), o.Z.clearSubsection(R.oAB.PROFILE_CUSTOMIZATION);
            }),
        StronglyDiscouragedCustomComponent: E.Z,
        buildLayout: () => [],
    }),
    D = (0, d.wf)(A.n.PROFILE_PANEL, {
        usePredicate: () => (0, O.gN)("ProfilePanel"),
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        notice: {
            stores: [S.Z, I.Z],
            element: c.Z,
        },
        initialize: () => () =>
            r.Z.wait(() => {
                (0, T.It)(), (0, a.P6)(), o.Z.clearSubsection(R.oAB.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [f.i],
    }),
    b = (0, d.m7)(A.n.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        getLegacySearchKey: () => ((0, O.Gl)("ProfilePanel") ? void 0 : P.s6.PROFILE_CUSTOMIZATION),
        icon: l.tBG,
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
                { avatarSrc: n, avatarDecorationSrc: r } = (0, g.Z)({
                    userId: null == e ? void 0 : e.id,
                    size: u.EFr.SIZE_48,
                });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: p.profileCustomizationTab,
                      children: [
                          (0, i.jsx)(u.qEK, {
                              src: n,
                              avatarDecoration: r,
                              size: u.EFr.SIZE_48,
                              "aria-label": L.intl.string(L.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: p.textContainer,
                              children: [
                                  (0, i.jsx)(u.Text, {
                                      color: "text-strong",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: p.editProfilesRow,
                                      children: [
                                          (0, i.jsx)(u.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: L.intl.string(L.t.Ip9nBS),
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
            type: _.W.BADGE_NEW,
            getDismissibleContentTypes: C.OF,
        },
        buildLayout: () => ((0, O.Gl)("ProfilePanel") ? [D] : [m]),
    });
