n.d(t, {
    O: () => J,
    Z: () => ee
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(692547),
    u = n(780384),
    m = n(481060),
    h = n(852860),
    g = n(902840),
    x = n(410030),
    p = n(100527),
    _ = n(367907),
    C = n(906732),
    f = n(34586),
    v = n(600164),
    N = n(807582),
    j = n(48217),
    I = n(26323),
    E = n(536442),
    b = n(142497),
    T = n(884858),
    S = n(516129),
    R = n(813197),
    Z = n(208567),
    y = n(650774),
    A = n(496675),
    L = n(594174),
    D = n(768581),
    k = n(823379),
    O = n(63063),
    P = n(434404),
    w = n(999382),
    M = n(157176),
    U = n(760632),
    G = n(578053),
    B = n(715224),
    F = n(203377),
    z = n(981631),
    H = n(30513),
    V = n(486324),
    W = n(200299),
    Y = n(388032),
    K = n(56896),
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
let J = () => {
    let { guild: e, originalGuild: t, submitting: n, errors: l } = (0, c.cj)([w.Z], () => w.Z.getProps()),
        s = r.useMemo(() => (0, F.LG)(l), [l]),
        a = r.useCallback(() => {
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
            (0, k.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), P.Z.saveGuild(e.id, n);
        }, [e, t]),
        o = r.useCallback(() => {
            null != e && P.Z.init(e.id);
        }, [e]);
    return (0, i.jsx)(h.Z, {
        submitting: n,
        errorMessage: s,
        onSave: a,
        onReset: o
    });
};
class $ extends r.PureComponent {
    componentDidMount() {
        if (this.props.subsection === z.KsC.DISPLAY && null != this._displaySectionRef.current) {
            let e = this._displaySectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === z.KsC.INVITE && null != this._inviteSectionRef.current) {
            let e = this._inviteSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === z.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
            let e = this._notificationSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        }
    }
    handleNameChange(e) {
        P.Z.updateGuild({ name: e });
    }
    handleDefaultMessageNotificationsChange(e) {
        let { value: t } = e;
        P.Z.updateGuild({ defaultMessageNotifications: t });
    }
    handleSplashChange(e) {
        P.Z.updateGuild({ splash: e });
    }
    handlePremiumProgressBarEnabledChange(e) {
        P.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        P.Z.updateGuild({ description: e });
    }
    renderBaseSettings() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        return (0, i.jsxs)(v.Z, {
            className: s()(K.__invalid_baseSection),
            children: [
                (0, i.jsxs)(v.Z, {
                    basis: '50%',
                    justify: v.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsxs)(v.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, i.jsx)(Z.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: Y.intl.string(Y.t['6yrpFR']),
                                    makeURL: (t) =>
                                        D.ZP.getGuildIconURL({
                                            id: e.id,
                                            icon: t,
                                            canAnimate: !0,
                                            size: 100
                                        }),
                                    className: s()({
                                        [K.avatarUploader]: n,
                                        [K.avatarUploaderDisabled]: !n
                                    }),
                                    imageClassName: s()(K.avatarUploaderInner, { [K.avatarUploaderInnerEmpty]: null == e.icon })
                                }),
                                null != t.icon
                                    ? (0, i.jsx)('div', {
                                          className: K.iconError,
                                          children: t.icon
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsxs)(v.Z, {
                            direction: v.Z.Direction.VERTICAL,
                            align: v.Z.Align.START,
                            style: { maxWidth: 180 },
                            children: [
                                (0, i.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: K.marginBottom8,
                                    children: Y.intl.string(Y.t['R/9yQE'])
                                }),
                                (0, i.jsxs)(m.zxk, {
                                    look: m.iLD.OUTLINED,
                                    color: m.Ttl.PRIMARY,
                                    disabled: !n,
                                    className: K.marginTop8,
                                    onClick: this.handleUploadImage,
                                    children: [
                                        Y.intl.string(Y.t['MsUY/f']),
                                        (0, i.jsx)(R.ZP, {
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
                (0, i.jsx)(v.Z.Child, {
                    basis: '50%',
                    children: (0, i.jsx)(m.xJW, {
                        title: Y.intl.string(Y.t.dBih7e),
                        className: K.marginBottom20,
                        children: (0, i.jsx)(m.oil, {
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
        return (0, i.jsxs)(m.hjN, {
            className: K.divider,
            children: [
                (0, i.jsxs)(v.Z, {
                    children: [
                        (0, i.jsx)(v.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.xJW, {
                                title: Y.intl.string(Y.t.KuYcnZ),
                                children: (0, i.jsx)(G.g, {
                                    canManageGuild: t,
                                    guildId: e.id,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        }),
                        (0, i.jsx)(v.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.xJW, {
                                title: Y.intl.string(Y.t.brhYaW),
                                children: (0, i.jsx)(U.M, {
                                    canManageGuild: t,
                                    afkTimeout: e.afkTimeout,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsx)(m.R94, {
                    className: K.marginTop8,
                    type: m.geA.DESCRIPTION,
                    children: Y.intl.string(Y.t.ffEOKC)
                })
            ]
        });
    }
    renderJoinNotificationSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, i.jsxs)(m.hjN, {
            className: K.divider,
            children: [
                (0, i.jsx)(m.vwX, { children: Y.intl.string(Y.t.NASFnp) }),
                (0, i.jsx)(G.u, {
                    canManageGuild: t,
                    guildId: e.id,
                    systemChannelId: e.systemChannelId
                }),
                (0, i.jsx)(m.R94, {
                    className: K.marginTop8,
                    type: m.geA.DESCRIPTION,
                    children: Y.intl.string(Y.t.BT9zR0)
                }),
                (0, i.jsx)(B.W, {
                    canManageGuild: t,
                    guild: e,
                    switchClassName: K.marginTop20
                })
            ]
        });
    }
    renderNotificationSection() {
        let { guild: e, canManageGuild: t, guildMemberCount: n } = this.props,
            r = [
                {
                    name: Y.intl.string(Y.t['n/bTaW']),
                    value: z.bL.ALL_MESSAGES,
                    desc: null != n && n >= z.qWG ? Y.intl.string(Y.t['L+P4t7']) : null
                },
                {
                    name: Y.intl.format(Y.t.L2hmY2, {}),
                    value: z.bL.ONLY_MENTIONS
                }
            ];
        return (0, i.jsx)('div', {
            ref: this._notificationSectionRef,
            children: (0, i.jsxs)(m.hjN, {
                className: K.divider,
                children: [
                    (0, i.jsx)(m.vwX, { children: Y.intl.string(Y.t['23TVho']) }),
                    (0, i.jsx)(m.R94, {
                        type: m.geA.DESCRIPTION,
                        className: K.marginBottom20,
                        children: Y.intl.string(Y.t.U4LwWF)
                    }),
                    (0, i.jsx)(m.R94, {
                        type: m.geA.DESCRIPTION,
                        className: K.marginBottom20,
                        children: Y.intl.string(Y.t.xdY0pK)
                    }),
                    (0, i.jsx)(m.FXm, {
                        options: r,
                        value: e.defaultMessageNotifications,
                        disabled: !t,
                        onChange: this.handleDefaultMessageNotificationsChange
                    })
                ]
            })
        });
    }
    renderActivityFeedSection() {
        let { canManageGuild: e, isInventoryFeedEnabled: t } = this.props;
        return void 0 === t
            ? null
            : (0, i.jsx)('div', {
                  ref: this._notificationSectionRef,
                  children: (0, i.jsxs)(m.hjN, {
                      className: K.divider,
                      children: [
                          (0, i.jsx)(m.vwX, { children: Y.intl.string(Y.t['oQ/7BQ']) }),
                          (0, i.jsx)(m.j7V, {
                              className: K.marginBottom0,
                              onChange: this.handleShowActivityFeedToggle,
                              value: t,
                              hideBorder: !0,
                              note: Y.intl.string(Y.t.fZ0qZW),
                              disabled: !e,
                              children: Y.intl.string(Y.t.WompT0)
                          })
                      ]
                  })
              });
    }
    renderSummariesSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, g.Jc)(e, !1)
            ? (0, i.jsx)('div', {
                  children: (0, i.jsx)(m.hjN, {
                      className: K.divider,
                      children: (0, i.jsx)(m.j7V, {
                          className: s()(K.marginTop8, K.marginBottom8),
                          onChange: this.handleConversationSummariesToggle,
                          value: e.hasFeature(z.oNc.SUMMARIES_ENABLED_BY_USER),
                          hideBorder: !0,
                          note: Y.intl.format(Y.t['c6Cy/v'], { helpdeskArticle: O.Z.getArticleURL(z.BhN.CONVERSATION_SUMMARIES) }),
                          disabled: !t,
                          children: (0, i.jsxs)('div', {
                              className: K.badgedItem,
                              children: [
                                  Y.intl.string(Y.t.vmEDQk),
                                  (0, i.jsx)(m.IGR, {
                                      text: Y.intl.string(Y.t.oW0eUV),
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
            n = e.hasFeature(z.oNc.INVITE_SPLASH),
            r = t && n,
            l = (0, i.jsx)(S.Z, {
                image: e.splash,
                makeURL: (t) =>
                    null != t
                        ? D.ZP.getGuildSplashURL({
                              id: e.id,
                              splash: t
                          })
                        : null,
                disabled: !r,
                onChange: this.handleSplashChange,
                hint: Y.intl.string(Y.t.uPvxqK),
                enabled: r,
                maxFileSizeBytes: W.B,
                onFileSizeError: () => (0, T.Z)(W.B)
            });
        return (0, i.jsx)('div', {
            ref: this._inviteSectionRef,
            children: (0, i.jsx)(m.hjN, {
                className: K.divider,
                children: (0, i.jsxs)(v.Z, {
                    basis: '50%',
                    direction: v.Z.Direction.HORIZONTAL,
                    align: v.Z.Justify.START,
                    children: [
                        (0, i.jsxs)(v.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: [
                                (0, i.jsxs)(m.vwX, {
                                    className: K.flexFormTitle,
                                    children: [
                                        (0, i.jsx)('div', { children: Y.intl.string(Y.t.tzGY0t) }),
                                        (0, i.jsx)(N.Z, {
                                            guild: e,
                                            guildFeature: z.oNc.INVITE_SPLASH,
                                            className: K.guildFeatureAvailabilityIndicator,
                                            onClick: this.handleInviteSplashUpsellIndicator
                                        })
                                    ]
                                }),
                                (0, i.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: K.marginBottom8,
                                    children: Y.intl.string(Y.t.F7bbrq)
                                }),
                                (0, i.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    children: Y.intl.format(Y.t.ZYA9PT, { articleURL: O.Z.getArticleURL(z.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                n
                                    ? (0, i.jsxs)(m.zxk, {
                                          disabled: !r,
                                          color: m.Ttl.BRAND,
                                          className: K.marginTop16,
                                          children: [
                                              Y.intl.string(Y.t.yG2pUl),
                                              (0, i.jsx)(R.ZP, {
                                                  disabled: !r,
                                                  onChange: this.handleSplashChange,
                                                  maxFileSizeBytes: W.B,
                                                  onFileSizeError: () => (0, T.Z)(W.B)
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(M.e, {
                                          className: K.marginTop16,
                                          onClick: this.handleInviteSplashUpsellButton
                                      })
                            ]
                        }),
                        (0, i.jsx)(v.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: n
                                ? l
                                : (0, i.jsx)(m.P3F, {
                                      'aria-hidden': !0,
                                      tabIndex: -1,
                                      className: K.upsell,
                                      onClick: this.handleInviteSplashUpsellUpload,
                                      children: l
                                  })
                        })
                    ]
                })
            })
        });
    }
    renderBanner() {
        let { guild: e, canManageGuild: t, analyticsLocations: n } = this.props,
            r = e.hasFeature(z.oNc.BANNER),
            l = e.hasFeature(z.oNc.ANIMATED_BANNER),
            s = r && t,
            a = (0, i.jsx)(S.Z, {
                image: e.banner,
                makeURL: (t) =>
                    null != t
                        ? D.ZP.getGuildBannerURL(
                              {
                                  id: e.id,
                                  banner: t
                              },
                              l
                          )
                        : null,
                disabled: !s,
                onChange: this.handleBannerChange,
                hint: Y.intl.string(Y.t.uPvxqK),
                onOpenImageSelectModal: () =>
                    et({
                        uploadType: V.pC.GUILD_BANNER,
                        maxFileSizeBytes: W.B,
                        onComplete: this.handleBannerChange,
                        analyticsLocation: {
                            page: z.ZY5.GUILD_SETTINGS,
                            section: z.jXE.GUILD_BANNER
                        },
                        analyticsLocations: n
                    }),
                enabled: s
            }),
            o = (0, i.jsx)(m.zxk, {
                disabled: !s,
                color: m.zxk.Colors.BRAND,
                className: K.marginTop16,
                onClick: () =>
                    et({
                        uploadType: V.pC.GUILD_BANNER,
                        maxFileSizeBytes: W.B,
                        onComplete: this.handleBannerChange,
                        analyticsLocation: {
                            page: z.ZY5.GUILD_SETTINGS,
                            section: z.jXE.GUILD_BANNER
                        },
                        analyticsLocations: n
                    }),
                children: Y.intl.string(Y.t.yG2pUl)
            });
        return (0, i.jsx)(m.hjN, {
            className: K.divider,
            children: (0, i.jsxs)(v.Z, {
                basis: '50%',
                direction: v.Z.Direction.HORIZONTAL,
                align: v.Z.Justify.START,
                children: [
                    (0, i.jsxs)(v.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: [
                            (0, i.jsxs)(m.vwX, {
                                className: K.flexFormTitle,
                                children: [
                                    (0, i.jsx)('div', { children: Y.intl.string(Y.t['0r0AzM']) }),
                                    (0, i.jsx)(N.Z, {
                                        guild: e,
                                        guildFeature: z.oNc.BANNER,
                                        className: K.guildFeatureAvailabilityIndicator,
                                        onClick: this.handleBannerUpsellIndicator
                                    })
                                ]
                            }),
                            (0, i.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                className: K.marginBottom8,
                                children: Y.intl.string(Y.t.UfqmIS)
                            }),
                            (0, i.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                children: Y.intl.format(Y.t.vBcWUl, { articleURL: O.Z.getArticleURL(z.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            r
                                ? o
                                : (0, i.jsx)(M.e, {
                                      className: K.marginTop16,
                                      onClick: this.handleBannerUpsellButton
                                  })
                        ]
                    }),
                    (0, i.jsx)(v.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: r
                            ? a
                            : (0, i.jsx)(m.P3F, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  className: K.upsell,
                                  onClick: this.handleBannerUpsellUpload,
                                  children: a
                              })
                    })
                ]
            })
        });
    }
    renderProgressBar() {
        let { guild: e, canManageGuild: t, theme: n } = this.props;
        return (0, i.jsx)(m.hjN, {
            children: (0, i.jsxs)(v.Z, {
                align: v.Z.Align.START,
                children: [
                    (0, i.jsxs)(v.Z, {
                        basis: '50%',
                        direction: v.Z.Direction.VERTICAL,
                        align: v.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(m.j7V, {
                                className: s()(K.marginTop8, K.marginBottom8),
                                onChange: this.handlePremiumProgressBarEnabledChange,
                                value: e.premiumProgressBarEnabled,
                                hideBorder: !0,
                                disabled: !t,
                                children: Y.intl.string(Y.t.Dl4mJS)
                            }),
                            (0, i.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                className: K.marginBottom8,
                                children: Y.intl.string(Y.t.xzHcoa)
                            })
                        ]
                    }),
                    (0, i.jsx)(v.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, i.jsx)('img', {
                            alt: Y.intl.string(Y.t.UOJp5e),
                            src: (0, u.ap)(n) ? X : q,
                            className: K.progressBarImage
                        })
                    })
                ]
            })
        });
    }
    renderDisplaySection() {
        return (0, i.jsx)('div', {
            ref: this._displaySectionRef,
            children: (0, i.jsxs)(m.hjN, {
                title: Y.intl.string(Y.t.lDskxM),
                tag: m.RB0.H1,
                className: K.divider,
                children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
            })
        });
    }
    render() {
        return (0, i.jsxs)(m.hjN, {
            title: Y.intl.string(Y.t.iZmTaG),
            tag: m.RB0.H1,
            children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection()]
        });
    }
    constructor(...e) {
        super(...e),
            Q(this, '_imageInputRef', r.createRef()),
            Q(this, '_displaySectionRef', r.createRef()),
            Q(this, '_inviteSectionRef', r.createRef()),
            Q(this, '_notificationSectionRef', r.createRef()),
            Q(this, 'handleIconChange', (e) => {
                P.Z.updateGuild({ icon: e });
            }),
            Q(this, 'handleOpenImageEditingModal', (e, t) => {
                (0, m.ZDy)(async () => {
                    let { default: r } = await Promise.all([n.e('70687'), n.e('59732'), n.e('70112')]).then(n.bind(n, 73620));
                    return (n) =>
                        (0, i.jsx)(r, {
                            onCrop: this.handleIconChange,
                            imgURI: e,
                            file: t,
                            ...n
                        });
                });
            }),
            Q(this, 'handleUploadImage', (e) => {
                var t;
                e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue());
            }),
            Q(this, 'handleHomeHeaderChange', (e, t) => {
                if (null == e || void 0 === t) {
                    P.Z.updateGuild({ homeHeader: null });
                    return;
                }
                (0, m.ZDy)(async () => {
                    let { default: r } = await Promise.all([n.e('70687'), n.e('59732'), n.e('43334')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, i.jsx)(r, {
                            imgURI: e,
                            file: t,
                            onCrop: (e) => P.Z.updateGuild({ homeHeader: e }),
                            uploadType: V.pC.HOME_HEADER,
                            ...n
                        });
                });
            }),
            Q(this, 'handleBannerChange', (e, t) => {
                let { guild: n, analyticsLocations: i } = this.props,
                    r = null == t ? void 0 : t.type,
                    l = {
                        page: z.ZY5.GUILD_SETTINGS,
                        section: z.jXE.ANIMATED_GUILD_BANNER_UPSELL,
                        object: 'temp'
                    };
                if (null != r && null != e) {
                    if ('image/gif' !== r || n.hasFeature(z.oNc.ANIMATED_BANNER)) {
                        if (!n.hasFeature(z.oNc.BANNER)) {
                            (l.object = z.qAy.IMAGE_CROPPING_MODAL),
                                (0, j.c)({
                                    guild: n,
                                    analyticsLocations: i,
                                    analyticsLocation: l,
                                    banner: e,
                                    isGIF: !1
                                });
                            return;
                        }
                    } else {
                        (l.object = z.qAy.GIF_CROPPING_MODAL),
                            (0, j.c)({
                                guild: n,
                                analyticsLocations: i,
                                analyticsLocation: l,
                                banner: e,
                                isGIF: !0
                            });
                        return;
                    }
                }
                P.Z.updateGuild({ banner: e });
            }),
            Q(this, 'handleShowModalUpsell', (e, t, n, i) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: r, analyticsLocations: l } = this.props;
                (0, _.yw)(z.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: {
                        section: t,
                        object: z.qAy.LEARN_MORE
                    },
                    guild_id: null == r ? void 0 : r.id,
                    location_stack: l
                }),
                    (0, I.Z)({
                        analyticsLocations: l,
                        analyticsSourceLocation: {
                            section: t,
                            object: n,
                            page: z.ZY5.GUILD_SETTINGS
                        },
                        guild: r,
                        perks: i
                    });
            }),
            Q(this, 'handleInviteSplashUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, z.jXE.GUILD_INVITE_BACKGROUND, z.qAy.BADGE, (0, H.o9)());
            }),
            Q(this, 'handleInviteSplashUpsellButton', (e) => {
                this.handleShowModalUpsell(e, z.jXE.GUILD_INVITE_BACKGROUND, z.qAy.BUTTON_CTA, (0, H.o9)());
            }),
            Q(this, 'handleInviteSplashUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, z.jXE.GUILD_INVITE_BACKGROUND, z.qAy.UPLOAD_IMAGE, (0, H.o9)());
            }),
            Q(this, 'handleBannerUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, z.jXE.GUILD_BANNER, z.qAy.BADGE, (0, H.XO)());
            }),
            Q(this, 'handleBannerUpsellButton', (e) => {
                this.handleShowModalUpsell(e, z.jXE.GUILD_BANNER, z.qAy.BUTTON_CTA, (0, H.XO)());
            }),
            Q(this, 'handleBannerUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, z.jXE.GUILD_BANNER, z.qAy.UPLOAD_IMAGE, (0, H.XO)());
            }),
            Q(this, 'handleConversationSummariesToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? n.add(z.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(z.oNc.SUMMARIES_ENABLED_BY_USER), P.Z.updateGuild({ features: n });
            }),
            Q(this, 'handleShowActivityFeedToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? (n.add(z.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(z.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(z.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(z.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), P.Z.updateGuild({ features: n });
            });
    }
}
function ee() {
    let { guild: e, errors: t, submitting: n, subsection: l } = (0, c.cj)([w.Z], () => w.Z.getProps()),
        s = (0, x.ZP)(),
        { analyticsLocations: a } = (0, C.ZP)(p.Z.OVERVIEW);
    r.useEffect(() => {
        (0, b.Kw)(E.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let { canManageGuild: d, isGuildAdmin: u } = (0, c.cj)([A.Z], () => ({
            canManageGuild: A.Z.can(z.Plq.MANAGE_GUILD, e),
            isGuildAdmin: A.Z.can(z.Plq.ADMINISTRATOR, e)
        })),
        m = (0, c.e7)([y.Z], () => y.Z.getMemberCount(null == e ? void 0 : e.id)),
        h = (0, f.E)(e),
        g = (0, c.e7)([L.default], () => L.default.getCurrentUser());
    return (o()(null != g, 'GuildSettingsOverview: currentUser cannot be undefined'), null == e)
        ? null
        : (0, i.jsx)(C.Gt, {
              value: a,
              children: (0, i.jsx)($, {
                  canManageGuild: d,
                  isGuildAdmin: u,
                  subsection: l,
                  guild: e,
                  errors: t,
                  submitting: n,
                  currentUser: g,
                  guildMemberCount: m,
                  isInventoryFeedEnabled: h,
                  theme: s,
                  analyticsLocations: a
              })
          });
}
function et(e) {
    let { uploadType: t, maxFileSizeBytes: r, onComplete: l, showUpsellHeader: s = !0, analyticsLocation: a, analyticsLocations: o } = e;
    (0, m.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('70687'), n.e('55849'), n.e('2813')]).then(n.bind(n, 192277));
        return (n) =>
            (0, i.jsx)(e, {
                maxFileSizeBytes: r,
                onComplete: l,
                uploadType: t,
                showUpsellHeader: s,
                analyticsLocation: a,
                analyticsLocations: o,
                ...n
            });
    });
}
