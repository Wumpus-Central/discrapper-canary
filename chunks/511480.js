n.d(t, {
    s: function () {
        return H;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(772848),
    a = n(442837),
    s = n(481060),
    o = n(852860),
    c = n(558324),
    d = n(933557),
    u = n(339085),
    m = n(231053),
    h = n(285888),
    g = n(456268),
    x = n(526429),
    p = n(134432),
    f = n(813197),
    C = n(208567),
    v = n(183023),
    _ = n(984933),
    I = n(496675),
    N = n(699516),
    T = n(594174),
    j = n(768581),
    b = n(900849),
    S = n(434404),
    E = n(999382),
    R = n(450474),
    y = n(209054),
    A = n(118215),
    Z = n(166184),
    L = n(96788),
    D = n(654351),
    O = n(354051),
    P = n(347604),
    k = n(203377),
    M = n(929834),
    w = n(981631),
    B = n(128449),
    U = n(388032),
    G = n(37084);
function F(e, t, n) {
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
let H = a.ZP.connectStores([E.Z], () => {
    let { guild: e, originalGuild: t, submitting: n, guildMetadata: i } = E.Z.getProps();
    return {
        guild: e,
        submitting: n,
        onReset() {
            if (null != e) S.Z.init(e.id);
        },
        onSave() {
            if (null != e)
                (0, D.UA)(e, t),
                    S.Z.saveGuild(e.id, {
                        features: e.features,
                        discoverySplash: e.discoverySplash,
                        description: e.description,
                        safetyAlertsChannelId: e.safetyAlertsChannelId,
                        rulesChannelId: e.rulesChannelId,
                        preferredLocale: e.preferredLocale
                    }),
                    (0, g.Vv)({
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
                    });
        }
    };
})(o.Z);
class z extends r.PureComponent {
    async componentDidMount() {
        let { guild: e } = this.props;
        if (null != e) {
            (0, y.k)(e.id).then(() => {
                (0, L.V)(e.id);
            }),
                (0, g.le)(),
                (0, g.aC)(e.id);
            let t = await (0, b.Eg)(e.id);
            null != t && this.setState({ discoverableGuild: t });
        }
    }
    renderDiscoverableSection() {
        let { guild: e, isGuildAdmin: t } = this.props;
        if (null == e) return;
        let n = e.hasFeature(w.oNc.DISCOVERABLE);
        return (0, i.jsxs)(s.FormSection, {
            className: G.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.FormTitle, {
                            className: G.formTitle,
                            children: U.intl.string(U.t.XU0S6u)
                        }),
                        (0, i.jsx)(s.FormText, {
                            type: s.FormTextTypes.DESCRIPTION,
                            className: G.formDescription,
                            children: U.intl.string(U.t['IIiV/P'])
                        }),
                        (0, i.jsx)(s.FormText, {
                            type: s.FormTextTypes.DESCRIPTION,
                            className: G.formDescription,
                            children: U.intl.string(U.t.rSHA09)
                        }),
                        (0, i.jsx)(s.Tooltip, {
                            text: t ? null : U.intl.string(U.t['5VbUBw']),
                            children: (e) =>
                                (0, i.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    onClick: this.handleToggleDiscovery,
                                    color: n ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                                    disabled: !t,
                                    ...e,
                                    children: n ? U.intl.string(U.t.VHHyFR) : U.intl.string(U.t.XU0S6u)
                                })
                        })
                    ]
                }),
                (0, i.jsx)(Z.Z, {
                    className: G.guildCard,
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
                    (0, i.jsxs)(s.FormSection, {
                        className: G.twoColumnFormSection,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(s.FormTitle, {
                                        className: G.formTitle,
                                        children: U.intl.string(U.t['8bT/Cg'])
                                    }),
                                    (0, i.jsx)(s.FormText, {
                                        type: s.FormTextTypes.DESCRIPTION,
                                        className: G.formDescription,
                                        children: U.intl.string(U.t.Ltsutr)
                                    }),
                                    (0, i.jsxs)(s.Button, {
                                        size: s.Button.Sizes.SMALL,
                                        color: s.Button.Colors.PRIMARY,
                                        children: [
                                            U.intl.string(U.t.yG2pUl),
                                            (0, i.jsx)(f.ZP, {
                                                disabled: !n,
                                                onChange: this.handleSplashChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: G.imageUploaderWrapper,
                                children: (0, i.jsx)(C.Z, {
                                    image: e.discoverySplash,
                                    makeURL: (t) =>
                                        j.ZP.getGuildDiscoverySplashURL({
                                            id: e.id,
                                            splash: t,
                                            size: 512 * (0, p.x_)()
                                        }),
                                    disabled: !n,
                                    onChange: this.handleSplashChange,
                                    hint: U.intl.string(U.t.uPvxqK),
                                    imageClassName: G.imageUploaderInnerSquare,
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
        var e;
        let { canManageGuild: t, guildMetadata: n, guild: r } = this.props,
            { discoverableGuild: a } = this.state,
            { emojiDiscoverabilityEnabled: o } = n,
            c = a;
        if (null == c && null != r) {
            let e = u.ZP.getGuildEmoji(r.id);
            c = {
                ...r,
                premiumSubscriptionCount: null == r ? void 0 : r.premiumSubscriberCount,
                emojis: e,
                emojiCount: e.length,
                presenceCount: 1234,
                memberCount: 1234
            };
        }
        let d = null != c ? m.JO.createFromDiscoverableGuild(c) : null,
            h = null == c ? void 0 : null === (e = c.emojis) || void 0 === e ? void 0 : e[0],
            g =
                null != h
                    ? {
                          name: h.require_colons ? ':'.concat(h.name, ':') : h.name,
                          emojiId: h.id,
                          animated: h.animated,
                          jumboable: !0
                      }
                    : {};
        return (0, i.jsxs)(s.FormSection, {
            className: G.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    className: G.formColumnLeft,
                    children: [
                        (0, i.jsx)(s.FormTitle, {
                            className: G.formTitle,
                            children: U.intl.string(U.t.DhJ8ur)
                        }),
                        (0, i.jsx)(s.FormText, {
                            className: G.description,
                            type: s.FormTextTypes.DESCRIPTION,
                            children: U.intl.string(U.t['/RSSlZ'])
                        }),
                        (0, i.jsx)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            color: o ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                            disabled: !t,
                            onClick: this.handleToggleEmojiDiscoverability,
                            children: o ? U.intl.string(U.t.XnrNLi) : U.intl.string(U.t.bHbZLC)
                        })
                    ]
                }),
                null != d &&
                    d.isDiscoverable() &&
                    (0, i.jsx)(v.UA, {
                        sourceType: m.w6.GUILD,
                        expressionSourceApplication: null,
                        expressionSourceGuild: d,
                        node: g,
                        closePopout: w.dG4,
                        nonce: (0, l.Z)(),
                        demoMode: !0
                    })
            ]
        });
    }
    renderLocaleSelector() {
        let { guild: e, canManageGuild: t, localeOptions: n } = this.props;
        if (null != e)
            return (0, i.jsxs)(s.FormSection, {
                className: G.twoColumnFormSection,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.FormTitle, {
                                className: G.formTitle,
                                children: U.intl.string(U.t.pO60f3)
                            }),
                            (0, i.jsx)(s.FormText, {
                                type: s.FormTextTypes.DESCRIPTION,
                                className: G.formDescription,
                                children: U.intl.string(U.t['SF/GRk'])
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: G.formSelect,
                        children: (0, i.jsx)(s.SingleSelect, {
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
        let { canManageGuild: e, guildMetadata: t, primaryCategoryOptions: n, errors: r, guild: l } = this.props;
        if (null != l)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(s.FormSection, {
                        children: [
                            (0, i.jsx)(s.FormTitle, {
                                className: G.formTitle,
                                children: U.intl.string(U.t['5b4VCQ'])
                            }),
                            (0, i.jsx)(s.FormText, {
                                type: s.FormTextTypes.DESCRIPTION,
                                className: G.description,
                                children: U.intl.string(U.t.MSfJlZ)
                            })
                        ]
                    }),
                    (0, i.jsx)(h.Z, {
                        value: t.primaryCategoryId === B.o3 ? null : t.primaryCategoryId,
                        placeholder: U.intl.string(U.t.XqMe3N),
                        options: n,
                        onChange: this.handlePrimaryCategoryChange,
                        disabled: !e,
                        searchable: !0,
                        clearable: !0
                    }),
                    (0, i.jsxs)(s.FormSection, {
                        className: G.noDividerFormSection,
                        children: [
                            (0, i.jsx)(s.FormTitle, {
                                className: G.formTitle,
                                children: U.intl.string(U.t.oOPlPD)
                            }),
                            (0, i.jsx)(R.Z, {
                                guild: l,
                                guildMetadata: t
                            })
                        ]
                    }),
                    (null == r ? void 0 : r.category) != null
                        ? (0, i.jsx)(s.Text, {
                              color: 'text-danger',
                              className: G.error,
                              variant: 'text-sm/normal',
                              children: r.category
                          })
                        : null
                ]
            });
    }
    renderKeywordsSection() {
        let { canManageGuild: e, guildMetadata: t, errors: n } = this.props;
        return (0, i.jsxs)(s.FormSection, {
            children: [
                (0, i.jsx)(s.FormTitle, {
                    className: G.formTitle,
                    children: U.intl.string(U.t.V5pXNT)
                }),
                (0, i.jsx)(s.FormText, {
                    className: G.description,
                    type: s.FormTextTypes.DESCRIPTION,
                    children: U.intl.format(U.t.FLMb5O, {})
                }),
                (0, i.jsx)(c.Z, {
                    tags: t.keywords,
                    onRemoveTag: this.handleRemoveKeyword,
                    onAddTag: this.handleAddKeyword,
                    maxTags: k.G7,
                    maxTaxLength: k._0,
                    disabled: !e
                }),
                (null == n ? void 0 : n.keywords) != null
                    ? (0, i.jsx)(s.Text, {
                          color: 'text-danger',
                          className: G.error,
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
        switch ((0, D.TJ)(e, t)) {
            case D.d5.INTRO:
                return (0, i.jsx)(P.Z, {
                    guild: e,
                    onEnableDiscovery: this.handleEnableDiscovery,
                    isGuildAdmin: n
                });
            case D.d5.DISQUALIFIED:
                return (0, i.jsx)(O.Z, { guild: e });
            case D.d5.SETTINGS:
                return (0, i.jsxs)(s.FormSection, {
                    className: G.__invalid_discoverySettings,
                    title: U.intl.string(U.t.oGaVGx),
                    tag: s.FormTitleTags.H1,
                    children: [this.renderDiscoverableSection(), (0, i.jsx)(s.FormDivider, { className: G.divider }), this.renderCoverImageSection(), (0, i.jsx)(s.FormDivider, { className: G.divider }), this.renderEmojiDiscoverabilitySection(), (0, i.jsx)(s.FormDivider, { className: G.divider }), this.renderCategoriesSection(), (0, i.jsx)(s.FormDivider, { className: G.divider }), this.renderKeywordsSection(), (0, i.jsx)(s.FormDivider, { className: G.divider }), this.renderLocaleSelector()]
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { discoverableGuild: null }),
            F(this, 'handleToggleDiscovery', () => {
                let { guild: e } = this.props;
                if (null == e) return;
                let t = new Set(e.features);
                e.hasFeature(w.oNc.DISCOVERABLE) ? t.delete(w.oNc.DISCOVERABLE) : t.add(w.oNc.DISCOVERABLE), S.Z.updateGuild({ features: t });
            }),
            F(this, 'handleEnableDiscovery', async () => {
                let e = await (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e('50721').then(n.bind(n, 210172));
                        return (t) => {
                            let { ...n } = t;
                            return (0, i.jsx)(e, { ...n });
                        };
                    },
                    {
                        onCloseRequest: () => {
                            null != e && (0, s.closeModal)(e);
                        }
                    }
                );
            }),
            F(this, 'handleSplashChange', (e) => {
                S.Z.updateGuild({ discoverySplash: e });
            }),
            F(this, 'handleLocaleChange', (e) => {
                S.Z.updateGuild({ preferredLocale: e });
            }),
            F(this, 'handlePrimaryCategoryChange', (e) => {
                var t;
                let { guild: n } = this.props;
                (null == n ? void 0 : n.id) != null && (0, g.TA)(null == n ? void 0 : n.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : B.o3);
            }),
            F(this, 'handleRemoveKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props;
                if ((null == t ? void 0 : t.id) == null) return;
                let i = [...n.keywords];
                i.splice(e, 1), (0, g.zH)(t.id, i);
            }),
            F(this, 'handleAddKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props,
                    { keywords: i } = n;
                if ((null == t ? void 0 : t.id) != null) !(i.length >= k.G7) && (0, g.zH)(t.id, [...i, e]);
            }),
            F(this, 'handleToggleEmojiDiscoverability', () => {
                let { guild: e, guildMetadata: t } = this.props,
                    { emojiDiscoverabilityEnabled: n } = t;
                (null == e ? void 0 : e.id) != null && (0, g.J9)(e.id, !n);
            });
    }
}
t.Z = a.ZP.connectStores([E.Z, I.Z, A.ZP, _.ZP, x.Z, T.default, N.Z], () => {
    let { guild: e, errors: t, submitting: n, guildMetadata: i } = E.Z.getProps(),
        r = I.Z.can(w.Plq.MANAGE_GUILD, e),
        l = I.Z.can(w.Plq.ADMINISTRATOR, e),
        a = null != e ? A.ZP.getDiscoveryChecklist(e.id) : null,
        s = null != e ? _.ZP.getChannels(e.id) : null,
        o = [];
    null != s &&
        s[_.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === w.d4z.GUILD_TEXT &&
                o.push({
                    value: t.id,
                    label: (0, d.F6)(t, T.default, N.Z, !0)
                });
        });
    let c = x.Z.getPrimaryCategories().map((e) => {
        let { categoryId: t, name: n } = e;
        return {
            value: t,
            label: n
        };
    });
    return {
        guild: e,
        errors: t,
        submitting: n,
        discoveryChecklist: a,
        selectableChannels: o,
        canManageGuild: r,
        isGuildAdmin: l,
        guildMetadata: i,
        primaryCategoryOptions: c,
        localeOptions: (0, M.jb)()
    };
})(z);
