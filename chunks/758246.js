n.d(t, {
    A: () => P,
    j: () => I,
}),
    n(228524),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238),
    n(812715),
    n(866193),
    n(591487),
    n(727858);
var r = n(627968),
    i = n(64700);
n(516773);
var l = n(311907),
    s = n(36525),
    a = n(421380),
    c = n(397927),
    o = n(416052),
    d = n(611371),
    u = n(938925),
    f = n(460760),
    g = n(776231),
    b = n(946274),
    m = n(342298),
    p = n(576705),
    x = n(486020),
    h = n(975571),
    j = n(997509),
    O = n(555337),
    y = n(458907),
    v = n(719175),
    A = n(643674),
    E = n(156057),
    N = n(652215),
    _ = n(985018),
    S = n(628080);
let T = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
    I = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n,
        } = (0, l.cf)([O.A], () => ({
            submitting: O.A.isSubmitting(),
            guild: O.A.getGuild(),
            guildMetadata: O.A.getMetadata(),
        }));
        return (0, r.jsx)(s.A, {
            submitting: n,
            onReset: () => {
                null != e && j.A.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (j.A.saveGuild(e.id, {
                        discoverySplash: e.discoverySplash,
                        description: e.description,
                    }),
                    (0, f.Oh)({
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
    C = () => {
        var e;
        let t = i.useRef(null),
            s = (0, l.bG)([O.A], () => O.A.getGuild()),
            [I, C] = i.useState(!1);
        i.useEffect(() => {
            I || null == s || ((0, f.Mu)(), (0, f.mo)(s.id), (0, f.ax)(s.id), C(!0));
        }, [s, I]);
        let { canManageGuild: P } = (0, l.cf)([p.A], () => ({
                canManageGuild: p.A.can(N.xBc.MANAGE_GUILD, s),
            })),
            w = (0, l.bG)([O.A], () => O.A.isGuildMetadataLoaded()),
            R = (0, l.bG)([O.A], () => (null != s ? O.A.getMetadata() : null)),
            D = (0, l.bG)([O.A], () => (null != s && (null == R ? void 0 : R.isPublished) ? O.A.getSlug() : null)),
            [G, L] = i.useState([!0]),
            [k, M] = i.useState(!0),
            [U, F] = i.useState([!1]),
            [B, H] = i.useState([""]);
        i.useEffect(() => {
            if (null !== R) {
                let e = [],
                    t = [];
                R.socialLinks.forEach((n, r) => {
                    if ("" !== n) {
                        let i = ((e) => {
                            try {
                                var t, n, r, i;
                                let l = new URL(e).hostname.split(".");
                                if (3 === l.length && "bandcamp" === l[1].toLowerCase())
                                    return E.x.bandcamp.presentation;
                                let s = null != (t = null == (n = l.shift()) ? void 0 : n.toLowerCase()) ? t : "";
                                if (
                                    ("www" === s &&
                                        (s = null != (r = null == (i = l.shift()) ? void 0 : i.toLowerCase()) ? r : ""),
                                    s in E.x)
                                )
                                    return E.x[s].presentation;
                                return null;
                            } catch (e) {
                                return null;
                            }
                        })(n);
                        null !== i ? ((t[r] = i), (e[r] = !0)) : (e[r] = !1);
                    } else e[r] = !0;
                }),
                    H(t),
                    L(e),
                    M(e.every((e) => !0 === e));
            }
        }, [R]);
        let V = (0, l.bG)([O.A], () => (null != s ? O.A.getErrors() : null));
        if (null == s || null == R) return null;
        let K = (e) => {
                j.A.updateGuild({
                    discoverySplash: e,
                });
            },
            z = (e) => {
                let t = () => {
                    (0, f.Ok)(s.id, e),
                        e
                            ? (0, f.Oh)({
                                  guildId: s.id,
                                  primaryCategoryId: R.primaryCategoryId,
                                  keywords: R.keywords,
                                  emojiDiscoverabilityEnabled: R.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: R.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: R.partnerApplicationTimestamp,
                                  isPublished: !0,
                                  reasonsToJoin: R.reasonsToJoin,
                                  socialLinks: R.socialLinks,
                                  about: R.about,
                              })
                            : (0, f.Oh)({
                                  guildId: s.id,
                                  primaryCategoryId: R.primaryCategoryId,
                                  keywords: R.keywords,
                                  emojiDiscoverabilityEnabled: R.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: R.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: R.partnerApplicationTimestamp,
                                  isPublished: !1,
                                  reasonsToJoin: R.reasonsToJoin,
                                  socialLinks: R.socialLinks,
                                  about: R.about,
                              }),
                        j.A.saveGuild(s.id, {
                            discoverySplash: s.discoverySplash,
                            description: s.description,
                        });
                };
                e
                    ? t()
                    : null != s.vanityURLCode
                      ? n
                            .e("63983")
                            .then(n.bind(n, 256050))
                            .then((e) => {
                                e.default.open(t);
                            })
                      : t();
            },
            Y = (e) => {
                let { reason: t = "", emoji_name: n = "" } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            W = [
                {
                    title: _.intl.string(_.t["/SWsH3"]),
                    items: [
                        {
                            description: _.intl.string(_.t.DU8jF2),
                            completed: null !== s.discoverySplash && "" !== s.discoverySplash,
                        },
                        {
                            description: _.intl.string(_.t.SW5OH6),
                            completed: null !== s.description && "" !== s.description,
                        },
                        {
                            description: _.intl.string(_.t.m3b3WL),
                            completed: null !== R.about && R.about.length >= 300 && R.about.length <= 2400,
                        },
                        {
                            description: _.intl.string(_.t.qpx5MN),
                            completed:
                                null !== R.reasonsToJoin &&
                                R.reasonsToJoin.every(
                                    (e) =>
                                        ((e) => {
                                            let { reason: t = "", emoji_name: n = "" } = e;
                                            return (null === t || "" === t) && null === n;
                                        })(e) || Y(e),
                                ) &&
                                R.reasonsToJoin.filter(Y).length >= 2,
                        },
                    ],
                },
            ],
            X = (e, t) => {
                let n = [...U];
                (n[e] = t), F(n);
            };
        return (0, r.jsx)("div", {
            className: S.ed,
            children: (0, r.jsx)("div", {
                className: S.V1,
                children: (0, r.jsx)(c.ArX, {
                    className: S.iL,
                    children: (0, r.jsx)("main", {
                        ref: t,
                        className: S.z1,
                        children: (0, r.jsx)(c.xpW, {
                            containerRef: t,
                            children: (0, r.jsxs)("div", {
                                className: S.kL,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: S.rb,
                                        children: [
                                            (0, r.jsxs)(c.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: [
                                                    _.intl.string(_.t.kGlQGF),
                                                    (0, r.jsx)(d.A, {
                                                        className: S.TN,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(c.Text, {
                                                variant: "text-sm/normal",
                                                className: S.NG,
                                                children: [
                                                    _.intl.format(_.t["+ScrMf"], {
                                                        discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT,
                                                    }),
                                                    " ",
                                                    _.intl.format(_.t.T6WtKw, {
                                                        learnMoreURL: h.A.getArticleURL(N.MVz.SERVER_WEB_PAGES),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(c.BJc, {
                                                gap: 40,
                                                children: [
                                                    (() => {
                                                        if (!R.isPublished || null == D) return;
                                                        let e = T + D;
                                                        return (0, r.jsxs)(c.BJc, {
                                                            gap: 16,
                                                            children: [
                                                                (0, r.jsx)(c.D0$, {
                                                                    label: _.intl.string(_.t.safBZ9),
                                                                    children: (0, r.jsx)(o.A, {
                                                                        value: e,
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(c.Button, {
                                                                    variant: "primary",
                                                                    size: "sm",
                                                                    text: _.intl.string(_.t.NI8iGI),
                                                                    onClick: () => window.open(e),
                                                                }),
                                                            ],
                                                        });
                                                    })(),
                                                    (0, r.jsx)(c.cGx, {}),
                                                    (() => {
                                                        if (null != s)
                                                            return (0, r.jsxs)(r.Fragment, {
                                                                children: [
                                                                    (0, r.jsx)(y.T, {
                                                                        label: _.intl.string(_.t.GjPpSu),
                                                                        description: _.intl.string(_.t.MVXonM),
                                                                        guildId: s.id,
                                                                        guildMetadata: R,
                                                                        isDisabled: !P,
                                                                    }),
                                                                    (0, r.jsx)(v.A, {
                                                                        label: _.intl.string(_.t.oOPlPA),
                                                                        guild: s,
                                                                        guildMetadata: R,
                                                                        disabled: !P,
                                                                    }),
                                                                    (null == V ? void 0 : V.category) != null
                                                                        ? (0, r.jsx)(c.Text, {
                                                                              color: "text-feedback-critical",
                                                                              className: S.z3,
                                                                              variant: "text-sm/normal",
                                                                              children: V.category,
                                                                          })
                                                                        : null,
                                                                ],
                                                            });
                                                    })(),
                                                    (0, r.jsx)(c.cGx, {}),
                                                    (() => {
                                                        if (null != s)
                                                            return (0, r.jsx)(c.D0$, {
                                                                label: _.intl.string(_.t["8bT/Cu"]),
                                                                description: _.intl.string(_.t.WCWT7A),
                                                                errorMessage:
                                                                    (null == V ? void 0 : V.discovery_splash) != null
                                                                        ? V.discovery_splash
                                                                        : void 0,
                                                                layout: "horizontal",
                                                                children: (0, r.jsxs)(c.BJc, {
                                                                    gap: 16,
                                                                    children: [
                                                                        (0, r.jsx)(m.A, {
                                                                            image: s.discoverySplash,
                                                                            makeURL: (e) =>
                                                                                x.Ay.getGuildDiscoverySplashURL({
                                                                                    id: s.id,
                                                                                    splash: e,
                                                                                    size: 512 * (0, g.mZ)(),
                                                                                }),
                                                                            disabled: !P,
                                                                            onChange: K,
                                                                            hint: _.intl.string(_.t.uPvxqJ),
                                                                            imageClassName: S.$U,
                                                                            hideSize: !0,
                                                                        }),
                                                                        (0, r.jsxs)(a.$n, {
                                                                            size: a.$n.Sizes.SMALL,
                                                                            color: a.$n.Colors.PRIMARY,
                                                                            children: [
                                                                                _.intl.string(_.t.yG2pUi),
                                                                                (0, r.jsx)(b.Ay, {
                                                                                    disabled: !P,
                                                                                    onChange: K,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            });
                                                    })(),
                                                    (0, r.jsx)(c.cGx, {}),
                                                    (0, r.jsx)(c.fs1, {
                                                        label: _.intl.string(_.t["RSfm+i"]),
                                                        description: _.intl.string(_.t.IBi6hz),
                                                        value: null !== s.description ? s.description : "",
                                                        placeholder: _.intl.string(_.t.rFa9Ui),
                                                        onChange: (e) => {
                                                            var t;
                                                            j.A.updateGuild({
                                                                description:
                                                                    null !=
                                                                    (t = null == e ? void 0 : e.replaceAll("\n", ""))
                                                                        ? t
                                                                        : "",
                                                            });
                                                        },
                                                        maxLength: 300,
                                                        disabled: !P,
                                                    }),
                                                    (0, r.jsx)(c.cGx, {}),
                                                    (() => {
                                                        if (null == R) return null;
                                                        let e =
                                                            0 === R.reasonsToJoin.length
                                                                ? [, , , ,].fill({
                                                                      reason: "",
                                                                      emoji_name: null,
                                                                  })
                                                                : R.reasonsToJoin;
                                                        return (0, r.jsx)(c.D0$, {
                                                            label: _.intl.string(_.t.vUmXsR),
                                                            description: _.intl.string(_.t.esnBnW),
                                                            errorMessage:
                                                                (null == V ? void 0 : V.reasons_to_join) != null
                                                                    ? V.reasons_to_join
                                                                    : void 0,
                                                            children: (0, r.jsx)(A.A, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: s.id,
                                                                reasons: e,
                                                            }),
                                                        });
                                                    })(),
                                                    (0, r.jsx)(c.cGx, {}),
                                                    (0, r.jsx)(
                                                        c.fs1,
                                                        {
                                                            label: _.intl.string(_.t["lu+BmJ"]),
                                                            description: _.intl.string(_.t.ozSi8g),
                                                            error:
                                                                (null == V ? void 0 : V.about) != null
                                                                    ? V.about
                                                                    : void 0,
                                                            showCharacterCount: !0,
                                                            rows: 10,
                                                            value: R.about,
                                                            placeholder: _.intl.string(_.t.TduTbs),
                                                            onChange: (e) => {
                                                                (0, f.xN)(s.id, e);
                                                            },
                                                            minLength: 300,
                                                            maxLength: 2400,
                                                            disabled: !P,
                                                            defaultDirty:
                                                                (null == (e = R.about) ? void 0 : e.length) > 0,
                                                        },
                                                        "text-area-".concat(w),
                                                    ),
                                                    (0, r.jsx)(c.cGx, {}),
                                                    (0, r.jsxs)(c.D0$, {
                                                        label: _.intl.string(_.t.V5mNyb),
                                                        description: _.intl.string(_.t.d3kA9a),
                                                        errorMessage:
                                                            (null == V ? void 0 : V.social_links) != null
                                                                ? V.social_links
                                                                : void 0,
                                                        children: [
                                                            R.socialLinks.map((e, t) => {
                                                                var n;
                                                                let i,
                                                                    l = B[t],
                                                                    a = Object.values(E.x).find(
                                                                        (e) => e.presentation === l,
                                                                    ),
                                                                    o = null != a ? "".concat(a.baseUrl) : void 0;
                                                                return (0, r.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className: S.Au,
                                                                        onMouseOver: () => X(t, !0),
                                                                        onFocus: () => X(t, !0),
                                                                        onMouseOut: () => X(t, !1),
                                                                        onBlur: () => X(t, !1),
                                                                        children: [
                                                                            (0, r.jsx)(c.l6P, {
                                                                                selectionMode: "single",
                                                                                options:
                                                                                    ((n = B[t]),
                                                                                    (i = Object.entries(E.x)
                                                                                        .filter(
                                                                                            (e) =>
                                                                                                !B.includes(
                                                                                                    e[1].presentation,
                                                                                                ),
                                                                                        )
                                                                                        .map((e) => ({
                                                                                            id: e[0],
                                                                                            label: e[1].presentation,
                                                                                            value: e[0],
                                                                                        }))),
                                                                                    null == n || "" === n
                                                                                        ? i
                                                                                        : i.concat({
                                                                                              id: n,
                                                                                              label: n,
                                                                                              value: n,
                                                                                          })),
                                                                                label: _.intl.string(_.t.xSALIK),
                                                                                hideLabel: !0,
                                                                                placeholder: _.intl.string(_.t.xSALIK),
                                                                                value: B[t],
                                                                                onSelectionChange: (e) => {
                                                                                    let n, r, i;
                                                                                    return (
                                                                                        (n = [...R.socialLinks]),
                                                                                        (r = [...B]),
                                                                                        (i = [...G]),
                                                                                        void ((r[t] = e),
                                                                                        (n[t] = E.x[e].baseUrl),
                                                                                        (i[t] = !0),
                                                                                        L(i),
                                                                                        H(r),
                                                                                        M(i.every((e) => !0 === e)),
                                                                                        (0, f.uh)(s.id, n))
                                                                                    );
                                                                                },
                                                                                disabled: !P,
                                                                            }),
                                                                            (0, r.jsx)(c.ksK, {
                                                                                value: e.replace(
                                                                                    null != o ? o : "",
                                                                                    "",
                                                                                ),
                                                                                onChange: (e) => {
                                                                                    var n;
                                                                                    let r, i, l;
                                                                                    return (
                                                                                        (n = "".concat(o).concat(e)),
                                                                                        (i = (r = [...R.socialLinks])[
                                                                                            t
                                                                                        ]),
                                                                                        (l = n),
                                                                                        0 === i.length &&
                                                                                            l.length > 1 &&
                                                                                            !1 ===
                                                                                                RegExp("^https?:").test(
                                                                                                    l,
                                                                                                ) &&
                                                                                            (l = "https://" + l),
                                                                                        void (
                                                                                            !/\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(
                                                                                                l,
                                                                                            ) &&
                                                                                            ((r[t] = l),
                                                                                            (0, f.uh)(s.id, r))
                                                                                        )
                                                                                    );
                                                                                },
                                                                                placeholder:
                                                                                    null != o
                                                                                        ? void 0
                                                                                        : _.intl.string(_.t.Q6o4pJ),
                                                                                maxLength: 150,
                                                                                disabled: !P || null == B[t],
                                                                                fullWidth: !0,
                                                                                leading: o,
                                                                                trailing: P
                                                                                    ? {
                                                                                          icon: c.ucK,
                                                                                          "aria-label": _.intl.string(
                                                                                              _.t.N86XcP,
                                                                                          ),
                                                                                          onClick: () => {
                                                                                              let e, n, r, i;
                                                                                              return (
                                                                                                  (e = [...U]).splice(
                                                                                                      t,
                                                                                                      1,
                                                                                                  ),
                                                                                                  F(e),
                                                                                                  (n = [...G]).splice(
                                                                                                      t,
                                                                                                      1,
                                                                                                  ),
                                                                                                  L(n),
                                                                                                  (r = [...B]).splice(
                                                                                                      t,
                                                                                                      1,
                                                                                                  ),
                                                                                                  H(r),
                                                                                                  void ((i = [
                                                                                                      ...R.socialLinks,
                                                                                                  ]).splice(t, 1),
                                                                                                  (0, f.uh)(s.id, i))
                                                                                              );
                                                                                          },
                                                                                      }
                                                                                    : void 0,
                                                                            }),
                                                                        ],
                                                                    },
                                                                    "social-container-" + t,
                                                                );
                                                            }),
                                                            (null == V ? void 0 : V.social_links) != null
                                                                ? (0, r.jsx)(c.Text, {
                                                                      color: "text-feedback-critical",
                                                                      variant: "text-sm/normal",
                                                                      children: V.social_links,
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(c.Button, {
                                                                variant: "secondary",
                                                                size: "sm",
                                                                text: _.intl.string(_.t.Qvovjc),
                                                                onClick: () => {
                                                                    if (R.socialLinks.length < 9) {
                                                                        let e = [...R.socialLinks];
                                                                        (0, f.uh)(s.id, e.concat("")), H(B.concat(""));
                                                                    }
                                                                },
                                                                disabled: !P || R.socialLinks.length >= 9,
                                                            }),
                                                        ],
                                                    }),
                                                    R.isPublished &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(c.cGx, {}),
                                                                (0, r.jsx)(c.D0$, {
                                                                    label: _.intl.string(_.t["5yF7e1"]),
                                                                    description: _.intl.string(_.t.eOFvqT),
                                                                    children: (0, r.jsx)(c.Button, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: _.intl.string(_.t["DCHd/G"]),
                                                                        onClick: () => z(!1),
                                                                        disabled: !P,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    (null == V ? void 0 : V.is_published) != null
                                                        ? (0, r.jsx)(c.Text, {
                                                              color: "text-feedback-critical",
                                                              variant: "text-sm/normal",
                                                              children: V.is_published,
                                                          })
                                                        : null,
                                                ],
                                            }),
                                        ],
                                    }),
                                    !R.isPublished &&
                                        (0, r.jsx)("div", {
                                            className: S.D4,
                                            children: (0, r.jsx)(u.A, {
                                                title: _.intl.string(_.t["2kCyn/"]),
                                                children: W,
                                                buttonLabel: _.intl.string(_.t.tVK6S9),
                                                buttonCallback: () => z(!0),
                                                disabled: !P || !k,
                                            }),
                                        }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
        });
    },
    P = () => (null == (0, l.bG)([O.A], () => O.A.getGuild()) ? null : (0, r.jsx)(C, {}));
