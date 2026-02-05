"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(435371),
    c = n(582754),
    u = n(397927),
    m = n(730134),
    g = n(736653),
    x = n(573648),
    h = n(652215),
    _ = n(783419),
    A = n(985018),
    p = n(493466);
function f(e) {
    let t,
        { theme: n, platform: s, integration: l, onRemove: a, locked: g } = e;
    if (l?.application != null)
        o()(null != l.application.bot, "bot is null"),
            (t = (0, i.jsx)(m.A, { size: u._3J.SIZE_24, user: l.application.bot, className: p.w$ }));
    else if (null != s) {
        let e = (0, c.qB)(n) ? s.icon.lightSVG : s.icon.darkSVG;
        t = (0, i.jsx)("img", {
            className: p.w$,
            src: e,
            alt: A.intl.formatToPlainString(A.t.rtm15P, { name: s.name }),
        });
    }
    return (0, i.jsxs)("div", {
        className: r()(
            p.R5,
            s?.hasMetadata === !0 || (l?.role_connections_metadata != null && l?.role_connections_metadata.length > 0)
                ? p.mD
                : null,
        ),
        children: [
            t,
            (0, i.jsx)(u.Text, {
                variant: "text-md/medium",
                className: p.sK,
                children: A.intl.format(A.t.Nj0a3j, { platformName: s?.name ?? l?.application?.name }),
            }),
            (0, i.jsx)(d.m_, {
                text: A.intl.string(A.t.N86XcP),
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.K0, {
                        "aria-label": A.intl.string(A.t.N86XcP),
                        variant: "icon-only",
                        onClick: a,
                        disabled: g,
                        icon: u.PGe,
                        size: "sm",
                    }),
                }),
            }),
        ],
    });
}
function j(e) {
    let {
            titleText: t,
            fieldText: n,
            metadataField: l,
            existingPendingConfiguration: r,
            platform: a,
            applicationId: o,
            onConfigurationChange: d,
            locked: c,
        } = e,
        m = s.useId();
    return (0, i.jsxs)(
        "tr",
        {
            className: p.cm,
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    children: (0, i.jsx)(u.AC4, { children: (0, i.jsx)("label", { htmlFor: m, children: t }) }),
                }),
                (0, i.jsxs)("td", {
                    className: p.C4,
                    children: [
                        (0, i.jsx)(u.Text, { variant: "text-md/bold", "aria-hidden": "true", children: t }),
                        (0, i.jsx)("div", {
                            className: p.bM,
                            children: (0, i.jsx)(u.Text, { variant: "text-md/normal", children: n }),
                        }),
                    ],
                }),
                (0, i.jsx)("td", {}),
                (0, i.jsx)("td", {
                    children: (0, i.jsx)(u.dOG, {
                        id: m,
                        checked: r?.configuration.value === "1",
                        onChange: (e) => {
                            let t = null;
                            e &&
                                (t = {
                                    connectionType: a?.type ?? _.zR,
                                    applicationId: o,
                                    connectionMetadataField: l,
                                    operator: _.so.EQUAL,
                                    value: "1",
                                }),
                                d(t, r?.index ?? -1);
                        },
                        disabled: c,
                    }),
                }),
            ],
        },
        l,
    );
}
function N(e) {
    var t;
    let n,
        l,
        {
            titleText: r,
            fieldText: a,
            fieldTextHook: o,
            metadataField: d,
            existingPendingConfiguration: c,
            platform: m,
            applicationId: g,
            onConfigurationChange: x,
            locked: h,
            operator: f,
        } = e,
        j = c?.configuration != null,
        N = c?.index ?? -1,
        [E, b] =
            ((t = c?.configuration?.value),
            (n = f ?? _.so.GREATER_THAN),
            (l = Math.round(Number(t ?? 0))),
            n === _.so.GREATER_THAN ? (l = Math.max(1, l + 1)) : n === _.so.LESS_THAN && (l = Math.max(0, l - 1)),
            [l.toString(), n]),
        [T, C] = s.useState(E),
        I =
            null != o
                ? A.intl.format(o, { count: T, metadataHook: () => T })
                : (0, i.jsx)("span", { className: p.gF, children: a }),
        v = s.useId();
    return (0, i.jsxs)(
        "tr",
        {
            className: p.cm,
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    children: (0, i.jsx)(u.AC4, { children: (0, i.jsx)("label", { htmlFor: v, children: r }) }),
                }),
                (0, i.jsxs)("td", {
                    className: p.C4,
                    children: [
                        (0, i.jsx)(u.Text, { variant: "text-md/bold", "aria-hidden": "true", children: r }),
                        (0, i.jsx)("div", {
                            className: p.bM,
                            children: (0, i.jsx)(u.Text, { variant: "text-md/normal", children: I }),
                        }),
                    ],
                }),
                (0, i.jsx)("td", {
                    children: (0, i.jsx)("div", {
                        className: p.x6,
                        children: (0, i.jsx)(u.ksK, {
                            "aria-label": A.intl.string(A.t.FTmi9y),
                            type: "number",
                            value: T,
                            onChange: (e) => {
                                let t, n;
                                if ((C(e), null == c)) return;
                                let [i, s] =
                                    ((t = f ?? _.so.GREATER_THAN),
                                    (n = Math.round(Number(e ?? 0))),
                                    t === _.so.GREATER_THAN
                                        ? (n = Math.max(0, n - 1))
                                        : t === _.so.LESS_THAN && (n = Math.max(1, n + 1)),
                                    [n.toString(), t]);
                                "" !== e &&
                                    x(
                                        {
                                            connectionType: m?.type ?? _.zR,
                                            applicationId: g,
                                            connectionMetadataField: d,
                                            operator: s,
                                            value: i,
                                        },
                                        N,
                                    );
                            },
                            disabled: h || !j,
                        }),
                    }),
                }),
                (0, i.jsx)("td", {
                    children: (0, i.jsx)(u.dOG, {
                        id: v,
                        checked: j,
                        onChange: (e) => {
                            let t = null;
                            e &&
                                (t = {
                                    connectionType: m?.type ?? _.zR,
                                    applicationId: g,
                                    connectionMetadataField: d,
                                    operator: b,
                                    value: T,
                                }),
                                x(t, c?.index ?? -1);
                        },
                        disabled: h,
                    }),
                }),
            ],
        },
        d,
    );
}
function E(e) {
    let { children: t } = e;
    return (0, i.jsxs)("table", {
        className: p.mi,
        children: [
            (0, i.jsx)("thead", {
                children: (0, i.jsxs)("tr", {
                    children: [
                        (0, i.jsx)("th", { scope: "col" }),
                        (0, i.jsx)("th", {
                            scope: "col",
                            children: (0, i.jsx)(u.AC4, { children: A.intl.string(A.t.TwDLVr) }),
                        }),
                        (0, i.jsx)("th", {
                            scope: "col",
                            children: (0, i.jsx)(u.AC4, { children: A.intl.string(A.t.qDWJwX) }),
                        }),
                        (0, i.jsx)("th", {
                            scope: "col",
                            children: (0, i.jsx)(u.AC4, { children: A.intl.string(A.t["5IF76e"]) }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("tbody", { children: t }),
        ],
    });
}
function b(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: s } = e,
        l = x.A.get(h.fg2.BLUESKY);
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.zdXqG9),
                fieldTextHook: A.t.QPrntS,
                metadataField: _.pK.CREATED_AT,
                existingPendingConfiguration: t.get(_.pK.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.IE0T3q),
                fieldTextHook: A.t.Zwey2Z,
                metadataField: _.pK.BLUESKY_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(_.pK.BLUESKY_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t["LLE+Up"]),
                fieldTextHook: A.t["UK2/m/"],
                metadataField: _.pK.BLUESKY_STATUSES_COUNT,
                existingPendingConfiguration: t.get(_.pK.BLUESKY_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
        ],
    });
}
function T(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: s } = e,
        l = x.A.get(h.fg2.STEAM);
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.zdXqG9),
                fieldTextHook: A.t.QPrntS,
                metadataField: _.pK.CREATED_AT,
                existingPendingConfiguration: t.get(_.pK.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.gLs17E),
                fieldTextHook: A.t.BWDpbu,
                metadataField: _.pK.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(_.pK.STEAM_GAME_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.formatToPlainString(A.t.j1Gf2n, { gameName: A.intl.string(A.t.HKUEZo) }),
                fieldTextHook: A.t.OGUX78,
                metadataField: _.pK.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(_.pK.STEAM_ITEM_COUNT_DOTA2),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.formatToPlainString(A.t.j1Gf2n, { gameName: A.intl.string(A.t.C8p1Sh) }),
                fieldTextHook: A.t.Eq7h8E,
                metadataField: _.pK.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(_.pK.STEAM_ITEM_COUNT_TF2),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
        ],
    });
}
function C(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: s } = e,
        l = x.A.get(h.fg2.TWITTER);
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.zdXqG9),
                fieldTextHook: A.t.QPrntS,
                metadataField: _.pK.CREATED_AT,
                existingPendingConfiguration: t.get(_.pK.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.wbvDM5),
                fieldTextHook: A.t.Zwey2Z,
                metadataField: _.pK.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(_.pK.TWITTER_FOLLOWERS_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t["1B3DVi"]),
                fieldTextHook: A.t["lrmh/U"],
                metadataField: _.pK.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(_.pK.TWITTER_STATUSES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(j, {
                titleText: A.intl.string(A.t.yz2CIA),
                fieldText: A.intl.string(A.t.E2iT8K),
                metadataField: _.pK.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(_.pK.TWITTER_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
        ],
    });
}
function I(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: s } = e,
        l = x.A.get(h.fg2.REDDIT);
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.zdXqG9),
                fieldTextHook: A.t.QPrntS,
                metadataField: _.pK.CREATED_AT,
                existingPendingConfiguration: t.get(_.pK.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t["3Xsrov"]),
                fieldTextHook: A.t.A4zKul,
                metadataField: _.pK.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(_.pK.REDDIT_TOTAL_KARMA),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(j, {
                titleText: A.intl.string(A.t.oWM95M),
                fieldText: A.intl.string(A.t["0cKdka"]),
                metadataField: _.pK.REDDIT_MOD,
                existingPendingConfiguration: t.get(_.pK.REDDIT_MOD),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(j, {
                titleText: A.intl.string(A.t["06rDHU"]),
                fieldText: A.intl.string(A.t.kCAN58),
                metadataField: _.pK.REDDIT_GOLD,
                existingPendingConfiguration: t.get(_.pK.REDDIT_GOLD),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
        ],
    });
}
function v(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: s } = e,
        l = x.A.get(h.fg2.PAYPAL);
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.zdXqG9),
                fieldTextHook: A.t.QPrntS,
                metadataField: _.pK.CREATED_AT,
                existingPendingConfiguration: t.get(_.pK.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(j, {
                titleText: A.intl.string(A.t.IhXLyx),
                fieldText: A.intl.string(A.t["0JyE8I"]),
                metadataField: _.pK.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(_.pK.PAYPAL_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
        ],
    });
}
function S(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: s } = e,
        l = x.A.get(h.fg2.EBAY);
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.zdXqG9),
                fieldTextHook: A.t.QPrntS,
                metadataField: _.pK.CREATED_AT,
                existingPendingConfiguration: t.get(_.pK.CREATED_AT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.AuMxfz),
                fieldTextHook: A.t.IpQ4E8,
                metadataField: _.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(_.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.WzvoSi),
                fieldTextHook: A.t.RH3VAx,
                metadataField: _.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(_.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.VuSFzp),
                fieldTextHook: A.t.sn3m7v,
                metadataField: _.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(_.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
                operator: _.so.LESS_THAN,
            }),
            (0, i.jsx)(j, {
                titleText: A.intl.string(A.t.TEEYwa),
                fieldText: A.intl.string(A.t["39wASN"]),
                metadataField: _.pK.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(_.pK.EBAY_TOP_RATED_SELLER),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
        ],
    });
}
function y(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: s } = e,
        l = x.A.get(h.fg2.TIKTOK);
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(j, {
                titleText: A.intl.string(A.t.QHHwRR),
                fieldText: A.intl.string(A.t.E2iT8K),
                metadataField: _.pK.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(_.pK.TIKTOK_VERIFIED),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.WUSIHj),
                fieldTextHook: A.t.Zwey2Z,
                metadataField: _.pK.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(_.pK.TIKTOK_FOLLOWER_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t.w1IVQk),
                fieldTextHook: A.t["Ueeex/"],
                metadataField: _.pK.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(_.pK.TIKTOK_FOLLOWING_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
            (0, i.jsx)(N, {
                titleText: A.intl.string(A.t["1cFXJu"]),
                fieldTextHook: A.t.uq2UuO,
                metadataField: _.pK.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(_.pK.TIKTOK_LIKES_COUNT),
                platform: l,
                onConfigurationChange: n,
                locked: s,
            }),
        ],
    });
}
function R(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: s, integration: l } = e;
    return null == l || null == l.role_connections_metadata
        ? null
        : l.role_connections_metadata.map((e) => {
              let r;
              switch (e.type) {
                  case _.g1.INTEGER_LESS_THAN_EQUAL:
                  case _.g1.DATETIME_LESS_THAN_EQUAL:
                      r = _.so.LESS_THAN;
                      break;
                  case _.g1.INTEGER_GREATER_THAN_EQUAL:
                  case _.g1.DATETIME_GREATER_THAN_EQUAL:
                      r = _.so.GREATER_THAN;
                      break;
                  case _.g1.INTEGER_EQUAL:
                  case _.g1.BOOLEAN_EQUAL:
                      r = _.so.EQUAL;
                      break;
                  case _.g1.INTEGER_NOT_EQUAL:
                  case _.g1.BOOLEAN_NOT_EQUAL:
                      r = _.so.NOT_EQUAL;
                      break;
                  default:
                      return null;
              }
              switch (e.type) {
                  case _.g1.INTEGER_LESS_THAN_EQUAL:
                  case _.g1.INTEGER_GREATER_THAN_EQUAL:
                  case _.g1.INTEGER_EQUAL:
                  case _.g1.INTEGER_NOT_EQUAL:
                  case _.g1.DATETIME_LESS_THAN_EQUAL:
                  case _.g1.DATETIME_GREATER_THAN_EQUAL:
                      return (0, i.jsx)(
                          N,
                          {
                              titleText: e.name,
                              fieldText: e.description,
                              metadataField: e.key,
                              existingPendingConfiguration: t.get(e.key),
                              platform: null,
                              onConfigurationChange: n,
                              locked: s,
                              operator: r,
                              applicationId: l.application?.id,
                          },
                          e.key,
                      );
                  case _.g1.BOOLEAN_EQUAL:
                  case _.g1.BOOLEAN_NOT_EQUAL:
                      return (0, i.jsx)(
                          j,
                          {
                              titleText: e.name,
                              fieldText: e.description,
                              metadataField: e.key,
                              existingPendingConfiguration: t.get(e.key),
                              platform: null,
                              onConfigurationChange: n,
                              locked: s,
                              operator: r,
                              applicationId: l.application?.id,
                          },
                          e.key,
                      );
              }
          });
}
function O(e) {
    let t,
        { configurationItems: n, onConfigurationChange: s, locked: l, integrations: r } = e,
        a = (0, g.Ay)();
    if (n.length < 1) return null;
    let o = n[0].configuration.applicationId,
        d = null != o ? r?.find((e) => e.application?.id === o) : void 0;
    if (null != o && null == d) return null;
    let c = null;
    try {
        c = x.A.get(n[0].configuration.connectionType);
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
    let m = { configMetadataMap: u, onConfigurationChange: s, locked: l },
        _ = null;
    switch (c?.type) {
        case h.fg2.STEAM:
            _ = (0, i.jsx)(T, { ...m });
            break;
        case h.fg2.TWITTER:
            _ = (0, i.jsx)(C, { ...m });
            break;
        case h.fg2.REDDIT:
            _ = (0, i.jsx)(I, { ...m });
            break;
        case h.fg2.BLUESKY:
            _ = (0, i.jsx)(b, { ...m });
            break;
        case h.fg2.PAYPAL:
            _ = (0, i.jsx)(v, { ...m });
            break;
        case h.fg2.EBAY:
            _ = (0, i.jsx)(S, { ...m });
            break;
        case h.fg2.TIKTOK:
            _ = (0, i.jsx)(y, { ...m });
            break;
        default:
            _ = (0, i.jsx)(R, { ...m, integration: d });
    }
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsx)(f, { theme: a, platform: c, integration: d, onRemove: () => s(null, t.index), locked: l }),
            _,
        ],
    });
}
