n.d(t, {
    O: function () {
        return ef;
    },
    Z: function () {
        return ev;
    }
}),
    n(47120),
    n(733860);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    h = n(780384),
    g = n(481060),
    x = n(852860),
    p = n(902840),
    f = n(410030),
    C = n(100527),
    v = n(367907),
    _ = n(906732),
    I = n(740504),
    N = n(933557),
    T = n(471445),
    j = n(890477),
    b = n(34586),
    S = n(600164),
    E = n(688465),
    R = n(807582),
    y = n(48217),
    A = n(26323),
    Z = n(35125),
    L = n(536442),
    D = n(142497),
    O = n(884858),
    P = n(516129),
    k = n(813197),
    M = n(208567),
    w = n(592125),
    B = n(324067),
    U = n(650774),
    G = n(496675),
    F = n(699516),
    H = n(594174),
    z = n(709586),
    W = n(768581),
    V = n(630388),
    Y = n(823379),
    K = n(63063),
    q = n(434404),
    X = n(999382),
    Q = n(203377),
    J = n(981631),
    $ = n(30513),
    ee = n(486324),
    et = n(200299),
    en = n(388032),
    ei = n(953414),
    er = n(935653),
    el = n(449874);
function ea(e, t, n) {
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
let es = 'NO_AFK_CHANNEL',
    eo = 'NO_SYSTEM_CHANNEL',
    ec = ''.concat(60),
    ed = ''.concat(300),
    eu = ''.concat(900),
    em = ''.concat(1800),
    eh = ''.concat(3600);
function eg(e) {
    return ex(e[0]);
}
function ex(e) {
    if (null == e) return;
    let { label: t, channel: n, category: r } = e,
        l = (0, T.KS)(n),
        a = null != r ? (0, N.F6)(r, H.default, F.Z) : null;
    return (0, i.jsx)(g.IconSelectOption, {
        title: t,
        icon: l,
        subtitle: a
    });
}
function ep(e) {
    return {
        value: e.id,
        label: (0, N.F6)(e, H.default, F.Z),
        channel: e,
        category: w.Z.getChannel(e.parent_id)
    };
}
let ef = () => {
    let { guild: e, originalGuild: t, submitting: n, errors: l } = (0, u.cj)([X.Z], () => X.Z.getProps()),
        a = r.useMemo(() => (0, Q.LG)(l), [l]),
        s = r.useCallback(() => {
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
            !(0, Y.OL)(new Set(e.features), new Set(t.features)) && (n.features = e.features), q.Z.saveGuild(e.id, n);
        }, [e, t]),
        o = r.useCallback(() => {
            if (null != e) q.Z.init(e.id);
        }, [e]);
    return (0, i.jsx)(x.Z, {
        submitting: n,
        errorMessage: a,
        onSave: s,
        onReset: o
    });
};
class eC extends r.PureComponent {
    componentDidMount() {
        if (this.props.subsection === J.KsC.DISPLAY && null != this._displaySectionRef.current) {
            let e = this._displaySectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === J.KsC.INVITE && null != this._inviteSectionRef.current) {
            let e = this._inviteSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === J.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
            let e = this._notificationSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        }
    }
    handleNameChange(e) {
        q.Z.updateGuild({ name: e });
    }
    handleAFKChannelChange(e) {
        e === es && (e = null), q.Z.updateGuild({ afkChannelId: e });
    }
    handleAFKTimeoutChange(e) {
        q.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
    }
    handleSystemChannelChange(e) {
        e === eo && (e = null), q.Z.updateGuild({ systemChannelId: e });
    }
    handleDefaultMessageNotificationsChange(e) {
        let { value: t } = e;
        q.Z.updateGuild({ defaultMessageNotifications: t });
    }
    handleSplashChange(e) {
        q.Z.updateGuild({ splash: e });
    }
    handleSystemChannelFlagsChange(e, t) {
        let { guild: n } = this.props,
            i = (0, V.mB)(n.systemChannelFlags, e, t);
        q.Z.updateGuild({ systemChannelFlags: i });
    }
    handlePremiumProgressBarEnabledChange(e) {
        q.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        q.Z.updateGuild({ description: e });
    }
    renderBaseSettings() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        return (0, i.jsxs)(S.Z, {
            className: a()(ei.__invalid_baseSection),
            children: [
                (0, i.jsxs)(S.Z, {
                    basis: '50%',
                    justify: S.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsxs)(S.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, i.jsx)(M.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: en.intl.string(en.t['6yrpFR']),
                                    makeURL: (t) =>
                                        W.ZP.getGuildIconURL({
                                            id: e.id,
                                            icon: t,
                                            canAnimate: !0,
                                            size: 100
                                        }),
                                    className: a()({
                                        [ei.avatarUploader]: n,
                                        [ei.avatarUploaderDisabled]: !n
                                    }),
                                    imageClassName: a()(ei.avatarUploaderInner, { [ei.avatarUploaderInnerEmpty]: null == e.icon })
                                }),
                                null != t.icon
                                    ? (0, i.jsx)('div', {
                                          className: ei.iconError,
                                          children: t.icon
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsxs)(S.Z, {
                            direction: S.Z.Direction.VERTICAL,
                            align: S.Z.Align.START,
                            style: { maxWidth: 180 },
                            children: [
                                (0, i.jsx)(g.FormText, {
                                    type: g.FormTextTypes.DESCRIPTION,
                                    className: ei.marginBottom8,
                                    children: en.intl.string(en.t['R/9yQE'])
                                }),
                                (0, i.jsxs)(g.Button, {
                                    look: g.ButtonLooks.OUTLINED,
                                    color: g.ButtonColors.PRIMARY,
                                    disabled: !n,
                                    className: ei.marginTop8,
                                    onClick: this.handleUploadImage,
                                    children: [
                                        en.intl.string(en.t['MsUY/f']),
                                        (0, i.jsx)(k.ZP, {
                                            ref: this._imageInputRef,
                                            onChange: this.handleOpenImageCroppingModal,
                                            disabled: !n
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(S.Z.Child, {
                    basis: '50%',
                    children: (0, i.jsx)(g.FormItem, {
                        title: en.intl.string(en.t.dBih7e),
                        className: ei.marginBottom20,
                        children: (0, i.jsx)(g.TextInput, {
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
            a = null !== (e = t.afkChannelId) && void 0 !== e ? e : es,
            s = [
                {
                    value: ec,
                    label: en.intl.formatToPlainString(en.t.iXLF9f, { minutes: 1 })
                },
                {
                    value: ed,
                    label: en.intl.formatToPlainString(en.t.iXLF9f, { minutes: 5 })
                },
                {
                    value: eu,
                    label: en.intl.formatToPlainString(en.t.iXLF9f, { minutes: 15 })
                },
                {
                    value: em,
                    label: en.intl.formatToPlainString(en.t.iXLF9f, { minutes: 30 })
                },
                {
                    value: eh,
                    label: en.intl.formatToPlainString(en.t.xCjYxM, { hours: 1 })
                }
            ],
            o = d()(r)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === J.d4z.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return ep(t);
                })
                .value();
        return (
            o.unshift({
                value: es,
                label: en.intl.string(en.t.wGiHkJ)
            }),
            (0, i.jsxs)(g.FormSection, {
                className: ei.divider,
                children: [
                    (0, i.jsxs)(S.Z, {
                        children: [
                            (0, i.jsx)(S.Z.Child, {
                                basis: '50%',
                                children: (0, i.jsx)(g.FormItem, {
                                    title: en.intl.string(en.t.KuYcnZ),
                                    children: (0, i.jsx)(g.SingleSelect, {
                                        value: a,
                                        options: o,
                                        onChange: this.handleAFKChannelChange,
                                        isDisabled: !n,
                                        renderOptionLabel: ex,
                                        renderOptionValue: eg
                                    })
                                })
                            }),
                            (0, i.jsx)(S.Z.Child, {
                                basis: '50%',
                                children: (0, i.jsx)(g.FormItem, {
                                    title: en.intl.string(en.t.brhYaW),
                                    children: (0, i.jsx)(g.SingleSelect, {
                                        value: l,
                                        options: s,
                                        isDisabled: a === es || !n,
                                        onChange: this.handleAFKTimeoutChange
                                    })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(g.FormText, {
                        className: ei.marginTop8,
                        type: g.FormTextTypes.DESCRIPTION,
                        children: en.intl.string(en.t.ffEOKC)
                    })
                ]
            })
        );
    }
    renderJoinNotificationSection() {
        var e;
        let { guild: t, channels: n, canManageGuild: r, eligibleForDeadchatPrompt: l } = this.props,
            s = null !== (e = t.systemChannelId) && void 0 !== e ? e : eo,
            o = d()(n)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === J.d4z.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return ep(t);
                })
                .value();
        o.unshift({
            value: eo,
            label: en.intl.string(en.t.ibUhoa)
        });
        let c = (0, Z.eI)(t),
            u = c || (0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
            m = c || (0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        return (0, i.jsxs)(g.FormSection, {
            className: ei.divider,
            children: [
                (0, i.jsx)(g.FormTitle, { children: en.intl.string(en.t.NASFnp) }),
                (0, i.jsx)(g.SingleSelect, {
                    value: s,
                    options: o,
                    isDisabled: !r,
                    onChange: this.handleSystemChannelChange,
                    renderOptionLabel: ex,
                    renderOptionValue: eg
                }),
                (0, i.jsx)(g.FormText, {
                    className: ei.marginTop8,
                    type: g.FormTextTypes.DESCRIPTION,
                    children: en.intl.string(en.t.BT9zR0)
                }),
                (0, i.jsx)(g.FormSwitch, {
                    className: ei.marginTop20,
                    onChange: this.handleShowJoinsChange,
                    value: !(0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !r || s === eo,
                    children: en.intl.string(en.t['+f0bXV'])
                }),
                (0, i.jsx)(g.FormSwitch, {
                    className: a()(ei.__invalid_marginReset, ei.marginTop20),
                    onChange: this.handleShowJoinRepliesChange,
                    value: !(0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                    hideBorder: !0,
                    disabled: !r || s === eo,
                    children: en.intl.string(en.t['72k7jY'])
                }),
                (0, i.jsx)(g.FormSwitch, {
                    className: a()(ei.__invalid_marginReset, ei.marginTop20),
                    onChange: this.handleShowSubscriptionsChange,
                    value: !(0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                    hideBorder: !0,
                    disabled: !r || s === eo,
                    children: en.intl.string(en.t['2L8NCA'])
                }),
                (0, i.jsx)(g.FormSwitch, {
                    className: a()(ei.__invalid_marginReset, ei.marginTop20),
                    onChange: this.handleShowGuildRemindersChange,
                    value: !(0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !r || s === eo,
                    children: en.intl.string(en.t['NvnW+f'])
                }),
                u &&
                    (0, i.jsx)(g.FormSwitch, {
                        className: a()(ei.__invalid_marginReset, ei.marginTop20),
                        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessages,
                        value: !(0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                        hideBorder: !0,
                        disabled: !r || s === eo,
                        children: en.intl.string(en.t['54n19f'])
                    }),
                m &&
                    (0, i.jsx)(g.FormSwitch, {
                        className: a()(ei.__invalid_marginReset, ei.marginTop20),
                        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange,
                        value: !(0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
                        hideBorder: !0,
                        disabled: !r || s === eo,
                        children: en.intl.string(en.t.IhF5d3)
                    }),
                l &&
                    (0, i.jsx)(g.FormSwitch, {
                        className: a()(ei.__invalid_marginReset, ei.marginTop20),
                        onChange: this.handleShowDeadchatPromptMessageChange,
                        value: !(0, V.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                        hideBorder: !0,
                        disabled: !r || s === eo,
                        children: (0, i.jsxs)('div', {
                            className: ei.flexRow,
                            children: [en.intl.string(en.t['3yOX19']), (0, i.jsx)(E.Z, {})]
                        })
                    })
            ]
        });
    }
    renderNotificationSection() {
        let { guild: e, canManageGuild: t, guildMemberCount: n } = this.props,
            r = [
                {
                    name: en.intl.string(en.t['n/bTaW']),
                    value: J.bL.ALL_MESSAGES,
                    desc: null != n && n >= J.qWG ? en.intl.string(en.t['L+P4t7']) : null
                },
                {
                    name: en.intl.format(en.t.L2hmY2, {}),
                    value: J.bL.ONLY_MENTIONS
                }
            ];
        return (0, i.jsx)('div', {
            ref: this._notificationSectionRef,
            children: (0, i.jsxs)(g.FormSection, {
                className: ei.divider,
                children: [
                    (0, i.jsx)(g.FormTitle, { children: en.intl.string(en.t['23TVho']) }),
                    (0, i.jsx)(g.FormText, {
                        type: g.FormTextTypes.DESCRIPTION,
                        className: ei.marginBottom20,
                        children: en.intl.string(en.t.U4LwWF)
                    }),
                    (0, i.jsx)(g.FormText, {
                        type: g.FormTextTypes.DESCRIPTION,
                        className: ei.marginBottom20,
                        children: en.intl.string(en.t.xdY0pK)
                    }),
                    (0, i.jsx)(g.RadioGroup, {
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
                  children: (0, i.jsxs)(g.FormSection, {
                      className: ei.divider,
                      children: [
                          (0, i.jsx)(g.FormTitle, { children: en.intl.string(en.t['oQ/7BQ']) }),
                          (0, i.jsx)(g.FormSwitch, {
                              className: ei.marginBottom0,
                              onChange: this.handleShowActivityFeedToggle,
                              value: t,
                              hideBorder: !0,
                              note: en.intl.string(en.t.fZ0qZW),
                              disabled: !e,
                              children: en.intl.string(en.t.WompT0)
                          })
                      ]
                  })
              });
    }
    renderSummariesSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, p.Jc)(e, !1)
            ? (0, i.jsx)('div', {
                  children: (0, i.jsx)(g.FormSection, {
                      className: ei.divider,
                      children: (0, i.jsx)(g.FormSwitch, {
                          className: a()(ei.marginTop8, ei.marginBottom8),
                          onChange: this.handleConversationSummariesToggle,
                          value: e.hasFeature(J.oNc.SUMMARIES_ENABLED_BY_USER),
                          hideBorder: !0,
                          note: en.intl.format(en.t['c6Cy/v'], { helpdeskArticle: K.Z.getArticleURL(J.BhN.CONVERSATION_SUMMARIES) }),
                          disabled: !t,
                          children: (0, i.jsxs)('div', {
                              className: ei.badgedItem,
                              children: [
                                  en.intl.string(en.t.vmEDQk),
                                  (0, i.jsx)(g.TextBadge, {
                                      text: en.intl.string(en.t.oW0eUV),
                                      color: m.Z.unsafe_rawColors.BRAND_500.css,
                                      className: ei.__invalid_betaTag
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
            n = e.hasFeature(J.oNc.INVITE_SPLASH),
            r = t && n,
            l = (0, i.jsx)(P.Z, {
                image: e.splash,
                makeURL: (t) =>
                    null != t
                        ? W.ZP.getGuildSplashURL({
                              id: e.id,
                              splash: t
                          })
                        : null,
                disabled: !r,
                onChange: this.handleSplashChange,
                hint: en.intl.string(en.t.uPvxqK),
                enabled: r,
                maxFileSizeBytes: et.B,
                onFileSizeError: () => (0, O.Z)(et.B)
            });
        return (0, i.jsx)('div', {
            ref: this._inviteSectionRef,
            children: (0, i.jsx)(g.FormSection, {
                className: ei.divider,
                children: (0, i.jsxs)(S.Z, {
                    basis: '50%',
                    direction: S.Z.Direction.HORIZONTAL,
                    align: S.Z.Justify.START,
                    children: [
                        (0, i.jsxs)(S.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: [
                                (0, i.jsxs)(g.FormTitle, {
                                    className: ei.flexFormTitle,
                                    children: [
                                        (0, i.jsx)('div', { children: en.intl.string(en.t.tzGY0t) }),
                                        (0, i.jsx)(R.Z, {
                                            guild: e,
                                            guildFeature: J.oNc.INVITE_SPLASH,
                                            className: ei.guildFeatureAvailabilityIndicator,
                                            onClick: this.handleInviteSplashUpsellIndicator
                                        })
                                    ]
                                }),
                                (0, i.jsx)(g.FormText, {
                                    type: g.FormTextTypes.DESCRIPTION,
                                    className: ei.marginBottom8,
                                    children: en.intl.string(en.t.F7bbrq)
                                }),
                                (0, i.jsx)(g.FormText, {
                                    type: g.FormTextTypes.DESCRIPTION,
                                    children: en.intl.format(en.t.ZYA9PT, { articleURL: K.Z.getArticleURL(J.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                n
                                    ? (0, i.jsxs)(g.Button, {
                                          disabled: !r,
                                          color: g.ButtonColors.BRAND,
                                          className: ei.marginTop16,
                                          children: [
                                              en.intl.string(en.t.yG2pUl),
                                              (0, i.jsx)(k.ZP, {
                                                  disabled: !r,
                                                  onChange: this.handleSplashChange,
                                                  maxFileSizeBytes: et.B,
                                                  onFileSizeError: () => (0, O.Z)(et.B)
                                              })
                                          ]
                                      })
                                    : this.uploadBGUpsellButton(this.handleInviteSplashUpsellButton)
                            ]
                        }),
                        (0, i.jsx)(S.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: n
                                ? l
                                : (0, i.jsx)(g.Clickable, {
                                      'aria-hidden': !0,
                                      tabIndex: -1,
                                      className: ei.upsell,
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
            r = e.hasFeature(J.oNc.BANNER),
            l = e.hasFeature(J.oNc.ANIMATED_BANNER),
            a = r && t,
            s = (0, i.jsx)(P.Z, {
                image: e.banner,
                makeURL: (t) =>
                    null != t
                        ? W.ZP.getGuildBannerURL(
                              {
                                  id: e.id,
                                  banner: t
                              },
                              l
                          )
                        : null,
                disabled: !a,
                onChange: this.handleBannerChange,
                hint: en.intl.string(en.t.uPvxqK),
                onOpenImageSelectModal: () =>
                    e_(
                        ee.pC.GUILD_BANNER,
                        et.B,
                        this.handleBannerChange,
                        !0,
                        {
                            page: J.ZY5.GUILD_SETTINGS,
                            section: J.jXE.GUILD_BANNER
                        },
                        n
                    ),
                enabled: a
            }),
            o = (0, i.jsx)(g.Button, {
                disabled: !a,
                color: g.Button.Colors.BRAND,
                className: ei.marginTop16,
                onClick: () =>
                    e_(
                        ee.pC.GUILD_BANNER,
                        et.B,
                        this.handleBannerChange,
                        !0,
                        {
                            page: J.ZY5.GUILD_SETTINGS,
                            section: J.jXE.GUILD_BANNER
                        },
                        n
                    ),
                children: en.intl.string(en.t.yG2pUl)
            });
        return (0, i.jsx)(g.FormSection, {
            className: ei.divider,
            children: (0, i.jsxs)(S.Z, {
                basis: '50%',
                direction: S.Z.Direction.HORIZONTAL,
                align: S.Z.Justify.START,
                children: [
                    (0, i.jsxs)(S.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: [
                            (0, i.jsxs)(g.FormTitle, {
                                className: ei.flexFormTitle,
                                children: [
                                    (0, i.jsx)('div', { children: en.intl.string(en.t['0r0AzM']) }),
                                    (0, i.jsx)(R.Z, {
                                        guild: e,
                                        guildFeature: J.oNc.BANNER,
                                        className: ei.guildFeatureAvailabilityIndicator,
                                        onClick: this.handleBannerUpsellIndicator
                                    })
                                ]
                            }),
                            (0, i.jsx)(g.FormText, {
                                type: g.FormTextTypes.DESCRIPTION,
                                className: ei.marginBottom8,
                                children: en.intl.string(en.t.UfqmIS)
                            }),
                            (0, i.jsx)(g.FormText, {
                                type: g.FormTextTypes.DESCRIPTION,
                                children: en.intl.format(en.t.vBcWUl, { articleURL: K.Z.getArticleURL(J.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            r ? o : this.uploadBGUpsellButton(this.handleBannerUpsellButton)
                        ]
                    }),
                    (0, i.jsx)(S.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: r
                            ? s
                            : (0, i.jsx)(g.Clickable, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  className: ei.upsell,
                                  onClick: this.handleBannerUpsellUpload,
                                  children: s
                              })
                    })
                ]
            })
        });
    }
    renderProgressBar() {
        let { guild: e, canManageGuild: t, theme: n } = this.props;
        return (0, i.jsx)(g.FormSection, {
            children: (0, i.jsxs)(S.Z, {
                align: S.Z.Align.START,
                children: [
                    (0, i.jsxs)(S.Z, {
                        basis: '50%',
                        direction: S.Z.Direction.VERTICAL,
                        align: S.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(g.FormSwitch, {
                                className: a()(ei.marginTop8, ei.marginBottom8),
                                onChange: this.handlePremiumProgressBarEnabledChange,
                                value: e.premiumProgressBarEnabled,
                                hideBorder: !0,
                                disabled: !t,
                                children: en.intl.string(en.t.Dl4mJS)
                            }),
                            (0, i.jsx)(g.FormText, {
                                type: g.FormTextTypes.DESCRIPTION,
                                className: ei.marginBottom8,
                                children: en.intl.string(en.t.xzHcoa)
                            })
                        ]
                    }),
                    (0, i.jsx)(S.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, i.jsx)('img', {
                            alt: en.intl.string(en.t.UOJp5e),
                            src: (0, h.ap)(n) ? el : er,
                            className: ei.progressBarImage
                        })
                    })
                ]
            })
        });
    }
    renderDisplaySection() {
        return (0, i.jsx)('div', {
            ref: this._displaySectionRef,
            children: (0, i.jsxs)(g.FormSection, {
                title: en.intl.string(en.t.lDskxM),
                tag: g.FormTitleTags.H1,
                className: ei.divider,
                children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
            })
        });
    }
    render() {
        return (0, i.jsxs)(g.FormSection, {
            title: en.intl.string(en.t.iZmTaG),
            tag: g.FormTitleTags.H1,
            children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection()]
        });
    }
    constructor(...e) {
        super(...e),
            ea(this, '_imageInputRef', r.createRef()),
            ea(this, '_displaySectionRef', r.createRef()),
            ea(this, '_inviteSectionRef', r.createRef()),
            ea(this, '_notificationSectionRef', r.createRef()),
            ea(this, 'handleIconChange', (e) => {
                q.Z.updateGuild({ icon: e });
            }),
            ea(this, 'handleOpenImageCroppingModal', (e, t) => {
                (0, g.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([n.e('70687'), n.e('48017'), n.e('19557')]).then(n.bind(n, 850085));
                    return (n) =>
                        (0, i.jsx)(r, {
                            onCrop: this.handleIconChange,
                            imgURI: e,
                            file: t,
                            ...n
                        });
                });
            }),
            ea(this, 'handleUploadImage', (e) => {
                var t;
                e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue());
            }),
            ea(this, 'handleShowJoinsChange', (e) => this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e)),
            ea(this, 'handleShowSubscriptionsChange', (e) => this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e)),
            ea(this, 'handleShowGuildRemindersChange', (e) => {
                this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e);
            }),
            ea(this, 'handleShowJoinRepliesChange', (e) => this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e)),
            ea(this, 'handleShowGuildRoleSubscriptionPurchaseMessages', (e) => {
                this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e);
            }),
            ea(this, 'handleShowDeadchatPromptMessageChange', (e) => {
                this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e);
            }),
            ea(this, 'handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange', (e) => {
                this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e);
            }),
            ea(this, 'handleHomeHeaderChange', (e, t) => {
                if (null == e || void 0 === t) {
                    q.Z.updateGuild({ homeHeader: null });
                    return;
                }
                (0, g.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([n.e('70687'), n.e('48017'), n.e('19557')]).then(n.bind(n, 850085));
                    return (n) =>
                        (0, i.jsx)(r, {
                            imgURI: e,
                            file: t,
                            onCrop: (e) => q.Z.updateGuild({ homeHeader: e }),
                            uploadType: ee.pC.HOME_HEADER,
                            ...n
                        });
                });
            }),
            ea(this, 'handleBannerChange', (e, t) => {
                let { guild: n, analyticsLocations: i } = this.props,
                    r = null == t ? void 0 : t.type,
                    l = {
                        page: J.ZY5.GUILD_SETTINGS,
                        section: J.jXE.ANIMATED_GUILD_BANNER_UPSELL,
                        object: 'temp'
                    };
                if (null != r && null != e) {
                    if ('image/gif' !== r || n.hasFeature(J.oNc.ANIMATED_BANNER)) {
                        if (!n.hasFeature(J.oNc.BANNER)) {
                            (l.object = J.qAy.IMAGE_CROPPING_MODAL),
                                (0, y.c)({
                                    guild: n,
                                    analyticsLocations: i,
                                    analyticsLocation: l,
                                    banner: e,
                                    isGIF: !1
                                });
                            return;
                        }
                    } else {
                        (l.object = J.qAy.GIF_CROPPING_MODAL),
                            (0, y.c)({
                                guild: n,
                                analyticsLocations: i,
                                analyticsLocation: l,
                                banner: e,
                                isGIF: !0
                            });
                        return;
                    }
                }
                q.Z.updateGuild({ banner: e });
            }),
            ea(this, 'handleShowModalUpsell', (e, t, n, i) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: r, analyticsLocations: l } = this.props;
                (0, v.yw)(J.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: {
                        section: t,
                        object: J.qAy.LEARN_MORE
                    },
                    guild_id: null == r ? void 0 : r.id,
                    location_stack: l
                }),
                    (0, A.Z)({
                        analyticsLocations: l,
                        analyticsSourceLocation: {
                            section: t,
                            object: n,
                            page: J.ZY5.GUILD_SETTINGS
                        },
                        guild: r,
                        perks: i
                    });
            }),
            ea(this, 'handleInviteSplashUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_INVITE_BACKGROUND, J.qAy.BADGE, (0, $.o9)());
            }),
            ea(this, 'handleInviteSplashUpsellButton', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_INVITE_BACKGROUND, J.qAy.BUTTON_CTA, (0, $.o9)());
            }),
            ea(this, 'handleInviteSplashUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_INVITE_BACKGROUND, J.qAy.UPLOAD_IMAGE, (0, $.o9)());
            }),
            ea(this, 'handleBannerUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_BANNER, J.qAy.BADGE, (0, $.XO)());
            }),
            ea(this, 'handleBannerUpsellButton', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_BANNER, J.qAy.BUTTON_CTA, (0, $.XO)());
            }),
            ea(this, 'handleBannerUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_BANNER, J.qAy.UPLOAD_IMAGE, (0, $.XO)());
            }),
            ea(this, 'handleConversationSummariesToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? n.add(J.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(J.oNc.SUMMARIES_ENABLED_BY_USER), q.Z.updateGuild({ features: n });
            }),
            ea(this, 'handleShowActivityFeedToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? (n.add(J.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(J.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(J.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(J.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), q.Z.updateGuild({ features: n });
            }),
            ea(this, 'uploadBGUpsellButton', (e) =>
                (0, i.jsxs)(g.ShinyButton, {
                    color: g.Button.Colors.GREEN,
                    className: a()(ei.marginTop16),
                    innerClassName: ei.upsellButton,
                    onClick: e,
                    children: [
                        (0, i.jsx)(z.Z, {
                            height: 16,
                            width: 16,
                            className: ei.premiumUpsellBadge
                        }),
                        ' ',
                        en.intl.string(en.t['+7XY39'])
                    ]
                })
            );
    }
}
function ev() {
    var e;
    let { guild: t, errors: n, submitting: l, subsection: a } = (0, u.cj)([X.Z], () => X.Z.getProps()),
        s = (0, f.ZP)(),
        { analyticsLocations: c } = (0, _.ZP)(C.Z.OVERVIEW);
    r.useEffect(() => {
        (0, D.Kw)(L.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let d = (0, u.e7)([B.Z], () => B.Z.getCategories(null == t ? void 0 : t.id)),
        m = r.useMemo(() => (0, I.Z)(d._categories, d), [d]),
        { canManageGuild: h, isGuildAdmin: g } = (0, u.cj)([G.Z], () => ({
            canManageGuild: G.Z.can(J.Plq.MANAGE_GUILD, t),
            isGuildAdmin: G.Z.can(J.Plq.ADMINISTRATOR, t)
        })),
        x = (0, u.e7)([U.Z], () => U.Z.getMemberCount(null == t ? void 0 : t.id)),
        p = (0, b.E)(t),
        v = (0, u.e7)([H.default], () => H.default.getCurrentUser());
    o()(null != v, 'GuildSettingsOverview: currentUser cannot be undefined');
    let { enableDeadchat: N } = j.Z.useExperiment(
        {
            guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : J.lds,
            location: 'guild_settings'
        },
        {
            disable: null == t,
            autoTrackExposure: !0
        }
    );
    return null == t
        ? null
        : (0, i.jsx)(_.Gt, {
              value: c,
              children: (0, i.jsx)(eC, {
                  channels: m,
                  canManageGuild: h,
                  isGuildAdmin: g,
                  subsection: a,
                  guild: t,
                  errors: n,
                  submitting: l,
                  currentUser: v,
                  guildMemberCount: x,
                  isInventoryFeedEnabled: p,
                  theme: s,
                  analyticsLocations: c,
                  eligibleForDeadchatPrompt: N
              })
          });
}
function e_(e, t, r) {
    let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        a = arguments.length > 4 ? arguments[4] : void 0,
        s = arguments.length > 5 ? arguments[5] : void 0;
    (0, g.openModalLazy)(async () => {
        let { default: o } = await Promise.all([n.e('70687'), n.e('8193')]).then(n.bind(n, 28130));
        return (n) =>
            (0, i.jsx)(o, {
                maxFileSizeBytes: t,
                onComplete: r,
                uploadType: e,
                showUpsellHeader: l,
                analyticsLocation: a,
                analyticsLocations: s,
                ...n
            });
    });
}
