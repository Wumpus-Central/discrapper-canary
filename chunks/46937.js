t.d(l, {
    Ay: () => S,
    Wc: () => P,
    wQ: () => T,
}),
    t(321073);
var n = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    s = t(827734),
    a = t(990078),
    o = t(582754),
    d = t(397927),
    c = t(730134),
    u = t(573648),
    f = t(58149),
    p = t(681819),
    m = t(370480),
    x = t(169869),
    A = t(355971),
    j = t(837057),
    h = t(310419),
    g = t(427157),
    v = t(792831),
    b = t(307600),
    I = t(939496),
    y = t(652215),
    O = t(783419),
    N = t(488995),
    E = t(985018),
    _ = t(712601);

function T(e) {
    var l, t;
    let i,
        c,
        j,
        {
            connectedAccount: h,
            theme: g,
            locale: I,
            userId: N,
            className: T,
            showMetadata: P,
            showInvisibleIcon: S,
        } = e;
    null == P && (P = !0);
    let C = null != (l = h.metadata) ? l : {},
        L = P ? (0, m.An)(C[O.pK.CREATED_AT], I) : null,
        D = (0, d.rdh)(s.A.unsafe_rawColors.TWITTER).hex(),
        R = E.intl.string(E.t["6H6h1r"]);
    if (P)
        switch (h.type) {
            case y.fg2.REDDIT:
                i = (0, x.xE)(C);
                break;
            case y.fg2.STEAM:
                i = (0, x.dy)(C);
                break;
            case y.fg2.BLUESKY:
            case y.fg2.MASTODON:
            case y.fg2.TWITTER:
                (i = (0, x.ED)(C)), "1" === C[O.pK.TWITTER_VERIFIED] && ((c = D), (R = E.intl.string(E.t.Jebrww)));
                break;
            case y.fg2.PAYPAL:
                i = (0, x.gZ)(C);
                break;
            case y.fg2.EBAY:
                i = (0, x.ub)(C);
                break;
            case y.fg2.TIKTOK:
                i = (0, x.HU)(C);
        }
    let w = u.A.get((0, p.ML)(h.type)),
        G = null == w || null == (t = w.getPlatformUserUrl) ? void 0 : t.call(w, h);
    null != S && S
        ? (j = (0, n.jsx)(d.G3N, {
              size: "md",
              color: "currentColor",
              className: r()(_.__invalid_connectedAccountOpenIconContainer, _.gE),
          }))
        : null != G &&
          (j = (0, n.jsx)(d.MzZ, {
              href: G,
              "aria-label":
                  (null == w ? void 0 : w.name) != null
                      ? "".concat(w.name, ", ").concat(h.name, ", ").concat(E.intl.string(E.t.q5jLJB))
                      : "".concat(h.name, ", ").concat(E.intl.string(E.t.q5jLJB)),
              onClick: (e) => {
                  var l;
                  (l = h.type),
                      (0, f.zV)(y.HAw.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: l,
                          other_user_id: N,
                      }),
                      (0, b.h)(
                          {
                              href: G,
                              trusted: (null == w ? void 0 : w.type) !== y.fg2.DOMAIN,
                          },
                          e,
                      );
              },
              children: (0, n.jsx)(v.A, {
                  className: _.yf,
                  direction: v.A.Directions.RIGHT,
              }),
          }));
    let M = (0, d.rdh)(s.A.colors.ICON_MUTED).hex(),
        U = (0, d.rdh)(s.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        k = h.verified
            ? (0, n.jsx)(A.A, {
                  className: _.sU,
                  color: null != c ? c : M,
                  forcedIconColor: U,
                  size: 16,
                  tooltipText: R,
              })
            : null;
    return (0, n.jsxs)("li", {
        className: r()(_.WD, (null != i && i.length > 0) || null != L ? _.l1 : null, T),
        children: [
            (0, n.jsxs)("div", {
                className: _.dF,
                children: [
                    (0, n.jsx)(a.m, {
                        __unsupportedReactNodeAsText: null == w ? void 0 : w.name,
                        children: (0, n.jsx)("img", {
                            alt: E.intl.formatToPlainString(E.t.rtm15P, {
                                name: null == w ? void 0 : w.name,
                            }),
                            className: _.cS,
                            src: (0, o.Mw)(g)
                                ? null == w
                                    ? void 0
                                    : w.icon.darkSVG
                                : null == w
                                  ? void 0
                                  : w.icon.lightSVG,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: _.Hm,
                        children: [
                            (0, n.jsxs)("div", {
                                className: _.Ky,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: _.O3,
                                        children: [
                                            (0, n.jsx)(a.m, {
                                                overflowOnly: !0,
                                                text: h.name,
                                                children: (0, n.jsx)(d.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "interactive-text-active",
                                                    className: _.vc,
                                                    children: h.name,
                                                }),
                                            }),
                                            k,
                                        ],
                                    }),
                                    j,
                                ],
                            }),
                            null != L
                                ? (0, n.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: E.intl.format(E.t["9rfonh"], {
                                          date: L,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != i && i.length > 0
                ? (0, n.jsx)("div", {
                      className: _.Gm,
                      children: i,
                  })
                : null,
        ],
    });
}

function P(e) {
    let { applicationRoleConnection: l, className: t, locale: i, onApplicationClicked: s, selectedGuildId: a } = e,
        o = (0, x.VW)(l, i),
        u = () => {
            null == s || s(),
                (0, j.transitionToGlobalDiscovery)({
                    tab: N.GlobalDiscoveryTab.APPS,
                    applicationId: l.application.id,
                    newSessionState: {
                        entrypoint: {
                            name: h.sW.APPLICATION_DIRECTORY_URL,
                        },
                        guildId: a,
                    },
                });
        };
    return (0, n.jsxs)("li", {
        className: r()(_.WD, null != o && o.length > 0 ? _.l1 : null, t),
        children: [
            (0, n.jsx)("div", {
                className: _.dF,
                children: (0, n.jsxs)(d.DUT, {
                    className: r()(_.Hm, _.b1),
                    onClick: u,
                    children: [
                        null != l.platform_name
                            ? (0, n.jsx)(d.Text, {
                                  variant: "eyebrow",
                                  color: "interactive-text-default",
                                  children: l.platform_name,
                              })
                            : null,
                        null != l.platform_username
                            ? (0, n.jsx)("div", {
                                  className: _.Ky,
                                  children: (0, n.jsx)("div", {
                                      className: _.O3,
                                      children: (0, n.jsx)(d.Text, {
                                          variant: "text-sm/medium",
                                          color: "interactive-text-active",
                                          className: _.vc,
                                          children: l.platform_username,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            null != o && o.length > 0
                ? (0, n.jsx)("div", {
                      className: r()(_.Gm, _.en),
                      children: o,
                  })
                : null,
            (0, n.jsx)("div", {
                children: (0, n.jsx)(d.DUT, {
                    className: _.od,
                    onClick: u,
                    children: (0, n.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: E.intl.format(E.t.zIT9YA, {
                            applicationHook: () =>
                                (0, n.jsxs)("div", {
                                    className: _.hT,
                                    children: [
                                        null != l.application.bot
                                            ? (0, n.jsx)(c.A, {
                                                  user: new g.A(l.application.bot),
                                                  size: d._3J.SIZE_16,
                                              })
                                            : null,
                                        (0, n.jsx)(d.Text, {
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

function S(e) {
    let { connectedAccounts: l, locale: t, className: i, userId: s } = e,
        { theme: a } = (0, I.E)();
    if (null == l || 0 === l.length) return null;
    let o = l.map((e) =>
            (0, n.jsx)(
                T,
                {
                    connectedAccount: e,
                    theme: a,
                    locale: t,
                    userId: s,
                },
                "".concat(e.type, ":").concat(e.id),
            ),
        ),
        d = [],
        c = [];
    for (let e = 0; e < o.length; e++) {
        let l = o[e];
        e % 2 == 0 ? d.push(l) : c.push(l);
    }
    return (0, n.jsxs)("ul", {
        className: r()(_._0, i),
        children: [
            (0, n.jsx)("div", {
                className: _.Yy,
                children: d,
            }),
            (0, n.jsx)("div", {
                className: _.Yy,
                children: c,
            }),
        ],
    });
}
