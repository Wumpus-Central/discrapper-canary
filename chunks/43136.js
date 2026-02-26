n.d(t, { A: () => N, C: () => y });
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(241524),
    c = n(289397),
    u = n(607470),
    _ = n(263063),
    m = n(258335),
    h = n(253932),
    p = n(696451),
    g = n(287809),
    A = n(792831),
    x = n(427262),
    f = n(218394),
    C = n(386952),
    E = n(381969),
    I = n(920814),
    b = n(235665),
    T = n(985018),
    v = n(656708);
function S(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.DUT, {
        onClick: t,
        className: v.dO,
        children: [
            (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: T.intl.string(T.t.J4cw1q),
            }),
            (0, i.jsx)(o.hKd, { size: 4, horizontal: !0 }),
            (0, i.jsx)(A.A, { direction: A.A.Directions.RIGHT, className: v.wY }),
        ],
    });
}
function y(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        l = h.kt.useSetting(),
        r = (0, f.j)() && l,
        [a, s] = (0, m.A)(t, r),
        o = r
            ? (0, i.jsx)(u.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: v.N4,
                  width: 655,
                  poster: (0, c.n)("server_products/storefront/default-header.png"),
                  src: (0, c.n)("server_products/storefront/default-header.mov"),
              })
            : (0, i.jsx)("img", {
                  src: (0, c.n)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: v.N4,
              });
    return (0, i.jsx)("div", {
        ref: a,
        className: v.El,
        children: null == s || n ? o : (0, i.jsx)("img", { src: s, alt: "", className: v.N4 }),
    });
}
function N(e) {
    let { guild: t, subscriptionsSettings: n } = e,
        r = t.id,
        { nickname: u, nickcolor: m } = (0, s.cf)([p.Ay, g.default], () => {
            let e = g.default.getCurrentUser();
            a()(null != e, "user cannot be null");
            let t = p.Ay.getMember(r, e.id);
            return { nickname: t?.nick ?? x.Ay.getName(e), nickcolor: t?.colorString ?? void 0 };
        }, [r]),
        { isTruncated: h, ExpandableTextContainer: A } = (0, C.e)(),
        f = (n?.description?.trim().length ?? 0) > 0,
        [N, j] = l.useState(1),
        L = (0, d.A)("(max-width: 1439px)"),
        { selectedTab: R, isPhantomPreview: P } = (0, E.k)(),
        M = R === I.B.GUILD_PRODUCTS_PREVIEW ? T.intl.string(T.t["LvXy/H"]) : T.intl.string(T.t.XyqKh8),
        w = f
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(A, {
                          lineClamp: L || 2 === N ? 2 : 3,
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
                                  (0, i.jsx)(S, { onClick: () => (0, b.A)({ guildId: r }) }),
                              ],
                          }),
                  ],
              })
            : (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: P ? M : T.intl.string(T.t["NY/FIW"]),
              });
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [
            (0, i.jsxs)("div", {
                className: v.op,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(_.Ay, {
                            guild: t,
                            size: _.Ay.Sizes.LARGER,
                            iconSrc:
                                null == t.icon || P
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
                                    children: P
                                        ? T.intl.string(T.t.rtgp7q)
                                        : T.intl.formatToPlainString(T.t.NZeik9, { guildName: t.name }),
                                }),
                            }),
                            (0, i.jsx)(o.hKd, { size: 8 }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: T.intl.format(T.t["7JwrlH"], {
                                    username: u,
                                    usernameHook: function (e, t) {
                                        return (0, i.jsx)("span", { style: { color: m }, children: e }, t);
                                    },
                                }),
                            }),
                            (0, i.jsx)(o.hKd, { size: 9 }),
                            w,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(y, { coverImageAsset: n?.cover_image_asset, isPreview: P }),
        ],
    });
}
