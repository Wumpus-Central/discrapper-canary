n.d(t, { Z: () => Z }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
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
    f = n(981631),
    h = n(856651),
    b = n(388032),
    x = n(890644);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e, t) {
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
function v(e) {
    var t, n;
    let i,
        { theme: l, platform: s, integration: d, onRemove: g, locked: p } = e;
    if ((null == d ? void 0 : d.application) != null)
        o()(null != d.application.bot, "bot is null"),
            (i = (0, r.jsx)(m.Z, {
                size: u.EFr.SIZE_24,
                user: d.application.bot,
                className: x.verifiedIcon,
            }));
    else if (null != s) {
        let e = (0, c.ap)(l) ? s.icon.lightSVG : s.icon.darkSVG;
        i = (0, r.jsx)("img", {
            className: x.verifiedIcon,
            src: e,
            alt: b.intl.formatToPlainString(b.t.rtm15O, { name: s.name }),
        });
    }
    return (0, r.jsxs)("div", {
        className: a()(
            x.verifiedRow,
            (null == s ? void 0 : s.hasMetadata) === !0 ||
                ((null == d ? void 0 : d.role_connections_metadata) != null &&
                    (null == d ? void 0 : d.role_connections_metadata.length) > 0)
                ? x.verifiedRowWithMetadata
                : null,
        ),
        children: [
            i,
            (0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                className: x.verifiedText,
                children: b.intl.format(b.t.Nj0a3t, {
                    platformName:
                        null != (n = null == s ? void 0 : s.name)
                            ? n
                            : null == d || null == (t = d.application)
                              ? void 0
                              : t.name,
                }),
            }),
            (0, r.jsx)(u.ua7, {
                text: b.intl.string(b.t.N86XcH),
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        _(j({}, e), {
                            children: (0, r.jsx)(u.hU, {
                                "aria-label": b.intl.string(b.t.N86XcH),
                                variant: "icon-only",
                                onClick: g,
                                disabled: p,
                                icon: u.Dio,
                                size: "sm",
                            }),
                        }),
                    ),
            }),
        ],
    });
}
function O(e) {
    let {
            titleText: t,
            fieldText: n,
            metadataField: l,
            existingPendingConfiguration: a,
            platform: s,
            applicationId: o,
            onConfigurationChange: c,
            locked: m,
        } = e,
        g = i.useId();
    return (0, r.jsxs)(
        "tr",
        {
            className: x.ruleContainer,
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    children: (0, r.jsx)(u.nn4, {
                        children: (0, r.jsx)("label", {
                            htmlFor: g,
                            children: t,
                        }),
                    }),
                }),
                (0, r.jsxs)("td", {
                    className: x.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/bold",
                            "aria-hidden": "true",
                            children: t,
                        }),
                        (0, r.jsx)("div", {
                            className: x.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: n,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("td", {}),
                (0, r.jsx)("td", {
                    children: (0, r.jsx)(d.T2, {
                        id: g,
                        checked: (null == a ? void 0 : a.configuration.value) === "1",
                        onChange: (e) => {
                            var t, n;
                            let r = null;
                            e &&
                                (r = {
                                    connectionType: null != (t = null == s ? void 0 : s.type) ? t : h.Kt,
                                    applicationId: o,
                                    connectionMetadataField: l,
                                    operator: h.iO.EQUAL,
                                    value: "1",
                                }),
                                c(r, null != (n = null == a ? void 0 : a.index) ? n : -1);
                        },
                        disabled: m,
                    }),
                }),
            ],
        },
        l,
    );
}
function y(e) {
    var t, n;
    let {
            titleText: l,
            fieldText: a,
            fieldTextHook: s,
            metadataField: o,
            existingPendingConfiguration: c,
            platform: m,
            applicationId: g,
            onConfigurationChange: p,
            locked: f,
            operator: j,
        } = e,
        _ = (null == c ? void 0 : c.configuration) != null,
        v = null != (n = null == c ? void 0 : c.index) ? n : -1,
        [O, y] = (function (e, t) {
            let n = null != t ? t : h.iO.GREATER_THAN,
                r = Math.round(Number(null != e ? e : 0));
            return (
                n === h.iO.GREATER_THAN ? (r = Math.max(1, r + 1)) : n === h.iO.LESS_THAN && (r = Math.max(0, r - 1)),
                [r.toString(), n]
            );
        })(null == c || null == (t = c.configuration) ? void 0 : t.value, j),
        [C, N] = i.useState(O),
        E =
            null != s
                ? b.intl.format(s, {
                      count: C,
                      metadataHook: () => C,
                  })
                : (0, r.jsx)("span", {
                      className: x.fieldText,
                      children: a,
                  }),
        I = i.useId();
    return (0, r.jsxs)(
        "tr",
        {
            className: x.ruleContainer,
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    children: (0, r.jsx)(u.nn4, {
                        children: (0, r.jsx)("label", {
                            htmlFor: I,
                            children: l,
                        }),
                    }),
                }),
                (0, r.jsxs)("td", {
                    className: x.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/bold",
                            "aria-hidden": "true",
                            children: l,
                        }),
                        (0, r.jsx)("div", {
                            className: x.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: E,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("td", {
                    children: (0, r.jsx)("div", {
                        className: x.numericalRuleInput,
                        children: (0, r.jsx)(u.oil, {
                            "aria-label": b.intl.string(b.t["FTmi9/"]),
                            type: "number",
                            value: C,
                            onChange: (e) => {
                                if ((N(e), null == c)) return;
                                let [t, n] = (function (e, t) {
                                    let n = null != t ? t : h.iO.GREATER_THAN,
                                        r = Math.round(Number(null != e ? e : 0));
                                    return (
                                        n === h.iO.GREATER_THAN
                                            ? (r = Math.max(0, r - 1))
                                            : n === h.iO.LESS_THAN && (r = Math.max(1, r + 1)),
                                        [r.toString(), n]
                                    );
                                })(e, j);
                                if ("" !== e) {
                                    var r;
                                    p(
                                        {
                                            connectionType: null != (r = null == m ? void 0 : m.type) ? r : h.Kt,
                                            applicationId: g,
                                            connectionMetadataField: o,
                                            operator: n,
                                            value: t,
                                        },
                                        v,
                                    );
                                }
                            },
                            disabled: f || !_,
                        }),
                    }),
                }),
                (0, r.jsx)("td", {
                    children: (0, r.jsx)(d.T2, {
                        id: I,
                        checked: _,
                        onChange: (e) => {
                            var t, n;
                            let r = null;
                            e &&
                                (r = {
                                    connectionType: null != (t = null == m ? void 0 : m.type) ? t : h.Kt,
                                    applicationId: g,
                                    connectionMetadataField: o,
                                    operator: y,
                                    value: C,
                                }),
                                p(r, null != (n = null == c ? void 0 : c.index) ? n : -1);
                        },
                        disabled: f,
                    }),
                }),
            ],
        },
        o,
    );
}
function C(e) {
    let { children: t } = e;
    return (0, r.jsxs)("table", {
        className: x.rulesTable,
        children: [
            (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                    children: [
                        (0, r.jsx)("th", { scope: "col" }),
                        (0, r.jsx)("th", {
                            scope: "col",
                            children: (0, r.jsx)(u.nn4, { children: b.intl.string(b.t.TwDLVl) }),
                        }),
                        (0, r.jsx)("th", {
                            scope: "col",
                            children: (0, r.jsx)(u.nn4, { children: b.intl.string(b.t.qDWJwc) }),
                        }),
                        (0, r.jsx)("th", {
                            scope: "col",
                            children: (0, r.jsx)(u.nn4, { children: b.intl.string(b.t["5IF76e"]) }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)("tbody", { children: t }),
        ],
    });
}
function N(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(f.ABu.BLUESKY);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.zdXqGx),
                fieldTextHook: b.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.IE0T3t),
                fieldTextHook: b.t.Zwey2d,
                metadataField: h.PC.BLUESKY_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(h.PC.BLUESKY_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t["LLE+Ul"]),
                fieldTextHook: b.t["UK2/m5"],
                metadataField: h.PC.BLUESKY_STATUSES_COUNT,
                existingPendingConfiguration: t.get(h.PC.BLUESKY_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function E(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(f.ABu.STEAM);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.zdXqGx),
                fieldTextHook: b.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.gLs17O),
                fieldTextHook: b.t.BWDpbm,
                metadataField: h.PC.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(h.PC.STEAM_GAME_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.formatToPlainString(b.t.j1Gf2t, { gameName: b.intl.string(b.t.HKUEZm) }),
                fieldTextHook: b.t["OGUX7+"],
                metadataField: h.PC.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_DOTA2),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.formatToPlainString(b.t.j1Gf2t, { gameName: b.intl.string(b.t.C8p1Sk) }),
                fieldTextHook: b.t.Eq7h8P,
                metadataField: h.PC.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_TF2),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function I(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(f.ABu.TWITTER);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.zdXqGx),
                fieldTextHook: b.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.wbvDMz),
                fieldTextHook: b.t.Zwey2d,
                metadataField: h.PC.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(h.PC.TWITTER_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t["1B3DVl"]),
                fieldTextHook: b.t["lrmh/f"],
                metadataField: h.PC.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(h.PC.TWITTER_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: b.intl.string(b.t.yz2CIC),
                fieldText: b.intl.string(b.t.E2iT8P),
                metadataField: h.PC.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.TWITTER_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(f.ABu.REDDIT);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.zdXqGx),
                fieldTextHook: b.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t["3Xsroq"]),
                fieldTextHook: b.t.A4zKur,
                metadataField: h.PC.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(h.PC.REDDIT_TOTAL_KARMA),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: b.intl.string(b.t.oWM95O),
                fieldText: b.intl.string(b.t["0cKdkZ"]),
                metadataField: h.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(h.PC.REDDIT_MOD),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: b.intl.string(b.t["06rDHR"]),
                fieldText: b.intl.string(b.t["kCAN5+"]),
                metadataField: h.PC.REDDIT_GOLD,
                existingPendingConfiguration: t.get(h.PC.REDDIT_GOLD),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function T(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(f.ABu.PAYPAL);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.zdXqGx),
                fieldTextHook: b.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: b.intl.string(b.t.IhXLy8),
                fieldText: b.intl.string(b.t["0JyE8P"]),
                metadataField: h.PC.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.PAYPAL_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function P(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(f.ABu.EBAY);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.zdXqGx),
                fieldTextHook: b.t.QPrntb,
                metadataField: h.PC.CREATED_AT,
                existingPendingConfiguration: t.get(h.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.AuMxf3),
                fieldTextHook: b.t.IpQ4Ex,
                metadataField: h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.WzvoSk),
                fieldTextHook: b.t.RH3VAw,
                metadataField: h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.VuSFzs),
                fieldTextHook: b.t.sn3m7u,
                metadataField: h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
                operator: h.iO.LESS_THAN,
            }),
            (0, r.jsx)(O, {
                titleText: b.intl.string(b.t.TEEYwc),
                fieldText: b.intl.string(b.t["39wASE"]),
                metadataField: h.PC.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(h.PC.EBAY_TOP_RATED_SELLER),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function w(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = p.Z.get(f.ABu.TIKTOK);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(O, {
                titleText: b.intl.string(b.t.QHHwRU),
                fieldText: b.intl.string(b.t.E2iT8P),
                metadataField: h.PC.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.WUSIHh),
                fieldTextHook: b.t.Zwey2d,
                metadataField: h.PC.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWER_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t.w1IVQk),
                fieldTextHook: b.t.Ueeex8,
                metadataField: h.PC.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWING_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(y, {
                titleText: b.intl.string(b.t["1cFXJi"]),
                fieldTextHook: b.t.uq2UuL,
                metadataField: h.PC.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(h.PC.TIKTOK_LIKES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function R(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i, integration: l } = e;
    return null == l || null == l.role_connections_metadata
        ? null
        : l.role_connections_metadata.map((e) => {
              var a, s;
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
                              applicationId: null == (a = l.application) ? void 0 : a.id,
                          },
                          e.key,
                      );
                  case h.xn.BOOLEAN_EQUAL:
                  case h.xn.BOOLEAN_NOT_EQUAL:
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
                              applicationId: null == (s = l.application) ? void 0 : s.id,
                          },
                          e.key,
                      );
              }
          });
}
function Z(e) {
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
        null != e.configuration.connectionMetadataField
            ? u.set(e.configuration.connectionMetadataField, e)
            : null == e.configuration.value &&
              null == e.configuration.operator &&
              null == e.configuration.connectionMetadataField &&
              (t = e);
    });
    let m = {
            configMetadataMap: u,
            onConfigurationChange: i,
            locked: l,
        },
        h = null;
    switch (null == d ? void 0 : d.type) {
        case f.ABu.STEAM:
            h = (0, r.jsx)(E, j({}, m));
            break;
        case f.ABu.TWITTER:
            h = (0, r.jsx)(I, j({}, m));
            break;
        case f.ABu.REDDIT:
            h = (0, r.jsx)(S, j({}, m));
            break;
        case f.ABu.BLUESKY:
            h = (0, r.jsx)(N, j({}, m));
            break;
        case f.ABu.PAYPAL:
            h = (0, r.jsx)(T, j({}, m));
            break;
        case f.ABu.EBAY:
            h = (0, r.jsx)(P, j({}, m));
            break;
        case f.ABu.TIKTOK:
            h = (0, r.jsx)(w, j({}, m));
            break;
        default:
            h = (0, r.jsx)(R, _(j({}, m), { integration: c }));
    }
    return (0, r.jsxs)("div", {
        className: x.container,
        children: [
            (0, r.jsx)(v, {
                theme: s,
                platform: d,
                integration: c,
                onRemove: () => i(null, t.index),
                locked: l,
            }),
            h,
        ],
    });
}
