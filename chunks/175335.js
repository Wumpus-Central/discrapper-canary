n.d(t, { A: () => N }), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(110259),
    l = n(311907),
    c = n(827734),
    u = n(732955),
    d = n(397927),
    f = n(58149),
    p = n(139286),
    _ = n(263063),
    h = n(250627),
    m = n(22007),
    g = n(813516),
    E = n(71393),
    b = n(954571),
    y = n(722888),
    O = n(43136),
    A = n(575926),
    v = n(652215),
    S = n(985018),
    I = n(266847);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e) {
    var t;
    let { guildId: n } = e,
        a = (0, l.bG)([E.A], () => E.A.getGuild(n)),
        { loading: T, subscriptionsSettings: N } = (0, y.G)(n),
        { listingsLoaded: R } = (0, h.bb)(n),
        w = (0, h.fZ)(n, { publishedOnly: !0 }),
        P = i.useCallback(async () => {
            b.default.track(v.HAw.GUILD_SHOP_EMBED_CLICKED, C({}, (0, f.H$)(n))), await (0, m.A)(v.BVt.SERVER_SHOP(n));
        }, [n]);
    (0, p.A)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.GUILD_SHOP_EMBED,
        },
        { disableTrack: null == a },
    );
    let D = w.length > 0 ? new Date(Math.min(...w.map((e) => Date.parse(e.published_at)))) : void 0;
    return T || !R
        ? (0, r.jsx)("div", {
              className: s()(I.lm, I.dc),
              children: (0, r.jsx)(d.y$y, {}),
          })
        : null == a || null == N
          ? null
          : (0, r.jsxs)("div", {
                className: I.lm,
                children: [
                    (0, r.jsx)(O.C, { coverImageAsset: null != (t = N.cover_image_asset) ? t : null }),
                    (0, r.jsx)(d.hKd, { size: 16 }),
                    (0, r.jsxs)("div", {
                        className: I.qs,
                        children: [
                            (0, r.jsx)(A.h, {
                                height: "16px",
                                width: "16px",
                                color: c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, r.jsx)(d.Heading, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: I.Nl,
                                children: S.intl.string(S.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, r.jsx)(d.hKd, { size: 16 }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: S.intl.format(S.t.NZeik9, { guildName: a.name }),
                    }),
                    (0, r.jsx)(d.hKd, { size: 4 }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: N.description,
                    }),
                    (0, r.jsx)(d.hKd, { size: 16 }),
                    (0, r.jsx)(g.A, {}),
                    (0, r.jsx)(d.hKd, { size: 16 }),
                    (0, r.jsxs)("div", {
                        className: I.kS,
                        children: [
                            (0, r.jsx)(_.A, { guild: a }),
                            (0, r.jsxs)("ul", {
                                className: I.q6,
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: S.intl.format(S.t.tKZNlb, { listingCount: w.length }),
                                        }),
                                    }),
                                    null != D &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: S.intl.format(S.t["kXr8+b"], {
                                                    createdYear: D.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: I.$h,
                                children: (0, r.jsx)(u.$nd, {
                                    onClick: P,
                                    icon: A.A,
                                    text: S.intl.string(S.t.jXx1CC),
                                }),
                            }),
                        ],
                    }),
                ],
            });
}
