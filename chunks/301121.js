n.d(t, {
    Z: function () {
        return eT;
    }
}),
    n(47120),
    n(733860),
    n(773603);
var i,
    s,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(512722),
    d = n.n(c),
    u = n(913527),
    m = n.n(u),
    g = n(442837),
    h = n(524437),
    p = n(481060),
    x = n(570140),
    f = n(668781),
    _ = n(924628),
    E = n(809206),
    C = n(230711),
    T = n(241420),
    S = n(600164),
    b = n(651530),
    I = n(247206),
    N = n(294602),
    v = n(778825),
    A = n(856768),
    j = n(592204),
    R = n(712950),
    O = n(880257),
    P = n(16703),
    y = n(977059),
    D = n(236289),
    B = n(518560),
    Z = n(237292),
    L = n(604849),
    M = n(278828),
    k = n(921801),
    w = n(480294),
    F = n(430824),
    U = n(663389),
    V = n(594174),
    G = n(626135),
    H = n(63063),
    Y = n(78451),
    W = n(358085),
    z = n(709054),
    K = n(88658),
    q = n(695346),
    Q = n(3957),
    X = n(279743),
    J = n(526156),
    $ = n(76793),
    ee = n(839469),
    et = n(973005),
    en = n(703115),
    ei = n(526761),
    es = n(726985),
    er = n(981631),
    ea = n(800530),
    el = n(388032),
    eo = n(770082),
    ec = n(300917),
    ed = n(232186);
