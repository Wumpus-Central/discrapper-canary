n.d(t, {
    J: () => y,
    Z: () => L
}),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(627494),
    n(757143);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(692547),
    a = n(481060),
    o = n(225433),
    c = n(484614),
    d = n(852860),
    u = n(688465),
    m = n(970061),
    h = n(456268),
    g = n(134432),
    x = n(813197),
    p = n(208567),
    _ = n(496675),
    C = n(768581),
    f = n(63063),
    v = n(434404),
    N = n(999382),
    j = n(718157),
    I = n(450474),
    E = n(190287),
    b = n(465520),
    T = n(981631),
    S = n(388032),
    R = n(633963);
let Z = 'https:' + window.GLOBAL_ENV.MARKETING_ENDPOINT + '/servers/',
    y = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n
        } = (0, l.cj)([N.Z], () => ({
            submitting: N.Z.isSubmitting(),
            guild: N.Z.getGuild(),
            guildMetadata: N.Z.getMetadata()
        }));
        return (0, i.jsx)(d.Z, {
            submitting: n,
            onReset: () => {
                null != e && v.Z.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (v.Z.saveGuild(e.id, {
                        discoverySplash: e.discoverySplash,
                        description: e.description
                    }),
                    (0, h.Vv)({
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
    A = () => {
        var e;
        let t = r.useRef(null),
            n = (0, l.e7)([N.Z], () => N.Z.getGuild()),
            [d, y] = r.useState(!1);
        r.useEffect(() => {
            d || null == n || ((0, h.le)(), (0, h.aC)(n.id), (0, h.i3)(n.id), y(!0));
        }, [n, d]);
        let { canManageGuild: A } = (0, l.cj)([_.Z], () => ({ canManageGuild: _.Z.can(T.Plq.MANAGE_GUILD, n) })),
            L = (0, l.e7)([N.Z], () => N.Z.isGuildMetadataLoaded()),
            D = (0, l.e7)([N.Z], () => (null != n ? N.Z.getMetadata() : null)),
            O = (0, l.e7)([N.Z], () => (null != n && (null == D ? void 0 : D.isPublished) ? N.Z.getSlug() : null)),
            [k, P] = r.useState([!0]),
            [w, M] = r.useState(!0),
            [U, G] = r.useState([!1]),
            [B, F] = r.useState(['']),
            z = (e) => {
                let t = Object.entries(b.z)
                    .filter((e) => !B.includes(e[1].presentation))
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
            H = (e) => {
                try {
                    var t, n, i, r;
                    let l = new URL(e).hostname.split('.');
                    if (3 === l.length && 'bandcamp' === l[1].toLowerCase()) return b.z.bandcamp.presentation;
                    let s = null !== (n = null === (t = l.shift()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : '';
                    if (('www' === s && (s = null !== (r = null === (i = l.shift()) || void 0 === i ? void 0 : i.toLowerCase()) && void 0 !== r ? r : ''), s in b.z)) return b.z[s].presentation;
                    return null;
                } catch {
                    return null;
                }
            };
        r.useEffect(() => {
            if (null !== D) {
                let e = [],
                    t = [];
                D.socialLinks.forEach((n, i) => {
                    if ('' !== n) {
                        let r = H(n);
                        null !== r ? ((t[i] = r), (e[i] = !0)) : (e[i] = !1);
                    } else e[i] = !0;
                }),
                    F(t),
                    P(e),
                    M(e.every((e) => !0 === e));
            }
        }, [D]);
        let V = (0, l.e7)([N.Z], () => (null != n ? N.Z.getErrors() : null));
        if (null == n || null == D) return null;
        let W = (e) => {
                v.Z.updateGuild({ discoverySplash: e });
            },
            Y = (e) => {
                (0, h.W1)(n.id, e),
                    e
                        ? (0, h.Vv)({
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
                        : (0, h.Vv)({
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
                    v.Z.saveGuild(n.id, {
                        discoverySplash: n.discoverySplash,
                        description: n.description
                    });
            },
            K = (e, t) => {
                let i = [...D.socialLinks],
                    r = [...B],
                    l = [...k];
                (r[t] = e), (i[t] = b.z[e].baseUrl), (l[t] = !0), P(l), F(r), M(l.every((e) => !0 === e)), (0, h.t$)(n.id, i);
            },
            q = (e, t) => {
                let i = [...D.socialLinks],
                    r = i[t],
                    l = e;
                0 === r.length && l.length > 1 && !1 === RegExp('^https?:').test(l) && (l = 'https://' + l), !/\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(l) && ((i[t] = l), (0, h.t$)(n.id, i));
            },
            X = (e) => {
                let t = [...U];
                t.splice(e, 1), G(t);
                let i = [...k];
                i.splice(e, 1), P(i);
                let r = [...B];
                r.splice(e, 1), F(r);
                let l = [...D.socialLinks];
                l.splice(e, 1), (0, h.t$)(n.id, l);
            },
            J = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            Q = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return (null === t || '' === t) && null === n;
            },
            $ = [
                {
                    title: S.intl.string(S.t['/SWsHx']),
                    items: [
                        {
                            description: S.intl.string(S.t.DU8jFx),
                            completed: null !== n.discoverySplash && '' !== n.discoverySplash
                        },
                        {
                            description: S.intl.string(S.t.SW5OHx),
                            completed: null !== n.description && '' !== n.description
                        },
                        {
                            description: S.intl.string(S.t.m3b3WF),
                            completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400
                        },
                        {
                            description: S.intl.string(S.t.qpx5MD),
                            completed: null !== D.reasonsToJoin && D.reasonsToJoin.every((e) => Q(e) || J(e)) && D.reasonsToJoin.filter(J).length >= 2
                        }
                    ]
                }
            ],
            ee = (e, t) => {
                let n = [...U];
                (n[e] = t), G(n);
            };
        return (0, i.jsx)('div', {
            className: R.settingsColumn,
            children: (0, i.jsx)('div', {
                className: R.settingsContainer,
                children: (0, i.jsx)(a.w0Z, {
                    className: R.settingsScroller,
                    children: (0, i.jsx)('main', {
                        ref: t,
                        className: R.settingsContent,
                        children: (0, i.jsx)(a.JcV, {
                            containerRef: t,
                            children: (0, i.jsxs)('div', {
                                className: R.container,
                                children: [
                                    (0, i.jsxs)(a.hjN, {
                                        className: R.mainContent,
                                        title: (0, i.jsxs)('div', {
                                            children: [S.intl.string(S.t.kGlQGB), ' ', (0, i.jsx)(u.Z, { className: R.betaTag })]
                                        }),
                                        tag: a.RB0.H1,
                                        children: [
                                            (0, i.jsxs)(a.R94, {
                                                className: R.tabMainDescription,
                                                type: a.geA.DESCRIPTION,
                                                children: [S.intl.format(S.t['+ScrMT'], { discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT }), ' ', S.intl.format(S.t.T6WtKy, { learnMoreURL: f.Z.getArticleURL(T.BhN.SERVER_WEB_PAGES) })]
                                            }),
                                            (() => {
                                                if (!D.isPublished || null == O) return;
                                                let e = Z + O;
                                                return (0, i.jsx)(i.Fragment, {
                                                    children: (0, i.jsxs)(a.hjN, {
                                                        className: R.noDividerFormSection,
                                                        children: [
                                                            (0, i.jsx)(a.vwX, {
                                                                className: R.formTitle,
                                                                children: S.intl.string(S.t.safBZ2)
                                                            }),
                                                            (0, i.jsx)(c.Z, { value: e }),
                                                            (0, i.jsx)(a.zxk, {
                                                                className: R.viewPageButton,
                                                                size: a.zxk.Sizes.SMALL,
                                                                color: a.zxk.Colors.BRAND,
                                                                onClick: () => window.open(e),
                                                                children: S.intl.string(S.t.NI8iGB)
                                                            })
                                                        ]
                                                    })
                                                });
                                            })(),
                                            (0, i.jsx)(a.$i$, { className: R.divider }),
                                            (() => {
                                                if (null != n)
                                                    return (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsxs)(a.hjN, {
                                                                children: [
                                                                    (0, i.jsx)(a.vwX, {
                                                                        className: R.formTitle,
                                                                        children: S.intl.string(S.t.GjPpSk)
                                                                    }),
                                                                    (0, i.jsx)(a.R94, {
                                                                        type: a.geA.DESCRIPTION,
                                                                        className: R.description,
                                                                        children: S.intl.string(S.t.MVXonJ)
                                                                    })
                                                                ]
                                                            }),
                                                            (0, i.jsx)(j.E, {
                                                                guildId: n.id,
                                                                guildMetadata: D,
                                                                isDisabled: !A
                                                            }),
                                                            (0, i.jsxs)(a.hjN, {
                                                                className: R.noDividerFormSection,
                                                                children: [
                                                                    (0, i.jsx)(a.vwX, {
                                                                        className: R.formTitle,
                                                                        children: S.intl.string(S.t.oOPlPD)
                                                                    }),
                                                                    (0, i.jsx)(I.Z, {
                                                                        guild: n,
                                                                        guildMetadata: D,
                                                                        disabled: !A
                                                                    })
                                                                ]
                                                            }),
                                                            (null == V ? void 0 : V.category) != null
                                                                ? (0, i.jsx)(a.Text, {
                                                                      color: 'text-danger',
                                                                      className: R.error,
                                                                      variant: 'text-sm/normal',
                                                                      children: V.category
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, i.jsx)(a.$i$, { className: R.divider }),
                                            (() => {
                                                if (null != n)
                                                    return (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsxs)(a.hjN, {
                                                                className: R.twoColumnFormSection,
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        children: [
                                                                            (0, i.jsx)(a.vwX, {
                                                                                className: R.formTitle,
                                                                                children: S.intl.string(S.t['8bT/Cg'])
                                                                            }),
                                                                            (0, i.jsx)(a.R94, {
                                                                                type: a.geA.DESCRIPTION,
                                                                                className: R.formDescription,
                                                                                children: S.intl.string(S.t.WCWT7O)
                                                                            }),
                                                                            (0, i.jsxs)(a.zxk, {
                                                                                size: a.zxk.Sizes.SMALL,
                                                                                color: a.zxk.Colors.PRIMARY,
                                                                                children: [
                                                                                    S.intl.string(S.t.yG2pUl),
                                                                                    (0, i.jsx)(x.ZP, {
                                                                                        disabled: !A,
                                                                                        onChange: W
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(p.Z, {
                                                                        image: n.discoverySplash,
                                                                        makeURL: (e) =>
                                                                            C.ZP.getGuildDiscoverySplashURL({
                                                                                id: n.id,
                                                                                splash: e,
                                                                                size: 512 * (0, g.x_)()
                                                                            }),
                                                                        disabled: !A,
                                                                        onChange: W,
                                                                        hint: S.intl.string(S.t.uPvxqK),
                                                                        imageClassName: R.imageUploaderInnerSquare,
                                                                        hideSize: !0
                                                                    })
                                                                ]
                                                            }),
                                                            (null == V ? void 0 : V.discovery_splash) != null
                                                                ? (0, i.jsx)(a.Text, {
                                                                      color: 'text-danger',
                                                                      variant: 'text-sm/normal',
                                                                      children: V.discovery_splash
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, i.jsx)(a.$i$, { className: R.divider }),
                                            (0, i.jsxs)(a.hjN, {
                                                children: [
                                                    (0, i.jsx)(a.vwX, {
                                                        className: R.formTitle,
                                                        children: S.intl.string(S.t['RSfm+v'])
                                                    }),
                                                    (0, i.jsx)(a.R94, {
                                                        className: R.description,
                                                        type: a.geA.DESCRIPTION,
                                                        children: S.intl.string(S.t.IBi6h4)
                                                    }),
                                                    (0, i.jsx)(a.Kx8, {
                                                        value: null !== n.description ? n.description : '',
                                                        placeholder: S.intl.string(S.t.rFa9Ul),
                                                        onChange: (e) => {
                                                            var t;
                                                            v.Z.updateGuild({ description: null !== (t = null == e ? void 0 : e.replaceAll('\n', '')) && void 0 !== t ? t : '' });
                                                        },
                                                        maxLength: 120,
                                                        disabled: !A
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)(a.$i$, { className: R.divider }),
                                            (() => {
                                                if (null == D) return null;
                                                let e =
                                                    0 === D.reasonsToJoin.length
                                                        ? [, , , ,].fill({
                                                              reason: '',
                                                              emoji_name: null
                                                          })
                                                        : D.reasonsToJoin;
                                                return (0, i.jsxs)(a.hjN, {
                                                    children: [
                                                        (0, i.jsx)(a.vwX, {
                                                            className: R.formTitle,
                                                            children: S.intl.string(S.t.vUmXsb)
                                                        }),
                                                        (0, i.jsx)(a.R94, {
                                                            type: a.geA.DESCRIPTION,
                                                            className: R.description,
                                                            children: S.intl.string(S.t.esnBnZ)
                                                        }),
                                                        (0, i.jsx)('div', {
                                                            className: R.reasonToJoin,
                                                            children: (0, i.jsx)(E.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: n.id,
                                                                reasons: e
                                                            })
                                                        }),
                                                        (null == V ? void 0 : V.reasons_to_join) != null
                                                            ? (0, i.jsx)(a.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: V.reasons_to_join
                                                              })
                                                            : null
                                                    ]
                                                });
                                            })(),
                                            (0, i.jsx)(a.$i$, { className: R.divider }),
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsxs)(a.hjN, {
                                                        children: [
                                                            (0, i.jsx)(a.vwX, {
                                                                className: R.formTitle,
                                                                children: S.intl.string(S.t['lu+BmJ'])
                                                            }),
                                                            (0, i.jsx)(a.R94, {
                                                                className: R.description,
                                                                type: a.geA.DESCRIPTION,
                                                                children: S.intl.string(S.t.ozSi8v)
                                                            }),
                                                            (0, i.jsx)(
                                                                a.Kx8,
                                                                {
                                                                    showCharacterCount: !0,
                                                                    className: R.textArea,
                                                                    value: D.about,
                                                                    placeholder: S.intl.string(S.t.TduTbm),
                                                                    onChange: (e) => {
                                                                        (0, h.mA)(n.id, e);
                                                                    },
                                                                    minLength: 300,
                                                                    maxLength: 2400,
                                                                    disabled: !A,
                                                                    defaultDirty: (null === (e = D.about) || void 0 === e ? void 0 : e.length) > 0
                                                                },
                                                                'text-area-'.concat(L)
                                                            )
                                                        ]
                                                    }),
                                                    (null == V ? void 0 : V.about) != null
                                                        ? (0, i.jsx)(a.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: V.about
                                                          })
                                                        : null
                                                ]
                                            }),
                                            (0, i.jsx)(a.$i$, { className: R.divider }),
                                            (0, i.jsx)(i.Fragment, {
                                                children: (0, i.jsxs)(a.hjN, {
                                                    children: [
                                                        (0, i.jsx)(a.vwX, {
                                                            className: R.formTitle,
                                                            children: S.intl.string(S.t.V5mNyc)
                                                        }),
                                                        (0, i.jsx)(a.R94, {
                                                            className: R.description,
                                                            type: a.geA.DESCRIPTION,
                                                            children: S.intl.string(S.t.d3kA9f)
                                                        }),
                                                        D.socialLinks.map((e, t) =>
                                                            (0, i.jsxs)(
                                                                'div',
                                                                {
                                                                    className: R.socialLinksContainer,
                                                                    onMouseOver: () => ee(t, !0),
                                                                    onFocus: () => ee(t, !0),
                                                                    onMouseOut: () => ee(t, !1),
                                                                    onBlur: () => ee(t, !1),
                                                                    children: [
                                                                        (0, i.jsx)(
                                                                            a.q4e,
                                                                            {
                                                                                className: D.isPublished ? R.socialLinksDropdownMax : R.socialLinksDropdownMin,
                                                                                options: z(B[t]),
                                                                                placeholder: S.intl.string(S.t.xSALIC),
                                                                                value: B[t],
                                                                                onChange: (e) => K(e, t),
                                                                                isDisabled: !A
                                                                            },
                                                                            'dropdown-' + t
                                                                        ),
                                                                        (0, i.jsx)(
                                                                            a.oil,
                                                                            {
                                                                                value: e,
                                                                                className: D.isPublished ? R.socialLinksMax : R.socialLinksMin,
                                                                                onChange: (e) => q(e, t),
                                                                                placeholder: S.intl.string(S.t.Q6o4pK),
                                                                                maxLength: 150,
                                                                                disabled: !A
                                                                            },
                                                                            'link-' + t
                                                                        ),
                                                                        k[t]
                                                                            ? (0, i.jsx)(
                                                                                  a.owK,
                                                                                  {
                                                                                      size: 'custom',
                                                                                      className: D.isPublished ? R.validationButtonMax : R.validationButtonMin,
                                                                                      color: s.Z.unsafe_rawColors.GREEN_230.css,
                                                                                      width: 20,
                                                                                      height: 20
                                                                                  },
                                                                                  'validation-passed-' + t
                                                                              )
                                                                            : (0, i.jsx)(
                                                                                  a.k$p,
                                                                                  {
                                                                                      size: 'custom',
                                                                                      className: D.isPublished ? R.validationButtonMax : R.validationButtonMin,
                                                                                      color: s.Z.unsafe_rawColors.RED_400.css,
                                                                                      width: 20,
                                                                                      height: 20
                                                                                  },
                                                                                  'validation-failed-' + t
                                                                              ),
                                                                        A &&
                                                                            (0, i.jsx)(
                                                                                o.Z,
                                                                                {
                                                                                    className: U[t] ? (D.isPublished ? R.deleteButtonMax : R.deleteButtonMin) : D.isPublished ? R.deleteButtonHiddenMax : R.deleteButtonHiddenMin,
                                                                                    onClick: () => X(t)
                                                                                },
                                                                                'delete-button-' + t
                                                                            )
                                                                    ]
                                                                },
                                                                'social-container-' + t
                                                            )
                                                        ),
                                                        (null == V ? void 0 : V.social_links) != null
                                                            ? (0, i.jsx)(a.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: V.social_links
                                                              })
                                                            : null,
                                                        (0, i.jsx)(a.zxk, {
                                                            size: a.zxk.Sizes.SMALL,
                                                            color: a.zxk.Colors.PRIMARY,
                                                            onClick: () => {
                                                                if (D.socialLinks.length < 9) {
                                                                    let e = [...D.socialLinks];
                                                                    (0, h.t$)(n.id, e.concat('')), F(B.concat(''));
                                                                }
                                                            },
                                                            disabled: !A || D.socialLinks.length >= 9,
                                                            children: S.intl.string(S.t.QvovjY)
                                                        })
                                                    ]
                                                })
                                            }),
                                            D.isPublished &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(a.$i$, { className: R.divider }),
                                                        (0, i.jsxs)(a.hjN, {
                                                            children: [
                                                                (0, i.jsx)(a.vwX, {
                                                                    className: R.formTitle,
                                                                    children: S.intl.string(S.t['5yF7e3'])
                                                                }),
                                                                (0, i.jsx)(a.R94, {
                                                                    className: R.description,
                                                                    type: a.geA.DESCRIPTION,
                                                                    children: S.intl.string(S.t.eOFvqa)
                                                                }),
                                                                (0, i.jsx)(a.zxk, {
                                                                    size: a.zxk.Sizes.SMALL,
                                                                    color: a.zxk.Colors.RED,
                                                                    onClick: () => Y(!1),
                                                                    disabled: !A,
                                                                    children: S.intl.string(S.t['DCHd/P'])
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                            (null == V ? void 0 : V.is_published) != null
                                                ? (0, i.jsx)(a.Text, {
                                                      color: 'text-danger',
                                                      variant: 'text-sm/normal',
                                                      children: V.is_published
                                                  })
                                                : null
                                        ]
                                    }),
                                    !D.isPublished &&
                                        (0, i.jsx)('div', {
                                            className: R.checklist,
                                            children: (0, i.jsx)(m.Z, {
                                                title: S.intl.string(S.t['2kCyn5']),
                                                children: $,
                                                buttonLabel: S.intl.string(S.t.tVK6S0),
                                                buttonCallback: () => Y(!0),
                                                disabled: !A || !w
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
    L = () => (null == (0, l.e7)([N.Z], () => N.Z.getGuild()) ? null : (0, i.jsx)(A, {}));
