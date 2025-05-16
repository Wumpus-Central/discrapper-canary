n.d(t, { Z: () => _ }), n(388685);
var i,
    r = n(442837),
    s = n(570140),
    l = n(626135),
    a = n(477839),
    o = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t, n) {
    return {
        pointsByItem: { [a.yN.CLICKER_BUTTON]: 0 },
        pointsSpent: 0,
        itemContributions: {},
        purchasedItems: { [a.yN.CLICKER_BUTTON]: { upgrades: {} } },
        unlockedAchievements: null != n ? n : new Set(),
        lastAction: void 0,
        startTime: Date.now(),
        endTime: -1,
        volume: null != e ? e : 0.25,
        isMuted: null != t && t
    };
}
let g = u(),
    m = !1;
function p() {
    m = !1;
}
function h() {
    return Object.values(g.pointsByItem).reduce((e, t) => e + t, 0);
}
function f() {
    return h() - g.pointsSpent;
}
class b extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        null != e &&
            ((t = d({}, u(), e)),
            (n = n = { unlockedAchievements: new Set(e.unlockedAchievements) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            (g = t));
    }
    getState() {
        return g;
    }
    get currentPoints() {
        return f();
    }
    get lifetimePoints() {
        return h();
    }
    get pointsSpent() {
        return g.pointsSpent;
    }
    get pointsByItem() {
        return g.pointsByItem;
    }
    getContributionsForItem(e) {
        var t;
        return null != (t = g.itemContributions[e]) ? t : 0;
    }
    get numPurchases() {
        return Object.values(g.purchasedItems).reduce((e, t) => e + Object.values(t.upgrades).reduce((e, t) => e + t, 1), 0);
    }
    get purchasedItems() {
        return g.purchasedItems;
    }
    hasPurchasedItem(e) {
        return null != g.purchasedItems[e];
    }
    getPurchasedItemUpgrades(e) {
        return g.purchasedItems[e];
    }
    hasPurchasedUpgrade(e, t) {
        return this.getNumPurchasesForItemUpgrade(e, t) > 0;
    }
    getNumPurchasesForItemUpgrade(e, t) {
        var n;
        let i = g.purchasedItems[e];
        return null == i ? 0 : null != (n = i.upgrades[t]) ? n : 0;
    }
    getPurchasedUpgradesForItem(e) {
        var t, n;
        return null != (n = null == (t = g.purchasedItems[e]) ? void 0 : t.upgrades) ? n : {};
    }
    hasUnlockedAchievement(e) {
        return g.unlockedAchievements.has(e);
    }
    getItemMetadata(e) {
        var t;
        return null == (t = g.purchasedItems[e]) ? void 0 : t.metadata;
    }
    getLastAction() {
        return g.lastAction;
    }
    get startTime() {
        return g.startTime;
    }
    get endTime() {
        return g.endTime;
    }
    get isRedeemingPrize() {
        return m;
    }
    get volume() {
        return g.volume;
    }
    get isMuted() {
        return g.isMuted;
    }
}
c(b, 'displayName', 'ClickerGameStore'), c(b, 'persistKey', 'ClickerGameStore');
let _ = new b(s.Z, {
    CLICKER_GAME_ADD_POINTS: function (e) {
        let { numPoints: t, itemId: n } = e;
        if (-1 !== g.endTime) return;
        let i = f();
        if ((null == g.pointsByItem[n] && (g.pointsByItem[n] = 0), t < 0)) {
            let e = Math.max(-i, t);
            g.pointsByItem[n] += e;
        } else g.pointsByItem[n] += t;
        (g.pointsByItem = d({}, g.pointsByItem)), null == g.itemContributions[n] && (g.itemContributions[n] = 0), g.itemContributions[n]++, (g.itemContributions = d({}, g.itemContributions));
    },
    CLICKER_GAME_PURCHASE_ITEM: function (e) {
        let { id: t } = e,
            n = (0, a.w2)()[t];
        if (
            !(f() < n.cost) &&
            ((g.pointsSpent += n.cost),
            (g.purchasedItems[t] = { upgrades: {} }),
            (g.purchasedItems = d({}, g.purchasedItems)),
            (g.lastAction = {
                type: 'purchase-item',
                id: t
            }),
            t === a.yN.COMPLETE_GAME)
        ) {
            var i;
            (g.endTime = Date.now()),
                l.default.track(o.rMx.CLICKER_GAME_COMPLETED, {
                    duration: Math.floor((g.endTime - g.startTime) / 1000),
                    num_clicks: null != (i = g.itemContributions[a.yN.CLICKER_BUTTON]) ? i : 0,
                    total_score: Math.floor(h())
                });
        }
    },
    CLICKER_GAME_PURCHASE_ITEM_UPGRADE: function (e) {
        var t, n, i;
        let { id: r } = e,
            s = (0, a.r7)()[r],
            l = null == (t = g.purchasedItems[s.itemId]) ? void 0 : t.upgrades;
        if (null == l) return;
        let o = null != (i = l[r]) ? i : 0,
            c = h();
        if (
            null != s.predicate &&
            !(null == (n = s.predicate)
                ? void 0
                : n.call(s, {
                      numAlreadyPurchased: o,
                      lifetimePoints: c
                  }))
        )
            return;
        let u = s.cost({ numAlreadyPurchased: o });
        f() < u ||
            ((g.pointsSpent += u),
            (l[r] = null != l[r] ? l[r] + 1 : 1),
            (g.purchasedItems[s.itemId].upgrades = d({}, l)),
            (g.purchasedItems = d({}, g.purchasedItems)),
            (g.lastAction = {
                type: 'purchase-item-upgrade',
                id: r
            }));
    },
    CLICKER_GAME_UNLOCK_ACHIEVEMENT: function (e) {
        let { id: t } = e;
        g.unlockedAchievements.add(t),
            (g.lastAction = {
                type: 'unlock-achievement',
                id: t
            });
    },
    CLICKER_GAME_UPDATE_ITEM_METADATA: function (e) {
        let { itemId: t, metadata: n } = e,
            i = g.purchasedItems[t];
        null != i && (i.metadata = n);
    },
    CLICKER_GAME_RESET: function () {
        g = u(g.volume, g.isMuted, g.unlockedAchievements);
    },
    CLICKER_GAME_REDEEM_PRIZE_START: function () {
        m = !0;
    },
    CLICKER_GAME_REDEEM_PRIZE_SUCCESS: p,
    CLICKER_GAME_REDEEM_PRIZE_FAIL: p,
    CLICKER_GAME_SET_VOLUME: function (e) {
        let { volume: t } = e;
        g.volume = t;
    },
    CLICKER_GAME_SET_MUTED: function (e) {
        let { isMuted: t } = e;
        g.isMuted = t;
    },
    LOGOUT: function () {
        g = u();
    }
});
