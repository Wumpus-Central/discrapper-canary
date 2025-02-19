n.d(t, { Z: () => P }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(780384),
    d = n(481060),
    u = n(99690),
    m = n(410030),
    p = n(726542),
    g = n(981631),
    h = n(856651),
    f = n(388032),
    b = n(784735);
function x(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e) {
    var t, n;
    let i,
        { theme: s, platform: l, integration: m, onRemove: p, locked: g } = e;
    if ((null == m ? void 0 : m.application) != null)
        o()(null != m.application.bot, 'bot is null'),
            (i = (0, r.jsx)(u.Z, {
                size: d.EFr.SIZE_24,
                user: m.application.bot,
                className: b.verifiedIcon
            }));
    else if (null != l) {
        let e = (0, c.ap)(s) ? l.icon.lightSVG : l.icon.darkSVG;
        i = (0, r.jsx)('img', {
            className: b.verifiedIcon,
            src: e,
            alt: f.NW.formatToPlainString(f.t.rtm15O, { name: l.name })
        });
    }
    return (0, r.jsxs)('div', {
        className: a()(b.verifiedRow, (null == l ? void 0 : l.hasMetadata) === !0 || ((null == m ? void 0 : m.role_connections_metadata) != null && (null == m ? void 0 : m.role_connections_metadata.length) > 0) ? b.verifiedRowWithMetadata : null),
        children: [
            i,
            (0, r.jsx)(d.Text, {
                variant: 'text-md/medium',
                className: b.verifiedText,
                children: f.NW.format(f.t.Nj0a3t, { platformName: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : null == m ? void 0 : null === (t = m.application) || void 0 === t ? void 0 : t.name })
            }),
            (0, r.jsx)(d.zxk, {
                'aria-label': f.NW.string(f.t.N86XcH),
                size: d.zxk.Sizes.TINY,
                look: d.zxk.Looks.BLANK,
                onClick: p,
                disabled: g,
                className: b.closeButton,
                children: (0, r.jsx)(d.ua7, {
                    text: f.NW.string(f.t.N86XcH),
                    children: (e) =>
                        (0, r.jsx)(
                            d.Dio,
                            x(
                                {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: b.closeIcon
                                },
                                e
                            )
                        )
                })
            })
        ]
    });
}
function N(e) {
    var t, n, s;
    let { inputRef: a, existingPendingConfiguration: l, locked: o, onConfigurationChange: c, platform: u, applicationId: m, metadataField: p, operator: g } = e,
        f = null !== (n = null == l ? void 0 : l.index) && void 0 !== n ? n : -1,
        x = null != g ? g : h.iO.GREATER_THAN,
        j = Math.round(Number(null !== (s = null == l ? void 0 : null === (t = l.configuration) || void 0 === t ? void 0 : t.value) && void 0 !== s ? s : 0));
    x === h.iO.GREATER_THAN ? (j = Math.max(1, j + 1)) : x === h.iO.LESS_THAN && (j = Math.max(0, j - 1));
    let [N, v] = i.useState(j.toString());
    return (
        i.useEffect(() => {
            v(N);
        }, [N]),
        (0, r.jsx)(
            d.oil,
            {
                inputRef: a,
                type: 'number',
                className: b.numericalRuleInput,
                size: d.oil.Sizes.MINI,
                value: N,
                onChange: (e) => {
                    if (null != l) {
                        if ('' !== e) {
                            var t;
                            let n = Math.round(Number(e));
                            x === h.iO.GREATER_THAN ? (n = Math.max(0, n - 1)) : x === h.iO.LESS_THAN && (n = Math.max(1, n + 1)),
                                c(
                                    {
                                        connectionType: null !== (t = null == u ? void 0 : u.type) && void 0 !== t ? t : h.Kt,
                                        applicationId: m,
                                        connectionMetadataField: p,
                                        operator: x,
                                        value: n.toString()
                                    },
                                    f
                                );
                        }
                        v(e);
                    }
                },
                disabled: o
            },
            p
        )
    );
}
function v(e) {
    let { titleText: t, fieldText: n, metadataField: i, existingPendingConfiguration: s, platform: a, applicationId: l, onConfigurationChange: o, locked: c } = e;
    return (0, r.jsxs)(
        'div',
        {
            className: b.ruleContainer,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: 'text-md/bold',
                            className: b.ruleItemHeader,
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: b.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                className: b.numericalRuleSubText,
                                children: n
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.rsf, {
                    className: b.ruleItemSwitch,
                    checked: (null == s ? void 0 : s.configuration.value) === '1',
                    onChange: (e) => {
                        var t, n;
                        let r = null;
                        e &&
                            (r = {
                                connectionType: null !== (t = null == a ? void 0 : a.type) && void 0 !== t ? t : h.Kt,
                                applicationId: l,
                                connectionMetadataField: i,
                                operator: h.iO.EQUAL,
                                value: '1'
                            }),
                            o(r, null !== (n = null == s ? void 0 : s.index) && void 0 !== n ? n : -1);
                    },
                    disabled: c
                })
            ]
        },
        i
    );
}
function _(e) {
    let { titleText: t, fieldText: n, fieldTextHook: s, metadataField: a, existingPendingConfiguration: l, platform: o, applicationId: c, onConfigurationChange: u, locked: m, operator: p } = e,
        g = i.createRef(),
        x = (null == l ? void 0 : l.configuration) != null,
        j = (0, r.jsx)(
            N,
            {
                inputRef: g,
                metadataField: a,
                existingPendingConfiguration: l,
                locked: m || !x,
                onConfigurationChange: u,
                platform: o,
                operator: p,
                applicationId: c
            },
            a
        ),
        v =
            null != s
                ? f.NW.format(s, { metadataHook: () => j })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          j,
                          (0, r.jsx)('span', {
                              className: b.fieldText,
                              children: n
                          })
                      ]
                  });
    return (0, r.jsxs)(
        'div',
        {
            className: b.ruleContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: b.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: 'text-md/bold',
                            className: b.ruleItemHeader,
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: b.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                className: b.numericalRuleSubText,
                                children: v
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.rsf, {
                    className: b.ruleItemSwitch,
                    checked: x,
                    onChange: (e) => {
                        var t, n, r;
                        let i = null;
                        if (e) {
                            let e = null != p ? p : h.iO.GREATER_THAN,
                                r = Math.round(Number(null === (t = g.current) || void 0 === t ? void 0 : t.value));
                            e === h.iO.GREATER_THAN ? (r = Math.max(0, r - 1)) : e === h.iO.LESS_THAN && (r = Math.max(1, r + 1)),
                                (i = {
                                    connectionType: null !== (n = null == o ? void 0 : o.type) && void 0 !== n ? n : h.Kt,
                                    applicationId: c,
                                    connectionMetadataField: a,
                                    operator: e,
                                    value: r.toString()
                                });
                        }
                        u(i, null !== (r = null == l ? void 0 : l.index) && void 0 !== r ? r : -1);
                    },
                    disabled: m
                })
            ]
        },
        a
    );
}
function O(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = p.Z.get(g.ABu.STEAM);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.zdXqGx),
                fieldTextHook: f.t.REyUZ2,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.gLs17O),
                fieldTextHook: f.t.zVJxqq,
                metadataField: h.PC.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(h.PC.STEAM_GAME_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.formatToPlainString(f.t.j1Gf2t, { gameName: f.NW.string(f.t.HKUEZm) }),
                fieldTextHook: f.t.ZCNdDw,
                metadataField: h.PC.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_DOTA2),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.formatToPlainString(f.t.j1Gf2t, { gameName: f.NW.string(f.t.C8p1Sk) }),
                fieldTextHook: f.t.MCHnKy,
                metadataField: h.PC.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_TF2),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function y(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = p.Z.get(g.ABu.TWITTER);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.zdXqGx),
                fieldTextHook: f.t.REyUZ2,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.wbvDMz),
                fieldTextHook: f.t['/w/EYm'],
                metadataField: h.PC.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(h.PC.TWITTER_FOLLOWERS_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t['1B3DVl']),
                fieldTextHook: f.t['+NFH7u'],
                metadataField: h.PC.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(h.PC.TWITTER_STATUSES_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.NW.string(f.t.yz2CIC),
                fieldText: f.NW.string(f.t.E2iT8P),
                metadataField: h.PC.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.TWITTER_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function C(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = p.Z.get(g.ABu.REDDIT);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.zdXqGx),
                fieldTextHook: f.t.REyUZ2,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t['3Xsroq']),
                fieldTextHook: f.t.TLgZho,
                metadataField: h.PC.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(h.PC.REDDIT_TOTAL_KARMA),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.NW.string(f.t.oWM95O),
                fieldText: f.NW.string(f.t['0cKdkZ']),
                metadataField: h.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(h.PC.REDDIT_MOD),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.NW.string(f.t['06rDHR']),
                fieldText: f.NW.string(f.t['kCAN5+']),
                metadataField: h.PC.REDDIT_GOLD,
                existingPendingConfiguration: t.get(h.PC.REDDIT_GOLD),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function I(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = p.Z.get(g.ABu.PAYPAL);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.zdXqGx),
                fieldTextHook: f.t.REyUZ2,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.NW.string(f.t.IhXLy8),
                fieldText: f.NW.string(f.t['0JyE8P']),
                metadataField: h.PC.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.PAYPAL_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function E(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = p.Z.get(g.ABu.EBAY);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.zdXqGx),
                fieldTextHook: f.t.REyUZ2,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.AuMxf3),
                fieldTextHook: f.t.oTFOe3,
                metadataField: h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.WzvoSk),
                fieldTextHook: f.t.RH3VAw,
                metadataField: h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.VuSFzs),
                fieldTextHook: f.t.sn3m7u,
                metadataField: h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i,
                operator: h.iO.LESS_THAN
            }),
            (0, r.jsx)(v, {
                titleText: f.NW.string(f.t.TEEYwc),
                fieldText: f.NW.string(f.t['39wASE']),
                metadataField: h.PC.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(h.PC.EBAY_TOP_RATED_SELLER),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = p.Z.get(g.ABu.TIKTOK);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v, {
                titleText: f.NW.string(f.t.QHHwRU),
                fieldText: f.NW.string(f.t.E2iT8P),
                metadataField: h.PC.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.WUSIHh),
                fieldTextHook: f.t['/w/EYm'],
                metadataField: h.PC.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWER_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t.w1IVQk),
                fieldTextHook: f.t.JHEsY2,
                metadataField: h.PC.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWING_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.NW.string(f.t['1cFXJi']),
                fieldTextHook: f.t.tEFCYG,
                metadataField: h.PC.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_LIKES_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function T(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i, integration: s } = e;
    if (null == s || null == s.role_connections_metadata) return null;
    let a = s.role_connections_metadata.map((e) => {
        var a, l;
        let o;
        switch (e.type) {
            case h.xn.INTEGER_LESS_THAN_EQUAL:
            case h.xn.DATETIME_LESS_THAN_EQUAL:
                o = h.iO.LESS_THAN;
                break;
            case h.xn.INTEGER_GREATER_THAN_EQUAL:
            case h.xn.DATETIME_GREATER_THAN_EQUAL:
                o = h.iO.GREATER_THAN;
                break;
            case h.xn.INTEGER_EQUAL:
            case h.xn.BOOLEAN_EQUAL:
                o = h.iO.EQUAL;
                break;
            case h.xn.INTEGER_NOT_EQUAL:
            case h.xn.BOOLEAN_NOT_EQUAL:
                o = h.iO.NOT_EQUAL;
                break;
            default:
                return null;
        }
        switch (e.type) {
            case h.xn.INTEGER_LESS_THAN_EQUAL:
            case h.xn.INTEGER_GREATER_THAN_EQUAL:
            case h.xn.INTEGER_EQUAL:
            case h.xn.INTEGER_NOT_EQUAL:
            case h.xn.DATETIME_LESS_THAN_EQUAL:
            case h.xn.DATETIME_GREATER_THAN_EQUAL:
                return (0, r.jsx)(
                    _,
                    {
                        titleText: e.name,
                        fieldText: e.description,
                        metadataField: e.key,
                        existingPendingConfiguration: t.get(e.key),
                        platform: null,
                        onConfigurationChange: n,
                        locked: i,
                        operator: o,
                        applicationId: null === (a = s.application) || void 0 === a ? void 0 : a.id
                    },
                    e.key
                );
            case h.xn.BOOLEAN_EQUAL:
            case h.xn.BOOLEAN_NOT_EQUAL:
                return (0, r.jsx)(
                    v,
                    {
                        titleText: e.name,
                        fieldText: e.description,
                        metadataField: e.key,
                        existingPendingConfiguration: t.get(e.key),
                        platform: null,
                        onConfigurationChange: n,
                        locked: i,
                        operator: o,
                        applicationId: null === (l = s.application) || void 0 === l ? void 0 : l.id
                    },
                    e.key
                );
        }
    });
    return (0, r.jsx)(r.Fragment, { children: a });
}
function P(e) {
    let t,
        { configurationItems: n, onConfigurationChange: i, locked: s, integrations: a } = e,
        l = (0, m.ZP)();
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
        d = p.Z.get(n[0].configuration.connectionType);
    } catch (e) {}
    let u = new Map();
    n.forEach((e) => {
        null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e);
    });
    let h = {
            configMetadataMap: u,
            onConfigurationChange: i,
            locked: s
        },
        f = null;
    switch (null == d ? void 0 : d.type) {
        case g.ABu.STEAM:
            f = (0, r.jsx)(O, x({}, h));
            break;
        case g.ABu.TWITTER:
            f = (0, r.jsx)(y, x({}, h));
            break;
        case g.ABu.REDDIT:
            f = (0, r.jsx)(C, x({}, h));
            break;
        case g.ABu.PAYPAL:
            f = (0, r.jsx)(I, x({}, h));
            break;
        case g.ABu.EBAY:
            f = (0, r.jsx)(E, x({}, h));
            break;
        case g.ABu.TIKTOK:
            f = (0, r.jsx)(S, x({}, h));
            break;
        default:
            var N, v;
            f = (0, r.jsx)(
                T,
                ((N = x({}, h)),
                (v = v = { integration: c }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(v))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(v)).forEach(function (e) {
                          Object.defineProperty(N, e, Object.getOwnPropertyDescriptor(v, e));
                      }),
                N)
            );
    }
    return (0, r.jsxs)('div', {
        className: b.container,
        children: [
            (0, r.jsx)(j, {
                theme: l,
                platform: d,
                integration: c,
                onRemove: () => i(null, t.index),
                locked: s
            }),
            f
        ]
    });
}
