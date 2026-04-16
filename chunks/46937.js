l.d(t, { Ay: () => L, Wc: () => D, wQ: () => f }), l(321073);
var a = l(627968);
l(64700);
var n = l(503698),
    s = l.n(n),
    r = l(827734),
    i = l(990078),
    c = l(582754),
    o = l(397927),
    u = l(730134),
    T = l(573648),
    d = l(58149),
    E = l(681819),
    p = l(370480),
    _ = l(169869),
    m = l(355971),
    A = l(837057),
    N = l(310419),
    x = l(427157),
    h = l(792831),
    O = l(307600),
    I = l(939496),
    S = l(652215),
    b = l(783419),
    g = l(488995),
    v = l(985018),
    R = l(469110);
function f(e) {
    let t,
        l,
        n,
        {
            connectedAccount: u,
            theme: A,
            locale: N,
            userId: x,
            className: I,
            showMetadata: g,
            showInvisibleIcon: f,
        } = e;
    null == g && (g = !0);
    let D = u.metadata ?? {},
        L = g ? (0, p.An)(D[b.pK.CREATED_AT], N) : null,
        y = (0, o.rdh)(r.A.unsafe_rawColors.PLATFORM_TWITTER).hex(),
        j = v.intl.string(v.t["6H6h1r"]);
    if (g)
        switch (u.type) {
            case S.fg2.REDDIT:
                t = (0, _.xE)(D);
                break;
            case S.fg2.STEAM:
                t = (0, _.dy)(D);
                break;
            case S.fg2.BLUESKY:
            case S.fg2.MASTODON:
            case S.fg2.TWITTER:
                (t = (0, _.ED)(D)), "1" === D[b.pK.TWITTER_VERIFIED] && ((l = y), (j = v.intl.string(v.t.Jebrww)));
                break;
            case S.fg2.PAYPAL:
                t = (0, _.gZ)(D);
                break;
            case S.fg2.EBAY:
                t = (0, _.ub)(D);
                break;
            case S.fg2.TIKTOK:
                t = (0, _.HU)(D);
        }
    let K = T.A.get((0, E.ML)(u.type)),
        C = K?.getPlatformUserUrl?.(u);
    null != f && f
        ? (n = (0, a.jsx)(o.G3N, {
              size: "md",
              color: "currentColor",
              className: s()(R.__invalid_connectedAccountOpenIconContainer, R.gE),
          }))
        : null != C &&
          (n = (0, a.jsx)(o.MzZ, {
              href: C,
              "aria-label":
                  K?.name != null
                      ? `${K.name}, ${u.name}, ${v.intl.string(v.t.q5jLJB)}`
                      : `${u.name}, ${v.intl.string(v.t.q5jLJB)}`,
              onClick: (e) => {
                  var t;
                  (t = u.type),
                      (0, d.zV)(S.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t, other_user_id: x }),
                      (0, O.h)({ href: C, trusted: K?.type !== S.fg2.DOMAIN }, e);
              },
              children: (0, a.jsx)(h.A, { className: R.yf, direction: h.A.Directions.RIGHT }),
          }));
    let P = (0, o.rdh)(r.A.colors.ICON_MUTED).hex(),
        U = (0, o.rdh)(r.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        G = u.verified
            ? (0, a.jsx)(m.A, { className: R.sU, color: l ?? P, forcedIconColor: U, size: 16, tooltipText: j })
            : null;
    return (0, a.jsxs)("li", {
        className: s()(R.WD, (null != t && t.length > 0) || null != L ? R.l1 : null, I),
        children: [
            (0, a.jsxs)("div", {
                className: R.dF,
                children: [
                    (0, a.jsx)(i.m, {
                        __unsupportedReactNodeAsText: K?.name,
                        children: (0, a.jsx)("img", {
                            alt: v.intl.formatToPlainString(v.t.rtm15P, { name: K?.name }),
                            className: R.cS,
                            src: (0, c.Mw)(A) ? K?.icon.darkSVG : K?.icon.lightSVG,
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
                                            (0, a.jsx)(i.m, {
                                                overflowOnly: !0,
                                                text: u.name,
                                                children: (0, a.jsx)(o.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "interactive-text-active",
                                                    className: R.vc,
                                                    children: u.name,
                                                }),
                                            }),
                                            G,
                                        ],
                                    }),
                                    n,
                                ],
                            }),
                            null != L
                                ? (0, a.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: v.intl.format(v.t["9rfonh"], { date: L }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != t && t.length > 0 ? (0, a.jsx)("div", { className: R.Gm, children: t }) : null,
        ],
    });
}
function D(e) {
    let { applicationRoleConnection: t, className: l, locale: n, onApplicationClicked: r, selectedGuildId: i } = e,
        c = (0, _.VW)(t, n),
        T = () => {
            r?.(),
                (0, A.transitionToGlobalDiscovery)({
                    tab: g.GlobalDiscoveryTab.APPS,
                    applicationId: t.application.id,
                    newSessionState: { entrypoint: { name: N.sW.APPLICATION_DIRECTORY_URL }, guildId: i },
                });
        };
    return (0, a.jsxs)("li", {
        className: s()(R.WD, null != c && c.length > 0 ? R.l1 : null, l),
        children: [
            (0, a.jsx)("div", {
                className: R.dF,
                children: (0, a.jsxs)(o.DUT, {
                    className: s()(R.Hm, R.b1),
                    onClick: T,
                    children: [
                        null != t.platform_name
                            ? (0, a.jsx)(o.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-text-default",
                                  children: t.platform_name,
                              })
                            : null,
                        null != t.platform_username
                            ? (0, a.jsx)("div", {
                                  className: R.Ky,
                                  children: (0, a.jsx)("div", {
                                      className: R.O3,
                                      children: (0, a.jsx)(o.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-text-active",
                                          className: R.vc,
                                          children: t.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != c && c.length > 0 ? (0, a.jsx)("div", { className: s()(R.Gm, R.en), children: c }) : null,
            (0, a.jsx)("div", {
                children: (0, a.jsx)(o.DUT, {
                    className: R.od,
                    onClick: T,
                    children: (0, a.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: v.intl.format(v.t.zIT9YA, {
                            applicationHook: () =>
                                (0, a.jsxs)("div", {
                                    className: R.hT,
                                    children: [
                                        null != t.application.bot
                                            ? (0, a.jsx)(u.A, { user: new x.A(t.application.bot), size: o._3J.SIZE_16 })
                                            : null,
                                        (0, a.jsx)(o.Text, {
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
function L(e) {
    let { connectedAccounts: t, locale: l, className: n, userId: r } = e,
        { theme: i } = (0, I.E)();
    if (null == t || 0 === t.length) return null;
    let c = t.map((e) => (0, a.jsx)(f, { connectedAccount: e, theme: i, locale: l, userId: r }, `${e.type}:${e.id}`)),
        o = [],
        u = [];
    for (let e = 0; e < c.length; e++) {
        let t = c[e];
        e % 2 == 0 ? o.push(t) : u.push(t);
    }
    return (0, a.jsxs)("ul", {
        className: s()(R._0, n),
        children: [
            (0, a.jsx)("div", { className: R.Yy, children: o }),
            (0, a.jsx)("div", { className: R.Yy, children: u }),
        ],
    });
}
