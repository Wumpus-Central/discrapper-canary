n.d(t, { A: () => k, C: () => L });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(17928);
if (21552 == n.j) var o = n(939249);
if (21552 == n.j) var d = n(834730);
if (21552 == n.j) var c = n(696986);
if (21552 == n.j) var u = n(534514);
var m = n(241524),
    h = n(289397),
    g = n(607470),
    p = n(548118),
    A = n(428558),
    x = n(885386),
    f = n(696451),
    E = n(287809),
    I = n(792831),
    C = n(427262),
    v = n(218394),
    _ = n(386952),
    j = n(381969),
    N = n(920814),
    T = n(235665),
    y = n(375708),
    S = n(482724);
function b(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.D, {
        onClick: t,
        className: S.dO,
        children: [
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-strong", children: y.intl.string(y.t.J4cw1q) }),
            (0, i.jsx)(c.h, { size: 4, horizontal: !0 }),
            (0, i.jsx)(I.A, { direction: I.A.Directions.RIGHT, className: S.wY }),
        ],
    });
}
function L(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        l = x.kt.useSetting(),
        s = (0, v.j)() && l,
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
function k(e) {
    let { guild: t, subscriptionsSettings: n } = e,
        s = t.id,
        { nickname: o, nickcolor: g } = (0, a.cf)([f.Ay, E.default], () => {
            let e = E.default.getCurrentUser();
            r()(null != e, "user cannot be null");
            let t = f.Ay.getMember(s, e.id);
            return { nickname: t?.nick ?? C.Ay.getName(e), nickcolor: t?.colorString ?? void 0 };
        }, [s]),
        { isTruncated: A, ExpandableTextContainer: x } = (0, _.e)(),
        I = (n?.description?.trim().length ?? 0) > 0,
        [v, k] = l.useState(1),
        R = (0, m.A)("(max-width: 1439px)"),
        { selectedTab: P, isPhantomPreview: M } = (0, j.k)(),
        D = P === N.B.GUILD_PRODUCTS_PREVIEW ? y.intl.string(y.t["LvXy/H"]) : y.intl.string(y.t.XyqKh8),
        O = I
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x, {
                          lineClamp: R || 2 === v ? 2 : 3,
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
                                          return (0, T.A)({ guildId: s });
                                      },
                                  }),
                              ],
                          }),
                  ],
              })
            : (0, i.jsx)(d.E, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: M ? D : y.intl.string(y.t["NY/FIW"]),
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
                                null == t.icon || M
                                    ? (0, h.n)("server_products/storefront/default-guild-icon.jpg")
                                    : void 0,
                        }),
                    }),
                    (0, i.jsx)(c.h, { size: 16, horizontal: !0 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)("div", {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && k(2);
                                },
                                children: (0, i.jsx)(u.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    lineClamp: 2,
                                    children: M
                                        ? y.intl.string(y.t.rtgp7q)
                                        : y.intl.formatToPlainString(y.t.NZeik9, { guildName: t.name }),
                                }),
                            }),
                            (0, i.jsx)(c.h, { size: 8 }),
                            (0, i.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: y.intl.format(y.t["7JwrlH"], {
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
            (0, i.jsx)(L, { coverImageAsset: n?.cover_image_asset, isPreview: M }),
        ],
    });
}
