n.d(t, { A: () => R, C: () => k });
var i = n(477900),
    l = n(582128),
    s = n(284009),
    r = n.n(s),
    a = n(17928);
if (221552 == n.j) var o = n(939249);
if (221552 == n.j) var d = n(834730);
if (221552 == n.j) var c = n(696986);
if (221552 == n.j) var u = n(297264);
var m = n(241524),
    h = n(289397),
    g = n(607470),
    p = n(548118),
    A = n(428558),
    x = n(885386),
    f = n(696451),
    I = n(287809),
    E = n(792831),
    v = n(427262),
    C = n(218394),
    _ = n(386952),
    j = n(381969),
    N = n(920814),
    y = n(235665),
    T = n(375708),
    S = n(761520);
function b(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.D, {
        onClick: t,
        className: S.dO,
        children: [
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-strong", children: T.intl.string(T.t.J4cw1q) }),
            (0, i.jsx)(c.h, { size: 4, horizontal: !0 }),
            (0, i.jsx)(E.A, { direction: E.A.Directions.RIGHT, className: S.wY }),
        ],
    });
}
function k(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        l = x.kt.useSetting(),
        s = (0, C.j)() && l,
        [r, a] = (0, A.A)(t, s),
        o = s
            ? (0, i.jsx)(g.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: S.N4,
                  width: 655,
                  poster: (0, h.n)("server_products/storefront/default-header.png"),
                  src: (0, h.n)("server_products/storefront/default-header.mov"),
              })
            : (0, i.jsx)("img", {
                  src: (0, h.n)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: S.N4,
              });
    return (0, i.jsx)("div", {
        ref: r,
        className: S.El,
        children: null == a || n ? o : (0, i.jsx)("img", { src: a, alt: "", className: S.N4 }),
    });
}
function R(e) {
    let { guild: t, subscriptionsSettings: n } = e,
        s = t.id,
        { nickname: o, nickcolor: g } = (0, a.cf)(
            [f.Ay, I.default],
            () => {
                let e = I.default.getCurrentUser();
                r()(null != e, "user cannot be null");
                let t = f.Ay.getMember(s, e.id);
                return { nickname: t?.nick ?? v.Ay.getName(e), nickcolor: t?.colorString ?? void 0 };
            },
            [s],
        ),
        { isTruncated: A, ExpandableTextContainer: x } = (0, _.e)(),
        E = (n?.description?.trim().length ?? 0) > 0,
        [C, R] = l.useState(1),
        L = (0, m.A)("(max-width: 1439px)"),
        { selectedTab: M, isPhantomPreview: P } = (0, j.k)(),
        D = M === N.B.GUILD_PRODUCTS_PREVIEW ? T.intl.string(T.t["LvXy/H"]) : T.intl.string(T.t.XyqKh8),
        O = E
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x, {
                          lineClamp: L || 2 === C ? 2 : 3,
                          children: (0, i.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n?.description,
                          }),
                      }),
                      A &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.h, { size: 4 }),
                                  (0, i.jsx)(b, {
                                      onClick: function () {
                                          return (0, y.A)({ guildId: s });
                                      },
                                  }),
                              ],
                          }),
                  ],
              })
            : (0, i.jsx)(d.E, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: P ? D : T.intl.string(T.t["NY/FIW"]),
              });
    return (0, i.jsxs)("div", {
        className: S.kL,
        children: [
            (0, i.jsxs)("div", {
                className: S.op,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(p.Ay, {
                            guild: t,
                            size: p.Ay.Sizes.LARGER,
                            iconSrc:
                                null == t.icon || P
                                    ? (0, h.n)("server_products/storefront/default-guild-icon.jpg")
                                    : void 0,
                        }),
                    }),
                    (0, i.jsx)(c.h, { size: 16, horizontal: !0 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)("div", {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && R(2);
                                },
                                children: (0, i.jsx)(u.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    lineClamp: 2,
                                    children: P
                                        ? T.intl.string(T.t.rtgp7q)
                                        : T.intl.formatToPlainString(T.t.NZeik9, { guildName: t.name }),
                                }),
                            }),
                            (0, i.jsx)(c.h, { size: 8 }),
                            (0, i.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: T.intl.format(T.t["7JwrlH"], {
                                    username: o,
                                    usernameHook: function (e, t) {
                                        return (0, i.jsx)("span", { style: { color: g }, children: e }, t);
                                    },
                                }),
                            }),
                            (0, i.jsx)(c.h, { size: 9 }),
                            O,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(k, { coverImageAsset: n?.cover_image_asset, isPreview: P }),
        ],
    });
}
