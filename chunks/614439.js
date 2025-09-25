n.d(t, {
    J: () => P,
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
var r = n(951288),
    i = n(647438),
    l = n(345074),
    s = n(442837),
    a = n(755721),
    o = n(481060),
    c = n(484614),
    d = n(852860),
    u = n(688465),
    m = n(970061),
    g = n(456268),
    p = n(134432),
    f = n(813197),
    h = n(208567),
    x = n(496675),
    b = n(768581),
    j = n(63063),
    v = n(434404),
    _ = n(999382),
    O = n(718157),
    y = n(450474),
    C = n(328159),
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
        } = (0, s.cj)([_.Z], () => ({
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
                    (0, g.Vv)({
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
            d = (0, s.e7)([_.Z], () => _.Z.getGuild()),
            [P, w] = i.useState(!1);
        i.useEffect(() => {
            P || null == d || ((0, g.le)(), (0, g.aC)(d.id), (0, g.i3)(d.id), w(!0));
        }, [d, P]);
        let { canManageGuild: R } = (0, s.cj)([x.Z], () => ({ canManageGuild: x.Z.can(E.Plq.MANAGE_GUILD, d) })),
            D = (0, s.e7)([_.Z], () => _.Z.isGuildMetadataLoaded()),
            Z = (0, s.e7)([_.Z], () => (null != d ? _.Z.getMetadata() : null)),
            A = (0, s.e7)([_.Z], () => (null != d && (null == Z ? void 0 : Z.isPublished) ? _.Z.getSlug() : null)),
            [L, k] = i.useState([!0]),
            [G, M] = i.useState(!0),
            [U, B] = i.useState([!1]),
            [F, H] = i.useState([""]);
        i.useEffect(() => {
            if (null !== Z) {
                let e = [],
                    t = [];
                Z.socialLinks.forEach((n, r) => {
                    if ("" !== n) {
                        let i = ((e) => {
                            try {
                                var t, n, r, i;
                                let l = new URL(e).hostname.split(".");
                                if (3 === l.length && "bandcamp" === l[1].toLowerCase())
                                    return N.z.bandcamp.presentation;
                                let s = null != (n = null == (t = l.shift()) ? void 0 : t.toLowerCase()) ? n : "";
                                if (
                                    ("www" === s &&
                                        (s = null != (i = null == (r = l.shift()) ? void 0 : r.toLowerCase()) ? i : ""),
                                    s in N.z)
                                )
                                    return N.z[s].presentation;
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
        }, [Z]);
        let z = (0, s.e7)([_.Z], () => (null != d ? _.Z.getErrors() : null));
        if (null == d || null == Z) return null;
        let V = (e) => {
                v.Z.updateGuild({ discoverySplash: e });
            },
            W = (e) => {
                let t = () => {
                    (0, g.W1)(d.id, e),
                        e
                            ? (0, g.Vv)({
                                  guildId: d.id,
                                  primaryCategoryId: Z.primaryCategoryId,
                                  keywords: Z.keywords,
                                  emojiDiscoverabilityEnabled: Z.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: Z.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: Z.partnerApplicationTimestamp,
                                  isPublished: !0,
                                  reasonsToJoin: Z.reasonsToJoin,
                                  socialLinks: Z.socialLinks,
                                  about: Z.about,
                              })
                            : (0, g.Vv)({
                                  guildId: d.id,
                                  primaryCategoryId: Z.primaryCategoryId,
                                  keywords: Z.keywords,
                                  emojiDiscoverabilityEnabled: Z.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: Z.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: Z.partnerApplicationTimestamp,
                                  isPublished: !1,
                                  reasonsToJoin: Z.reasonsToJoin,
                                  socialLinks: Z.socialLinks,
                                  about: Z.about,
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
                            completed: null !== Z.about && Z.about.length >= 300 && Z.about.length <= 2400,
                        },
                        {
                            description: I.intl.string(I.t.qpx5MD),
                            completed:
                                null !== Z.reasonsToJoin &&
                                Z.reasonsToJoin.every(
                                    (e) =>
                                        ((e) => {
                                            let { reason: t = "", emoji_name: n = "" } = e;
                                            return (null === t || "" === t) && null === n;
                                        })(e) || K(e),
                                ) &&
                                Z.reasonsToJoin.filter(K).length >= 2,
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
                                    (0, r.jsxs)(o.hjN, {
                                        className: S.mainContent,
                                        title: (0, r.jsxs)("div", {
                                            children: [
                                                I.intl.string(I.t.kGlQGB),
                                                " ",
                                                (0, r.jsx)(u.Z, { className: S.betaTag }),
                                            ],
                                        }),
                                        tag: o.RB0.H1,
                                        children: [
                                            (0, r.jsxs)(o.R94, {
                                                className: S.tabMainDescription,
                                                type: o.geA.DESCRIPTION,
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
                                            (() => {
                                                if (!Z.isPublished || null == A) return;
                                                let e = T + A;
                                                return (0, r.jsxs)(o.hjN, {
                                                    className: S.noDividerFormSection,
                                                    children: [
                                                        (0, r.jsx)(o.vwX, {
                                                            className: S.formTitle,
                                                            children: I.intl.string(I.t.safBZ2),
                                                        }),
                                                        (0, r.jsx)(c.Z, { value: e }),
                                                        (0, r.jsx)("div", {
                                                            "data-button-hoisted-classname-wrapper": !0,
                                                            className: S.viewPageButton,
                                                            children: (0, r.jsx)(o.zxk, {
                                                                variant: "primary",
                                                                size: "sm",
                                                                text: I.intl.string(I.t.NI8iGB),
                                                                onClick: () => window.open(e),
                                                            }),
                                                        }),
                                                    ],
                                                });
                                            })(),
                                            (0, r.jsx)(o.$i$, { className: S.divider }),
                                            (() => {
                                                if (null != d)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(o.hjN, {
                                                                children: [
                                                                    (0, r.jsx)(o.vwX, {
                                                                        className: S.formTitle,
                                                                        children: I.intl.string(I.t.GjPpSk),
                                                                    }),
                                                                    (0, r.jsx)(o.R94, {
                                                                        type: o.geA.DESCRIPTION,
                                                                        className: S.description,
                                                                        children: I.intl.string(I.t.MVXonJ),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)(O.E, {
                                                                guildId: d.id,
                                                                guildMetadata: Z,
                                                                isDisabled: !R,
                                                            }),
                                                            (0, r.jsxs)(o.hjN, {
                                                                className: S.noDividerFormSection,
                                                                children: [
                                                                    (0, r.jsx)(o.vwX, {
                                                                        className: S.formTitle,
                                                                        children: I.intl.string(I.t.oOPlPD),
                                                                    }),
                                                                    (0, r.jsx)(y.Z, {
                                                                        guild: d,
                                                                        guildMetadata: Z,
                                                                        disabled: !R,
                                                                    }),
                                                                ],
                                                            }),
                                                            (null == z ? void 0 : z.category) != null
                                                                ? (0, r.jsx)(o.Text, {
                                                                      color: "text-danger",
                                                                      className: S.error,
                                                                      variant: "text-sm/normal",
                                                                      children: z.category,
                                                                  })
                                                                : null,
                                                        ],
                                                    });
                                            })(),
                                            (0, r.jsx)(o.$i$, { className: S.divider }),
                                            (() => {
                                                if (null != d)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(o.hjN, {
                                                                className: S.twoColumnFormSection,
                                                                children: [
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(o.vwX, {
                                                                                className: S.formTitle,
                                                                                children: I.intl.string(I.t["8bT/Cg"]),
                                                                            }),
                                                                            (0, r.jsx)(o.R94, {
                                                                                type: o.geA.DESCRIPTION,
                                                                                className: S.formDescription,
                                                                                children: I.intl.string(I.t.WCWT7O),
                                                                            }),
                                                                            (0, r.jsxs)(a.zx, {
                                                                                size: a.zx.Sizes.SMALL,
                                                                                color: a.zx.Colors.PRIMARY,
                                                                                children: [
                                                                                    I.intl.string(I.t.yG2pUl),
                                                                                    (0, r.jsx)(f.ZP, {
                                                                                        disabled: !R,
                                                                                        onChange: V,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    (0, r.jsx)(h.Z, {
                                                                        image: d.discoverySplash,
                                                                        makeURL: (e) =>
                                                                            b.ZP.getGuildDiscoverySplashURL({
                                                                                id: d.id,
                                                                                splash: e,
                                                                                size: 512 * (0, p.x_)(),
                                                                            }),
                                                                        disabled: !R,
                                                                        onChange: V,
                                                                        hint: I.intl.string(I.t.uPvxqK),
                                                                        imageClassName: S.imageUploaderInnerSquare,
                                                                        hideSize: !0,
                                                                    }),
                                                                ],
                                                            }),
                                                            (null == z ? void 0 : z.discovery_splash) != null
                                                                ? (0, r.jsx)(o.Text, {
                                                                      color: "text-danger",
                                                                      variant: "text-sm/normal",
                                                                      children: z.discovery_splash,
                                                                  })
                                                                : null,
                                                        ],
                                                    });
                                            })(),
                                            (0, r.jsx)(o.$i$, { className: S.divider }),
                                            (0, r.jsxs)(o.hjN, {
                                                children: [
                                                    (0, r.jsx)(o.vwX, {
                                                        className: S.formTitle,
                                                        children: I.intl.string(I.t["RSfm+v"]),
                                                    }),
                                                    (0, r.jsx)(o.R94, {
                                                        className: S.description,
                                                        type: o.geA.DESCRIPTION,
                                                        children: I.intl.string(I.t.IBi6h4),
                                                    }),
                                                    (0, r.jsx)(o.Kx8, {
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
                                                        disabled: !R,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(o.$i$, { className: S.divider }),
                                            (() => {
                                                if (null == Z) return null;
                                                let e =
                                                    0 === Z.reasonsToJoin.length
                                                        ? [, , , ,].fill({
                                                              reason: "",
                                                              emoji_name: null,
                                                          })
                                                        : Z.reasonsToJoin;
                                                return (0, r.jsxs)(o.hjN, {
                                                    children: [
                                                        (0, r.jsx)(o.vwX, {
                                                            className: S.formTitle,
                                                            children: I.intl.string(I.t.vUmXsb),
                                                        }),
                                                        (0, r.jsx)(o.R94, {
                                                            type: o.geA.DESCRIPTION,
                                                            className: S.description,
                                                            children: I.intl.string(I.t.esnBnZ),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: S.reasonToJoin,
                                                            children: (0, r.jsx)(C.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: d.id,
                                                                reasons: e,
                                                            }),
                                                        }),
                                                        (null == z ? void 0 : z.reasons_to_join) != null
                                                            ? (0, r.jsx)(o.Text, {
                                                                  color: "text-danger",
                                                                  variant: "text-sm/normal",
                                                                  children: z.reasons_to_join,
                                                              })
                                                            : null,
                                                    ],
                                                });
                                            })(),
                                            (0, r.jsx)(o.$i$, { className: S.divider }),
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsxs)(o.hjN, {
                                                        children: [
                                                            (0, r.jsx)(o.vwX, {
                                                                className: S.formTitle,
                                                                children: I.intl.string(I.t["lu+BmJ"]),
                                                            }),
                                                            (0, r.jsx)(o.R94, {
                                                                className: S.description,
                                                                type: o.geA.DESCRIPTION,
                                                                children: I.intl.string(I.t.ozSi8v),
                                                            }),
                                                            (0, r.jsx)(
                                                                o.Kx8,
                                                                {
                                                                    showCharacterCount: !0,
                                                                    rows: 10,
                                                                    value: Z.about,
                                                                    placeholder: I.intl.string(I.t.TduTbm),
                                                                    onChange: (e) => {
                                                                        (0, g.mA)(d.id, e);
                                                                    },
                                                                    minLength: 300,
                                                                    maxLength: 2400,
                                                                    disabled: !R,
                                                                    defaultDirty:
                                                                        (null == (e = Z.about) ? void 0 : e.length) > 0,
                                                                },
                                                                "text-area-".concat(D),
                                                            ),
                                                        ],
                                                    }),
                                                    (null == z ? void 0 : z.about) != null
                                                        ? (0, r.jsx)(o.Text, {
                                                              color: "text-danger",
                                                              variant: "text-sm/normal",
                                                              children: z.about,
                                                          })
                                                        : null,
                                                ],
                                            }),
                                            (0, r.jsx)(o.$i$, { className: S.divider }),
                                            (0, r.jsxs)(o.hjN, {
                                                children: [
                                                    (0, r.jsx)(o.vwX, {
                                                        className: S.formTitle,
                                                        children: I.intl.string(I.t.V5mNyc),
                                                    }),
                                                    (0, r.jsx)(o.R94, {
                                                        className: S.description,
                                                        type: o.geA.DESCRIPTION,
                                                        children: I.intl.string(I.t.d3kA9f),
                                                    }),
                                                    Z.socialLinks.map((e, t) => {
                                                        let n = F[t],
                                                            i = Object.values(N.z).find((e) => e.presentation === n),
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
                                                                        className: Z.isPublished
                                                                            ? S.socialLinksDropdownMax
                                                                            : S.socialLinksDropdownMin,
                                                                        options: ((e) => {
                                                                            let t = Object.entries(N.z)
                                                                                .filter(
                                                                                    (e) =>
                                                                                        !F.includes(e[1].presentation),
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
                                                                                let n = [...Z.socialLinks],
                                                                                    r = [...F],
                                                                                    i = [...L];
                                                                                (r[t] = e),
                                                                                    (n[t] = N.z[e].baseUrl),
                                                                                    (i[t] = !0),
                                                                                    k(i),
                                                                                    H(r),
                                                                                    M(i.every((e) => !0 === e)),
                                                                                    (0, g.t$)(d.id, n);
                                                                            })(e, t),
                                                                        isDisabled: !R,
                                                                    }),
                                                                    (0, r.jsx)(o.oil, {
                                                                        value: e.replace(null != l ? l : "", ""),
                                                                        onChange: (e) =>
                                                                            ((e, t) => {
                                                                                let n = [...Z.socialLinks],
                                                                                    r = n[t],
                                                                                    i = e;
                                                                                0 === r.length &&
                                                                                    i.length > 1 &&
                                                                                    !1 === RegExp("^https?:").test(i) &&
                                                                                    (i = "https://" + i),
                                                                                    /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(
                                                                                        i,
                                                                                    ) ||
                                                                                        ((n[t] = i),
                                                                                        (0, g.t$)(d.id, n));
                                                                            })("".concat(l).concat(e), t),
                                                                        placeholder:
                                                                            null != l
                                                                                ? void 0
                                                                                : I.intl.string(I.t.Q6o4pK),
                                                                        maxLength: 150,
                                                                        disabled: !R || null == F[t],
                                                                        fullWidth: !0,
                                                                        leading: l,
                                                                        trailing: R
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
                                                                                          let i = [...Z.socialLinks];
                                                                                          i.splice(e, 1),
                                                                                              (0, g.t$)(d.id, i);
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
                                                        ? (0, r.jsx)(o.Text, {
                                                              color: "text-danger",
                                                              variant: "text-sm/normal",
                                                              children: z.social_links,
                                                          })
                                                        : null,
                                                    (0, r.jsx)(o.zxk, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: I.intl.string(I.t.QvovjY),
                                                        onClick: () => {
                                                            if (Z.socialLinks.length < 9) {
                                                                let e = [...Z.socialLinks];
                                                                (0, g.t$)(d.id, e.concat("")), H(F.concat(""));
                                                            }
                                                        },
                                                        disabled: !R || Z.socialLinks.length >= 9,
                                                    }),
                                                ],
                                            }),
                                            Z.isPublished &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(o.$i$, { className: S.divider }),
                                                        (0, r.jsxs)(o.hjN, {
                                                            children: [
                                                                (0, r.jsx)(o.vwX, {
                                                                    className: S.formTitle,
                                                                    children: I.intl.string(I.t["5yF7e3"]),
                                                                }),
                                                                (0, r.jsx)(o.R94, {
                                                                    className: S.description,
                                                                    type: o.geA.DESCRIPTION,
                                                                    children: I.intl.string(I.t.eOFvqa),
                                                                }),
                                                                (0, r.jsx)(o.zxk, {
                                                                    variant: "critical-primary",
                                                                    size: "sm",
                                                                    text: I.intl.string(I.t["DCHd/P"]),
                                                                    onClick: () => W(!1),
                                                                    disabled: !R,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            (null == z ? void 0 : z.is_published) != null
                                                ? (0, r.jsx)(o.Text, {
                                                      color: "text-danger",
                                                      variant: "text-sm/normal",
                                                      children: z.is_published,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    !Z.isPublished &&
                                        (0, r.jsx)("div", {
                                            className: S.checklist,
                                            children: (0, r.jsx)(m.Z, {
                                                title: I.intl.string(I.t["2kCyn5"]),
                                                children: Y,
                                                buttonLabel: I.intl.string(I.t.tVK6S0),
                                                buttonCallback: () => W(!0),
                                                disabled: !R || !G,
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
    R = () => (null == (0, s.e7)([_.Z], () => _.Z.getGuild()) ? null : (0, r.jsx)(w, {}));