function eu(e, t, n) {
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
function em() {
    let e = (0, g.e7)([v.Z], () => v.Z.getGuild()),
        t = (0, P.Z)(),
        n = null != e ? e : t;
    a.useEffect(() => {
        G.default.track(er.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, { action: en.Y.VIEW_SETTINGS_PAGE });
    }, []);
    let i = a.useCallback((e) => {
        null != e &&
            x.Z.dispatch({
                type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
                guild: e
            }),
            G.default.track(er.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: en.Y.SELECT_GUILD,
                guild_id: null == e ? void 0 : e.id
            });
    }, []);
    return null == n
        ? null
        : (0, r.jsxs)(p.FormSection, {
              tag: p.FormTitleTags.H1,
              title: el.intl.string(el.t.sKMrpq),
              children: [
                  (0, r.jsx)(A.Z, {
                      className: ec.guildSelector,
                      guildId: n.id,
                      onChange: i
                  }),
                  (0, r.jsx)(T.ConnectedPrivacySettings, {
                      guild: n,
                      ingress: T.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
                  })
              ]
          });
}
function eg() {
    var e;
    let t = null === (e = (0, O.Z)()) || void 0 === e || e,
        n = (0, Z.y0)({ location: 'user_settings_web' }),
        i = (0, L.c)(),
        s = (0, Q.a)(ei.to.DM_SAFETY_ALERTS);
    return t || !n
        ? null
        : (0, r.jsxs)(k.F, {
              setting: es.s6.PRIVACY_SAFETY_ALERTS,
              children: [
                  (0, r.jsx)(p.FormSection, {
                      ref: s,
                      children: (0, r.jsxs)(p.FormItem, {
                          className: eo.settingsBackgroundFlashElement,
                          children: [
                              (0, r.jsx)(p.FormTitle, {
                                  tag: p.FormTitleTags.H5,
                                  faded: !0,
                                  className: ed.marginBottom8,
                                  children: el.intl.string(el.t['J/X8w8'])
                              }),
                              (0, r.jsx)(p.FormSwitch, {
                                  value: i,
                                  note: el.intl.format(el.t.lunaRk, { learnMoreLink: H.Z.getArticleURL(er.BhN.SAFETY_ALERTS) }),
                                  onChange: M.Q,
                                  hideBorder: !0,
                                  children: el.intl.string(el.t.qFsx5u)
                              }),
                              (0, r.jsx)(X.Z, {
                                  animationDelay: 1000,
                                  scrollPosition: ei.to.DM_SAFETY_ALERTS
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 })
              ]
          });
}
function eh(e, t) {
    G.default.track(er.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t
    });
}
function ep() {
    let e = q.iG.useSetting(),
        t = q.mX.useSetting(),
        n = (0, Q.a)(ei.to.MESSAGE_REQUESTS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: eo.settingsBackgroundFlashElement,
                children: [
                    (0, r.jsx)(p.FormItem, {
                        ref: n,
                        children: (0, r.jsx)(p.FormSwitch, {
                            value: !t,
                            note: el.intl.format(el.t.BSdJ7O, { helpdeskArticle: H.Z.getArticleURL(er.BhN.MESSAGE_REQUESTS) }),
                            disabled: e,
                            onChange: () => {
                                var e;
                                return (
                                    (e = !t),
                                    void e_({
                                        header: el.intl.string(el.t.yAfu1t),
                                        body: el.intl.string(el.t['Ry2z7+']),
                                        confirmText: el.intl.string(el.t.gm1Ven),
                                        cancelText: el.intl.string(el.t.p89ACg),
                                        confirmButtonColor: p.Button.Colors.BRAND,
                                        onConfirm: () => {
                                            q.mX.updateSetting(e), eh(e, !1);
                                        },
                                        onCancel: () => {
                                            q.mX.updateSetting(e), q.zA.updateSetting(e ? z.default.keys(F.Z.getGuilds()) : []), eh(e, !0);
                                        }
                                    })
                                );
                            },
                            hideBorder: !0,
                            children: el.intl.string(el.t.kOa6yM)
                        })
                    }),
                    (0, r.jsx)(X.Z, {
                        animationDelay: 700,
                        scrollPosition: ei.to.MESSAGE_REQUESTS
                    })
                ]
            }),
            (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 })
        ]
    });
}
function ex() {
    var e;
    let t = null === (e = (0, O.Z)()) || void 0 === e || e,
        { explicitContentGuilds: n, explicitContentFriendDm: i, explicitContentNonFriendDm: s } = (0, N.B)(),
        a = (0, Q.a)(ei.to.EXPLICIT_MEDIA_REDACTION),
        l = [
            {
                value: h.Q4.BLUR,
                label: el.intl.string(el.t.S49UaW)
            },
            {
                value: h.Q4.BLOCK,
                label: el.intl.string(el.t['D/157e'])
            }
        ],
        o = [
            {
                value: h.Q4.BLUR,
                label: el.intl.string(el.t.S49UaW)
            }
        ],
        c = {
            value: h.Q4.SHOW,
            label: el.intl.string(el.t['5k5OFh'])
        };
    return (
        t && (l.unshift(c), o.unshift(c)),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: eo.settingsBackgroundFlashElement,
                    children: [
                        (0, r.jsx)(p.FormTitle, {
                            tag: p.FormTitleTags.H5,
                            faded: !0,
                            className: ed.marginBottom8,
                            children: el.intl.string(el.t.uEz8JC)
                        }),
                        (0, r.jsx)(p.FormText, {
                            type: p.FormTextTypes.DESCRIPTION,
                            className: ed.marginBottom8,
                            children: el.intl.format(el.t['89CimZ'], { learnMoreLink: H.Z.getArticleURL(er.BhN.EXPLICIT_MEDIA_REDACTION) })
                        }),
                        (0, r.jsx)(p.FormItem, {
                            ref: a,
                            tag: p.FormTitleTags.H3,
                            className: ed.marginBottom20,
                            title: el.intl.string(el.t.TyjVLC),
                            children: (0, r.jsx)(p.SingleSelect, {
                                options: l,
                                value: i,
                                onChange: (e) => (0, I.zj)({ explicitContentFriendDm: e })
                            })
                        }),
                        (0, r.jsx)(p.FormItem, {
                            tag: p.FormTitleTags.H3,
                            className: ed.marginBottom20,
                            title: el.intl.string(el.t.T7eD1d),
                            children: (0, r.jsx)(p.SingleSelect, {
                                options: l,
                                value: s,
                                onChange: (e) => (0, I.zj)({ explicitContentNonFriendDm: e })
                            })
                        }),
                        t &&
                            (0, r.jsx)(p.FormItem, {
                                tag: p.FormTitleTags.H3,
                                className: ed.marginBottom20,
                                title: el.intl.string(el.t.zqUDl5),
                                children: (0, r.jsx)(p.SingleSelect, {
                                    options: o,
                                    value: n,
                                    onChange: (e) => (0, I.zj)({ explicitContentGuilds: e })
                                })
                            }),
                        (0, r.jsx)(X.Z, { scrollPosition: ei.to.EXPLICIT_MEDIA_REDACTION })
                    ]
                }),
                (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 })
            ]
        })
    );
}
function ef(e) {
    let {
            modalProps: t,
            settings: { onConfirm: n, ...i }
        } = e,
        [s, l] = a.useState({
            Account: {
                value: 'Account',
                label: el.intl.string(el.t['rfe/x8']),
                checked: !1
            },
            Analytics: {
                value: 'Analytics',
                label: el.intl.string(el.t['j+d6RE']),
                checked: !1
            },
            Activities: {
                value: 'Activities',
                label: el.intl.string(el.t.KO88BQ),
                checked: !1
            },
            Messages: {
                value: 'Messages',
                label: el.intl.string(el.t['0dO1t7']),
                checked: !1
            },
            Programs: {
                value: 'Programs',
                label: el.intl.string(el.t.M4ddeX),
                checked: !1
            },
            Servers: {
                value: 'Servers',
                label: el.intl.string(el.t.JN9c39),
                checked: !1
            }
        }),
        o = (e) => (t, n) => {
            l((t) => ({
                ...t,
                [e]: {
                    ...t[e],
                    checked: n
                }
            }));
        };
    return (0, r.jsxs)(p.ConfirmModal, {
        ...t,
        ...i,
        onConfirm: () => {
            let e = Object.keys(s)
                .filter((e) => s[e].checked)
                .map((e) => s[e].value);
            null == n || n(e);
        },
        children: [
            (0, r.jsx)(p.Text, {
                variant: 'text-md/normal',
                style: { marginBottom: '5px' },
                children: i.body
            }),
            Object.keys(s).map((e) => {
                let { label: t, checked: n } = s[e];
                return (0, r.jsx)(
                    p.Checkbox,
                    {
                        type: p.Checkbox.Types.INVERTED,
                        value: n,
                        style: { marginBottom: '2px' },
                        onChange: o(e),
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-md/normal',
                            children: t
                        })
                    },
                    e
                );
            })
        ]
    });
}
((s = i || (i = {})).USERS = 'Account'), (s.MESSAGES = 'Messages'), (s.GUILDS = 'Servers'), (s.ANALYTICS = 'Analytics'), (s.ACTIVITIES = 'Activities'), (s.HUBSPOT = 'Programs');
function e_(e) {
    let { body: t, ...n } = e;
    (0, p.openModal)((e) =>
        (0, r.jsx)(p.ConfirmModal, {
            ...e,
            ...n,
            children: (0, r.jsx)(p.Text, {
                variant: 'text-md/normal',
                children: t
            })
        })
    );
}
function eE(e) {
    let { message: t } = e;
    e_({
        header: el.intl.string(el.t.OjbtDg),
        confirmText: el.intl.string(el.t.BddRzc),
        body: t
    });
}
class eC extends a.PureComponent {
    componentDidMount() {
        (0, _.I)(),
            (0, E.ol)().then(
                (e) => {
                    let t = {
                        requestingHarvest: !1,
                        currentHarvestRequest: e.body
                    };
                    this.setState(t);
                },
                () => {
                    this.setState({ requestingHarvest: !1 });
                }
            );
    }
    componentDidUpdate(e) {
        e.defaultGuildsRestricted !== this.props.defaultGuildsRestricted && this.setState({ defaultGuildsRestricted: this.props.defaultGuildsRestricted }), null != this.props.subsection && e.subsection !== this.props.subsection && this.setState({ selectedTab: this.props.subsection });
    }
    showGuildRestrictionModal(e) {
        e_({
            header: el.intl.string(el.t['uUr+GR']),
            body: el.intl.string(el.t.hjGJBg),
            confirmText: el.intl.string(el.t.gm1Ven),
            cancelText: el.intl.string(el.t.p89ACg),
            confirmButtonColor: p.Button.Colors.BRAND,
            onConfirm: () => {
                q.iG.updateSetting(e), this.trackDefaultDmsUpdated(e, !1);
            },
            onCancel: () => {
                q.iG.updateSetting(e), q.h2.updateSetting(e ? z.default.keys(F.Z.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0);
            }
        });
    }
    trackDefaultDmsUpdated(e, t) {
        G.default.track(er.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    showMessageRequestRestrictionModal(e) {
        e_({
            header: el.intl.string(el.t.yAfu1t),
            body: el.intl.string(el.t['Ry2z7+']),
            confirmText: el.intl.string(el.t.gm1Ven),
            cancelText: el.intl.string(el.t.p89ACg),
            confirmButtonColor: p.Button.Colors.BRAND,
            onConfirm: () => {
                q.mX.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1);
            },
            onCancel: () => {
                q.mX.updateSetting(e), q.zA.updateSetting(e ? z.default.keys(F.Z.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0);
            }
        });
    }
    trackDefaultMessageRequestUpdated(e, t) {
        G.default.track(er.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    renderLegacyExplicitContentFilter(e) {
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(p.FormItem, {
                tag: p.FormTitleTags.H3,
                className: ed.marginBottom20,
                title: el.intl.string(el.t.rQCZQE),
                children: [
                    (0, r.jsx)(p.FormText, {
                        type: p.FormTextTypes.DESCRIPTION,
                        className: ed.marginBottom8,
                        children: el.intl.format(el.t.Qsnai4, { appealLink: H.Z.getArticleURL(er.BhN.SAFE_DIRECT_MESSAGING) })
                    }),
                    (0, r.jsx)(p.RadioGroup, {
                        value: this.props.explicitContentFilter,
                        options: (0, Y.X7)(),
                        onChange: (t) => {
                            let { value: n } = t;
                            this.props.dmSpamFilter === h.Xr.DEFAULT_UNSET
                                ? q.Xr.updateSetting(e).then(() => {
                                      q.UP.updateSetting(n);
                                  })
                                : q.UP.updateSetting(n);
                        }
                    })
                ]
            })
        });
    }
    renderDMSafety() {
        var e;
        let t = this.props.dmSpamFilter !== h.Xr.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = et.O7.get(this.props.explicitContentFilter)) && void 0 !== e ? e : h.Xr.NON_FRIENDS;
        return this.props.mediaRedactionIsEnabled
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(p.FormSection, {
                          tag: p.FormTitleTags.H3,
                          className: ed.marginBottom20,
                          children: [
                              (0, r.jsx)(k.F, {
                                  setting: es.s6.PRIVACY_SENSITIVE_MEDIA,
                                  children: (0, r.jsx)(ex, {})
                              }),
                              (0, r.jsxs)(k.F, {
                                  setting: es.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
                                  children: [
                                      (0, r.jsxs)(p.FormItem, {
                                          tag: p.FormTitleTags.H5,
                                          className: ed.marginBottom4,
                                          title: el.intl.string(el.t.uloYw8),
                                          children: [
                                              (0, r.jsx)(p.FormText, {
                                                  type: p.FormTextTypes.DESCRIPTION,
                                                  className: ed.marginBottom8,
                                                  children: el.intl.format(el.t.ls4omZ, { appealLink: H.Z.getArticleURL(er.BhN.SAFE_DIRECT_MESSAGING) })
                                              }),
                                              (0, r.jsx)(p.RadioGroup, {
                                                  value: t,
                                                  options: (0, Y.c7)(),
                                                  onChange: (e) => {
                                                      let { value: t } = e;
                                                      return q.Xr.updateSetting(t);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(p.FormDivider, { className: o()(ed.marginTop20, ed.marginBottom8) })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(eg, {})
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(p.FormSection, {
                          tag: p.FormTitleTags.H5,
                          className: ed.marginBottom40,
                          title: el.intl.string(el.t.u3sdlJ),
                          children: [
                              this.renderLegacyExplicitContentFilter(t),
                              (0, r.jsxs)(p.FormItem, {
                                  tag: p.FormTitleTags.H3,
                                  className: ed.marginBottom4,
                                  title: el.intl.string(el.t.uloYw8),
                                  children: [
                                      (0, r.jsx)(p.FormText, {
                                          type: p.FormTextTypes.DESCRIPTION,
                                          className: ed.marginBottom8,
                                          children: el.intl.format(el.t.ls4omZ, { appealLink: H.Z.getArticleURL(er.BhN.SAFE_DIRECT_MESSAGING) })
                                      }),
                                      (0, r.jsx)(p.RadioGroup, {
                                          value: t,
                                          options: (0, Y.c7)(),
                                          onChange: (e) => {
                                              let { value: t } = e;
                                              return q.Xr.updateSetting(t);
                                          }
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 }),
                      (0, r.jsx)(eg, {})
                  ]
              });
    }
    renderKeywordFiltering() {
        return (0, r.jsxs)(p.FormSection, {
            tag: p.FormTitleTags.H3,
            className: ed.marginBottom20,
            children: [
                (0, r.jsx)(p.FormTitle, {
                    tag: p.FormTitleTags.H5,
                    className: ed.marginBottom8,
                    children: el.intl.string(el.t.lq5Pio)
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_KEYWORD_FILTER,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: this.props.keywordFilter,
                        note: el.intl.format(el.t.wIAqR0, { learnMoreLink: H.Z.getArticleURL(er.BhN.KEYWORD_FILTERS) }),
                        onChange: (e) =>
                            q.gw.updateSetting({
                                profanity: e,
                                slurs: e,
                                sexualContent: e
                            }),
                        children: el.intl.string(el.t['8QJcoa'])
                    })
                })
            ]
        });
    }
    renderServerPrivacy() {
        let { viewNsfwGuilds: e, currentUser: t, viewNsfwCommands: n } = this.props,
            { defaultGuildsRestricted: i } = this.state,
            s = !0 === t.nsfwAllowed;
        return (0, r.jsxs)(p.FormSection, {
            className: ed.marginBottom40,
            children: [
                (0, r.jsx)(p.FormTitle, {
                    tag: p.FormTitleTags.H5,
                    className: ed.marginBottom8,
                    children: el.intl.string(el.t.Hq4ApK)
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: !i,
                        note: el.intl.string(el.t['5+2s+f']),
                        onChange: this.handleChangeDefaultGuildsRestricted,
                        children: el.intl.string(el.t.eCO6Nz)
                    })
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: !!s && e,
                        note: el.intl.string(el.t['QZ9+Dw']),
                        disabled: !s,
                        onChange: q.DC.updateSetting,
                        children: el.intl.string(el.t['L+yTsb'])
                    })
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS,
                    children: (0, r.jsx)(ep, {})
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: !!s && n,
                        note: el.intl.string(el.t.fbBowc),
                        disabled: !s,
                        onChange: q.xM.updateSetting,
                        children: el.intl.string(el.t.XahVjo)
                    })
                })
            ]
        });
    }
    renderDataPrivacy() {
        let { usageStatistics: e, personalization: t, dropsOptedOut: n } = this.props;
        return (0, r.jsxs)(p.FormSection, {
            className: ed.marginBottom40,
            children: [
                (0, r.jsx)(p.FormTitle, {
                    tag: p.FormTitleTags.H5,
                    className: ed.marginBottom8,
                    children: el.intl.string(el.t.e0rLYW)
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_DATA_IMPROVE_DISCORD,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: e,
                        note: el.intl.format(el.t['5R5aSk'], { helpdeskArticle: H.Z.getArticleURL(er.BhN.DATA_USED_TO_IMPROVE_DISCORD) }),
                        onChange: this.handleUsageStatisticsChange,
                        children: el.intl.string(el.t.XuADY2)
                    })
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_DATA_PERSONALIZE,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: t,
                        note: el.intl.format(el.t.MWpAhI, { helpdeskArticle: H.Z.getArticleURL(er.BhN.DATA_USED_FOR_RECOMMENDED) }),
                        onChange: this.handlePersonalizationChange,
                        children: el.intl.string(el.t.MNKzys)
                    })
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_DATA_QUESTS,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: !n,
                        note: el.intl.format(el.t['7Q2yX1'], { helpdeskArticle: H.Z.getArticleURL(er.BhN.QUESTS_PRIVACY_CONTROLS) }),
                        onChange: this.handleChangeDropsOptedOut,
                        children: (0, r.jsx)('div', { children: el.intl.string(el.t.VkS7YW) })
                    })
                }),
                (0, r.jsxs)(k.F, {
                    setting: es.s6.PRIVACY_DATA_BASIC_SERVICE,
                    children: [
                        (0, r.jsx)(p.FormTitle, {
                            tag: p.FormTitleTags.H3,
                            className: o()(ed.marginTop20, ed.marginBottom8),
                            children: el.intl.string(el.t.D60Gfn)
                        }),
                        (0, r.jsx)(p.FormText, {
                            type: p.FormTextTypes.DESCRIPTION,
                            className: ed.marginBottom20,
                            children: el.intl.format(el.t.R5N31N, {
                                onClick: () => {
                                    C.Z.setSection(er.oAB.ACCOUNT);
                                }
                            })
                        }),
                        (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 })
                    ]
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_DATA_REQUEST,
                    children: this.renderHarvestRequest()
                })
            ]
        });
    }
    renderHarvestRequest() {
        let e;
        let { currentUser: t } = this.props,
            { requestingHarvest: n, currentHarvestRequest: i } = this.state,
            s = (0, K.$6)(i, t),
            l = null != i && m()().diff(m()(i.created_at), 'days') < er.eBq,
            o = (0, r.jsx)(p.Tooltip, {
                text: t.isStaff() ? el.intl.string(el.t.ZPQLHx) : t.verified ? null : el.intl.string(el.t['c1f88/']),
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: i } = e;
                    return (0, r.jsx)(p.Button, {
                        disabled: s,
                        onClick: this.handleDataDownloadRequest,
                        onMouseEnter: t,
                        onMouseLeave: i,
                        look: p.Button.Looks.FILLED,
                        color: p.Button.Colors.BRAND,
                        submitting: n,
                        children: el.intl.string(el.t.dmBSKi)
                    });
                }
            });
        return (
            s &&
                l &&
                ((e = (0, r.jsx)(p.Card, {
                    className: ec.card,
                    children: (0, r.jsx)(p.Text, {
                        variant: 'text-md/normal',
                        children: el.intl.format(el.t.RNDlV1, { date: m()(i.created_at).add(er.eBq, 'days').format('MMMM Do YYYY') })
                    })
                })),
                (o = null)),
            null != o && (o = (0, r.jsx)(S.Z, { children: o })),
            (0, r.jsxs)(a.Fragment, {
                children: [
                    (0, r.jsx)(p.FormTitle, {
                        tag: p.FormTitleTags.H3,
                        children: el.intl.string(el.t.XAHCgI)
                    }),
                    (0, r.jsx)(p.FormText, {
                        type: p.FormTextTypes.DESCRIPTION,
                        className: ed.marginBottom20,
                        children: el.intl.format(el.t['3en439'], { helpdeskArticle: H.Z.getArticleURL(er.BhN.GDPR_REQUEST_DATA) })
                    }),
                    e,
                    o
                ]
            })
        );
    }
    renderPrivacyAndTermsNote() {
        return (0, r.jsx)(p.FormSection, {
            className: ed.marginBottom40,
            children: (0, r.jsx)(p.FormNotice, {
                type: p.FormNotice.Types.PRIMARY,
                body: el.intl.format(el.t.xvCsx8, {
                    termsLink: er.EYA.TERMS,
                    privacyLink: er.EYA.PRIVACY
                })
            })
        });
    }
    renderStaffOnlySettings() {
        let { nonSpamRetrainingOptIn: e } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 }),
                (0, r.jsxs)(p.FormSection, {
                    className: ed.marginBottom40,
                    children: [
                        (0, r.jsx)(p.FormTitle, {
                            tag: p.FormTitleTags.H5,
                            className: ed.marginBottom8,
                            children: el.intl.string(el.t.Fwp9SU)
                        }),
                        (0, r.jsxs)(p.FormItem, {
                            tag: p.FormTitleTags.H5,
                            className: ed.marginBottom4,
                            children: [
                                (0, r.jsx)(p.FormText, {
                                    type: p.FormTextTypes.DESCRIPTION,
                                    className: ed.marginBottom8,
                                    children: el.intl.string(el.t.toqSSE)
                                }),
                                (0, r.jsx)(p.RadioGroup, {
                                    options: (0, K.xH)(),
                                    value: null == e ? K.g0.UNDECIDED : e ? K.g0.OPTIN : K.g0.OPTOUT,
                                    onChange: (e) => {
                                        let { value: t } = e;
                                        return q.kJ.updateSetting(K.ac[t]);
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    renderSettingsBody() {
        let { fetchedConsents: e } = this.props;
        return (0, r.jsxs)(p.FormSection, {
            tag: p.FormTitleTags.H1,
            title: el.intl.string(el.t.sKMrpq),
            children: [
                this.renderDMSafety(),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_KEYWORD_FILTER,
                    children: this.renderKeywordFiltering()
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                    children: this.renderServerPrivacy()
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_DATA_PRIVACY,
                    children: e ? this.renderDataPrivacy() : null
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_TERMS_POLICY,
                    children: this.renderPrivacyAndTermsNote()
                }),
                (0, r.jsx)(k.F, {
                    setting: es.s6.PRIVACY_STAFF_ONLY,
                    children: this.renderStaffOnlySettings()
                })
            ]
        });
    }
    render() {
        let { isSecureFramesEnabled: e, subsection: t } = this.props;
        return (0, r.jsx)(J.Z, {
            parentSetting: es.s6.PRIVACY_AND_SAFETY,
            settingsSection: er.oAB.PRIVACY_AND_SAFETY,
            defaultTabIndex: 'ACCOUNT_STANDING' === t ? 2 : void 0,
            tabs: [
                {
                    title: el.intl.string(el.t.YpEWSk),
                    component: this.renderSettingsBody(),
                    setting: es.s6.PRIVACY_USER_SETTINGS
                },
                {
                    title: el.intl.string(el.t['tp/UVF']),
                    component: (0, r.jsx)(em, {}),
                    setting: es.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
                },
                {
                    title: el.intl.string(el.t['00Sfl5']),
                    component: (0, r.jsx)(B.Z, {}),
                    setting: es.s6.PRIVACY_ACCOUNT_STANDING
                },
                {
                    title: el.intl.string(el.t.hWMIiY),
                    component: (0, r.jsx)($.Z, {}),
                    setting: es.s6.PRIVACY_ENCRYPTION,
                    predicate: () => e && (0, W.isDesktop)()
                }
            ]
        });
    }
    constructor(e) {
        super(e),
            eu(this, 'handleChangeDefaultGuildsRestricted', (e) => {
                this.setState({ defaultGuildsRestricted: !e }, () => this.showGuildRestrictionModal(!e));
            }),
            eu(this, 'handleChangeDropsOptedOut', () => {
                q.bh.updateSetting(!this.props.dropsOptedOut);
            }),
            eu(this, 'handleUsageStatisticsChange', () => {
                this.props.usageStatistics
                    ? e_({
                          header: el.intl.string(el.t.OdPCbG),
                          body: el.intl.string(el.t.MGWabG),
                          confirmText: el.intl.string(el.t['D3+rU1']),
                          cancelText: el.intl.string(el.t.kYpG0t),
                          onConfirm: () => (0, _.g)([], [er.pjP.USAGE_STATISTICS]).catch(eE)
                      })
                    : (0, _.g)([er.pjP.USAGE_STATISTICS], []).catch(eE);
            }),
            eu(this, 'handlePersonalizationChange', () => {
                this.props.personalization
                    ? e_({
                          header: el.intl.string(el.t['9SNpzs']),
                          confirmText: el.intl.string(el.t['9g5UGx']),
                          cancelText: el.intl.string(el.t['+ZLPw8']),
                          onConfirm: () => {
                              (0, _.g)([], [er.pjP.PERSONALIZATION]).catch(eE);
                          },
                          body: el.intl.string(el.t.gJvDDg)
                      })
                    : (0, _.g)([er.pjP.PERSONALIZATION], []).catch(eE);
            }),
            eu(this, 'handleDataDownloadRequest', () => {
                var e;
                (e = {
                    header: el.intl.string(el.t.jxXMEx),
                    body: el.intl.format(el.t.fSv59f, { helpdeskArticle: H.Z.getArticleURL(er.BhN.GDPR_PACKAGE_CONTENTS) }),
                    confirmText: el.intl.string(el.t.NYgNg4),
                    cancelText: el.intl.string(el.t.jpVjsr),
                    confirmButtonColor: p.Button.Colors.BRAND,
                    onConfirm: (e) => {
                        this.setState({ requestingHarvest: !0 }, () => {
                            (0, E.V3)(e)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? (this.setState({ currentHarvestRequest: e.body }), f.Z.show({ body: el.intl.string(el.t['6Nmv4u']) }))
                                            : f.Z.show({
                                                  title: el.intl.string(el.t.OjbtDg),
                                                  body: el.intl.string(el.t['0F5Jys'])
                                              });
                                    },
                                    () =>
                                        f.Z.show({
                                            title: el.intl.string(el.t.OjbtDg),
                                            body: el.intl.string(el.t['0F5Jys'])
                                        })
                                )
                                .finally(() => this.setState({ requestingHarvest: !1 }));
                        });
                    }
                }),
                    (0, p.openModal)((t) =>
                        (0, r.jsx)(ef, {
                            modalProps: t,
                            settings: e
                        })
                    );
            });
        let { defaultGuildsRestricted: t, subsection: n } = e;
        this.state = {
            defaultGuildsRestricted: t,
            currentHarvestRequest: null,
            requestingHarvest: !0,
            selectedTab: null != n ? n : ea.SU.SETTINGS
        };
    }
}
function eT() {
    let e = (0, g.e7)([V.default], () => {
            let e = V.default.getCurrentUser();
            return d()(null != e, 'ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined'), e;
        }),
        t = (0, g.cj)([w.Z], () => ({
            fetchedConsents: w.Z.fetchedConsents,
            usageStatistics: w.Z.hasConsented(er.pjP.USAGE_STATISTICS),
            personalization: w.Z.hasConsented(er.pjP.PERSONALIZATION)
        })),
        n = (0, g.e7)([D.Z], () => D.Z.getFetchError()),
        i = (0, g.e7)([U.Z], () => U.Z.getSubsection()),
        s = (0, b.yh)(),
        a = (0, j.Xo)({ location: 'web_user_privacy_and_safety_settings' }),
        { hasSearchResults: l, searchResults: o } = (0, ee.E)(),
        c = (0, R.p)(),
        u = (0, O.Z)(),
        { enabled: m } = (0, y.S)({ location: 'PrivacySafetySettings' });
    return (0, r.jsx)(eC, {
        currentUser: e,
        defaultGuildsRestricted: q.iG.useSetting(),
        nonSpamRetrainingOptIn: q.kJ.useSetting(),
        viewNsfwGuilds: q.DC.useSetting(),
        viewNsfwCommands: q.xM.useSetting(),
        explicitContentFilter: q.UP.useSetting(),
        keywordFilter: c,
        dmSpamFilter: q.Xr.useSetting(),
        showCurrentGame: q.G6.useSetting(),
        dropsOptedOut: q.bh.useSetting(),
        safetyHubFetchError: n,
        mediaRedactionIsEnabled: s,
        keywordFilteringExperimentEnabled: a,
        userIsConsideredAdult: null == u || u,
        subsection: i,
        searchFilter: l ? o : void 0,
        isSecureFramesEnabled: m,
        ...t
    });
}
