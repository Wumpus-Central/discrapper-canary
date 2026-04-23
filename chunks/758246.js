n.d(t, { A: () => V, j: () => F }), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700);
n(516773);
var s = n(311907),
    r = n(36525),
    a = n(862482),
    o = n(260598),
    d = n(331322),
    c = n(452027),
    u = n(821609),
    m = n(834730),
    g = n(691885),
    h = n(292666),
    x = n(241326),
    _ = n(404778),
    p = n(573613),
    A = n(187322),
    E = n(534514),
    f = n(696986),
    j = n(416052),
    N = n(611371),
    I = n(938925),
    C = n(460760),
    b = n(776231),
    v = n(946274),
    S = n(342298),
    T = n(576705),
    y = n(486020),
    R = n(975571),
    L = n(997509),
    D = n(555337),
    O = n(458907),
    G = n(719175),
    M = n(643674),
    k = n(156057),
    U = n(652215),
    w = n(985018),
    P = n(694851);
let B = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
    F = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n,
        } = (0, s.cf)([D.A], () => ({
            submitting: D.A.isSubmitting(),
            guild: D.A.getGuild(),
            guildMetadata: D.A.getMetadata(),
        }));
        return (0, i.jsx)(r.A, {
            submitting: n,
            onReset: () => {
                null != e && L.A.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (L.A.saveGuild(e.id, { discoverySplash: e.discoverySplash, description: e.description }),
                    (0, C.Oh)({
                        guildId: e.id,
                        primaryCategoryId: t.primaryCategoryId,
                        keywords: t.keywords,
                        emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled,
                        partnerActionedTimestamp: t.partnerActionedTimestamp,
                        partnerApplicationTimestamp: t.partnerApplicationTimestamp,
                        isPublished: t.isPublished,
                        reasonsToJoin: t.reasonsToJoin,
                        socialLinks: t.socialLinks.filter((e) => e),
                        about: t.about,
                    }));
            },
        });
    },
    H = () => {
        let e = l.useRef(null),
            t = (0, s.bG)([D.A], () => D.A.getGuild()),
            [r, F] = l.useState(!1);
        l.useEffect(() => {
            r || null == t || ((0, C.Mu)(), (0, C.mo)(t.id), (0, C.ax)(t.id), F(!0));
        }, [t, r]);
        let { canManageGuild: H } = (0, s.cf)([T.A], () => ({ canManageGuild: T.A.can(U.xBc.MANAGE_GUILD, t) })),
            V = (0, s.bG)([D.A], () => D.A.isGuildMetadataLoaded()),
            z = (0, s.bG)([D.A], () => (null != t ? D.A.getMetadata() : null)),
            W = (0, s.bG)([D.A], () => (null != t && z?.isPublished ? D.A.getSlug() : null)),
            [Y, K] = l.useState([!0]),
            [X, Z] = l.useState(!0),
            [J, q] = l.useState([!1]),
            [Q, $] = l.useState([""]);
        l.useEffect(() => {
            if (null !== z) {
                let e = [],
                    t = [];
                z.socialLinks.forEach((n, i) => {
                    if ("" !== n) {
                        let l = ((e) => {
                            try {
                                let t = new URL(e).hostname.split(".");
                                if (3 === t.length && "bandcamp" === t[1].toLowerCase())
                                    return k.x.bandcamp.presentation;
                                let n = t.shift()?.toLowerCase() ?? "";
                                if (("www" === n && (n = t.shift()?.toLowerCase() ?? ""), n in k.x))
                                    return k.x[n].presentation;
                                return null;
                            } catch {
                                return null;
                            }
                        })(n);
                        null !== l ? ((t[i] = l), (e[i] = !0)) : (e[i] = !1);
                    } else e[i] = !0;
                }),
                    $(t),
                    K(e),
                    Z(e.every((e) => !0 === e));
            }
        }, [z]);
        let ee = (0, s.bG)([D.A], () => (null != t ? D.A.getErrors() : null));
        if (null == t || null == z) return null;
        let et = (e) => {
                L.A.updateGuild({ discoverySplash: e });
            },
            en = (e) => {
                let i = () => {
                    (0, C.Ok)(t.id, e),
                        e
                            ? (0, C.Oh)({
                                  guildId: t.id,
                                  primaryCategoryId: z.primaryCategoryId,
                                  keywords: z.keywords,
                                  emojiDiscoverabilityEnabled: z.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: z.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: z.partnerApplicationTimestamp,
                                  isPublished: !0,
                                  reasonsToJoin: z.reasonsToJoin,
                                  socialLinks: z.socialLinks,
                                  about: z.about,
                              })
                            : (0, C.Oh)({
                                  guildId: t.id,
                                  primaryCategoryId: z.primaryCategoryId,
                                  keywords: z.keywords,
                                  emojiDiscoverabilityEnabled: z.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: z.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: z.partnerApplicationTimestamp,
                                  isPublished: !1,
                                  reasonsToJoin: z.reasonsToJoin,
                                  socialLinks: z.socialLinks,
                                  about: z.about,
                              }),
                        L.A.saveGuild(t.id, { discoverySplash: t.discoverySplash, description: t.description });
                };
                e
                    ? i()
                    : null != t.vanityURLCode
                      ? n
                            .e("63983")
                            .then(n.bind(n, 256050))
                            .then((e) => {
                                e.default.open(i);
                            })
                      : i();
            },
            ei = (e) => {
                let { reason: t = "", emoji_name: n = "" } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            el = [
                {
                    title: w.intl.string(w.t["/SWsH3"]),
                    items: [
                        {
                            description: w.intl.string(w.t.DU8jF2),
                            completed: null !== t.discoverySplash && "" !== t.discoverySplash,
                        },
                        {
                            description: w.intl.string(w.t.SW5OH6),
                            completed: null !== t.description && "" !== t.description,
                        },
                        {
                            description: w.intl.string(w.t.m3b3WL),
                            completed: null !== z.about && z.about.length >= 300 && z.about.length <= 2400,
                        },
                        {
                            description: w.intl.string(w.t.qpx5MN),
                            completed:
                                null !== z.reasonsToJoin &&
                                z.reasonsToJoin.every(
                                    (e) =>
                                        ((e) => {
                                            let { reason: t = "", emoji_name: n = "" } = e;
                                            return (null === t || "" === t) && null === n;
                                        })(e) || ei(e),
                                ) &&
                                z.reasonsToJoin.filter(ei).length >= 2,
                        },
                    ],
                },
            ],
            es = (e, t) => {
                let n = [...J];
                (n[e] = t), q(n);
            };
        return (0, i.jsx)("div", {
            className: P.ed,
            children: (0, i.jsx)("div", {
                className: P.V1,
                children: (0, i.jsx)(p.Ar, {
                    className: P.iL,
                    children: (0, i.jsxs)("main", {
                        ref: e,
                        className: P.z1,
                        children: [
                            (0, i.jsx)(A.xp, {
                                containerRef: e,
                                children: (0, i.jsxs)("div", {
                                    className: P.kL,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: P.rb,
                                            children: [
                                                (0, i.jsxs)(E.D, {
                                                    variant: "heading-lg/semibold",
                                                    children: [
                                                        w.intl.string(w.t.kGlQGF),
                                                        (0, i.jsx)(N.A, { className: P.TN }),
                                                    ],
                                                }),
                                                (0, i.jsxs)(m.E, {
                                                    variant: "text-sm/normal",
                                                    className: P.NG,
                                                    children: [
                                                        w.intl.format(w.t["+ScrMf"], {
                                                            discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT,
                                                        }),
                                                        " ",
                                                        w.intl.format(w.t.T6WtKw, {
                                                            learnMoreURL: R.A.getArticleURL(U.MVz.SERVER_WEB_PAGES),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)(d.B, {
                                                    gap: 40,
                                                    children: [
                                                        (() => {
                                                            if (!z.isPublished || null == W) return;
                                                            let e = B + W;
                                                            return (0, i.jsxs)(d.B, {
                                                                gap: 16,
                                                                children: [
                                                                    (0, i.jsx)(c.D, {
                                                                        label: w.intl.string(w.t.safBZ9),
                                                                        children: (0, i.jsx)(j.A, { value: e }),
                                                                    }),
                                                                    (0, i.jsx)(u.$, {
                                                                        variant: "primary",
                                                                        size: "sm",
                                                                        text: w.intl.string(w.t.NI8iGI),
                                                                        onClick: () => window.open(e),
                                                                    }),
                                                                ],
                                                            });
                                                        })(),
                                                        (0, i.jsx)(_.c, {}),
                                                        (() => {
                                                            if (null != t)
                                                                return (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(O.T, {
                                                                            label: w.intl.string(w.t.GjPpSu),
                                                                            description: w.intl.string(w.t.MVXonM),
                                                                            guildId: t.id,
                                                                            guildMetadata: z,
                                                                            isDisabled: !H,
                                                                        }),
                                                                        (0, i.jsx)(G.A, {
                                                                            label: w.intl.string(w.t.oOPlPA),
                                                                            guild: t,
                                                                            guildMetadata: z,
                                                                            disabled: !H,
                                                                        }),
                                                                        ee?.category != null
                                                                            ? (0, i.jsx)(m.E, {
                                                                                  color: "text-feedback-critical",
                                                                                  className: P.z3,
                                                                                  variant: "text-sm/normal",
                                                                                  children: ee.category,
                                                                              })
                                                                            : null,
                                                                    ],
                                                                });
                                                        })(),
                                                        (0, i.jsx)(_.c, {}),
                                                        (() => {
                                                            if (null != t)
                                                                return (0, i.jsx)(c.D, {
                                                                    label: w.intl.string(w.t["8bT/Cu"]),
                                                                    description: w.intl.string(w.t.WCWT7A),
                                                                    errorMessage:
                                                                        ee?.discovery_splash != null
                                                                            ? ee.discovery_splash
                                                                            : void 0,
                                                                    layout: "horizontal",
                                                                    children: (0, i.jsxs)(d.B, {
                                                                        gap: 16,
                                                                        children: [
                                                                            (0, i.jsx)(S.A, {
                                                                                image: t.discoverySplash,
                                                                                makeURL: (e) =>
                                                                                    y.Ay.getGuildDiscoverySplashURL({
                                                                                        id: t.id,
                                                                                        splash: e,
                                                                                        size: 512 * (0, b.mZ)(),
                                                                                    }),
                                                                                disabled: !H,
                                                                                onChange: et,
                                                                                hint: w.intl.string(w.t.uPvxqJ),
                                                                                imageClassName: P.$U,
                                                                                hideSize: !0,
                                                                            }),
                                                                            (0, i.jsxs)(a.$n, {
                                                                                size: a.$n.Sizes.SMALL,
                                                                                color: a.$n.Colors.PRIMARY,
                                                                                children: [
                                                                                    w.intl.string(w.t.yG2pUi),
                                                                                    (0, i.jsx)(v.Ay, {
                                                                                        disabled: !H,
                                                                                        onChange: et,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                });
                                                        })(),
                                                        (0, i.jsx)(_.c, {}),
                                                        (0, i.jsx)(o.f, {
                                                            label: w.intl.string(w.t["RSfm+i"]),
                                                            description: w.intl.string(w.t.IBi6hz),
                                                            value: null !== t.description ? t.description : "",
                                                            placeholder: w.intl.string(w.t.rFa9Ui),
                                                            onChange: (e) => {
                                                                L.A.updateGuild({
                                                                    description: e?.replaceAll("\n", "") ?? "",
                                                                });
                                                            },
                                                            maxLength: 300,
                                                            disabled: !H,
                                                        }),
                                                        (0, i.jsx)(_.c, {}),
                                                        (() => {
                                                            if (null == z) return null;
                                                            let e =
                                                                0 === z.reasonsToJoin.length
                                                                    ? [, , , ,].fill({ reason: "", emoji_name: null })
                                                                    : z.reasonsToJoin;
                                                            return (0, i.jsx)(c.D, {
                                                                label: w.intl.string(w.t.vUmXsR),
                                                                description: w.intl.string(w.t.esnBnW),
                                                                errorMessage:
                                                                    ee?.reasons_to_join != null
                                                                        ? ee.reasons_to_join
                                                                        : void 0,
                                                                children: (0, i.jsx)(M.A, {
                                                                    reasonMinLength: 10,
                                                                    reasonMaxLength: 128,
                                                                    guildId: t.id,
                                                                    reasons: e,
                                                                }),
                                                            });
                                                        })(),
                                                        (0, i.jsx)(_.c, {}),
                                                        (0, i.jsx)(
                                                            o.f,
                                                            {
                                                                label: w.intl.string(w.t["lu+BmJ"]),
                                                                description: w.intl.string(w.t.ozSi8g),
                                                                error: ee?.about != null ? ee.about : void 0,
                                                                showCharacterCount: !0,
                                                                rows: 10,
                                                                value: z.about,
                                                                placeholder: w.intl.string(w.t.TduTbs),
                                                                onChange: (e) => {
                                                                    (0, C.xN)(t.id, e);
                                                                },
                                                                minLength: 300,
                                                                maxLength: 2400,
                                                                disabled: !H,
                                                                defaultDirty: z.about?.length > 0,
                                                            },
                                                            `text-area-${V}`,
                                                        ),
                                                        (0, i.jsx)(_.c, {}),
                                                        (0, i.jsxs)(c.D, {
                                                            label: w.intl.string(w.t.V5mNyb),
                                                            description: w.intl.string(w.t.d3kA9a),
                                                            errorMessage:
                                                                ee?.social_links != null ? ee.social_links : void 0,
                                                            children: [
                                                                z.socialLinks.map((e, n) => {
                                                                    var l;
                                                                    let s,
                                                                        r = Q[n],
                                                                        a = Object.values(k.x).find(
                                                                            (e) => e.presentation === r,
                                                                        ),
                                                                        o = null != a ? `${a.baseUrl}` : void 0;
                                                                    return (0, i.jsxs)(
                                                                        "div",
                                                                        {
                                                                            className: P.Au,
                                                                            onMouseOver: () => es(n, !0),
                                                                            onFocus: () => es(n, !0),
                                                                            onMouseOut: () => es(n, !1),
                                                                            onBlur: () => es(n, !1),
                                                                            children: [
                                                                                (0, i.jsx)(g.l, {
                                                                                    selectionMode: "single",
                                                                                    options:
                                                                                        ((l = Q[n]),
                                                                                        (s = Object.entries(k.x)
                                                                                            .filter(
                                                                                                (e) =>
                                                                                                    !Q.includes(
                                                                                                        e[1]
                                                                                                            .presentation,
                                                                                                    ),
                                                                                            )
                                                                                            .map((e) => ({
                                                                                                id: e[0],
                                                                                                label: e[1]
                                                                                                    .presentation,
                                                                                                value: e[0],
                                                                                            }))),
                                                                                        null == l || "" === l
                                                                                            ? s
                                                                                            : s.concat({
                                                                                                  id: l,
                                                                                                  label: l,
                                                                                                  value: l,
                                                                                              })),
                                                                                    label: w.intl.string(w.t.xSALIK),
                                                                                    hideLabel: !0,
                                                                                    placeholder: w.intl.string(
                                                                                        w.t.xSALIK,
                                                                                    ),
                                                                                    value: Q[n],
                                                                                    onSelectionChange: (e) => {
                                                                                        let i, l, s;
                                                                                        return (
                                                                                            (i = [...z.socialLinks]),
                                                                                            (l = [...Q]),
                                                                                            (s = [...Y]),
                                                                                            void ((l[n] = e),
                                                                                            (i[n] = k.x[e].baseUrl),
                                                                                            (s[n] = !0),
                                                                                            K(s),
                                                                                            $(l),
                                                                                            Z(s.every((e) => !0 === e)),
                                                                                            (0, C.uh)(t.id, i))
                                                                                        );
                                                                                    },
                                                                                    disabled: !H,
                                                                                }),
                                                                                (0, i.jsx)(h.k, {
                                                                                    value: e.replace(o ?? "", ""),
                                                                                    onChange: (e) => {
                                                                                        var i;
                                                                                        let l, s, r;
                                                                                        return (
                                                                                            (i = `${o}${e}`),
                                                                                            (s = (l = [
                                                                                                ...z.socialLinks,
                                                                                            ])[n]),
                                                                                            (r = i),
                                                                                            0 === s.length &&
                                                                                                r.length > 1 &&
                                                                                                !1 ===
                                                                                                    RegExp(
                                                                                                        "^https?:",
                                                                                                    ).test(r) &&
                                                                                                (r = "https://" + r),
                                                                                            void (
                                                                                                !/\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(
                                                                                                    r,
                                                                                                ) &&
                                                                                                ((l[n] = r),
                                                                                                (0, C.uh)(t.id, l))
                                                                                            )
                                                                                        );
                                                                                    },
                                                                                    placeholder:
                                                                                        null != o
                                                                                            ? void 0
                                                                                            : w.intl.string(w.t.Q6o4pJ),
                                                                                    maxLength: 150,
                                                                                    disabled: !H || null == Q[n],
                                                                                    fullWidth: !0,
                                                                                    leading: o,
                                                                                    trailing: H
                                                                                        ? {
                                                                                              icon: x.u,
                                                                                              "aria-label":
                                                                                                  w.intl.string(
                                                                                                      w.t.N86XcP,
                                                                                                  ),
                                                                                              onClick: () => {
                                                                                                  let e, i, l, s;
                                                                                                  return (
                                                                                                      (e = [
                                                                                                          ...J,
                                                                                                      ]).splice(n, 1),
                                                                                                      q(e),
                                                                                                      (i = [
                                                                                                          ...Y,
                                                                                                      ]).splice(n, 1),
                                                                                                      K(i),
                                                                                                      (l = [
                                                                                                          ...Q,
                                                                                                      ]).splice(n, 1),
                                                                                                      $(l),
                                                                                                      void ((s = [
                                                                                                          ...z.socialLinks,
                                                                                                      ]).splice(n, 1),
                                                                                                      (0, C.uh)(
                                                                                                          t.id,
                                                                                                          s,
                                                                                                      ))
                                                                                                  );
                                                                                              },
                                                                                          }
                                                                                        : void 0,
                                                                                }),
                                                                            ],
                                                                        },
                                                                        "social-container-" + n,
                                                                    );
                                                                }),
                                                                ee?.social_links != null
                                                                    ? (0, i.jsx)(m.E, {
                                                                          color: "text-feedback-critical",
                                                                          variant: "text-sm/normal",
                                                                          children: ee.social_links,
                                                                      })
                                                                    : null,
                                                                (0, i.jsx)(u.$, {
                                                                    variant: "secondary",
                                                                    size: "sm",
                                                                    text: w.intl.string(w.t.Qvovjc),
                                                                    onClick: () => {
                                                                        if (z.socialLinks.length < 9) {
                                                                            let e = [...z.socialLinks];
                                                                            (0, C.uh)(t.id, e.concat("")),
                                                                                $(Q.concat(""));
                                                                        }
                                                                    },
                                                                    disabled: !H || z.socialLinks.length >= 9,
                                                                }),
                                                            ],
                                                        }),
                                                        z.isPublished &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(_.c, {}),
                                                                    (0, i.jsx)(c.D, {
                                                                        label: w.intl.string(w.t["5yF7e1"]),
                                                                        description: w.intl.string(w.t.eOFvqT),
                                                                        children: (0, i.jsx)(u.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: w.intl.string(w.t["DCHd/G"]),
                                                                            onClick: () => en(!1),
                                                                            disabled: !H,
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ee?.is_published != null
                                                            ? (0, i.jsx)(m.E, {
                                                                  color: "text-feedback-critical",
                                                                  variant: "text-sm/normal",
                                                                  children: ee.is_published,
                                                              })
                                                            : null,
                                                    ],
                                                }),
                                            ],
                                        }),
                                        !z.isPublished &&
                                            (0, i.jsx)("div", {
                                                className: P.D4,
                                                children: (0, i.jsx)(I.A, {
                                                    title: w.intl.string(w.t["2kCyn/"]),
                                                    children: el,
                                                    buttonLabel: w.intl.string(w.t.tVK6S9),
                                                    buttonCallback: () => en(!0),
                                                    disabled: !H || !X,
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(f.h, { size: 96 }),
                        ],
                    }),
                }),
            }),
        });
    },
    V = () => (null == (0, s.bG)([D.A], () => D.A.getGuild()) ? null : (0, i.jsx)(H, {}));
