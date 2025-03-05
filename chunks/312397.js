n.d(t, {
    O: () => q,
    Z: () => Q
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
    g = n(852860),
    p = n(902840),
    h = n(410030),
    f = n(100527),
    b = n(906732),
    x = n(34586),
    j = n(600164),
    N = n(536442),
    v = n(142497),
    _ = n(345861),
    O = n(208567),
    y = n(496675),
    C = n(594174),
    I = n(768581),
    E = n(823379),
    S = n(63063),
    T = n(434404),
    P = n(999382),
    w = n(67734),
    R = n(375263),
    Z = n(586382),
    D = n(594980),
    A = n(515025),
    k = n(760632),
    W = n(578053),
    L = n(640175),
    M = n(715224),
    G = n(203377),
    U = n(981631),
    B = n(486324),
    F = n(388032),
    z = n(561169),
    H = n(935653),
    V = n(449874);
function Y(e, t, n) {
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
function K(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
let q = () => {
    let { guild: e, originalGuild: t, submitting: n, errors: s } = (0, c.cj)([P.Z], () => P.Z.getProps()),
        a = i.useMemo(() => (0, G.LG)(s), [s]),
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
            (0, E.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), T.Z.saveGuild(e.id, n);
        }, [e, t]),
        o = i.useCallback(() => {
            null != e && T.Z.init(e.id);
        }, [e]);
    return (0, r.jsx)(g.Z, {
        submitting: n,
        errorMessage: a,
        onSave: l,
        onReset: o
    });
};
class X extends i.PureComponent {
    componentDidMount() {
        if (this.props.subsection === U.KsC.DISPLAY && null != this._displaySectionRef.current) {
            let e = this._displaySectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === U.KsC.INVITE && null != this._inviteSectionRef.current) {
            let e = this._inviteSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === U.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
            let e = this._notificationSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        }
    }
    handleNameChange(e) {
        T.Z.updateGuild({ name: e });
    }
    handleSplashChange(e) {
        T.Z.updateGuild({ splash: e });
    }
    handlePremiumProgressBarEnabledChange(e) {
        T.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        T.Z.updateGuild({ description: e });
    }
    renderBaseSettings() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        return (0, r.jsxs)(j.Z, {
            className: z.__invalid_baseSection,
            children: [
                (0, r.jsxs)(j.Z, {
                    basis: '50%',
                    justify: j.Z.Justify.BETWEEN,
                    children: [
                        (0, r.jsxs)(j.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: F.NW.string(F.t['6yrpFR']),
                                    makeURL: (t) =>
                                        I.ZP.getGuildIconURL({
                                            id: e.id,
                                            icon: t,
                                            canAnimate: !0,
                                            size: 100
                                        }),
                                    className: a()({
                                        [z.avatarUploader]: n,
                                        [z.avatarUploaderDisabled]: !n
                                    }),
                                    imageClassName: a()(z.avatarUploaderInner, { [z.avatarUploaderInnerEmpty]: null == e.icon })
                                }),
                                null != t.icon
                                    ? (0, r.jsx)('div', {
                                          className: z.iconError,
                                          children: t.icon
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsxs)(j.Z, {
                            direction: j.Z.Direction.VERTICAL,
                            align: j.Z.Align.START,
                            style: { maxWidth: 180 },
                            children: [
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: z.marginBottom8,
                                    children: F.NW.string(F.t['R/9yQE'])
                                }),
                                (0, r.jsx)(_.Z, {
                                    look: m.iLD.OUTLINED,
                                    color: m.Ttl.PRIMARY,
                                    disabled: !n,
                                    className: z.marginTop8,
                                    buttonCTA: F.NW.string(F.t['MsUY/f']),
                                    onChange: this.handleOpenImageEditingModal
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(j.Z.Child, {
                    basis: '50%',
                    children: (0, r.jsx)(m.xJW, {
                        title: F.NW.string(F.t.dBih7e),
                        className: z.marginBottom20,
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
            className: z.divider,
            children: [
                (0, r.jsxs)(j.Z, {
                    children: [
                        (0, r.jsx)(j.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(m.xJW, {
                                title: F.NW.string(F.t.KuYcnZ),
                                children: (0, r.jsx)(W.g, {
                                    canManageGuild: t,
                                    guildId: e.id,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        }),
                        (0, r.jsx)(j.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(m.xJW, {
                                title: F.NW.string(F.t.brhYaW),
                                children: (0, r.jsx)(k.M, {
                                    canManageGuild: t,
                                    afkTimeout: e.afkTimeout,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsx)(m.R94, {
                    className: z.marginTop8,
                    type: m.geA.DESCRIPTION,
                    children: F.NW.string(F.t.ffEOKC)
                })
            ]
        });
    }
    renderJoinNotificationSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsxs)(m.hjN, {
            className: z.divider,
            children: [
                (0, r.jsx)(m.vwX, { children: F.NW.string(F.t.NASFnp) }),
                (0, r.jsx)(W.u, {
                    canManageGuild: t,
                    guildId: e.id,
                    systemChannelId: e.systemChannelId
                }),
                (0, r.jsx)(m.R94, {
                    className: z.marginTop8,
                    type: m.geA.DESCRIPTION,
                    children: F.NW.string(F.t.BT9zR0)
                }),
                (0, r.jsx)(M.W, {
                    canManageGuild: t,
                    guild: e,
                    switchClassName: z.marginTop20
                })
            ]
        });
    }
    renderNotificationSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsx)('div', {
            ref: this._notificationSectionRef,
            children: (0, r.jsxs)(m.hjN, {
                className: z.divider,
                children: [
                    (0, r.jsx)(m.vwX, { children: F.NW.string(F.t['23TVho']) }),
                    (0, r.jsx)(m.R94, {
                        type: m.geA.DESCRIPTION,
                        className: z.marginBottom20,
                        children: F.NW.string(F.t.U4LwWF)
                    }),
                    (0, r.jsx)(m.R94, {
                        type: m.geA.DESCRIPTION,
                        className: z.marginBottom20,
                        children: F.NW.string(F.t.xdY0pK)
                    }),
                    (0, r.jsx)(L.z, {
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
                      className: z.divider,
                      children: [
                          (0, r.jsx)(m.vwX, { children: F.NW.string(F.t['oQ/7BQ']) }),
                          (0, r.jsx)(m.j7V, {
                              className: z.marginBottom0,
                              onChange: this.handleShowActivityFeedToggle,
                              value: t,
                              hideBorder: !0,
                              note: F.NW.string(F.t.fZ0qZW),
                              disabled: !e,
                              children: F.NW.string(F.t.WompT0)
                          })
                      ]
                  })
              });
    }
    renderSummariesSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, p.Jc)(e, !1)
            ? (0, r.jsx)('div', {
                  children: (0, r.jsx)(m.hjN, {
                      className: z.divider,
                      children: (0, r.jsx)(m.j7V, {
                          className: a()(z.marginTop8, z.marginBottom8),
                          onChange: this.handleConversationSummariesToggle,
                          value: e.hasFeature(U.oNc.SUMMARIES_ENABLED_BY_USER),
                          hideBorder: !0,
                          note: F.NW.format(F.t['c6Cy/v'], { helpdeskArticle: S.Z.getArticleURL(U.BhN.CONVERSATION_SUMMARIES) }),
                          disabled: !t,
                          children: (0, r.jsxs)('div', {
                              className: z.badgedItem,
                              children: [
                                  F.NW.string(F.t.vmEDQk),
                                  (0, r.jsx)(m.IGR, {
                                      text: F.NW.string(F.t.oW0eUV),
                                      color: d.Z.unsafe_rawColors.BRAND_500.css,
                                      className: z.__invalid_betaTag
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
            children: (0, r.jsx)(m.hjN, {
                className: z.divider,
                children: (0, r.jsxs)(j.Z, {
                    basis: '50%',
                    direction: j.Z.Direction.HORIZONTAL,
                    align: j.Z.Justify.START,
                    children: [
                        (0, r.jsxs)(j.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: [
                                (0, r.jsxs)(m.vwX, {
                                    className: z.flexFormTitle,
                                    children: [(0, r.jsx)('div', { children: F.NW.string(F.t.tzGY0t) }), (0, r.jsx)(Z.hH, { guild: e })]
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: z.marginBottom8,
                                    children: F.NW.string(F.t.F7bbrq)
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    children: F.NW.format(F.t.ZYA9PT, { articleURL: S.Z.getArticleURL(U.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                (0, r.jsx)(D.c, {
                                    guild: e,
                                    canManageGuild: t,
                                    buttonClassName: z.marginTop16
                                })
                            ]
                        }),
                        (0, r.jsx)(j.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: (0, r.jsx)(A.h, {
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
        return (0, r.jsx)(m.hjN, {
            className: z.divider,
            children: (0, r.jsxs)(j.Z, {
                basis: '50%',
                direction: j.Z.Direction.HORIZONTAL,
                align: j.Z.Justify.START,
                children: [
                    (0, r.jsxs)(j.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: [
                            (0, r.jsxs)(m.vwX, {
                                className: z.flexFormTitle,
                                children: [(0, r.jsx)('div', { children: F.NW.string(F.t['0r0AzM']) }), (0, r.jsx)(Z.zA, { guild: e })]
                            }),
                            (0, r.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                className: z.marginBottom8,
                                children: F.NW.string(F.t.UfqmIS)
                            }),
                            (0, r.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                children: F.NW.format(F.t.vBcWUl, { articleURL: S.Z.getArticleURL(U.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            (0, r.jsx)(w.F, {
                                guild: e,
                                canManageGuild: t,
                                buttonClassName: z.marginTop16
                            })
                        ]
                    }),
                    (0, r.jsx)(j.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, r.jsx)(R.O, {
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
        return (0, r.jsx)(m.hjN, {
            children: (0, r.jsxs)(j.Z, {
                align: j.Z.Align.START,
                children: [
                    (0, r.jsxs)(j.Z, {
                        basis: '50%',
                        direction: j.Z.Direction.VERTICAL,
                        align: j.Z.Align.STRETCH,
                        children: [
                            (0, r.jsx)(m.j7V, {
                                className: a()(z.marginTop8, z.marginBottom8),
                                onChange: this.handlePremiumProgressBarEnabledChange,
                                value: e.premiumProgressBarEnabled,
                                hideBorder: !0,
                                disabled: !t,
                                children: F.NW.string(F.t.Dl4mJS)
                            }),
                            (0, r.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                className: z.marginBottom8,
                                children: F.NW.string(F.t.xzHcoa)
                            })
                        ]
                    }),
                    (0, r.jsx)(j.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, r.jsx)('img', {
                            alt: F.NW.string(F.t.UOJp5e),
                            src: (0, u.ap)(n) ? V : H,
                            className: z.progressBarImage
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
                title: F.NW.string(F.t.lDskxM),
                tag: m.RB0.H1,
                className: z.divider,
                children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
            })
        });
    }
    render() {
        return (0, r.jsxs)(m.hjN, {
            title: F.NW.string(F.t.iZmTaG),
            tag: m.RB0.H1,
            children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection()]
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, '_displaySectionRef', i.createRef()),
            Y(this, '_inviteSectionRef', i.createRef()),
            Y(this, '_notificationSectionRef', i.createRef()),
            Y(this, 'handleIconChange', (e) => {
                T.Z.updateGuild({ icon: e });
            }),
            Y(this, 'handleOpenImageEditingModal', (e, t) => {
                (0, m.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('25005'), n.e('30719')]).then(n.bind(n, 73620));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            K(
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
            Y(this, 'handleHomeHeaderChange', (e, t) => {
                if (null == e || void 0 === t) {
                    T.Z.updateGuild({ homeHeader: null });
                    return;
                }
                (0, m.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('4395')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            K(
                                {
                                    imageUri: e,
                                    file: t,
                                    onCrop: (e) => {
                                        let { imageUri: t } = e;
                                        return T.Z.updateGuild({ homeHeader: t });
                                    },
                                    uploadType: B.pC.HOME_HEADER
                                },
                                n
                            )
                        );
                });
            }),
            Y(this, 'handleConversationSummariesToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? n.add(U.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(U.oNc.SUMMARIES_ENABLED_BY_USER), T.Z.updateGuild({ features: n });
            }),
            Y(this, 'handleShowActivityFeedToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? (n.add(U.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(U.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(U.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(U.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), T.Z.updateGuild({ features: n });
            });
    }
}
function Q() {
    let { guild: e, errors: t, submitting: n, subsection: s } = (0, c.cj)([P.Z], () => P.Z.getProps()),
        a = (0, h.ZP)(),
        { analyticsLocations: l } = (0, b.ZP)(f.Z.OVERVIEW);
    i.useEffect(() => {
        (0, v.Kw)(N.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let { canManageGuild: d, isGuildAdmin: u } = (0, c.cj)([y.Z], () => ({
            canManageGuild: y.Z.can(U.Plq.MANAGE_GUILD, e),
            isGuildAdmin: y.Z.can(U.Plq.ADMINISTRATOR, e)
        })),
        m = (0, x.E)(e),
        g = (0, c.e7)([C.default], () => C.default.getCurrentUser());
    return (o()(null != g, 'GuildSettingsOverview: currentUser cannot be undefined'), null == e)
        ? null
        : (0, r.jsx)(b.Gt, {
              value: l,
              children: (0, r.jsx)(X, {
                  canManageGuild: d,
                  isGuildAdmin: u,
                  subsection: s,
                  guild: e,
                  errors: t,
                  submitting: n,
                  currentUser: g,
                  isInventoryFeedEnabled: m,
                  theme: a,
                  analyticsLocations: l
              })
          });
}
