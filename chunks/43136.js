n.d(t, {
    A: () => S,
    C: () => I,
}),
    n(896048),
    n(228524),
    n(733351);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(241524),
    u = n(289397),
    d = n(607470),
    p = n(263063),
    m = n(258335),
    f = n(253932),
    g = n(696451),
    h = n(287809),
    _ = n(792831),
    b = n(427262),
    A = n(218394),
    y = n(386952),
    v = n(381969),
    x = n(920814),
    O = n(235665),
    E = n(985018),
    j = n(425666);

function C(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(o.DUT, {
        onClick: t,
        className: j.dO,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: E.intl.string(E.t.J4cw1q),
            }),
            (0, r.jsx)(o.hKd, {
                size: 4,
                horizontal: !0,
            }),
            (0, r.jsx)(_.A, {
                direction: _.A.Directions.RIGHT,
                className: j.wY,
            }),
        ],
    });
}

function I(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = f.kt.useSetting(),
        l = (0, A.j)() && i,
        [a, s] = (0, m.A)(t, l),
        o = l
            ? (0, r.jsx)(d.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: j.N4,
                  width: 655,
                  poster: (0, u.n)("server_products/storefront/default-header.png"),
                  src: (0, u.n)("server_products/storefront/default-header.mov"),
              })
            : (0, r.jsx)("img", {
                  src: (0, u.n)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: j.N4,
              });
    return (0, r.jsx)("div", {
        ref: a,
        className: j.El,
        children:
            null == s || n
                ? o
                : (0, r.jsx)("img", {
                      src: s,
                      alt: "",
                      className: j.N4,
                  }),
    });
}

function S(e) {
    var t, n;
    let { guild: l, subscriptionsSettings: d } = e,
        m = l.id,
        { nickname: f, nickcolor: _ } = (0, s.cf)([g.Ay, h.default], () => {
            var e, t;
            let n = h.default.getCurrentUser();
            a()(null != n, "user cannot be null");
            let r = g.Ay.getMember(m, n.id);
            return {
                nickname: null != (e = null == r ? void 0 : r.nick) ? e : b.Ay.getName(n),
                nickcolor: null != (t = null == r ? void 0 : r.colorString) ? t : void 0,
            };
        }, [m]),
        { isTruncated: A, ExpandableTextContainer: S } = (0, y.e)(),
        T = (null != (t = null == d || null == (n = d.description) ? void 0 : n.trim().length) ? t : 0) > 0,
        [N, P] = i.useState(1),
        w = (0, c.A)("(max-width: 1439px)"),
        { selectedTab: R, isPhantomPreview: D } = (0, v.k)(),
        L = R === x.B.GUILD_PRODUCTS_PREVIEW ? E.intl.string(E.t["LvXy/H"]) : E.intl.string(E.t.XyqKh8),
        M = T
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(S, {
                          lineClamp: w || 2 === N ? 2 : 3,
                          children: (0, r.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: null == d ? void 0 : d.description,
                          }),
                      }),
                      A &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.hKd, {
                                      size: 4,
                                  }),
                                  (0, r.jsx)(C, {
                                      onClick: () =>
                                          (0, O.A)({
                                              guildId: m,
                                          }),
                                  }),
                              ],
                          }),
                  ],
              })
            : (0, r.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: D ? L : E.intl.string(E.t["NY/FIW"]),
              });
    return (0, r.jsxs)("div", {
        className: j.kL,
        children: [
            (0, r.jsxs)("div", {
                className: j.op,
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(p.A, {
                            guild: l,
                            size: p.A.Sizes.LARGER,
                            iconSrc:
                                null == l.icon || D
                                    ? (0, u.n)("server_products/storefront/default-guild-icon.jpg")
                                    : void 0,
                        }),
                    }),
                    (0, r.jsx)(o.hKd, {
                        size: 16,
                        horizontal: !0,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)("div", {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && P(2);
                                },
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    lineClamp: 2,
                                    children: D
                                        ? E.intl.string(E.t.rtgp7q)
                                        : E.intl.formatToPlainString(E.t.NZeik9, {
                                              guildName: l.name,
                                          }),
                                }),
                            }),
                            (0, r.jsx)(o.hKd, {
                                size: 8,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: E.intl.format(E.t["7JwrlH"], {
                                    username: f,
                                    usernameHook: function (e, t) {
                                        return (0, r.jsx)(
                                            "span",
                                            {
                                                style: {
                                                    color: _,
                                                },
                                                children: e,
                                            },
                                            t,
                                        );
                                    },
                                }),
                            }),
                            (0, r.jsx)(o.hKd, {
                                size: 9,
                            }),
                            M,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(I, {
                coverImageAsset: null == d ? void 0 : d.cover_image_asset,
                isPreview: D,
            }),
        ],
    });
}
