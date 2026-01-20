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
    f = n(456268),
    m = n(134432),
    b = n(813197),
    p = n(208567),
    h = n(496675),
    x = n(768581),
    j = n(63063),
    v = n(434404),
    O = n(999382),
    y = n(718157),
    C = n(450474),
    N = n(328159),
    E = n(873029),
    I = n(981631),
    S = n(388032),
    _ = n(141905);
let T = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
    P = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n,
        } = (0, a.cj)([O.Z], () => ({
            submitting: O.Z.isSubmitting(),
            guild: O.Z.getGuild(),
            guildMetadata: O.Z.getMetadata(),
        }));
        return (0, r.jsx)(s.Z, {
            submitting: n,
            onReset: () => {
                null != e && v.Z.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (v.Z.saveGuild(e.id, {
                        discoverySplash: e.discoverySplash,
                        description: e.description,
                    }),
                    (0, f.Vv)({
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
            s = (0, a.e7)([O.Z], () => O.Z.getGuild()),
            [P, w] = i.useState(!1);
        i.useEffect(() => {
            P || null == s || ((0, f.le)(), (0, f.aC)(s.id), (0, f.i3)(s.id), w(!0));
        }, [s, P]);
        let { canManageGuild: Z } = (0, a.cj)([h.Z], () => ({ canManageGuild: h.Z.can(I.Plq.MANAGE_GUILD, s) })),
            R = (0, a.e7)([O.Z], () => O.Z.isGuildMetadataLoaded()),
            D = (0, a.e7)([O.Z], () => (null != s ? O.Z.getMetadata() : null)),
            A = (0, a.e7)([O.Z], () => (null != s && (null == D ? void 0 : D.isPublished) ? O.Z.getSlug() : null)),
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
                                    return E.z.bandcamp.presentation;
                                let a = null != (n = null == (t = l.shift()) ? void 0 : t.toLowerCase()) ? n : "";
                                if (
                                    ("www" === a &&
                                        (a = null != (i = null == (r = l.shift()) ? void 0 : r.toLowerCase()) ? i : ""),
                                    a in E.z)
                                )
                                    return E.z[a].presentation;
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
        let W = (0, a.e7)([O.Z], () => (null != s ? O.Z.getErrors() : null));
        if (null == s || null == D) return null;
        let z = (e) => {
                v.Z.updateGuild({ discoverySplash: e });
            },
            V = (e) => {
                let t = () => {
                    (0, f.W1)(s.id, e),
                        e
                            ? (0, f.Vv)({
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
                            : (0, f.Vv)({
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
                        v.Z.saveGuild(s.id, {
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
                    title: S.intl.string(S.t["/SWsH3"]),
                    items: [
                        {
                            description: S.intl.string(S.t.DU8jF2),
                            completed: null !== s.discoverySplash && "" !== s.discoverySplash,
                        },
                        {
                            description: S.intl.string(S.t.SW5OH6),
                            completed: null !== s.description && "" !== s.description,
                        },
                        {
                            description: S.intl.string(S.t.m3b3WL),
                            completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400,
                        },
                        {
                            description: S.intl.string(S.t.qpx5MN),
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
            className: _.settingsColumn,
            children: (0, r.jsx)("div", {
                className: _.settingsContainer,
                children: (0, r.jsx)(c.w0Z, {
                    className: _.settingsScroller,
                    children: (0, r.jsx)("main", {
                        ref: t,
                        className: _.settingsContent,
                        children: (0, r.jsx)(c.JcV, {
                            containerRef: t,
                            children: (0, r.jsxs)("div", {
                                className: _.container,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: _.mainContent,
                                        children: [
                                            (0, r.jsxs)(c.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: [
                                                    S.intl.string(S.t.kGlQGF),
                                                    (0, r.jsx)(u.Z, { className: _.betaTag }),
                                                ],
                                            }),
                                            (0, r.jsxs)(c.Text, {
                                                variant: "text-sm/normal",
                                                className: _.tabMainDescription,
                                                children: [
                                                    S.intl.format(S.t["+ScrMf"], {
                                                        discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT,
                                                    }),
                                                    " ",
                                                    S.intl.format(S.t.T6WtKw, {
                                                        learnMoreURL: j.Z.getArticleURL(I.BhN.SERVER_WEB_PAGES),
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
                                                                    label: S.intl.string(S.t.safBZ9),
                                                                    children: (0, r.jsx)(d.Z, { value: e }),
                                                                }),
                                                                (0, r.jsx)(c.Button, {
                                                                    variant: "primary",
                                                                    size: "sm",
                                                                    text: S.intl.string(S.t.NI8iGI),
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
                                                                    (0, r.jsx)(y.E, {
                                                                        label: S.intl.string(S.t.GjPpSu),
                                                                        description: S.intl.string(S.t.MVXonM),
                                                                        guildId: s.id,
                                                                        guildMetadata: D,
                                                                        isDisabled: !Z,
                                                                    }),
                                                                    (0, r.jsx)(C.Z, {
                                                                        label: S.intl.string(S.t.oOPlPA),
                                                                        guild: s,
                                                                        guildMetadata: D,
                                                                        disabled: !Z,
                                                                    }),
                                                                    (null == W ? void 0 : W.category) != null
                                                                        ? (0, r.jsx)(c.Text, {
                                                                              color: "text-feedback-critical",
                                                                              className: _.error,
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
                                                                label: S.intl.string(S.t["8bT/Cu"]),
                                                                description: S.intl.string(S.t.WCWT7A),
                                                                errorMessage:
                                                                    (null == W ? void 0 : W.discovery_splash) != null
                                                                        ? W.discovery_splash
                                                                        : void 0,
                                                                layout: "horizontal",
                                                                children: (0, r.jsxs)(c.Kqy, {
                                                                    gap: 16,
                                                                    children: [
                                                                        (0, r.jsx)(p.Z, {
                                                                            image: s.discoverySplash,
                                                                            makeURL: (e) =>
                                                                                x.ZP.getGuildDiscoverySplashURL({
                                                                                    id: s.id,
                                                                                    splash: e,
                                                                                    size: 512 * (0, m.x_)(),
                                                                                }),
                                                                            disabled: !Z,
                                                                            onChange: z,
                                                                            hint: S.intl.string(S.t.uPvxqJ),
                                                                            imageClassName: _.imageUploaderInnerSquare,
                                                                            hideSize: !0,
                                                                        }),
                                                                        (0, r.jsxs)(o.zx, {
                                                                            size: o.zx.Sizes.SMALL,
                                                                            color: o.zx.Colors.PRIMARY,
                                                                            children: [
                                                                                S.intl.string(S.t.yG2pUi),
                                                                                (0, r.jsx)(b.ZP, {
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
                                                        label: S.intl.string(S.t["RSfm+i"]),
                                                        description: S.intl.string(S.t.IBi6hz),
                                                        value: null !== s.description ? s.description : "",
                                                        placeholder: S.intl.string(S.t.rFa9Ui),
                                                        onChange: (e) => {
                                                            var t;
                                                            v.Z.updateGuild({
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
                                                            label: S.intl.string(S.t.vUmXsR),
                                                            description: S.intl.string(S.t.esnBnW),
                                                            errorMessage:
                                                                (null == W ? void 0 : W.reasons_to_join) != null
                                                                    ? W.reasons_to_join
                                                                    : void 0,
                                                            children: (0, r.jsx)(N.Z, {
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
                                                            label: S.intl.string(S.t["lu+BmJ"]),
                                                            description: S.intl.string(S.t.ozSi8g),
                                                            error:
                                                                (null == W ? void 0 : W.about) != null
                                                                    ? W.about
                                                                    : void 0,
                                                            showCharacterCount: !0,
                                                            rows: 10,
                                                            value: D.about,
                                                            placeholder: S.intl.string(S.t.TduTbs),
                                                            onChange: (e) => {
                                                                (0, f.mA)(s.id, e);
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
                                                        label: S.intl.string(S.t.V5mNyb),
                                                        description: S.intl.string(S.t.d3kA9a),
                                                        errorMessage:
                                                            (null == W ? void 0 : W.social_links) != null
                                                                ? W.social_links
                                                                : void 0,
                                                        children: [
                                                            D.socialLinks.map((e, t) => {
                                                                let n = F[t],
                                                                    i = Object.values(E.z).find(
                                                                        (e) => e.presentation === n,
                                                                    ),
                                                                    l = null != i ? "".concat(i.baseUrl) : void 0;
                                                                return (0, r.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className: _.socialLinksContainer,
                                                                        onMouseOver: () => q(t, !0),
                                                                        onFocus: () => q(t, !0),
                                                                        onMouseOut: () => q(t, !1),
                                                                        onBlur: () => q(t, !1),
                                                                        children: [
                                                                            (0, r.jsx)(c.PhF, {
                                                                                selectionMode: "single",
                                                                                options: ((e) => {
                                                                                    let t = Object.entries(E.z)
                                                                                        .filter(
                                                                                            (e) =>
                                                                                                !F.includes(
                                                                                                    e[1].presentation,
                                                                                                ),
                                                                                        )
                                                                                        .map((e) => ({
                                                                                            id: e[0],
                                                                                            label: e[1].presentation,
                                                                                            value: e[0],
                                                                                        }));
                                                                                    return null == e || "" === e
                                                                                        ? t
                                                                                        : t.concat({
                                                                                              id: e,
                                                                                              label: e,
                                                                                              value: e,
                                                                                          });
                                                                                })(F[t]),
                                                                                label: S.intl.string(S.t.xSALIK),
                                                                                hideLabel: !0,
                                                                                placeholder: S.intl.string(S.t.xSALIK),
                                                                                value: F[t],
                                                                                onSelectionChange: (e) =>
                                                                                    ((e, t) => {
                                                                                        let n = [...D.socialLinks],
                                                                                            r = [...F],
                                                                                            i = [...L];
                                                                                        (r[t] = e),
                                                                                            (n[t] = E.z[e].baseUrl),
                                                                                            (i[t] = !0),
                                                                                            k(i),
                                                                                            H(r),
                                                                                            M(i.every((e) => !0 === e)),
                                                                                            (0, f.t$)(s.id, n);
                                                                                    })(e, t),
                                                                                disabled: !Z,
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
                                                                                                (0, f.t$)(s.id, n));
                                                                                    })("".concat(l).concat(e), t),
                                                                                placeholder:
                                                                                    null != l
                                                                                        ? void 0
                                                                                        : S.intl.string(S.t.Q6o4pJ),
                                                                                maxLength: 150,
                                                                                disabled: !Z || null == F[t],
                                                                                fullWidth: !0,
                                                                                leading: l,
                                                                                trailing: Z
                                                                                    ? {
                                                                                          icon: c.XHJ,
                                                                                          "aria-label": S.intl.string(
                                                                                              S.t.N86XcP,
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
                                                                                                      (0, f.t$)(
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
                                                                      color: "text-feedback-critical",
                                                                      variant: "text-sm/normal",
                                                                      children: W.social_links,
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(c.Button, {
                                                                variant: "secondary",
                                                                size: "sm",
                                                                text: S.intl.string(S.t.Qvovjc),
                                                                onClick: () => {
                                                                    if (D.socialLinks.length < 9) {
                                                                        let e = [...D.socialLinks];
                                                                        (0, f.t$)(s.id, e.concat("")), H(F.concat(""));
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
                                                                    label: S.intl.string(S.t["5yF7e1"]),
                                                                    description: S.intl.string(S.t.eOFvqT),
                                                                    children: (0, r.jsx)(c.Button, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: S.intl.string(S.t["DCHd/G"]),
                                                                        onClick: () => V(!1),
                                                                        disabled: !Z,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    (null == W ? void 0 : W.is_published) != null
                                                        ? (0, r.jsx)(c.Text, {
                                                              color: "text-feedback-critical",
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
                                            className: _.checklist,
                                            children: (0, r.jsx)(g.Z, {
                                                title: S.intl.string(S.t["2kCyn/"]),
                                                children: Y,
                                                buttonLabel: S.intl.string(S.t.tVK6S9),
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
    Z = () => (null == (0, a.e7)([O.Z], () => O.Z.getGuild()) ? null : (0, r.jsx)(w, {}));
