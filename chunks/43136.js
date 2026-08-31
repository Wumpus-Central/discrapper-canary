n.d(t, { A: () => L, C: () => R });
var i = n(477900),
    l = n(582128),
    s = n(284009),
    a = n.n(s),
    r = n(17928);
if (221552 == n.j) var o = n(939249);
if (221552 == n.j) var c = n(834730);
if (221552 == n.j) var d = n(696986);
if (221552 == n.j) var u = n(297264);
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
    _ = n(218394),
    v = n(386952),
    N = n(381969),
    j = n(920814),
    T = n(235665),
    S = n(375708),
    y = n(761520);
function b(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.D, {
        onClick: t,
        className: y.dO,
        children: [
            (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-strong", children: S.intl.string(S.t.J4cw1q) }),
            (0, i.jsx)(d.h, { size: 4, horizontal: !0 }),
            (0, i.jsx)(I.A, { direction: I.A.Directions.RIGHT, className: y.wY }),
        ],
    });
}
function R(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        l = x.kt.useSetting(),
        s = (0, _.j)() && l,
        [a, r] = (0, A.A)(t, s),
        o = s
            ? (0, i.jsx)(g.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: y.N4,
                  width: 655,
                  poster: (0, h.n)("server_products/storefront/default-header.png"),
                  src: (0, h.n)("server_products/storefront/default-header.mov"),
              })
            : (0, i.jsx)("img", {
                  src: (0, h.n)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: y.N4,
              });
    return (0, i.jsx)("div", {
        ref: a,
        className: y.El,
        children: null == r || n ? o : (0, i.jsx)("img", { src: r, alt: "", className: y.N4 }),
    });
}
function L(e) {
    let { guild: t, subscriptionsSettings: n } = e,
        s = t.id,
        { nickname: o, nickcolor: g } = (0, r.cf)([f.Ay, E.default], () => {
            let e = E.default.getCurrentUser();
            a()(null != e, "user cannot be null");
            let t = f.Ay.getMember(s, e.id);
            return { nickname: t?.nick ?? C.Ay.getName(e), nickcolor: t?.colorString ?? void 0 };
        }, [s]),
        { isTruncated: A, ExpandableTextContainer: x } = (0, v.e)(),
        I = (n?.description?.trim().length ?? 0) > 0,
        [_, L] = l.useState(1),
        k = (0, m.A)("(max-width: 1439px)"),
        { selectedTab: M, isPhantomPreview: O } = (0, N.k)(),
        P = M === j.B.GUILD_PRODUCTS_PREVIEW ? S.intl.string(S.t["LvXy/H"]) : S.intl.string(S.t.XyqKh8),
        D = I
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x, {
                          lineClamp: k || 2 === _ ? 2 : 3,
                          children: (0, i.jsx)(c.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n?.description,
                          }),
                      }),
                      A &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.h, { size: 4 }),
                                  (0, i.jsx)(b, {
                                      onClick: function () {
                                          return (0, T.A)({ guildId: s });
                                      },
                                  }),
                              ],
                          }),
                  ],
              })
            : (0, i.jsx)(c.E, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: O ? P : S.intl.string(S.t["NY/FIW"]),
              });
    return (0, i.jsxs)("div", {
        className: y.kL,
        children: [
            (0, i.jsxs)("div", {
                className: y.op,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(p.Ay, {
                            guild: t,
                            size: p.Ay.Sizes.LARGER,
                            iconSrc:
                                null == t.icon || O
                                    ? (0, h.n)("server_products/storefront/default-guild-icon.jpg")
                                    : void 0,
                        }),
                    }),
                    (0, i.jsx)(d.h, { size: 16, horizontal: !0 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)("div", {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && L(2);
                                },
                                children: (0, i.jsx)(u.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    lineClamp: 2,
                                    children: O
                                        ? S.intl.string(S.t.rtgp7q)
                                        : S.intl.formatToPlainString(S.t.NZeik9, { guildName: t.name }),
                                }),
                            }),
                            (0, i.jsx)(d.h, { size: 8 }),
                            (0, i.jsx)(c.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: S.intl.format(S.t["7JwrlH"], {
                                    username: o,
                                    usernameHook: function (e, t) {
                                        return (0, i.jsx)("span", { style: { color: g }, children: e }, t);
                                    },
                                }),
                            }),
                            (0, i.jsx)(d.h, { size: 9 }),
                            D,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(R, { coverImageAsset: n?.cover_image_asset, isPreview: O }),
        ],
    });
}
