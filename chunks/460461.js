n.d(t, {
    J: () => T,
    Z: () => w,
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
    l = n(442837),
    a = n(755721),
    s = n(481060),
    o = n(484614),
    c = n(852860),
    d = n(688465),
    u = n(970061),
    m = n(456268),
    g = n(134432),
    p = n(813197),
    h = n(208567),
    f = n(496675),
    b = n(768581),
    x = n(63063),
    j = n(434404),
    v = n(999382),
    _ = n(718157),
    O = n(450474),
    y = n(190287),
    C = n(465520),
    N = n(981631),
    E = n(388032),
    I = n(539981);
let S = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
    T = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n,
        } = (0, l.cj)([v.Z], () => ({
            submitting: v.Z.isSubmitting(),
            guild: v.Z.getGuild(),
            guildMetadata: v.Z.getMetadata(),
        }));
        return (0, r.jsx)(c.Z, {
            submitting: n,
            onReset: () => {
                null != e && j.Z.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (j.Z.saveGuild(e.id, {
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
    P = () => {
        var e;
        let t = i.useRef(null),
            c = (0, l.e7)([v.Z], () => v.Z.getGuild()),
            [T, P] = i.useState(!1);
        i.useEffect(() => {
            T || null == c || ((0, m.le)(), (0, m.aC)(c.id), (0, m.i3)(c.id), P(!0));
        }, [c, T]);
        let { canManageGuild: w } = (0, l.cj)([f.Z], () => ({ canManageGuild: f.Z.can(N.Plq.MANAGE_GUILD, c) })),
            R = (0, l.e7)([v.Z], () => v.Z.isGuildMetadataLoaded()),
            Z = (0, l.e7)([v.Z], () => (null != c ? v.Z.getMetadata() : null)),
            D = (0, l.e7)([v.Z], () => (null != c && (null == Z ? void 0 : Z.isPublished) ? v.Z.getSlug() : null)),
            [A, L] = i.useState([!0]),
            [k, M] = i.useState(!0),
            [G, U] = i.useState([!1]),
            [B, F] = i.useState([""]);
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
                                    return C.z.bandcamp.presentation;
                                let a = null != (n = null == (t = l.shift()) ? void 0 : t.toLowerCase()) ? n : "";
                                if (
                                    ("www" === a &&
                                        (a = null != (i = null == (r = l.shift()) ? void 0 : r.toLowerCase()) ? i : ""),
                                    a in C.z)
                                )
                                    return C.z[a].presentation;
                                return null;
                            } catch (e) {
                                return null;
                            }
                        })(n);
                        null !== i ? ((t[r] = i), (e[r] = !0)) : (e[r] = !1);
                    } else e[r] = !0;
                }),
                    F(t),
                    L(e),
                    M(e.every((e) => !0 === e));
            }
        }, [Z]);
        let H = (0, l.e7)([v.Z], () => (null != c ? v.Z.getErrors() : null));
        if (null == c || null == Z) return null;
        let z = (e) => {
                j.Z.updateGuild({ discoverySplash: e });
            },
            W = (e) => {
                let t = () => {
                    (0, m.W1)(c.id, e),
                        e
                            ? (0, m.Vv)({
                                  guildId: c.id,
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
                            : (0, m.Vv)({
                                  guildId: c.id,
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
                        j.Z.saveGuild(c.id, {
                            discoverySplash: c.discoverySplash,
                            description: c.description,
                        });
                };
                if (e) return void t();
                null != c.vanityURLCode
                    ? n
                          .e("66731")
                          .then(n.bind(n, 241485))
                          .then((e) => {
                              e.default.open(t);
                          })
                    : t();
            },
            V = (e) => {
                let { reason: t = "", emoji_name: n = "" } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            Y = [
                {
                    title: E.intl.string(E.t["/SWsHx"]),
                    items: [
                        {
                            description: E.intl.string(E.t.DU8jFx),
                            completed: null !== c.discoverySplash && "" !== c.discoverySplash,
                        },
                        {
                            description: E.intl.string(E.t.SW5OHx),
                            completed: null !== c.description && "" !== c.description,
                        },
                        {
                            description: E.intl.string(E.t.m3b3WF),
                            completed: null !== Z.about && Z.about.length >= 300 && Z.about.length <= 2400,
                        },
                        {
                            description: E.intl.string(E.t.qpx5MD),
                            completed:
                                null !== Z.reasonsToJoin &&
                                Z.reasonsToJoin.every(
                                    (e) =>
                                        ((e) => {
                                            let { reason: t = "", emoji_name: n = "" } = e;
                                            return (null === t || "" === t) && null === n;
                                        })(e) || V(e),
                                ) &&
                                Z.reasonsToJoin.filter(V).length >= 2,
                        },
                    ],
                },
            ],
            K = (e, t) => {
                let n = [...G];
                (n[e] = t), U(n);
            };
        return (0, r.jsx)("div", {
            className: I.settingsColumn,
            children: (0, r.jsx)("div", {
                className: I.settingsContainer,
                children: (0, r.jsx)(s.w0Z, {
                    className: I.settingsScroller,
                    children: (0, r.jsx)("main", {
                        ref: t,
                        className: I.settingsContent,
                        children: (0, r.jsx)(s.JcV, {
                            containerRef: t,
                            children: (0, r.jsxs)("div", {
                                className: I.container,
                                children: [
                                    (0, r.jsxs)(s.hjN, {
                                        className: I.mainContent,
                                        title: (0, r.jsxs)("div", {
                                            children: [
                                                E.intl.string(E.t.kGlQGB),
                                                " ",
                                                (0, r.jsx)(d.Z, { className: I.betaTag }),
                                            ],
                                        }),
                                        tag: s.RB0.H1,
                                        children: [
                                            (0, r.jsxs)(s.R94, {
                                                className: I.tabMainDescription,
                                                type: s.geA.DESCRIPTION,
                                                children: [
                                                    E.intl.format(E.t["+ScrMT"], {
                                                        discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT,
                                                    }),
                                                    " ",
                                                    E.intl.format(E.t.T6WtKy, {
                                                        learnMoreURL: x.Z.getArticleURL(N.BhN.SERVER_WEB_PAGES),
                                                    }),
                                                ],
                                            }),
                                            (() => {
                                                if (!Z.isPublished || null == D) return;
                                                let e = S + D;
                                                return (0, r.jsxs)(s.hjN, {
                                                    className: I.noDividerFormSection,
                                                    children: [
                                                        (0, r.jsx)(s.vwX, {
                                                            className: I.formTitle,
                                                            children: E.intl.string(E.t.safBZ2),
                                                        }),
                                                        (0, r.jsx)(o.Z, { value: e }),
                                                        (0, r.jsx)("div", {
                                                            "data-button-hoisted-classname-wrapper": !0,
                                                            className: I.viewPageButton,
                                                            children: (0, r.jsx)(s.zxk, {
                                                                variant: "primary",
                                                                size: "sm",
                                                                text: E.intl.string(E.t.NI8iGB),
                                                                onClick: () => window.open(e),
                                                            }),
                                                        }),
                                                    ],
                                                });
                                            })(),
                                            (0, r.jsx)(s.$i$, { className: I.divider }),
                                            (() => {
                                                if (null != c)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(s.hjN, {
                                                                children: [
                                                                    (0, r.jsx)(s.vwX, {
                                                                        className: I.formTitle,
                                                                        children: E.intl.string(E.t.GjPpSk),
                                                                    }),
                                                                    (0, r.jsx)(s.R94, {
                                                                        type: s.geA.DESCRIPTION,
                                                                        className: I.description,
                                                                        children: E.intl.string(E.t.MVXonJ),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)(_.E, {
                                                                guildId: c.id,
                                                                guildMetadata: Z,
                                                                isDisabled: !w,
                                                            }),
                                                            (0, r.jsxs)(s.hjN, {
                                                                className: I.noDividerFormSection,
                                                                children: [
                                                                    (0, r.jsx)(s.vwX, {
                                                                        className: I.formTitle,
                                                                        children: E.intl.string(E.t.oOPlPD),
                                                                    }),
                                                                    (0, r.jsx)(O.Z, {
                                                                        guild: c,
                                                                        guildMetadata: Z,
                                                                        disabled: !w,
                                                                    }),
                                                                ],
                                                            }),
                                                            (null == H ? void 0 : H.category) != null
                                                                ? (0, r.jsx)(s.Text, {
                                                                      color: "text-danger",
                                                                      className: I.error,
                                                                      variant: "text-sm/normal",
                                                                      children: H.category,
                                                                  })
                                                                : null,
                                                        ],
                                                    });
                                            })(),
                                            (0, r.jsx)(s.$i$, { className: I.divider }),
                                            (() => {
                                                if (null != c)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(s.hjN, {
                                                                className: I.twoColumnFormSection,
                                                                children: [
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(s.vwX, {
                                                                                className: I.formTitle,
                                                                                children: E.intl.string(E.t["8bT/Cg"]),
                                                                            }),
                                                                            (0, r.jsx)(s.R94, {
                                                                                type: s.geA.DESCRIPTION,
                                                                                className: I.formDescription,
                                                                                children: E.intl.string(E.t.WCWT7O),
                                                                            }),
                                                                            (0, r.jsxs)(a.zx, {
                                                                                size: a.zx.Sizes.SMALL,
                                                                                color: a.zx.Colors.PRIMARY,
                                                                                children: [
                                                                                    E.intl.string(E.t.yG2pUl),
                                                                                    (0, r.jsx)(p.ZP, {
                                                                                        disabled: !w,
                                                                                        onChange: z,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    (0, r.jsx)(h.Z, {
                                                                        image: c.discoverySplash,
                                                                        makeURL: (e) =>
                                                                            b.ZP.getGuildDiscoverySplashURL({
                                                                                id: c.id,
                                                                                splash: e,
                                                                                size: 512 * (0, g.x_)(),
                                                                            }),
                                                                        disabled: !w,
                                                                        onChange: z,
                                                                        hint: E.intl.string(E.t.uPvxqK),
                                                                        imageClassName: I.imageUploaderInnerSquare,
                                                                        hideSize: !0,
                                                                    }),
                                                                ],
                                                            }),
                                                            (null == H ? void 0 : H.discovery_splash) != null
                                                                ? (0, r.jsx)(s.Text, {
                                                                      color: "text-danger",
                                                                      variant: "text-sm/normal",
                                                                      children: H.discovery_splash,
                                                                  })
                                                                : null,
                                                        ],
                                                    });
                                            })(),
                                            (0, r.jsx)(s.$i$, { className: I.divider }),
                                            (0, r.jsxs)(s.hjN, {
                                                children: [
                                                    (0, r.jsx)(s.vwX, {
                                                        className: I.formTitle,
                                                        children: E.intl.string(E.t["RSfm+v"]),
                                                    }),
                                                    (0, r.jsx)(s.R94, {
                                                        className: I.description,
                                                        type: s.geA.DESCRIPTION,
                                                        children: E.intl.string(E.t.IBi6h4),
                                                    }),
                                                    (0, r.jsx)(a.iS, {
                                                        value: null !== c.description ? c.description : "",
                                                        placeholder: E.intl.string(E.t.rFa9Ul),
                                                        onChange: (e) => {
                                                            var t;
                                                            j.Z.updateGuild({
                                                                description:
                                                                    null !=
                                                                    (t = null == e ? void 0 : e.replaceAll("\n", ""))
                                                                        ? t
                                                                        : "",
                                                            });
                                                        },
                                                        maxLength: 120,
                                                        disabled: !w,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(s.$i$, { className: I.divider }),
                                            (() => {
                                                if (null == Z) return null;
                                                let e =
                                                    0 === Z.reasonsToJoin.length
                                                        ? [, , , ,].fill({
                                                              reason: "",
                                                              emoji_name: null,
                                                          })
                                                        : Z.reasonsToJoin;
                                                return (0, r.jsxs)(s.hjN, {
                                                    children: [
                                                        (0, r.jsx)(s.vwX, {
                                                            className: I.formTitle,
                                                            children: E.intl.string(E.t.vUmXsb),
                                                        }),
                                                        (0, r.jsx)(s.R94, {
                                                            type: s.geA.DESCRIPTION,
                                                            className: I.description,
                                                            children: E.intl.string(E.t.esnBnZ),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: I.reasonToJoin,
                                                            children: (0, r.jsx)(y.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: c.id,
                                                                reasons: e,
                                                            }),
                                                        }),
                                                        (null == H ? void 0 : H.reasons_to_join) != null
                                                            ? (0, r.jsx)(s.Text, {
                                                                  color: "text-danger",
                                                                  variant: "text-sm/normal",
                                                                  children: H.reasons_to_join,
                                                              })
                                                            : null,
                                                    ],
                                                });
                                            })(),
                                            (0, r.jsx)(s.$i$, { className: I.divider }),
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsxs)(s.hjN, {
                                                        children: [
                                                            (0, r.jsx)(s.vwX, {
                                                                className: I.formTitle,
                                                                children: E.intl.string(E.t["lu+BmJ"]),
                                                            }),
                                                            (0, r.jsx)(s.R94, {
                                                                className: I.description,
                                                                type: s.geA.DESCRIPTION,
                                                                children: E.intl.string(E.t.ozSi8v),
                                                            }),
                                                            (0, r.jsx)(
                                                                a.iS,
                                                                {
                                                                    showCharacterCount: !0,
                                                                    className: I.textArea,
                                                                    value: Z.about,
                                                                    placeholder: E.intl.string(E.t.TduTbm),
                                                                    onChange: (e) => {
                                                                        (0, m.mA)(c.id, e);
                                                                    },
                                                                    minLength: 300,
                                                                    maxLength: 2400,
                                                                    disabled: !w,
                                                                    defaultDirty:
                                                                        (null == (e = Z.about) ? void 0 : e.length) > 0,
                                                                },
                                                                "text-area-".concat(R),
                                                            ),
                                                        ],
                                                    }),
                                                    (null == H ? void 0 : H.about) != null
                                                        ? (0, r.jsx)(s.Text, {
                                                              color: "text-danger",
                                                              variant: "text-sm/normal",
                                                              children: H.about,
                                                          })
                                                        : null,
                                                ],
                                            }),
                                            (0, r.jsx)(s.$i$, { className: I.divider }),
                                            (0, r.jsxs)(s.hjN, {
                                                children: [
                                                    (0, r.jsx)(s.vwX, {
                                                        className: I.formTitle,
                                                        children: E.intl.string(E.t.V5mNyc),
                                                    }),
                                                    (0, r.jsx)(s.R94, {
                                                        className: I.description,
                                                        type: s.geA.DESCRIPTION,
                                                        children: E.intl.string(E.t.d3kA9f),
                                                    }),
                                                    Z.socialLinks.map((e, t) => {
                                                        let n = B[t],
                                                            i = Object.values(C.z).find((e) => e.presentation === n),
                                                            l = null != i ? "".concat(i.baseUrl) : void 0;
                                                        return (0, r.jsxs)(
                                                            "div",
                                                            {
                                                                className: I.socialLinksContainer,
                                                                onMouseOver: () => K(t, !0),
                                                                onFocus: () => K(t, !0),
                                                                onMouseOut: () => K(t, !1),
                                                                onBlur: () => K(t, !1),
                                                                children: [
                                                                    (0, r.jsx)(s.q4e, {
                                                                        className: Z.isPublished
                                                                            ? I.socialLinksDropdownMax
                                                                            : I.socialLinksDropdownMin,
                                                                        options: ((e) => {
                                                                            let t = Object.entries(C.z)
                                                                                .filter(
                                                                                    (e) =>
                                                                                        !B.includes(e[1].presentation),
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
                                                                        })(B[t]),
                                                                        placeholder: E.intl.string(E.t.xSALIC),
                                                                        value: B[t],
                                                                        onChange: (e) =>
                                                                            ((e, t) => {
                                                                                let n = [...Z.socialLinks],
                                                                                    r = [...B],
                                                                                    i = [...A];
                                                                                (r[t] = e),
                                                                                    (n[t] = C.z[e].baseUrl),
                                                                                    (i[t] = !0),
                                                                                    L(i),
                                                                                    F(r),
                                                                                    M(i.every((e) => !0 === e)),
                                                                                    (0, m.t$)(c.id, n);
                                                                            })(e, t),
                                                                        isDisabled: !w,
                                                                    }),
                                                                    (0, r.jsx)(s.oil, {
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
                                                                                        (0, m.t$)(c.id, n));
                                                                            })("".concat(l).concat(e), t),
                                                                        placeholder:
                                                                            null != l
                                                                                ? void 0
                                                                                : E.intl.string(E.t.Q6o4pK),
                                                                        maxLength: 150,
                                                                        disabled: !w || null == B[t],
                                                                        fullWidth: !0,
                                                                        leading: l,
                                                                        trailing: w
                                                                            ? {
                                                                                  icon: s.XHJ,
                                                                                  "aria-label": E.intl.string(
                                                                                      E.t.N86XcH,
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      ((e) => {
                                                                                          let t = [...G];
                                                                                          t.splice(e, 1), U(t);
                                                                                          let n = [...A];
                                                                                          n.splice(e, 1), L(n);
                                                                                          let r = [...B];
                                                                                          r.splice(e, 1), F(r);
                                                                                          let i = [...Z.socialLinks];
                                                                                          i.splice(e, 1),
                                                                                              (0, m.t$)(c.id, i);
                                                                                      })(t),
                                                                              }
                                                                            : void 0,
                                                                    }),
                                                                ],
                                                            },
                                                            "social-container-" + t,
                                                        );
                                                    }),
                                                    (null == H ? void 0 : H.social_links) != null
                                                        ? (0, r.jsx)(s.Text, {
                                                              color: "text-danger",
                                                              variant: "text-sm/normal",
                                                              children: H.social_links,
                                                          })
                                                        : null,
                                                    (0, r.jsx)(s.zxk, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: E.intl.string(E.t.QvovjY),
                                                        onClick: () => {
                                                            if (Z.socialLinks.length < 9) {
                                                                let e = [...Z.socialLinks];
                                                                (0, m.t$)(c.id, e.concat("")), F(B.concat(""));
                                                            }
                                                        },
                                                        disabled: !w || Z.socialLinks.length >= 9,
                                                    }),
                                                ],
                                            }),
                                            Z.isPublished &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(s.$i$, { className: I.divider }),
                                                        (0, r.jsxs)(s.hjN, {
                                                            children: [
                                                                (0, r.jsx)(s.vwX, {
                                                                    className: I.formTitle,
                                                                    children: E.intl.string(E.t["5yF7e3"]),
                                                                }),
                                                                (0, r.jsx)(s.R94, {
                                                                    className: I.description,
                                                                    type: s.geA.DESCRIPTION,
                                                                    children: E.intl.string(E.t.eOFvqa),
                                                                }),
                                                                (0, r.jsx)(s.zxk, {
                                                                    variant: "critical-primary",
                                                                    size: "sm",
                                                                    text: E.intl.string(E.t["DCHd/P"]),
                                                                    onClick: () => W(!1),
                                                                    disabled: !w,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            (null == H ? void 0 : H.is_published) != null
                                                ? (0, r.jsx)(s.Text, {
                                                      color: "text-danger",
                                                      variant: "text-sm/normal",
                                                      children: H.is_published,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    !Z.isPublished &&
                                        (0, r.jsx)("div", {
                                            className: I.checklist,
                                            children: (0, r.jsx)(u.Z, {
                                                title: E.intl.string(E.t["2kCyn5"]),
                                                children: Y,
                                                buttonLabel: E.intl.string(E.t.tVK6S0),
                                                buttonCallback: () => W(!0),
                                                disabled: !w || !k,
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
    w = () => (null == (0, l.e7)([v.Z], () => v.Z.getGuild()) ? null : (0, r.jsx)(P, {}));
