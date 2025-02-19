n.d(t, {
    J: () => P,
    Z: () => R
}),
    n(266796),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(301563),
    n(627494),
    n(757143),
    n(474991),
    n(398202);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(692547),
    l = n(481060),
    o = n(225433),
    c = n(484614),
    d = n(852860),
    u = n(688465),
    m = n(970061),
    p = n(456268),
    g = n(134432),
    h = n(813197),
    f = n(208567),
    b = n(496675),
    x = n(768581),
    j = n(63063),
    N = n(434404),
    v = n(999382),
    _ = n(718157),
    O = n(450474),
    y = n(190287),
    C = n(465520),
    I = n(981631),
    E = n(388032),
    S = n(335723);
let T = 'https:' + window.GLOBAL_ENV.MARKETING_ENDPOINT + '/servers/',
    P = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n
        } = (0, s.cj)([v.Z], () => ({
            submitting: v.Z.isSubmitting(),
            guild: v.Z.getGuild(),
            guildMetadata: v.Z.getMetadata()
        }));
        return (0, r.jsx)(d.Z, {
            submitting: n,
            onReset: () => {
                null != e && N.Z.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (N.Z.saveGuild(e.id, {
                        discoverySplash: e.discoverySplash,
                        description: e.description
                    }),
                    (0, p.Vv)({
                        guildId: e.id,
                        primaryCategoryId: t.primaryCategoryId,
                        keywords: t.keywords,
                        emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled,
                        partnerActionedTimestamp: t.partnerActionedTimestamp,
                        partnerApplicationTimestamp: t.partnerApplicationTimestamp,
                        isPublished: t.isPublished,
                        reasonsToJoin: t.reasonsToJoin,
                        socialLinks: t.socialLinks.filter((e) => e),
                        about: t.about
                    }));
            }
        });
    },
    w = () => {
        var e;
        let t = i.useRef(null),
            n = (0, s.e7)([v.Z], () => v.Z.getGuild()),
            [d, P] = i.useState(!1);
        i.useEffect(() => {
            d || null == n || ((0, p.le)(), (0, p.aC)(n.id), (0, p.i3)(n.id), P(!0));
        }, [n, d]);
        let { canManageGuild: w } = (0, s.cj)([b.Z], () => ({ canManageGuild: b.Z.can(I.Plq.MANAGE_GUILD, n) })),
            R = (0, s.e7)([v.Z], () => v.Z.isGuildMetadataLoaded()),
            D = (0, s.e7)([v.Z], () => (null != n ? v.Z.getMetadata() : null)),
            Z = (0, s.e7)([v.Z], () => (null != n && (null == D ? void 0 : D.isPublished) ? v.Z.getSlug() : null)),
            [A, k] = i.useState([!0]),
            [W, L] = i.useState(!0),
            [M, U] = i.useState([!1]),
            [G, B] = i.useState(['']),
            F = (e) => {
                let t = Object.entries(C.z)
                    .filter((e) => !G.includes(e[1].presentation))
                    .map((e) => ({
                        label: e[1].presentation,
                        value: e[0]
                    }));
                return null == e || '' === e
                    ? t
                    : t.concat({
                          label: e,
                          value: e
                      });
            },
            z = (e) => {
                try {
                    var t, n, r, i;
                    let s = new URL(e).hostname.split('.');
                    if (3 === s.length && 'bandcamp' === s[1].toLowerCase()) return C.z.bandcamp.presentation;
                    let a = null !== (n = null === (t = s.shift()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : '';
                    if (('www' === a && (a = null !== (i = null === (r = s.shift()) || void 0 === r ? void 0 : r.toLowerCase()) && void 0 !== i ? i : ''), a in C.z)) return C.z[a].presentation;
                    return null;
                } catch (e) {
                    return null;
                }
            };
        i.useEffect(() => {
            if (null !== D) {
                let e = [],
                    t = [];
                D.socialLinks.forEach((n, r) => {
                    if ('' !== n) {
                        let i = z(n);
                        null !== i ? ((t[r] = i), (e[r] = !0)) : (e[r] = !1);
                    } else e[r] = !0;
                }),
                    B(t),
                    k(e),
                    L(e.every((e) => !0 === e));
            }
        }, [D]);
        let H = (0, s.e7)([v.Z], () => (null != n ? v.Z.getErrors() : null));
        if (null == n || null == D) return null;
        let V = (e) => {
                N.Z.updateGuild({ discoverySplash: e });
            },
            Y = (e) => {
                (0, p.W1)(n.id, e),
                    e
                        ? (0, p.Vv)({
                              guildId: n.id,
                              primaryCategoryId: D.primaryCategoryId,
                              keywords: D.keywords,
                              emojiDiscoverabilityEnabled: D.emojiDiscoverabilityEnabled,
                              partnerActionedTimestamp: D.partnerActionedTimestamp,
                              partnerApplicationTimestamp: D.partnerApplicationTimestamp,
                              isPublished: !0,
                              reasonsToJoin: D.reasonsToJoin,
                              socialLinks: D.socialLinks,
                              about: D.about
                          })
                        : (0, p.Vv)({
                              guildId: n.id,
                              primaryCategoryId: D.primaryCategoryId,
                              keywords: D.keywords,
                              emojiDiscoverabilityEnabled: D.emojiDiscoverabilityEnabled,
                              partnerActionedTimestamp: D.partnerActionedTimestamp,
                              partnerApplicationTimestamp: D.partnerApplicationTimestamp,
                              isPublished: !1,
                              reasonsToJoin: D.reasonsToJoin,
                              socialLinks: D.socialLinks,
                              about: D.about
                          }),
                    N.Z.saveGuild(n.id, {
                        discoverySplash: n.discoverySplash,
                        description: n.description
                    });
            },
            K = (e, t) => {
                let r = [...D.socialLinks],
                    i = [...G],
                    s = [...A];
                (i[t] = e), (r[t] = C.z[e].baseUrl), (s[t] = !0), k(s), B(i), L(s.every((e) => !0 === e)), (0, p.t$)(n.id, r);
            },
            q = (e, t) => {
                let r = [...D.socialLinks],
                    i = r[t],
                    s = e;
                0 === i.length && s.length > 1 && !1 === RegExp('^https?:').test(s) && (s = 'https://' + s), !/\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(s) && ((r[t] = s), (0, p.t$)(n.id, r));
            },
            X = (e) => {
                let t = [...M];
                t.splice(e, 1), U(t);
                let r = [...A];
                r.splice(e, 1), k(r);
                let i = [...G];
                i.splice(e, 1), B(i);
                let s = [...D.socialLinks];
                s.splice(e, 1), (0, p.t$)(n.id, s);
            },
            Q = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            J = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return (null === t || '' === t) && null === n;
            },
            $ = [
                {
                    title: E.NW.string(E.t['/SWsHx']),
                    items: [
                        {
                            description: E.NW.string(E.t.DU8jFx),
                            completed: null !== n.discoverySplash && '' !== n.discoverySplash
                        },
                        {
                            description: E.NW.string(E.t.SW5OHx),
                            completed: null !== n.description && '' !== n.description
                        },
                        {
                            description: E.NW.string(E.t.m3b3WF),
                            completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400
                        },
                        {
                            description: E.NW.string(E.t.qpx5MD),
                            completed: null !== D.reasonsToJoin && D.reasonsToJoin.every((e) => J(e) || Q(e)) && D.reasonsToJoin.filter(Q).length >= 2
                        }
                    ]
                }
            ],
            ee = (e, t) => {
                let n = [...M];
                (n[e] = t), U(n);
            };
        return (0, r.jsx)('div', {
            className: S.settingsColumn,
            children: (0, r.jsx)('div', {
                className: S.settingsContainer,
                children: (0, r.jsx)(l.w0Z, {
                    className: S.settingsScroller,
                    children: (0, r.jsx)('main', {
                        ref: t,
                        className: S.settingsContent,
                        children: (0, r.jsx)(l.JcV, {
                            containerRef: t,
                            children: (0, r.jsxs)('div', {
                                className: S.container,
                                children: [
                                    (0, r.jsxs)(l.hjN, {
                                        className: S.mainContent,
                                        title: (0, r.jsxs)('div', {
                                            children: [E.NW.string(E.t.kGlQGB), ' ', (0, r.jsx)(u.Z, { className: S.betaTag })]
                                        }),
                                        tag: l.RB0.H1,
                                        children: [
                                            (0, r.jsxs)(l.R94, {
                                                className: S.tabMainDescription,
                                                type: l.geA.DESCRIPTION,
                                                children: [E.NW.format(E.t['+ScrMT'], { discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT }), ' ', E.NW.format(E.t.T6WtKy, { learnMoreURL: j.Z.getArticleURL(I.BhN.SERVER_WEB_PAGES) })]
                                            }),
                                            (() => {
                                                if (!D.isPublished || null == Z) return;
                                                let e = T + Z;
                                                return (0, r.jsx)(r.Fragment, {
                                                    children: (0, r.jsxs)(l.hjN, {
                                                        className: S.noDividerFormSection,
                                                        children: [
                                                            (0, r.jsx)(l.vwX, {
                                                                className: S.formTitle,
                                                                children: E.NW.string(E.t.safBZ2)
                                                            }),
                                                            (0, r.jsx)(c.Z, { value: e }),
                                                            (0, r.jsx)(l.zxk, {
                                                                className: S.viewPageButton,
                                                                size: l.zxk.Sizes.SMALL,
                                                                color: l.zxk.Colors.BRAND,
                                                                onClick: () => window.open(e),
                                                                children: E.NW.string(E.t.NI8iGB)
                                                            })
                                                        ]
                                                    })
                                                });
                                            })(),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (() => {
                                                if (null != n)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(l.hjN, {
                                                                children: [
                                                                    (0, r.jsx)(l.vwX, {
                                                                        className: S.formTitle,
                                                                        children: E.NW.string(E.t.GjPpSk)
                                                                    }),
                                                                    (0, r.jsx)(l.R94, {
                                                                        type: l.geA.DESCRIPTION,
                                                                        className: S.description,
                                                                        children: E.NW.string(E.t.MVXonJ)
                                                                    })
                                                                ]
                                                            }),
                                                            (0, r.jsx)(_.E, {
                                                                guildId: n.id,
                                                                guildMetadata: D,
                                                                isDisabled: !w
                                                            }),
                                                            (0, r.jsxs)(l.hjN, {
                                                                className: S.noDividerFormSection,
                                                                children: [
                                                                    (0, r.jsx)(l.vwX, {
                                                                        className: S.formTitle,
                                                                        children: E.NW.string(E.t.oOPlPD)
                                                                    }),
                                                                    (0, r.jsx)(O.Z, {
                                                                        guild: n,
                                                                        guildMetadata: D,
                                                                        disabled: !w
                                                                    })
                                                                ]
                                                            }),
                                                            (null == H ? void 0 : H.category) != null
                                                                ? (0, r.jsx)(l.Text, {
                                                                      color: 'text-danger',
                                                                      className: S.error,
                                                                      variant: 'text-sm/normal',
                                                                      children: H.category
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (() => {
                                                if (null != n)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(l.hjN, {
                                                                className: S.twoColumnFormSection,
                                                                children: [
                                                                    (0, r.jsxs)('div', {
                                                                        children: [
                                                                            (0, r.jsx)(l.vwX, {
                                                                                className: S.formTitle,
                                                                                children: E.NW.string(E.t['8bT/Cg'])
                                                                            }),
                                                                            (0, r.jsx)(l.R94, {
                                                                                type: l.geA.DESCRIPTION,
                                                                                className: S.formDescription,
                                                                                children: E.NW.string(E.t.WCWT7O)
                                                                            }),
                                                                            (0, r.jsxs)(l.zxk, {
                                                                                size: l.zxk.Sizes.SMALL,
                                                                                color: l.zxk.Colors.PRIMARY,
                                                                                children: [
                                                                                    E.NW.string(E.t.yG2pUl),
                                                                                    (0, r.jsx)(h.ZP, {
                                                                                        disabled: !w,
                                                                                        onChange: V
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, r.jsx)(f.Z, {
                                                                        image: n.discoverySplash,
                                                                        makeURL: (e) =>
                                                                            x.ZP.getGuildDiscoverySplashURL({
                                                                                id: n.id,
                                                                                splash: e,
                                                                                size: 512 * (0, g.x_)()
                                                                            }),
                                                                        disabled: !w,
                                                                        onChange: V,
                                                                        hint: E.NW.string(E.t.uPvxqK),
                                                                        imageClassName: S.imageUploaderInnerSquare,
                                                                        hideSize: !0
                                                                    })
                                                                ]
                                                            }),
                                                            (null == H ? void 0 : H.discovery_splash) != null
                                                                ? (0, r.jsx)(l.Text, {
                                                                      color: 'text-danger',
                                                                      variant: 'text-sm/normal',
                                                                      children: H.discovery_splash
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (0, r.jsxs)(l.hjN, {
                                                children: [
                                                    (0, r.jsx)(l.vwX, {
                                                        className: S.formTitle,
                                                        children: E.NW.string(E.t['RSfm+v'])
                                                    }),
                                                    (0, r.jsx)(l.R94, {
                                                        className: S.description,
                                                        type: l.geA.DESCRIPTION,
                                                        children: E.NW.string(E.t.IBi6h4)
                                                    }),
                                                    (0, r.jsx)(l.Kx8, {
                                                        value: null !== n.description ? n.description : '',
                                                        placeholder: E.NW.string(E.t.rFa9Ul),
                                                        onChange: (e) => {
                                                            var t;
                                                            N.Z.updateGuild({ description: null !== (t = null == e ? void 0 : e.replaceAll('\n', '')) && void 0 !== t ? t : '' });
                                                        },
                                                        maxLength: 120,
                                                        disabled: !w
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (() => {
                                                if (null == D) return null;
                                                let e =
                                                    0 === D.reasonsToJoin.length
                                                        ? [, , , ,].fill({
                                                              reason: '',
                                                              emoji_name: null
                                                          })
                                                        : D.reasonsToJoin;
                                                return (0, r.jsxs)(l.hjN, {
                                                    children: [
                                                        (0, r.jsx)(l.vwX, {
                                                            className: S.formTitle,
                                                            children: E.NW.string(E.t.vUmXsb)
                                                        }),
                                                        (0, r.jsx)(l.R94, {
                                                            type: l.geA.DESCRIPTION,
                                                            className: S.description,
                                                            children: E.NW.string(E.t.esnBnZ)
                                                        }),
                                                        (0, r.jsx)('div', {
                                                            className: S.reasonToJoin,
                                                            children: (0, r.jsx)(y.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: n.id,
                                                                reasons: e
                                                            })
                                                        }),
                                                        (null == H ? void 0 : H.reasons_to_join) != null
                                                            ? (0, r.jsx)(l.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: H.reasons_to_join
                                                              })
                                                            : null
                                                    ]
                                                });
                                            })(),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsxs)(l.hjN, {
                                                        children: [
                                                            (0, r.jsx)(l.vwX, {
                                                                className: S.formTitle,
                                                                children: E.NW.string(E.t['lu+BmJ'])
                                                            }),
                                                            (0, r.jsx)(l.R94, {
                                                                className: S.description,
                                                                type: l.geA.DESCRIPTION,
                                                                children: E.NW.string(E.t.ozSi8v)
                                                            }),
                                                            (0, r.jsx)(
                                                                l.Kx8,
                                                                {
                                                                    showCharacterCount: !0,
                                                                    className: S.textArea,
                                                                    value: D.about,
                                                                    placeholder: E.NW.string(E.t.TduTbm),
                                                                    onChange: (e) => {
                                                                        (0, p.mA)(n.id, e);
                                                                    },
                                                                    minLength: 300,
                                                                    maxLength: 2400,
                                                                    disabled: !w,
                                                                    defaultDirty: (null === (e = D.about) || void 0 === e ? void 0 : e.length) > 0
                                                                },
                                                                'text-area-'.concat(R)
                                                            )
                                                        ]
                                                    }),
                                                    (null == H ? void 0 : H.about) != null
                                                        ? (0, r.jsx)(l.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: H.about
                                                          })
                                                        : null
                                                ]
                                            }),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (0, r.jsx)(r.Fragment, {
                                                children: (0, r.jsxs)(l.hjN, {
                                                    children: [
                                                        (0, r.jsx)(l.vwX, {
                                                            className: S.formTitle,
                                                            children: E.NW.string(E.t.V5mNyc)
                                                        }),
                                                        (0, r.jsx)(l.R94, {
                                                            className: S.description,
                                                            type: l.geA.DESCRIPTION,
                                                            children: E.NW.string(E.t.d3kA9f)
                                                        }),
                                                        D.socialLinks.map((e, t) =>
                                                            (0, r.jsxs)(
                                                                'div',
                                                                {
                                                                    className: S.socialLinksContainer,
                                                                    onMouseOver: () => ee(t, !0),
                                                                    onFocus: () => ee(t, !0),
                                                                    onMouseOut: () => ee(t, !1),
                                                                    onBlur: () => ee(t, !1),
                                                                    children: [
                                                                        (0, r.jsx)(
                                                                            l.q4e,
                                                                            {
                                                                                className: D.isPublished ? S.socialLinksDropdownMax : S.socialLinksDropdownMin,
                                                                                options: F(G[t]),
                                                                                placeholder: E.NW.string(E.t.xSALIC),
                                                                                value: G[t],
                                                                                onChange: (e) => K(e, t),
                                                                                isDisabled: !w
                                                                            },
                                                                            'dropdown-' + t
                                                                        ),
                                                                        (0, r.jsx)(
                                                                            l.oil,
                                                                            {
                                                                                value: e,
                                                                                className: D.isPublished ? S.socialLinksMax : S.socialLinksMin,
                                                                                onChange: (e) => q(e, t),
                                                                                placeholder: E.NW.string(E.t.Q6o4pK),
                                                                                maxLength: 150,
                                                                                disabled: !w
                                                                            },
                                                                            'link-' + t
                                                                        ),
                                                                        A[t]
                                                                            ? (0, r.jsx)(
                                                                                  l.owK,
                                                                                  {
                                                                                      size: 'custom',
                                                                                      className: D.isPublished ? S.validationButtonMax : S.validationButtonMin,
                                                                                      color: a.Z.unsafe_rawColors.GREEN_230.css,
                                                                                      width: 20,
                                                                                      height: 20
                                                                                  },
                                                                                  'validation-passed-' + t
                                                                              )
                                                                            : (0, r.jsx)(
                                                                                  l.k$p,
                                                                                  {
                                                                                      size: 'custom',
                                                                                      className: D.isPublished ? S.validationButtonMax : S.validationButtonMin,
                                                                                      color: a.Z.unsafe_rawColors.RED_400.css,
                                                                                      width: 20,
                                                                                      height: 20
                                                                                  },
                                                                                  'validation-failed-' + t
                                                                              ),
                                                                        w &&
                                                                            (0, r.jsx)(
                                                                                o.Z,
                                                                                {
                                                                                    className: M[t] ? (D.isPublished ? S.deleteButtonMax : S.deleteButtonMin) : D.isPublished ? S.deleteButtonHiddenMax : S.deleteButtonHiddenMin,
                                                                                    onClick: () => X(t)
                                                                                },
                                                                                'delete-button-' + t
                                                                            )
                                                                    ]
                                                                },
                                                                'social-container-' + t
                                                            )
                                                        ),
                                                        (null == H ? void 0 : H.social_links) != null
                                                            ? (0, r.jsx)(l.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: H.social_links
                                                              })
                                                            : null,
                                                        (0, r.jsx)(l.zxk, {
                                                            size: l.zxk.Sizes.SMALL,
                                                            color: l.zxk.Colors.PRIMARY,
                                                            onClick: () => {
                                                                if (D.socialLinks.length < 9) {
                                                                    let e = [...D.socialLinks];
                                                                    (0, p.t$)(n.id, e.concat('')), B(G.concat(''));
                                                                }
                                                            },
                                                            disabled: !w || D.socialLinks.length >= 9,
                                                            children: E.NW.string(E.t.QvovjY)
                                                        })
                                                    ]
                                                })
                                            }),
                                            D.isPublished &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(l.$i$, { className: S.divider }),
                                                        (0, r.jsxs)(l.hjN, {
                                                            children: [
                                                                (0, r.jsx)(l.vwX, {
                                                                    className: S.formTitle,
                                                                    children: E.NW.string(E.t['5yF7e3'])
                                                                }),
                                                                (0, r.jsx)(l.R94, {
                                                                    className: S.description,
                                                                    type: l.geA.DESCRIPTION,
                                                                    children: E.NW.string(E.t.eOFvqa)
                                                                }),
                                                                (0, r.jsx)(l.zxk, {
                                                                    size: l.zxk.Sizes.SMALL,
                                                                    color: l.zxk.Colors.RED,
                                                                    onClick: () => Y(!1),
                                                                    disabled: !w,
                                                                    children: E.NW.string(E.t['DCHd/P'])
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                            (null == H ? void 0 : H.is_published) != null
                                                ? (0, r.jsx)(l.Text, {
                                                      color: 'text-danger',
                                                      variant: 'text-sm/normal',
                                                      children: H.is_published
                                                  })
                                                : null
                                        ]
                                    }),
                                    !D.isPublished &&
                                        (0, r.jsx)('div', {
                                            className: S.checklist,
                                            children: (0, r.jsx)(m.Z, {
                                                title: E.NW.string(E.t['2kCyn5']),
                                                children: $,
                                                buttonLabel: E.NW.string(E.t.tVK6S0),
                                                buttonCallback: () => Y(!0),
                                                disabled: !w || !W
                                            })
                                        })
                                ]
                            })
                        })
                    })
                })
            })
        });
    },
    R = () => (null == (0, s.e7)([v.Z], () => v.Z.getGuild()) ? null : (0, r.jsx)(w, {}));
