n.d(t, { A: () => R, C: () => L });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(311907);
if (21552 == n.j) var o = n(939249);
if (21552 == n.j) var d = n(834730);
if (21552 == n.j) var c = n(696986);
if (21552 == n.j) var u = n(534514);
var m = n(241524),
    _ = n(289397),
    h = n(607470),
    p = n(263063),
    g = n(258335),
    A = n(253932),
    f = n(696451),
    x = n(287809),
    C = n(792831),
    E = n(427262),
    I = n(218394),
    v = n(386952),
    b = n(381969),
    T = n(920814),
    S = n(235665),
    y = n(985018),
    N = n(260343);
function j(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.D, {
        onClick: t,
        className: N.dO,
        children: [
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-strong", children: y.intl.string(y.t.J4cw1q) }),
            (0, i.jsx)(c.h, { size: 4, horizontal: !0 }),
            (0, i.jsx)(C.A, { direction: C.A.Directions.RIGHT, className: N.wY }),
        ],
    });
}
function L(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        l = A.kt.useSetting(),
        a = (0, I.j)() && l,
        [s, r] = (0, g.A)(t, a),
        o = a
            ? (0, i.jsx)(h.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: N.N4,
                  width: 655,
                  poster: (0, _.n)("server_products/storefront/default-header.png"),
                  src: (0, _.n)("server_products/storefront/default-header.mov"),
              })
            : (0, i.jsx)("img", {
                  src: (0, _.n)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: N.N4,
              });
    return (0, i.jsx)("div", {
        ref: s,
        className: N.El,
        children: null == r || n ? o : (0, i.jsx)("img", { src: r, alt: "", className: N.N4 }),
    });
}
function R(e) {
    let { guild: t, subscriptionsSettings: n } = e,
        a = t.id,
        { nickname: o, nickcolor: h } = (0, r.cf)([f.Ay, x.default], () => {
            let e = x.default.getCurrentUser();
            s()(null != e, "user cannot be null");
            let t = f.Ay.getMember(a, e.id);
            return { nickname: t?.nick ?? E.Ay.getName(e), nickcolor: t?.colorString ?? void 0 };
        }, [a]),
        { isTruncated: g, ExpandableTextContainer: A } = (0, v.e)(),
        C = (n?.description?.trim().length ?? 0) > 0,
        [I, R] = l.useState(1),
        P = (0, m.A)("(max-width: 1439px)"),
        { selectedTab: w, isPhantomPreview: D } = (0, b.k)(),
        k = w === T.B.GUILD_PRODUCTS_PREVIEW ? y.intl.string(y.t["LvXy/H"]) : y.intl.string(y.t.XyqKh8),
        O = C
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(A, {
                          lineClamp: P || 2 === I ? 2 : 3,
                          children: (0, i.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n?.description,
                          }),
                      }),
                      g &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.h, { size: 4 }),
                                  (0, i.jsx)(j, { onClick: () => (0, S.A)({ guildId: a }) }),
                              ],
                          }),
                  ],
              })
            : (0, i.jsx)(d.E, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: D ? k : y.intl.string(y.t["NY/FIW"]),
              });
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [
            (0, i.jsxs)("div", {
                className: N.op,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(p.Ay, {
                            guild: t,
                            size: p.Ay.Sizes.LARGER,
                            iconSrc:
                                null == t.icon || D
                                    ? (0, _.n)("server_products/storefront/default-guild-icon.jpg")
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
                                    children: D
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
                                        return (0, i.jsx)("span", { style: { color: h }, children: e }, t);
                                    },
                                }),
                            }),
                            (0, i.jsx)(c.h, { size: 9 }),
                            O,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(L, { coverImageAsset: n?.cover_image_asset, isPreview: D }),
        ],
    });
}
