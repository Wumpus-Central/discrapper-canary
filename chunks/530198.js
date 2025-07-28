(n.d(t, { Z: () => R }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(780384),
    d = n(755721),
    u = n(481060),
    m = n(99690),
    g = n(410030),
    p = n(726542),
    h = n(981631),
    f = n(856651),
    x = n(388032),
    b = n(847966);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    var t, n;
    let i,
        { theme: l, platform: s, integration: d, onRemove: g, locked: p } = e;
    if ((null == d ? void 0 : d.application) != null)
        (o()(null != d.application.bot, 'bot is null'),
            (i = (0, r.jsx)(m.Z, {
                size: u.EFr.SIZE_24,
                user: d.application.bot,
                className: b.verifiedIcon
            })));
    else if (null != s) {
        let e = (0, c.ap)(l) ? s.icon.lightSVG : s.icon.darkSVG;
        i = (0, r.jsx)('img', {
            className: b.verifiedIcon,
            src: e,
            alt: x.intl.formatToPlainString(x.t.rtm15O, { name: s.name })
        });
    }
    return (0, r.jsxs)('div', {
        className: a()(b.verifiedRow, (null == s ? void 0 : s.hasMetadata) === !0 || ((null == d ? void 0 : d.role_connections_metadata) != null && (null == d ? void 0 : d.role_connections_metadata.length) > 0) ? b.verifiedRowWithMetadata : null),
        children: [
            i,
            (0, r.jsx)(u.Text, {
                variant: 'text-md/medium',
                className: b.verifiedText,
                children: x.intl.format(x.t.Nj0a3t, { platformName: null != (n = null == s ? void 0 : s.name) ? n : null == d || null == (t = d.application) ? void 0 : t.name })
            }),
            (0, r.jsx)(u.ua7, {
                text: x.intl.string(x.t.N86XcH),
                children: (e) =>
                    (0, r.jsx)(
                        'div',
                        v(j({}, e), {
                            children: (0, r.jsx)(u.hU, {
                                'aria-label': x.intl.string(x.t.N86XcH),
                                variant: 'icon-only',
                                onClick: g,
                                disabled: p,
                                icon: u.Dio,
                                size: 'sm'
                            })
                        })
                    )
            })
        ]
    });
}
function O(e) {
    let { titleText: t, fieldText: n, metadataField: l, existingPendingConfiguration: a, platform: s, applicationId: o, onConfigurationChange: c, locked: d } = e,
        m = i.useId();
    return (0, r.jsxs)(
        'tr',
        {
            className: b.ruleContainer,
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
                    className: b.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/bold',
                            'aria-hidden': 'true',
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: b.numericalRuleSubItemContainer,
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
                        checked: (null == a ? void 0 : a.configuration.value) === '1',
                        onChange: (e) => {
                            var t, n;
                            let r = null;
                            (e &&
                                (r = {
                                    connectionType: null != (t = null == s ? void 0 : s.type) ? t : f.Kt,
                                    applicationId: o,
                                    connectionMetadataField: l,
                                    operator: f.iO.EQUAL,
                                    value: '1'
                                }),
                                c(r, null != (n = null == a ? void 0 : a.index) ? n : -1));
                        },
                        disabled: d
                    })
                })
            ]
        },
        l
    );
}
function y(e) {
    var t, n;
    let { titleText: l, fieldText: a, fieldTextHook: s, metadataField: o, existingPendingConfiguration: c, platform: m, applicationId: g, onConfigurationChange: p, locked: h, operator: j } = e,
        v = (null == c ? void 0 : c.configuration) != null,
        _ = null != (n = null == c ? void 0 : c.index) ? n : -1,
        [O, y] = (function (e, t) {
            let n = null != t ? t : f.iO.GREATER_THAN,
                r = Math.round(Number(null != e ? e : 0));
            return (n === f.iO.GREATER_THAN ? (r = Math.max(1, r + 1)) : n === f.iO.LESS_THAN && (r = Math.max(0, r - 1)), [r.toString(), n]);
        })(null == c || null == (t = c.configuration) ? void 0 : t.value, j),
        [C, N] = i.useState(O),
        I =
            null != s
                ? x.intl.format(s, {
                      count: C,
                      metadataHook: () => C
                  })
                : (0, r.jsx)('span', {
                      className: b.fieldText,
                      children: a
                  }),
        E = i.useId();
    return (0, r.jsxs)(
        'tr',
        {
            className: b.ruleContainer,
            children: [
                (0, r.jsx)('th', {
                    scope: 'row',
                    children: (0, r.jsx)(u.nn4, {
                        children: (0, r.jsx)('label', {
                            htmlFor: E,
                            children: l
                        })
                    })
                }),
                (0, r.jsxs)('td', {
                    className: b.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/bold',
                            'aria-hidden': 'true',
                            children: l
                        }),
                        (0, r.jsx)('div', {
                            className: b.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                children: I
                            })
                        })
                    ]
                }),
                (0, r.jsx)('td', {
                    children: (0, r.jsx)(d.Is, {
                        'aria-label': x.intl.string(x.t['FTmi9/']),
                        type: 'number',
                        className: b.numericalRuleInput,
                        value: C,
                        onChange: (e) => {
                            if ((N(e), null == c)) return;
                            let [t, n] = (function (e, t) {
                                let n = null != t ? t : f.iO.GREATER_THAN,
                                    r = Math.round(Number(null != e ? e : 0));
                                return (n === f.iO.GREATER_THAN ? (r = Math.max(0, r - 1)) : n === f.iO.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n]);
                            })(e, j);
                            if ('' !== e) {
                                var r;
                                p(
                                    {
                                        connectionType: null != (r = null == m ? void 0 : m.type) ? r : f.Kt,
                                        applicationId: g,
                                        connectionMetadataField: o,
                                        operator: n,
                                        value: t
                                    },
                                    _
                                );
                            }
                        },
                        disabled: h || !v
                    })
                }),
                (0, r.jsx)('td', {
                    children: (0, r.jsx)(u.rsf, {
                        id: E,
                        checked: v,
                        onChange: (e) => {
                            var t, n;
                            let r = null;
                            (e &&
                                (r = {
                                    connectionType: null != (t = null == m ? void 0 : m.type) ? t : f.Kt,
                                    applicationId: g,
                                    connectionMetadataField: o,
                                    operator: y,
                                    value: C
                                }),
                                p(r, null != (n = null == c ? void 0 : c.index) ? n : -1));
                        },
                        disabled: h
                    })
                })
            ]
        },
        o
    );
}
function C(e) {
    let { children: t } = e;
    return (0, r.jsxs)('table', {
        className: b.rulesTable,
        children: [
            (0, r.jsx)('thead', {
                children: (0, r.jsxs)('tr', {
                    children: [
                        (0, r.jsx)('th', { scope: 'col' }),
                        (0, r.jsx)('th', {
                            scope: 'col',
                            children: (0, r.jsx)(u.nn4, { children: x.intl.string(x.t.TwDLVl) })
                        }),
                        (0, r.jsx)('th', {
                            scope: 'col',
                            children: (0, r.jsx)(u.nn4, { children: x.intl.string(x.t.qDWJwc) })
                        }),
                        (0, r.jsx)('th', {
                            scope: 'col',
                            children: (0, r.jsx)(u.nn4, { children: x.intl.string(x.t['5IF76e']) })
                        })
                    ]
                })
            }),
            (0, r.jsx)('tbody', { children: t })
        ]
    });
}
function N(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(h.ABu.STEAM);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.zdXqGx),
                fieldTextHook: x.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.gLs17O),
                fieldTextHook: x.t.BWDpbm,
                metadataField: f.PC.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(f.PC.STEAM_GAME_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.formatToPlainString(x.t.j1Gf2t, { gameName: x.intl.string(x.t.HKUEZm) }),
                fieldTextHook: x.t['OGUX7+'],
                metadataField: f.PC.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(f.PC.STEAM_ITEM_COUNT_DOTA2),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.formatToPlainString(x.t.j1Gf2t, { gameName: x.intl.string(x.t.C8p1Sk) }),
                fieldTextHook: x.t.Eq7h8P,
                metadataField: f.PC.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(f.PC.STEAM_ITEM_COUNT_TF2),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function I(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(h.ABu.TWITTER);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.zdXqGx),
                fieldTextHook: x.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.wbvDMz),
                fieldTextHook: x.t.Zwey2d,
                metadataField: f.PC.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(f.PC.TWITTER_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t['1B3DVl']),
                fieldTextHook: x.t['lrmh/f'],
                metadataField: f.PC.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(f.PC.TWITTER_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(O, {
                titleText: x.intl.string(x.t.yz2CIC),
                fieldText: x.intl.string(x.t.E2iT8P),
                metadataField: f.PC.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.TWITTER_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function E(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(h.ABu.REDDIT);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.zdXqGx),
                fieldTextHook: x.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t['3Xsroq']),
                fieldTextHook: x.t.A4zKur,
                metadataField: f.PC.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(f.PC.REDDIT_TOTAL_KARMA),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(O, {
                titleText: x.intl.string(x.t.oWM95O),
                fieldText: x.intl.string(x.t['0cKdkZ']),
                metadataField: f.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(f.PC.REDDIT_MOD),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(O, {
                titleText: x.intl.string(x.t['06rDHR']),
                fieldText: x.intl.string(x.t['kCAN5+']),
                metadataField: f.PC.REDDIT_GOLD,
                existingPendingConfiguration: t.get(f.PC.REDDIT_GOLD),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(h.ABu.PAYPAL);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.zdXqGx),
                fieldTextHook: x.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(O, {
                titleText: x.intl.string(x.t.IhXLy8),
                fieldText: x.intl.string(x.t['0JyE8P']),
                metadataField: f.PC.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.PAYPAL_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function T(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(h.ABu.EBAY);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.zdXqGx),
                fieldTextHook: x.t.QPrntb,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.AuMxf3),
                fieldTextHook: x.t.IpQ4Ex,
                metadataField: f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.WzvoSk),
                fieldTextHook: x.t.RH3VAw,
                metadataField: f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.VuSFzs),
                fieldTextHook: x.t.sn3m7u,
                metadataField: f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
                operator: f.iO.LESS_THAN
            }),
            (0, r.jsx)(O, {
                titleText: x.intl.string(x.t.TEEYwc),
                fieldText: x.intl.string(x.t['39wASE']),
                metadataField: f.PC.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(f.PC.EBAY_TOP_RATED_SELLER),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function P(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(h.ABu.TIKTOK);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(O, {
                titleText: x.intl.string(x.t.QHHwRU),
                fieldText: x.intl.string(x.t.E2iT8P),
                metadataField: f.PC.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.WUSIHh),
                fieldTextHook: x.t.Zwey2d,
                metadataField: f.PC.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_FOLLOWER_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t.w1IVQk),
                fieldTextHook: x.t.Ueeex8,
                metadataField: f.PC.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_FOLLOWING_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            }),
            (0, r.jsx)(y, {
                titleText: x.intl.string(x.t['1cFXJi']),
                fieldTextHook: x.t.uq2UuL,
                metadataField: f.PC.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_LIKES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i
            })
        ]
    });
}
function w(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i, integration: l } = e;
    return null == l || null == l.role_connections_metadata
        ? null
        : l.role_connections_metadata.map((e) => {
              var a, s;
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
                          y,
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
                  case f.xn.BOOLEAN_EQUAL:
                  case f.xn.BOOLEAN_NOT_EQUAL:
                      return (0, r.jsx)(
                          O,
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
              }
          });
}
function R(e) {
    let t,
        { configurationItems: n, onConfigurationChange: i, locked: l, integrations: a } = e,
        s = (0, g.ZP)();
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
        d = p.Z.get(n[0].configuration.connectionType);
    } catch (e) {}
    let u = new Map();
    n.forEach((e) => {
        null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e);
    });
    let m = {
            configMetadataMap: u,
            onConfigurationChange: i,
            locked: l
        },
        f = null;
    switch (null == d ? void 0 : d.type) {
        case h.ABu.STEAM:
            f = (0, r.jsx)(N, j({}, m));
            break;
        case h.ABu.TWITTER:
            f = (0, r.jsx)(I, j({}, m));
            break;
        case h.ABu.REDDIT:
            f = (0, r.jsx)(E, j({}, m));
            break;
        case h.ABu.PAYPAL:
            f = (0, r.jsx)(S, j({}, m));
            break;
        case h.ABu.EBAY:
            f = (0, r.jsx)(T, j({}, m));
            break;
        case h.ABu.TIKTOK:
            f = (0, r.jsx)(P, j({}, m));
            break;
        default:
            f = (0, r.jsx)(w, v(j({}, m), { integration: c }));
    }
    return (0, r.jsxs)('div', {
        className: b.container,
        children: [
            (0, r.jsx)(_, {
                theme: s,
                platform: d,
                integration: c,
                onRemove: () => i(null, t.index),
                locked: l
            }),
            f
        ]
    });
}
