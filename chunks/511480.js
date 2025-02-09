n.d(t, {
    Z: () => G,
    s: () => M
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(852860),
    o = n(558324),
    c = n(933557),
    d = n(456268),
    u = n(134432),
    m = n(813197),
    h = n(208567),
    g = n(984933),
    x = n(496675),
    p = n(699516),
    _ = n(594174),
    C = n(768581),
    f = n(900849),
    v = n(434404),
    N = n(999382),
    j = n(718157),
    I = n(450474),
    E = n(209054),
    b = n(118215),
    T = n(166184),
    S = n(96788),
    R = n(936735),
    Z = n(654351),
    y = n(354051),
    A = n(347604),
    L = n(203377),
    D = n(929834),
    O = n(981631),
    k = n(388032),
    P = n(497309);
function w(e, t, n) {
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
let M = l.ZP.connectStores([N.Z], () => {
    let { guild: e, originalGuild: t, submitting: n, guildMetadata: i } = N.Z.getProps();
    return {
        guild: e,
        submitting: n,
        onReset() {
            null != e && v.Z.init(e.id);
        },
        onSave() {
            null != e &&
                ((0, Z.UA)(e, t),
                v.Z.saveGuild(e.id, {
                    features: e.features,
                    discoverySplash: e.discoverySplash,
                    description: e.description,
                    safetyAlertsChannelId: e.safetyAlertsChannelId,
                    rulesChannelId: e.rulesChannelId,
                    preferredLocale: e.preferredLocale
                }),
                (0, d.Vv)({
                    guildId: e.id,
                    primaryCategoryId: i.primaryCategoryId,
                    keywords: i.keywords,
                    emojiDiscoverabilityEnabled: i.emojiDiscoverabilityEnabled,
                    partnerActionedTimestamp: i.partnerActionedTimestamp,
                    partnerApplicationTimestamp: i.partnerApplicationTimestamp,
                    isPublished: i.isPublished,
                    reasonsToJoin: i.reasonsToJoin,
                    socialLinks: i.socialLinks,
                    about: i.about
                }));
        }
    };
})(a.Z);
class U extends r.PureComponent {
    async componentDidMount() {
        let { guild: e } = this.props;
        if (null != e) {
            (0, E.k)(e.id).then(() => {
                (0, S.V)(e.id);
            }),
                (0, d.le)(),
                (0, d.aC)(e.id);
            let t = await (0, f.Eg)(e.id);
            null != t && this.setState({ discoverableGuild: t });
        }
    }
    renderDiscoverableSection() {
        let { guild: e, isGuildAdmin: t } = this.props;
        if (null == e) return;
        let n = e.hasFeature(O.oNc.DISCOVERABLE);
        return (0, i.jsxs)(s.hjN, {
            className: P.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.vwX, {
                            className: P.formTitle,
                            children: k.intl.string(k.t.XU0S6u)
                        }),
                        (0, i.jsx)(s.R94, {
                            type: s.geA.DESCRIPTION,
                            className: P.formDescription,
                            children: k.intl.string(k.t['IIiV/P'])
                        }),
                        (0, i.jsx)(s.R94, {
                            type: s.geA.DESCRIPTION,
                            className: P.formDescription,
                            children: k.intl.string(k.t.rSHA09)
                        }),
                        (0, i.jsx)(s.ua7, {
                            text: t ? null : k.intl.string(k.t['5VbUBw']),
                            children: (e) =>
                                (0, i.jsx)(s.zxk, {
                                    size: s.zxk.Sizes.SMALL,
                                    onClick: this.handleToggleDiscovery,
                                    color: n ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                                    disabled: !t,
                                    ...e,
                                    children: n ? k.intl.string(k.t.VHHyFR) : k.intl.string(k.t.XU0S6u)
                                })
                        })
                    ]
                }),
                (0, i.jsx)(T.Z, {
                    className: P.guildCard,
                    loading: null == e,
                    guild: e
                })
            ]
        });
    }
    renderCoverImageSection() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        if (null != e)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(s.hjN, {
                        className: P.twoColumnFormSection,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(s.vwX, {
                                        className: P.formTitle,
                                        children: k.intl.string(k.t['8bT/Cg'])
                                    }),
                                    (0, i.jsx)(s.R94, {
                                        type: s.geA.DESCRIPTION,
                                        className: P.formDescription,
                                        children: k.intl.string(k.t.Ltsutr)
                                    }),
                                    (0, i.jsxs)(s.zxk, {
                                        size: s.zxk.Sizes.SMALL,
                                        color: s.zxk.Colors.PRIMARY,
                                        children: [
                                            k.intl.string(k.t.yG2pUl),
                                            (0, i.jsx)(m.ZP, {
                                                disabled: !n,
                                                onChange: this.handleSplashChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: P.imageUploaderWrapper,
                                children: (0, i.jsx)(h.Z, {
                                    image: e.discoverySplash,
                                    makeURL: (t) =>
                                        C.ZP.getGuildDiscoverySplashURL({
                                            id: e.id,
                                            splash: t,
                                            size: 512 * (0, u.x_)()
                                        }),
                                    disabled: !n,
                                    onChange: this.handleSplashChange,
                                    hint: k.intl.string(k.t.uPvxqK),
                                    imageClassName: P.imageUploaderInnerSquare,
                                    hideSize: !0
                                })
                            })
                        ]
                    }),
                    (null == t ? void 0 : t.discovery_splash) != null
                        ? (0, i.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: t.discovery_splash
                          })
                        : null
                ]
            });
    }
    renderEmojiDiscoverabilitySection() {
        let { canManageGuild: e, guildMetadata: t, guild: n } = this.props,
            { discoverableGuild: r } = this.state,
            { emojiDiscoverabilityEnabled: l } = t;
        return (0, i.jsxs)(s.hjN, {
            className: P.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    className: P.formColumnLeft,
                    children: [
                        (0, i.jsx)(s.vwX, {
                            className: P.formTitle,
                            children: k.intl.string(k.t.DhJ8ur)
                        }),
                        (0, i.jsx)(s.R94, {
                            className: P.description,
                            type: s.geA.DESCRIPTION,
                            children: k.intl.string(k.t['/RSSlZ'])
                        }),
                        (0, i.jsx)(s.zxk, {
                            size: s.zxk.Sizes.SMALL,
                            color: l ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                            disabled: !e,
                            onClick: this.handleToggleEmojiDiscoverability,
                            children: l ? k.intl.string(k.t.XnrNLi) : k.intl.string(k.t.bHbZLC)
                        })
                    ]
                }),
                (0, i.jsx)(R.k, {
                    guild: n,
                    discoverableGuild: r
                })
            ]
        });
    }
    renderLocaleSelector() {
        let { guild: e, canManageGuild: t, localeOptions: n } = this.props;
        if (null != e)
            return (0, i.jsxs)(s.hjN, {
                className: P.twoColumnFormSection,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.vwX, {
                                className: P.formTitle,
                                children: k.intl.string(k.t.pO60f3)
                            }),
                            (0, i.jsx)(s.R94, {
                                type: s.geA.DESCRIPTION,
                                className: P.formDescription,
                                children: k.intl.string(k.t['SF/GRk'])
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: P.formSelect,
                        children: (0, i.jsx)(s.q4e, {
                            value: e.preferredLocale,
                            options: n,
                            onChange: this.handleLocaleChange,
                            isDisabled: !t
                        })
                    })
                ]
            });
    }
    renderCategoriesSection() {
        let { canManageGuild: e, guildMetadata: t, errors: n, guild: r } = this.props;
        if (null != r)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(s.hjN, {
                        children: [
                            (0, i.jsx)(s.vwX, {
                                className: P.formTitle,
                                children: k.intl.string(k.t['5b4VCQ'])
                            }),
                            (0, i.jsx)(s.R94, {
                                type: s.geA.DESCRIPTION,
                                className: P.description,
                                children: k.intl.string(k.t.MSfJlZ)
                            })
                        ]
                    }),
                    (0, i.jsx)(j.E, {
                        guildId: r.id,
                        guildMetadata: t,
                        isDisabled: !e
                    }),
                    (0, i.jsxs)(s.hjN, {
                        className: P.noDividerFormSection,
                        children: [
                            (0, i.jsx)(s.vwX, {
                                className: P.formTitle,
                                children: k.intl.string(k.t.oOPlPD)
                            }),
                            (0, i.jsx)(I.Z, {
                                guild: r,
                                guildMetadata: t
                            })
                        ]
                    }),
                    (null == n ? void 0 : n.category) != null
                        ? (0, i.jsx)(s.Text, {
                              color: 'text-danger',
                              className: P.error,
                              variant: 'text-sm/normal',
                              children: n.category
                          })
                        : null
                ]
            });
    }
    renderKeywordsSection() {
        let { canManageGuild: e, guildMetadata: t, errors: n } = this.props;
        return (0, i.jsxs)(s.hjN, {
            children: [
                (0, i.jsx)(s.vwX, {
                    className: P.formTitle,
                    children: k.intl.string(k.t.V5pXNT)
                }),
                (0, i.jsx)(s.R94, {
                    className: P.description,
                    type: s.geA.DESCRIPTION,
                    children: k.intl.format(k.t.FLMb5O, {})
                }),
                (0, i.jsx)(o.Z, {
                    tags: t.keywords,
                    onRemoveTag: this.handleRemoveKeyword,
                    onAddTag: this.handleAddKeyword,
                    maxTags: L.G7,
                    maxTaxLength: L._0,
                    disabled: !e
                }),
                (null == n ? void 0 : n.keywords) != null
                    ? (0, i.jsx)(s.Text, {
                          color: 'text-danger',
                          className: P.error,
                          variant: 'text-sm/normal',
                          children: n.keywords
                      })
                    : null
            ]
        });
    }
    render() {
        let { guild: e, discoveryChecklist: t, isGuildAdmin: n } = this.props;
        if (null == e || null == t) return null;
        switch ((0, Z.TJ)(e, t)) {
            case Z.d5.INTRO:
                return (0, i.jsx)(A.Z, {
                    guild: e,
                    onEnableDiscovery: this.handleEnableDiscovery,
                    isGuildAdmin: n
                });
            case Z.d5.DISQUALIFIED:
                return (0, i.jsx)(y.Z, { guild: e });
            case Z.d5.SETTINGS:
                return (0, i.jsxs)(s.hjN, {
                    className: P.__invalid_discoverySettings,
                    title: k.intl.string(k.t.oGaVGx),
                    tag: s.RB0.H1,
                    children: [this.renderDiscoverableSection(), (0, i.jsx)(s.$i$, { className: P.divider }), this.renderCoverImageSection(), (0, i.jsx)(s.$i$, { className: P.divider }), this.renderEmojiDiscoverabilitySection(), (0, i.jsx)(s.$i$, { className: P.divider }), this.renderCategoriesSection(), (0, i.jsx)(s.$i$, { className: P.divider }), this.renderKeywordsSection(), (0, i.jsx)(s.$i$, { className: P.divider }), this.renderLocaleSelector()]
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            w(this, 'state', { discoverableGuild: null }),
            w(this, 'handleToggleDiscovery', () => {
                let { guild: e } = this.props;
                if (null == e) return;
                let t = new Set(e.features);
                e.hasFeature(O.oNc.DISCOVERABLE) ? t.delete(O.oNc.DISCOVERABLE) : t.add(O.oNc.DISCOVERABLE), v.Z.updateGuild({ features: t });
            }),
            w(this, 'handleEnableDiscovery', async () => {
                let e = await (0, s.ZDy)(
                    async () => {
                        let { default: e } = await n.e('50721').then(n.bind(n, 210172));
                        return (t) => {
                            let { ...n } = t;
                            return (0, i.jsx)(e, { ...n });
                        };
                    },
                    {
                        onCloseRequest: () => {
                            null != e && (0, s.Mr3)(e);
                        }
                    }
                );
            }),
            w(this, 'handleSplashChange', (e) => {
                v.Z.updateGuild({ discoverySplash: e });
            }),
            w(this, 'handleLocaleChange', (e) => {
                v.Z.updateGuild({ preferredLocale: e });
            }),
            w(this, 'handleRemoveKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props;
                if ((null == t ? void 0 : t.id) == null) return;
                let i = [...n.keywords];
                i.splice(e, 1), (0, d.zH)(t.id, i);
            }),
            w(this, 'handleAddKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props,
                    { keywords: i } = n;
                (null == t ? void 0 : t.id) != null && (i.length >= L.G7 || (0, d.zH)(t.id, [...i, e]));
            }),
            w(this, 'handleToggleEmojiDiscoverability', () => {
                let { guild: e, guildMetadata: t } = this.props,
                    { emojiDiscoverabilityEnabled: n } = t;
                (null == e ? void 0 : e.id) != null && (0, d.J9)(e.id, !n);
            });
    }
}
let G = l.ZP.connectStores([N.Z, x.Z, b.ZP, g.ZP, _.default, p.Z], () => {
    let { guild: e, errors: t, submitting: n, guildMetadata: i } = N.Z.getProps(),
        r = x.Z.can(O.Plq.MANAGE_GUILD, e),
        l = x.Z.can(O.Plq.ADMINISTRATOR, e),
        s = null != e ? b.ZP.getDiscoveryChecklist(e.id) : null,
        a = null != e ? g.ZP.getChannels(e.id) : null,
        o = [];
    return (
        null != a &&
            a[g.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === O.d4z.GUILD_TEXT &&
                    o.push({
                        value: t.id,
                        label: (0, c.F6)(t, _.default, p.Z, !0)
                    });
            }),
        {
            guild: e,
            errors: t,
            submitting: n,
            discoveryChecklist: s,
            selectableChannels: o,
            canManageGuild: r,
            isGuildAdmin: l,
            guildMetadata: i,
            localeOptions: (0, D.jb)()
        }
    );
})(U);
