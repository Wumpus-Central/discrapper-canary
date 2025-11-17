n.d(t, {
    J: () => P,
    Z: () => Z,
}),
    n(953529),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(35282),
    n(804061),
    n(704826),
    n(413496),
    n(433524);
var r = n(54381),
    i = n(473749),
    l = n(345074),
    a = n(442837),
    s = n(796027),
    o = n(755721),
    c = n(481060),
    d = n(484614),
    u = n(688465),
    g = n(970061),
    m = n(456268),
    p = n(134432),
    f = n(813197),
    h = n(208567),
    b = n(496675),
    x = n(768581),
    j = n(63063),
    _ = n(434404),
    v = n(999382),
    O = n(718157),
    C = n(450474),
    y = n(328159),
    N = n(873029),
    E = n(981631),
    I = n(388032),
    S = n(133190);
let T = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
    P = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n,
        } = (0, a.cj)([v.Z], () => ({
            submitting: v.Z.isSubmitting(),
            guild: v.Z.getGuild(),
            guildMetadata: v.Z.getMetadata(),
        }));
        return (0, r.jsx)(s.Z, {
            submitting: n,
            onReset: () => {
                null != e && _.Z.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (_.Z.saveGuild(e.id, {
                        discoverySplash: e.discoverySplash,
                        description: e.description,
                    }),
                    (0, m.Vv)({
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
    w = () => {
        var e;
        let t = i.useRef(null),
            s = (0, a.e7)([v.Z], () => v.Z.getGuild()),
            [P, w] = i.useState(!1);
        i.useEffect(() => {
            P || null == s || ((0, m.le)(), (0, m.aC)(s.id), (0, m.i3)(s.id), w(!0));
        }, [s, P]);
        let { canManageGuild: Z } = (0, a.cj)([b.Z], () => ({ canManageGuild: b.Z.can(E.Plq.MANAGE_GUILD, s) })),
            R = (0, a.e7)([v.Z], () => v.Z.isGuildMetadataLoaded()),
            D = (0, a.e7)([v.Z], () => (null != s ? v.Z.getMetadata() : null)),
            A = (0, a.e7)([v.Z], () => (null != s && (null == D ? void 0 : D.isPublished) ? v.Z.getSlug() : null)),
            [L, k] = i.useState([!0]),
            [G, M] = i.useState(!0),
            [U, B] = i.useState([!1]),
            [F, H] = i.useState([""]);
        i.useEffect(() => {
            if (null !== D) {
                let e = [],
                    t = [];
                D.socialLinks.forEach((n, r) => {
                    if ("" !== n) {
                        let i = ((e) => {
                            try {
                                var t, n, r, i;
                                let l = new URL(e).hostname.split(".");
                                if (3 === l.length && "bandcamp" === l[1].toLowerCase())
                                    return N.z.bandcamp.presentation;
                                let a = null != (n = null == (t = l.shift()) ? void 0 : t.toLowerCase()) ? n : "";
                                if (
                                    ("www" === a &&
                                        (a = null != (i = null == (r = l.shift()) ? void 0 : r.toLowerCase()) ? i : ""),
                                    a in N.z)
                                )
                                    return N.z[a].presentation;
                                return null;
                            } catch (e) {
                                return null;
                            }
                        })(n);
                        null !== i ? ((t[r] = i), (e[r] = !0)) : (e[r] = !1);
                    } else e[r] = !0;
                }),
                    H(t),
                    k(e),
                    M(e.every((e) => !0 === e));
            }
        }, [D]);
        let W = (0, a.e7)([v.Z], () => (null != s ? v.Z.getErrors() : null));
        if (null == s || null == D) return null;
        let z = (e) => {
                _.Z.updateGuild({ discoverySplash: e });
            },
            V = (e) => {
                let t = () => {
                    (0, m.W1)(s.id, e),
                        e
                            ? (0, m.Vv)({
                                  guildId: s.id,
                                  primaryCategoryId: D.primaryCategoryId,
                                  keywords: D.keywords,
                                  emojiDiscoverabilityEnabled: D.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: D.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: D.partnerApplicationTimestamp,
                                  isPublished: !0,
                                  reasonsToJoin: D.reasonsToJoin,
                                  socialLinks: D.socialLinks,
                                  about: D.about,
                              })
                            : (0, m.Vv)({
                                  guildId: s.id,
                                  primaryCategoryId: D.primaryCategoryId,
                                  keywords: D.keywords,
                                  emojiDiscoverabilityEnabled: D.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: D.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: D.partnerApplicationTimestamp,
                                  isPublished: !1,
                                  reasonsToJoin: D.reasonsToJoin,
                                  socialLinks: D.socialLinks,
                                  about: D.about,
                              }),
                        _.Z.saveGuild(s.id, {
                            discoverySplash: s.discoverySplash,
                            description: s.description,
                        });
                };
                if (e) return void t();
                null != s.vanityURLCode
                    ? n
                          .e("95999")
                          .then(n.bind(n, 976540))
                          .then((e) => {
                              e.default.open(t);
                          })
                    : t();
            },
            K = (e) => {
                let { reason: t = "", emoji_name: n = "" } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            Y = [
                {
                    title: I.intl.string(I.t["/SWsH3"]),
                    items: [
                        {
                            description: I.intl.string(I.t.DU8jF2),
                            completed: null !== s.discoverySplash && "" !== s.discoverySplash,
                        },
                        {
                            description: I.intl.string(I.t.SW5OH6),
                            completed: null !== s.description && "" !== s.description,
                        },
                        {
                            description: I.intl.string(I.t.m3b3WL),
                            completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400,
                        },
                        {
                            description: I.intl.string(I.t.qpx5MN),
                            completed:
                                null !== D.reasonsToJoin &&
                                D.reasonsToJoin.every(
                                    (e) =>
                                        ((e) => {
                                            let { reason: t = "", emoji_name: n = "" } = e;
                                            return (null === t || "" === t) && null === n;
                                        })(e) || K(e),
                                ) &&
                                D.reasonsToJoin.filter(K).length >= 2,
                        },
                    ],
                },
            ],
            q = (e, t) => {
                let n = [...U];
                (n[e] = t), B(n);
            };
        return (0, r.jsx)("div", {
            className: S.settingsColumn,
            children: (0, r.jsx)("div", {
                className: S.settingsContainer,
                children: (0, r.jsx)(c.w0Z, {
                    className: S.settingsScroller,
                    children: (0, r.jsx)("main", {
                        ref: t,
                        className: S.settingsContent,
                        children: (0, r.jsx)(c.JcV, {
                            containerRef: t,
                            children: (0, r.jsxs)("div", {
                                className: S.container,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: S.mainContent,
                                        children: [
                                            (0, r.jsxs)(c.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: [
                                                    I.intl.string(I.t.kGlQGF),
                                                    (0, r.jsx)(u.Z, { className: S.betaTag }),
                                                ],
                                            }),
                                            (0, r.jsxs)(c.Text, {
                                                variant: "text-sm/normal",
                                                className: S.tabMainDescription,
                                                children: [
                                                    I.intl.format(I.t["+ScrMf"], {
                                                        discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT,
                                                    }),
                                                    " ",
                                                    I.intl.format(I.t.T6WtKw, {
                                                        learnMoreURL: j.Z.getArticleURL(E.BhN.SERVER_WEB_PAGES),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(c.Kqy, {
                                                gap: 40,
                                                children: [
                                                    (() => {
                                                        if (!D.isPublished || null == A) return;
                                                        let e = T + A;
                                                        return (0, r.jsxs)(c.Kqy, {
                                                            gap: 16,
                                                            children: [
                                                                (0, r.jsx)(c.gNt, {
                                                                    label: I.intl.string(I.t.safBZ9),
                                                                    children: (0, r.jsx)(d.Z, { value: e }),
                                                                }),
                                                                (0, r.jsx)(c.Button, {
                                                                    variant: "primary",
                                                                    size: "sm",
                                                                    text: I.intl.string(I.t.NI8iGI),
                                                                    onClick: () => window.open(e),
                                                                }),
                                                            ],
                                                        });
                                                    })(),
                                                    (0, r.jsx)(c.izJ, {}),
                                                    (() => {
                                                        if (null != s)
                                                            return (0, r.jsxs)(r.Fragment, {
                                                                children: [
                                                                    (0, r.jsx)(O.E, {
                                                                        label: I.intl.string(I.t.GjPpSu),
                                                                        description: I.intl.string(I.t.MVXonM),
                                                                        guildId: s.id,
                                                                        guildMetadata: D,
                                                                        isDisabled: !Z,
                                                                    }),
                                                                    (0, r.jsx)(C.Z, {
                                                                        label: I.intl.string(I.t.oOPlPA),
                                                                        guild: s,
                                                                        guildMetadata: D,
                                                                        disabled: !Z,
                                                                    }),
                                                                    (null == W ? void 0 : W.category) != null
                                                                        ? (0, r.jsx)(c.Text, {
                                                                              color: "text-danger",
                                                                              className: S.error,
                                                                              variant: "text-sm/normal",
                                                                              children: W.category,
                                                                          })
                                                                        : null,
                                                                ],
                                                            });
                                                    })(),
                                                    (0, r.jsx)(c.izJ, {}),
                                                    (() => {
                                                        if (null != s)
                                                            return (0, r.jsx)(c.gNt, {
                                                                label: I.intl.string(I.t["8bT/Cu"]),
                                                                description: I.intl.string(I.t.WCWT7A),
                                                                errorMessage:
                                                                    (null == W ? void 0 : W.discovery_splash) != null
                                                                        ? W.discovery_splash
                                                                        : void 0,
                                                                layout: "horizontal",
                                                                children: (0, r.jsxs)(c.Kqy, {
                                                                    gap: 16,
                                                                    children: [
                                                                        (0, r.jsx)(h.Z, {
                                                                            image: s.discoverySplash,
                                                                            makeURL: (e) =>
                                                                                x.ZP.getGuildDiscoverySplashURL({
                                                                                    id: s.id,
                                                                                    splash: e,
                                                                                    size: 512 * (0, p.x_)(),
                                                                                }),
                                                                            disabled: !Z,
                                                                            onChange: z,
                                                                            hint: I.intl.string(I.t.uPvxqJ),
                                                                            imageClassName: S.imageUploaderInnerSquare,
                                                                            hideSize: !0,
                                                                        }),
                                                                        (0, r.jsxs)(o.zx, {
                                                                            size: o.zx.Sizes.SMALL,
                                                                            color: o.zx.Colors.PRIMARY,
                                                                            children: [
                                                                                I.intl.string(I.t.yG2pUi),
                                                                                (0, r.jsx)(f.ZP, {
                                                                                    disabled: !Z,
                                                                                    onChange: z,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            });
                                                    })(),
                                                    (0, r.jsx)(c.izJ, {}),
                                                    (0, r.jsx)(c.Kx8, {
                                                        label: I.intl.string(I.t["RSfm+i"]),
                                                        description: I.intl.string(I.t.IBi6hz),
                                                        value: null !== s.description ? s.description : "",
                                                        placeholder: I.intl.string(I.t.rFa9Ui),
                                                        onChange: (e) => {
                                                            var t;
                                                            _.Z.updateGuild({
                                                                description:
                                                                    null !=
                                                                    (t = null == e ? void 0 : e.replaceAll("\n", ""))
                                                                        ? t
                                                                        : "",
                                                            });
                                                        },
                                                        maxLength: l.Us,
                                                        disabled: !Z,
                                                    }),
                                                    (0, r.jsx)(c.izJ, {}),
                                                    (() => {
                                                        if (null == D) return null;
                                                        let e =
                                                            0 === D.reasonsToJoin.length
                                                                ? [, , , ,].fill({
                                                                      reason: "",
                                                                      emoji_name: null,
                                                                  })
                                                                : D.reasonsToJoin;
                                                        return (0, r.jsx)(c.gNt, {
                                                            label: I.intl.string(I.t.vUmXsR),
                                                            description: I.intl.string(I.t.esnBnW),
                                                            errorMessage:
                                                                (null == W ? void 0 : W.reasons_to_join) != null
                                                                    ? W.reasons_to_join
                                                                    : void 0,
                                                            children: (0, r.jsx)(y.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: s.id,
                                                                reasons: e,
                                                            }),
                                                        });
                                                    })(),
                                                    (0, r.jsx)(c.izJ, {}),
                                                    (0, r.jsx)(
                                                        c.Kx8,
                                                        {
                                                            label: I.intl.string(I.t["lu+BmJ"]),
                                                            description: I.intl.string(I.t.ozSi8g),
                                                            error:
                                                                (null == W ? void 0 : W.about) != null
                                                                    ? W.about
                                                                    : void 0,
                                                            showCharacterCount: !0,
                                                            rows: 10,
                                                            value: D.about,
                                                            placeholder: I.intl.string(I.t.TduTbs),
                                                            onChange: (e) => {
                                                                (0, m.mA)(s.id, e);
                                                            },
                                                            minLength: 300,
                                                            maxLength: 2400,
                                                            disabled: !Z,
                                                            defaultDirty:
                                                                (null == (e = D.about) ? void 0 : e.length) > 0,
                                                        },
                                                        "text-area-".concat(R),
                                                    ),
                                                    (0, r.jsx)(c.izJ, {}),
                                                    (0, r.jsxs)(c.gNt, {
                                                        label: I.intl.string(I.t.V5mNyb),
                                                        description: I.intl.string(I.t.d3kA9a),
                                                        errorMessage:
                                                            (null == W ? void 0 : W.social_links) != null
                                                                ? W.social_links
                                                                : void 0,
                                                        children: [
                                                            D.socialLinks.map((e, t) => {
                                                                let n = F[t],
                                                                    i = Object.values(N.z).find(
                                                                        (e) => e.presentation === n,
                                                                    ),
                                                                    l = null != i ? "".concat(i.baseUrl) : void 0;
                                                                return (0, r.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className: S.socialLinksContainer,
                                                                        onMouseOver: () => q(t, !0),
                                                                        onFocus: () => q(t, !0),
                                                                        onMouseOut: () => q(t, !1),
                                                                        onBlur: () => q(t, !1),
                                                                        children: [
                                                                            (0, r.jsx)(c.q4e, {
                                                                                className: D.isPublished
                                                                                    ? S.socialLinksDropdownMax
                                                                                    : S.socialLinksDropdownMin,
                                                                                options: ((e) => {
                                                                                    let t = Object.entries(N.z)
                                                                                        .filter(
                                                                                            (e) =>
                                                                                                !F.includes(
                                                                                                    e[1].presentation,
                                                                                                ),
                                                                                        )
                                                                                        .map((e) => ({
                                                                                            label: e[1].presentation,
                                                                                            value: e[0],
                                                                                        }));
                                                                                    return null == e || "" === e
                                                                                        ? t
                                                                                        : t.concat({
                                                                                              label: e,
                                                                                              value: e,
                                                                                          });
                                                                                })(F[t]),
                                                                                placeholder: I.intl.string(I.t.xSALIK),
                                                                                value: F[t],
                                                                                onChange: (e) =>
                                                                                    ((e, t) => {
                                                                                        let n = [...D.socialLinks],
                                                                                            r = [...F],
                                                                                            i = [...L];
                                                                                        (r[t] = e),
                                                                                            (n[t] = N.z[e].baseUrl),
                                                                                            (i[t] = !0),
                                                                                            k(i),
                                                                                            H(r),
                                                                                            M(i.every((e) => !0 === e)),
                                                                                            (0, m.t$)(s.id, n);
                                                                                    })(e, t),
                                                                                isDisabled: !Z,
                                                                            }),
                                                                            (0, r.jsx)(c.oil, {
                                                                                value: e.replace(
                                                                                    null != l ? l : "",
                                                                                    "",
                                                                                ),
                                                                                onChange: (e) =>
                                                                                    ((e, t) => {
                                                                                        let n = [...D.socialLinks],
                                                                                            r = n[t],
                                                                                            i = e;
                                                                                        0 === r.length &&
                                                                                            i.length > 1 &&
                                                                                            !1 ===
                                                                                                RegExp("^https?:").test(
                                                                                                    i,
                                                                                                ) &&
                                                                                            (i = "https://" + i),
                                                                                            /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(
                                                                                                i,
                                                                                            ) ||
                                                                                                ((n[t] = i),
                                                                                                (0, m.t$)(s.id, n));
                                                                                    })("".concat(l).concat(e), t),
                                                                                placeholder:
                                                                                    null != l
                                                                                        ? void 0
                                                                                        : I.intl.string(I.t.Q6o4pJ),
                                                                                maxLength: 150,
                                                                                disabled: !Z || null == F[t],
                                                                                fullWidth: !0,
                                                                                leading: l,
                                                                                trailing: Z
                                                                                    ? {
                                                                                          icon: c.XHJ,
                                                                                          "aria-label": I.intl.string(
                                                                                              I.t.N86XcP,
                                                                                          ),
                                                                                          onClick: () =>
                                                                                              ((e) => {
                                                                                                  let t = [...U];
                                                                                                  t.splice(e, 1), B(t);
                                                                                                  let n = [...L];
                                                                                                  n.splice(e, 1), k(n);
                                                                                                  let r = [...F];
                                                                                                  r.splice(e, 1), H(r);
                                                                                                  let i = [
                                                                                                      ...D.socialLinks,
                                                                                                  ];
                                                                                                  i.splice(e, 1),
                                                                                                      (0, m.t$)(
                                                                                                          s.id,
                                                                                                          i,
                                                                                                      );
                                                                                              })(t),
                                                                                      }
                                                                                    : void 0,
                                                                            }),
                                                                        ],
                                                                    },
                                                                    "social-container-" + t,
                                                                );
                                                            }),
                                                            (null == W ? void 0 : W.social_links) != null
                                                                ? (0, r.jsx)(c.Text, {
                                                                      color: "text-danger",
                                                                      variant: "text-sm/normal",
                                                                      children: W.social_links,
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(c.Button, {
                                                                variant: "secondary",
                                                                size: "sm",
                                                                text: I.intl.string(I.t.Qvovjc),
                                                                onClick: () => {
                                                                    if (D.socialLinks.length < 9) {
                                                                        let e = [...D.socialLinks];
                                                                        (0, m.t$)(s.id, e.concat("")), H(F.concat(""));
                                                                    }
                                                                },
                                                                disabled: !Z || D.socialLinks.length >= 9,
                                                            }),
                                                        ],
                                                    }),
                                                    D.isPublished &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(c.izJ, {}),
                                                                (0, r.jsx)(c.gNt, {
                                                                    label: I.intl.string(I.t["5yF7e1"]),
                                                                    description: I.intl.string(I.t.eOFvqT),
                                                                    children: (0, r.jsx)(c.Button, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: I.intl.string(I.t["DCHd/G"]),
                                                                        onClick: () => V(!1),
                                                                        disabled: !Z,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    (null == W ? void 0 : W.is_published) != null
                                                        ? (0, r.jsx)(c.Text, {
                                                              color: "text-danger",
                                                              variant: "text-sm/normal",
                                                              children: W.is_published,
                                                          })
                                                        : null,
                                                ],
                                            }),
                                        ],
                                    }),
                                    !D.isPublished &&
                                        (0, r.jsx)("div", {
                                            className: S.checklist,
                                            children: (0, r.jsx)(g.Z, {
                                                title: I.intl.string(I.t["2kCyn/"]),
                                                children: Y,
                                                buttonLabel: I.intl.string(I.t.tVK6S9),
                                                buttonCallback: () => V(!0),
                                                disabled: !Z || !G,
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
    Z = () => (null == (0, a.e7)([v.Z], () => v.Z.getGuild()) ? null : (0, r.jsx)(w, {}));
