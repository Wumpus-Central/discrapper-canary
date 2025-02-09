n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(780384),
    d = n(481060),
    u = n(99690),
    m = n(410030),
    h = n(726542),
    g = n(981631),
    x = n(856651),
    p = n(388032),
    _ = n(516152);
function C(e) {
    var t, n;
    let r,
        { theme: l, platform: a, integration: m, onRemove: h, locked: g } = e;
    if ((null == m ? void 0 : m.application) != null)
        o()(null != m.application.bot, 'bot is null'),
            (r = (0, i.jsx)(u.Z, {
                size: d.EFr.SIZE_24,
                user: m.application.bot,
                className: _.verifiedIcon
            }));
    else if (null != a) {
        let e = (0, c.ap)(l) ? a.icon.lightSVG : a.icon.darkSVG;
        r = (0, i.jsx)('img', {
            className: _.verifiedIcon,
            src: e,
            alt: p.intl.formatToPlainString(p.t.rtm15O, { name: a.name })
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(_.verifiedRow, (null == a ? void 0 : a.hasMetadata) === !0 || ((null == m ? void 0 : m.role_connections_metadata) != null && (null == m ? void 0 : m.role_connections_metadata.length) > 0) ? _.verifiedRowWithMetadata : null),
        children: [
            r,
            (0, i.jsx)(d.Text, {
                variant: 'text-md/medium',
                className: _.verifiedText,
                children: p.intl.format(p.t.Nj0a3t, { platformName: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : null == m ? void 0 : null === (t = m.application) || void 0 === t ? void 0 : t.name })
            }),
            (0, i.jsx)(d.zxk, {
                'aria-label': p.intl.string(p.t.N86XcH),
                size: d.zxk.Sizes.TINY,
                look: d.zxk.Looks.BLANK,
                onClick: h,
                disabled: g,
                className: _.closeButton,
                children: (0, i.jsx)(d.ua7, {
                    text: p.intl.string(p.t.N86XcH),
                    children: (e) =>
                        (0, i.jsx)(d.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.closeIcon,
                            ...e
                        })
                })
            })
        ]
    });
}
function f(e) {
    var t, n, l;
    let { inputRef: s, existingPendingConfiguration: a, locked: o, onConfigurationChange: c, platform: u, applicationId: m, metadataField: h, operator: g } = e,
        p = null !== (n = null == a ? void 0 : a.index) && void 0 !== n ? n : -1,
        C = null != g ? g : x.iO.GREATER_THAN,
        f = Math.round(Number(null !== (l = null == a ? void 0 : null === (t = a.configuration) || void 0 === t ? void 0 : t.value) && void 0 !== l ? l : 0));
    C === x.iO.GREATER_THAN ? (f = Math.max(1, f + 1)) : C === x.iO.LESS_THAN && (f = Math.max(0, f - 1));
    let [v, N] = r.useState(f.toString());
    return (
        r.useEffect(() => {
            N(v);
        }, [v]),
        (0, i.jsx)(
            d.oil,
            {
                inputRef: s,
                type: 'number',
                className: _.numericalRuleInput,
                size: d.oil.Sizes.MINI,
                value: v,
                onChange: (e) => {
                    if (null != a) {
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
function v(e) {
    let { titleText: t, fieldText: n, metadataField: r, existingPendingConfiguration: l, platform: s, applicationId: a, onConfigurationChange: o, locked: c } = e;
    return (0, i.jsxs)(
        'div',
        {
            className: _.ruleContainer,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: 'text-md/bold',
                            className: _.ruleItemHeader,
                            children: t
                        }),
                        (0, i.jsx)('div', {
                            className: _.numericalRuleSubItemContainer,
                            children: (0, i.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                className: _.numericalRuleSubText,
                                children: n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.rsf, {
                    className: _.ruleItemSwitch,
                    checked: (null == l ? void 0 : l.configuration.value) === '1',
                    onChange: (e) => {
                        var t, n;
                        let i = null;
                        e &&
                            (i = {
                                connectionType: null !== (t = null == s ? void 0 : s.type) && void 0 !== t ? t : x.Kt,
                                applicationId: a,
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
    let { titleText: t, fieldText: n, fieldTextHook: l, metadataField: s, existingPendingConfiguration: a, platform: o, applicationId: c, onConfigurationChange: u, locked: m, operator: h } = e,
        g = r.createRef(),
        C = (null == a ? void 0 : a.configuration) != null,
        v = (0, i.jsx)(
            f,
            {
                inputRef: g,
                metadataField: s,
                existingPendingConfiguration: a,
                locked: m || !C,
                onConfigurationChange: u,
                platform: o,
                operator: h,
                applicationId: c
            },
            s
        ),
        N =
            null != l
                ? p.intl.format(l, { metadataHook: () => v })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          v,
                          (0, i.jsx)('span', {
                              className: _.fieldText,
                              children: n
                          })
                      ]
                  });
    return (0, i.jsxs)(
        'div',
        {
            className: _.ruleContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: _.ruleContainerLabel,
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: 'text-md/bold',
                            className: _.ruleItemHeader,
                            children: t
                        }),
                        (0, i.jsx)('div', {
                            className: _.numericalRuleSubItemContainer,
                            children: (0, i.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                className: _.numericalRuleSubText,
                                children: N
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.rsf, {
                    className: _.ruleItemSwitch,
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
                                    connectionMetadataField: s,
                                    operator: e,
                                    value: i.toString()
                                });
                        }
                        u(r, null !== (i = null == a ? void 0 : a.index) && void 0 !== i ? i : -1);
                    },
                    disabled: m
                })
            ]
        },
        s
    );
}
function j(e) {
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
function I(e) {
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
            (0, i.jsx)(v, {
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
function E(e) {
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
            (0, i.jsx)(v, {
                titleText: p.intl.string(p.t.oWM95O),
                fieldText: p.intl.string(p.t['0cKdkZ']),
                metadataField: x.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(x.PC.REDDIT_MOD),
                platform: l,
                onConfigurationChange: n,
                locked: r
            }),
            (0, i.jsx)(v, {
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
            (0, i.jsx)(v, {
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
function T(e) {
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
            (0, i.jsx)(v, {
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
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: r } = e,
        l = h.Z.get(g.ABu.TIKTOK);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v, {
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
    let s = l.role_connections_metadata.map((e) => {
        var s, a;
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
                        applicationId: null === (s = l.application) || void 0 === s ? void 0 : s.id
                    },
                    e.key
                );
            case x.xn.BOOLEAN_EQUAL:
            case x.xn.BOOLEAN_NOT_EQUAL:
                return (0, i.jsx)(
                    v,
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
        }
    });
    return (0, i.jsx)(i.Fragment, { children: s });
}
function Z(e) {
    let t,
        { configurationItems: n, onConfigurationChange: r, locked: l, integrations: s } = e,
        a = (0, m.ZP)();
    if (n.length < 1) return null;
    let o = n[0].configuration.applicationId,
        c =
            null != o
                ? null == s
                    ? void 0
                    : s.find((e) => {
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
            p = (0, i.jsx)(j, { ...x });
            break;
        case g.ABu.TWITTER:
            p = (0, i.jsx)(I, { ...x });
            break;
        case g.ABu.REDDIT:
            p = (0, i.jsx)(E, { ...x });
            break;
        case g.ABu.PAYPAL:
            p = (0, i.jsx)(b, { ...x });
            break;
        case g.ABu.EBAY:
            p = (0, i.jsx)(T, { ...x });
            break;
        case g.ABu.TIKTOK:
            p = (0, i.jsx)(S, { ...x });
            break;
        default:
            p = (0, i.jsx)(R, {
                ...x,
                integration: c
            });
    }
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)(C, {
                theme: a,
                platform: d,
                integration: c,
                onRemove: () => r(null, t.index),
                locked: l
            }),
            p
        ]
    });
}
