n.d(t, {
    J: () => P,
    Z: () => R
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
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(692547),
    a = n(481060),
    o = n(225433),
    c = n(484614),
    d = n(852860),
    u = n(688465),
    m = n(970061),
    g = n(456268),
    p = n(134432),
    h = n(813197),
    f = n(208567),
    x = n(496675),
    b = n(768581),
    j = n(63063),
    _ = n(434404),
    v = n(999382),
    O = n(718157),
    C = n(450474),
    y = n(190287),
    N = n(465520),
    I = n(981631),
    E = n(388032),
    S = n(869562);
let T = 'https:' + window.GLOBAL_ENV.MARKETING_ENDPOINT + '/servers/',
    P = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n
        } = (0, l.cj)([v.Z], () => ({
            submitting: v.Z.isSubmitting(),
            guild: v.Z.getGuild(),
            guildMetadata: v.Z.getMetadata()
        }));
        return (0, r.jsx)(d.Z, {
            submitting: n,
            onReset: () => {
                null != e && _.Z.init(e.id);
            },
            onSave: () => {
                null != e &&
                    (_.Z.saveGuild(e.id, {
                        discoverySplash: e.discoverySplash,
                        description: e.description
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
                        about: t.about
                    }));
            }
        });
    },
    w = () => {
        var e;
        let t = i.useRef(null),
            d = (0, l.e7)([v.Z], () => v.Z.getGuild()),
            [P, w] = i.useState(!1);
        i.useEffect(() => {
            P || null == d || ((0, g.le)(), (0, g.aC)(d.id), (0, g.i3)(d.id), w(!0));
        }, [d, P]);
        let { canManageGuild: R } = (0, l.cj)([x.Z], () => ({ canManageGuild: x.Z.can(I.Plq.MANAGE_GUILD, d) })),
            Z = (0, l.e7)([v.Z], () => v.Z.isGuildMetadataLoaded()),
            D = (0, l.e7)([v.Z], () => (null != d ? v.Z.getMetadata() : null)),
            A = (0, l.e7)([v.Z], () => (null != d && (null == D ? void 0 : D.isPublished) ? v.Z.getSlug() : null)),
            [k, L] = i.useState([!0]),
            [M, G] = i.useState(!0),
            [U, B] = i.useState([!1]),
            [F, z] = i.useState(['']),
            H = (e) => {
                let t = Object.entries(N.z)
                    .filter((e) => !F.includes(e[1].presentation))
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
            V = (e) => {
                try {
                    var t, n, r, i;
                    let l = new URL(e).hostname.split('.');
                    if (3 === l.length && 'bandcamp' === l[1].toLowerCase()) return N.z.bandcamp.presentation;
                    let s = null != (n = null == (t = l.shift()) ? void 0 : t.toLowerCase()) ? n : '';
                    if (('www' === s && (s = null != (i = null == (r = l.shift()) ? void 0 : r.toLowerCase()) ? i : ''), s in N.z)) return N.z[s].presentation;
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
                        let i = V(n);
                        null !== i ? ((t[r] = i), (e[r] = !0)) : (e[r] = !1);
                    } else e[r] = !0;
                }),
                    z(t),
                    L(e),
                    G(e.every((e) => !0 === e));
            }
        }, [D]);
        let W = (0, l.e7)([v.Z], () => (null != d ? v.Z.getErrors() : null));
        if (null == d || null == D) return null;
        let Y = (e) => {
                _.Z.updateGuild({ discoverySplash: e });
            },
            K = (e) => {
                let t = () => {
                    (0, g.W1)(d.id, e),
                        e
                            ? (0, g.Vv)({
                                  guildId: d.id,
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
                            : (0, g.Vv)({
                                  guildId: d.id,
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
                        _.Z.saveGuild(d.id, {
                            discoverySplash: d.discoverySplash,
                            description: d.description
                        });
                };
                if (e) return void t();
                null != d.vanityURLCode
                    ? n
                          .e('66731')
                          .then(n.bind(n, 241485))
                          .then((e) => {
                              e.default.open(t);
                          })
                    : t();
            },
            X = (e, t) => {
                let n = [...D.socialLinks],
                    r = [...F],
                    i = [...k];
                (r[t] = e), (n[t] = N.z[e].baseUrl), (i[t] = !0), L(i), z(r), G(i.every((e) => !0 === e)), (0, g.t$)(d.id, n);
            },
            q = (e, t) => {
                let n = [...D.socialLinks],
                    r = n[t],
                    i = e;
                0 === r.length && i.length > 1 && !1 === RegExp('^https?:').test(i) && (i = 'https://' + i), /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(i) || ((n[t] = i), (0, g.t$)(d.id, n));
            },
            J = (e) => {
                let t = [...U];
                t.splice(e, 1), B(t);
                let n = [...k];
                n.splice(e, 1), L(n);
                let r = [...F];
                r.splice(e, 1), z(r);
                let i = [...D.socialLinks];
                i.splice(e, 1), (0, g.t$)(d.id, i);
            },
            Q = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            $ = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return (null === t || '' === t) && null === n;
            },
            ee = [
                {
                    title: E.intl.string(E.t['/SWsHx']),
                    items: [
                        {
                            description: E.intl.string(E.t.DU8jFx),
                            completed: null !== d.discoverySplash && '' !== d.discoverySplash
                        },
                        {
                            description: E.intl.string(E.t.SW5OHx),
                            completed: null !== d.description && '' !== d.description
                        },
                        {
                            description: E.intl.string(E.t.m3b3WF),
                            completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400
                        },
                        {
                            description: E.intl.string(E.t.qpx5MD),
                            completed: null !== D.reasonsToJoin && D.reasonsToJoin.every((e) => $(e) || Q(e)) && D.reasonsToJoin.filter(Q).length >= 2
                        }
                    ]
                }
            ],
            et = (e, t) => {
                let n = [...U];
                (n[e] = t), B(n);
            };
        return (0, r.jsx)('div', {
            className: S.settingsColumn,
            children: (0, r.jsx)('div', {
                className: S.settingsContainer,
                children: (0, r.jsx)(a.w0Z, {
                    className: S.settingsScroller,
                    children: (0, r.jsx)('main', {
                        ref: t,
                        className: S.settingsContent,
                        children: (0, r.jsx)(a.JcV, {
                            containerRef: t,
                            children: (0, r.jsxs)('div', {
                                className: S.container,
                                children: [
                                    (0, r.jsxs)(a.hjN, {
                                        className: S.mainContent,
                                        title: (0, r.jsxs)('div', {
                                            children: [E.intl.string(E.t.kGlQGB), ' ', (0, r.jsx)(u.Z, { className: S.betaTag })]
                                        }),
                                        tag: a.RB0.H1,
                                        children: [
                                            (0, r.jsxs)(a.R94, {
                                                className: S.tabMainDescription,
                                                type: a.geA.DESCRIPTION,
                                                children: [E.intl.format(E.t['+ScrMT'], { discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT }), ' ', E.intl.format(E.t.T6WtKy, { learnMoreURL: j.Z.getArticleURL(I.BhN.SERVER_WEB_PAGES) })]
                                            }),
                                            (() => {
                                                if (!D.isPublished || null == A) return;
                                                let e = T + A;
                                                return (0, r.jsxs)(a.hjN, {
                                                    className: S.noDividerFormSection,
                                                    children: [
                                                        (0, r.jsx)(a.vwX, {
                                                            className: S.formTitle,
                                                            children: E.intl.string(E.t.safBZ2)
                                                        }),
                                                        (0, r.jsx)(c.Z, { value: e }),
                                                        (0, r.jsx)(a.zxk, {
                                                            className: S.viewPageButton,
                                                            size: a.zxk.Sizes.SMALL,
                                                            color: a.zxk.Colors.BRAND,
                                                            onClick: () => window.open(e),
                                                            children: E.intl.string(E.t.NI8iGB)
                                                        })
                                                    ]
                                                });
                                            })(),
                                            (0, r.jsx)(a.$i$, { className: S.divider }),
                                            (() => {
                                                if (null != d)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(a.hjN, {
                                                                children: [
                                                                    (0, r.jsx)(a.vwX, {
                                                                        className: S.formTitle,
                                                                        children: E.intl.string(E.t.GjPpSk)
                                                                    }),
                                                                    (0, r.jsx)(a.R94, {
                                                                        type: a.geA.DESCRIPTION,
                                                                        className: S.description,
                                                                        children: E.intl.string(E.t.MVXonJ)
                                                                    })
                                                                ]
                                                            }),
                                                            (0, r.jsx)(O.E, {
                                                                guildId: d.id,
                                                                guildMetadata: D,
                                                                isDisabled: !R
                                                            }),
                                                            (0, r.jsxs)(a.hjN, {
                                                                className: S.noDividerFormSection,
                                                                children: [
                                                                    (0, r.jsx)(a.vwX, {
                                                                        className: S.formTitle,
                                                                        children: E.intl.string(E.t.oOPlPD)
                                                                    }),
                                                                    (0, r.jsx)(C.Z, {
                                                                        guild: d,
                                                                        guildMetadata: D,
                                                                        disabled: !R
                                                                    })
                                                                ]
                                                            }),
                                                            (null == W ? void 0 : W.category) != null
                                                                ? (0, r.jsx)(a.Text, {
                                                                      color: 'text-danger',
                                                                      className: S.error,
                                                                      variant: 'text-sm/normal',
                                                                      children: W.category
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, r.jsx)(a.$i$, { className: S.divider }),
                                            (() => {
                                                if (null != d)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(a.hjN, {
                                                                className: S.twoColumnFormSection,
                                                                children: [
                                                                    (0, r.jsxs)('div', {
                                                                        children: [
                                                                            (0, r.jsx)(a.vwX, {
                                                                                className: S.formTitle,
                                                                                children: E.intl.string(E.t['8bT/Cg'])
                                                                            }),
                                                                            (0, r.jsx)(a.R94, {
                                                                                type: a.geA.DESCRIPTION,
                                                                                className: S.formDescription,
                                                                                children: E.intl.string(E.t.WCWT7O)
                                                                            }),
                                                                            (0, r.jsxs)(a.zxk, {
                                                                                size: a.zxk.Sizes.SMALL,
                                                                                color: a.zxk.Colors.PRIMARY,
                                                                                children: [
                                                                                    E.intl.string(E.t.yG2pUl),
                                                                                    (0, r.jsx)(h.ZP, {
                                                                                        disabled: !R,
                                                                                        onChange: Y
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, r.jsx)(f.Z, {
                                                                        image: d.discoverySplash,
                                                                        makeURL: (e) =>
                                                                            b.ZP.getGuildDiscoverySplashURL({
                                                                                id: d.id,
                                                                                splash: e,
                                                                                size: 512 * (0, p.x_)()
                                                                            }),
                                                                        disabled: !R,
                                                                        onChange: Y,
                                                                        hint: E.intl.string(E.t.uPvxqK),
                                                                        imageClassName: S.imageUploaderInnerSquare,
                                                                        hideSize: !0
                                                                    })
                                                                ]
                                                            }),
                                                            (null == W ? void 0 : W.discovery_splash) != null
                                                                ? (0, r.jsx)(a.Text, {
                                                                      color: 'text-danger',
                                                                      variant: 'text-sm/normal',
                                                                      children: W.discovery_splash
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, r.jsx)(a.$i$, { className: S.divider }),
                                            (0, r.jsxs)(a.hjN, {
                                                children: [
                                                    (0, r.jsx)(a.vwX, {
                                                        className: S.formTitle,
                                                        children: E.intl.string(E.t['RSfm+v'])
                                                    }),
                                                    (0, r.jsx)(a.R94, {
                                                        className: S.description,
                                                        type: a.geA.DESCRIPTION,
                                                        children: E.intl.string(E.t.IBi6h4)
                                                    }),
                                                    (0, r.jsx)(a.Kx8, {
                                                        value: null !== d.description ? d.description : '',
                                                        placeholder: E.intl.string(E.t.rFa9Ul),
                                                        onChange: (e) => {
                                                            var t;
                                                            _.Z.updateGuild({ description: null != (t = null == e ? void 0 : e.replaceAll('\n', '')) ? t : '' });
                                                        },
                                                        maxLength: 120,
                                                        disabled: !R
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(a.$i$, { className: S.divider }),
                                            (() => {
                                                if (null == D) return null;
                                                let e =
                                                    0 === D.reasonsToJoin.length
                                                        ? [, , , ,].fill({
                                                              reason: '',
                                                              emoji_name: null
                                                          })
                                                        : D.reasonsToJoin;
                                                return (0, r.jsxs)(a.hjN, {
                                                    children: [
                                                        (0, r.jsx)(a.vwX, {
                                                            className: S.formTitle,
                                                            children: E.intl.string(E.t.vUmXsb)
                                                        }),
                                                        (0, r.jsx)(a.R94, {
                                                            type: a.geA.DESCRIPTION,
                                                            className: S.description,
                                                            children: E.intl.string(E.t.esnBnZ)
                                                        }),
                                                        (0, r.jsx)('div', {
                                                            className: S.reasonToJoin,
                                                            children: (0, r.jsx)(y.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: d.id,
                                                                reasons: e
                                                            })
                                                        }),
                                                        (null == W ? void 0 : W.reasons_to_join) != null
                                                            ? (0, r.jsx)(a.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: W.reasons_to_join
                                                              })
                                                            : null
                                                    ]
                                                });
                                            })(),
                                            (0, r.jsx)(a.$i$, { className: S.divider }),
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsxs)(a.hjN, {
                                                        children: [
                                                            (0, r.jsx)(a.vwX, {
                                                                className: S.formTitle,
                                                                children: E.intl.string(E.t['lu+BmJ'])
                                                            }),
                                                            (0, r.jsx)(a.R94, {
                                                                className: S.description,
                                                                type: a.geA.DESCRIPTION,
                                                                children: E.intl.string(E.t.ozSi8v)
                                                            }),
                                                            (0, r.jsx)(
                                                                a.Kx8,
                                                                {
                                                                    showCharacterCount: !0,
                                                                    className: S.textArea,
                                                                    value: D.about,
                                                                    placeholder: E.intl.string(E.t.TduTbm),
                                                                    onChange: (e) => {
                                                                        (0, g.mA)(d.id, e);
                                                                    },
                                                                    minLength: 300,
                                                                    maxLength: 2400,
                                                                    disabled: !R,
                                                                    defaultDirty: (null == (e = D.about) ? void 0 : e.length) > 0
                                                                },
                                                                'text-area-'.concat(Z)
                                                            )
                                                        ]
                                                    }),
                                                    (null == W ? void 0 : W.about) != null
                                                        ? (0, r.jsx)(a.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: W.about
                                                          })
                                                        : null
                                                ]
                                            }),
                                            (0, r.jsx)(a.$i$, { className: S.divider }),
                                            (0, r.jsxs)(a.hjN, {
                                                children: [
                                                    (0, r.jsx)(a.vwX, {
                                                        className: S.formTitle,
                                                        children: E.intl.string(E.t.V5mNyc)
                                                    }),
                                                    (0, r.jsx)(a.R94, {
                                                        className: S.description,
                                                        type: a.geA.DESCRIPTION,
                                                        children: E.intl.string(E.t.d3kA9f)
                                                    }),
                                                    D.socialLinks.map((e, t) =>
                                                        (0, r.jsxs)(
                                                            'div',
                                                            {
                                                                className: S.socialLinksContainer,
                                                                onMouseOver: () => et(t, !0),
                                                                onFocus: () => et(t, !0),
                                                                onMouseOut: () => et(t, !1),
                                                                onBlur: () => et(t, !1),
                                                                children: [
                                                                    (0, r.jsx)(
                                                                        a.q4e,
                                                                        {
                                                                            className: D.isPublished ? S.socialLinksDropdownMax : S.socialLinksDropdownMin,
                                                                            options: H(F[t]),
                                                                            placeholder: E.intl.string(E.t.xSALIC),
                                                                            value: F[t],
                                                                            onChange: (e) => X(e, t),
                                                                            isDisabled: !R
                                                                        },
                                                                        'dropdown-' + t
                                                                    ),
                                                                    (0, r.jsx)(
                                                                        a.oil,
                                                                        {
                                                                            value: e,
                                                                            className: D.isPublished ? S.socialLinksMax : S.socialLinksMin,
                                                                            onChange: (e) => q(e, t),
                                                                            placeholder: E.intl.string(E.t.Q6o4pK),
                                                                            maxLength: 150,
                                                                            disabled: !R
                                                                        },
                                                                        'link-' + t
                                                                    ),
                                                                    k[t]
                                                                        ? (0, r.jsx)(
                                                                              a.owK,
                                                                              {
                                                                                  size: 'custom',
                                                                                  className: D.isPublished ? S.validationButtonMax : S.validationButtonMin,
                                                                                  color: s.Z.unsafe_rawColors.GREEN_230.css,
                                                                                  width: 20,
                                                                                  height: 20
                                                                              },
                                                                              'validation-passed-' + t
                                                                          )
                                                                        : (0, r.jsx)(
                                                                              a.k$p,
                                                                              {
                                                                                  size: 'custom',
                                                                                  className: D.isPublished ? S.validationButtonMax : S.validationButtonMin,
                                                                                  color: s.Z.unsafe_rawColors.RED_400.css,
                                                                                  width: 20,
                                                                                  height: 20
                                                                              },
                                                                              'validation-failed-' + t
                                                                          ),
                                                                    R &&
                                                                        (0, r.jsx)(
                                                                            o.Z,
                                                                            {
                                                                                className: U[t] ? (D.isPublished ? S.deleteButtonMax : S.deleteButtonMin) : D.isPublished ? S.deleteButtonHiddenMax : S.deleteButtonHiddenMin,
                                                                                onClick: () => J(t)
                                                                            },
                                                                            'delete-button-' + t
                                                                        )
                                                                ]
                                                            },
                                                            'social-container-' + t
                                                        )
                                                    ),
                                                    (null == W ? void 0 : W.social_links) != null
                                                        ? (0, r.jsx)(a.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: W.social_links
                                                          })
                                                        : null,
                                                    (0, r.jsx)(a.zxk, {
                                                        size: a.zxk.Sizes.SMALL,
                                                        color: a.zxk.Colors.PRIMARY,
                                                        onClick: () => {
                                                            if (D.socialLinks.length < 9) {
                                                                let e = [...D.socialLinks];
                                                                (0, g.t$)(d.id, e.concat('')), z(F.concat(''));
                                                            }
                                                        },
                                                        disabled: !R || D.socialLinks.length >= 9,
                                                        children: E.intl.string(E.t.QvovjY)
                                                    })
                                                ]
                                            }),
                                            D.isPublished &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(a.$i$, { className: S.divider }),
                                                        (0, r.jsxs)(a.hjN, {
                                                            children: [
                                                                (0, r.jsx)(a.vwX, {
                                                                    className: S.formTitle,
                                                                    children: E.intl.string(E.t['5yF7e3'])
                                                                }),
                                                                (0, r.jsx)(a.R94, {
                                                                    className: S.description,
                                                                    type: a.geA.DESCRIPTION,
                                                                    children: E.intl.string(E.t.eOFvqa)
                                                                }),
                                                                (0, r.jsx)(a.zxk, {
                                                                    size: a.zxk.Sizes.SMALL,
                                                                    color: a.zxk.Colors.RED,
                                                                    onClick: () => K(!1),
                                                                    disabled: !R,
                                                                    children: E.intl.string(E.t['DCHd/P'])
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                            (null == W ? void 0 : W.is_published) != null
                                                ? (0, r.jsx)(a.Text, {
                                                      color: 'text-danger',
                                                      variant: 'text-sm/normal',
                                                      children: W.is_published
                                                  })
                                                : null
                                        ]
                                    }),
                                    !D.isPublished &&
                                        (0, r.jsx)('div', {
                                            className: S.checklist,
                                            children: (0, r.jsx)(m.Z, {
                                                title: E.intl.string(E.t['2kCyn5']),
                                                children: ee,
                                                buttonLabel: E.intl.string(E.t.tVK6S0),
                                                buttonCallback: () => K(!0),
                                                disabled: !R || !M
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
    R = () => (null == (0, l.e7)([v.Z], () => v.Z.getGuild()) ? null : (0, r.jsx)(w, {}));
