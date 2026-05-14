n.d(l, { Ay: () => P, Wc: () => S, wQ: () => w }), n(321073);
var a = n(627968);
n(64700);
var t = n(503698),
    s = n.n(t),
    i = n(661531),
    r = n(990078),
    c = n(462887),
    o = n(602853),
    d = n(952270),
    m = n(349288),
    u = n(834730),
    h = n(939249),
    x = n(778712),
    p = n(730134),
    f = n(573648),
    j = n(95561),
    T = n(874490),
    v = n(370480),
    A = n(169869),
    E = n(355971),
    N = n(837057),
    _ = n(310419),
    g = n(889227),
    I = n(792831),
    C = n(123917),
    b = n(939496),
    y = n(652215),
    D = n(783419),
    k = n(488995),
    O = n(375708),
    R = n(469110);
function w(e) {
    let l,
        n,
        t,
        {
            connectedAccount: h,
            theme: x,
            locale: p,
            userId: N,
            className: _,
            showMetadata: g,
            showInvisibleIcon: b,
        } = e;
    null == g && (g = !0);
    let k = h.metadata ?? {},
        w = g ? (0, v.An)(k[D.pK.CREATED_AT], p) : null,
        S = (0, o.r)(i.A.unsafe_rawColors.PLATFORM_TWITTER).hex(),
        P = O.intl.string(O.t["6H6h1r"]);
    if (g)
        switch (h.type) {
            case y.fg2.REDDIT:
                l = (0, A.xE)(k);
                break;
            case y.fg2.STEAM:
                l = (0, A.dy)(k);
                break;
            case y.fg2.BLUESKY:
            case y.fg2.MASTODON:
            case y.fg2.TWITTER:
                (l = (0, A.ED)(k)), "1" === k[D.pK.TWITTER_VERIFIED] && ((n = S), (P = O.intl.string(O.t.Jebrww)));
                break;
            case y.fg2.PAYPAL:
                l = (0, A.gZ)(k);
                break;
            case y.fg2.EBAY:
                l = (0, A.ub)(k);
                break;
            case y.fg2.TIKTOK:
                l = (0, A.HU)(k);
        }
    let W = f.A.get((0, T.ML)(h.type)),
        G = W?.getPlatformUserUrl?.(h);
    null != b && b
        ? (t = (0, a.jsx)(d.G, {
              size: "md",
              color: "currentColor",
              className: s()(R.__invalid_connectedAccountOpenIconContainer, R.gE),
          }))
        : null != G &&
          (t = (0, a.jsx)(m.Anchor, {
              href: G,
              "aria-label":
                  W?.name != null
                      ? `${W.name}, ${h.name}, ${O.intl.string(O.t.q5jLJB)}`
                      : `${h.name}, ${O.intl.string(O.t.q5jLJB)}`,
              onClick: (e) => {
                  var l;
                  (l = h.type),
                      (0, j.zV)(y.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l, other_user_id: N }),
                      (0, C.h)({ href: G, trusted: W?.type !== y.fg2.DOMAIN }, e);
              },
              children: (0, a.jsx)(I.A, { className: R.yf, direction: I.A.Directions.RIGHT }),
          }));
    let L = (0, o.r)(i.A.colors.ICON_MUTED).hex(),
        U = (0, o.r)(i.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        V = h.verified
            ? (0, a.jsx)(E.A, { className: R.sU, color: n ?? L, forcedIconColor: U, size: 16, tooltipText: P })
            : null;
    return (0, a.jsxs)("li", {
        className: s()(R.WD, (null != l && l.length > 0) || null != w ? R.l1 : null, _),
        children: [
            (0, a.jsxs)("div", {
                className: R.dF,
                children: [
                    (0, a.jsx)(r.m, {
                        __unsupportedReactNodeAsText: W?.name,
                        children: (0, a.jsx)("img", {
                            alt: O.intl.formatToPlainString(O.t.rtm15P, { name: W?.name }),
                            className: R.cS,
                            src: (0, c.M)(x) ? W?.icon.darkSVG : W?.icon.lightSVG,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: R.Hm,
                        children: [
                            (0, a.jsxs)("div", {
                                className: R.Ky,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: R.O3,
                                        children: [
                                            (0, a.jsx)(r.m, {
                                                overflowOnly: !0,
                                                text: h.name,
                                                children: (0, a.jsx)(u.E, {
                                                    variant: "text-sm/medium",
                                                    color: "interactive-text-active",
                                                    className: R.vc,
                                                    children: h.name,
                                                }),
                                            }),
                                            V,
                                        ],
                                    }),
                                    t,
                                ],
                            }),
                            null != w
                                ? (0, a.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: O.intl.format(O.t["9rfonh"], { date: w }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != l && l.length > 0 ? (0, a.jsx)("div", { className: R.Gm, children: l }) : null,
        ],
    });
}
function S(e) {
    let { applicationRoleConnection: l, className: n, locale: t, onApplicationClicked: i, selectedGuildId: r } = e,
        c = (0, A.VW)(l, t),
        o = () => {
            i?.(),
                (0, N.transitionToGlobalDiscovery)({
                    tab: k.GlobalDiscoveryTab.APPS,
                    applicationId: l.application.id,
                    newSessionState: { entrypoint: { name: _.sW.APPLICATION_DIRECTORY_URL }, guildId: r },
                });
        };
    return (0, a.jsxs)("li", {
        className: s()(R.WD, null != c && c.length > 0 ? R.l1 : null, n),
        children: [
            (0, a.jsx)("div", {
                className: R.dF,
                children: (0, a.jsxs)(h.D, {
                    className: s()(R.Hm, R.b1),
                    onClick: o,
                    children: [
                        null != l.platform_name
                            ? (0, a.jsx)(u.E, {
                                  variant: "eyebrow",
                                  color: "interactive-text-default",
                                  children: l.platform_name,
                              })
                            : null,
                        null != l.platform_username
                            ? (0, a.jsx)("div", {
                                  className: R.Ky,
                                  children: (0, a.jsx)("div", {
                                      className: R.O3,
                                      children: (0, a.jsx)(u.E, {
                                          variant: "text-sm/medium",
                                          color: "interactive-text-active",
                                          className: R.vc,
                                          children: l.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != c && c.length > 0 ? (0, a.jsx)("div", { className: s()(R.Gm, R.en), children: c }) : null,
            (0, a.jsx)("div", {
                children: (0, a.jsx)(h.D, {
                    className: R.od,
                    onClick: o,
                    children: (0, a.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: O.intl.format(O.t.zIT9YA, {
                            applicationHook: () =>
                                (0, a.jsxs)("div", {
                                    className: R.hT,
                                    children: [
                                        null != l.application.bot
                                            ? (0, a.jsx)(p.A, { user: new g.A(l.application.bot), size: x._3.SIZE_16 })
                                            : null,
                                        (0, a.jsx)(u.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: l.application.name,
                                        }),
                                    ],
                                }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function P(e) {
    let { connectedAccounts: l, locale: n, className: t, userId: i } = e,
        { theme: r } = (0, b.E)();
    if (null == l || 0 === l.length) return null;
    let c = l.map((e) => (0, a.jsx)(w, { connectedAccount: e, theme: r, locale: n, userId: i }, `${e.type}:${e.id}`)),
        o = [],
        d = [];
    for (let e = 0; e < c.length; e++) {
        let l = c[e];
        e % 2 == 0 ? o.push(l) : d.push(l);
    }
    return (0, a.jsxs)("ul", {
        className: s()(R._0, t),
        children: [
            (0, a.jsx)("div", { className: R.Yy, children: o }),
            (0, a.jsx)("div", { className: R.Yy, children: d }),
        ],
    });
}
