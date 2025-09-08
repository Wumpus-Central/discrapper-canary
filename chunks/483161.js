n.d(t, { Z: () => T });
var r = n(951288),
    i = n(657707),
    l = n(442837),
    o = n(481060),
    s = n(778825),
    a = n(398140),
    u = n(564344),
    c = n(854014),
    d = n(509613),
    g = n(518950),
    f = n(25990),
    y = n(594174),
    v = n(620163),
    O = n(869235),
    E = n(726985),
    b = n(388032),
    N = n(88651);
let p = (0, d.x1)(O.t.PROFILE_PANE, {
        getLayout: () => [],
        render: u.Z,
    }),
    T = (0, d.wf)(O.t.PROFILE_PANEL, {
        icon: i.tBG,
        useTitle: () => b.intl.string(b.t["vi7f+v"]),
        getLayout: () => [p],
        notice: {
            stores: [s.Z, f.Z],
            element: a.Z,
        },
        trailing: {
            newIndicatorDismissibleContentTypes: (0, v.OF)(),
            newIndicatorBadgeOverride: (0, r.jsx)(v.W8, {}),
        },
        legacySearchKey: E.s6.PROFILE_CUSTOMIZATION,
        stronglyDiscouragedCustomTab: (e) => {
            var t;
            let { active: n, onClick: s } = e,
                a = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
                { avatarSrc: u, avatarDecorationSrc: d } = (0, g.Z)({
                    userId: null == a ? void 0 : a.id,
                    size: o.EFr.SIZE_48,
                });
            return null == a
                ? null
                : (0, r.jsx)(c.C, {
                      onClick: s,
                      active: n,
                      children: (0, r.jsxs)("div", {
                          className: N.profileCustomizationTab,
                          children: [
                              (0, r.jsx)(o.qEK, {
                                  src: u,
                                  avatarDecoration: d,
                                  size: o.EFr.SIZE_48,
                                  "aria-label": b.intl.string(b.t.lqaIxM),
                              }),
                              (0, r.jsxs)("div", {
                                  className: N.textContainer,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          color: "header-primary",
                                          variant: "text-md/medium",
                                          lineClamp: 1,
                                          children: null != (t = a.globalName) ? t : a.username,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: N.editProfilesRow,
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "currentColor",
                                                  children: b.intl.string(b.t.Ip9nBQ),
                                              }),
                                              (0, r.jsx)(i.vdY, {
                                                  size: "xxs",
                                                  color: "currentColor",
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  });
        },
    });
