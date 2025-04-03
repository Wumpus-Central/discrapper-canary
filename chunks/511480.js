n.d(t, {
    Z: () => B,
    s: () => G
}),
    n(266796),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(852860),
    o = n(558324),
    c = n(933557),
    d = n(456268),
    u = n(134432),
    m = n(345861),
    g = n(208567),
    p = n(984933),
    h = n(496675),
    f = n(699516),
    b = n(594174),
    x = n(768581),
    j = n(900849),
    N = n(434404),
    _ = n(999382),
    v = n(718157),
    C = n(450474),
    O = n(209054),
    y = n(118215),
    I = n(166184),
    E = n(96788),
    S = n(936735),
    T = n(654351),
    P = n(354051),
    w = n(347604),
    R = n(203377),
    Z = n(929834),
    D = n(981631),
    A = n(388032),
    k = n(131027);
function W(e, t, n) {
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
function L() {
    return (L =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function M(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
let G = s.ZP.connectStores([_.Z], () => {
    let { guild: e, originalGuild: t, submitting: n, guildMetadata: r } = _.Z.getProps();
    return {
        guild: e,
        submitting: n,
        onReset() {
            null != e && N.Z.init(e.id);
        },
        onSave() {
            null != e &&
                ((0, T.UA)(e, t),
                N.Z.saveGuild(e.id, {
                    features: e.features,
                    discoverySplash: e.discoverySplash,
                    description: e.description,
                    safetyAlertsChannelId: e.safetyAlertsChannelId,
                    rulesChannelId: e.rulesChannelId,
                    preferredLocale: e.preferredLocale
                }),
                (0, d.Vv)({
                    guildId: e.id,
                    primaryCategoryId: r.primaryCategoryId,
                    keywords: r.keywords,
                    emojiDiscoverabilityEnabled: r.emojiDiscoverabilityEnabled,
                    partnerActionedTimestamp: r.partnerActionedTimestamp,
                    partnerApplicationTimestamp: r.partnerApplicationTimestamp,
                    isPublished: r.isPublished,
                    reasonsToJoin: r.reasonsToJoin,
                    socialLinks: r.socialLinks,
                    about: r.about
                }));
        }
    };
})(l.Z);
class U extends i.PureComponent {
    async componentDidMount() {
        let { guild: e } = this.props;
        if (null != e) {
            (0, O.k)(e.id).then(() => {
                (0, E.V)(e.id);
            }),
                (0, d.le)(),
                (0, d.aC)(e.id);
            let t = await (0, j.Eg)(e.id);
            null != t && this.setState({ discoverableGuild: t });
        }
    }
    renderDiscoverableSection() {
        let { guild: e, isGuildAdmin: t } = this.props;
        if (null == e) return;
        let n = e.hasFeature(D.oNc.DISCOVERABLE);
        return (0, r.jsxs)(a.hjN, {
            className: k.twoColumnFormSection,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(a.vwX, {
                            className: k.formTitle,
                            children: A.NW.string(A.t.XU0S6u)
                        }),
                        (0, r.jsx)(a.R94, {
                            type: a.geA.DESCRIPTION,
                            className: k.formDescription,
                            children: A.NW.string(A.t['IIiV/P'])
                        }),
                        (0, r.jsx)(a.R94, {
                            type: a.geA.DESCRIPTION,
                            className: k.formDescription,
                            children: A.NW.string(A.t.rSHA09)
                        }),
                        (0, r.jsx)(a.ua7, {
                            text: t ? null : A.NW.string(A.t['5VbUBw']),
                            children: (e) => {
                                var i, s;
                                return (0, r.jsx)(
                                    a.zxk,
                                    ((i = M(
                                        {
                                            size: a.zxk.Sizes.SMALL,
                                            onClick: this.handleToggleDiscovery,
                                            color: n ? a.zxk.Colors.PRIMARY : a.zxk.Colors.GREEN,
                                            disabled: !t
                                        },
                                        e
                                    )),
                                    (s = s = { children: n ? A.NW.string(A.t.VHHyFR) : A.NW.string(A.t.XU0S6u) }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(s)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                          }),
                                    i)
                                );
                            }
                        })
                    ]
                }),
                (0, r.jsx)(I.Z, {
                    className: k.guildCard,
                    loading: null == e,
                    guild: e
                })
            ]
        });
    }
    renderCoverImageSection() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        if (null != e)
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(a.hjN, {
                        className: k.twoColumnFormSection,
                        children: [
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)(a.vwX, {
                                        className: k.formTitle,
                                        children: A.NW.string(A.t['8bT/Cg'])
                                    }),
                                    (0, r.jsx)(a.R94, {
                                        type: a.geA.DESCRIPTION,
                                        className: k.formDescription,
                                        children: A.NW.string(A.t.Ltsutr)
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        buttonCTA: A.NW.string(A.t.yG2pUl),
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.PRIMARY,
                                        disabled: !n,
                                        onChange: this.handleSplashChange
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: k.imageUploaderWrapper,
                                children: (0, r.jsx)(g.Z, {
                                    image: e.discoverySplash,
                                    makeURL: (t) =>
                                        x.ZP.getGuildDiscoverySplashURL({
                                            id: e.id,
                                            splash: t,
                                            size: 512 * (0, u.x_)()
                                        }),
                                    disabled: !n,
                                    onChange: this.handleSplashChange,
                                    hint: A.NW.string(A.t.uPvxqK),
                                    imageClassName: k.imageUploaderInnerSquare,
                                    hideSize: !0
                                })
                            })
                        ]
                    }),
                    (null == t ? void 0 : t.discovery_splash) != null
                        ? (0, r.jsx)(a.Text, {
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
            { discoverableGuild: i } = this.state,
            { emojiDiscoverabilityEnabled: s } = t;
        return (0, r.jsxs)(a.hjN, {
            className: k.twoColumnFormSection,
            children: [
                (0, r.jsxs)('div', {
                    className: k.formColumnLeft,
                    children: [
                        (0, r.jsx)(a.vwX, {
                            className: k.formTitle,
                            children: A.NW.string(A.t.DhJ8ur)
                        }),
                        (0, r.jsx)(a.R94, {
                            className: k.description,
                            type: a.geA.DESCRIPTION,
                            children: A.NW.string(A.t['/RSSlZ'])
                        }),
                        (0, r.jsx)(a.zxk, {
                            size: a.zxk.Sizes.SMALL,
                            color: s ? a.zxk.Colors.PRIMARY : a.zxk.Colors.GREEN,
                            disabled: !e,
                            onClick: this.handleToggleEmojiDiscoverability,
                            children: s ? A.NW.string(A.t.XnrNLi) : A.NW.string(A.t.bHbZLC)
                        })
                    ]
                }),
                (0, r.jsx)(S.k, {
                    guild: n,
                    discoverableGuild: i
                })
            ]
        });
    }
    renderLocaleSelector() {
        let { guild: e, canManageGuild: t, localeOptions: n } = this.props;
        if (null != e)
            return (0, r.jsxs)(a.hjN, {
                className: k.twoColumnFormSection,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.vwX, {
                                className: k.formTitle,
                                children: A.NW.string(A.t.pO60f3)
                            }),
                            (0, r.jsx)(a.R94, {
                                type: a.geA.DESCRIPTION,
                                className: k.formDescription,
                                children: A.NW.string(A.t['SF/GRk'])
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: k.formSelect,
                        children: (0, r.jsx)(a.q4e, {
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
        let { canManageGuild: e, guildMetadata: t, errors: n, guild: i } = this.props;
        if (null != i)
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(a.hjN, {
                        children: [
                            (0, r.jsx)(a.vwX, {
                                className: k.formTitle,
                                children: A.NW.string(A.t['5b4VCQ'])
                            }),
                            (0, r.jsx)(a.R94, {
                                type: a.geA.DESCRIPTION,
                                className: k.description,
                                children: A.NW.string(A.t.MSfJlZ)
                            })
                        ]
                    }),
                    (0, r.jsx)(v.E, {
                        guildId: i.id,
                        guildMetadata: t,
                        isDisabled: !e
                    }),
                    (0, r.jsxs)(a.hjN, {
                        className: k.noDividerFormSection,
                        children: [
                            (0, r.jsx)(a.vwX, {
                                className: k.formTitle,
                                children: A.NW.string(A.t.oOPlPD)
                            }),
                            (0, r.jsx)(C.Z, {
                                guild: i,
                                guildMetadata: t
                            })
                        ]
                    }),
                    (null == n ? void 0 : n.category) != null
                        ? (0, r.jsx)(a.Text, {
                              color: 'text-danger',
                              className: k.error,
                              variant: 'text-sm/normal',
                              children: n.category
                          })
                        : null
                ]
            });
    }
    renderKeywordsSection() {
        let { canManageGuild: e, guildMetadata: t, errors: n } = this.props;
        return (0, r.jsxs)(a.hjN, {
            children: [
                (0, r.jsx)(a.vwX, {
                    className: k.formTitle,
                    children: A.NW.string(A.t.V5pXNT)
                }),
                (0, r.jsx)(a.R94, {
                    className: k.description,
                    type: a.geA.DESCRIPTION,
                    children: A.NW.format(A.t.FLMb5O, {})
                }),
                (0, r.jsx)(o.Z, {
                    tags: t.keywords,
                    onRemoveTag: this.handleRemoveKeyword,
                    onAddTag: this.handleAddKeyword,
                    maxTags: R.G7,
                    maxTaxLength: R._0,
                    disabled: !e
                }),
                (null == n ? void 0 : n.keywords) != null
                    ? (0, r.jsx)(a.Text, {
                          color: 'text-danger',
                          className: k.error,
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
        switch ((0, T.TJ)(e, t)) {
            case T.d5.INTRO:
                return (0, r.jsx)(w.Z, {
                    guild: e,
                    onEnableDiscovery: this.handleEnableDiscovery,
                    isGuildAdmin: n
                });
            case T.d5.DISQUALIFIED:
                return (0, r.jsx)(P.Z, { guild: e });
            case T.d5.SETTINGS:
                return (0, r.jsxs)(a.hjN, {
                    className: k.__invalid_discoverySettings,
                    title: A.NW.string(A.t.oGaVGx),
                    tag: a.RB0.H1,
                    children: [this.renderDiscoverableSection(), (0, r.jsx)(a.$i$, { className: k.divider }), this.renderCoverImageSection(), (0, r.jsx)(a.$i$, { className: k.divider }), this.renderEmojiDiscoverabilitySection(), (0, r.jsx)(a.$i$, { className: k.divider }), this.renderCategoriesSection(), (0, r.jsx)(a.$i$, { className: k.divider }), this.renderKeywordsSection(), (0, r.jsx)(a.$i$, { className: k.divider }), this.renderLocaleSelector()]
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            W(this, 'state', { discoverableGuild: null }),
            W(this, 'handleToggleDiscovery', () => {
                let { guild: e } = this.props;
                if (null == e) return;
                let t = new Set(e.features);
                e.hasFeature(D.oNc.DISCOVERABLE) ? t.delete(D.oNc.DISCOVERABLE) : t.add(D.oNc.DISCOVERABLE), N.Z.updateGuild({ features: t });
            }),
            W(this, 'handleEnableDiscovery', async () => {
                let e = await (0, a.ZDy)(
                    async () => {
                        let { default: e } = await n.e('50721').then(n.bind(n, 210172));
                        return (t) => {
                            var n = L(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(t)
                            );
                            return (0, r.jsx)(e, M({}, n));
                        };
                    },
                    {
                        onCloseRequest: () => {
                            null != e && (0, a.Mr3)(e);
                        }
                    }
                );
            }),
            W(this, 'handleSplashChange', (e) => {
                N.Z.updateGuild({ discoverySplash: e });
            }),
            W(this, 'handleLocaleChange', (e) => {
                N.Z.updateGuild({ preferredLocale: e });
            }),
            W(this, 'handleRemoveKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props;
                if ((null == t ? void 0 : t.id) == null) return;
                let r = [...n.keywords];
                r.splice(e, 1), (0, d.zH)(t.id, r);
            }),
            W(this, 'handleAddKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props,
                    { keywords: r } = n;
                (null == t ? void 0 : t.id) != null && (r.length >= R.G7 || (0, d.zH)(t.id, [...r, e]));
            }),
            W(this, 'handleToggleEmojiDiscoverability', () => {
                let { guild: e, guildMetadata: t } = this.props,
                    { emojiDiscoverabilityEnabled: n } = t;
                (null == e ? void 0 : e.id) != null && (0, d.J9)(e.id, !n);
            });
    }
}
let B = s.ZP.connectStores([_.Z, h.Z, y.ZP, p.ZP, b.default, f.Z], () => {
    let { guild: e, errors: t, submitting: n, guildMetadata: r } = _.Z.getProps(),
        i = h.Z.can(D.Plq.MANAGE_GUILD, e),
        s = h.Z.can(D.Plq.ADMINISTRATOR, e),
        a = null != e ? y.ZP.getDiscoveryChecklist(e.id) : null,
        l = null != e ? p.ZP.getChannels(e.id) : null,
        o = [];
    return (
        null != l &&
            l[p.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === D.d4z.GUILD_TEXT &&
                    o.push({
                        value: t.id,
                        label: (0, c.F6)(t, b.default, f.Z, !0)
                    });
            }),
        {
            guild: e,
            errors: t,
            submitting: n,
            discoveryChecklist: a,
            selectableChannels: o,
            canManageGuild: i,
            isGuildAdmin: s,
            guildMetadata: r,
            localeOptions: (0, Z.jb)()
        }
    );
})(U);
