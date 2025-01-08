n.d(t, {
    s: function () {
        return U;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(852860),
    o = n(558324),
    c = n(933557),
    d = n(285888),
    u = n(456268),
    m = n(526429),
    h = n(134432),
    g = n(813197),
    x = n(208567),
    p = n(984933),
    f = n(496675),
    C = n(699516),
    v = n(594174),
    _ = n(768581),
    N = n(900849),
    I = n(434404),
    T = n(999382),
    j = n(450474),
    b = n(209054),
    S = n(118215),
    E = n(166184),
    R = n(96788),
    y = n(936735),
    A = n(654351),
    Z = n(354051),
    L = n(347604),
    D = n(203377),
    O = n(929834),
    k = n(981631),
    M = n(128449),
    P = n(388032),
    w = n(37084);
function B(e, t, n) {
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
let U = l.ZP.connectStores([T.Z], () => {
    let { guild: e, originalGuild: t, submitting: n, guildMetadata: i } = T.Z.getProps();
    return {
        guild: e,
        submitting: n,
        onReset() {
            if (null != e) I.Z.init(e.id);
        },
        onSave() {
            if (null != e)
                (0, A.UA)(e, t),
                    I.Z.saveGuild(e.id, {
                        features: e.features,
                        discoverySplash: e.discoverySplash,
                        description: e.description,
                        safetyAlertsChannelId: e.safetyAlertsChannelId,
                        rulesChannelId: e.rulesChannelId,
                        preferredLocale: e.preferredLocale
                    }),
                    (0, u.Vv)({
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
})(s.Z);
class G extends r.PureComponent {
    async componentDidMount() {
        let { guild: e } = this.props;
        if (null != e) {
            (0, b.k)(e.id).then(() => {
                (0, R.V)(e.id);
            }),
                (0, u.le)(),
                (0, u.aC)(e.id);
            let t = await (0, N.Eg)(e.id);
            null != t && this.setState({ discoverableGuild: t });
        }
    }
    renderDiscoverableSection() {
        let { guild: e, isGuildAdmin: t } = this.props;
        if (null == e) return;
        let n = e.hasFeature(k.oNc.DISCOVERABLE);
        return (0, i.jsxs)(a.FormSection, {
            className: w.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: w.formTitle,
                            children: P.intl.string(P.t.XU0S6u)
                        }),
                        (0, i.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            className: w.formDescription,
                            children: P.intl.string(P.t['IIiV/P'])
                        }),
                        (0, i.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            className: w.formDescription,
                            children: P.intl.string(P.t.rSHA09)
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: t ? null : P.intl.string(P.t['5VbUBw']),
                            children: (e) =>
                                (0, i.jsx)(a.Button, {
                                    size: a.Button.Sizes.SMALL,
                                    onClick: this.handleToggleDiscovery,
                                    color: n ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                                    disabled: !t,
                                    ...e,
                                    children: n ? P.intl.string(P.t.VHHyFR) : P.intl.string(P.t.XU0S6u)
                                })
                        })
                    ]
                }),
                (0, i.jsx)(E.Z, {
                    className: w.guildCard,
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
                    (0, i.jsxs)(a.FormSection, {
                        className: w.twoColumnFormSection,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(a.FormTitle, {
                                        className: w.formTitle,
                                        children: P.intl.string(P.t['8bT/Cg'])
                                    }),
                                    (0, i.jsx)(a.FormText, {
                                        type: a.FormTextTypes.DESCRIPTION,
                                        className: w.formDescription,
                                        children: P.intl.string(P.t.Ltsutr)
                                    }),
                                    (0, i.jsxs)(a.Button, {
                                        size: a.Button.Sizes.SMALL,
                                        color: a.Button.Colors.PRIMARY,
                                        children: [
                                            P.intl.string(P.t.yG2pUl),
                                            (0, i.jsx)(g.ZP, {
                                                disabled: !n,
                                                onChange: this.handleSplashChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: w.imageUploaderWrapper,
                                children: (0, i.jsx)(x.Z, {
                                    image: e.discoverySplash,
                                    makeURL: (t) =>
                                        _.ZP.getGuildDiscoverySplashURL({
                                            id: e.id,
                                            splash: t,
                                            size: 512 * (0, h.x_)()
                                        }),
                                    disabled: !n,
                                    onChange: this.handleSplashChange,
                                    hint: P.intl.string(P.t.uPvxqK),
                                    imageClassName: w.imageUploaderInnerSquare,
                                    hideSize: !0
                                })
                            })
                        ]
                    }),
                    (null == t ? void 0 : t.discovery_splash) != null
                        ? (0, i.jsx)(a.Text, {
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
        return (0, i.jsxs)(a.FormSection, {
            className: w.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    className: w.formColumnLeft,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: w.formTitle,
                            children: P.intl.string(P.t.DhJ8ur)
                        }),
                        (0, i.jsx)(a.FormText, {
                            className: w.description,
                            type: a.FormTextTypes.DESCRIPTION,
                            children: P.intl.string(P.t['/RSSlZ'])
                        }),
                        (0, i.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            color: l ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                            disabled: !e,
                            onClick: this.handleToggleEmojiDiscoverability,
                            children: l ? P.intl.string(P.t.XnrNLi) : P.intl.string(P.t.bHbZLC)
                        })
                    ]
                }),
                (0, i.jsx)(y.k, {
                    guild: n,
                    discoverableGuild: r
                })
            ]
        });
    }
    renderLocaleSelector() {
        let { guild: e, canManageGuild: t, localeOptions: n } = this.props;
        if (null != e)
            return (0, i.jsxs)(a.FormSection, {
                className: w.twoColumnFormSection,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: w.formTitle,
                                children: P.intl.string(P.t.pO60f3)
                            }),
                            (0, i.jsx)(a.FormText, {
                                type: a.FormTextTypes.DESCRIPTION,
                                className: w.formDescription,
                                children: P.intl.string(P.t['SF/GRk'])
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: w.formSelect,
                        children: (0, i.jsx)(a.SingleSelect, {
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
                    (0, i.jsxs)(a.FormSection, {
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: w.formTitle,
                                children: P.intl.string(P.t['5b4VCQ'])
                            }),
                            (0, i.jsx)(a.FormText, {
                                type: a.FormTextTypes.DESCRIPTION,
                                className: w.description,
                                children: P.intl.string(P.t.MSfJlZ)
                            })
                        ]
                    }),
                    (0, i.jsx)(d.Z, {
                        value: t.primaryCategoryId === M.o3 ? null : t.primaryCategoryId,
                        placeholder: P.intl.string(P.t.XqMe3N),
                        options: n,
                        onChange: this.handlePrimaryCategoryChange,
                        disabled: !e,
                        searchable: !0,
                        clearable: !0
                    }),
                    (0, i.jsxs)(a.FormSection, {
                        className: w.noDividerFormSection,
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: w.formTitle,
                                children: P.intl.string(P.t.oOPlPD)
                            }),
                            (0, i.jsx)(j.Z, {
                                guild: l,
                                guildMetadata: t
                            })
                        ]
                    }),
                    (null == r ? void 0 : r.category) != null
                        ? (0, i.jsx)(a.Text, {
                              color: 'text-danger',
                              className: w.error,
                              variant: 'text-sm/normal',
                              children: r.category
                          })
                        : null
                ]
            });
    }
    renderKeywordsSection() {
        let { canManageGuild: e, guildMetadata: t, errors: n } = this.props;
        return (0, i.jsxs)(a.FormSection, {
            children: [
                (0, i.jsx)(a.FormTitle, {
                    className: w.formTitle,
                    children: P.intl.string(P.t.V5pXNT)
                }),
                (0, i.jsx)(a.FormText, {
                    className: w.description,
                    type: a.FormTextTypes.DESCRIPTION,
                    children: P.intl.format(P.t.FLMb5O, {})
                }),
                (0, i.jsx)(o.Z, {
                    tags: t.keywords,
                    onRemoveTag: this.handleRemoveKeyword,
                    onAddTag: this.handleAddKeyword,
                    maxTags: D.G7,
                    maxTaxLength: D._0,
                    disabled: !e
                }),
                (null == n ? void 0 : n.keywords) != null
                    ? (0, i.jsx)(a.Text, {
                          color: 'text-danger',
                          className: w.error,
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
        switch ((0, A.TJ)(e, t)) {
            case A.d5.INTRO:
            case A.d5.INTRO_INELIGIBLE:
                return (0, i.jsx)(L.Z, {
                    guild: e,
                    onEnableDiscovery: this.handleEnableDiscovery,
                    isGuildAdmin: n
                });
            case A.d5.DISQUALIFIED:
                return (0, i.jsx)(Z.Z, { guild: e });
            case A.d5.SETTINGS:
                return (0, i.jsxs)(a.FormSection, {
                    className: w.__invalid_discoverySettings,
                    title: P.intl.string(P.t.oGaVGx),
                    tag: a.FormTitleTags.H1,
                    children: [this.renderDiscoverableSection(), (0, i.jsx)(a.FormDivider, { className: w.divider }), this.renderCoverImageSection(), (0, i.jsx)(a.FormDivider, { className: w.divider }), this.renderEmojiDiscoverabilitySection(), (0, i.jsx)(a.FormDivider, { className: w.divider }), this.renderCategoriesSection(), (0, i.jsx)(a.FormDivider, { className: w.divider }), this.renderKeywordsSection(), (0, i.jsx)(a.FormDivider, { className: w.divider }), this.renderLocaleSelector()]
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            B(this, 'state', { discoverableGuild: null }),
            B(this, 'handleToggleDiscovery', () => {
                let { guild: e } = this.props;
                if (null == e) return;
                let t = new Set(e.features);
                e.hasFeature(k.oNc.DISCOVERABLE) ? t.delete(k.oNc.DISCOVERABLE) : t.add(k.oNc.DISCOVERABLE), I.Z.updateGuild({ features: t });
            }),
            B(this, 'handleEnableDiscovery', async () => {
                let e = await (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e('50721').then(n.bind(n, 210172));
                        return (t) => {
                            let { ...n } = t;
                            return (0, i.jsx)(e, { ...n });
                        };
                    },
                    {
                        onCloseRequest: () => {
                            null != e && (0, a.closeModal)(e);
                        }
                    }
                );
            }),
            B(this, 'handleSplashChange', (e) => {
                I.Z.updateGuild({ discoverySplash: e });
            }),
            B(this, 'handleLocaleChange', (e) => {
                I.Z.updateGuild({ preferredLocale: e });
            }),
            B(this, 'handlePrimaryCategoryChange', (e) => {
                var t;
                let { guild: n } = this.props;
                (null == n ? void 0 : n.id) != null && (0, u.TA)(null == n ? void 0 : n.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : M.o3);
            }),
            B(this, 'handleRemoveKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props;
                if ((null == t ? void 0 : t.id) == null) return;
                let i = [...n.keywords];
                i.splice(e, 1), (0, u.zH)(t.id, i);
            }),
            B(this, 'handleAddKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props,
                    { keywords: i } = n;
                if ((null == t ? void 0 : t.id) != null) !(i.length >= D.G7) && (0, u.zH)(t.id, [...i, e]);
            }),
            B(this, 'handleToggleEmojiDiscoverability', () => {
                let { guild: e, guildMetadata: t } = this.props,
                    { emojiDiscoverabilityEnabled: n } = t;
                (null == e ? void 0 : e.id) != null && (0, u.J9)(e.id, !n);
            });
    }
}
t.Z = l.ZP.connectStores([T.Z, f.Z, S.ZP, p.ZP, m.Z, v.default, C.Z], () => {
    let { guild: e, errors: t, submitting: n, guildMetadata: i } = T.Z.getProps(),
        r = f.Z.can(k.Plq.MANAGE_GUILD, e),
        l = f.Z.can(k.Plq.ADMINISTRATOR, e),
        a = null != e ? S.ZP.getDiscoveryChecklist(e.id) : null,
        s = null != e ? p.ZP.getChannels(e.id) : null,
        o = [];
    null != s &&
        s[p.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === k.d4z.GUILD_TEXT &&
                o.push({
                    value: t.id,
                    label: (0, c.F6)(t, v.default, C.Z, !0)
                });
        });
    let d = m.Z.getPrimaryCategories().map((e) => {
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
        primaryCategoryOptions: d,
        localeOptions: (0, O.jb)()
    };
})(G);
