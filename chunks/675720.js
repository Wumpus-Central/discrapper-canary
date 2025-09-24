n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(887003),
    o = n(481060),
    s = n(624138),
    l = n(786089),
    c = n(388032),
    u = n(818923),
    d = n(52461);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = (e) => {
        var t, n, r;
        let i = null == e || null == (n = e.config) || null == (t = n.rewardsConfig) ? void 0 : t.rewards,
            a = Array.isArray(i) && i.length > 0,
            o = null == i ? void 0 : i[0];
        return a &&
            null != o &&
            ("name" in o || ("messages" in o && !(0, s.Ew)(null == (r = o.messages) ? void 0 : r.name)))
            ? o
            : null;
    },
    g = (e) => {
        var t, n;
        let r = null == e || null == (n = e.config) || null == (t = n.rewardsConfig) ? void 0 : t.rewards,
            i = (null != r ? r : []).map((e) => {
                var t, n, r, i;
                let o =
                        "name" in e
                            ? String(e.name)
                            : String(null != (r = null == (t = e.messages) ? void 0 : t.name) ? r : ""),
                    s =
                        "nameWithArticle" in e
                            ? String(e.nameWithArticle)
                            : String(null != (i = null == (n = e.messages) ? void 0 : n.nameWithArticle) ? i : o);
                return e.type === a.w.VIRTUAL_CURRENCY && "orbQuantity" in e
                    ? {
                          skuId: e.skuId,
                          name: o,
                          type: e.type,
                          nameWithArticle: s,
                          orbQuantity: e.orbQuantity,
                      }
                    : {
                          skuId: e.skuId,
                          name: o,
                          type: e.type,
                          nameWithArticle: s,
                          asset: "asset" in e ? e.asset : "",
                          assetVideo: "assetVideo" in e ? e.assetVideo : null,
                          collectibleProduct: { items: [e] },
                      };
            }),
            o = {
                id: e.config.id,
                startsAt: e.config.startsAt,
                expiresAt: e.config.expiresAt,
                features: e.config.features,
                colors: e.config.colors,
                assets: e.config.assets,
                messages: {
                    questName: e.config.messages.questName,
                    gameTitle: e.config.messages.gameTitle,
                    gamePublisher: "gamePublisher" in e.config.messages ? e.config.messages.gamePublisher : "",
                },
                rewards: i,
                cosponsorMetadata: e.config.cosponsorMetadata,
            };
        return {
            id: e.id,
            config: o,
            userStatus:
                null != e.userStatus
                    ? h(_({}, e.userStatus), {
                          claimedAt: new Date().toISOString(),
                          claimedTier: 0,
                      })
                    : null,
        };
    },
    E = () =>
        (0, r.jsx)(o.X6q, {
            className: d.trophyCaseHeading,
            variant: "heading-md/semibold",
            children: c.intl.string(c.t["4D+sT0"]),
        }),
    b = (e) => {
        let { quest: t } = e,
            n = i.useMemo(() => m(t), [t]),
            a = i.useMemo(() => g(t), [t]);
        return null == t || null == t.config
            ? (0, r.jsxs)("div", {
                  className: d.trophyCaseCard,
                  children: [
                      (0, r.jsx)(E, {}),
                      (0, r.jsx)("div", {
                          className: d.trophyCaseContainer,
                          children: (0, r.jsx)("div", {
                              className: d.trophyCaseWrapper,
                              children: (0, r.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: c.intl.string(c.t.U3ek5u),
                              }),
                          }),
                      }),
                  ],
              })
            : null == n
              ? (0, r.jsxs)("div", {
                    className: d.trophyCaseCard,
                    children: [
                        (0, r.jsx)(E, {}),
                        (0, r.jsx)("div", {
                            className: d.trophyCaseContainer,
                            children: (0, r.jsx)("div", {
                                className: d.trophyCaseWrapper,
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: c.intl.string(c.t["Gj+fXF"]),
                                }),
                            }),
                        }),
                    ],
                })
              : (0, r.jsx)("div", {
                    className: u.previewBackground,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(E, {}),
                            (0, r.jsx)("div", {
                                className: d.trophyCaseContainer,
                                children: (0, r.jsx)("div", {
                                    className: d.trophyCaseWrapper,
                                    children: (0, r.jsx)("div", {
                                        className: d.trophyCaseWrapperInner,
                                        children: (0, r.jsx)(l.Z, { quest: a }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
    };
