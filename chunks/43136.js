n.d(t, { A: () => S, C: () => N });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(311907),
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
    v = n(235665),
    b = n(985018),
    T = n(66996);
function y(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.DUT, {
        onClick: t,
        className: T.dO,
        children: [
            (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: b.intl.string(b.t.J4cw1q),
            }),
            (0, i.jsx)(o.hKd, { size: 4, horizontal: !0 }),
            (0, i.jsx)(A.A, { direction: A.A.Directions.RIGHT, className: T.wY }),
        ],
    });
}
function N(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        l = h.kt.useSetting(),
        s = (0, f.j)() && l,
        [a, r] = (0, m.A)(t, s),
        o = s
            ? (0, i.jsx)(u.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: T.N4,
                  width: 655,
                  poster: (0, c.n)("server_products/storefront/default-header.png"),
                  src: (0, c.n)("server_products/storefront/default-header.mov"),
              })
            : (0, i.jsx)("img", {
                  src: (0, c.n)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: T.N4,
              });
    return (0, i.jsx)("div", {
        ref: a,
        className: T.El,
        children: null == r || n ? o : (0, i.jsx)("img", { src: r, alt: "", className: T.N4 }),
    });
}
function S(e) {
    let { guild: t, subscriptionsSettings: n } = e,
        s = t.id,
        { nickname: u, nickcolor: m } = (0, r.cf)([p.Ay, g.default], () => {
            let e = g.default.getCurrentUser();
            a()(null != e, "user cannot be null");
            let t = p.Ay.getMember(s, e.id);
            return { nickname: t?.nick ?? x.Ay.getName(e), nickcolor: t?.colorString ?? void 0 };
        }, [s]),
        { isTruncated: h, ExpandableTextContainer: A } = (0, C.e)(),
        f = (n?.description?.trim().length ?? 0) > 0,
        [S, j] = l.useState(1),
        L = (0, d.A)("(max-width: 1439px)"),
        { selectedTab: R, isPhantomPreview: P } = (0, E.k)(),
        D = R === I.B.GUILD_PRODUCTS_PREVIEW ? b.intl.string(b.t["LvXy/H"]) : b.intl.string(b.t.XyqKh8),
        M = f
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(A, {
                          lineClamp: L || 2 === S ? 2 : 3,
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
                                  (0, i.jsx)(y, { onClick: () => (0, v.A)({ guildId: s }) }),
                              ],
                          }),
                  ],
              })
            : (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: P ? D : b.intl.string(b.t["NY/FIW"]),
              });
    return (0, i.jsxs)("div", {
        className: T.kL,
        children: [
            (0, i.jsxs)("div", {
                className: T.op,
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
                                        ? b.intl.string(b.t.rtgp7q)
                                        : b.intl.formatToPlainString(b.t.NZeik9, { guildName: t.name }),
                                }),
                            }),
                            (0, i.jsx)(o.hKd, { size: 8 }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: b.intl.format(b.t["7JwrlH"], {
                                    username: u,
                                    usernameHook: function (e, t) {
                                        return (0, i.jsx)("span", { style: { color: m }, children: e }, t);
                                    },
                                }),
                            }),
                            (0, i.jsx)(o.hKd, { size: 9 }),
                            M,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(N, { coverImageAsset: n?.cover_image_asset, isPreview: P }),
        ],
    });
}
