n.d(t, {
    A: () => C,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(110259),
    o = n(311907),
    c = n(827734),
    u = n(732955),
    d = n(397927),
    p = n(58149),
    m = n(139286),
    f = n(263063),
    g = n(250627),
    h = n(22007),
    _ = n(813516),
    b = n(71393),
    A = n(954571),
    y = n(722888),
    v = n(43136),
    x = n(575926),
    O = n(652215),
    E = n(985018),
    j = n(266847);

function C(e) {
    var t;
    let { guildId: n } = e,
        l = (0, o.bG)([b.A], () => b.A.getGuild(n)),
        { loading: C, subscriptionsSettings: I } = (0, y.G)(n),
        { listingsLoaded: S } = (0, g.bb)(n),
        T = (0, g.fZ)(n, {
            publishedOnly: !0,
        }),
        N = i.useCallback(async () => {
            A.default.track(
                O.HAw.GUILD_SHOP_EMBED_CLICKED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, (0, p.H$)(n)),
            ),
                await (0, h.A)(O.BVt.SERVER_SHOP(n));
        }, [n]);
    (0, m.A)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.GUILD_SHOP_EMBED,
        },
        {
            disableTrack: null == l,
        },
    );
    let P = T.length > 0 ? new Date(Math.min(...T.map((e) => Date.parse(e.published_at)))) : void 0;
    return C || !S
        ? (0, r.jsx)("div", {
              className: a()(j.lm, j.dc),
              children: (0, r.jsx)(d.y$y, {}),
          })
        : null == l || null == I
          ? null
          : (0, r.jsxs)("div", {
                className: j.lm,
                children: [
                    (0, r.jsx)(v.C, {
                        coverImageAsset: null != (t = I.cover_image_asset) ? t : null,
                    }),
                    (0, r.jsx)(d.hKd, {
                        size: 16,
                    }),
                    (0, r.jsxs)("div", {
                        className: j.qs,
                        children: [
                            (0, r.jsx)(x.h, {
                                height: "16px",
                                width: "16px",
                                color: c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, r.jsx)(d.Heading, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: j.Nl,
                                children: E.intl.string(E.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, r.jsx)(d.hKd, {
                        size: 16,
                    }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.format(E.t.NZeik9, {
                            guildName: l.name,
                        }),
                    }),
                    (0, r.jsx)(d.hKd, {
                        size: 4,
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: I.description,
                    }),
                    (0, r.jsx)(d.hKd, {
                        size: 16,
                    }),
                    (0, r.jsx)(_.A, {}),
                    (0, r.jsx)(d.hKd, {
                        size: 16,
                    }),
                    (0, r.jsxs)("div", {
                        className: j.kS,
                        children: [
                            (0, r.jsx)(f.A, {
                                guild: l,
                            }),
                            (0, r.jsxs)("ul", {
                                className: j.q6,
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: E.intl.format(E.t.tKZNlb, {
                                                listingCount: T.length,
                                            }),
                                        }),
                                    }),
                                    null != P &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: E.intl.format(E.t["kXr8+b"], {
                                                    createdYear: P.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: j.$h,
                                children: (0, r.jsx)(u.$nd, {
                                    onClick: N,
                                    icon: x.A,
                                    text: E.intl.string(E.t.jXx1CC),
                                }),
                            }),
                        ],
                    }),
                ],
            });
}
