r.r(t),
    r.d(t, {
        default: () => U,
    });
var n = r(627968),
    i = r(64700),
    o = r(503698),
    l = r.n(o),
    s = r(110259),
    c = r(311907),
    a = r(827734),
    d = r(397927),
    u = r(139286),
    p = r(465932),
    f = r(142120),
    C = r(495066),
    j = r(854018),
    b = r(742589),
    O = r(71393),
    g = r(722888),
    h = r(683271),
    y = r(558060),
    x = r(381969),
    m = r(920814),
    v = r(638964),
    _ = r(422373),
    w = r(812136),
    P = r(398828),
    L = r(46623),
    I = r(43136),
    S = r(575926),
    D = r(284683),
    A = r(746080),
    R = r(412728),
    E = r(985018),
    N = r(86719),
    k = r(638990);

function T(e) {
    var t;
    let { guildId: r, productId: i } = e,
        { loaded: o, subscriptionsSettings: l } = (0, g.G)(r),
        s = (0, c.bG)([O.A], () => O.A.getGuild(r)),
        { selectedTab: a, isPhantomPreview: u, categoryTabs: p } = (0, x.k)(),
        f = !o || null == l;
    return null == s || (!u && f)
        ? (0, n.jsx)(d.y$y, {})
        : (0, n.jsx)(y.default, {
              defaultSortOption:
                  null != (t = null == l ? void 0 : l.store_page_guild_products_default_sort) ? t : D.p$.NAME,
              children: (0, n.jsxs)("div", {
                  className: N.hQ,
                  children: [
                      (0, n.jsx)(I.A, {
                          guild: s,
                          subscriptionsSettings: l,
                      }),
                      (0, n.jsx)(d.hKd, {
                          size: 32,
                      }),
                      p.length > 0 &&
                          (0, n.jsx)(w.F, {
                              guild: s,
                          }),
                      (0, n.jsxs)("div", {
                          className: N.v_,
                          children: [
                              (0, n.jsx)(d.hKd, {
                                  size: 32,
                              }),
                              u &&
                                  (0, n.jsx)(P.A, {
                                      guildId: r,
                                  }),
                              a === m.B.GUILD_PRODUCTS &&
                                  (0, n.jsx)(v.h, {
                                      guildId: r,
                                      productId: i,
                                  }),
                              a === m.B.GUILD_ROLE_SUBSCRIPTIONS &&
                                  (0, n.jsx)(_.A, {
                                      guildId: r,
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}

function V(e) {
    let { guildId: t, productId: r } = e,
        o = (0, c.bG)([f.A], () => f.A.isConnected()),
        g = (0, c.bG)([O.A], () => O.A.getGuild(t)),
        { shouldHideGuildPurchaseEntryPoints: y, restrictionsLoading: m } = (0, p.MH)(t),
        { selectedTab: v, isPhantomPreview: _, categoryTabs: w } = (0, x.k)(),
        P = o && (null == g || (0 === w.length && !_) || (y && !m));
    return (
        i.useEffect(() => {
            P && (0, h.B)(t, A.VV.GUILD_SHOP);
        }, [t, P]),
        (0, u.A)(
            {
                type: R.z.PAGE,
                name: s.ImpressionNames.GUILD_SHOP_PAGE,
                properties: {
                    product_id: r,
                    tab: v,
                },
            },
            {
                disableTrack: P,
            },
        ),
        (0, n.jsxs)("div", {
            "data-has-border": !0,
            className: l()(k.TE, N.kL),
            children: [
                (0, n.jsxs)(b.A, {
                    children: [
                        (0, n.jsx)(b.A.Icon, {
                            icon: (0, d.kHD)(S.h),
                            "aria-hidden": !0,
                            color: a.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
                        }),
                        (0, n.jsx)(b.A.Title, {
                            children: E.intl.string(E.t.al5EXL),
                        }),
                        (0, n.jsx)(L.A, {}),
                    ],
                }),
                (0, n.jsx)(d.d_W, {
                    className: N.Qs,
                    children: o
                        ? (0, n.jsx)(T, {
                              guildId: t,
                              productId: r,
                          })
                        : (0, n.jsx)(d.y$y, {}),
                }),
                (0, n.jsx)(j.A, {
                    className: N.Dv,
                }),
                (0, n.jsx)(C.A, {
                    className: N.xC,
                }),
            ],
        })
    );
}

function U(e) {
    let { guildId: t, productId: r, initialTab: i } = e;
    return (
        null == i && null != r && (i = m.B.GUILD_PRODUCTS),
        (0, n.jsx)(x.A, {
            initialTab: i,
            guildId: t,
            children: (0, n.jsx)(V, {
                initialTab: i,
                productId: r,
                guildId: t,
            }),
        })
    );
}
