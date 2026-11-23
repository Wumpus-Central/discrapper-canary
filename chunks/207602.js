var t = n(477900),
    a = n(582128),
    r = n(503698),
    u = n.n(r),
    i = n(855986),
    s = n(834730),
    o = n(237528),
    c = n(97808),
    d = n(778712),
    f = n(939249),
    p = n(463930),
    g = n(609425),
    y = n(73392),
    A = n(967144),
    m = n(342296),
    h = n(696451),
    I = n(427262),
    v = n(502472),
    _ = n(104299),
    b = n(694185),
    j = n(191850),
    C = n(792996),
    x = n(83246);
function S(l) {
    return l.getCoverImageURL(864) ?? null;
}
n.d(
    e,
    {},
    {
        HP: function (l) {
            let { project: e, guildId: n } = l,
                r = a.useRef(null),
                { creator: u } = (0, v.yv)(e),
                o = u?.id,
                _ = (0, i.bG)([h.Ay], () => (null != n && null != o ? h.Ay.getMember(n, o) : null), [n, o]),
                b = (0, A.gn)(n ?? void 0, o, _?.colorStrings ?? null),
                S = (0, y.a)({ displayNameStyles: (0, g.A)({ userId: o, guildId: n }) });
            return null == u
                ? null
                : (0, t.jsxs)("div", {
                      className: x.xL,
                      children: [
                          (0, t.jsx)(c.eu, { src: u.getAvatarURL(n, 48), size: d._3.SIZE_24, "aria-hidden": !0 }),
                          (0, t.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              lineClamp: 1,
                              children: C.intl.format(j.default.ThorDA, {
                                  name: (0, t.jsx)(m.A, {
                                      targetElementRef: r,
                                      user: u,
                                      guildId: n ?? void 0,
                                      roleId: _?.colorRoleId,
                                      clickTrap: !0,
                                      children: (l) =>
                                          (0, t.jsx)(f.D, {
                                              ...l,
                                              innerRef: r,
                                              tag: "span",
                                              className: x.Sq,
                                              children: (0, t.jsx)(p.g, {
                                                  name: _?.nick ?? (0, I.mG)(u),
                                                  colorString: _?.colorString ?? null,
                                                  colorStrings: b,
                                                  displayNameStylesFont: S,
                                                  nameTextClassName: x.ph,
                                                  displayInline: !0,
                                              }),
                                          }),
                                  }),
                              }),
                          }),
                      ],
                  });
        },
        PJ: function (l) {
            let { application: e, descriptionLineClamp: n } = l,
                a = e.getIconURL(72),
                r = e.description?.trim() ?? "";
            return (0, t.jsxs)("div", {
                className: x.D_,
                children: [
                    null != a
                        ? (0, t.jsx)("img", { alt: "", src: a, className: u()(x.Kk, x.Dp) })
                        : (0, t.jsx)(_.A, { applicationId: e.id, name: e.name, glyphSize: 20, className: x.Kk }),
                    (0, t.jsxs)("div", {
                        className: x.zH,
                        children: [
                            (0, t.jsx)(s.E, {
                                variant: "body-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: e.name,
                            }),
                            r.length > 0
                                ? (0, t.jsx)(s.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: n,
                                      children: r,
                                  })
                                : null,
                        ],
                    }),
                ],
            });
        },
        go: function (l) {
            let { application: e, className: n } = l,
                a = S(e);
            return null == a ? null : (0, t.jsx)("img", { alt: "", src: a, className: u()(x.Iv, n) });
        },
        r8: function (l) {
            let { project: e } = l,
                n = (0, b.nX)(e.supported_surfaces ?? []);
            return 0 === n.length
                ? null
                : (0, t.jsx)("ul", {
                      className: x.XP,
                      "aria-label": C.intl.string(j.default["cF++B3"]),
                      children: n.map((l) => (0, t.jsx)("li", { children: (0, t.jsx)(o.v, { text: l }) }, l)),
                  });
        },
        zM: S,
    },
);
