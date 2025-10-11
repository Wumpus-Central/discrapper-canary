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
var r = n(951288),
    i = n(647438),
    l = n(345074),
    a = n(442837),
    s = n(755721),
    o = n(481060),
    c = n(484614),
    d = n(852860),
    u = n(688465),
    g = n(970061),
    m = n(456268),
    p = n(134432),
    f = n(813197),
    h = n(208567),
    b = n(496675),
    x = n(768581),
    j = n(63063),
    v = n(434404),
    _ = n(999382),
    C = n(718157),
    O = n(450474),
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
        } = (0, a.cj)([_.Z], () => ({
            submitting: _.Z.isSubmitting(),
            guild: _.Z.getGuild(),
            guildMetadata: _.Z.getMetadata(),
        }));
        return (0, r.jsx)(d.Z, {
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
            d = (0, a.e7)([_.Z], () => _.Z.getGuild()),
            [P, w] = i.useState(!1);
        i.useEffect(() => {
            P || null == d || ((0, m.le)(), (0, m.aC)(d.id), (0, m.i3)(d.id), w(!0));
        }, [d, P]);
        let { canManageGuild: Z } = (0, a.cj)([b.Z], () => ({ canManageGuild: b.Z.can(E.Plq.MANAGE_GUILD, d) })),
            R = (0, a.e7)([_.Z], () => _.Z.isGuildMetadataLoaded()),
            D = (0, a.e7)([_.Z], () => (null != d ? _.Z.getMetadata() : null)),
            A = (0, a.e7)([_.Z], () => (null != d && (null == D ? void 0 : D.isPublished) ? _.Z.getSlug() : null)),
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
        let W = (0, a.e7)([_.Z], () => (null != d ? _.Z.getErrors() : null));
        if (null == d || null == D) return null;
        let V = (e) => {
                v.Z.updateGuild({ discoverySplash: e });
            },
            z = (e) => {
                let t = () => {
                    (0, m.W1)(d.id, e),
                        e
                            ? (0, m.Vv)({
                                  guildId: d.id,
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
                                  guildId: d.id,
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
                        v.Z.saveGuild(d.id, {
                            discoverySplash: d.discoverySplash,
                            description: d.description,
                        });
                };
                if (e) return void t();
                null != d.vanityURLCode
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
                    title: I.intl.string(I.t["/SWsHx"]),
                    items: [
                        {
                            description: I.intl.string(I.t.DU8jFx),
                            completed: null !== d.discoverySplash && "" !== d.discoverySplash,
                        },
                        {
                            description: I.intl.string(I.t.SW5OHx),
                            completed: null !== d.description && "" !== d.description,
                        },
                        {
                            description: I.intl.string(I.t.m3b3WF),
                            completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400,
                        },
                        {
                            description: I.intl.string(I.t.qpx5MD),
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
                children: (0, r.jsx)(o.w0Z, {
                    className: S.settingsScroller,
                    children: (0, r.jsx)("main", {
                        ref: t,
                        className: S.settingsContent,
                        children: (0, r.jsx)(o.JcV, {
                            containerRef: t,
                            children: (0, r.jsxs)("div", {
                                className: S.container,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: S.mainContent,
                                        children: [
                                            (0, r.jsxs)(o.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: [
                                                    I.intl.string(I.t.kGlQGB),
                                                    (0, r.jsx)(u.Z, { className: S.betaTag }),
                                                ],
                                            }),
                                            (0, r.jsxs)(o.Text, {
                                                variant: "text-sm/normal",
                                                className: S.tabMainDescription,
                                                children: [
                                                    I.intl.format(I.t["+ScrMT"], {
                                                        discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT,
                                                    }),
                                                    " ",
                                                    I.intl.format(I.t.T6WtKy, {
                                                        learnMoreURL: j.Z.getArticleURL(E.BhN.SERVER_WEB_PAGES),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(o.Kqy, {
                                                gap: 40,
                                                children: [
                                                    (() => {
                                                        if (!D.isPublished || null == A) return;
                                                        let e = T + A;
                                                        return (0, r.jsxs)(o.Kqy, {
                                                            gap: 16,
                                                            children: [
                                                                (0, r.jsx)(o.gNt, {
                                                                    label: I.intl.string(I.t.safBZ2),
                                                                    children: (0, r.jsx)(c.Z, { value: e }),
                                                                }),
                                                                (0, r.jsx)(o.Button, {
                                                                    variant: "primary",
                                                                    size: "sm",
                                                                    text: I.intl.string(I.t.NI8iGB),
                                                                    onClick: () => window.open(e),
                                                                }),
                                                            ],
                                                        });
                                                    })(),
                                                    (0, r.jsx)(o.izJ, {}),
                                                    (() => {
                                                        if (null != d)
                                                            return (0, r.jsxs)(r.Fragment, {
                                                                children: [
                                                                    (0, r.jsx)(C.E, {
                                                                        label: I.intl.string(I.t.GjPpSk),
                                                                        description: I.intl.string(I.t.MVXonJ),
                                                                        guildId: d.id,
                                                                        guildMetadata: D,
                                                                        isDisabled: !Z,
                                                                    }),
                                                                    (0, r.jsx)(O.Z, {
                                                                        label: I.intl.string(I.t.oOPlPD),
                                                                        guild: d,
                                                                        guildMetadata: D,
                                                                        disabled: !Z,
                                                                    }),
                                                                    (null == W ? void 0 : W.category) != null
                                                                        ? (0, r.jsx)(o.Text, {
                                                                              color: "text-danger",
                                                                              className: S.error,
                                                                              variant: "text-sm/normal",
                                                                              children: W.category,
                                                                          })
                                                                        : null,
                                                                ],
                                                            });
                                                    })(),
                                                    (0, r.jsx)(o.izJ, {}),
                                                    (() => {
                                                        if (null != d)
                                                            return (0, r.jsx)(o.gNt, {
                                                                label: I.intl.string(I.t["8bT/Cg"]),
                                                                description: I.intl.string(I.t.WCWT7O),
                                                                errorMessage:
                                                                    (null == W ? void 0 : W.discovery_splash) != null
                                                                        ? W.discovery_splash
                                                                        : void 0,
                                                                layout: "horizontal",
                                                                children: (0, r.jsxs)(o.Kqy, {
                                                                    gap: 16,
                                                                    children: [
                                                                        (0, r.jsx)(h.Z, {
                                                                            image: d.discoverySplash,
                                                                            makeURL: (e) =>
                                                                                x.ZP.getGuildDiscoverySplashURL({
                                                                                    id: d.id,
                                                                                    splash: e,
                                                                                    size: 512 * (0, p.x_)(),
                                                                                }),
                                                                            disabled: !Z,
                                                                            onChange: V,
                                                                            hint: I.intl.string(I.t.uPvxqK),
                                                                            imageClassName: S.imageUploaderInnerSquare,
                                                                            hideSize: !0,
                                                                        }),
                                                                        (0, r.jsxs)(s.zx, {
                                                                            size: s.zx.Sizes.SMALL,
                                                                            color: s.zx.Colors.PRIMARY,
                                                                            children: [
                                                                                I.intl.string(I.t.yG2pUl),
                                                                                (0, r.jsx)(f.ZP, {
                                                                                    disabled: !Z,
                                                                                    onChange: V,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            });
                                                    })(),
                                                    (0, r.jsx)(o.izJ, {}),
                                                    (0, r.jsx)(o.Kx8, {
                                                        label: I.intl.string(I.t["RSfm+v"]),
                                                        description: I.intl.string(I.t.IBi6h4),
                                                        value: null !== d.description ? d.description : "",
                                                        placeholder: I.intl.string(I.t.rFa9Ul),
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
                                                    (0, r.jsx)(o.izJ, {}),
                                                    (() => {
                                                        if (null == D) return null;
                                                        let e =
                                                            0 === D.reasonsToJoin.length
                                                                ? [, , , ,].fill({
                                                                      reason: "",
                                                                      emoji_name: null,
                                                                  })
                                                                : D.reasonsToJoin;
                                                        return (0, r.jsx)(o.gNt, {
                                                            label: I.intl.string(I.t.vUmXsb),
                                                            description: I.intl.string(I.t.esnBnZ),
                                                            errorMessage:
                                                                (null == W ? void 0 : W.reasons_to_join) != null
                                                                    ? W.reasons_to_join
                                                                    : void 0,
                                                            children: (0, r.jsx)(y.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: d.id,
                                                                reasons: e,
                                                            }),
                                                        });
                                                    })(),
                                                    (0, r.jsx)(o.izJ, {}),
                                                    (0, r.jsx)(
                                                        o.Kx8,
                                                        {
                                                            label: I.intl.string(I.t["lu+BmJ"]),
                                                            description: I.intl.string(I.t.ozSi8v),
                                                            error:
                                                                (null == W ? void 0 : W.about) != null
                                                                    ? W.about
                                                                    : void 0,
                                                            showCharacterCount: !0,
                                                            rows: 10,
                                                            value: D.about,
                                                            placeholder: I.intl.string(I.t.TduTbm),
                                                            onChange: (e) => {
                                                                (0, m.mA)(d.id, e);
                                                            },
                                                            minLength: 300,
                                                            maxLength: 2400,
                                                            disabled: !Z,
                                                            defaultDirty:
                                                                (null == (e = D.about) ? void 0 : e.length) > 0,
                                                        },
                                                        "text-area-".concat(R),
                                                    ),
                                                    (0, r.jsx)(o.izJ, {}),
                                                    (0, r.jsxs)(o.gNt, {
                                                        label: I.intl.string(I.t.V5mNyc),
                                                        description: I.intl.string(I.t.d3kA9f),
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
                                                                            (0, r.jsx)(o.q4e, {
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
                                                                                placeholder: I.intl.string(I.t.xSALIC),
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
                                                                                            (0, m.t$)(d.id, n);
                                                                                    })(e, t),
                                                                                isDisabled: !Z,
                                                                            }),
                                                                            (0, r.jsx)(o.oil, {
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
                                                                                                (0, m.t$)(d.id, n));
                                                                                    })("".concat(l).concat(e), t),
                                                                                placeholder:
                                                                                    null != l
                                                                                        ? void 0
                                                                                        : I.intl.string(I.t.Q6o4pK),
                                                                                maxLength: 150,
                                                                                disabled: !Z || null == F[t],
                                                                                fullWidth: !0,
                                                                                leading: l,
                                                                                trailing: Z
                                                                                    ? {
                                                                                          icon: o.XHJ,
                                                                                          "aria-label": I.intl.string(
                                                                                              I.t.N86XcH,
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
                                                                                                          d.id,
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
                                                                ? (0, r.jsx)(o.Text, {
                                                                      color: "text-danger",
                                                                      variant: "text-sm/normal",
                                                                      children: W.social_links,
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(o.Button, {
                                                                variant: "secondary",
                                                                size: "sm",
                                                                text: I.intl.string(I.t.QvovjY),
                                                                onClick: () => {
                                                                    if (D.socialLinks.length < 9) {
                                                                        let e = [...D.socialLinks];
                                                                        (0, m.t$)(d.id, e.concat("")), H(F.concat(""));
                                                                    }
                                                                },
                                                                disabled: !Z || D.socialLinks.length >= 9,
                                                            }),
                                                        ],
                                                    }),
                                                    D.isPublished &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(o.izJ, {}),
                                                                (0, r.jsx)(o.gNt, {
                                                                    label: I.intl.string(I.t["5yF7e3"]),
                                                                    description: I.intl.string(I.t.eOFvqa),
                                                                    children: (0, r.jsx)(o.Button, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: I.intl.string(I.t["DCHd/P"]),
                                                                        onClick: () => z(!1),
                                                                        disabled: !Z,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    (null == W ? void 0 : W.is_published) != null
                                                        ? (0, r.jsx)(o.Text, {
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
                                                title: I.intl.string(I.t["2kCyn5"]),
                                                children: Y,
                                                buttonLabel: I.intl.string(I.t.tVK6S0),
                                                buttonCallback: () => z(!0),
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
    Z = () => (null == (0, a.e7)([_.Z], () => _.Z.getGuild()) ? null : (0, r.jsx)(w, {}));
