var t = n(477900),
    a = n(582128),
    u = n(503698),
    r = n.n(u),
    i = n(855986),
    s = n(834730),
    c = n(237528),
    o = n(97808),
    d = n(778712),
    f = n(939249),
    p = n(463930),
    g = n(609425),
    y = n(73392),
    A = n(967144),
    m = n(342296),
    h = n(696451),
    I = n(427262),
    v = n(475458),
    _ = n(104299),
    b = n(694185),
    j = n(191850),
    C = n(792996),
    x = n(83246);
function N(l) {
    return l.getCoverImageURL(864) ?? null;
}
n.d(
    e,
    {},
    {
        HP: function (l) {
            let { project: e, guildId: n } = l,
                u = a.useRef(null),
                { creator: r } = (0, v.yv)(e),
                c = r?.id,
                _ = (0, i.bG)([h.Ay], () => (null != n && null != c ? h.Ay.getMember(n, c) : null), [n, c]),
                b = (0, A.gn)(n ?? void 0, c, _?.colorStrings ?? null),
                N = (0, y.a)({ displayNameStyles: (0, g.A)({ userId: c, guildId: n }) });
            return null == r
                ? null
                : (0, t.jsxs)("div", {
                      className: x.xL,
                      children: [
                          (0, t.jsx)(o.eu, { src: r.getAvatarURL(n, 48), size: d._3.SIZE_24, "aria-hidden": !0 }),
                          (0, t.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              lineClamp: 1,
                              children: C.intl.format(j.default.ThorDA, {
                                  name: (0, t.jsx)(m.A, {
                                      targetElementRef: u,
                                      user: r,
                                      guildId: n ?? void 0,
                                      roleId: _?.colorRoleId,
                                      clickTrap: !0,
                                      children: (l) =>
                                          (0, t.jsx)(f.D, {
                                              ...l,
                                              innerRef: u,
                                              tag: "span",
                                              className: x.Sq,
                                              children: (0, t.jsx)(p.g, {
                                                  name: _?.nick ?? (0, I.mG)(r),
                                                  colorString: _?.colorString ?? null,
                                                  colorStrings: b,
                                                  displayNameStylesFont: N,
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
                u = e.description?.trim() ?? "";
            return (0, t.jsxs)("div", {
                className: x.D_,
                children: [
                    null != a
                        ? (0, t.jsx)("img", { alt: "", src: a, className: r()(x.Kk, x.Dp) })
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
                            u.length > 0
                                ? (0, t.jsx)(s.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: n,
                                      children: u,
                                  })
                                : null,
                        ],
                    }),
                ],
            });
        },
        go: function (l) {
            let { application: e, className: n } = l,
                a = N(e);
            return null == a ? null : (0, t.jsx)("img", { alt: "", src: a, className: r()(x.Iv, n) });
        },
        r8: function (l) {
            let { project: e } = l,
                n = (0, b.nX)(e.supported_surfaces ?? []);
            return 0 === n.length
                ? null
                : (0, t.jsx)("ul", {
                      className: x.XP,
                      "aria-label": C.intl.string(j.default["cF++B3"]),
                      children: n.map((l) => (0, t.jsx)("li", { children: (0, t.jsx)(c.v, { text: l }) }, l)),
                  });
        },
        zM: N,
    },
);
