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
    g = n(456268),
    p = n(134432),
    h = n(813197),
    f = n(208567),
    b = n(496675),
    x = n(768581),
    j = n(63063),
    N = n(434404),
    _ = n(999382),
    v = n(718157),
    C = n(450474),
    O = n(190287),
    y = n(465520),
    I = n(981631),
    E = n(388032),
    S = n(869562);
let T = 'https:' + window.GLOBAL_ENV.MARKETING_ENDPOINT + '/servers/',
    P = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n
        } = (0, s.cj)([_.Z], () => ({
            submitting: _.Z.isSubmitting(),
            guild: _.Z.getGuild(),
            guildMetadata: _.Z.getMetadata()
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
            d = (0, s.e7)([_.Z], () => _.Z.getGuild()),
            [P, w] = i.useState(!1);
        i.useEffect(() => {
            P || null == d || ((0, g.le)(), (0, g.aC)(d.id), (0, g.i3)(d.id), w(!0));
        }, [d, P]);
        let { canManageGuild: R } = (0, s.cj)([b.Z], () => ({ canManageGuild: b.Z.can(I.Plq.MANAGE_GUILD, d) })),
            Z = (0, s.e7)([_.Z], () => _.Z.isGuildMetadataLoaded()),
            D = (0, s.e7)([_.Z], () => (null != d ? _.Z.getMetadata() : null)),
            A = (0, s.e7)([_.Z], () => (null != d && (null == D ? void 0 : D.isPublished) ? _.Z.getSlug() : null)),
            [k, W] = i.useState([!0]),
            [L, M] = i.useState(!0),
            [G, U] = i.useState([!1]),
            [B, F] = i.useState(['']),
            z = (e) => {
                let t = Object.entries(y.z)
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
                    var t, n, r, i;
                    let s = new URL(e).hostname.split('.');
                    if (3 === s.length && 'bandcamp' === s[1].toLowerCase()) return y.z.bandcamp.presentation;
                    let a = null != (n = null == (t = s.shift()) ? void 0 : t.toLowerCase()) ? n : '';
                    if (('www' === a && (a = null != (i = null == (r = s.shift()) ? void 0 : r.toLowerCase()) ? i : ''), a in y.z)) return y.z[a].presentation;
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
                        let i = H(n);
                        null !== i ? ((t[r] = i), (e[r] = !0)) : (e[r] = !1);
                    } else e[r] = !0;
                }),
                    F(t),
                    W(e),
                    M(e.every((e) => !0 === e));
            }
        }, [D]);
        let V = (0, s.e7)([_.Z], () => (null != d ? _.Z.getErrors() : null));
        if (null == d || null == D) return null;
        let Y = (e) => {
                N.Z.updateGuild({ discoverySplash: e });
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
                        N.Z.saveGuild(d.id, {
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
            q = (e, t) => {
                let n = [...D.socialLinks],
                    r = [...B],
                    i = [...k];
                (r[t] = e), (n[t] = y.z[e].baseUrl), (i[t] = !0), W(i), F(r), M(i.every((e) => !0 === e)), (0, g.t$)(d.id, n);
            },
            X = (e, t) => {
                let n = [...D.socialLinks],
                    r = n[t],
                    i = e;
                0 === r.length && i.length > 1 && !1 === RegExp('^https?:').test(i) && (i = 'https://' + i), /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(i) || ((n[t] = i), (0, g.t$)(d.id, n));
            },
            Q = (e) => {
                let t = [...G];
                t.splice(e, 1), U(t);
                let n = [...k];
                n.splice(e, 1), W(n);
                let r = [...B];
                r.splice(e, 1), F(r);
                let i = [...D.socialLinks];
                i.splice(e, 1), (0, g.t$)(d.id, i);
            },
            J = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            $ = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return (null === t || '' === t) && null === n;
            },
            ee = [
                {
                    title: E.NW.string(E.t['/SWsHx']),
                    items: [
                        {
                            description: E.NW.string(E.t.DU8jFx),
                            completed: null !== d.discoverySplash && '' !== d.discoverySplash
                        },
                        {
                            description: E.NW.string(E.t.SW5OHx),
                            completed: null !== d.description && '' !== d.description
                        },
                        {
                            description: E.NW.string(E.t.m3b3WF),
                            completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400
                        },
                        {
                            description: E.NW.string(E.t.qpx5MD),
                            completed: null !== D.reasonsToJoin && D.reasonsToJoin.every((e) => $(e) || J(e)) && D.reasonsToJoin.filter(J).length >= 2
                        }
                    ]
                }
            ],
            et = (e, t) => {
                let n = [...G];
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
                                                if (!D.isPublished || null == A) return;
                                                let e = T + A;
                                                return (0, r.jsxs)(l.hjN, {
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
                                                });
                                            })(),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (() => {
                                                if (null != d)
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
                                                            (0, r.jsx)(v.E, {
                                                                guildId: d.id,
                                                                guildMetadata: D,
                                                                isDisabled: !R
                                                            }),
                                                            (0, r.jsxs)(l.hjN, {
                                                                className: S.noDividerFormSection,
                                                                children: [
                                                                    (0, r.jsx)(l.vwX, {
                                                                        className: S.formTitle,
                                                                        children: E.NW.string(E.t.oOPlPD)
                                                                    }),
                                                                    (0, r.jsx)(C.Z, {
                                                                        guild: d,
                                                                        guildMetadata: D,
                                                                        disabled: !R
                                                                    })
                                                                ]
                                                            }),
                                                            (null == V ? void 0 : V.category) != null
                                                                ? (0, r.jsx)(l.Text, {
                                                                      color: 'text-danger',
                                                                      className: S.error,
                                                                      variant: 'text-sm/normal',
                                                                      children: V.category
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (() => {
                                                if (null != d)
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
                                                                            x.ZP.getGuildDiscoverySplashURL({
                                                                                id: d.id,
                                                                                splash: e,
                                                                                size: 512 * (0, p.x_)()
                                                                            }),
                                                                        disabled: !R,
                                                                        onChange: Y,
                                                                        hint: E.NW.string(E.t.uPvxqK),
                                                                        imageClassName: S.imageUploaderInnerSquare,
                                                                        hideSize: !0
                                                                    })
                                                                ]
                                                            }),
                                                            (null == V ? void 0 : V.discovery_splash) != null
                                                                ? (0, r.jsx)(l.Text, {
                                                                      color: 'text-danger',
                                                                      variant: 'text-sm/normal',
                                                                      children: V.discovery_splash
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
                                                        value: null !== d.description ? d.description : '',
                                                        placeholder: E.NW.string(E.t.rFa9Ul),
                                                        onChange: (e) => {
                                                            var t;
                                                            N.Z.updateGuild({ description: null != (t = null == e ? void 0 : e.replaceAll('\n', '')) ? t : '' });
                                                        },
                                                        maxLength: 120,
                                                        disabled: !R
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
                                                            children: (0, r.jsx)(O.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: d.id,
                                                                reasons: e
                                                            })
                                                        }),
                                                        (null == V ? void 0 : V.reasons_to_join) != null
                                                            ? (0, r.jsx)(l.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: V.reasons_to_join
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
                                                    (null == V ? void 0 : V.about) != null
                                                        ? (0, r.jsx)(l.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: V.about
                                                          })
                                                        : null
                                                ]
                                            }),
                                            (0, r.jsx)(l.$i$, { className: S.divider }),
                                            (0, r.jsxs)(l.hjN, {
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
                                                                onMouseOver: () => et(t, !0),
                                                                onFocus: () => et(t, !0),
                                                                onMouseOut: () => et(t, !1),
                                                                onBlur: () => et(t, !1),
                                                                children: [
                                                                    (0, r.jsx)(
                                                                        l.q4e,
                                                                        {
                                                                            className: D.isPublished ? S.socialLinksDropdownMax : S.socialLinksDropdownMin,
                                                                            options: z(B[t]),
                                                                            placeholder: E.NW.string(E.t.xSALIC),
                                                                            value: B[t],
                                                                            onChange: (e) => q(e, t),
                                                                            isDisabled: !R
                                                                        },
                                                                        'dropdown-' + t
                                                                    ),
                                                                    (0, r.jsx)(
                                                                        l.oil,
                                                                        {
                                                                            value: e,
                                                                            className: D.isPublished ? S.socialLinksMax : S.socialLinksMin,
                                                                            onChange: (e) => X(e, t),
                                                                            placeholder: E.NW.string(E.t.Q6o4pK),
                                                                            maxLength: 150,
                                                                            disabled: !R
                                                                        },
                                                                        'link-' + t
                                                                    ),
                                                                    k[t]
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
                                                                    R &&
                                                                        (0, r.jsx)(
                                                                            o.Z,
                                                                            {
                                                                                className: G[t] ? (D.isPublished ? S.deleteButtonMax : S.deleteButtonMin) : D.isPublished ? S.deleteButtonHiddenMax : S.deleteButtonHiddenMin,
                                                                                onClick: () => Q(t)
                                                                            },
                                                                            'delete-button-' + t
                                                                        )
                                                                ]
                                                            },
                                                            'social-container-' + t
                                                        )
                                                    ),
                                                    (null == V ? void 0 : V.social_links) != null
                                                        ? (0, r.jsx)(l.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: V.social_links
                                                          })
                                                        : null,
                                                    (0, r.jsx)(l.zxk, {
                                                        size: l.zxk.Sizes.SMALL,
                                                        color: l.zxk.Colors.PRIMARY,
                                                        onClick: () => {
                                                            if (D.socialLinks.length < 9) {
                                                                let e = [...D.socialLinks];
                                                                (0, g.t$)(d.id, e.concat('')), F(B.concat(''));
                                                            }
                                                        },
                                                        disabled: !R || D.socialLinks.length >= 9,
                                                        children: E.NW.string(E.t.QvovjY)
                                                    })
                                                ]
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
                                                                    onClick: () => K(!1),
                                                                    disabled: !R,
                                                                    children: E.NW.string(E.t['DCHd/P'])
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                            (null == V ? void 0 : V.is_published) != null
                                                ? (0, r.jsx)(l.Text, {
                                                      color: 'text-danger',
                                                      variant: 'text-sm/normal',
                                                      children: V.is_published
                                                  })
                                                : null
                                        ]
                                    }),
                                    !D.isPublished &&
                                        (0, r.jsx)('div', {
                                            className: S.checklist,
                                            children: (0, r.jsx)(m.Z, {
                                                title: E.NW.string(E.t['2kCyn5']),
                                                children: ee,
                                                buttonLabel: E.NW.string(E.t.tVK6S0),
                                                buttonCallback: () => K(!0),
                                                disabled: !R || !L
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
    R = () => (null == (0, s.e7)([_.Z], () => _.Z.getGuild()) ? null : (0, r.jsx)(w, {}));
