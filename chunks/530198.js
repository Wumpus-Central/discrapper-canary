n.d(t, { Z: () => Z }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(780384),
    d = n(481060),
    u = n(99690),
    g = n(410030),
    m = n(726542),
    p = n(981631),
    f = n(856651),
    h = n(388032),
    b = n(890644);
function x(e) {
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
function j(e, t) {
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
        { theme: l, platform: s, integration: g, onRemove: m, locked: p } = e;
    if ((null == g ? void 0 : g.application) != null)
        o()(null != g.application.bot, "bot is null"),
            (i = (0, r.jsx)(u.Z, {
                size: d.EFr.SIZE_24,
                user: g.application.bot,
                className: b.verifiedIcon,
            }));
    else if (null != s) {
        let e = (0, c.ap)(l) ? s.icon.lightSVG : s.icon.darkSVG;
        i = (0, r.jsx)("img", {
            className: b.verifiedIcon,
            src: e,
            alt: h.intl.formatToPlainString(h.t.rtm15P, { name: s.name }),
        });
    }
    return (0, r.jsxs)("div", {
        className: a()(
            b.verifiedRow,
            (null == s ? void 0 : s.hasMetadata) === !0 ||
                ((null == g ? void 0 : g.role_connections_metadata) != null &&
                    (null == g ? void 0 : g.role_connections_metadata.length) > 0)
                ? b.verifiedRowWithMetadata
                : null,
        ),
        children: [
            i,
            (0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                className: b.verifiedText,
                children: h.intl.format(h.t.Nj0a3j, {
                    platformName:
                        null != (n = null == s ? void 0 : s.name)
                            ? n
                            : null == g || null == (t = g.application)
                              ? void 0
                              : t.name,
                }),
            }),
            (0, r.jsx)(d.aML, {
                "data-migration-pending": !0,
                text: h.intl.string(h.t.N86XcP),
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        j(x({}, e), {
                            children: (0, r.jsx)(d.hU, {
                                "aria-label": h.intl.string(h.t.N86XcP),
                                variant: "icon-only",
                                onClick: m,
                                disabled: p,
                                icon: d.Dio,
                                size: "sm",
                            }),
                        }),
                    ),
            }),
        ],
    });
}
function v(e) {
    let {
            titleText: t,
            fieldText: n,
            metadataField: l,
            existingPendingConfiguration: a,
            platform: s,
            applicationId: o,
            onConfigurationChange: c,
            locked: u,
        } = e,
        g = i.useId();
    return (0, r.jsxs)(
        "tr",
        {
            className: b.ruleContainer,
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    children: (0, r.jsx)(d.nn4, {
                        children: (0, r.jsx)("label", {
                            htmlFor: g,
                            children: t,
                        }),
                    }),
                }),
                (0, r.jsxs)("td", {
                    className: b.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/bold",
                            "aria-hidden": "true",
                            children: t,
                        }),
                        (0, r.jsx)("div", {
                            className: b.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: n,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("td", {}),
                (0, r.jsx)("td", {
                    children: (0, r.jsx)(d.rsf, {
                        id: g,
                        checked: (null == a ? void 0 : a.configuration.value) === "1",
                        onChange: (e) => {
                            var t, n;
                            let r = null;
                            e &&
                                (r = {
                                    connectionType: null != (t = null == s ? void 0 : s.type) ? t : f.Kt,
                                    applicationId: o,
                                    connectionMetadataField: l,
                                    operator: f.iO.EQUAL,
                                    value: "1",
                                }),
                                c(r, null != (n = null == a ? void 0 : a.index) ? n : -1);
                        },
                        disabled: u,
                    }),
                }),
            ],
        },
        l,
    );
}
function O(e) {
    var t, n;
    let {
            titleText: l,
            fieldText: a,
            fieldTextHook: s,
            metadataField: o,
            existingPendingConfiguration: c,
            platform: u,
            applicationId: g,
            onConfigurationChange: m,
            locked: p,
            operator: x,
        } = e,
        j = (null == c ? void 0 : c.configuration) != null,
        _ = null != (n = null == c ? void 0 : c.index) ? n : -1,
        [v, O] = (function (e, t) {
            let n = null != t ? t : f.iO.GREATER_THAN,
                r = Math.round(Number(null != e ? e : 0));
            return (
                n === f.iO.GREATER_THAN ? (r = Math.max(1, r + 1)) : n === f.iO.LESS_THAN && (r = Math.max(0, r - 1)),
                [r.toString(), n]
            );
        })(null == c || null == (t = c.configuration) ? void 0 : t.value, x),
        [C, y] = i.useState(v),
        N =
            null != s
                ? h.intl.format(s, {
                      count: C,
                      metadataHook: () => C,
                  })
                : (0, r.jsx)("span", {
                      className: b.fieldText,
                      children: a,
                  }),
        E = i.useId();
    return (0, r.jsxs)(
        "tr",
        {
            className: b.ruleContainer,
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    children: (0, r.jsx)(d.nn4, {
                        children: (0, r.jsx)("label", {
                            htmlFor: E,
                            children: l,
                        }),
                    }),
                }),
                (0, r.jsxs)("td", {
                    className: b.ruleContainerLabel,
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/bold",
                            "aria-hidden": "true",
                            children: l,
                        }),
                        (0, r.jsx)("div", {
                            className: b.numericalRuleSubItemContainer,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: N,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("td", {
                    children: (0, r.jsx)("div", {
                        className: b.numericalRuleInput,
                        children: (0, r.jsx)(d.oil, {
                            "aria-label": h.intl.string(h.t.FTmi9y),
                            type: "number",
                            value: C,
                            onChange: (e) => {
                                if ((y(e), null == c)) return;
                                let [t, n] = (function (e, t) {
                                    let n = null != t ? t : f.iO.GREATER_THAN,
                                        r = Math.round(Number(null != e ? e : 0));
                                    return (
                                        n === f.iO.GREATER_THAN
                                            ? (r = Math.max(0, r - 1))
                                            : n === f.iO.LESS_THAN && (r = Math.max(1, r + 1)),
                                        [r.toString(), n]
                                    );
                                })(e, x);
                                if ("" !== e) {
                                    var r;
                                    m(
                                        {
                                            connectionType: null != (r = null == u ? void 0 : u.type) ? r : f.Kt,
                                            applicationId: g,
                                            connectionMetadataField: o,
                                            operator: n,
                                            value: t,
                                        },
                                        _,
                                    );
                                }
                            },
                            disabled: p || !j,
                        }),
                    }),
                }),
                (0, r.jsx)("td", {
                    children: (0, r.jsx)(d.rsf, {
                        id: E,
                        checked: j,
                        onChange: (e) => {
                            var t, n;
                            let r = null;
                            e &&
                                (r = {
                                    connectionType: null != (t = null == u ? void 0 : u.type) ? t : f.Kt,
                                    applicationId: g,
                                    connectionMetadataField: o,
                                    operator: O,
                                    value: C,
                                }),
                                m(r, null != (n = null == c ? void 0 : c.index) ? n : -1);
                        },
                        disabled: p,
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
        className: b.rulesTable,
        children: [
            (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                    children: [
                        (0, r.jsx)("th", { scope: "col" }),
                        (0, r.jsx)("th", {
                            scope: "col",
                            children: (0, r.jsx)(d.nn4, { children: h.intl.string(h.t.TwDLVr) }),
                        }),
                        (0, r.jsx)("th", {
                            scope: "col",
                            children: (0, r.jsx)(d.nn4, { children: h.intl.string(h.t.qDWJwX) }),
                        }),
                        (0, r.jsx)("th", {
                            scope: "col",
                            children: (0, r.jsx)(d.nn4, { children: h.intl.string(h.t["5IF76e"]) }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)("tbody", { children: t }),
        ],
    });
}
function y(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = m.Z.get(p.ABu.BLUESKY);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.zdXqG9),
                fieldTextHook: h.t.QPrntS,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.IE0T3q),
                fieldTextHook: h.t.Zwey2Z,
                metadataField: f.PC.BLUESKY_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(f.PC.BLUESKY_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t["LLE+Up"]),
                fieldTextHook: h.t["UK2/m/"],
                metadataField: f.PC.BLUESKY_STATUSES_COUNT,
                existingPendingConfiguration: t.get(f.PC.BLUESKY_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function N(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = m.Z.get(p.ABu.STEAM);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.zdXqG9),
                fieldTextHook: h.t.QPrntS,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.gLs17E),
                fieldTextHook: h.t.BWDpbu,
                metadataField: f.PC.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(f.PC.STEAM_GAME_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.formatToPlainString(h.t.j1Gf2n, { gameName: h.intl.string(h.t.HKUEZo) }),
                fieldTextHook: h.t.OGUX78,
                metadataField: f.PC.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(f.PC.STEAM_ITEM_COUNT_DOTA2),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.formatToPlainString(h.t.j1Gf2n, { gameName: h.intl.string(h.t.C8p1Sh) }),
                fieldTextHook: h.t.Eq7h8E,
                metadataField: f.PC.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(f.PC.STEAM_ITEM_COUNT_TF2),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function E(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = m.Z.get(p.ABu.TWITTER);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.zdXqG9),
                fieldTextHook: h.t.QPrntS,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.wbvDM5),
                fieldTextHook: h.t.Zwey2Z,
                metadataField: f.PC.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(f.PC.TWITTER_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t["1B3DVi"]),
                fieldTextHook: h.t["lrmh/U"],
                metadataField: f.PC.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(f.PC.TWITTER_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.yz2CIA),
                fieldText: h.intl.string(h.t.E2iT8K),
                metadataField: f.PC.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.TWITTER_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function I(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = m.Z.get(p.ABu.REDDIT);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.zdXqG9),
                fieldTextHook: h.t.QPrntS,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t["3Xsrov"]),
                fieldTextHook: h.t.A4zKul,
                metadataField: f.PC.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(f.PC.REDDIT_TOTAL_KARMA),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.oWM95M),
                fieldText: h.intl.string(h.t["0cKdka"]),
                metadataField: f.PC.REDDIT_MOD,
                existingPendingConfiguration: t.get(f.PC.REDDIT_MOD),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t["06rDHU"]),
                fieldText: h.intl.string(h.t.kCAN58),
                metadataField: f.PC.REDDIT_GOLD,
                existingPendingConfiguration: t.get(f.PC.REDDIT_GOLD),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = m.Z.get(p.ABu.PAYPAL);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.zdXqG9),
                fieldTextHook: h.t.QPrntS,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.IhXLyx),
                fieldText: h.intl.string(h.t["0JyE8I"]),
                metadataField: f.PC.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.PAYPAL_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function T(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = m.Z.get(p.ABu.EBAY);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.zdXqG9),
                fieldTextHook: h.t.QPrntS,
                metadataField: f.PC.CREATED_AT,
                existingPendingConfiguration: t.get(f.PC.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.AuMxfz),
                fieldTextHook: h.t.IpQ4E8,
                metadataField: f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.WzvoSi),
                fieldTextHook: h.t.RH3VAx,
                metadataField: f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.VuSFzp),
                fieldTextHook: h.t.sn3m7v,
                metadataField: f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
                operator: f.iO.LESS_THAN,
            }),
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.TEEYwa),
                fieldText: h.intl.string(h.t["39wASN"]),
                metadataField: f.PC.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(f.PC.EBAY_TOP_RATED_SELLER),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
    });
}
function P(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: i } = e,
        l = m.Z.get(p.ABu.TIKTOK);
    return (0, r.jsxs)(C, {
        children: [
            (0, r.jsx)(v, {
                titleText: h.intl.string(h.t.QHHwRR),
                fieldText: h.intl.string(h.t.E2iT8K),
                metadataField: f.PC.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.WUSIHj),
                fieldTextHook: h.t.Zwey2Z,
                metadataField: f.PC.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_FOLLOWER_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t.w1IVQk),
                fieldTextHook: h.t["Ueeex/"],
                metadataField: f.PC.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_FOLLOWING_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
            (0, r.jsx)(O, {
                titleText: h.intl.string(h.t["1cFXJu"]),
                fieldTextHook: h.t.uq2UuO,
                metadataField: f.PC.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(f.PC.TIKTOK_LIKES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: i,
            }),
        ],
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
                              applicationId: null == (a = l.application) ? void 0 : a.id,
                          },
                          e.key,
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
        d = m.Z.get(n[0].configuration.connectionType);
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
    let f = {
            configMetadataMap: u,
            onConfigurationChange: i,
            locked: l,
        },
        h = null;
    switch (null == d ? void 0 : d.type) {
        case p.ABu.STEAM:
            h = (0, r.jsx)(N, x({}, f));
            break;
        case p.ABu.TWITTER:
            h = (0, r.jsx)(E, x({}, f));
            break;
        case p.ABu.REDDIT:
            h = (0, r.jsx)(I, x({}, f));
            break;
        case p.ABu.BLUESKY:
            h = (0, r.jsx)(y, x({}, f));
            break;
        case p.ABu.PAYPAL:
            h = (0, r.jsx)(S, x({}, f));
            break;
        case p.ABu.EBAY:
            h = (0, r.jsx)(T, x({}, f));
            break;
        case p.ABu.TIKTOK:
            h = (0, r.jsx)(P, x({}, f));
            break;
        default:
            h = (0, r.jsx)(w, j(x({}, f), { integration: c }));
    }
    return (0, r.jsxs)("div", {
        className: b.container,
        children: [
            (0, r.jsx)(_, {
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
