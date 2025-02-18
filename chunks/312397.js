n.d(t, {
    O: () => eg,
    Z: () => ep
}),
    n(47120),
    n(733860);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    h = n(780384),
    g = n(481060),
    x = n(852860),
    p = n(902840),
    _ = n(410030),
    C = n(100527),
    f = n(367907),
    v = n(906732),
    N = n(740504),
    j = n(933557),
    I = n(471445),
    E = n(34586),
    b = n(600164),
    T = n(807582),
    S = n(48217),
    R = n(26323),
    Z = n(536442),
    y = n(142497),
    A = n(884858),
    L = n(516129),
    D = n(813197),
    k = n(208567),
    O = n(592125),
    P = n(324067),
    w = n(650774),
    M = n(496675),
    U = n(699516),
    G = n(594174),
    B = n(768581),
    F = n(823379),
    z = n(63063),
    H = n(434404),
    V = n(999382),
    W = n(157176),
    Y = n(715224),
    K = n(203377),
    q = n(981631),
    X = n(30513),
    Q = n(486324),
    J = n(200299),
    $ = n(388032),
    ee = n(56896),
    et = n(935653),
    en = n(449874);
function ei(e, t, n) {
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
let er = 'NO_AFK_CHANNEL',
    el = 'NO_SYSTEM_CHANNEL',
    es = ''.concat(60),
    ea = ''.concat(300),
    eo = ''.concat(900),
    ec = ''.concat(1800),
    ed = ''.concat(3600);
function eu(e) {
    return em(e[0]);
}
function em(e) {
    if (null == e) return;
    let { label: t, channel: n, category: r } = e,
        l = (0, I.KS)(n),
        s = null != r ? (0, j.F6)(r, G.default, U.Z) : null;
    return (0, i.jsx)(g.ZZ$, {
        title: t,
        icon: l,
        subtitle: s
    });
}
function eh(e) {
    return {
        value: e.id,
        label: (0, j.F6)(e, G.default, U.Z),
        channel: e,
        category: O.Z.getChannel(e.parent_id)
    };
}
let eg = () => {
    let { guild: e, originalGuild: t, submitting: n, errors: l } = (0, u.cj)([V.Z], () => V.Z.getProps()),
        s = r.useMemo(() => (0, K.LG)(l), [l]),
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
            (0, F.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), H.Z.saveGuild(e.id, n);
        }, [e, t]),
        o = r.useCallback(() => {
            null != e && H.Z.init(e.id);
        }, [e]);
    return (0, i.jsx)(x.Z, {
        submitting: n,
        errorMessage: s,
        onSave: a,
        onReset: o
    });
};
class ex extends r.PureComponent {
    componentDidMount() {
        if (this.props.subsection === q.KsC.DISPLAY && null != this._displaySectionRef.current) {
            let e = this._displaySectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === q.KsC.INVITE && null != this._inviteSectionRef.current) {
            let e = this._inviteSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === q.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
            let e = this._notificationSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        }
    }
    handleNameChange(e) {
        H.Z.updateGuild({ name: e });
    }
    handleAFKChannelChange(e) {
        e === er && (e = null), H.Z.updateGuild({ afkChannelId: e });
    }
    handleAFKTimeoutChange(e) {
        H.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
    }
    handleSystemChannelChange(e) {
        e === el && (e = null), H.Z.updateGuild({ systemChannelId: e });
    }
    handleDefaultMessageNotificationsChange(e) {
        let { value: t } = e;
        H.Z.updateGuild({ defaultMessageNotifications: t });
    }
    handleSplashChange(e) {
        H.Z.updateGuild({ splash: e });
    }
    handlePremiumProgressBarEnabledChange(e) {
        H.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        H.Z.updateGuild({ description: e });
    }
    renderBaseSettings() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        return (0, i.jsxs)(b.Z, {
            className: s()(ee.__invalid_baseSection),
            children: [
                (0, i.jsxs)(b.Z, {
                    basis: '50%',
                    justify: b.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsxs)(b.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, i.jsx)(k.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: $.intl.string($.t['6yrpFR']),
                                    makeURL: (t) =>
                                        B.ZP.getGuildIconURL({
                                            id: e.id,
                                            icon: t,
                                            canAnimate: !0,
                                            size: 100
                                        }),
                                    className: s()({
                                        [ee.avatarUploader]: n,
                                        [ee.avatarUploaderDisabled]: !n
                                    }),
                                    imageClassName: s()(ee.avatarUploaderInner, { [ee.avatarUploaderInnerEmpty]: null == e.icon })
                                }),
                                null != t.icon
                                    ? (0, i.jsx)('div', {
                                          className: ee.iconError,
                                          children: t.icon
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsxs)(b.Z, {
                            direction: b.Z.Direction.VERTICAL,
                            align: b.Z.Align.START,
                            style: { maxWidth: 180 },
                            children: [
                                (0, i.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: ee.marginBottom8,
                                    children: $.intl.string($.t['R/9yQE'])
                                }),
                                (0, i.jsxs)(g.zxk, {
                                    look: g.iLD.OUTLINED,
                                    color: g.Ttl.PRIMARY,
                                    disabled: !n,
                                    className: ee.marginTop8,
                                    onClick: this.handleUploadImage,
                                    children: [
                                        $.intl.string($.t['MsUY/f']),
                                        (0, i.jsx)(D.ZP, {
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
                (0, i.jsx)(b.Z.Child, {
                    basis: '50%',
                    children: (0, i.jsx)(g.xJW, {
                        title: $.intl.string($.t.dBih7e),
                        className: ee.marginBottom20,
                        children: (0, i.jsx)(g.oil, {
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
        var e;
        let { guild: t, canManageGuild: n, channels: r } = this.props,
            l = null != t.afkTimeout ? ''.concat(t.afkTimeout) : null,
            s = null !== (e = t.afkChannelId) && void 0 !== e ? e : er,
            a = [
                {
                    value: es,
                    label: $.intl.formatToPlainString($.t.iXLF9f, { minutes: 1 })
                },
                {
                    value: ea,
                    label: $.intl.formatToPlainString($.t.iXLF9f, { minutes: 5 })
                },
                {
                    value: eo,
                    label: $.intl.formatToPlainString($.t.iXLF9f, { minutes: 15 })
                },
                {
                    value: ec,
                    label: $.intl.formatToPlainString($.t.iXLF9f, { minutes: 30 })
                },
                {
                    value: ed,
                    label: $.intl.formatToPlainString($.t.xCjYxM, { hours: 1 })
                }
            ],
            o = d()(r)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === q.d4z.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return eh(t);
                })
                .value();
        return (
            o.unshift({
                value: er,
                label: $.intl.string($.t.wGiHkJ)
            }),
            (0, i.jsxs)(g.hjN, {
                className: ee.divider,
                children: [
                    (0, i.jsxs)(b.Z, {
                        children: [
                            (0, i.jsx)(b.Z.Child, {
                                basis: '50%',
                                children: (0, i.jsx)(g.xJW, {
                                    title: $.intl.string($.t.KuYcnZ),
                                    children: (0, i.jsx)(g.q4e, {
                                        value: s,
                                        options: o,
                                        onChange: this.handleAFKChannelChange,
                                        isDisabled: !n,
                                        renderOptionLabel: em,
                                        renderOptionValue: eu
                                    })
                                })
                            }),
                            (0, i.jsx)(b.Z.Child, {
                                basis: '50%',
                                children: (0, i.jsx)(g.xJW, {
                                    title: $.intl.string($.t.brhYaW),
                                    children: (0, i.jsx)(g.q4e, {
                                        value: l,
                                        options: a,
                                        isDisabled: s === er || !n,
                                        onChange: this.handleAFKTimeoutChange
                                    })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(g.R94, {
                        className: ee.marginTop8,
                        type: g.geA.DESCRIPTION,
                        children: $.intl.string($.t.ffEOKC)
                    })
                ]
            })
        );
    }
    renderJoinNotificationSection() {
        var e;
        let { guild: t, channels: n, canManageGuild: r } = this.props,
            l = null !== (e = t.systemChannelId) && void 0 !== e ? e : el,
            s = d()(n)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === q.d4z.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return eh(t);
                })
                .value();
        return (
            s.unshift({
                value: el,
                label: $.intl.string($.t.ibUhoa)
            }),
            (0, i.jsxs)(g.hjN, {
                className: ee.divider,
                children: [
                    (0, i.jsx)(g.vwX, { children: $.intl.string($.t.NASFnp) }),
                    (0, i.jsx)(g.q4e, {
                        value: l,
                        options: s,
                        isDisabled: !r,
                        onChange: this.handleSystemChannelChange,
                        renderOptionLabel: em,
                        renderOptionValue: eu
                    }),
                    (0, i.jsx)(g.R94, {
                        className: ee.marginTop8,
                        type: g.geA.DESCRIPTION,
                        children: $.intl.string($.t.BT9zR0)
                    }),
                    (0, i.jsx)(Y.W, {
                        canManageGuild: r,
                        guild: t,
                        switchClassName: ee.marginTop20
                    })
                ]
            })
        );
    }
    renderNotificationSection() {
        let { guild: e, canManageGuild: t, guildMemberCount: n } = this.props,
            r = [
                {
                    name: $.intl.string($.t['n/bTaW']),
                    value: q.bL.ALL_MESSAGES,
                    desc: null != n && n >= q.qWG ? $.intl.string($.t['L+P4t7']) : null
                },
                {
                    name: $.intl.format($.t.L2hmY2, {}),
                    value: q.bL.ONLY_MENTIONS
                }
            ];
        return (0, i.jsx)('div', {
            ref: this._notificationSectionRef,
            children: (0, i.jsxs)(g.hjN, {
                className: ee.divider,
                children: [
                    (0, i.jsx)(g.vwX, { children: $.intl.string($.t['23TVho']) }),
                    (0, i.jsx)(g.R94, {
                        type: g.geA.DESCRIPTION,
                        className: ee.marginBottom20,
                        children: $.intl.string($.t.U4LwWF)
                    }),
                    (0, i.jsx)(g.R94, {
                        type: g.geA.DESCRIPTION,
                        className: ee.marginBottom20,
                        children: $.intl.string($.t.xdY0pK)
                    }),
                    (0, i.jsx)(g.FXm, {
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
                  children: (0, i.jsxs)(g.hjN, {
                      className: ee.divider,
                      children: [
                          (0, i.jsx)(g.vwX, { children: $.intl.string($.t['oQ/7BQ']) }),
                          (0, i.jsx)(g.j7V, {
                              className: ee.marginBottom0,
                              onChange: this.handleShowActivityFeedToggle,
                              value: t,
                              hideBorder: !0,
                              note: $.intl.string($.t.fZ0qZW),
                              disabled: !e,
                              children: $.intl.string($.t.WompT0)
                          })
                      ]
                  })
              });
    }
    renderSummariesSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, p.Jc)(e, !1)
            ? (0, i.jsx)('div', {
                  children: (0, i.jsx)(g.hjN, {
                      className: ee.divider,
                      children: (0, i.jsx)(g.j7V, {
                          className: s()(ee.marginTop8, ee.marginBottom8),
                          onChange: this.handleConversationSummariesToggle,
                          value: e.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER),
                          hideBorder: !0,
                          note: $.intl.format($.t['c6Cy/v'], { helpdeskArticle: z.Z.getArticleURL(q.BhN.CONVERSATION_SUMMARIES) }),
                          disabled: !t,
                          children: (0, i.jsxs)('div', {
                              className: ee.badgedItem,
                              children: [
                                  $.intl.string($.t.vmEDQk),
                                  (0, i.jsx)(g.IGR, {
                                      text: $.intl.string($.t.oW0eUV),
                                      color: m.Z.unsafe_rawColors.BRAND_500.css,
                                      className: ee.__invalid_betaTag
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
            n = e.hasFeature(q.oNc.INVITE_SPLASH),
            r = t && n,
            l = (0, i.jsx)(L.Z, {
                image: e.splash,
                makeURL: (t) =>
                    null != t
                        ? B.ZP.getGuildSplashURL({
                              id: e.id,
                              splash: t
                          })
                        : null,
                disabled: !r,
                onChange: this.handleSplashChange,
                hint: $.intl.string($.t.uPvxqK),
                enabled: r,
                maxFileSizeBytes: J.B,
                onFileSizeError: () => (0, A.Z)(J.B)
            });
        return (0, i.jsx)('div', {
            ref: this._inviteSectionRef,
            children: (0, i.jsx)(g.hjN, {
                className: ee.divider,
                children: (0, i.jsxs)(b.Z, {
                    basis: '50%',
                    direction: b.Z.Direction.HORIZONTAL,
                    align: b.Z.Justify.START,
                    children: [
                        (0, i.jsxs)(b.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: [
                                (0, i.jsxs)(g.vwX, {
                                    className: ee.flexFormTitle,
                                    children: [
                                        (0, i.jsx)('div', { children: $.intl.string($.t.tzGY0t) }),
                                        (0, i.jsx)(T.Z, {
                                            guild: e,
                                            guildFeature: q.oNc.INVITE_SPLASH,
                                            className: ee.guildFeatureAvailabilityIndicator,
                                            onClick: this.handleInviteSplashUpsellIndicator
                                        })
                                    ]
                                }),
                                (0, i.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: ee.marginBottom8,
                                    children: $.intl.string($.t.F7bbrq)
                                }),
                                (0, i.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    children: $.intl.format($.t.ZYA9PT, { articleURL: z.Z.getArticleURL(q.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                n
                                    ? (0, i.jsxs)(g.zxk, {
                                          disabled: !r,
                                          color: g.Ttl.BRAND,
                                          className: ee.marginTop16,
                                          children: [
                                              $.intl.string($.t.yG2pUl),
                                              (0, i.jsx)(D.ZP, {
                                                  disabled: !r,
                                                  onChange: this.handleSplashChange,
                                                  maxFileSizeBytes: J.B,
                                                  onFileSizeError: () => (0, A.Z)(J.B)
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(W.e, {
                                          className: ee.marginTop16,
                                          onClick: this.handleInviteSplashUpsellButton
                                      })
                            ]
                        }),
                        (0, i.jsx)(b.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: n
                                ? l
                                : (0, i.jsx)(g.P3F, {
                                      'aria-hidden': !0,
                                      tabIndex: -1,
                                      className: ee.upsell,
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
            r = e.hasFeature(q.oNc.BANNER),
            l = e.hasFeature(q.oNc.ANIMATED_BANNER),
            s = r && t,
            a = (0, i.jsx)(L.Z, {
                image: e.banner,
                makeURL: (t) =>
                    null != t
                        ? B.ZP.getGuildBannerURL(
                              {
                                  id: e.id,
                                  banner: t
                              },
                              l
                          )
                        : null,
                disabled: !s,
                onChange: this.handleBannerChange,
                hint: $.intl.string($.t.uPvxqK),
                onOpenImageSelectModal: () =>
                    e_({
                        uploadType: Q.pC.GUILD_BANNER,
                        maxFileSizeBytes: J.B,
                        onComplete: this.handleBannerChange,
                        analyticsLocation: {
                            page: q.ZY5.GUILD_SETTINGS,
                            section: q.jXE.GUILD_BANNER
                        },
                        analyticsLocations: n
                    }),
                enabled: s
            }),
            o = (0, i.jsx)(g.zxk, {
                disabled: !s,
                color: g.zxk.Colors.BRAND,
                className: ee.marginTop16,
                onClick: () =>
                    e_({
                        uploadType: Q.pC.GUILD_BANNER,
                        maxFileSizeBytes: J.B,
                        onComplete: this.handleBannerChange,
                        analyticsLocation: {
                            page: q.ZY5.GUILD_SETTINGS,
                            section: q.jXE.GUILD_BANNER
                        },
                        analyticsLocations: n
                    }),
                children: $.intl.string($.t.yG2pUl)
            });
        return (0, i.jsx)(g.hjN, {
            className: ee.divider,
            children: (0, i.jsxs)(b.Z, {
                basis: '50%',
                direction: b.Z.Direction.HORIZONTAL,
                align: b.Z.Justify.START,
                children: [
                    (0, i.jsxs)(b.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: [
                            (0, i.jsxs)(g.vwX, {
                                className: ee.flexFormTitle,
                                children: [
                                    (0, i.jsx)('div', { children: $.intl.string($.t['0r0AzM']) }),
                                    (0, i.jsx)(T.Z, {
                                        guild: e,
                                        guildFeature: q.oNc.BANNER,
                                        className: ee.guildFeatureAvailabilityIndicator,
                                        onClick: this.handleBannerUpsellIndicator
                                    })
                                ]
                            }),
                            (0, i.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                className: ee.marginBottom8,
                                children: $.intl.string($.t.UfqmIS)
                            }),
                            (0, i.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                children: $.intl.format($.t.vBcWUl, { articleURL: z.Z.getArticleURL(q.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            r
                                ? o
                                : (0, i.jsx)(W.e, {
                                      className: ee.marginTop16,
                                      onClick: this.handleBannerUpsellButton
                                  })
                        ]
                    }),
                    (0, i.jsx)(b.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: r
                            ? a
                            : (0, i.jsx)(g.P3F, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  className: ee.upsell,
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
        return (0, i.jsx)(g.hjN, {
            children: (0, i.jsxs)(b.Z, {
                align: b.Z.Align.START,
                children: [
                    (0, i.jsxs)(b.Z, {
                        basis: '50%',
                        direction: b.Z.Direction.VERTICAL,
                        align: b.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(g.j7V, {
                                className: s()(ee.marginTop8, ee.marginBottom8),
                                onChange: this.handlePremiumProgressBarEnabledChange,
                                value: e.premiumProgressBarEnabled,
                                hideBorder: !0,
                                disabled: !t,
                                children: $.intl.string($.t.Dl4mJS)
                            }),
                            (0, i.jsx)(g.R94, {
                                type: g.geA.DESCRIPTION,
                                className: ee.marginBottom8,
                                children: $.intl.string($.t.xzHcoa)
                            })
                        ]
                    }),
                    (0, i.jsx)(b.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, i.jsx)('img', {
                            alt: $.intl.string($.t.UOJp5e),
                            src: (0, h.ap)(n) ? en : et,
                            className: ee.progressBarImage
                        })
                    })
                ]
            })
        });
    }
    renderDisplaySection() {
        return (0, i.jsx)('div', {
            ref: this._displaySectionRef,
            children: (0, i.jsxs)(g.hjN, {
                title: $.intl.string($.t.lDskxM),
                tag: g.RB0.H1,
                className: ee.divider,
                children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
            })
        });
    }
    render() {
        return (0, i.jsxs)(g.hjN, {
            title: $.intl.string($.t.iZmTaG),
            tag: g.RB0.H1,
            children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection()]
        });
    }
    constructor(...e) {
        super(...e),
            ei(this, '_imageInputRef', r.createRef()),
            ei(this, '_displaySectionRef', r.createRef()),
            ei(this, '_inviteSectionRef', r.createRef()),
            ei(this, '_notificationSectionRef', r.createRef()),
            ei(this, 'handleIconChange', (e) => {
                H.Z.updateGuild({ icon: e });
            }),
            ei(this, 'handleOpenImageEditingModal', (e, t) => {
                (0, g.ZDy)(async () => {
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
            ei(this, 'handleUploadImage', (e) => {
                var t;
                e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue());
            }),
            ei(this, 'handleHomeHeaderChange', (e, t) => {
                if (null == e || void 0 === t) {
                    H.Z.updateGuild({ homeHeader: null });
                    return;
                }
                (0, g.ZDy)(async () => {
                    let { default: r } = await Promise.all([n.e('70687'), n.e('59732'), n.e('43334')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, i.jsx)(r, {
                            imgURI: e,
                            file: t,
                            onCrop: (e) => H.Z.updateGuild({ homeHeader: e }),
                            uploadType: Q.pC.HOME_HEADER,
                            ...n
                        });
                });
            }),
            ei(this, 'handleBannerChange', (e, t) => {
                let { guild: n, analyticsLocations: i } = this.props,
                    r = null == t ? void 0 : t.type,
                    l = {
                        page: q.ZY5.GUILD_SETTINGS,
                        section: q.jXE.ANIMATED_GUILD_BANNER_UPSELL,
                        object: 'temp'
                    };
                if (null != r && null != e) {
                    if ('image/gif' !== r || n.hasFeature(q.oNc.ANIMATED_BANNER)) {
                        if (!n.hasFeature(q.oNc.BANNER)) {
                            (l.object = q.qAy.IMAGE_CROPPING_MODAL),
                                (0, S.c)({
                                    guild: n,
                                    analyticsLocations: i,
                                    analyticsLocation: l,
                                    banner: e,
                                    isGIF: !1
                                });
                            return;
                        }
                    } else {
                        (l.object = q.qAy.GIF_CROPPING_MODAL),
                            (0, S.c)({
                                guild: n,
                                analyticsLocations: i,
                                analyticsLocation: l,
                                banner: e,
                                isGIF: !0
                            });
                        return;
                    }
                }
                H.Z.updateGuild({ banner: e });
            }),
            ei(this, 'handleShowModalUpsell', (e, t, n, i) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: r, analyticsLocations: l } = this.props;
                (0, f.yw)(q.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: {
                        section: t,
                        object: q.qAy.LEARN_MORE
                    },
                    guild_id: null == r ? void 0 : r.id,
                    location_stack: l
                }),
                    (0, R.Z)({
                        analyticsLocations: l,
                        analyticsSourceLocation: {
                            section: t,
                            object: n,
                            page: q.ZY5.GUILD_SETTINGS
                        },
                        guild: r,
                        perks: i
                    });
            }),
            ei(this, 'handleInviteSplashUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, q.jXE.GUILD_INVITE_BACKGROUND, q.qAy.BADGE, (0, X.o9)());
            }),
            ei(this, 'handleInviteSplashUpsellButton', (e) => {
                this.handleShowModalUpsell(e, q.jXE.GUILD_INVITE_BACKGROUND, q.qAy.BUTTON_CTA, (0, X.o9)());
            }),
            ei(this, 'handleInviteSplashUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, q.jXE.GUILD_INVITE_BACKGROUND, q.qAy.UPLOAD_IMAGE, (0, X.o9)());
            }),
            ei(this, 'handleBannerUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, q.jXE.GUILD_BANNER, q.qAy.BADGE, (0, X.XO)());
            }),
            ei(this, 'handleBannerUpsellButton', (e) => {
                this.handleShowModalUpsell(e, q.jXE.GUILD_BANNER, q.qAy.BUTTON_CTA, (0, X.XO)());
            }),
            ei(this, 'handleBannerUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, q.jXE.GUILD_BANNER, q.qAy.UPLOAD_IMAGE, (0, X.XO)());
            }),
            ei(this, 'handleConversationSummariesToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? n.add(q.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(q.oNc.SUMMARIES_ENABLED_BY_USER), H.Z.updateGuild({ features: n });
            }),
            ei(this, 'handleShowActivityFeedToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? (n.add(q.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(q.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(q.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(q.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), H.Z.updateGuild({ features: n });
            });
    }
}
function ep() {
    let { guild: e, errors: t, submitting: n, subsection: l } = (0, u.cj)([V.Z], () => V.Z.getProps()),
        s = (0, _.ZP)(),
        { analyticsLocations: a } = (0, v.ZP)(C.Z.OVERVIEW);
    r.useEffect(() => {
        (0, y.Kw)(Z.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let c = (0, u.e7)([P.Z], () => P.Z.getCategories(null == e ? void 0 : e.id)),
        d = r.useMemo(() => (0, N.Z)(c._categories, c), [c]),
        { canManageGuild: m, isGuildAdmin: h } = (0, u.cj)([M.Z], () => ({
            canManageGuild: M.Z.can(q.Plq.MANAGE_GUILD, e),
            isGuildAdmin: M.Z.can(q.Plq.ADMINISTRATOR, e)
        })),
        g = (0, u.e7)([w.Z], () => w.Z.getMemberCount(null == e ? void 0 : e.id)),
        x = (0, E.E)(e),
        p = (0, u.e7)([G.default], () => G.default.getCurrentUser());
    return (o()(null != p, 'GuildSettingsOverview: currentUser cannot be undefined'), null == e)
        ? null
        : (0, i.jsx)(v.Gt, {
              value: a,
              children: (0, i.jsx)(ex, {
                  channels: d,
                  canManageGuild: m,
                  isGuildAdmin: h,
                  subsection: l,
                  guild: e,
                  errors: t,
                  submitting: n,
                  currentUser: p,
                  guildMemberCount: g,
                  isInventoryFeedEnabled: x,
                  theme: s,
                  analyticsLocations: a
              })
          });
}
function e_(e) {
    let { uploadType: t, maxFileSizeBytes: r, onComplete: l, showUpsellHeader: s = !0, analyticsLocation: a, analyticsLocations: o } = e;
    (0, g.ZDy)(async () => {
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
