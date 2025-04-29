n.d(t, { Z: () => P }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
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
    h = n(856651),
    f = n(388032),
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
            alt: f.intl.formatToPlainString(f.t.rtm15O, { name: a.name })
        });
    }
    return (0, r.jsxs)('div', {
        className: s()(x.verifiedRow, (null == a ? void 0 : a.hasMetadata) === !0 || ((null == m ? void 0 : m.role_connections_metadata) != null && (null == m ? void 0 : m.role_connections_metadata.length) > 0) ? x.verifiedRowWithMetadata : null),
        children: [
            i,
            (0, r.jsx)(u.Text, {
                variant: 'text-md/medium',
                className: x.verifiedText,
                children: f.intl.format(f.t.Nj0a3t, { platformName: null != (n = null == a ? void 0 : a.name) ? n : null == m || null == (t = m.application) ? void 0 : t.name })
            }),
            (0, r.jsx)(u.zxk, {
                'aria-label': f.intl.string(f.t.N86XcH),
                size: u.zxk.Sizes.TINY,
                look: u.zxk.Looks.BLANK,
                onClick: g,
                disabled: p,
                className: x.closeButton,
                children: (0, r.jsx)(u.ua7, {
                    text: f.intl.string(f.t.N86XcH),
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
                                    connectionType: null != (t = null == a ? void 0 : a.type) ? t : h.Kt,
                                    applicationId: o,
                                    connectionMetadataField: l,
                                    operator: h.iO.EQUAL,
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
            let n = null != t ? t : h.iO.GREATER_THAN,
                r = Math.round(Number(null != e ? e : 0));
            return n === h.iO.GREATER_THAN ? (r = Math.max(1, r + 1)) : n === h.iO.LESS_THAN && (r = Math.max(0, r - 1)), [r.toString(), n];
        })(null == c || null == (t = c.configuration) ? void 0 : t.value, b),
        [C, y] = i.useState(v),
        N =
            null != a
                ? f.intl.format(a, {
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
                        'aria-label': f.intl.string(f.t['FTmi9/']),
                        type: 'number',
                        className: x.numericalRuleInput,
                        size: u.oil.Sizes.MINI,
                        value: C,
                        onChange: (e) => {
                            if ((y(e), null == c)) return;
                            let [t, n] = (function (e, t) {
                                let n = null != t ? t : h.iO.GREATER_THAN,
                                    r = Math.round(Number(null != e ? e : 0));
                                return n === h.iO.GREATER_THAN ? (r = Math.max(0, r - 1)) : n === h.iO.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n];
                            })(e, b);
                            if ('' !== e) {
                                var r;
                                g(
                                    {
                                        connectionType: null != (r = null == d ? void 0 : d.type) ? r : h.Kt,
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
                                    connectionType: null != (t = null == d ? void 0 : d.type) ? t : h.Kt,
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
                            children: (0, r.jsx)(u.nn4, { children: f.intl.string(f.t.TwDLVl) })
                        }),
                        (0, r.jsx)('th', {
                            scope: 'col',
                            children: (0, r.jsx)(u.nn4, { children: f.intl.string(f.t.qDWJwc) })
                        }),
                        (0, r.jsx)('th', {
                            scope: 'col',
                            children: (0, r.jsx)(u.nn4, { children: f.intl.string(f.t['5IF76e']) })
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
                titleText: f.intl.string(f.t.zdXqGx),
                fieldTextHook: f.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t.gLs17O),
                fieldTextHook: f.t.BWDpbm,
                metadataField: h.PC.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(h.PC.STEAM_GAME_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.formatToPlainString(f.t.j1Gf2t, { gameName: f.intl.string(f.t.HKUEZm) }),
                fieldTextHook: f.t['OGUX7+'],
                metadataField: h.PC.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_DOTA2),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.formatToPlainString(f.t.j1Gf2t, { gameName: f.intl.string(f.t.C8p1Sk) }),
                fieldTextHook: f.t.Eq7h8P,
                metadataField: h.PC.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_TF2),
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
                titleText: f.intl.string(f.t.zdXqGx),
                fieldTextHook: f.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t.wbvDMz),
                fieldTextHook: f.t.Zwey2d,
                metadataField: h.PC.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(h.PC.TWITTER_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t['1B3DVl']),
                fieldTextHook: f.t['lrmh/f'],
                metadataField: h.PC.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(h.PC.TWITTER_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.intl.string(f.t.yz2CIC),
                fieldText: f.intl.string(f.t.E2iT8P),
                metadataField: h.PC.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.TWITTER_VERIFIED),
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
                titleText: f.intl.string(f.t.zdXqGx),
                fieldTextHook: f.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t['3Xsroq']),
                fieldTextHook: f.t.A4zKur,
                metadataField: h.PC.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(h.PC.REDDIT_TOTAL_KARMA),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.intl.string(f.t.oWM95O),
                fieldText: f.intl.string(f.t['0cKdkZ']),
                metadataField: h.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(h.PC.REDDIT_MOD),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.intl.string(f.t['06rDHR']),
                fieldText: f.intl.string(f.t['kCAN5+']),
                metadataField: h.PC.REDDIT_GOLD,
                existingPendingConfiguration: t.get(h.PC.REDDIT_GOLD),
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
                titleText: f.intl.string(f.t.zdXqGx),
                fieldTextHook: f.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(_, {
                titleText: f.intl.string(f.t.IhXLy8),
                fieldText: f.intl.string(f.t['0JyE8P']),
                metadataField: h.PC.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.PAYPAL_VERIFIED),
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
                titleText: f.intl.string(f.t.zdXqGx),
                fieldTextHook: f.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t.AuMxf3),
                fieldTextHook: f.t.IpQ4Ex,
                metadataField: h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t.WzvoSk),
                fieldTextHook: f.t.RH3VAw,
                metadataField: h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t.VuSFzs),
                fieldTextHook: f.t.sn3m7u,
                metadataField: h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
                operator: h.iO.LESS_THAN
            }),
            (0, r.jsx)(_, {
                titleText: f.intl.string(f.t.TEEYwc),
                fieldText: f.intl.string(f.t['39wASE']),
                metadataField: h.PC.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(h.PC.EBAY_TOP_RATED_SELLER),
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
                titleText: f.intl.string(f.t.QHHwRU),
                fieldText: f.intl.string(f.t.E2iT8P),
                metadataField: h.PC.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t.WUSIHh),
                fieldTextHook: f.t.Zwey2d,
                metadataField: h.PC.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWER_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t.w1IVQk),
                fieldTextHook: f.t.Ueeex8,
                metadataField: h.PC.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWING_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(v, {
                titleText: f.intl.string(f.t['1cFXJi']),
                fieldTextHook: f.t.uq2UuL,
                metadataField: h.PC.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_LIKES_COUNT),
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
                  case h.xn.BOOLEAN_EQUAL:
                  case h.xn.BOOLEAN_NOT_EQUAL:
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
    let h = {
            configMetadataMap: d,
            onConfigurationChange: i,
            locked: l
        },
        f = null;
    switch (null == u ? void 0 : u.type) {
        case p.ABu.STEAM:
            f = (0, r.jsx)(C, b({}, h));
            break;
        case p.ABu.TWITTER:
            f = (0, r.jsx)(y, b({}, h));
            break;
        case p.ABu.REDDIT:
            f = (0, r.jsx)(N, b({}, h));
            break;
        case p.ABu.PAYPAL:
            f = (0, r.jsx)(I, b({}, h));
            break;
        case p.ABu.EBAY:
            f = (0, r.jsx)(E, b({}, h));
            break;
        case p.ABu.TIKTOK:
            f = (0, r.jsx)(S, b({}, h));
            break;
        default:
            var _, v;
            f = (0, r.jsx)(
                T,
                ((_ = b({}, h)),
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
            f
        ]
    });
}
