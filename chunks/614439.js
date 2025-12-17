n.d(t, {
    J: () => w,
    Z: () => R,
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
    o = n(199849),
    c = n(755721),
    d = n(481060),
    u = n(484614),
    g = n(688465),
    f = n(970061),
    m = n(456268),
    b = n(134432),
    p = n(813197),
    h = n(208567),
    x = n(496675),
    j = n(768581),
    v = n(63063),
    O = n(434404),
    C = n(999382),
    y = n(718157),
    N = n(450474),
    E = n(328159),
    I = n(873029),
    S = n(981631),
    _ = n(388032),
    T = n(141905);
let P = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
    w = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n,
        } = (0, a.cj)([C.Z], () => ({
            submitting: C.Z.isSubmitting(),
            guild: C.Z.getGuild(),
            guildMetadata: C.Z.getMetadata(),
        }));
        return (0, r.jsx)(s.Z, {
            submitting: n,
            onReset: () => {
                null != e && O.Z.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (O.Z.saveGuild(e.id, {
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
    Z = () => {
        var e;
        let t = i.useRef(null),
            s = (0, a.e7)([C.Z], () => C.Z.getGuild()),
            [w, Z] = i.useState(!1);
        i.useEffect(() => {
            w || null == s || ((0, m.le)(), (0, m.aC)(s.id), (0, m.i3)(s.id), Z(!0));
        }, [s, w]);
        let { canManageGuild: R } = (0, a.cj)([x.Z], () => ({ canManageGuild: x.Z.can(S.Plq.MANAGE_GUILD, s) })),
            D = (0, a.e7)([C.Z], () => C.Z.isGuildMetadataLoaded()),
            A = (0, a.e7)([C.Z], () => (null != s ? C.Z.getMetadata() : null)),
            L = (0, a.e7)([C.Z], () => (null != s && (null == A ? void 0 : A.isPublished) ? C.Z.getSlug() : null)),
            [k, G] = i.useState([!0]),
            [M, U] = i.useState(!0),
            [B, F] = i.useState([!1]),
            [H, W] = i.useState([""]);
        i.useEffect(() => {
            if (null !== A) {
                let e = [],
                    t = [];
                A.socialLinks.forEach((n, r) => {
                    if ("" !== n) {
                        let i = ((e) => {
                            try {
                                var t, n, r, i;
                                let l = new URL(e).hostname.split(".");
                                if (3 === l.length && "bandcamp" === l[1].toLowerCase())
                                    return I.z.bandcamp.presentation;
                                let a = null != (n = null == (t = l.shift()) ? void 0 : t.toLowerCase()) ? n : "";
                                if (
                                    ("www" === a &&
                                        (a = null != (i = null == (r = l.shift()) ? void 0 : r.toLowerCase()) ? i : ""),
                                    a in I.z)
                                )
                                    return I.z[a].presentation;
                                return null;
                            } catch (e) {
                                return null;
                            }
                        })(n);
                        null !== i ? ((t[r] = i), (e[r] = !0)) : (e[r] = !1);
                    } else e[r] = !0;
                }),
                    W(t),
                    G(e),
                    U(e.every((e) => !0 === e));
            }
        }, [A]);
        let z = (0, a.e7)([C.Z], () => (null != s ? C.Z.getErrors() : null));
        if (null == s || null == A) return null;
        let V = (e) => {
                O.Z.updateGuild({ discoverySplash: e });
            },
            K = (e) => {
                let t = () => {
                    (0, m.W1)(s.id, e),
                        e
                            ? (0, m.Vv)({
                                  guildId: s.id,
                                  primaryCategoryId: A.primaryCategoryId,
                                  keywords: A.keywords,
                                  emojiDiscoverabilityEnabled: A.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: A.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: A.partnerApplicationTimestamp,
                                  isPublished: !0,
                                  reasonsToJoin: A.reasonsToJoin,
                                  socialLinks: A.socialLinks,
                                  about: A.about,
                              })
                            : (0, m.Vv)({
                                  guildId: s.id,
                                  primaryCategoryId: A.primaryCategoryId,
                                  keywords: A.keywords,
                                  emojiDiscoverabilityEnabled: A.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: A.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: A.partnerApplicationTimestamp,
                                  isPublished: !1,
                                  reasonsToJoin: A.reasonsToJoin,
                                  socialLinks: A.socialLinks,
                                  about: A.about,
                              }),
                        O.Z.saveGuild(s.id, {
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
            Y = (e) => {
                let { reason: t = "", emoji_name: n = "" } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            q = [
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
                            completed: null !== A.about && A.about.length >= 300 && A.about.length <= 2400,
                        },
                        {
                            description: _.intl.string(_.t.qpx5MN),
                            completed:
                                null !== A.reasonsToJoin &&
                                A.reasonsToJoin.every(
                                    (e) =>
                                        ((e) => {
                                            let { reason: t = "", emoji_name: n = "" } = e;
                                            return (null === t || "" === t) && null === n;
                                        })(e) || Y(e),
                                ) &&
                                A.reasonsToJoin.filter(Y).length >= 2,
                        },
                    ],
                },
            ],
            X = (e, t) => {
                let n = [...B];
                (n[e] = t), F(n);
            };
        return (0, r.jsx)("div", {
            className: T.settingsColumn,
            children: (0, r.jsx)("div", {
                className: T.settingsContainer,
                children: (0, r.jsx)(d.w0Z, {
                    className: T.settingsScroller,
                    children: (0, r.jsx)("main", {
                        ref: t,
                        className: T.settingsContent,
                        children: (0, r.jsx)(d.JcV, {
                            containerRef: t,
                            children: (0, r.jsxs)("div", {
                                className: T.container,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: T.mainContent,
                                        children: [
                                            (0, r.jsxs)(d.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: [
                                                    _.intl.string(_.t.kGlQGF),
                                                    (0, r.jsx)(g.Z, { className: T.betaTag }),
                                                ],
                                            }),
                                            (0, r.jsxs)(d.Text, {
                                                variant: "text-sm/normal",
                                                className: T.tabMainDescription,
                                                children: [
                                                    _.intl.format(_.t["+ScrMf"], {
                                                        discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT,
                                                    }),
                                                    " ",
                                                    _.intl.format(_.t.T6WtKw, {
                                                        learnMoreURL: v.Z.getArticleURL(S.BhN.SERVER_WEB_PAGES),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(d.Kqy, {
                                                gap: 40,
                                                children: [
                                                    (() => {
                                                        if (!A.isPublished || null == L) return;
                                                        let e = P + L;
                                                        return (0, r.jsxs)(d.Kqy, {
                                                            gap: 16,
                                                            children: [
                                                                (0, r.jsx)(d.gNt, {
                                                                    label: _.intl.string(_.t.safBZ9),
                                                                    children: (0, r.jsx)(u.Z, { value: e }),
                                                                }),
                                                                (0, r.jsx)(d.Button, {
                                                                    variant: "primary",
                                                                    size: "sm",
                                                                    text: _.intl.string(_.t.NI8iGI),
                                                                    onClick: () => window.open(e),
                                                                }),
                                                            ],
                                                        });
                                                    })(),
                                                    (0, r.jsx)(d.izJ, {}),
                                                    (() => {
                                                        if (null != s)
                                                            return (0, r.jsxs)(r.Fragment, {
                                                                children: [
                                                                    (0, r.jsx)(y.E, {
                                                                        label: _.intl.string(_.t.GjPpSu),
                                                                        description: _.intl.string(_.t.MVXonM),
                                                                        guildId: s.id,
                                                                        guildMetadata: A,
                                                                        isDisabled: !R,
                                                                    }),
                                                                    (0, r.jsx)(N.Z, {
                                                                        label: _.intl.string(_.t.oOPlPA),
                                                                        guild: s,
                                                                        guildMetadata: A,
                                                                        disabled: !R,
                                                                    }),
                                                                    (null == z ? void 0 : z.category) != null
                                                                        ? (0, r.jsx)(d.Text, {
                                                                              color: "text-feedback-critical",
                                                                              className: T.error,
                                                                              variant: "text-sm/normal",
                                                                              children: z.category,
                                                                          })
                                                                        : null,
                                                                ],
                                                            });
                                                    })(),
                                                    (0, r.jsx)(d.izJ, {}),
                                                    (() => {
                                                        if (null != s)
                                                            return (0, r.jsx)(d.gNt, {
                                                                label: _.intl.string(_.t["8bT/Cu"]),
                                                                description: _.intl.string(_.t.WCWT7A),
                                                                errorMessage:
                                                                    (null == z ? void 0 : z.discovery_splash) != null
                                                                        ? z.discovery_splash
                                                                        : void 0,
                                                                layout: "horizontal",
                                                                children: (0, r.jsxs)(d.Kqy, {
                                                                    gap: 16,
                                                                    children: [
                                                                        (0, r.jsx)(h.Z, {
                                                                            image: s.discoverySplash,
                                                                            makeURL: (e) =>
                                                                                j.ZP.getGuildDiscoverySplashURL({
                                                                                    id: s.id,
                                                                                    splash: e,
                                                                                    size: 512 * (0, b.x_)(),
                                                                                }),
                                                                            disabled: !R,
                                                                            onChange: V,
                                                                            hint: _.intl.string(_.t.uPvxqJ),
                                                                            imageClassName: T.imageUploaderInnerSquare,
                                                                            hideSize: !0,
                                                                        }),
                                                                        (0, r.jsxs)(c.zx, {
                                                                            size: c.zx.Sizes.SMALL,
                                                                            color: c.zx.Colors.PRIMARY,
                                                                            children: [
                                                                                _.intl.string(_.t.yG2pUi),
                                                                                (0, r.jsx)(p.ZP, {
                                                                                    disabled: !R,
                                                                                    onChange: V,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            });
                                                    })(),
                                                    (0, r.jsx)(d.izJ, {}),
                                                    (0, r.jsx)(d.Kx8, {
                                                        label: _.intl.string(_.t["RSfm+i"]),
                                                        description: _.intl.string(_.t.IBi6hz),
                                                        value: null !== s.description ? s.description : "",
                                                        placeholder: _.intl.string(_.t.rFa9Ui),
                                                        onChange: (e) => {
                                                            var t;
                                                            O.Z.updateGuild({
                                                                description:
                                                                    null !=
                                                                    (t = null == e ? void 0 : e.replaceAll("\n", ""))
                                                                        ? t
                                                                        : "",
                                                            });
                                                        },
                                                        maxLength: l.Us,
                                                        disabled: !R,
                                                    }),
                                                    (0, r.jsx)(d.izJ, {}),
                                                    (() => {
                                                        if (null == A) return null;
                                                        let e =
                                                            0 === A.reasonsToJoin.length
                                                                ? [, , , ,].fill({
                                                                      reason: "",
                                                                      emoji_name: null,
                                                                  })
                                                                : A.reasonsToJoin;
                                                        return (0, r.jsx)(d.gNt, {
                                                            label: _.intl.string(_.t.vUmXsR),
                                                            description: _.intl.string(_.t.esnBnW),
                                                            errorMessage:
                                                                (null == z ? void 0 : z.reasons_to_join) != null
                                                                    ? z.reasons_to_join
                                                                    : void 0,
                                                            children: (0, r.jsx)(E.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: s.id,
                                                                reasons: e,
                                                            }),
                                                        });
                                                    })(),
                                                    (0, r.jsx)(d.izJ, {}),
                                                    (0, r.jsx)(
                                                        d.Kx8,
                                                        {
                                                            label: _.intl.string(_.t["lu+BmJ"]),
                                                            description: _.intl.string(_.t.ozSi8g),
                                                            error:
                                                                (null == z ? void 0 : z.about) != null
                                                                    ? z.about
                                                                    : void 0,
                                                            showCharacterCount: !0,
                                                            rows: 10,
                                                            value: A.about,
                                                            placeholder: _.intl.string(_.t.TduTbs),
                                                            onChange: (e) => {
                                                                (0, m.mA)(s.id, e);
                                                            },
                                                            minLength: 300,
                                                            maxLength: 2400,
                                                            disabled: !R,
                                                            defaultDirty:
                                                                (null == (e = A.about) ? void 0 : e.length) > 0,
                                                        },
                                                        "text-area-".concat(D),
                                                    ),
                                                    (0, r.jsx)(d.izJ, {}),
                                                    (0, r.jsxs)(d.gNt, {
                                                        label: _.intl.string(_.t.V5mNyb),
                                                        description: _.intl.string(_.t.d3kA9a),
                                                        errorMessage:
                                                            (null == z ? void 0 : z.social_links) != null
                                                                ? z.social_links
                                                                : void 0,
                                                        children: [
                                                            A.socialLinks.map((e, t) => {
                                                                let n = H[t],
                                                                    i = Object.values(I.z).find(
                                                                        (e) => e.presentation === n,
                                                                    ),
                                                                    l = null != i ? "".concat(i.baseUrl) : void 0;
                                                                return (0, r.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className: T.socialLinksContainer,
                                                                        onMouseOver: () => X(t, !0),
                                                                        onFocus: () => X(t, !0),
                                                                        onMouseOut: () => X(t, !1),
                                                                        onBlur: () => X(t, !1),
                                                                        children: [
                                                                            (0, r.jsx)(o.y6, {
                                                                                className: A.isPublished
                                                                                    ? T.socialLinksDropdownMax
                                                                                    : T.socialLinksDropdownMin,
                                                                                options: ((e) => {
                                                                                    let t = Object.entries(I.z)
                                                                                        .filter(
                                                                                            (e) =>
                                                                                                !H.includes(
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
                                                                                })(H[t]),
                                                                                placeholder: _.intl.string(_.t.xSALIK),
                                                                                value: H[t],
                                                                                onChange: (e) =>
                                                                                    ((e, t) => {
                                                                                        let n = [...A.socialLinks],
                                                                                            r = [...H],
                                                                                            i = [...k];
                                                                                        (r[t] = e),
                                                                                            (n[t] = I.z[e].baseUrl),
                                                                                            (i[t] = !0),
                                                                                            G(i),
                                                                                            W(r),
                                                                                            U(i.every((e) => !0 === e)),
                                                                                            (0, m.t$)(s.id, n);
                                                                                    })(e, t),
                                                                                isDisabled: !R,
                                                                            }),
                                                                            (0, r.jsx)(d.oil, {
                                                                                value: e.replace(
                                                                                    null != l ? l : "",
                                                                                    "",
                                                                                ),
                                                                                onChange: (e) =>
                                                                                    ((e, t) => {
                                                                                        let n = [...A.socialLinks],
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
                                                                                        : _.intl.string(_.t.Q6o4pJ),
                                                                                maxLength: 150,
                                                                                disabled: !R || null == H[t],
                                                                                fullWidth: !0,
                                                                                leading: l,
                                                                                trailing: R
                                                                                    ? {
                                                                                          icon: d.XHJ,
                                                                                          "aria-label": _.intl.string(
                                                                                              _.t.N86XcP,
                                                                                          ),
                                                                                          onClick: () =>
                                                                                              ((e) => {
                                                                                                  let t = [...B];
                                                                                                  t.splice(e, 1), F(t);
                                                                                                  let n = [...k];
                                                                                                  n.splice(e, 1), G(n);
                                                                                                  let r = [...H];
                                                                                                  r.splice(e, 1), W(r);
                                                                                                  let i = [
                                                                                                      ...A.socialLinks,
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
                                                            (null == z ? void 0 : z.social_links) != null
                                                                ? (0, r.jsx)(d.Text, {
                                                                      color: "text-feedback-critical",
                                                                      variant: "text-sm/normal",
                                                                      children: z.social_links,
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(d.Button, {
                                                                variant: "secondary",
                                                                size: "sm",
                                                                text: _.intl.string(_.t.Qvovjc),
                                                                onClick: () => {
                                                                    if (A.socialLinks.length < 9) {
                                                                        let e = [...A.socialLinks];
                                                                        (0, m.t$)(s.id, e.concat("")), W(H.concat(""));
                                                                    }
                                                                },
                                                                disabled: !R || A.socialLinks.length >= 9,
                                                            }),
                                                        ],
                                                    }),
                                                    A.isPublished &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(d.izJ, {}),
                                                                (0, r.jsx)(d.gNt, {
                                                                    label: _.intl.string(_.t["5yF7e1"]),
                                                                    description: _.intl.string(_.t.eOFvqT),
                                                                    children: (0, r.jsx)(d.Button, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: _.intl.string(_.t["DCHd/G"]),
                                                                        onClick: () => K(!1),
                                                                        disabled: !R,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    (null == z ? void 0 : z.is_published) != null
                                                        ? (0, r.jsx)(d.Text, {
                                                              color: "text-feedback-critical",
                                                              variant: "text-sm/normal",
                                                              children: z.is_published,
                                                          })
                                                        : null,
                                                ],
                                            }),
                                        ],
                                    }),
                                    !A.isPublished &&
                                        (0, r.jsx)("div", {
                                            className: T.checklist,
                                            children: (0, r.jsx)(f.Z, {
                                                title: _.intl.string(_.t["2kCyn/"]),
                                                children: q,
                                                buttonLabel: _.intl.string(_.t.tVK6S9),
                                                buttonCallback: () => K(!0),
                                                disabled: !R || !M,
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
    R = () => (null == (0, a.e7)([C.Z], () => C.Z.getGuild()) ? null : (0, r.jsx)(Z, {}));
