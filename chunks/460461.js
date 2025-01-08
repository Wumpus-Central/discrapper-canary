n.d(t, {
    J: function () {
        return L;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(627494),
    n(757143);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(225433),
    c = n(484614),
    d = n(852860),
    u = n(688465),
    m = n(970061),
    h = n(285888),
    g = n(456268),
    x = n(526429),
    p = n(134432),
    f = n(813197),
    C = n(208567),
    v = n(496675),
    _ = n(768581),
    N = n(63063),
    I = n(434404),
    T = n(999382),
    j = n(450474),
    b = n(190287),
    S = n(465520),
    E = n(981631),
    R = n(128449),
    y = n(388032),
    A = n(633963);
let Z = 'https:' + window.GLOBAL_ENV.MARKETING_ENDPOINT + '/servers/',
    L = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n
        } = (0, l.cj)([T.Z], () => ({
            submitting: T.Z.isSubmitting(),
            guild: T.Z.getGuild(),
            guildMetadata: T.Z.getMetadata()
        }));
        return (0, i.jsx)(d.Z, {
            submitting: n,
            onReset: () => {
                if (null != e) I.Z.init(e.id);
            },
            onSave: () => {
                if (null != e)
                    I.Z.saveGuild(e.id, {
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
                        });
            }
        });
    },
    D = () => {
        var e;
        let t = r.useRef(null),
            n = (0, l.e7)([T.Z], () => T.Z.getGuild()),
            [d, L] = r.useState(!1);
        r.useEffect(() => {
            !d && null != n && ((0, g.le)(), (0, g.aC)(n.id), (0, g.i3)(n.id), L(!0));
        }, [n, d]);
        let { canManageGuild: D } = (0, l.cj)([v.Z], () => ({ canManageGuild: v.Z.can(E.Plq.MANAGE_GUILD, n) })),
            O = (0, l.e7)([T.Z], () => T.Z.isGuildMetadataLoaded()),
            k = (0, l.e7)([T.Z], () => (null != n ? T.Z.getMetadata() : null)),
            M = (0, l.e7)([T.Z], () => (null != n && (null == k ? void 0 : k.isPublished) ? T.Z.getSlug() : null)),
            [P, w] = r.useState([!0]),
            [B, U] = r.useState(!0),
            [G, F] = r.useState([!1]),
            [H, z] = r.useState(['']),
            W = (e) => {
                let t = Object.entries(S.z)
                    .filter((e) => !H.includes(e[1].presentation))
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
                    var t, n, i, r;
                    let l = new URL(e).hostname.split('.');
                    if (3 === l.length && 'bandcamp' === l[1].toLowerCase()) return S.z.bandcamp.presentation;
                    let a = null !== (n = null === (t = l.shift()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : '';
                    if (('www' === a && (a = null !== (r = null === (i = l.shift()) || void 0 === i ? void 0 : i.toLowerCase()) && void 0 !== r ? r : ''), a in S.z)) return S.z[a].presentation;
                    return null;
                } catch {
                    return null;
                }
            };
        r.useEffect(() => {
            if (null !== k) {
                let e = [],
                    t = [];
                k.socialLinks.forEach((n, i) => {
                    if ('' !== n) {
                        let r = V(n);
                        null !== r ? ((t[i] = r), (e[i] = !0)) : (e[i] = !1);
                    } else e[i] = !0;
                }),
                    z(t),
                    w(e),
                    U(e.every((e) => !0 === e));
            }
        }, [k]);
        let Y = (0, l.e7)([T.Z], () => (null != n ? T.Z.getErrors() : null)),
            K = (0, l.e7)([x.Z], () => x.Z.getPrimaryCategories(), [], x.j);
        if (null == n || null == k) return null;
        let q = (e) => {
                I.Z.updateGuild({ discoverySplash: e });
            },
            X = (e) => {
                var t;
                (null == n ? void 0 : n.id) != null && (0, g.TA)(null == n ? void 0 : n.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : R.o3);
            },
            Q = (e) => {
                var t;
                I.Z.updateGuild({ description: null !== (t = null == e ? void 0 : e.replaceAll('\n', '')) && void 0 !== t ? t : '' });
            },
            J = (e) => {
                (0, g.mA)(n.id, e);
            },
            $ = (e) => {
                (0, g.W1)(n.id, e),
                    e
                        ? (0, g.Vv)({
                              guildId: n.id,
                              primaryCategoryId: k.primaryCategoryId,
                              keywords: k.keywords,
                              emojiDiscoverabilityEnabled: k.emojiDiscoverabilityEnabled,
                              partnerActionedTimestamp: k.partnerActionedTimestamp,
                              partnerApplicationTimestamp: k.partnerApplicationTimestamp,
                              isPublished: !0,
                              reasonsToJoin: k.reasonsToJoin,
                              socialLinks: k.socialLinks,
                              about: k.about
                          })
                        : (0, g.Vv)({
                              guildId: n.id,
                              primaryCategoryId: k.primaryCategoryId,
                              keywords: k.keywords,
                              emojiDiscoverabilityEnabled: k.emojiDiscoverabilityEnabled,
                              partnerActionedTimestamp: k.partnerActionedTimestamp,
                              partnerApplicationTimestamp: k.partnerApplicationTimestamp,
                              isPublished: !1,
                              reasonsToJoin: k.reasonsToJoin,
                              socialLinks: k.socialLinks,
                              about: k.about
                          }),
                    I.Z.saveGuild(n.id, {
                        discoverySplash: n.discoverySplash,
                        description: n.description
                    });
            },
            ee = () => {
                if (k.socialLinks.length < 9) {
                    let e = [...k.socialLinks];
                    (0, g.t$)(n.id, e.concat('')), z(H.concat(''));
                }
            },
            et = (e, t) => {
                let i = [...k.socialLinks],
                    r = [...H],
                    l = [...P];
                (r[t] = e), (i[t] = S.z[e].baseUrl), (l[t] = !0), w(l), z(r), U(l.every((e) => !0 === e)), (0, g.t$)(n.id, i);
            },
            en = (e, t) => {
                let i = [...k.socialLinks],
                    r = i[t],
                    l = e;
                0 === r.length && l.length > 1 && !1 === RegExp('^https?:').test(l) && (l = 'https://' + l);
                if (!/\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(l)) (i[t] = l), (0, g.t$)(n.id, i);
            },
            ei = (e) => {
                let t = [...G];
                t.splice(e, 1), F(t);
                let i = [...P];
                i.splice(e, 1), w(i);
                let r = [...H];
                r.splice(e, 1), z(r);
                let l = [...k.socialLinks];
                l.splice(e, 1), (0, g.t$)(n.id, l);
            },
            er = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            el = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return (null === t || '' === t) && null === n;
            },
            ea = [
                {
                    title: y.intl.string(y.t['/SWsHx']),
                    items: [
                        {
                            description: y.intl.string(y.t.DU8jFx),
                            completed: null !== n.discoverySplash && '' !== n.discoverySplash
                        },
                        {
                            description: y.intl.string(y.t.SW5OHx),
                            completed: null !== n.description && '' !== n.description
                        },
                        {
                            description: y.intl.string(y.t.m3b3WF),
                            completed: null !== k.about && k.about.length >= 300 && k.about.length <= 2400
                        },
                        {
                            description: y.intl.string(y.t.qpx5MD),
                            completed: null !== k.reasonsToJoin && k.reasonsToJoin.every((e) => el(e) || er(e)) && k.reasonsToJoin.filter(er).length >= 2
                        }
                    ]
                }
            ],
            es = K.map((e) => ({
                label: e.name,
                value: e.categoryId
            })),
            eo = (e, t) => {
                let n = [...G];
                (n[e] = t), F(n);
            };
        return (0, i.jsx)('div', {
            className: A.settingsColumn,
            children: (0, i.jsx)('div', {
                className: A.settingsContainer,
                children: (0, i.jsx)(s.ScrollerAuto, {
                    className: A.settingsScroller,
                    children: (0, i.jsx)('main', {
                        ref: t,
                        className: A.settingsContent,
                        children: (0, i.jsx)(s.FocusRingScope, {
                            containerRef: t,
                            children: (0, i.jsxs)('div', {
                                className: A.container,
                                children: [
                                    (0, i.jsxs)(s.FormSection, {
                                        className: A.mainContent,
                                        title: (0, i.jsxs)('div', {
                                            children: [y.intl.string(y.t.kGlQGB), ' ', (0, i.jsx)(u.Z, { className: A.betaTag })]
                                        }),
                                        tag: s.FormTitleTags.H1,
                                        children: [
                                            (0, i.jsxs)(s.FormText, {
                                                className: A.tabMainDescription,
                                                type: s.FormTextTypes.DESCRIPTION,
                                                children: [y.intl.format(y.t['+ScrMT'], { discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT }), ' ', y.intl.format(y.t.T6WtKy, { learnMoreURL: N.Z.getArticleURL(E.BhN.SERVER_WEB_PAGES) })]
                                            }),
                                            (() => {
                                                if (!k.isPublished || null == M) return;
                                                let e = Z + M;
                                                return (0, i.jsx)(i.Fragment, {
                                                    children: (0, i.jsxs)(s.FormSection, {
                                                        className: A.noDividerFormSection,
                                                        children: [
                                                            (0, i.jsx)(s.FormTitle, {
                                                                className: A.formTitle,
                                                                children: y.intl.string(y.t.safBZ2)
                                                            }),
                                                            (0, i.jsx)(c.Z, { value: e }),
                                                            (0, i.jsx)(s.Button, {
                                                                className: A.viewPageButton,
                                                                size: s.Button.Sizes.SMALL,
                                                                color: s.Button.Colors.BRAND,
                                                                onClick: () => window.open(e),
                                                                children: y.intl.string(y.t.NI8iGB)
                                                            })
                                                        ]
                                                    })
                                                });
                                            })(),
                                            (0, i.jsx)(s.FormDivider, { className: A.divider }),
                                            (() => {
                                                if (null != n)
                                                    return (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsxs)(s.FormSection, {
                                                                children: [
                                                                    (0, i.jsx)(s.FormTitle, {
                                                                        className: A.formTitle,
                                                                        children: y.intl.string(y.t.GjPpSk)
                                                                    }),
                                                                    (0, i.jsx)(s.FormText, {
                                                                        type: s.FormTextTypes.DESCRIPTION,
                                                                        className: A.description,
                                                                        children: y.intl.string(y.t.MVXonJ)
                                                                    })
                                                                ]
                                                            }),
                                                            (0, i.jsx)(h.Z, {
                                                                value: k.primaryCategoryId === R.o3 ? null : null == k ? void 0 : k.primaryCategoryId,
                                                                placeholder: y.intl.string(y.t.XqMe3N),
                                                                options: es,
                                                                onChange: X,
                                                                disabled: !D,
                                                                searchable: !0,
                                                                clearable: !0
                                                            }),
                                                            (0, i.jsxs)(s.FormSection, {
                                                                className: A.noDividerFormSection,
                                                                children: [
                                                                    (0, i.jsx)(s.FormTitle, {
                                                                        className: A.formTitle,
                                                                        children: y.intl.string(y.t.oOPlPD)
                                                                    }),
                                                                    (0, i.jsx)(j.Z, {
                                                                        guild: n,
                                                                        guildMetadata: k,
                                                                        disabled: !D
                                                                    })
                                                                ]
                                                            }),
                                                            (null == Y ? void 0 : Y.category) != null
                                                                ? (0, i.jsx)(s.Text, {
                                                                      color: 'text-danger',
                                                                      className: A.error,
                                                                      variant: 'text-sm/normal',
                                                                      children: Y.category
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, i.jsx)(s.FormDivider, { className: A.divider }),
                                            (() => {
                                                if (null != n)
                                                    return (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsxs)(s.FormSection, {
                                                                className: A.twoColumnFormSection,
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        children: [
                                                                            (0, i.jsx)(s.FormTitle, {
                                                                                className: A.formTitle,
                                                                                children: y.intl.string(y.t['8bT/Cg'])
                                                                            }),
                                                                            (0, i.jsx)(s.FormText, {
                                                                                type: s.FormTextTypes.DESCRIPTION,
                                                                                className: A.formDescription,
                                                                                children: y.intl.string(y.t.WCWT7O)
                                                                            }),
                                                                            (0, i.jsxs)(s.Button, {
                                                                                size: s.Button.Sizes.SMALL,
                                                                                color: s.Button.Colors.PRIMARY,
                                                                                children: [
                                                                                    y.intl.string(y.t.yG2pUl),
                                                                                    (0, i.jsx)(f.ZP, {
                                                                                        disabled: !D,
                                                                                        onChange: q
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(C.Z, {
                                                                        image: n.discoverySplash,
                                                                        makeURL: (e) =>
                                                                            _.ZP.getGuildDiscoverySplashURL({
                                                                                id: n.id,
                                                                                splash: e,
                                                                                size: 512 * (0, p.x_)()
                                                                            }),
                                                                        disabled: !D,
                                                                        onChange: q,
                                                                        hint: y.intl.string(y.t.uPvxqK),
                                                                        imageClassName: A.imageUploaderInnerSquare,
                                                                        hideSize: !0
                                                                    })
                                                                ]
                                                            }),
                                                            (null == Y ? void 0 : Y.discovery_splash) != null
                                                                ? (0, i.jsx)(s.Text, {
                                                                      color: 'text-danger',
                                                                      variant: 'text-sm/normal',
                                                                      children: Y.discovery_splash
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, i.jsx)(s.FormDivider, { className: A.divider }),
                                            (0, i.jsxs)(s.FormSection, {
                                                children: [
                                                    (0, i.jsx)(s.FormTitle, {
                                                        className: A.formTitle,
                                                        children: y.intl.string(y.t['RSfm+v'])
                                                    }),
                                                    (0, i.jsx)(s.FormText, {
                                                        className: A.description,
                                                        type: s.FormTextTypes.DESCRIPTION,
                                                        children: y.intl.string(y.t.IBi6h4)
                                                    }),
                                                    (0, i.jsx)(s.TextArea, {
                                                        value: null !== n.description ? n.description : '',
                                                        placeholder: y.intl.string(y.t.rFa9Ul),
                                                        onChange: Q,
                                                        maxLength: 120,
                                                        disabled: !D
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)(s.FormDivider, { className: A.divider }),
                                            (() => {
                                                if (null == k) return null;
                                                let e =
                                                    0 === k.reasonsToJoin.length
                                                        ? [, , , ,].fill({
                                                              reason: '',
                                                              emoji_name: null
                                                          })
                                                        : k.reasonsToJoin;
                                                return (0, i.jsxs)(s.FormSection, {
                                                    children: [
                                                        (0, i.jsx)(s.FormTitle, {
                                                            className: A.formTitle,
                                                            children: y.intl.string(y.t.vUmXsb)
                                                        }),
                                                        (0, i.jsx)(s.FormText, {
                                                            type: s.FormTextTypes.DESCRIPTION,
                                                            className: A.description,
                                                            children: y.intl.string(y.t.esnBnZ)
                                                        }),
                                                        (0, i.jsx)('div', {
                                                            className: A.reasonToJoin,
                                                            children: (0, i.jsx)(b.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: n.id,
                                                                reasons: e
                                                            })
                                                        }),
                                                        (null == Y ? void 0 : Y.reasons_to_join) != null
                                                            ? (0, i.jsx)(s.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: Y.reasons_to_join
                                                              })
                                                            : null
                                                    ]
                                                });
                                            })(),
                                            (0, i.jsx)(s.FormDivider, { className: A.divider }),
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsxs)(s.FormSection, {
                                                        children: [
                                                            (0, i.jsx)(s.FormTitle, {
                                                                className: A.formTitle,
                                                                children: y.intl.string(y.t['lu+BmJ'])
                                                            }),
                                                            (0, i.jsx)(s.FormText, {
                                                                className: A.description,
                                                                type: s.FormTextTypes.DESCRIPTION,
                                                                children: y.intl.string(y.t.ozSi8v)
                                                            }),
                                                            (0, i.jsx)(
                                                                s.TextArea,
                                                                {
                                                                    showCharacterCount: !0,
                                                                    className: A.textArea,
                                                                    value: k.about,
                                                                    placeholder: y.intl.string(y.t.TduTbm),
                                                                    onChange: J,
                                                                    minLength: 300,
                                                                    maxLength: 2400,
                                                                    disabled: !D,
                                                                    defaultDirty: (null === (e = k.about) || void 0 === e ? void 0 : e.length) > 0
                                                                },
                                                                'text-area-'.concat(O)
                                                            )
                                                        ]
                                                    }),
                                                    (null == Y ? void 0 : Y.about) != null
                                                        ? (0, i.jsx)(s.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: Y.about
                                                          })
                                                        : null
                                                ]
                                            }),
                                            (0, i.jsx)(s.FormDivider, { className: A.divider }),
                                            (0, i.jsx)(i.Fragment, {
                                                children: (0, i.jsxs)(s.FormSection, {
                                                    children: [
                                                        (0, i.jsx)(s.FormTitle, {
                                                            className: A.formTitle,
                                                            children: y.intl.string(y.t.V5mNyc)
                                                        }),
                                                        (0, i.jsx)(s.FormText, {
                                                            className: A.description,
                                                            type: s.FormTextTypes.DESCRIPTION,
                                                            children: y.intl.string(y.t.d3kA9f)
                                                        }),
                                                        k.socialLinks.map((e, t) =>
                                                            (0, i.jsxs)(
                                                                'div',
                                                                {
                                                                    className: A.socialLinksContainer,
                                                                    onMouseOver: () => eo(t, !0),
                                                                    onFocus: () => eo(t, !0),
                                                                    onMouseOut: () => eo(t, !1),
                                                                    onBlur: () => eo(t, !1),
                                                                    children: [
                                                                        (0, i.jsx)(
                                                                            s.SingleSelect,
                                                                            {
                                                                                className: k.isPublished ? A.socialLinksDropdownMax : A.socialLinksDropdownMin,
                                                                                options: W(H[t]),
                                                                                placeholder: y.intl.string(y.t.xSALIC),
                                                                                value: H[t],
                                                                                onChange: (e) => et(e, t),
                                                                                isDisabled: !D
                                                                            },
                                                                            'dropdown-' + t
                                                                        ),
                                                                        (0, i.jsx)(
                                                                            s.TextInput,
                                                                            {
                                                                                value: e,
                                                                                className: k.isPublished ? A.socialLinksMax : A.socialLinksMin,
                                                                                onChange: (e) => en(e, t),
                                                                                placeholder: y.intl.string(y.t.Q6o4pK),
                                                                                maxLength: 150,
                                                                                disabled: !D
                                                                            },
                                                                            'link-' + t
                                                                        ),
                                                                        P[t]
                                                                            ? (0, i.jsx)(
                                                                                  s.CircleCheckIcon,
                                                                                  {
                                                                                      size: 'custom',
                                                                                      className: k.isPublished ? A.validationButtonMax : A.validationButtonMin,
                                                                                      color: a.Z.unsafe_rawColors.GREEN_230.css,
                                                                                      width: 20,
                                                                                      height: 20
                                                                                  },
                                                                                  'validation-passed-' + t
                                                                              )
                                                                            : (0, i.jsx)(
                                                                                  s.CircleXIcon,
                                                                                  {
                                                                                      size: 'custom',
                                                                                      className: k.isPublished ? A.validationButtonMax : A.validationButtonMin,
                                                                                      color: a.Z.unsafe_rawColors.RED_400.css,
                                                                                      width: 20,
                                                                                      height: 20
                                                                                  },
                                                                                  'validation-failed-' + t
                                                                              ),
                                                                        D &&
                                                                            (0, i.jsx)(
                                                                                o.Z,
                                                                                {
                                                                                    className: G[t] ? (k.isPublished ? A.deleteButtonMax : A.deleteButtonMin) : k.isPublished ? A.deleteButtonHiddenMax : A.deleteButtonHiddenMin,
                                                                                    onClick: () => ei(t)
                                                                                },
                                                                                'delete-button-' + t
                                                                            )
                                                                    ]
                                                                },
                                                                'social-container-' + t
                                                            )
                                                        ),
                                                        (null == Y ? void 0 : Y.social_links) != null
                                                            ? (0, i.jsx)(s.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: Y.social_links
                                                              })
                                                            : null,
                                                        (0, i.jsx)(s.Button, {
                                                            size: s.Button.Sizes.SMALL,
                                                            color: s.Button.Colors.PRIMARY,
                                                            onClick: ee,
                                                            disabled: !D || k.socialLinks.length >= 9,
                                                            children: y.intl.string(y.t.QvovjY)
                                                        })
                                                    ]
                                                })
                                            }),
                                            k.isPublished &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(s.FormDivider, { className: A.divider }),
                                                        (0, i.jsxs)(s.FormSection, {
                                                            children: [
                                                                (0, i.jsx)(s.FormTitle, {
                                                                    className: A.formTitle,
                                                                    children: y.intl.string(y.t['5yF7e3'])
                                                                }),
                                                                (0, i.jsx)(s.FormText, {
                                                                    className: A.description,
                                                                    type: s.FormTextTypes.DESCRIPTION,
                                                                    children: y.intl.string(y.t.eOFvqa)
                                                                }),
                                                                (0, i.jsx)(s.Button, {
                                                                    size: s.Button.Sizes.SMALL,
                                                                    color: s.Button.Colors.RED,
                                                                    onClick: () => $(!1),
                                                                    disabled: !D,
                                                                    children: y.intl.string(y.t['DCHd/P'])
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                            (null == Y ? void 0 : Y.is_published) != null
                                                ? (0, i.jsx)(s.Text, {
                                                      color: 'text-danger',
                                                      variant: 'text-sm/normal',
                                                      children: Y.is_published
                                                  })
                                                : null
                                        ]
                                    }),
                                    !k.isPublished &&
                                        (0, i.jsx)('div', {
                                            className: A.checklist,
                                            children: (0, i.jsx)(m.Z, {
                                                title: y.intl.string(y.t['2kCyn5']),
                                                children: ea,
                                                buttonLabel: y.intl.string(y.t.tVK6S0),
                                                buttonCallback: () => $(!0),
                                                disabled: !D || !B
                                            })
                                        })
                                ]
                            })
                        })
                    })
                })
            })
        });
    };
t.Z = () => (null == (0, l.e7)([T.Z], () => T.Z.getGuild()) ? null : (0, i.jsx)(D, {}));
