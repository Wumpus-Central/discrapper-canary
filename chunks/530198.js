n.d(t, { Z: () => P }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(780384),
    u = n(481060),
    d = n(99690),
    m = n(410030),
    g = n(726542),
    p = n(981631),
    f = n(856651),
    h = n(388032),
    x = n(847966);
function b(e) {
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
        { theme: l, platform: a, integration: m, onRemove: g, locked: p } = e;
    if ((null == m ? void 0 : m.application) != null)
        o()(null != m.application.bot, 'bot is null'),
            (i = (0, r.jsx)(d.Z, {
                size: u.EFr.SIZE_24,
                user: m.application.bot,
                className: x.verifiedIcon
            }));
    else if (null != a) {
        let e = (0, c.ap)(l) ? a.icon.lightSVG : a.icon.darkSVG;
        i = (0, r.jsx)('img', {
            className: x.verifiedIcon,
            src: e,
            alt: h.intl.formatToPlainString(h.t.rtm15O, { name: a.name })
        });
    }
    return (0, r.jsxs)('div', {
        className: s()(x.verifiedRow, (null == a ? void 0 : a.hasMetadata) === !0 || ((null == m ? void 0 : m.role_connections_metadata) != null && (null == m ? void 0 : m.role_connections_metadata.length) > 0) ? x.verifiedRowWithMetadata : null),
        children: [
            i,
            (0, r.jsx)(u.Text, {
                variant: 'text-md/medium',
                className: x.verifiedText,
                children: h.intl.format(h.t.Nj0a3t, { platformName: null != (n = null == a ? void 0 : a.name) ? n : null == m || null == (t = m.application) ? void 0 : t.name })
            }),
            (0, r.jsx)(u.zxk, {
                'aria-label': h.intl.string(h.t.N86XcH),
                size: u.zxk.Sizes.TINY,
                look: u.zxk.Looks.BLANK,
                onClick: g,
                disabled: p,
                className: x.closeButton,
                children: (0, r.jsx)(u.ua7, {
                    text: h.intl.string(h.t.N86XcH),
                    children: (e) =>
                        (0, r.jsx)(
                            u.Dio,
                            b(
                                {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: x.closeIcon
                                },
                                e
                            )
                        )
                })
            })
        ]
    });
}
function _(e) {
    let { titleText: t, fieldText: n, metadataField: l, existingPendingConfiguration: s, platform: a, applicationId: o, onConfigurationChange: c, locked: d } = e,
        m = i.useId();
    return (0, r.jsxs)(
        'tr',
        {
            className: x.ruleContainer,
            children: [
                (0, r.jsx)('th', {
                    scope: 'row',
                    children: (0, r.jsx)(u.nn4, {
                        children: (0, r.jsx)('label', {
                            htmlFor: m,
                            children: t
                        })
                    })
                }),
                (0, r.jsxs)('td', {
                    className: x.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/bold',
                            'aria-hidden': 'true',
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: x.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                children: n
                            })
                        })
                    ]
                }),
                (0, r.jsx)('td', {}),
                (0, r.jsx)('td', {
                    children: (0, r.jsx)(u.rsf, {
                        id: m,
                        checked: (null == s ? void 0 : s.configuration.value) === '1',
                        onChange: (e) => {
                            var t, n;
                            let r = null;
                            e &&
                                (r = {
                                    connectionType: null != (t = null == a ? void 0 : a.type) ? t : f.Kt,
                                    applicationId: o,
                                    connectionMetadataField: l,
                                    operator: f.iO.EQUAL,
                                    value: '1'
                                }),
                                c(r, null != (n = null == s ? void 0 : s.index) ? n : -1);
                        },
                        disabled: d
                    })
                })
            ]
        },
        l
    );
}
function v(e) {
    var t, n;
    let { titleText: l, fieldText: s, fieldTextHook: a, metadataField: o, existingPendingConfiguration: c, platform: d, applicationId: m, onConfigurationChange: g, locked: p, operator: b } = e,
        j = (null == c ? void 0 : c.configuration) != null,
        _ = null != (n = null == c ? void 0 : c.index) ? n : -1,
        [v, O] = (function (e, t) {
            let n = null != t ? t : f.iO.GREATER_THAN,
                r = Math.round(Number(null != e ? e : 0));
            return n === f.iO.GREATER_THAN ? (r = Math.max(1, r + 1)) : n === f.iO.LESS_THAN && (r = Math.max(0, r - 1)), [r.toString(), n];
        })(null == c || null == (t = c.configuration) ? void 0 : t.value, b),
        [C, y] = i.useState(v),
        N =
            null != a
                ? h.intl.format(a, {
                      count: C,
                      metadataHook: () => C
                  })
                : (0, r.jsx)('span', {
                      className: x.fieldText,
                      children: s
                  }),
        I = i.useId();
    return (0, r.jsxs)(
        'tr',
        {
            className: x.ruleContainer,
            children: [
                (0, r.jsx)('th', {
                    scope: 'row',
                    children: (0, r.jsx)(u.nn4, {
                        children: (0, r.jsx)('label', {
                            htmlFor: I,
                            children: l
                        })
                    })
                }),
                (0, r.jsxs)('td', {
                    className: x.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/bold',
                            'aria-hidden': 'true',
                            children: l
                        }),
                        (0, r.jsx)('div', {
                            className: x.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                children: N
                            })
                        })
                    ]
                }),
                (0, r.jsx)('td', {
                    children: (0, r.jsx)(u.oil, {
                        'aria-label': h.intl.string(h.t['FTmi9/']),
                        type: 'number',
                        className: x.numericalRuleInput,
                        size: u.oil.Sizes.MINI,
                        value: C,
                        onChange: (e) => {
                            if ((y(e), null == c)) return;
                            let [t, n] = (function (e, t) {
                                let n = null != t ? t : f.iO.GREATER_THAN,
                                    r = Math.round(Number(null != e ? e : 0));
                                return n === f.iO.GREATER_THAN ? (r = Math.max(0, r - 1)) : n === f.iO.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n];
                            })(e, b);
                            if ('' !== e) {
                                var r;
                                g(
                                    {
                                        connectionType: null != (r = null == d ? void 0 : d.type) ? r : f.Kt,
                                        applicationId: m,
                                        connectionMetadataField: o,
                                        operator: n,
                                        value: t
                                    },
                                    _
                                );
                            }
                        },
                        disabled: p || !j
                    })
                }),
                (0, r.jsx)('td', {
                    children: (0, r.jsx)(u.rsf, {
                        id: I,
                        checked: j,
                        onChange: (e) => {
                            var t, n;
                            let r = null;
                            e &&
                                (r = {
                                    connectionType: null != (t = null == d ? void 0 : d.type) ? t : f.Kt,
                                    applicationId: m,
                                    connectionMetadataField: o,
                                    operator: O,
                                    value: C
                                }),
                                g(r, null != (n = null == c ? void 0 : c.index) ? n : -1);
                        },
                        disabled: p
                    })
                })
            ]
        },
        o
    );
}
function O(e) {
    let { children: t } = e;
    return (0, r.jsxs)('table', {
        className: x.rulesTable,
        children: [
            (0, r.jsx)('thead', {
                children: (0, r.jsxs)('tr', {
                    children: [
                        (0, r.jsx)('th', { scope: 'col' }),
                        (0, r.jsx)('th', {
                            scope: 'col',
                            children: (0, r.jsx)(u.nn4, { children: h.intl.string(h.t.TwDLVl) })
                        }),
                        (0, r.jsx)('th', {
                            scope: 'col',
                            children: (0, r.jsx)(u.nn4, { children: h.intl.string(h.t.qDWJwc) })
                        }),
                        (0, r.jsx)('th', {
                            scope: 'col',
                            children: (0, r.jsx)(u.nn4, { children: h.intl.string(h.t['5IF76e']) })
                        })
                    ]
                })
            }),
            (0, r.jsx)('tbody', { children: t })
        ]
    });
}
function C(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = g.Z.get(p.ABu.STEAM);
    return (0, r.jsxs)(O, {
        children: [
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.zdXqGx),
                fieldTextHook: h.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.gLs17O),
                fieldTextHook: h.t.BWDpbm,
                metadataField: f.PC.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(f.PC.STEAM_GAME_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.formatToPlainString(h.t.j1Gf2t, { gameName: h.intl.string(h.t.HKUEZm) }),
                fieldTextHook: h.t['OGUX7+'],
                metadataField: f.PC.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(f.PC.STEAM_ITEM_COUNT_DOTA2),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.formatToPlainString(h.t.j1Gf2t, { gameName: h.intl.string(h.t.C8p1Sk) }),
                fieldTextHook: h.t.Eq7h8P,
                metadataField: f.PC.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(f.PC.STEAM_ITEM_COUNT_TF2),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function y(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = g.Z.get(p.ABu.TWITTER);
    return (0, r.jsxs)(O, {
        children: [
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.zdXqGx),
                fieldTextHook: h.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.wbvDMz),
                fieldTextHook: h.t.Zwey2d,
                metadataField: f.PC.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(f.PC.TWITTER_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t['1B3DVl']),
                fieldTextHook: h.t['lrmh/f'],
                metadataField: f.PC.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(f.PC.TWITTER_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.intl.string(h.t.yz2CIC),
                fieldText: h.intl.string(h.t.E2iT8P),
                metadataField: f.PC.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.TWITTER_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function N(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = g.Z.get(p.ABu.REDDIT);
    return (0, r.jsxs)(O, {
        children: [
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.zdXqGx),
                fieldTextHook: h.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t['3Xsroq']),
                fieldTextHook: h.t.A4zKur,
                metadataField: f.PC.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(f.PC.REDDIT_TOTAL_KARMA),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.intl.string(h.t.oWM95O),
                fieldText: h.intl.string(h.t['0cKdkZ']),
                metadataField: f.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(f.PC.REDDIT_MOD),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.intl.string(h.t['06rDHR']),
                fieldText: h.intl.string(h.t['kCAN5+']),
                metadataField: f.PC.REDDIT_GOLD,
                existingPendingConfiguration: t.get(f.PC.REDDIT_GOLD),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function I(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = g.Z.get(p.ABu.PAYPAL);
    return (0, r.jsxs)(O, {
        children: [
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.zdXqGx),
                fieldTextHook: h.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: h.intl.string(h.t.IhXLy8),
                fieldText: h.intl.string(h.t['0JyE8P']),
                metadataField: f.PC.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.PAYPAL_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function E(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = g.Z.get(p.ABu.EBAY);
    return (0, r.jsxs)(O, {
        children: [
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.zdXqGx),
                fieldTextHook: h.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.AuMxf3),
                fieldTextHook: h.t.IpQ4Ex,
                metadataField: f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.WzvoSk),
                fieldTextHook: h.t.RH3VAw,
                metadataField: f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.VuSFzs),
                fieldTextHook: h.t.sn3m7u,
                metadataField: f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
                operator: f.iO.LESS_THAN
            }),
            (0, r.jsx)(_, {
                titleText: h.intl.string(h.t.TEEYwc),
                fieldText: h.intl.string(h.t['39wASE']),
                metadataField: f.PC.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(f.PC.EBAY_TOP_RATED_SELLER),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = g.Z.get(p.ABu.TIKTOK);
    return (0, r.jsxs)(O, {
        children: [
            (0, r.jsx)(_, {
                titleText: h.intl.string(h.t.QHHwRU),
                fieldText: h.intl.string(h.t.E2iT8P),
                metadataField: f.PC.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.WUSIHh),
                fieldTextHook: h.t.Zwey2d,
                metadataField: f.PC.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_FOLLOWER_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.w1IVQk),
                fieldTextHook: h.t.Ueeex8,
                metadataField: f.PC.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_FOLLOWING_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t['1cFXJi']),
                fieldTextHook: h.t.uq2UuL,
                metadataField: f.PC.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_LIKES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function T(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i, integration: l } = e;
    return null == l || null == l.role_connections_metadata
        ? null
        : l.role_connections_metadata.map((e) => {
              var s, a;
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
                              applicationId: null == (s = l.application) ? void 0 : s.id
                          },
                          e.key
                      );
                  case f.xn.BOOLEAN_EQUAL:
                  case f.xn.BOOLEAN_NOT_EQUAL:
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
                              applicationId: null == (a = l.application) ? void 0 : a.id
                          },
                          e.key
                      );
              }
          });
}
function P(e) {
    let t,
        { configurationItems: n, onConfigurationChange: i, locked: l, integrations: s } = e,
        a = (0, m.ZP)();
    if (n.length < 1) return null;
    let o = n[0].configuration.applicationId,
        c =
            null != o
                ? null == s
                    ? void 0
                    : s.find((e) => {
                          var t;
                          return (null == (t = e.application) ? void 0 : t.id) === o;
                      })
                : void 0;
    if (null != o && null == c) return null;
    let u = null;
    try {
        u = g.Z.get(n[0].configuration.connectionType);
    } catch (e) {}
    let d = new Map();
    n.forEach((e) => {
        null != e.configuration.connectionMetadataField ? d.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e);
    });
    let f = {
            configMetadataMap: d,
            onConfigurationChange: i,
            locked: l
        },
        h = null;
    switch (null == u ? void 0 : u.type) {
        case p.ABu.STEAM:
            h = (0, r.jsx)(C, b({}, f));
            break;
        case p.ABu.TWITTER:
            h = (0, r.jsx)(y, b({}, f));
            break;
        case p.ABu.REDDIT:
            h = (0, r.jsx)(N, b({}, f));
            break;
        case p.ABu.PAYPAL:
            h = (0, r.jsx)(I, b({}, f));
            break;
        case p.ABu.EBAY:
            h = (0, r.jsx)(E, b({}, f));
            break;
        case p.ABu.TIKTOK:
            h = (0, r.jsx)(S, b({}, f));
            break;
        default:
            var _, v;
            h = (0, r.jsx)(
                T,
                ((_ = b({}, f)),
                (v = v = { integration: c }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(v))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(v)).forEach(function (e) {
                          Object.defineProperty(_, e, Object.getOwnPropertyDescriptor(v, e));
                      }),
                _)
            );
    }
    return (0, r.jsxs)('div', {
        className: x.container,
        children: [
            (0, r.jsx)(j, {
                theme: a,
                platform: u,
                integration: c,
                onRemove: () => i(null, t.index),
                locked: l
            }),
            h
        ]
    });
}
