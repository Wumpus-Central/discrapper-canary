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
    c = n(580685),
    d = n(442837),
    u = n(692547),
    m = n(780384),
    g = n(481060),
    p = n(852860),
    h = n(902840),
    f = n(410030),
    b = n(100527),
    x = n(906732),
    j = n(34586),
    N = n(600164),
    v = n(699553),
    _ = n(65361),
    y = n(845663),
    O = n(536442),
    C = n(142497),
    I = n(345861),
    E = n(208567),
    S = n(496675),
    T = n(594174),
    P = n(768581),
    w = n(823379),
    R = n(63063),
    Z = n(434404),
    D = n(999382),
    A = n(67734),
    k = n(375263),
    W = n(586382),
    L = n(594980),
    M = n(515025),
    G = n(760632),
    U = n(578053),
    B = n(640175),
    F = n(715224),
    z = n(203377),
    H = n(981631),
    V = n(486324),
    K = n(388032),
    Y = n(561169),
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
    let { guild: e, originalGuild: t, submitting: n, errors: s, profile: a, originalProfile: l } = (0, d.cj)([D.Z], () => D.Z.getProps()),
        o = (0, y.K)({
            guildId: null == e ? void 0 : e.id,
            location: 'guild_settings_overview_notice'
        }),
        c = (0, d.e7)([D.Z], () => D.Z.getProfileError()),
        u = i.useMemo(() => {
            var e;
            let t = null == c ? void 0 : c.getAnyErrorMessage();
            return null !== (e = (0, z.LG)(s)) && void 0 !== e ? e : t;
        }, [s, c]),
        m = i.useCallback(async () => {
            if (null == e) return;
            o && null != a && null != l && a.visibility !== l.visibility && (await (0, v.xV)(e.id, a.visibility));
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
            (0, w.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), await Z.Z.saveGuild(e.id, n);
        }, [e, o, a, l, t.features]),
        g = i.useCallback(() => {
            null != e && Z.Z.init(e.id);
        }, [e]);
    return (0, r.jsx)(p.Z, {
        submitting: n,
        errorMessage: u,
        onSave: m,
        onReset: g
    });
};
class ee extends i.PureComponent {
    componentDidMount() {
        if (this.props.subsection === H.KsC.DISPLAY && null != this._displaySectionRef.current) {
            let e = this._displaySectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === H.KsC.INVITE && null != this._inviteSectionRef.current) {
            let e = this._inviteSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === H.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
            let e = this._notificationSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        }
    }
    handleNameChange(e) {
        Z.Z.updateGuild({ name: e });
    }
    handleSplashChange(e) {
        Z.Z.updateGuild({ splash: e });
    }
    handlePremiumProgressBarEnabledChange(e) {
        Z.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        Z.Z.updateGuild({ description: e });
    }
    renderBaseSettings() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        return (0, r.jsxs)(N.Z, {
            className: Y.__invalid_baseSection,
            children: [
                (0, r.jsxs)(N.Z, {
                    basis: '50%',
                    justify: N.Z.Justify.BETWEEN,
                    children: [
                        (0, r.jsxs)(N.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, r.jsx)(E.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: K.NW.string(K.t['6yrpFR']),
                                    makeURL: (t) =>
                                        P.ZP.getGuildIconURL({
                                            id: e.id,
                                            icon: t,
                                            canAnimate: !0,
                                            size: 100
                                        }),
                                    className: a()({
                                        [Y.avatarUploader]: n,
                                        [Y.avatarUploaderDisabled]: !n
                                    }),
                                    imageClassName: a()(Y.avatarUploaderInner, { [Y.avatarUploaderInnerEmpty]: null == e.icon })
                                }),
                                null != t.icon
                                    ? (0, r.jsx)('div', {
                                          className: Y.iconError,
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
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: Y.marginBottom8,
                                    children: K.NW.string(K.t['R/9yQE'])
                                }),
                                (0, r.jsx)(I.Z, {
                                    look: g.iLD.OUTLINED,
                                    color: g.Ttl.PRIMARY,
                                    disabled: !n,
                                    className: Y.marginTop8,
                                    buttonCTA: K.NW.string(K.t['MsUY/f']),
                                    onChange: this.handleOpenImageEditingModal
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(N.Z.Child, {
                    basis: '50%',
                    children: (0, r.jsx)(g.xJW, {
                        title: K.NW.string(K.t.dBih7e),
                        className: Y.marginBottom20,
                        children: (0, r.jsx)(g.oil, {
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
        return (0, r.jsxs)(g.hjN, {
            className: Y.divider,
            children: [
                (0, r.jsxs)(N.Z, {
                    children: [
                        (0, r.jsx)(N.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(g.xJW, {
                                title: K.NW.string(K.t.KuYcnZ),
                                children: (0, r.jsx)(U.g, {
                                    canManageGuild: t,
                                    guildId: e.id,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        }),
                        (0, r.jsx)(N.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(g.xJW, {
                                title: K.NW.string(K.t.brhYaW),
                                children: (0, r.jsx)(G.M, {
                                    canManageGuild: t,
                                    afkTimeout: e.afkTimeout,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsx)(g.R94, {
                    className: Y.marginTop8,
                    type: g.geA.DESCRIPTION,
                    children: K.NW.string(K.t.ffEOKC)
                })
            ]
        });
    }
    renderJoinNotificationSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsxs)(g.hjN, {
            className: Y.divider,
            children: [
                (0, r.jsx)(g.vwX, { children: K.NW.string(K.t.NASFnp) }),
                (0, r.jsx)(U.u, {
                    canManageGuild: t,
                    guildId: e.id,
                    systemChannelId: e.systemChannelId
                }),
                (0, r.jsx)(g.R94, {
                    className: Y.marginTop8,
                    type: g.geA.DESCRIPTION,
                    children: K.NW.string(K.t.BT9zR0)
                }),
                (0, r.jsx)(F.W, {
                    canManageGuild: t,
                    guild: e,
                    switchClassName: Y.marginTop20
                })
            ]
        });
    }
    renderNotificationSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsx)('div', {
            ref: this._notificationSectionRef,
            children: (0, r.jsxs)(g.hjN, {
                className: Y.divider,
                children: [
                    (0, r.jsx)(g.vwX, { children: K.NW.string(K.t['23TVho']) }),
                    (0, r.jsx)(g.R94, {
                        type: g.geA.DESCRIPTION,
                        className: Y.marginBottom20,
                        children: K.NW.string(K.t.U4LwWF)
                    }),
                    (0, r.jsx)(g.R94, {
                        type: g.geA.DESCRIPTION,
                        className: Y.marginBottom20,
                        children: K.NW.string(K.t.xdY0pK)
                    }),
                    (0, r.jsx)(B.z, {
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
                  children: (0, r.jsxs)(g.hjN, {
                      className: Y.divider,
                      children: [
                          (0, r.jsx)(g.vwX, { children: K.NW.string(K.t['oQ/7BQ']) }),
                          (0, r.jsx)(g.j7V, {
                              className: Y.marginBottom0,
                              onChange: this.handleShowActivityFeedToggle,
                              value: t,
                              hideBorder: !0,
                              note: K.NW.string(K.t.fZ0qZW),
                              disabled: !e,
                              children: K.NW.string(K.t.WompT0)
                          })
                      ]
                  })
              });
    }
    renderSummariesSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, h.Jc)(e, !1)
            ? (0, r.jsx)('div', {
                  children: (0, r.jsx)(g.hjN, {
                      className: Y.divider,
                      children: (0, r.jsx)(g.j7V, {
                          className: a()(Y.marginTop8, Y.marginBottom8),
                          onChange: this.handleConversationSummariesToggle,
                          value: e.hasFeature(H.oNc.SUMMARIES_ENABLED_BY_USER),
                          hideBorder: !0,
                          note: K.NW.format(K.t['c6Cy/v'], { helpdeskArticle: R.Z.getArticleURL(H.BhN.CONVERSATION_SUMMARIES) }),
                          disabled: !t,
                          children: (0, r.jsxs)('div', {
                              className: Y.badgedItem,
                              children: [
                                  K.NW.string(K.t.vmEDQk),
                                  (0, r.jsx)(g.IGR, {
                                      text: K.NW.string(K.t.oW0eUV),
                                      color: u.Z.unsafe_rawColors.BRAND_500.css,
                                      className: Y.__invalid_betaTag
                                  })
                              ]
                          })
                      })
                  })
              })
            : null;
    }
    renderServerInviteBGSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsx)('div', {
            ref: this._inviteSectionRef,
            children: (0, r.jsx)(g.hjN, {
                className: Y.divider,
                children: (0, r.jsxs)(N.Z, {
                    basis: '50%',
                    direction: N.Z.Direction.HORIZONTAL,
                    align: N.Z.Justify.START,
                    children: [
                        (0, r.jsxs)(N.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: [
                                (0, r.jsxs)(g.vwX, {
                                    className: Y.flexFormTitle,
                                    children: [(0, r.jsx)('div', { children: K.NW.string(K.t.tzGY0t) }), (0, r.jsx)(W.hH, { guild: e })]
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: Y.marginBottom8,
                                    children: K.NW.string(K.t.F7bbrq)
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    children: K.NW.format(K.t.ZYA9PT, { articleURL: R.Z.getArticleURL(H.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                (0, r.jsx)(L.c, {
                                    guild: e,
                                    canManageGuild: t,
                                    buttonClassName: Y.marginTop16
                                })
                            ]
                        }),
                        (0, r.jsx)(N.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: (0, r.jsx)(M.h, {
                                guild: e,
                                canManageGuild: t
                            })
                        })
                    ]
                })
            })
        });
    }
    renderBanner() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsx)(g.hjN, {
            className: Y.divider,
            children: (0, r.jsxs)(N.Z, {
                basis: '50%',
                direction: N.Z.Direction.HORIZONTAL,
                align: N.Z.Justify.START,
                children: [
                    (0, r.jsxs)(N.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: [
                            (0, r.jsxs)(g.vwX, {
                                className: Y.flexFormTitle,
                                children: [(0, r.jsx)('div', { children: K.NW.string(K.t['0r0AzM']) }), (0, r.jsx)(W.zA, { guild: e })]
                            }),
                            (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                className: Y.marginBottom8,
                                children: K.NW.string(K.t.UfqmIS)
                            }),
                            (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: K.NW.format(K.t.vBcWUl, { articleURL: R.Z.getArticleURL(H.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            (0, r.jsx)(A.F, {
                                guild: e,
                                canManageGuild: t,
                                buttonClassName: Y.marginTop16
                            })
                        ]
                    }),
                    (0, r.jsx)(N.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, r.jsx)(k.O, {
                            guild: e,
                            canManageGuild: t
                        })
                    })
                ]
            })
        });
    }
    renderProgressBar() {
        let { guild: e, canManageGuild: t, theme: n } = this.props;
        return (0, r.jsx)(g.hjN, {
            children: (0, r.jsxs)(N.Z, {
                align: N.Z.Align.START,
                children: [
                    (0, r.jsxs)(N.Z, {
                        basis: '50%',
                        direction: N.Z.Direction.VERTICAL,
                        align: N.Z.Align.STRETCH,
                        children: [
                            (0, r.jsx)(g.j7V, {
                                className: a()(Y.marginTop8, Y.marginBottom8),
                                onChange: this.handlePremiumProgressBarEnabledChange,
                                value: e.premiumProgressBarEnabled,
                                hideBorder: !0,
                                disabled: !t,
                                children: K.NW.string(K.t.Dl4mJS)
                            }),
                            (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                className: Y.marginBottom8,
                                children: K.NW.string(K.t.xzHcoa)
                            })
                        ]
                    }),
                    (0, r.jsx)(N.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, r.jsx)('img', {
                            alt: K.NW.string(K.t.UOJp5e),
                            src: (0, m.ap)(n) ? X : q,
                            className: Y.progressBarImage
                        })
                    })
                ]
            })
        });
    }
    renderDisplaySection() {
        return (0, r.jsx)('div', {
            ref: this._displaySectionRef,
            children: (0, r.jsxs)(g.hjN, {
                title: K.NW.string(K.t.lDskxM),
                tag: g.RB0.H1,
                className: Y.divider,
                children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
            })
        });
    }
    renderProfileVisibilitySection() {
        let { canManageGuild: e, isGuildProfileVisibilityEnabled: t, profile: n } = this.props;
        if (!t || null == n) return null;
        let i = c.Y.VISIBLE.has(n.visibility);
        return (0, r.jsxs)(g.hjN, {
            className: Y.divider,
            children: [
                (0, r.jsx)(g.vwX, { children: K.NW.string(K.t.txdaxc) }),
                (0, r.jsx)(g.j7V, {
                    className: Y.marginBottom0,
                    onChange: this.handleProfileVisibilityChange,
                    value: !i,
                    hideBorder: !0,
                    note: K.NW.string(K.t.yHkqfX),
                    disabled: !e,
                    children: K.NW.string(K.t.fjHWen)
                })
            ]
        });
    }
    render() {
        return (0, r.jsxs)(g.hjN, {
            title: K.NW.string(K.t.iZmTaG),
            tag: g.RB0.H1,
            children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection(), this.renderProfileVisibilitySection()]
        });
    }
    constructor(...e) {
        super(...e),
            Q(this, '_displaySectionRef', i.createRef()),
            Q(this, '_inviteSectionRef', i.createRef()),
            Q(this, '_notificationSectionRef', i.createRef()),
            Q(this, 'handleIconChange', (e) => {
                Z.Z.updateGuild({ icon: e });
            }),
            Q(this, 'handleOpenImageEditingModal', (e, t) => {
                (0, g.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('25005'), n.e('30719')]).then(n.bind(n, 73620));
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
            Q(this, 'handleHomeHeaderChange', (e, t) => {
                if (null == e || void 0 === t) {
                    Z.Z.updateGuild({ homeHeader: null });
                    return;
                }
                (0, g.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('4395')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            J(
                                {
                                    imageUri: e,
                                    file: t,
                                    onCrop: (e) => {
                                        let { imageUri: t } = e;
                                        return Z.Z.updateGuild({ homeHeader: t });
                                    },
                                    uploadType: V.pC.HOME_HEADER
                                },
                                n
                            )
                        );
                });
            }),
            Q(this, 'handleConversationSummariesToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? n.add(H.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(H.oNc.SUMMARIES_ENABLED_BY_USER), Z.Z.updateGuild({ features: n });
            }),
            Q(this, 'handleShowActivityFeedToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? (n.add(H.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(H.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(H.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(H.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), Z.Z.updateGuild({ features: n });
            }),
            Q(this, 'handleProfileVisibilityChange', (e) => {
                let { guild: t } = this.props;
                Z.Z.updateGuildProfile(t.id, { visibility: e ? c.k.RESTRICTED : c.k.PUBLIC });
            });
    }
}
function et() {
    let { guild: e, errors: t, submitting: n, subsection: s, profile: a } = (0, d.cj)([D.Z], () => D.Z.getProps()),
        l = (0, f.ZP)(),
        { analyticsLocations: c } = (0, x.ZP)(b.Z.OVERVIEW);
    i.useEffect(() => {
        (0, C.Kw)(O.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let { canManageGuild: u, isGuildAdmin: m } = (0, d.cj)([S.Z], () => ({
            canManageGuild: S.Z.can(H.Plq.MANAGE_GUILD, e),
            isGuildAdmin: S.Z.can(H.Plq.ADMINISTRATOR, e)
        })),
        g = (0, j.E)(e),
        p = (0, d.e7)([T.default], () => T.default.getCurrentUser()),
        h = null == e ? void 0 : e.id,
        N = (0, y.K)({
            guildId: h,
            location: 'guild_settings_overview'
        }),
        { fetchGuildProfile: v } = (0, _.u)(null == e ? void 0 : e.id);
    return (i.useEffect(() => {
        null != h && N && v();
    }, [h, N, v]),
    o()(null != p, 'GuildSettingsOverview: currentUser cannot be undefined'),
    null == e)
        ? null
        : (0, r.jsx)(x.Gt, {
              value: c,
              children: (0, r.jsx)(ee, {
                  canManageGuild: u,
                  isGuildAdmin: m,
                  subsection: s,
                  guild: e,
                  errors: t,
                  submitting: n,
                  currentUser: p,
                  isInventoryFeedEnabled: g,
                  isGuildProfileVisibilityEnabled: N,
                  profile: a,
                  theme: l,
                  analyticsLocations: c
              })
          });
}
