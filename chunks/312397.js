n.d(t, {
    O: () => J,
    Z: () => ee
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
    _ = n(699553),
    v = n(65361),
    C = n(536442),
    O = n(142497),
    y = n(345861),
    I = n(208567),
    E = n(496675),
    S = n(594174),
    T = n(768581),
    P = n(823379),
    w = n(63063),
    R = n(434404),
    Z = n(999382),
    D = n(67734),
    A = n(375263),
    k = n(586382),
    W = n(594980),
    L = n(515025),
    M = n(760632),
    G = n(578053),
    U = n(640175),
    B = n(715224),
    F = n(203377),
    z = n(981631),
    H = n(486324),
    V = n(388032),
    Y = n(945745),
    K = n(935653),
    q = n(449874);
function X(e, t, n) {
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
function Q(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
let J = () => {
    let { guild: e, originalGuild: t, submitting: n, errors: s, profile: a, originalProfile: l } = (0, d.cj)([Z.Z], () => Z.Z.getProps()),
        o = (0, d.e7)([Z.Z], () => Z.Z.getProfileError()),
        c = i.useMemo(() => {
            var e;
            let t = null == o ? void 0 : o.getAnyErrorMessage();
            return null != (e = (0, F.LG)(s)) ? e : t;
        }, [s, o]),
        u = i.useCallback(async () => {
            if (null == e) return;
            null != a && null != l && a.visibility !== l.visibility && (await (0, _.xV)(e.id, a.visibility));
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
            (0, P.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), await R.Z.saveGuild(e.id, n);
        }, [e, a, l, t.features]),
        m = i.useCallback(() => {
            null != e && R.Z.init(e.id);
        }, [e]);
    return (0, r.jsx)(p.Z, {
        submitting: n,
        errorMessage: c,
        onSave: u,
        onReset: m
    });
};
class $ extends i.PureComponent {
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
        R.Z.updateGuild({ name: e });
    }
    handleSplashChange(e) {
        R.Z.updateGuild({ splash: e });
    }
    handlePremiumProgressBarEnabledChange(e) {
        R.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        R.Z.updateGuild({ description: e });
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
                                (0, r.jsx)(I.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: V.NW.string(V.t['6yrpFR']),
                                    makeURL: (t) =>
                                        T.ZP.getGuildIconURL({
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
                                    children: V.NW.string(V.t['R/9yQE'])
                                }),
                                (0, r.jsx)(y.Z, {
                                    look: g.iLD.OUTLINED,
                                    color: g.Ttl.PRIMARY,
                                    disabled: !n,
                                    className: Y.marginTop8,
                                    buttonCTA: V.NW.string(V.t['MsUY/f']),
                                    onChange: this.handleOpenImageEditingModal
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(N.Z.Child, {
                    basis: '50%',
                    children: (0, r.jsx)(g.xJW, {
                        title: V.NW.string(V.t.dBih7e),
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
                                title: V.NW.string(V.t.KuYcnZ),
                                children: (0, r.jsx)(G.g, {
                                    canManageGuild: t,
                                    guildId: e.id,
                                    afkChannelId: e.afkChannelId
                                })
                            })
                        }),
                        (0, r.jsx)(N.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(g.xJW, {
                                title: V.NW.string(V.t.brhYaW),
                                children: (0, r.jsx)(M.M, {
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
                    children: V.NW.string(V.t.ffEOKC)
                })
            ]
        });
    }
    renderJoinNotificationSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, r.jsxs)(g.hjN, {
            className: Y.divider,
            children: [
                (0, r.jsx)(g.vwX, { children: V.NW.string(V.t.NASFnp) }),
                (0, r.jsx)(G.u, {
                    canManageGuild: t,
                    guildId: e.id,
                    systemChannelId: e.systemChannelId
                }),
                (0, r.jsx)(g.R94, {
                    className: Y.marginTop8,
                    type: g.geA.DESCRIPTION,
                    children: V.NW.string(V.t.BT9zR0)
                }),
                (0, r.jsx)(B.W, {
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
                    (0, r.jsx)(g.vwX, { children: V.NW.string(V.t['23TVho']) }),
                    (0, r.jsx)(g.R94, {
                        type: g.geA.DESCRIPTION,
                        className: Y.marginBottom20,
                        children: V.NW.string(V.t.U4LwWF)
                    }),
                    (0, r.jsx)(g.R94, {
                        type: g.geA.DESCRIPTION,
                        className: Y.marginBottom20,
                        children: V.NW.string(V.t.xdY0pK)
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
                  children: (0, r.jsxs)(g.hjN, {
                      className: Y.divider,
                      children: [
                          (0, r.jsx)(g.vwX, { children: V.NW.string(V.t['oQ/7BQ']) }),
                          (0, r.jsx)(g.j7V, {
                              className: Y.marginBottom0,
                              onChange: this.handleShowActivityFeedToggle,
                              value: t,
                              hideBorder: !0,
                              note: V.NW.string(V.t.fZ0qZW),
                              disabled: !e,
                              children: V.NW.string(V.t.WompT0)
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
                          value: e.hasFeature(z.oNc.SUMMARIES_ENABLED_BY_USER),
                          hideBorder: !0,
                          note: V.NW.format(V.t['c6Cy/v'], { helpdeskArticle: w.Z.getArticleURL(z.BhN.CONVERSATION_SUMMARIES) }),
                          disabled: !t,
                          children: (0, r.jsxs)('div', {
                              className: Y.badgedItem,
                              children: [
                                  V.NW.string(V.t.vmEDQk),
                                  (0, r.jsx)(g.IGR, {
                                      text: V.NW.string(V.t.oW0eUV),
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
                                    children: [(0, r.jsx)('div', { children: V.NW.string(V.t.tzGY0t) }), (0, r.jsx)(k.hH, { guild: e })]
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: Y.marginBottom8,
                                    children: V.NW.string(V.t.F7bbrq)
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    children: V.NW.format(V.t.ZYA9PT, { articleURL: w.Z.getArticleURL(z.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                (0, r.jsx)(W.c, {
                                    guild: e,
                                    canManageGuild: t,
                                    buttonClassName: Y.marginTop16
                                })
                            ]
                        }),
                        (0, r.jsx)(N.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: (0, r.jsx)(L.h, {
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
                                children: [(0, r.jsx)('div', { children: V.NW.string(V.t['0r0AzM']) }), (0, r.jsx)(k.zA, { guild: e })]
                            }),
                            (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                className: Y.marginBottom8,
                                children: V.NW.string(V.t.UfqmIS)
                            }),
                            (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: V.NW.format(V.t.vBcWUl, { articleURL: w.Z.getArticleURL(z.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            (0, r.jsx)(D.F, {
                                guild: e,
                                canManageGuild: t,
                                buttonClassName: Y.marginTop16
                            })
                        ]
                    }),
                    (0, r.jsx)(N.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, r.jsx)(A.O, {
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
                                children: V.NW.string(V.t.Dl4mJS)
                            }),
                            (0, r.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                className: Y.marginBottom8,
                                children: V.NW.string(V.t.xzHcoa)
                            })
                        ]
                    }),
                    (0, r.jsx)(N.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, r.jsx)('img', {
                            alt: V.NW.string(V.t.UOJp5e),
                            src: (0, m.ap)(n) ? q : K,
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
                title: V.NW.string(V.t.lDskxM),
                tag: g.RB0.H1,
                className: Y.divider,
                children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
            })
        });
    }
    renderProfileVisibilitySection() {
        let { canManageGuild: e, profile: t } = this.props;
        if (null == t) return null;
        let n = c.Y.VISIBLE.has(t.visibility);
        return (0, r.jsxs)(g.hjN, {
            className: Y.divider,
            children: [
                (0, r.jsx)(g.vwX, { children: V.NW.string(V.t.txdaxc) }),
                (0, r.jsx)(g.j7V, {
                    className: Y.marginBottom0,
                    onChange: this.handleProfileVisibilityChange,
                    value: !n,
                    hideBorder: !0,
                    note: V.NW.string(V.t.yHkqfX),
                    disabled: !e,
                    children: V.NW.string(V.t.fjHWen)
                })
            ]
        });
    }
    render() {
        return (0, r.jsxs)(g.hjN, {
            title: V.NW.string(V.t.iZmTaG),
            tag: g.RB0.H1,
            children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection(), this.renderProfileVisibilitySection()]
        });
    }
    constructor(...e) {
        super(...e),
            X(this, '_displaySectionRef', i.createRef()),
            X(this, '_inviteSectionRef', i.createRef()),
            X(this, '_notificationSectionRef', i.createRef()),
            X(this, 'handleIconChange', (e) => {
                R.Z.updateGuild({ icon: e });
            }),
            X(this, 'handleOpenImageEditingModal', (e, t) => {
                (0, g.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('25005'), n.e('64989')]).then(n.bind(n, 73620));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            Q(
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
            X(this, 'handleHomeHeaderChange', (e, t) => {
                if (null == e || void 0 === t) return void R.Z.updateGuild({ homeHeader: null });
                (0, g.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('77942')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            Q(
                                {
                                    imageUri: e,
                                    file: t,
                                    onCrop: (e) => {
                                        let { imageUri: t } = e;
                                        return R.Z.updateGuild({ homeHeader: t });
                                    },
                                    uploadType: H.pC.HOME_HEADER
                                },
                                n
                            )
                        );
                });
            }),
            X(this, 'handleConversationSummariesToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? n.add(z.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(z.oNc.SUMMARIES_ENABLED_BY_USER), R.Z.updateGuild({ features: n });
            }),
            X(this, 'handleShowActivityFeedToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? (n.add(z.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(z.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(z.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(z.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), R.Z.updateGuild({ features: n });
            }),
            X(this, 'handleProfileVisibilityChange', (e) => {
                let { guild: t } = this.props;
                R.Z.updateGuildProfile(t.id, { visibility: e ? c.k.RESTRICTED : c.k.PUBLIC });
            });
    }
}
function ee() {
    let { guild: e, errors: t, submitting: n, subsection: s, profile: a } = (0, d.cj)([Z.Z], () => Z.Z.getProps()),
        l = (0, f.ZP)(),
        { analyticsLocations: c } = (0, x.ZP)(b.Z.OVERVIEW);
    i.useEffect(() => {
        (0, O.Kw)(C.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let { canManageGuild: u, isGuildAdmin: m } = (0, d.cj)([E.Z], () => ({
            canManageGuild: E.Z.can(z.Plq.MANAGE_GUILD, e),
            isGuildAdmin: E.Z.can(z.Plq.ADMINISTRATOR, e)
        })),
        g = (0, j.E)(e),
        p = (0, d.e7)([S.default], () => S.default.getCurrentUser()),
        h = null == e ? void 0 : e.id,
        { fetchGuildProfile: N } = (0, v.u)(null == e ? void 0 : e.id);
    return (i.useEffect(() => {
        null != h && N();
    }, [h, N]),
    o()(null != p, 'GuildSettingsOverview: currentUser cannot be undefined'),
    null == e)
        ? null
        : (0, r.jsx)(x.Gt, {
              value: c,
              children: (0, r.jsx)($, {
                  canManageGuild: u,
                  isGuildAdmin: m,
                  subsection: s,
                  guild: e,
                  errors: t,
                  submitting: n,
                  currentUser: p,
                  isInventoryFeedEnabled: g,
                  profile: a,
                  theme: l,
                  analyticsLocations: c
              })
          });
}
