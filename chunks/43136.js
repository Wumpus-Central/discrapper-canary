n.d(t, { A: () => y, C: () => b });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(241524),
    c = n(289397),
    u = n(607470),
    m = n(263063),
    _ = n(258335),
    h = n(253932),
    p = n(696451),
    g = n(287809),
    A = n(792831),
    f = n(427262),
    x = n(218394),
    E = n(386952),
    C = n(381969),
    I = n(920814),
    T = n(235665),
    v = n(985018),
    N = n(425666);
function S(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.DUT, {
        onClick: t,
        className: N.dO,
        children: [
            (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: v.intl.string(v.t.J4cw1q),
            }),
            (0, i.jsx)(o.hKd, { size: 4, horizontal: !0 }),
            (0, i.jsx)(A.A, { direction: A.A.Directions.RIGHT, className: N.wY }),
        ],
    });
}
function b(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        l = h.kt.useSetting(),
        a = (0, x.j)() && l,
        [r, s] = (0, _.A)(t, a),
        o = a
            ? (0, i.jsx)(u.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: N.N4,
                  width: 655,
                  poster: (0, c.n)("server_products/storefront/default-header.png"),
                  src: (0, c.n)("server_products/storefront/default-header.mov"),
              })
            : (0, i.jsx)("img", {
                  src: (0, c.n)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: N.N4,
              });
    return (0, i.jsx)("div", {
        ref: r,
        className: N.El,
        children: null == s || n ? o : (0, i.jsx)("img", { src: s, alt: "", className: N.N4 }),
    });
}
function y(e) {
    let { guild: t, subscriptionsSettings: n } = e,
        a = t.id,
        { nickname: u, nickcolor: _ } = (0, s.cf)([p.Ay, g.default], () => {
            let e = g.default.getCurrentUser();
            r()(null != e, "user cannot be null");
            let t = p.Ay.getMember(a, e.id);
            return { nickname: t?.nick ?? f.Ay.getName(e), nickcolor: t?.colorString ?? void 0 };
        }, [a]),
        { isTruncated: h, ExpandableTextContainer: A } = (0, E.e)(),
        x = (n?.description?.trim().length ?? 0) > 0,
        [y, j] = l.useState(1),
        R = (0, d.A)("(max-width: 1439px)"),
        { selectedTab: L, isPhantomPreview: M } = (0, C.k)(),
        O = L === I.B.GUILD_PRODUCTS_PREVIEW ? v.intl.string(v.t["LvXy/H"]) : v.intl.string(v.t.XyqKh8),
        P = x
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(A, {
                          lineClamp: R || 2 === y ? 2 : 3,
                          children: (0, i.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n?.description,
                          }),
                      }),
                      h &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.hKd, { size: 4 }),
                                  (0, i.jsx)(S, { onClick: () => (0, T.A)({ guildId: a }) }),
                              ],
                          }),
                  ],
              })
            : (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: M ? O : v.intl.string(v.t["NY/FIW"]),
              });
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [
            (0, i.jsxs)("div", {
                className: N.op,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(m.A, {
                            guild: t,
                            size: m.A.Sizes.LARGER,
                            iconSrc:
                                null == t.icon || M
                                    ? (0, c.n)("server_products/storefront/default-guild-icon.jpg")
                                    : void 0,
                        }),
                    }),
                    (0, i.jsx)(o.hKd, { size: 16, horizontal: !0 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)("div", {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && j(2);
                                },
                                children: (0, i.jsx)(o.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    lineClamp: 2,
                                    children: M
                                        ? v.intl.string(v.t.rtgp7q)
                                        : v.intl.formatToPlainString(v.t.NZeik9, { guildName: t.name }),
                                }),
                            }),
                            (0, i.jsx)(o.hKd, { size: 8 }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: v.intl.format(v.t["7JwrlH"], {
                                    username: u,
                                    usernameHook: function (e, t) {
                                        return (0, i.jsx)("span", { style: { color: _ }, children: e }, t);
                                    },
                                }),
                            }),
                            (0, i.jsx)(o.hKd, { size: 9 }),
                            P,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(b, { coverImageAsset: n?.cover_image_asset, isPreview: M }),
        ],
    });
}
