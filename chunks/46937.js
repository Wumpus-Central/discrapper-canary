n(321073);
var a = n(477900);
n(582128);
var s = n(503698),
    t = n.n(s),
    i = n(646514),
    r = n(462887),
    c = n(602853),
    o = n(952270),
    d = n(28863),
    m = n(866665),
    u = n(834730),
    h = n(939249),
    x = n(778712),
    p = n(730134),
    f = n(573648),
    T = n(149468),
    j = n(643068),
    E = n(370480),
    v = n(169869),
    A = n(355971),
    N = n(837057),
    g = n(310419),
    _ = n(619019),
    I = n(792831),
    b = n(889558),
    y = n(939496),
    C = n(652215),
    D = n(783419),
    k = n(488995),
    O = n(792996),
    R = n(576307);
function S(e) {
    let l,
        n,
        s,
        {
            connectedAccount: h,
            theme: x,
            locale: p,
            userId: N,
            className: g,
            showMetadata: _,
            showInvisibleIcon: y,
        } = e;
    null == _ && (_ = !0);
    let k = h.metadata ?? {},
        S = _ ? (0, E.An)(k[D.pK.CREATED_AT], p) : null,
        w = (0, c.r)(i.A.unsafe_rawColors.PLATFORM_TWITTER).hex(),
        P = O.intl.string(O.t["6H6h1r"]);
    if (_)
        switch (h.type) {
            case C.fg2.REDDIT:
                l = (0, v.xE)(k);
                break;
            case C.fg2.STEAM:
                l = (0, v.dy)(k);
                break;
            case C.fg2.LETTERBOXD:
                l = (0, v.uq)(k);
                break;
            case C.fg2.BLUESKY:
            case C.fg2.MASTODON:
            case C.fg2.TWITTER:
                ((l = (0, v.ED)(k)), "1" === k[D.pK.TWITTER_VERIFIED] && ((n = w), (P = O.intl.string(O.t.Jebrww))));
                break;
            case C.fg2.PAYPAL:
                l = (0, v.gZ)(k);
                break;
            case C.fg2.EBAY:
                l = (0, v.ub)(k);
                break;
            case C.fg2.TIKTOK:
                l = (0, v.HU)(k);
        }
    let L = f.A.get((0, j.ML)(h.type)),
        W = L?.getPlatformUserUrl?.(h);
    null != y && y
        ? (s = (0, a.jsx)(o.EyeSlashIcon, {
              size: "md",
              color: "currentColor",
              className: t()(R.__invalid_connectedAccountOpenIconContainer, R.gE),
          }))
        : null != W &&
          (s = (0, a.jsx)(d.Anchor, {
              href: W,
              "aria-label":
                  L?.name != null
                      ? `${L.name}, ${h.name}, ${O.intl.string(O.t.q5jLJB)}`
                      : `${h.name}, ${O.intl.string(O.t.q5jLJB)}`,
              onClick: (e) => {
                  var l;
                  ((l = h.type),
                      (0, T.zV)(C.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l, other_user_id: N }),
                      (0, b.h)({ href: W, trusted: L?.type !== C.fg2.DOMAIN }, e));
              },
              children: (0, a.jsx)(I.A, { className: R.yf, direction: I.A.Directions.RIGHT }),
          }));
    let U = (0, c.r)(i.A.colors.ICON_MUTED).hex(),
        V = (0, c.r)(i.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        G = h.verified
            ? (0, a.jsx)(A.A, { className: R.sU, color: n ?? U, forcedIconColor: V, size: 16, tooltipText: P })
            : null;
    return (0, a.jsxs)("li", {
        className: t()(R.WD, (null != l && l.length > 0) || null != S ? R.l1 : null, g),
        children: [
            (0, a.jsxs)("div", {
                className: R.dF,
                children: [
                    (0, a.jsx)(m.m, {
                        __unsupportedReactNodeAsText: L?.name,
                        children: (0, a.jsx)("img", {
                            alt: O.intl.formatToPlainString(O.t.rtm15P, { name: L?.name }),
                            className: R.cS,
                            src: (0, r.M)(x) ? L?.icon.darkSVG : L?.icon.lightSVG,
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
                                            (0, a.jsx)(m.m, {
                                                overflowOnly: !0,
                                                text: h.name,
                                                children: (0, a.jsx)(u.E, {
                                                    variant: "body-sm/medium",
                                                    color: "interactive-text-active",
                                                    className: R.vc,
                                                    children: h.name,
                                                }),
                                            }),
                                            G,
                                        ],
                                    }),
                                    s,
                                ],
                            }),
                            null != S
                                ? (0, a.jsx)(u.E, {
                                      variant: "body-xs/normal",
                                      color: "text-default",
                                      children: O.intl.format(O.t["9rfonh"], { date: S }),
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
n.d(
    l,
    {},
    {
        Ay: function (e) {
            let { connectedAccounts: l, locale: n, className: s, userId: i } = e,
                { theme: r } = (0, y.E)();
            if (null == l || 0 === l.length) return null;
            let c = l.map((e) =>
                    (0, a.jsx)(S, { connectedAccount: e, theme: r, locale: n, userId: i }, `${e.type}:${e.id}`),
                ),
                o = [],
                d = [];
            for (let e = 0; e < c.length; e++) {
                let l = c[e];
                e % 2 == 0 ? o.push(l) : d.push(l);
            }
            return (0, a.jsxs)("ul", {
                className: t()(R._0, s),
                children: [
                    (0, a.jsx)("div", { className: R.Yy, children: o }),
                    (0, a.jsx)("div", { className: R.Yy, children: d }),
                ],
            });
        },
        Wc: function (e) {
            let {
                    applicationRoleConnection: l,
                    className: n,
                    locale: s,
                    onApplicationClicked: i,
                    selectedGuildId: r,
                } = e,
                c = (0, v.VW)(l, s);
            function o() {
                (i?.(),
                    (0, N.transitionToGlobalDiscovery)({
                        tab: k.GlobalDiscoveryTab.APPS,
                        applicationId: l.application.id,
                        newSessionState: { entrypoint: { name: g.sW.APPLICATION_DIRECTORY_URL }, guildId: r },
                    }));
            }
            return (0, a.jsxs)("li", {
                className: t()(R.WD, null != c && c.length > 0 ? R.l1 : null, n),
                children: [
                    (0, a.jsx)("div", {
                        className: R.dF,
                        children: (0, a.jsxs)(h.D, {
                            className: t()(R.Hm, R.b1),
                            onClick: o,
                            children: [
                                null != l.platform_name
                                    ? (0, a.jsx)(u.E, {
                                          variant: "body-sm/medium",
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
                                                  variant: "body-sm/medium",
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
                    null != c && c.length > 0 ? (0, a.jsx)("div", { className: t()(R.Gm, R.en), children: c }) : null,
                    (0, a.jsx)("div", {
                        children: (0, a.jsx)(h.D, {
                            className: R.od,
                            onClick: o,
                            children: (0, a.jsx)(u.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: O.intl.format(O.t.zIT9YA, {
                                    applicationHook: () =>
                                        (0, a.jsxs)("div", {
                                            className: R.hT,
                                            children: [
                                                null != l.application.bot
                                                    ? (0, a.jsx)(p.A, {
                                                          user: new _.A(l.application.bot),
                                                          size: x._3.SIZE_16,
                                                      })
                                                    : null,
                                                (0, a.jsx)(u.E, {
                                                    variant: "body-xs/normal",
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
        },
        wQ: S,
    },
);
