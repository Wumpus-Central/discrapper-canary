"use strict";
n.d(t, { A: () => O, j: () => y }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700);
n(516773);
var l = n(311907),
    r = n(36525),
    a = n(421380),
    o = n(397927),
    d = n(416052),
    c = n(611371),
    u = n(938925),
    m = n(460760),
    g = n(776231),
    x = n(946274),
    h = n(342298),
    _ = n(576705),
    p = n(486020),
    A = n(975571),
    f = n(997509),
    j = n(555337),
    N = n(458907),
    E = n(719175),
    C = n(643674),
    b = n(156057),
    T = n(652215),
    I = n(985018),
    v = n(814579);
let S = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
    y = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n,
        } = (0, l.cf)([j.A], () => ({
            submitting: j.A.isSubmitting(),
            guild: j.A.getGuild(),
            guildMetadata: j.A.getMetadata(),
        }));
        return (0, i.jsx)(r.A, {
            submitting: n,
            onReset: () => {
                null != e && f.A.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (f.A.saveGuild(e.id, { discoverySplash: e.discoverySplash, description: e.description }),
                    (0, m.Oh)({
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
    R = () => {
        let e = s.useRef(null),
            t = (0, l.bG)([j.A], () => j.A.getGuild()),
            [r, y] = s.useState(!1);
        s.useEffect(() => {
            r || null == t || ((0, m.Mu)(), (0, m.mo)(t.id), (0, m.ax)(t.id), y(!0));
        }, [t, r]);
        let { canManageGuild: R } = (0, l.cf)([_.A], () => ({ canManageGuild: _.A.can(T.xBc.MANAGE_GUILD, t) })),
            O = (0, l.bG)([j.A], () => j.A.isGuildMetadataLoaded()),
            G = (0, l.bG)([j.A], () => (null != t ? j.A.getMetadata() : null)),
            L = (0, l.bG)([j.A], () => (null != t && G?.isPublished ? j.A.getSlug() : null)),
            [D, M] = s.useState([!0]),
            [k, U] = s.useState(!0),
            [P, w] = s.useState([!1]),
            [B, F] = s.useState([""]);
        s.useEffect(() => {
            if (null !== G) {
                let e = [],
                    t = [];
                G.socialLinks.forEach((n, i) => {
                    if ("" !== n) {
                        let s = ((e) => {
                            try {
                                let t = new URL(e).hostname.split(".");
                                if (3 === t.length && "bandcamp" === t[1].toLowerCase())
                                    return b.x.bandcamp.presentation;
                                let n = t.shift()?.toLowerCase() ?? "";
                                if (("www" === n && (n = t.shift()?.toLowerCase() ?? ""), n in b.x))
                                    return b.x[n].presentation;
                                return null;
                            } catch {
                                return null;
                            }
                        })(n);
                        null !== s ? ((t[i] = s), (e[i] = !0)) : (e[i] = !1);
                    } else e[i] = !0;
                }),
                    F(t),
                    M(e),
                    U(e.every((e) => !0 === e));
            }
        }, [G]);
        let H = (0, l.bG)([j.A], () => (null != t ? j.A.getErrors() : null));
        if (null == t || null == G) return null;
        let V = (e) => {
                f.A.updateGuild({ discoverySplash: e });
            },
            z = (e) => {
                let i = () => {
                    (0, m.Ok)(t.id, e),
                        e
                            ? (0, m.Oh)({
                                  guildId: t.id,
                                  primaryCategoryId: G.primaryCategoryId,
                                  keywords: G.keywords,
                                  emojiDiscoverabilityEnabled: G.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: G.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: G.partnerApplicationTimestamp,
                                  isPublished: !0,
                                  reasonsToJoin: G.reasonsToJoin,
                                  socialLinks: G.socialLinks,
                                  about: G.about,
                              })
                            : (0, m.Oh)({
                                  guildId: t.id,
                                  primaryCategoryId: G.primaryCategoryId,
                                  keywords: G.keywords,
                                  emojiDiscoverabilityEnabled: G.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: G.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: G.partnerApplicationTimestamp,
                                  isPublished: !1,
                                  reasonsToJoin: G.reasonsToJoin,
                                  socialLinks: G.socialLinks,
                                  about: G.about,
                              }),
                        f.A.saveGuild(t.id, { discoverySplash: t.discoverySplash, description: t.description });
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
            W = (e) => {
                let { reason: t = "", emoji_name: n = "" } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            K = [
                {
                    title: I.intl.string(I.t["/SWsH3"]),
                    items: [
                        {
                            description: I.intl.string(I.t.DU8jF2),
                            completed: null !== t.discoverySplash && "" !== t.discoverySplash,
                        },
                        {
                            description: I.intl.string(I.t.SW5OH6),
                            completed: null !== t.description && "" !== t.description,
                        },
                        {
                            description: I.intl.string(I.t.m3b3WL),
                            completed: null !== G.about && G.about.length >= 300 && G.about.length <= 2400,
                        },
                        {
                            description: I.intl.string(I.t.qpx5MN),
                            completed:
                                null !== G.reasonsToJoin &&
                                G.reasonsToJoin.every(
                                    (e) =>
                                        ((e) => {
                                            let { reason: t = "", emoji_name: n = "" } = e;
                                            return (null === t || "" === t) && null === n;
                                        })(e) || W(e),
                                ) &&
                                G.reasonsToJoin.filter(W).length >= 2,
                        },
                    ],
                },
            ],
            Y = (e, t) => {
                let n = [...P];
                (n[e] = t), w(n);
            };
        return (0, i.jsx)("div", {
            className: v.ed,
            children: (0, i.jsx)("div", {
                className: v.V1,
                children: (0, i.jsx)(o.ArX, {
                    className: v.iL,
                    children: (0, i.jsxs)("main", {
                        ref: e,
                        className: v.z1,
                        children: [
                            (0, i.jsx)(o.xpW, {
                                containerRef: e,
                                children: (0, i.jsxs)("div", {
                                    className: v.kL,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: v.rb,
                                            children: [
                                                (0, i.jsxs)(o.Heading, {
                                                    variant: "heading-lg/semibold",
                                                    children: [
                                                        I.intl.string(I.t.kGlQGF),
                                                        (0, i.jsx)(c.A, { className: v.TN }),
                                                    ],
                                                }),
                                                (0, i.jsxs)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    className: v.NG,
                                                    children: [
                                                        I.intl.format(I.t["+ScrMf"], {
                                                            discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT,
                                                        }),
                                                        " ",
                                                        I.intl.format(I.t.T6WtKw, {
                                                            learnMoreURL: A.A.getArticleURL(T.MVz.SERVER_WEB_PAGES),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)(o.BJc, {
                                                    gap: 40,
                                                    children: [
                                                        (() => {
                                                            if (!G.isPublished || null == L) return;
                                                            let e = S + L;
                                                            return (0, i.jsxs)(o.BJc, {
                                                                gap: 16,
                                                                children: [
                                                                    (0, i.jsx)(o.D0$, {
                                                                        label: I.intl.string(I.t.safBZ9),
                                                                        children: (0, i.jsx)(d.A, { value: e }),
                                                                    }),
                                                                    (0, i.jsx)(o.Button, {
                                                                        variant: "primary",
                                                                        size: "sm",
                                                                        text: I.intl.string(I.t.NI8iGI),
                                                                        onClick: () => window.open(e),
                                                                    }),
                                                                ],
                                                            });
                                                        })(),
                                                        (0, i.jsx)(o.cGx, {}),
                                                        (() => {
                                                            if (null != t)
                                                                return (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(N.T, {
                                                                            label: I.intl.string(I.t.GjPpSu),
                                                                            description: I.intl.string(I.t.MVXonM),
                                                                            guildId: t.id,
                                                                            guildMetadata: G,
                                                                            isDisabled: !R,
                                                                        }),
                                                                        (0, i.jsx)(E.A, {
                                                                            label: I.intl.string(I.t.oOPlPA),
                                                                            guild: t,
                                                                            guildMetadata: G,
                                                                            disabled: !R,
                                                                        }),
                                                                        H?.category != null
                                                                            ? (0, i.jsx)(o.Text, {
                                                                                  color: "text-feedback-critical",
                                                                                  className: v.z3,
                                                                                  variant: "text-sm/normal",
                                                                                  children: H.category,
                                                                              })
                                                                            : null,
                                                                    ],
                                                                });
                                                        })(),
                                                        (0, i.jsx)(o.cGx, {}),
                                                        (() => {
                                                            if (null != t)
                                                                return (0, i.jsx)(o.D0$, {
                                                                    label: I.intl.string(I.t["8bT/Cu"]),
                                                                    description: I.intl.string(I.t.WCWT7A),
                                                                    errorMessage:
                                                                        H?.discovery_splash != null
                                                                            ? H.discovery_splash
                                                                            : void 0,
                                                                    layout: "horizontal",
                                                                    children: (0, i.jsxs)(o.BJc, {
                                                                        gap: 16,
                                                                        children: [
                                                                            (0, i.jsx)(h.A, {
                                                                                image: t.discoverySplash,
                                                                                makeURL: (e) =>
                                                                                    p.Ay.getGuildDiscoverySplashURL({
                                                                                        id: t.id,
                                                                                        splash: e,
                                                                                        size: 512 * (0, g.mZ)(),
                                                                                    }),
                                                                                disabled: !R,
                                                                                onChange: V,
                                                                                hint: I.intl.string(I.t.uPvxqJ),
                                                                                imageClassName: v.$U,
                                                                                hideSize: !0,
                                                                            }),
                                                                            (0, i.jsxs)(a.$n, {
                                                                                size: a.$n.Sizes.SMALL,
                                                                                color: a.$n.Colors.PRIMARY,
                                                                                children: [
                                                                                    I.intl.string(I.t.yG2pUi),
                                                                                    (0, i.jsx)(x.Ay, {
                                                                                        disabled: !R,
                                                                                        onChange: V,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                });
                                                        })(),
                                                        (0, i.jsx)(o.cGx, {}),
                                                        (0, i.jsx)(o.fs1, {
                                                            label: I.intl.string(I.t["RSfm+i"]),
                                                            description: I.intl.string(I.t.IBi6hz),
                                                            value: null !== t.description ? t.description : "",
                                                            placeholder: I.intl.string(I.t.rFa9Ui),
                                                            onChange: (e) => {
                                                                f.A.updateGuild({
                                                                    description: e?.replaceAll("\n", "") ?? "",
                                                                });
                                                            },
                                                            maxLength: 300,
                                                            disabled: !R,
                                                        }),
                                                        (0, i.jsx)(o.cGx, {}),
                                                        (() => {
                                                            if (null == G) return null;
                                                            let e =
                                                                0 === G.reasonsToJoin.length
                                                                    ? [, , , ,].fill({ reason: "", emoji_name: null })
                                                                    : G.reasonsToJoin;
                                                            return (0, i.jsx)(o.D0$, {
                                                                label: I.intl.string(I.t.vUmXsR),
                                                                description: I.intl.string(I.t.esnBnW),
                                                                errorMessage:
                                                                    H?.reasons_to_join != null
                                                                        ? H.reasons_to_join
                                                                        : void 0,
                                                                children: (0, i.jsx)(C.A, {
                                                                    reasonMinLength: 10,
                                                                    reasonMaxLength: 128,
                                                                    guildId: t.id,
                                                                    reasons: e,
                                                                }),
                                                            });
                                                        })(),
                                                        (0, i.jsx)(o.cGx, {}),
                                                        (0, i.jsx)(
                                                            o.fs1,
                                                            {
                                                                label: I.intl.string(I.t["lu+BmJ"]),
                                                                description: I.intl.string(I.t.ozSi8g),
                                                                error: H?.about != null ? H.about : void 0,
                                                                showCharacterCount: !0,
                                                                rows: 10,
                                                                value: G.about,
                                                                placeholder: I.intl.string(I.t.TduTbs),
                                                                onChange: (e) => {
                                                                    (0, m.xN)(t.id, e);
                                                                },
                                                                minLength: 300,
                                                                maxLength: 2400,
                                                                disabled: !R,
                                                                defaultDirty: G.about?.length > 0,
                                                            },
                                                            `text-area-${O}`,
                                                        ),
                                                        (0, i.jsx)(o.cGx, {}),
                                                        (0, i.jsxs)(o.D0$, {
                                                            label: I.intl.string(I.t.V5mNyb),
                                                            description: I.intl.string(I.t.d3kA9a),
                                                            errorMessage:
                                                                H?.social_links != null ? H.social_links : void 0,
                                                            children: [
                                                                G.socialLinks.map((e, n) => {
                                                                    var s;
                                                                    let l,
                                                                        r = B[n],
                                                                        a = Object.values(b.x).find(
                                                                            (e) => e.presentation === r,
                                                                        ),
                                                                        d = null != a ? `${a.baseUrl}` : void 0;
                                                                    return (0, i.jsxs)(
                                                                        "div",
                                                                        {
                                                                            className: v.Au,
                                                                            onMouseOver: () => Y(n, !0),
                                                                            onFocus: () => Y(n, !0),
                                                                            onMouseOut: () => Y(n, !1),
                                                                            onBlur: () => Y(n, !1),
                                                                            children: [
                                                                                (0, i.jsx)(o.l6P, {
                                                                                    selectionMode: "single",
                                                                                    options:
                                                                                        ((s = B[n]),
                                                                                        (l = Object.entries(b.x)
                                                                                            .filter(
                                                                                                (e) =>
                                                                                                    !B.includes(
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
                                                                                        null == s || "" === s
                                                                                            ? l
                                                                                            : l.concat({
                                                                                                  id: s,
                                                                                                  label: s,
                                                                                                  value: s,
                                                                                              })),
                                                                                    label: I.intl.string(I.t.xSALIK),
                                                                                    hideLabel: !0,
                                                                                    placeholder: I.intl.string(
                                                                                        I.t.xSALIK,
                                                                                    ),
                                                                                    value: B[n],
                                                                                    onSelectionChange: (e) => {
                                                                                        let i, s, l;
                                                                                        return (
                                                                                            (i = [...G.socialLinks]),
                                                                                            (s = [...B]),
                                                                                            (l = [...D]),
                                                                                            void ((s[n] = e),
                                                                                            (i[n] = b.x[e].baseUrl),
                                                                                            (l[n] = !0),
                                                                                            M(l),
                                                                                            F(s),
                                                                                            U(l.every((e) => !0 === e)),
                                                                                            (0, m.uh)(t.id, i))
                                                                                        );
                                                                                    },
                                                                                    disabled: !R,
                                                                                }),
                                                                                (0, i.jsx)(o.ksK, {
                                                                                    value: e.replace(d ?? "", ""),
                                                                                    onChange: (e) => {
                                                                                        var i;
                                                                                        let s, l, r;
                                                                                        return (
                                                                                            (i = `${d}${e}`),
                                                                                            (l = (s = [
                                                                                                ...G.socialLinks,
                                                                                            ])[n]),
                                                                                            (r = i),
                                                                                            0 === l.length &&
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
                                                                                                ((s[n] = r),
                                                                                                (0, m.uh)(t.id, s))
                                                                                            )
                                                                                        );
                                                                                    },
                                                                                    placeholder:
                                                                                        null != d
                                                                                            ? void 0
                                                                                            : I.intl.string(I.t.Q6o4pJ),
                                                                                    maxLength: 150,
                                                                                    disabled: !R || null == B[n],
                                                                                    fullWidth: !0,
                                                                                    leading: d,
                                                                                    trailing: R
                                                                                        ? {
                                                                                              icon: o.ucK,
                                                                                              "aria-label":
                                                                                                  I.intl.string(
                                                                                                      I.t.N86XcP,
                                                                                                  ),
                                                                                              onClick: () => {
                                                                                                  let e, i, s, l;
                                                                                                  return (
                                                                                                      (e = [
                                                                                                          ...P,
                                                                                                      ]).splice(n, 1),
                                                                                                      w(e),
                                                                                                      (i = [
                                                                                                          ...D,
                                                                                                      ]).splice(n, 1),
                                                                                                      M(i),
                                                                                                      (s = [
                                                                                                          ...B,
                                                                                                      ]).splice(n, 1),
                                                                                                      F(s),
                                                                                                      void ((l = [
                                                                                                          ...G.socialLinks,
                                                                                                      ]).splice(n, 1),
                                                                                                      (0, m.uh)(
                                                                                                          t.id,
                                                                                                          l,
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
                                                                H?.social_links != null
                                                                    ? (0, i.jsx)(o.Text, {
                                                                          color: "text-feedback-critical",
                                                                          variant: "text-sm/normal",
                                                                          children: H.social_links,
                                                                      })
                                                                    : null,
                                                                (0, i.jsx)(o.Button, {
                                                                    variant: "secondary",
                                                                    size: "sm",
                                                                    text: I.intl.string(I.t.Qvovjc),
                                                                    onClick: () => {
                                                                        if (G.socialLinks.length < 9) {
                                                                            let e = [...G.socialLinks];
                                                                            (0, m.uh)(t.id, e.concat("")),
                                                                                F(B.concat(""));
                                                                        }
                                                                    },
                                                                    disabled: !R || G.socialLinks.length >= 9,
                                                                }),
                                                            ],
                                                        }),
                                                        G.isPublished &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(o.cGx, {}),
                                                                    (0, i.jsx)(o.D0$, {
                                                                        label: I.intl.string(I.t["5yF7e1"]),
                                                                        description: I.intl.string(I.t.eOFvqT),
                                                                        children: (0, i.jsx)(o.Button, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: I.intl.string(I.t["DCHd/G"]),
                                                                            onClick: () => z(!1),
                                                                            disabled: !R,
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        H?.is_published != null
                                                            ? (0, i.jsx)(o.Text, {
                                                                  color: "text-feedback-critical",
                                                                  variant: "text-sm/normal",
                                                                  children: H.is_published,
                                                              })
                                                            : null,
                                                    ],
                                                }),
                                            ],
                                        }),
                                        !G.isPublished &&
                                            (0, i.jsx)("div", {
                                                className: v.D4,
                                                children: (0, i.jsx)(u.A, {
                                                    title: I.intl.string(I.t["2kCyn/"]),
                                                    children: K,
                                                    buttonLabel: I.intl.string(I.t.tVK6S9),
                                                    buttonCallback: () => z(!0),
                                                    disabled: !R || !k,
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(o.hKd, { size: 96 }),
                        ],
                    }),
                }),
            }),
        });
    },
    O = () => (null == (0, l.bG)([j.A], () => j.A.getGuild()) ? null : (0, i.jsx)(R, {}));
