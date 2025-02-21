n.d(t, {
    O: () => $,
    Z: () => et
}),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(692547),
    u = n(780384),
    m = n(481060),
    p = n(852860),
    g = n(902840),
    h = n(410030),
    f = n(100527),
    b = n(367907),
    x = n(906732),
    j = n(34586),
    N = n(600164),
    v = n(807582),
    _ = n(48217),
    O = n(26323),
    y = n(536442),
    C = n(142497),
    I = n(884858),
    E = n(516129),
    S = n(813197),
    T = n(208567),
    P = n(496675),
    w = n(594174),
    R = n(768581),
    D = n(823379),
    Z = n(63063),
    A = n(434404),
    k = n(999382),
    W = n(157176),
    L = n(760632),
    M = n(578053),
    U = n(640175),
    G = n(715224),
    B = n(203377),
    F = n(981631),
    z = n(30513),
    H = n(486324),
    V = n(200299),
    Y = n(388032),
    K = n(145087),
    q = n(935653),
    X = n(449874);
function Q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Q(e, t, n[t]);
            });
    }
    return e;
}
let $ = () => {
    let { guild: e, originalGuild: t, submitting: n, errors: s } = (0, c.cj)([k.Z], () => k.Z.getProps()),
        a = i.useMemo(() => (0, B.LG)(s), [s]),
        l = i.useCallback(() => {
            if (null == e) return;
            let n = {
                name: e.name,
                icon: e.icon,
                splash: e.splash,
                afkChannelId: e.afkChannelId,
                afkTimeout: e.afkTimeout,
                systemChannelId: e.systemChannelId,
                safetyAlertsChannelId: e.safetyAlertsChannelId,
                verificationLevel: e.verificationLevel,
                defaultMessageNotifications: e.defaultMessageNotifications,
                explicitContentFilter: e.explicitContentFilter,
                description: e.description,
                banner: e.banner,
                systemChannelFlags: e.systemChannelFlags,
                publicUpdatesChannelId: e.publicUpdatesChannelId,
                premiumProgressBarEnabled: e.premiumProgressBarEnabled,
                homeHeader: e.homeHeader,
                profile: e.profile
            };
            (0, D.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), A.Z.saveGuild(e.id, n);
        }, [e, t]),
        o = i.useCallback(() => {
            null != e && A.Z.init(e.id);
        }, [e]);
    return (0, r.jsx)(p.Z, {
        submitting: n,
        errorMessage: a,
        onSave: l,
        onReset: o
    });
};
class ee extends i.PureComponent {
    componentDidMount() {
        if (this.props.subsection === F.KsC.DISPLAY && null != this._displaySectionRef.current) {
            let e = this._displaySectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === F.KsC.INVITE && null != this._inviteSectionRef.current) {
            let e = this._inviteSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === F.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
            let e = this._notificationSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        }
    }
    handleNameChange(e) {
        A.Z.updateGuild({ name: e });
    }
    handleSplashChange(e) {
        A.Z.updateGuild({ splash: e });
    }
    handlePremiumProgressBarEnabledChange(e) {
        A.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        A.Z.updateGuild({ description: e });
    }
    renderBaseSettings() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        return (0, r.jsxs)(N.Z, {
            className: a()(K.__invalid_baseSection),
            children: [
                (0, r.jsxs)(N.Z, {
                    basis: '50%',
                    justify: N.Z.Justify.BETWEEN,
                    children: [
                        (0, r.jsxs)(N.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, r.jsx)(T.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: Y.NW.string(Y.t['6yrpFR']),
                                    makeURL: (t) =>
                                        R.ZP.getGuildIconURL({
                                            id: e.id,
                                            icon: t,
                                            canAnimate: !0,
                                            size: 100
                                        }),
                                    className: a()({
                                        [K.avatarUploader]: n,
                                        [K.avatarUploaderDisabled]: !n
                                    }),
                                    imageClassName: a()(K.avatarUploaderInner, { [K.avatarUploaderInnerEmpty]: null == e.icon })
                                }),
                                null != t.icon
                                    ? (0, r.jsx)('div', {
                                          className: K.iconError,
                                          children: t.icon
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsxs)(N.Z, {
                            direction: N.Z.Direction.VERTICAL,
                            align: N.Z.Align.START,
                            style: { maxWidth: 180 },
                            children: [
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: K.marginBottom8,
                                    children: Y.NW.string(Y.t['R/9yQE'])
                                }),
                                (0, r.jsxs)(m.zxk, {
                                    look: m.iLD.OUTLINED,
                                    color: m.Ttl.PRIMARY,
                                    disabled: !n,
                                    className: K.marginTop8,
                                    onClick: this.handleUploadImage,
                                    children: [
                                        Y.NW.string(Y.t['MsUY/f']),
                                        (0, r.jsx)(S.ZP, {
                                            ref: this._imageInputRef,
                                            onChange: this.handleOpenImageEditingModal,
                                            disabled: !n
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(N.Z.Child, {
                    basis: '50%',
                    children: (0, r.jsx)(m.xJW, {
                        title: Y.NW.string(Y.t.dBih7e),
                        className: K.marginBottom20,
                        children: (0, r.jsx)(m.oil, {
                            type: 'text',
                            disabled: !n,
                            value: e.name,
                            maxLength: 100,
                            onChange: this.handleNameChange,
                            error: t.name
                        })
                    })
                })
            ]
        });
    }
    renderAFKSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsxs)(m.hjN, {
            className: K.divider,
            children: [
                (0, r.jsxs)(N.Z, {
                    children: [
                        (0, r.jsx)(N.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(m.xJW, {
                                title: Y.NW.string(Y.t.KuYcnZ),
                                children: (0, r.jsx)(M.g, {
                                    canManageGuild: t,
                                    guildId: e.id,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        }),
                        (0, r.jsx)(N.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(m.xJW, {
                                title: Y.NW.string(Y.t.brhYaW),
                                children: (0, r.jsx)(L.M, {
                                    canManageGuild: t,
                                    afkTimeout: e.afkTimeout,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsx)(m.R94, {
                    className: K.marginTop8,
                    type: m.geA.DESCRIPTION,
                    children: Y.NW.string(Y.t.ffEOKC)
                })
            ]
        });
    }
    renderJoinNotificationSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsxs)(m.hjN, {
            className: K.divider,
            children: [
                (0, r.jsx)(m.vwX, { children: Y.NW.string(Y.t.NASFnp) }),
                (0, r.jsx)(M.u, {
                    canManageGuild: t,
                    guildId: e.id,
                    systemChannelId: e.systemChannelId
                }),
                (0, r.jsx)(m.R94, {
                    className: K.marginTop8,
                    type: m.geA.DESCRIPTION,
                    children: Y.NW.string(Y.t.BT9zR0)
                }),
                (0, r.jsx)(G.W, {
                    canManageGuild: t,
                    guild: e,
                    switchClassName: K.marginTop20
                })
            ]
        });
    }
    renderNotificationSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsx)('div', {
            ref: this._notificationSectionRef,
            children: (0, r.jsxs)(m.hjN, {
                className: K.divider,
                children: [
                    (0, r.jsx)(m.vwX, { children: Y.NW.string(Y.t['23TVho']) }),
                    (0, r.jsx)(m.R94, {
                        type: m.geA.DESCRIPTION,
                        className: K.marginBottom20,
                        children: Y.NW.string(Y.t.U4LwWF)
                    }),
                    (0, r.jsx)(m.R94, {
                        type: m.geA.DESCRIPTION,
                        className: K.marginBottom20,
                        children: Y.NW.string(Y.t.xdY0pK)
                    }),
                    (0, r.jsx)(U.z, {
                        guildId: e.id,
                        defaultSettings: e.defaultMessageNotifications,
                        canManageGuild: t
                    })
                ]
            })
        });
    }
    renderActivityFeedSection() {
        let { canManageGuild: e, isInventoryFeedEnabled: t } = this.props;
        return void 0 === t
            ? null
            : (0, r.jsx)('div', {
                  ref: this._notificationSectionRef,
                  children: (0, r.jsxs)(m.hjN, {
                      className: K.divider,
                      children: [
                          (0, r.jsx)(m.vwX, { children: Y.NW.string(Y.t['oQ/7BQ']) }),
                          (0, r.jsx)(m.j7V, {
                              className: K.marginBottom0,
                              onChange: this.handleShowActivityFeedToggle,
                              value: t,
                              hideBorder: !0,
                              note: Y.NW.string(Y.t.fZ0qZW),
                              disabled: !e,
                              children: Y.NW.string(Y.t.WompT0)
                          })
                      ]
                  })
              });
    }
    renderSummariesSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, g.Jc)(e, !1)
            ? (0, r.jsx)('div', {
                  children: (0, r.jsx)(m.hjN, {
                      className: K.divider,
                      children: (0, r.jsx)(m.j7V, {
                          className: a()(K.marginTop8, K.marginBottom8),
                          onChange: this.handleConversationSummariesToggle,
                          value: e.hasFeature(F.oNc.SUMMARIES_ENABLED_BY_USER),
                          hideBorder: !0,
                          note: Y.NW.format(Y.t['c6Cy/v'], { helpdeskArticle: Z.Z.getArticleURL(F.BhN.CONVERSATION_SUMMARIES) }),
                          disabled: !t,
                          children: (0, r.jsxs)('div', {
                              className: K.badgedItem,
                              children: [
                                  Y.NW.string(Y.t.vmEDQk),
                                  (0, r.jsx)(m.IGR, {
                                      text: Y.NW.string(Y.t.oW0eUV),
                                      color: d.Z.unsafe_rawColors.BRAND_500.css,
                                      className: K.__invalid_betaTag
                                  })
                              ]
                          })
                      })
                  })
              })
            : null;
    }
    renderServerInviteBGSection() {
        let { guild: e, canManageGuild: t } = this.props,
            n = e.hasFeature(F.oNc.INVITE_SPLASH),
            i = t && n,
            s = (0, r.jsx)(E.Z, {
                image: e.splash,
                makeURL: (t) =>
                    null != t
                        ? R.ZP.getGuildSplashURL({
                              id: e.id,
                              splash: t
                          })
                        : null,
                disabled: !i,
                onChange: this.handleSplashChange,
                hint: Y.NW.string(Y.t.uPvxqK),
                enabled: i,
                maxFileSizeBytes: V.B,
                onFileSizeError: () => (0, I.Z)(V.B)
            });
        return (0, r.jsx)('div', {
            ref: this._inviteSectionRef,
            children: (0, r.jsx)(m.hjN, {
                className: K.divider,
                children: (0, r.jsxs)(N.Z, {
                    basis: '50%',
                    direction: N.Z.Direction.HORIZONTAL,
                    align: N.Z.Justify.START,
                    children: [
                        (0, r.jsxs)(N.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: [
                                (0, r.jsxs)(m.vwX, {
                                    className: K.flexFormTitle,
                                    children: [
                                        (0, r.jsx)('div', { children: Y.NW.string(Y.t.tzGY0t) }),
                                        (0, r.jsx)(v.Z, {
                                            guild: e,
                                            guildFeature: F.oNc.INVITE_SPLASH,
                                            className: K.guildFeatureAvailabilityIndicator,
                                            onClick: this.handleInviteSplashUpsellIndicator
                                        })
                                    ]
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: K.marginBottom8,
                                    children: Y.NW.string(Y.t.F7bbrq)
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    children: Y.NW.format(Y.t.ZYA9PT, { articleURL: Z.Z.getArticleURL(F.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                n
                                    ? (0, r.jsxs)(m.zxk, {
                                          disabled: !i,
                                          color: m.Ttl.BRAND,
                                          className: K.marginTop16,
                                          children: [
                                              Y.NW.string(Y.t.yG2pUl),
                                              (0, r.jsx)(S.ZP, {
                                                  disabled: !i,
                                                  onChange: this.handleSplashChange,
                                                  maxFileSizeBytes: V.B,
                                                  onFileSizeError: () => (0, I.Z)(V.B)
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(W.e, {
                                          className: K.marginTop16,
                                          onClick: this.handleInviteSplashUpsellButton
                                      })
                            ]
                        }),
                        (0, r.jsx)(N.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: n
                                ? s
                                : (0, r.jsx)(m.P3F, {
                                      'aria-hidden': !0,
                                      tabIndex: -1,
                                      className: K.upsell,
                                      onClick: this.handleInviteSplashUpsellUpload,
                                      children: s
                                  })
                        })
                    ]
                })
            })
        });
    }
    renderBanner() {
        let { guild: e, canManageGuild: t, analyticsLocations: n } = this.props,
            i = e.hasFeature(F.oNc.BANNER),
            s = e.hasFeature(F.oNc.ANIMATED_BANNER),
            a = i && t,
            l = (0, r.jsx)(E.Z, {
                image: e.banner,
                makeURL: (t) =>
                    null != t
                        ? R.ZP.getGuildBannerURL(
                              {
                                  id: e.id,
                                  banner: t
                              },
                              s
                          )
                        : null,
                disabled: !a,
                onChange: this.handleBannerChange,
                hint: Y.NW.string(Y.t.uPvxqK),
                onOpenImageSelectModal: () =>
                    en({
                        uploadType: H.pC.GUILD_BANNER,
                        maxFileSizeBytes: V.B,
                        onComplete: (e) => {
                            let { imageUri: t, file: n } = e;
                            return this.handleBannerChange(t, n);
                        },
                        analyticsLocation: {
                            page: F.ZY5.GUILD_SETTINGS,
                            section: F.jXE.GUILD_BANNER
                        },
                        analyticsLocations: n
                    }),
                enabled: a
            }),
            o = (0, r.jsx)(m.zxk, {
                disabled: !a,
                color: m.zxk.Colors.BRAND,
                className: K.marginTop16,
                onClick: () =>
                    en({
                        uploadType: H.pC.GUILD_BANNER,
                        maxFileSizeBytes: V.B,
                        onComplete: (e) => {
                            let { imageUri: t, file: n } = e;
                            return this.handleBannerChange(t, n);
                        },
                        analyticsLocation: {
                            page: F.ZY5.GUILD_SETTINGS,
                            section: F.jXE.GUILD_BANNER
                        },
                        analyticsLocations: n
                    }),
                children: Y.NW.string(Y.t.yG2pUl)
            });
        return (0, r.jsx)(m.hjN, {
            className: K.divider,
            children: (0, r.jsxs)(N.Z, {
                basis: '50%',
                direction: N.Z.Direction.HORIZONTAL,
                align: N.Z.Justify.START,
                children: [
                    (0, r.jsxs)(N.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: [
                            (0, r.jsxs)(m.vwX, {
                                className: K.flexFormTitle,
                                children: [
                                    (0, r.jsx)('div', { children: Y.NW.string(Y.t['0r0AzM']) }),
                                    (0, r.jsx)(v.Z, {
                                        guild: e,
                                        guildFeature: F.oNc.BANNER,
                                        className: K.guildFeatureAvailabilityIndicator,
                                        onClick: this.handleBannerUpsellIndicator
                                    })
                                ]
                            }),
                            (0, r.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                className: K.marginBottom8,
                                children: Y.NW.string(Y.t.UfqmIS)
                            }),
                            (0, r.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                children: Y.NW.format(Y.t.vBcWUl, { articleURL: Z.Z.getArticleURL(F.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            i
                                ? o
                                : (0, r.jsx)(W.e, {
                                      className: K.marginTop16,
                                      onClick: this.handleBannerUpsellButton
                                  })
                        ]
                    }),
                    (0, r.jsx)(N.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: i
                            ? l
                            : (0, r.jsx)(m.P3F, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  className: K.upsell,
                                  onClick: this.handleBannerUpsellUpload,
                                  children: l
                              })
                    })
                ]
            })
        });
    }
    renderProgressBar() {
        let { guild: e, canManageGuild: t, theme: n } = this.props;
        return (0, r.jsx)(m.hjN, {
            children: (0, r.jsxs)(N.Z, {
                align: N.Z.Align.START,
                children: [
                    (0, r.jsxs)(N.Z, {
                        basis: '50%',
                        direction: N.Z.Direction.VERTICAL,
                        align: N.Z.Align.STRETCH,
                        children: [
                            (0, r.jsx)(m.j7V, {
                                className: a()(K.marginTop8, K.marginBottom8),
                                onChange: this.handlePremiumProgressBarEnabledChange,
                                value: e.premiumProgressBarEnabled,
                                hideBorder: !0,
                                disabled: !t,
                                children: Y.NW.string(Y.t.Dl4mJS)
                            }),
                            (0, r.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                className: K.marginBottom8,
                                children: Y.NW.string(Y.t.xzHcoa)
                            })
                        ]
                    }),
                    (0, r.jsx)(N.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, r.jsx)('img', {
                            alt: Y.NW.string(Y.t.UOJp5e),
                            src: (0, u.ap)(n) ? X : q,
                            className: K.progressBarImage
                        })
                    })
                ]
            })
        });
    }
    renderDisplaySection() {
        return (0, r.jsx)('div', {
            ref: this._displaySectionRef,
            children: (0, r.jsxs)(m.hjN, {
                title: Y.NW.string(Y.t.lDskxM),
                tag: m.RB0.H1,
                className: K.divider,
                children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
            })
        });
    }
    render() {
        return (0, r.jsxs)(m.hjN, {
            title: Y.NW.string(Y.t.iZmTaG),
            tag: m.RB0.H1,
            children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection()]
        });
    }
    constructor(...e) {
        super(...e),
            Q(this, '_imageInputRef', i.createRef()),
            Q(this, '_displaySectionRef', i.createRef()),
            Q(this, '_inviteSectionRef', i.createRef()),
            Q(this, '_notificationSectionRef', i.createRef()),
            Q(this, 'handleIconChange', (e) => {
                A.Z.updateGuild({ icon: e });
            }),
            Q(this, 'handleOpenImageEditingModal', (e, t) => {
                (0, m.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('25005'), n.e('29166')]).then(n.bind(n, 73620));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            J(
                                {
                                    onCrop: (e) => {
                                        let { imageUri: t } = e;
                                        return this.handleIconChange(t);
                                    },
                                    imageUri: e,
                                    file: t
                                },
                                n
                            )
                        );
                });
            }),
            Q(this, 'handleUploadImage', (e) => {
                var t;
                e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue());
            }),
            Q(this, 'handleHomeHeaderChange', (e, t) => {
                if (null == e || void 0 === t) {
                    A.Z.updateGuild({ homeHeader: null });
                    return;
                }
                (0, m.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('99786')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            J(
                                {
                                    imageUri: e,
                                    file: t,
                                    onCrop: (e) => {
                                        let { imageUri: t } = e;
                                        return A.Z.updateGuild({ homeHeader: t });
                                    },
                                    uploadType: H.pC.HOME_HEADER
                                },
                                n
                            )
                        );
                });
            }),
            Q(this, 'handleBannerChange', (e, t) => {
                let { guild: n, analyticsLocations: r } = this.props,
                    i = null == t ? void 0 : t.type,
                    s = {
                        page: F.ZY5.GUILD_SETTINGS,
                        section: F.jXE.ANIMATED_GUILD_BANNER_UPSELL,
                        object: 'temp'
                    };
                if (null != i && null != e) {
                    if ('image/gif' !== i || n.hasFeature(F.oNc.ANIMATED_BANNER)) {
                        if (!n.hasFeature(F.oNc.BANNER)) {
                            (s.object = F.qAy.IMAGE_CROPPING_MODAL),
                                (0, _.c)({
                                    guild: n,
                                    analyticsLocations: r,
                                    analyticsLocation: s,
                                    banner: e,
                                    isGIF: !1
                                });
                            return;
                        }
                    } else {
                        (s.object = F.qAy.GIF_CROPPING_MODAL),
                            (0, _.c)({
                                guild: n,
                                analyticsLocations: r,
                                analyticsLocation: s,
                                banner: e,
                                isGIF: !0
                            });
                        return;
                    }
                }
                A.Z.updateGuild({ banner: e });
            }),
            Q(this, 'handleShowModalUpsell', (e, t, n, r) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: i, analyticsLocations: s } = this.props;
                (0, b.yw)(F.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: {
                        section: t,
                        object: F.qAy.LEARN_MORE
                    },
                    guild_id: null == i ? void 0 : i.id,
                    location_stack: s
                }),
                    (0, O.Z)({
                        analyticsLocations: s,
                        analyticsSourceLocation: {
                            section: t,
                            object: n,
                            page: F.ZY5.GUILD_SETTINGS
                        },
                        guild: i,
                        perks: r
                    });
            }),
            Q(this, 'handleInviteSplashUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, F.jXE.GUILD_INVITE_BACKGROUND, F.qAy.BADGE, (0, z.o9)());
            }),
            Q(this, 'handleInviteSplashUpsellButton', (e) => {
                this.handleShowModalUpsell(e, F.jXE.GUILD_INVITE_BACKGROUND, F.qAy.BUTTON_CTA, (0, z.o9)());
            }),
            Q(this, 'handleInviteSplashUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, F.jXE.GUILD_INVITE_BACKGROUND, F.qAy.UPLOAD_IMAGE, (0, z.o9)());
            }),
            Q(this, 'handleBannerUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, F.jXE.GUILD_BANNER, F.qAy.BADGE, (0, z.XO)());
            }),
            Q(this, 'handleBannerUpsellButton', (e) => {
                this.handleShowModalUpsell(e, F.jXE.GUILD_BANNER, F.qAy.BUTTON_CTA, (0, z.XO)());
            }),
            Q(this, 'handleBannerUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, F.jXE.GUILD_BANNER, F.qAy.UPLOAD_IMAGE, (0, z.XO)());
            }),
            Q(this, 'handleConversationSummariesToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? n.add(F.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(F.oNc.SUMMARIES_ENABLED_BY_USER), A.Z.updateGuild({ features: n });
            }),
            Q(this, 'handleShowActivityFeedToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? (n.add(F.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(F.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(F.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(F.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), A.Z.updateGuild({ features: n });
            });
    }
}
function et() {
    let { guild: e, errors: t, submitting: n, subsection: s } = (0, c.cj)([k.Z], () => k.Z.getProps()),
        a = (0, h.ZP)(),
        { analyticsLocations: l } = (0, x.ZP)(f.Z.OVERVIEW);
    i.useEffect(() => {
        (0, C.Kw)(y.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let { canManageGuild: d, isGuildAdmin: u } = (0, c.cj)([P.Z], () => ({
            canManageGuild: P.Z.can(F.Plq.MANAGE_GUILD, e),
            isGuildAdmin: P.Z.can(F.Plq.ADMINISTRATOR, e)
        })),
        m = (0, j.E)(e),
        p = (0, c.e7)([w.default], () => w.default.getCurrentUser());
    return (o()(null != p, 'GuildSettingsOverview: currentUser cannot be undefined'), null == e)
        ? null
        : (0, r.jsx)(x.Gt, {
              value: l,
              children: (0, r.jsx)(ee, {
                  canManageGuild: d,
                  isGuildAdmin: u,
                  subsection: s,
                  guild: e,
                  errors: t,
                  submitting: n,
                  currentUser: p,
                  isInventoryFeedEnabled: m,
                  theme: a,
                  analyticsLocations: l
              })
          });
}
function en(e) {
    let { uploadType: t, maxFileSizeBytes: i, onComplete: s, showUpsellHeader: a = !0, analyticsLocation: l, analyticsLocations: o } = e;
    (0, m.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('91689'), n.e('55849'), n.e('87074')]).then(n.bind(n, 192277));
        return (n) =>
            (0, r.jsx)(
                e,
                J(
                    {
                        maxFileSizeBytes: i,
                        onComplete: s,
                        uploadType: t,
                        showUpsellHeader: a,
                        analyticsLocation: l,
                        analyticsLocations: o
                    },
                    n
                )
            );
    });
}
