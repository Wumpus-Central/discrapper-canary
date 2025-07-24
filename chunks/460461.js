(n.d(t, {
    J: () => w,
    Z: () => Z
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
    n(433524));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(692547),
    a = n(755721),
    o = n(481060),
    c = n(225433),
    d = n(484614),
    u = n(852860),
    m = n(688465),
    g = n(970061),
    p = n(456268),
    f = n(134432),
    h = n(813197),
    x = n(208567),
    b = n(496675),
    j = n(768581),
    v = n(63063),
    _ = n(434404),
    O = n(999382),
    C = n(718157),
    y = n(450474),
    N = n(190287),
    I = n(465520),
    E = n(981631),
    S = n(388032),
    T = n(869562);
let P = 'https:' + window.GLOBAL_ENV.MARKETING_ENDPOINT + '/servers/',
    w = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n
        } = (0, l.cj)([O.Z], () => ({
            submitting: O.Z.isSubmitting(),
            guild: O.Z.getGuild(),
            guildMetadata: O.Z.getMetadata()
        }));
        return (0, r.jsx)(u.Z, {
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
    R = () => {
        var e;
        let t = i.useRef(null),
            u = (0, l.e7)([O.Z], () => O.Z.getGuild()),
            [w, R] = i.useState(!1);
        i.useEffect(() => {
            w || null == u || ((0, p.le)(), (0, p.aC)(u.id), (0, p.i3)(u.id), R(!0));
        }, [u, w]);
        let { canManageGuild: Z } = (0, l.cj)([b.Z], () => ({ canManageGuild: b.Z.can(E.Plq.MANAGE_GUILD, u) })),
            D = (0, l.e7)([O.Z], () => O.Z.isGuildMetadataLoaded()),
            A = (0, l.e7)([O.Z], () => (null != u ? O.Z.getMetadata() : null)),
            L = (0, l.e7)([O.Z], () => (null != u && (null == A ? void 0 : A.isPublished) ? O.Z.getSlug() : null)),
            [k, M] = i.useState([!0]),
            [G, U] = i.useState(!0),
            [B, F] = i.useState([!1]),
            [H, z] = i.useState(['']),
            W = (e) => {
                let t = Object.entries(I.z)
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
                    var t, n, r, i;
                    let l = new URL(e).hostname.split('.');
                    if (3 === l.length && 'bandcamp' === l[1].toLowerCase()) return I.z.bandcamp.presentation;
                    let s = null != (n = null == (t = l.shift()) ? void 0 : t.toLowerCase()) ? n : '';
                    if (('www' === s && (s = null != (i = null == (r = l.shift()) ? void 0 : r.toLowerCase()) ? i : ''), s in I.z)) return I.z[s].presentation;
                    return null;
                } catch (e) {
                    return null;
                }
            };
        i.useEffect(() => {
            if (null !== A) {
                let e = [],
                    t = [];
                (A.socialLinks.forEach((n, r) => {
                    if ('' !== n) {
                        let i = V(n);
                        null !== i ? ((t[r] = i), (e[r] = !0)) : (e[r] = !1);
                    } else e[r] = !0;
                }),
                    z(t),
                    M(e),
                    U(e.every((e) => !0 === e)));
            }
        }, [A]);
        let Y = (0, l.e7)([O.Z], () => (null != u ? O.Z.getErrors() : null));
        if (null == u || null == A) return null;
        let K = (e) => {
                _.Z.updateGuild({ discoverySplash: e });
            },
            X = (e) => {
                let t = () => {
                    ((0, p.W1)(u.id, e),
                        e
                            ? (0, p.Vv)({
                                  guildId: u.id,
                                  primaryCategoryId: A.primaryCategoryId,
                                  keywords: A.keywords,
                                  emojiDiscoverabilityEnabled: A.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: A.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: A.partnerApplicationTimestamp,
                                  isPublished: !0,
                                  reasonsToJoin: A.reasonsToJoin,
                                  socialLinks: A.socialLinks,
                                  about: A.about
                              })
                            : (0, p.Vv)({
                                  guildId: u.id,
                                  primaryCategoryId: A.primaryCategoryId,
                                  keywords: A.keywords,
                                  emojiDiscoverabilityEnabled: A.emojiDiscoverabilityEnabled,
                                  partnerActionedTimestamp: A.partnerActionedTimestamp,
                                  partnerApplicationTimestamp: A.partnerApplicationTimestamp,
                                  isPublished: !1,
                                  reasonsToJoin: A.reasonsToJoin,
                                  socialLinks: A.socialLinks,
                                  about: A.about
                              }),
                        _.Z.saveGuild(u.id, {
                            discoverySplash: u.discoverySplash,
                            description: u.description
                        }));
                };
                if (e) return void t();
                null != u.vanityURLCode
                    ? n
                          .e('66731')
                          .then(n.bind(n, 241485))
                          .then((e) => {
                              e.default.open(t);
                          })
                    : t();
            },
            q = (e, t) => {
                let n = [...A.socialLinks],
                    r = [...H],
                    i = [...k];
                ((r[t] = e), (n[t] = I.z[e].baseUrl), (i[t] = !0), M(i), z(r), U(i.every((e) => !0 === e)), (0, p.t$)(u.id, n));
            },
            J = (e, t) => {
                let n = [...A.socialLinks],
                    r = n[t],
                    i = e;
                (0 === r.length && i.length > 1 && !1 === RegExp('^https?:').test(i) && (i = 'https://' + i), /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(i) || ((n[t] = i), (0, p.t$)(u.id, n)));
            },
            Q = (e) => {
                let t = [...B];
                (t.splice(e, 1), F(t));
                let n = [...k];
                (n.splice(e, 1), M(n));
                let r = [...H];
                (r.splice(e, 1), z(r));
                let i = [...A.socialLinks];
                (i.splice(e, 1), (0, p.t$)(u.id, i));
            },
            $ = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            ee = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return (null === t || '' === t) && null === n;
            },
            et = [
                {
                    title: S.intl.string(S.t['/SWsHx']),
                    items: [
                        {
                            description: S.intl.string(S.t.DU8jFx),
                            completed: null !== u.discoverySplash && '' !== u.discoverySplash
                        },
                        {
                            description: S.intl.string(S.t.SW5OHx),
                            completed: null !== u.description && '' !== u.description
                        },
                        {
                            description: S.intl.string(S.t.m3b3WF),
                            completed: null !== A.about && A.about.length >= 300 && A.about.length <= 2400
                        },
                        {
                            description: S.intl.string(S.t.qpx5MD),
                            completed: null !== A.reasonsToJoin && A.reasonsToJoin.every((e) => ee(e) || $(e)) && A.reasonsToJoin.filter($).length >= 2
                        }
                    ]
                }
            ],
            en = (e, t) => {
                let n = [...B];
                ((n[e] = t), F(n));
            };
        return (0, r.jsx)('div', {
            className: T.settingsColumn,
            children: (0, r.jsx)('div', {
                className: T.settingsContainer,
                children: (0, r.jsx)(o.w0Z, {
                    className: T.settingsScroller,
                    children: (0, r.jsx)('main', {
                        ref: t,
                        className: T.settingsContent,
                        children: (0, r.jsx)(o.JcV, {
                            containerRef: t,
                            children: (0, r.jsxs)('div', {
                                className: T.container,
                                children: [
                                    (0, r.jsxs)(o.hjN, {
                                        className: T.mainContent,
                                        title: (0, r.jsxs)('div', {
                                            children: [S.intl.string(S.t.kGlQGB), ' ', (0, r.jsx)(m.Z, { className: T.betaTag })]
                                        }),
                                        tag: o.RB0.H1,
                                        children: [
                                            (0, r.jsxs)(o.R94, {
                                                className: T.tabMainDescription,
                                                type: o.geA.DESCRIPTION,
                                                children: [S.intl.format(S.t['+ScrMT'], { discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT }), ' ', S.intl.format(S.t.T6WtKy, { learnMoreURL: v.Z.getArticleURL(E.BhN.SERVER_WEB_PAGES) })]
                                            }),
                                            (() => {
                                                if (!A.isPublished || null == L) return;
                                                let e = P + L;
                                                return (0, r.jsxs)(o.hjN, {
                                                    className: T.noDividerFormSection,
                                                    children: [
                                                        (0, r.jsx)(o.vwX, {
                                                            className: T.formTitle,
                                                            children: S.intl.string(S.t.safBZ2)
                                                        }),
                                                        (0, r.jsx)(d.Z, { value: e }),
                                                        (0, r.jsx)('div', {
                                                            'data-button-hoisted-classname-wrapper': !0,
                                                            className: T.viewPageButton,
                                                            children: (0, r.jsx)(o.zxk, {
                                                                variant: 'primary',
                                                                size: 'sm',
                                                                text: S.intl.string(S.t.NI8iGB),
                                                                onClick: () => window.open(e)
                                                            })
                                                        })
                                                    ]
                                                });
                                            })(),
                                            (0, r.jsx)(o.$i$, { className: T.divider }),
                                            (() => {
                                                if (null != u)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(o.hjN, {
                                                                children: [
                                                                    (0, r.jsx)(o.vwX, {
                                                                        className: T.formTitle,
                                                                        children: S.intl.string(S.t.GjPpSk)
                                                                    }),
                                                                    (0, r.jsx)(o.R94, {
                                                                        type: o.geA.DESCRIPTION,
                                                                        className: T.description,
                                                                        children: S.intl.string(S.t.MVXonJ)
                                                                    })
                                                                ]
                                                            }),
                                                            (0, r.jsx)(C.E, {
                                                                guildId: u.id,
                                                                guildMetadata: A,
                                                                isDisabled: !Z
                                                            }),
                                                            (0, r.jsxs)(o.hjN, {
                                                                className: T.noDividerFormSection,
                                                                children: [
                                                                    (0, r.jsx)(o.vwX, {
                                                                        className: T.formTitle,
                                                                        children: S.intl.string(S.t.oOPlPD)
                                                                    }),
                                                                    (0, r.jsx)(y.Z, {
                                                                        guild: u,
                                                                        guildMetadata: A,
                                                                        disabled: !Z
                                                                    })
                                                                ]
                                                            }),
                                                            (null == Y ? void 0 : Y.category) != null
                                                                ? (0, r.jsx)(o.Text, {
                                                                      color: 'text-danger',
                                                                      className: T.error,
                                                                      variant: 'text-sm/normal',
                                                                      children: Y.category
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, r.jsx)(o.$i$, { className: T.divider }),
                                            (() => {
                                                if (null != u)
                                                    return (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsxs)(o.hjN, {
                                                                className: T.twoColumnFormSection,
                                                                children: [
                                                                    (0, r.jsxs)('div', {
                                                                        children: [
                                                                            (0, r.jsx)(o.vwX, {
                                                                                className: T.formTitle,
                                                                                children: S.intl.string(S.t['8bT/Cg'])
                                                                            }),
                                                                            (0, r.jsx)(o.R94, {
                                                                                type: o.geA.DESCRIPTION,
                                                                                className: T.formDescription,
                                                                                children: S.intl.string(S.t.WCWT7O)
                                                                            }),
                                                                            (0, r.jsxs)(a.zx, {
                                                                                size: a.zx.Sizes.SMALL,
                                                                                color: a.zx.Colors.PRIMARY,
                                                                                children: [
                                                                                    S.intl.string(S.t.yG2pUl),
                                                                                    (0, r.jsx)(h.ZP, {
                                                                                        disabled: !Z,
                                                                                        onChange: K
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, r.jsx)(x.Z, {
                                                                        image: u.discoverySplash,
                                                                        makeURL: (e) =>
                                                                            j.ZP.getGuildDiscoverySplashURL({
                                                                                id: u.id,
                                                                                splash: e,
                                                                                size: 512 * (0, f.x_)()
                                                                            }),
                                                                        disabled: !Z,
                                                                        onChange: K,
                                                                        hint: S.intl.string(S.t.uPvxqK),
                                                                        imageClassName: T.imageUploaderInnerSquare,
                                                                        hideSize: !0
                                                                    })
                                                                ]
                                                            }),
                                                            (null == Y ? void 0 : Y.discovery_splash) != null
                                                                ? (0, r.jsx)(o.Text, {
                                                                      color: 'text-danger',
                                                                      variant: 'text-sm/normal',
                                                                      children: Y.discovery_splash
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, r.jsx)(o.$i$, { className: T.divider }),
                                            (0, r.jsxs)(o.hjN, {
                                                children: [
                                                    (0, r.jsx)(o.vwX, {
                                                        className: T.formTitle,
                                                        children: S.intl.string(S.t['RSfm+v'])
                                                    }),
                                                    (0, r.jsx)(o.R94, {
                                                        className: T.description,
                                                        type: o.geA.DESCRIPTION,
                                                        children: S.intl.string(S.t.IBi6h4)
                                                    }),
                                                    (0, r.jsx)(o.Kx8, {
                                                        value: null !== u.description ? u.description : '',
                                                        placeholder: S.intl.string(S.t.rFa9Ul),
                                                        onChange: (e) => {
                                                            var t;
                                                            _.Z.updateGuild({ description: null != (t = null == e ? void 0 : e.replaceAll('\n', '')) ? t : '' });
                                                        },
                                                        maxLength: 120,
                                                        disabled: !Z
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(o.$i$, { className: T.divider }),
                                            (() => {
                                                if (null == A) return null;
                                                let e =
                                                    0 === A.reasonsToJoin.length
                                                        ? [, , , ,].fill({
                                                              reason: '',
                                                              emoji_name: null
                                                          })
                                                        : A.reasonsToJoin;
                                                return (0, r.jsxs)(o.hjN, {
                                                    children: [
                                                        (0, r.jsx)(o.vwX, {
                                                            className: T.formTitle,
                                                            children: S.intl.string(S.t.vUmXsb)
                                                        }),
                                                        (0, r.jsx)(o.R94, {
                                                            type: o.geA.DESCRIPTION,
                                                            className: T.description,
                                                            children: S.intl.string(S.t.esnBnZ)
                                                        }),
                                                        (0, r.jsx)('div', {
                                                            className: T.reasonToJoin,
                                                            children: (0, r.jsx)(N.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: u.id,
                                                                reasons: e
                                                            })
                                                        }),
                                                        (null == Y ? void 0 : Y.reasons_to_join) != null
                                                            ? (0, r.jsx)(o.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: Y.reasons_to_join
                                                              })
                                                            : null
                                                    ]
                                                });
                                            })(),
                                            (0, r.jsx)(o.$i$, { className: T.divider }),
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsxs)(o.hjN, {
                                                        children: [
                                                            (0, r.jsx)(o.vwX, {
                                                                className: T.formTitle,
                                                                children: S.intl.string(S.t['lu+BmJ'])
                                                            }),
                                                            (0, r.jsx)(o.R94, {
                                                                className: T.description,
                                                                type: o.geA.DESCRIPTION,
                                                                children: S.intl.string(S.t.ozSi8v)
                                                            }),
                                                            (0, r.jsx)(
                                                                o.Kx8,
                                                                {
                                                                    showCharacterCount: !0,
                                                                    className: T.textArea,
                                                                    value: A.about,
                                                                    placeholder: S.intl.string(S.t.TduTbm),
                                                                    onChange: (e) => {
                                                                        (0, p.mA)(u.id, e);
                                                                    },
                                                                    minLength: 300,
                                                                    maxLength: 2400,
                                                                    disabled: !Z,
                                                                    defaultDirty: (null == (e = A.about) ? void 0 : e.length) > 0
                                                                },
                                                                'text-area-'.concat(D)
                                                            )
                                                        ]
                                                    }),
                                                    (null == Y ? void 0 : Y.about) != null
                                                        ? (0, r.jsx)(o.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: Y.about
                                                          })
                                                        : null
                                                ]
                                            }),
                                            (0, r.jsx)(o.$i$, { className: T.divider }),
                                            (0, r.jsxs)(o.hjN, {
                                                children: [
                                                    (0, r.jsx)(o.vwX, {
                                                        className: T.formTitle,
                                                        children: S.intl.string(S.t.V5mNyc)
                                                    }),
                                                    (0, r.jsx)(o.R94, {
                                                        className: T.description,
                                                        type: o.geA.DESCRIPTION,
                                                        children: S.intl.string(S.t.d3kA9f)
                                                    }),
                                                    A.socialLinks.map((e, t) =>
                                                        (0, r.jsxs)(
                                                            'div',
                                                            {
                                                                className: T.socialLinksContainer,
                                                                onMouseOver: () => en(t, !0),
                                                                onFocus: () => en(t, !0),
                                                                onMouseOut: () => en(t, !1),
                                                                onBlur: () => en(t, !1),
                                                                children: [
                                                                    (0, r.jsx)(
                                                                        o.q4e,
                                                                        {
                                                                            className: A.isPublished ? T.socialLinksDropdownMax : T.socialLinksDropdownMin,
                                                                            options: W(H[t]),
                                                                            placeholder: S.intl.string(S.t.xSALIC),
                                                                            value: H[t],
                                                                            onChange: (e) => q(e, t),
                                                                            isDisabled: !Z
                                                                        },
                                                                        'dropdown-' + t
                                                                    ),
                                                                    (0, r.jsx)(
                                                                        a.Is,
                                                                        {
                                                                            value: e,
                                                                            className: A.isPublished ? T.socialLinksMax : T.socialLinksMin,
                                                                            onChange: (e) => J(e, t),
                                                                            placeholder: S.intl.string(S.t.Q6o4pK),
                                                                            maxLength: 150,
                                                                            disabled: !Z
                                                                        },
                                                                        'link-' + t
                                                                    ),
                                                                    k[t]
                                                                        ? (0, r.jsx)(
                                                                              o.owK,
                                                                              {
                                                                                  size: 'custom',
                                                                                  className: A.isPublished ? T.validationButtonMax : T.validationButtonMin,
                                                                                  color: s.Z.unsafe_rawColors.GREEN_230.css,
                                                                                  width: 20,
                                                                                  height: 20
                                                                              },
                                                                              'validation-passed-' + t
                                                                          )
                                                                        : (0, r.jsx)(
                                                                              o.k$p,
                                                                              {
                                                                                  size: 'custom',
                                                                                  className: A.isPublished ? T.validationButtonMax : T.validationButtonMin,
                                                                                  color: s.Z.unsafe_rawColors.RED_400.css,
                                                                                  width: 20,
                                                                                  height: 20
                                                                              },
                                                                              'validation-failed-' + t
                                                                          ),
                                                                    Z &&
                                                                        (0, r.jsx)(
                                                                            c.Z,
                                                                            {
                                                                                className: B[t] ? (A.isPublished ? T.deleteButtonMax : T.deleteButtonMin) : A.isPublished ? T.deleteButtonHiddenMax : T.deleteButtonHiddenMin,
                                                                                onClick: () => Q(t)
                                                                            },
                                                                            'delete-button-' + t
                                                                        )
                                                                ]
                                                            },
                                                            'social-container-' + t
                                                        )
                                                    ),
                                                    (null == Y ? void 0 : Y.social_links) != null
                                                        ? (0, r.jsx)(o.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: Y.social_links
                                                          })
                                                        : null,
                                                    (0, r.jsx)(o.zxk, {
                                                        variant: 'secondary',
                                                        size: 'sm',
                                                        text: S.intl.string(S.t.QvovjY),
                                                        onClick: () => {
                                                            if (A.socialLinks.length < 9) {
                                                                let e = [...A.socialLinks];
                                                                ((0, p.t$)(u.id, e.concat('')), z(H.concat('')));
                                                            }
                                                        },
                                                        disabled: !Z || A.socialLinks.length >= 9
                                                    })
                                                ]
                                            }),
                                            A.isPublished &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(o.$i$, { className: T.divider }),
                                                        (0, r.jsxs)(o.hjN, {
                                                            children: [
                                                                (0, r.jsx)(o.vwX, {
                                                                    className: T.formTitle,
                                                                    children: S.intl.string(S.t['5yF7e3'])
                                                                }),
                                                                (0, r.jsx)(o.R94, {
                                                                    className: T.description,
                                                                    type: o.geA.DESCRIPTION,
                                                                    children: S.intl.string(S.t.eOFvqa)
                                                                }),
                                                                (0, r.jsx)(o.zxk, {
                                                                    variant: 'critical-primary',
                                                                    size: 'sm',
                                                                    text: S.intl.string(S.t['DCHd/P']),
                                                                    onClick: () => X(!1),
                                                                    disabled: !Z
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                            (null == Y ? void 0 : Y.is_published) != null
                                                ? (0, r.jsx)(o.Text, {
                                                      color: 'text-danger',
                                                      variant: 'text-sm/normal',
                                                      children: Y.is_published
                                                  })
                                                : null
                                        ]
                                    }),
                                    !A.isPublished &&
                                        (0, r.jsx)('div', {
                                            className: T.checklist,
                                            children: (0, r.jsx)(g.Z, {
                                                title: S.intl.string(S.t['2kCyn5']),
                                                children: et,
                                                buttonLabel: S.intl.string(S.t.tVK6S0),
                                                buttonCallback: () => X(!0),
                                                disabled: !Z || !G
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
    Z = () => (null == (0, l.e7)([O.Z], () => O.Z.getGuild()) ? null : (0, r.jsx)(R, {}));
