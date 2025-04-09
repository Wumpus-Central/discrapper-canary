n.d(t, { Z: () => P }), n(388685), n(953529);
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
    g = n(726542),
    p = n(981631),
    f = n(856651),
    h = n(388032),
    b = n(847966);
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
        { theme: s, platform: l, integration: m, onRemove: g, locked: p } = e;
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
            alt: h.NW.formatToPlainString(h.t.rtm15O, { name: l.name })
        });
    }
    return (0, r.jsxs)('div', {
        className: a()(b.verifiedRow, (null == l ? void 0 : l.hasMetadata) === !0 || ((null == m ? void 0 : m.role_connections_metadata) != null && (null == m ? void 0 : m.role_connections_metadata.length) > 0) ? b.verifiedRowWithMetadata : null),
        children: [
            i,
            (0, r.jsx)(d.Text, {
                variant: 'text-md/medium',
                className: b.verifiedText,
                children: h.NW.format(h.t.Nj0a3t, { platformName: null != (n = null == l ? void 0 : l.name) ? n : null == m || null == (t = m.application) ? void 0 : t.name })
            }),
            (0, r.jsx)(d.zxk, {
                'aria-label': h.NW.string(h.t.N86XcH),
                size: d.zxk.Sizes.TINY,
                look: d.zxk.Looks.BLANK,
                onClick: g,
                disabled: p,
                className: b.closeButton,
                children: (0, r.jsx)(d.ua7, {
                    text: h.NW.string(h.t.N86XcH),
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
    let { inputRef: a, existingPendingConfiguration: l, locked: o, onConfigurationChange: c, platform: u, applicationId: m, metadataField: g, operator: p } = e,
        x = null != (n = null == l ? void 0 : l.index) ? n : -1,
        j = null != p ? p : f.iO.GREATER_THAN,
        N = Math.round(Number(null != (s = null == l || null == (t = l.configuration) ? void 0 : t.value) ? s : 0));
    j === f.iO.GREATER_THAN ? (N = Math.max(1, N + 1)) : j === f.iO.LESS_THAN && (N = Math.max(0, N - 1));
    let [v, _] = i.useState(N.toString());
    return (
        i.useEffect(() => {
            _(v);
        }, [v]),
        (0, r.jsx)(
            d.oil,
            {
                'aria-label': h.NW.formatToPlainString(h.t['FTmi9/'], {}),
                inputRef: a,
                type: 'number',
                className: b.numericalRuleInput,
                size: d.oil.Sizes.MINI,
                value: v,
                onChange: (e) => {
                    if (null != l) {
                        if ('' !== e) {
                            var t;
                            let n = Math.round(Number(e));
                            j === f.iO.GREATER_THAN ? (n = Math.max(0, n - 1)) : j === f.iO.LESS_THAN && (n = Math.max(1, n + 1)),
                                c(
                                    {
                                        connectionType: null != (t = null == u ? void 0 : u.type) ? t : f.Kt,
                                        applicationId: m,
                                        connectionMetadataField: g,
                                        operator: j,
                                        value: n.toString()
                                    },
                                    x
                                );
                        }
                        _(e);
                    }
                },
                disabled: o
            },
            g
        )
    );
}
function v(e) {
    let { titleText: t, fieldText: n, metadataField: s, existingPendingConfiguration: a, platform: l, applicationId: o, onConfigurationChange: c, locked: u } = e,
        m = i.useId();
    return (0, r.jsxs)(
        'div',
        {
            className: b.ruleContainer,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(d.Text, {
                            tag: 'label',
                            htmlFor: m,
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
                    id: m,
                    className: b.ruleItemSwitch,
                    checked: (null == a ? void 0 : a.configuration.value) === '1',
                    onChange: (e) => {
                        var t, n;
                        let r = null;
                        e &&
                            (r = {
                                connectionType: null != (t = null == l ? void 0 : l.type) ? t : f.Kt,
                                applicationId: o,
                                connectionMetadataField: s,
                                operator: f.iO.EQUAL,
                                value: '1'
                            }),
                            c(r, null != (n = null == a ? void 0 : a.index) ? n : -1);
                    },
                    disabled: u
                })
            ]
        },
        s
    );
}
function _(e) {
    let { titleText: t, fieldText: n, fieldTextHook: s, metadataField: a, existingPendingConfiguration: l, platform: o, applicationId: c, onConfigurationChange: u, locked: m, operator: g } = e,
        p = i.createRef(),
        x = (null == l ? void 0 : l.configuration) != null,
        j = (0, r.jsx)(
            N,
            {
                inputRef: p,
                metadataField: a,
                existingPendingConfiguration: l,
                locked: m || !x,
                onConfigurationChange: u,
                platform: o,
                operator: g,
                applicationId: c
            },
            a
        ),
        v =
            null != s
                ? h.NW.format(s, { metadataHook: () => j })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          j,
                          (0, r.jsx)('span', {
                              className: b.fieldText,
                              children: n
                          })
                      ]
                  }),
        _ = i.useId();
    return (0, r.jsxs)(
        'div',
        {
            className: b.ruleContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: b.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(d.Text, {
                            tag: 'label',
                            htmlFor: _,
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
                    id: _,
                    className: b.ruleItemSwitch,
                    checked: x,
                    onChange: (e) => {
                        var t, n, r;
                        let i = null;
                        if (e) {
                            let e = null != g ? g : f.iO.GREATER_THAN,
                                r = Math.round(Number(null == (t = p.current) ? void 0 : t.value));
                            e === f.iO.GREATER_THAN ? (r = Math.max(0, r - 1)) : e === f.iO.LESS_THAN && (r = Math.max(1, r + 1)),
                                (i = {
                                    connectionType: null != (n = null == o ? void 0 : o.type) ? n : f.Kt,
                                    applicationId: c,
                                    connectionMetadataField: a,
                                    operator: e,
                                    value: r.toString()
                                });
                        }
                        u(i, null != (r = null == l ? void 0 : l.index) ? r : -1);
                    },
                    disabled: m
                })
            ]
        },
        a
    );
}
function y(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = g.Z.get(p.ABu.STEAM);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.zdXqGx),
                fieldTextHook: h.t.REyUZ2,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.gLs17O),
                fieldTextHook: h.t.zVJxqq,
                metadataField: f.PC.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(f.PC.STEAM_GAME_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.formatToPlainString(h.t.j1Gf2t, { gameName: h.NW.string(h.t.HKUEZm) }),
                fieldTextHook: h.t.ZCNdDw,
                metadataField: f.PC.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(f.PC.STEAM_ITEM_COUNT_DOTA2),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.formatToPlainString(h.t.j1Gf2t, { gameName: h.NW.string(h.t.C8p1Sk) }),
                fieldTextHook: h.t.MCHnKy,
                metadataField: f.PC.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(f.PC.STEAM_ITEM_COUNT_TF2),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function O(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = g.Z.get(p.ABu.TWITTER);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.zdXqGx),
                fieldTextHook: h.t.REyUZ2,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.wbvDMz),
                fieldTextHook: h.t['/w/EYm'],
                metadataField: f.PC.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(f.PC.TWITTER_FOLLOWERS_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t['1B3DVl']),
                fieldTextHook: h.t['+NFH7u'],
                metadataField: f.PC.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(f.PC.TWITTER_STATUSES_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.NW.string(h.t.yz2CIC),
                fieldText: h.NW.string(h.t.E2iT8P),
                metadataField: f.PC.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.TWITTER_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function C(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = g.Z.get(p.ABu.REDDIT);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.zdXqGx),
                fieldTextHook: h.t.REyUZ2,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t['3Xsroq']),
                fieldTextHook: h.t.TLgZho,
                metadataField: f.PC.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(f.PC.REDDIT_TOTAL_KARMA),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.NW.string(h.t.oWM95O),
                fieldText: h.NW.string(h.t['0cKdkZ']),
                metadataField: f.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(f.PC.REDDIT_MOD),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.NW.string(h.t['06rDHR']),
                fieldText: h.NW.string(h.t['kCAN5+']),
                metadataField: f.PC.REDDIT_GOLD,
                existingPendingConfiguration: t.get(f.PC.REDDIT_GOLD),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function I(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = g.Z.get(p.ABu.PAYPAL);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.zdXqGx),
                fieldTextHook: h.t.REyUZ2,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.NW.string(h.t.IhXLy8),
                fieldText: h.NW.string(h.t['0JyE8P']),
                metadataField: f.PC.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.PAYPAL_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function E(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = g.Z.get(p.ABu.EBAY);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.zdXqGx),
                fieldTextHook: h.t.REyUZ2,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.AuMxf3),
                fieldTextHook: h.t.oTFOe3,
                metadataField: f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.WzvoSk),
                fieldTextHook: h.t.RH3VAw,
                metadataField: f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.VuSFzs),
                fieldTextHook: h.t.sn3m7u,
                metadataField: f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i,
                operator: f.iO.LESS_THAN
            }),
            (0, r.jsx)(v, {
                titleText: h.NW.string(h.t.TEEYwc),
                fieldText: h.NW.string(h.t['39wASE']),
                metadataField: f.PC.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(f.PC.EBAY_TOP_RATED_SELLER),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        s = g.Z.get(p.ABu.TIKTOK);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v, {
                titleText: h.NW.string(h.t.QHHwRU),
                fieldText: h.NW.string(h.t.E2iT8P),
                metadataField: f.PC.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.WUSIHh),
                fieldTextHook: h.t['/w/EYm'],
                metadataField: f.PC.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_FOLLOWER_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t.w1IVQk),
                fieldTextHook: h.t.JHEsY2,
                metadataField: f.PC.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_FOLLOWING_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.NW.string(h.t['1cFXJi']),
                fieldTextHook: h.t.tEFCYG,
                metadataField: f.PC.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_LIKES_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function T(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i, integration: s } = e;
    return null == s || null == s.role_connections_metadata
        ? null
        : s.role_connections_metadata.map((e) => {
              var a, l;
              let o;
              switch (e.type) {
                  case f.xn.INTEGER_LESS_THAN_EQUAL:
                  case f.xn.DATETIME_LESS_THAN_EQUAL:
                      o = f.iO.LESS_THAN;
                      break;
                  case f.xn.INTEGER_GREATER_THAN_EQUAL:
                  case f.xn.DATETIME_GREATER_THAN_EQUAL:
                      o = f.iO.GREATER_THAN;
                      break;
                  case f.xn.INTEGER_EQUAL:
                  case f.xn.BOOLEAN_EQUAL:
                      o = f.iO.EQUAL;
                      break;
                  case f.xn.INTEGER_NOT_EQUAL:
                  case f.xn.BOOLEAN_NOT_EQUAL:
                      o = f.iO.NOT_EQUAL;
                      break;
                  default:
                      return null;
              }
              switch (e.type) {
                  case f.xn.INTEGER_LESS_THAN_EQUAL:
                  case f.xn.INTEGER_GREATER_THAN_EQUAL:
                  case f.xn.INTEGER_EQUAL:
                  case f.xn.INTEGER_NOT_EQUAL:
                  case f.xn.DATETIME_LESS_THAN_EQUAL:
                  case f.xn.DATETIME_GREATER_THAN_EQUAL:
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
                              applicationId: null == (a = s.application) ? void 0 : a.id
                          },
                          e.key
                      );
                  case f.xn.BOOLEAN_EQUAL:
                  case f.xn.BOOLEAN_NOT_EQUAL:
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
                              applicationId: null == (l = s.application) ? void 0 : l.id
                          },
                          e.key
                      );
              }
          });
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
                          return (null == (t = e.application) ? void 0 : t.id) === o;
                      })
                : void 0;
    if (null != o && null == c) return null;
    let d = null;
    try {
        d = g.Z.get(n[0].configuration.connectionType);
    } catch (e) {}
    let u = new Map();
    n.forEach((e) => {
        null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e);
    });
    let f = {
            configMetadataMap: u,
            onConfigurationChange: i,
            locked: s
        },
        h = null;
    switch (null == d ? void 0 : d.type) {
        case p.ABu.STEAM:
            h = (0, r.jsx)(y, x({}, f));
            break;
        case p.ABu.TWITTER:
            h = (0, r.jsx)(O, x({}, f));
            break;
        case p.ABu.REDDIT:
            h = (0, r.jsx)(C, x({}, f));
            break;
        case p.ABu.PAYPAL:
            h = (0, r.jsx)(I, x({}, f));
            break;
        case p.ABu.EBAY:
            h = (0, r.jsx)(E, x({}, f));
            break;
        case p.ABu.TIKTOK:
            h = (0, r.jsx)(S, x({}, f));
            break;
        default:
            var N, v;
            h = (0, r.jsx)(
                T,
                ((N = x({}, f)),
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
            h
        ]
    });
}
