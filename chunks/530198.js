n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(780384),
    d = n(481060),
    u = n(99690),
    m = n(410030),
    h = n(726542),
    g = n(981631),
    x = n(856651),
    p = n(388032),
    f = n(182013);
function C(e) {
    var t, n;
    let r,
        { theme: l, platform: s, integration: m, onRemove: h, locked: g } = e;
    if ((null == m ? void 0 : m.application) != null)
        o()(null != m.application.bot, 'bot is null'),
            (r = (0, i.jsx)(u.Z, {
                size: d.AvatarSizes.SIZE_24,
                user: m.application.bot,
                className: f.verifiedIcon
            }));
    else if (null != s) {
        let e = (0, c.ap)(l) ? s.icon.lightSVG : s.icon.darkSVG;
        r = (0, i.jsx)('img', {
            className: f.verifiedIcon,
            src: e,
            alt: p.intl.formatToPlainString(p.t.rtm15O, { name: s.name })
        });
    }
    return (0, i.jsxs)('div', {
        className: a()(f.verifiedRow, (null == s ? void 0 : s.hasMetadata) === !0 || ((null == m ? void 0 : m.role_connections_metadata) != null && (null == m ? void 0 : m.role_connections_metadata.length) > 0) ? f.verifiedRowWithMetadata : null),
        children: [
            r,
            (0, i.jsx)(d.Text, {
                variant: 'text-md/medium',
                className: f.verifiedText,
                children: p.intl.format(p.t.Nj0a3t, { platformName: null !== (n = null == s ? void 0 : s.name) && void 0 !== n ? n : null == m ? void 0 : null === (t = m.application) || void 0 === t ? void 0 : t.name })
            }),
            (0, i.jsx)(d.Button, {
                'aria-label': p.intl.string(p.t.N86XcH),
                size: d.Button.Sizes.TINY,
                look: d.Button.Looks.BLANK,
                onClick: h,
                disabled: g,
                className: f.closeButton,
                children: (0, i.jsx)(d.Tooltip, {
                    text: p.intl.string(p.t.N86XcH),
                    children: (e) =>
                        (0, i.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: f.closeIcon,
                            ...e
                        })
                })
            })
        ]
    });
}
function v(e) {
    var t, n, l;
    let { inputRef: a, existingPendingConfiguration: s, locked: o, onConfigurationChange: c, platform: u, applicationId: m, metadataField: h, operator: g } = e,
        p = null !== (n = null == s ? void 0 : s.index) && void 0 !== n ? n : -1,
        C = null != g ? g : x.iO.GREATER_THAN,
        v = Math.round(Number(null !== (l = null == s ? void 0 : null === (t = s.configuration) || void 0 === t ? void 0 : t.value) && void 0 !== l ? l : 0));
    C === x.iO.GREATER_THAN ? (v = Math.max(1, v + 1)) : C === x.iO.LESS_THAN && (v = Math.max(0, v - 1));
    let [_, N] = r.useState(v.toString());
    return (
        r.useEffect(() => {
            N(_);
        }, [_]),
        (0, i.jsx)(
            d.TextInput,
            {
                inputRef: a,
                type: 'number',
                className: f.numericalRuleInput,
                size: d.TextInput.Sizes.MINI,
                value: _,
                onChange: (e) => {
                    if (null != s) {
                        if ('' !== e) {
                            var t;
                            let n = Math.round(Number(e));
                            C === x.iO.GREATER_THAN ? (n = Math.max(0, n - 1)) : C === x.iO.LESS_THAN && (n = Math.max(1, n + 1)),
                                c(
                                    {
                                        connectionType: null !== (t = null == u ? void 0 : u.type) && void 0 !== t ? t : x.Kt,
                                        applicationId: m,
                                        connectionMetadataField: h,
                                        operator: C,
                                        value: n.toString()
                                    },
                                    p
                                );
                        }
                        N(e);
                    }
                },
                disabled: o
            },
            h
        )
    );
}
function _(e) {
    let { titleText: t, fieldText: n, metadataField: r, existingPendingConfiguration: l, platform: a, applicationId: s, onConfigurationChange: o, locked: c } = e;
    return (0, i.jsxs)(
        'div',
        {
            className: f.ruleContainer,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: 'text-md/bold',
                            className: f.ruleItemHeader,
                            children: t
                        }),
                        (0, i.jsx)('div', {
                            className: f.numericalRuleSubItemContainer,
                            children: (0, i.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                className: f.numericalRuleSubText,
                                children: n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.Switch, {
                    className: f.ruleItemSwitch,
                    checked: (null == l ? void 0 : l.configuration.value) === '1',
                    onChange: (e) => {
                        var t, n;
                        let i = null;
                        e &&
                            (i = {
                                connectionType: null !== (t = null == a ? void 0 : a.type) && void 0 !== t ? t : x.Kt,
                                applicationId: s,
                                connectionMetadataField: r,
                                operator: x.iO.EQUAL,
                                value: '1'
                            }),
                            o(i, null !== (n = null == l ? void 0 : l.index) && void 0 !== n ? n : -1);
                    },
                    disabled: c
                })
            ]
        },
        r
    );
}
function N(e) {
    let { titleText: t, fieldText: n, fieldTextHook: l, metadataField: a, existingPendingConfiguration: s, platform: o, applicationId: c, onConfigurationChange: u, locked: m, operator: h } = e,
        g = r.createRef(),
        C = (null == s ? void 0 : s.configuration) != null,
        _ = (0, i.jsx)(
            v,
            {
                inputRef: g,
                metadataField: a,
                existingPendingConfiguration: s,
                locked: m || !C,
                onConfigurationChange: u,
                platform: o,
                operator: h,
                applicationId: c
            },
            a
        ),
        N =
            null != l
                ? p.intl.format(l, { metadataHook: () => _ })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          _,
                          (0, i.jsx)('span', {
                              className: f.fieldText,
                              children: n
                          })
                      ]
                  });
    return (0, i.jsxs)(
        'div',
        {
            className: f.ruleContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: f.ruleContainerLabel,
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: 'text-md/bold',
                            className: f.ruleItemHeader,
                            children: t
                        }),
                        (0, i.jsx)('div', {
                            className: f.numericalRuleSubItemContainer,
                            children: (0, i.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                className: f.numericalRuleSubText,
                                children: N
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.Switch, {
                    className: f.ruleItemSwitch,
                    checked: C,
                    onChange: (e) => {
                        var t, n, i;
                        let r = null;
                        if (e) {
                            let e = null != h ? h : x.iO.GREATER_THAN,
                                i = Math.round(Number(null === (t = g.current) || void 0 === t ? void 0 : t.value));
                            e === x.iO.GREATER_THAN ? (i = Math.max(0, i - 1)) : e === x.iO.LESS_THAN && (i = Math.max(1, i + 1)),
                                (r = {
                                    connectionType: null !== (n = null == o ? void 0 : o.type) && void 0 !== n ? n : x.Kt,
                                    applicationId: c,
                                    connectionMetadataField: a,
                                    operator: e,
                                    value: i.toString()
                                });
                        }
                        u(r, null !== (i = null == s ? void 0 : s.index) && void 0 !== i ? i : -1);
                    },
                    disabled: m
                })
            ]
        },
        a
    );
}
function I(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: r } = e,
        l = h.Z.get(g.ABu.STEAM);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.zdXqGx),
                fieldTextHook: p.t.REyUZ2,
                metadataField: x.PC.CREATED_AT,
                existingPendingConfiguration: t.get(x.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.gLs17O),
                fieldTextHook: p.t.zVJxqq,
                metadataField: x.PC.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(x.PC.STEAM_GAME_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.formatToPlainString(p.t.j1Gf2t, { gameName: p.intl.string(p.t.HKUEZm) }),
                fieldTextHook: p.t.ZCNdDw,
                metadataField: x.PC.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(x.PC.STEAM_ITEM_COUNT_DOTA2),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.formatToPlainString(p.t.j1Gf2t, { gameName: p.intl.string(p.t.C8p1Sk) }),
                fieldTextHook: p.t.MCHnKy,
                metadataField: x.PC.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(x.PC.STEAM_ITEM_COUNT_TF2),
                platform: l,
                onConfigurationChange: n,
                locked: r
            })
        ]
    });
}
function T(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: r } = e,
        l = h.Z.get(g.ABu.TWITTER);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.zdXqGx),
                fieldTextHook: p.t.REyUZ2,
                metadataField: x.PC.CREATED_AT,
                existingPendingConfiguration: t.get(x.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.wbvDMz),
                fieldTextHook: p.t['/w/EYm'],
                metadataField: x.PC.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(x.PC.TWITTER_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t['1B3DVl']),
                fieldTextHook: p.t['+NFH7u'],
                metadataField: x.PC.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(x.PC.TWITTER_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(_, {
                titleText: p.intl.string(p.t.yz2CIC),
                fieldText: p.intl.string(p.t.E2iT8P),
                metadataField: x.PC.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(x.PC.TWITTER_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: r
            })
        ]
    });
}
function j(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: r } = e,
        l = h.Z.get(g.ABu.REDDIT);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.zdXqGx),
                fieldTextHook: p.t.REyUZ2,
                metadataField: x.PC.CREATED_AT,
                existingPendingConfiguration: t.get(x.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t['3Xsroq']),
                fieldTextHook: p.t.TLgZho,
                metadataField: x.PC.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(x.PC.REDDIT_TOTAL_KARMA),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(_, {
                titleText: p.intl.string(p.t.oWM95O),
                fieldText: p.intl.string(p.t['0cKdkZ']),
                metadataField: x.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(x.PC.REDDIT_MOD),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(_, {
                titleText: p.intl.string(p.t['06rDHR']),
                fieldText: p.intl.string(p.t['kCAN5+']),
                metadataField: x.PC.REDDIT_GOLD,
                existingPendingConfiguration: t.get(x.PC.REDDIT_GOLD),
                platform: l,
                onConfigurationChange: n,
                locked: r
            })
        ]
    });
}
function b(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: r } = e,
        l = h.Z.get(g.ABu.PAYPAL);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.zdXqGx),
                fieldTextHook: p.t.REyUZ2,
                metadataField: x.PC.CREATED_AT,
                existingPendingConfiguration: t.get(x.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(_, {
                titleText: p.intl.string(p.t.IhXLy8),
                fieldText: p.intl.string(p.t['0JyE8P']),
                metadataField: x.PC.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(x.PC.PAYPAL_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: r
            })
        ]
    });
}
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: r } = e,
        l = h.Z.get(g.ABu.EBAY);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.zdXqGx),
                fieldTextHook: p.t.REyUZ2,
                metadataField: x.PC.CREATED_AT,
                existingPendingConfiguration: t.get(x.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.AuMxf3),
                fieldTextHook: p.t.oTFOe3,
                metadataField: x.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(x.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.WzvoSk),
                fieldTextHook: p.t.RH3VAw,
                metadataField: x.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(x.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.VuSFzs),
                fieldTextHook: p.t.sn3m7u,
                metadataField: x.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(x.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: r,
                operator: x.iO.LESS_THAN
            }),
            (0, i.jsx)(_, {
                titleText: p.intl.string(p.t.TEEYwc),
                fieldText: p.intl.string(p.t['39wASE']),
                metadataField: x.PC.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(x.PC.EBAY_TOP_RATED_SELLER),
                platform: l,
                onConfigurationChange: n,
                locked: r
            })
        ]
    });
}
function E(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: r } = e,
        l = h.Z.get(g.ABu.TIKTOK);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_, {
                titleText: p.intl.string(p.t.QHHwRU),
                fieldText: p.intl.string(p.t.E2iT8P),
                metadataField: x.PC.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(x.PC.TIKTOK_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.WUSIHh),
                fieldTextHook: p.t['/w/EYm'],
                metadataField: x.PC.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(x.PC.TIKTOK_FOLLOWER_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t.w1IVQk),
                fieldTextHook: p.t.JHEsY2,
                metadataField: x.PC.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(x.PC.TIKTOK_FOLLOWING_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(N, {
                titleText: p.intl.string(p.t['1cFXJi']),
                fieldTextHook: p.t.tEFCYG,
                metadataField: x.PC.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(x.PC.TIKTOK_LIKES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: r
            })
        ]
    });
}
function R(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: r, integration: l } = e;
    if (null == l || null == l.role_connections_metadata) return null;
    let a = l.role_connections_metadata.map((e) => {
        var a, s;
        let o;
        switch (e.type) {
            case x.xn.INTEGER_LESS_THAN_EQUAL:
            case x.xn.DATETIME_LESS_THAN_EQUAL:
                o = x.iO.LESS_THAN;
                break;
            case x.xn.INTEGER_GREATER_THAN_EQUAL:
            case x.xn.DATETIME_GREATER_THAN_EQUAL:
                o = x.iO.GREATER_THAN;
                break;
            case x.xn.INTEGER_EQUAL:
            case x.xn.BOOLEAN_EQUAL:
                o = x.iO.EQUAL;
                break;
            case x.xn.INTEGER_NOT_EQUAL:
            case x.xn.BOOLEAN_NOT_EQUAL:
                o = x.iO.NOT_EQUAL;
                break;
            default:
                return null;
        }
        switch (e.type) {
            case x.xn.INTEGER_LESS_THAN_EQUAL:
            case x.xn.INTEGER_GREATER_THAN_EQUAL:
            case x.xn.INTEGER_EQUAL:
            case x.xn.INTEGER_NOT_EQUAL:
            case x.xn.DATETIME_LESS_THAN_EQUAL:
            case x.xn.DATETIME_GREATER_THAN_EQUAL:
                return (0, i.jsx)(
                    N,
                    {
                        titleText: e.name,
                        fieldText: e.description,
                        metadataField: e.key,
                        existingPendingConfiguration: t.get(e.key),
                        platform: null,
                        onConfigurationChange: n,
                        locked: r,
                        operator: o,
                        applicationId: null === (a = l.application) || void 0 === a ? void 0 : a.id
                    },
                    e.key
                );
            case x.xn.BOOLEAN_EQUAL:
            case x.xn.BOOLEAN_NOT_EQUAL:
                return (0, i.jsx)(
                    _,
                    {
                        titleText: e.name,
                        fieldText: e.description,
                        metadataField: e.key,
                        existingPendingConfiguration: t.get(e.key),
                        platform: null,
                        onConfigurationChange: n,
                        locked: r,
                        operator: o,
                        applicationId: null === (s = l.application) || void 0 === s ? void 0 : s.id
                    },
                    e.key
                );
        }
    });
    return (0, i.jsx)(i.Fragment, { children: a });
}
function y(e) {
    let t,
        { configurationItems: n, onConfigurationChange: r, locked: l, integrations: a } = e,
        s = (0, m.ZP)();
    if (n.length < 1) return null;
    let o = n[0].configuration.applicationId,
        c =
            null != o
                ? null == a
                    ? void 0
                    : a.find((e) => {
                          var t;
                          return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === o;
                      })
                : void 0;
    if (null != o && null == c) return null;
    let d = null;
    try {
        d = h.Z.get(n[0].configuration.connectionType);
    } catch (e) {}
    let u = new Map();
    n.forEach((e) => {
        null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e);
    });
    let x = {
            configMetadataMap: u,
            onConfigurationChange: r,
            locked: l
        },
        p = null;
    switch (null == d ? void 0 : d.type) {
        case g.ABu.STEAM:
            p = (0, i.jsx)(I, { ...x });
            break;
        case g.ABu.TWITTER:
            p = (0, i.jsx)(T, { ...x });
            break;
        case g.ABu.REDDIT:
            p = (0, i.jsx)(j, { ...x });
            break;
        case g.ABu.PAYPAL:
            p = (0, i.jsx)(b, { ...x });
            break;
        case g.ABu.EBAY:
            p = (0, i.jsx)(S, { ...x });
            break;
        case g.ABu.TIKTOK:
            p = (0, i.jsx)(E, { ...x });
            break;
        default:
            p = (0, i.jsx)(R, {
                ...x,
                integration: c
            });
    }
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)(C, {
                theme: s,
                platform: d,
                integration: c,
                onRemove: () => r(null, t.index),
                locked: l
            }),
            p
        ]
    });
}
