l.d(t, { Ay: () => P, Wc: () => C, wQ: () => K }), l(321073);
var a = l(627968);
l(64700);
var n = l(503698),
    s = l.n(n),
    r = l(827734),
    i = l(990078),
    c = l(462887),
    o = l(602853),
    u = l(952270),
    T = l(349288),
    E = l(834730),
    d = l(939249),
    p = l(778712),
    _ = l(730134),
    m = l(573648),
    A = l(58149),
    N = l(681819),
    O = l(370480),
    I = l(169869),
    h = l(355971),
    x = l(837057),
    S = l(310419),
    b = l(427157),
    g = l(792831),
    v = l(307600),
    R = l(939496),
    f = l(652215),
    D = l(783419),
    L = l(488995),
    y = l(985018),
    j = l(469110);
function K(e) {
    let t,
        l,
        n,
        {
            connectedAccount: d,
            theme: p,
            locale: _,
            userId: x,
            className: S,
            showMetadata: b,
            showInvisibleIcon: R,
        } = e;
    null == b && (b = !0);
    let L = d.metadata ?? {},
        K = b ? (0, O.An)(L[D.pK.CREATED_AT], _) : null,
        C = (0, o.r)(r.A.unsafe_rawColors.PLATFORM_TWITTER).hex(),
        P = y.intl.string(y.t["6H6h1r"]);
    if (b)
        switch (d.type) {
            case f.fg2.REDDIT:
                t = (0, I.xE)(L);
                break;
            case f.fg2.STEAM:
                t = (0, I.dy)(L);
                break;
            case f.fg2.BLUESKY:
            case f.fg2.MASTODON:
            case f.fg2.TWITTER:
                (t = (0, I.ED)(L)), "1" === L[D.pK.TWITTER_VERIFIED] && ((l = C), (P = y.intl.string(y.t.Jebrww)));
                break;
            case f.fg2.PAYPAL:
                t = (0, I.gZ)(L);
                break;
            case f.fg2.EBAY:
                t = (0, I.ub)(L);
                break;
            case f.fg2.TIKTOK:
                t = (0, I.HU)(L);
        }
    let U = m.A.get((0, N.ML)(d.type)),
        G = U?.getPlatformUserUrl?.(d);
    null != R && R
        ? (n = (0, a.jsx)(u.G, {
              size: "md",
              color: "currentColor",
              className: s()(j.__invalid_connectedAccountOpenIconContainer, j.gE),
          }))
        : null != G &&
          (n = (0, a.jsx)(T.Anchor, {
              href: G,
              "aria-label":
                  U?.name != null
                      ? `${U.name}, ${d.name}, ${y.intl.string(y.t.q5jLJB)}`
                      : `${d.name}, ${y.intl.string(y.t.q5jLJB)}`,
              onClick: (e) => {
                  var t;
                  (t = d.type),
                      (0, A.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t, other_user_id: x }),
                      (0, v.h)({ href: G, trusted: U?.type !== f.fg2.DOMAIN }, e);
              },
              children: (0, a.jsx)(g.A, { className: j.yf, direction: g.A.Directions.RIGHT }),
          }));
    let B = (0, o.r)(r.A.colors.ICON_MUTED).hex(),
        V = (0, o.r)(r.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        M = d.verified
            ? (0, a.jsx)(h.A, { className: j.sU, color: l ?? B, forcedIconColor: V, size: 16, tooltipText: P })
            : null;
    return (0, a.jsxs)("li", {
        className: s()(j.WD, (null != t && t.length > 0) || null != K ? j.l1 : null, S),
        children: [
            (0, a.jsxs)("div", {
                className: j.dF,
                children: [
                    (0, a.jsx)(i.m, {
                        __unsupportedReactNodeAsText: U?.name,
                        children: (0, a.jsx)("img", {
                            alt: y.intl.formatToPlainString(y.t.rtm15P, { name: U?.name }),
                            className: j.cS,
                            src: (0, c.M)(p) ? U?.icon.darkSVG : U?.icon.lightSVG,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: j.Hm,
                        children: [
                            (0, a.jsxs)("div", {
                                className: j.Ky,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: j.O3,
                                        children: [
                                            (0, a.jsx)(i.m, {
                                                overflowOnly: !0,
                                                text: d.name,
                                                children: (0, a.jsx)(E.E, {
                                                    variant: "text-sm/medium",
                                                    color: "interactive-text-active",
                                                    className: j.vc,
                                                    children: d.name,
                                                }),
                                            }),
                                            M,
                                        ],
                                    }),
                                    n,
                                ],
                            }),
                            null != K
                                ? (0, a.jsx)(E.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: y.intl.format(y.t["9rfonh"], { date: K }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != t && t.length > 0 ? (0, a.jsx)("div", { className: j.Gm, children: t }) : null,
        ],
    });
}
function C(e) {
    let { applicationRoleConnection: t, className: l, locale: n, onApplicationClicked: r, selectedGuildId: i } = e,
        c = (0, I.VW)(t, n),
        o = () => {
            r?.(),
                (0, x.transitionToGlobalDiscovery)({
                    tab: L.GlobalDiscoveryTab.APPS,
                    applicationId: t.application.id,
                    newSessionState: { entrypoint: { name: S.sW.APPLICATION_DIRECTORY_URL }, guildId: i },
                });
        };
    return (0, a.jsxs)("li", {
        className: s()(j.WD, null != c && c.length > 0 ? j.l1 : null, l),
        children: [
            (0, a.jsx)("div", {
                className: j.dF,
                children: (0, a.jsxs)(d.D, {
                    className: s()(j.Hm, j.b1),
                    onClick: o,
                    children: [
                        null != t.platform_name
                            ? (0, a.jsx)(E.E, {
                                  variant: "eyebrow",
                                  color: "interactive-text-default",
                                  children: t.platform_name,
                              })
                            : null,
                        null != t.platform_username
                            ? (0, a.jsx)("div", {
                                  className: j.Ky,
                                  children: (0, a.jsx)("div", {
                                      className: j.O3,
                                      children: (0, a.jsx)(E.E, {
                                          variant: "text-sm/medium",
                                          color: "interactive-text-active",
                                          className: j.vc,
                                          children: t.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != c && c.length > 0 ? (0, a.jsx)("div", { className: s()(j.Gm, j.en), children: c }) : null,
            (0, a.jsx)("div", {
                children: (0, a.jsx)(d.D, {
                    className: j.od,
                    onClick: o,
                    children: (0, a.jsx)(E.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: y.intl.format(y.t.zIT9YA, {
                            applicationHook: () =>
                                (0, a.jsxs)("div", {
                                    className: j.hT,
                                    children: [
                                        null != t.application.bot
                                            ? (0, a.jsx)(_.A, { user: new b.A(t.application.bot), size: p._3.SIZE_16 })
                                            : null,
                                        (0, a.jsx)(E.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: t.application.name,
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
    let { connectedAccounts: t, locale: l, className: n, userId: r } = e,
        { theme: i } = (0, R.E)();
    if (null == t || 0 === t.length) return null;
    let c = t.map((e) => (0, a.jsx)(K, { connectedAccount: e, theme: i, locale: l, userId: r }, `${e.type}:${e.id}`)),
        o = [],
        u = [];
    for (let e = 0; e < c.length; e++) {
        let t = c[e];
        e % 2 == 0 ? o.push(t) : u.push(t);
    }
    return (0, a.jsxs)("ul", {
        className: s()(j._0, n),
        children: [
            (0, a.jsx)("div", { className: j.Yy, children: o }),
            (0, a.jsx)("div", { className: j.Yy, children: u }),
        ],
    });
}
