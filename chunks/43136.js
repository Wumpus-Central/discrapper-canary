n.d(t, { A: () => v, C: () => L });
var s = n(627968),
    i = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(17928);
if (21552 == n.j) var o = n(939249);
if (21552 == n.j) var d = n(834730);
if (21552 == n.j) var u = n(696986);
if (21552 == n.j) var c = n(534514);
var h = n(241524),
    E = n(289397),
    p = n(607470),
    A = n(548118),
    m = n(258335),
    C = n(253932),
    g = n(696451),
    _ = n(287809),
    I = n(792831),
    S = n(427262),
    T = n(218394),
    f = n(386952),
    y = n(381969),
    R = n(920814),
    O = n(235665),
    b = n(985018),
    N = n(260343);
function x(e) {
    let { onClick: t } = e;
    return (0, s.jsxs)(o.D, {
        onClick: t,
        className: N.dO,
        children: [
            (0, s.jsx)(d.E, { variant: "text-sm/medium", color: "text-strong", children: b.intl.string(b.t.J4cw1q) }),
            (0, s.jsx)(u.h, { size: 4, horizontal: !0 }),
            (0, s.jsx)(I.A, { direction: I.A.Directions.RIGHT, className: N.wY }),
        ],
    });
}
function L(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = C.kt.useSetting(),
        l = (0, T.j)() && i,
        [r, a] = (0, m.A)(t, l),
        o = l
            ? (0, s.jsx)(p.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: N.N4,
                  width: 655,
                  poster: (0, E.n)("server_products/storefront/default-header.png"),
                  src: (0, E.n)("server_products/storefront/default-header.mov"),
              })
            : (0, s.jsx)("img", {
                  src: (0, E.n)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: N.N4,
              });
    return (0, s.jsx)("div", {
        ref: r,
        className: N.El,
        children: null == a || n ? o : (0, s.jsx)("img", { src: a, alt: "", className: N.N4 }),
    });
}
function v(e) {
    let { guild: t, subscriptionsSettings: n } = e,
        l = t.id,
        { nickname: o, nickcolor: p } = (0, a.cf)([g.Ay, _.default], () => {
            let e = _.default.getCurrentUser();
            r()(null != e, "user cannot be null");
            let t = g.Ay.getMember(l, e.id);
            return { nickname: t?.nick ?? S.Ay.getName(e), nickcolor: t?.colorString ?? void 0 };
        }, [l]),
        { isTruncated: m, ExpandableTextContainer: C } = (0, f.e)(),
        I = (n?.description?.trim().length ?? 0) > 0,
        [T, v] = i.useState(1),
        D = (0, h.A)("(max-width: 1439px)"),
        { selectedTab: P, isPhantomPreview: M } = (0, y.k)(),
        j = P === R.B.GUILD_PRODUCTS_PREVIEW ? b.intl.string(b.t["LvXy/H"]) : b.intl.string(b.t.XyqKh8),
        w = I
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(C, {
                          lineClamp: D || 2 === T ? 2 : 3,
                          children: (0, s.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n?.description,
                          }),
                      }),
                      m &&
                          (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(u.h, { size: 4 }),
                                  (0, s.jsx)(x, { onClick: () => (0, O.A)({ guildId: l }) }),
                              ],
                          }),
                  ],
              })
            : (0, s.jsx)(d.E, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: M ? j : b.intl.string(b.t["NY/FIW"]),
              });
    return (0, s.jsxs)("div", {
        className: N.kL,
        children: [
            (0, s.jsxs)("div", {
                className: N.op,
                children: [
                    (0, s.jsx)("div", {
                        children: (0, s.jsx)(A.Ay, {
                            guild: t,
                            size: A.Ay.Sizes.LARGER,
                            iconSrc:
                                null == t.icon || M
                                    ? (0, E.n)("server_products/storefront/default-guild-icon.jpg")
                                    : void 0,
                        }),
                    }),
                    (0, s.jsx)(u.h, { size: 16, horizontal: !0 }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)("div", {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && v(2);
                                },
                                children: (0, s.jsx)(c.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    lineClamp: 2,
                                    children: M
                                        ? b.intl.string(b.t.rtgp7q)
                                        : b.intl.formatToPlainString(b.t.NZeik9, { guildName: t.name }),
                                }),
                            }),
                            (0, s.jsx)(u.h, { size: 8 }),
                            (0, s.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: b.intl.format(b.t["7JwrlH"], {
                                    username: o,
                                    usernameHook: function (e, t) {
                                        return (0, s.jsx)("span", { style: { color: p }, children: e }, t);
                                    },
                                }),
                            }),
                            (0, s.jsx)(u.h, { size: 9 }),
                            w,
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(L, { coverImageAsset: n?.cover_image_asset, isPreview: M }),
        ],
    });
}
