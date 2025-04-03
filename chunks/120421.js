n.d(t, { Z: () => N }), n(47120);
var r,
    i = n(442837),
    s = n(570140),
    a = n(626135),
    l = n(477839),
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
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t, n) {
    return {
        pointsByItem: { [l.yN.CLICKER_BUTTON]: 0 },
        pointsSpent: 0,
        itemContributions: {},
        purchasedItems: { [l.yN.CLICKER_BUTTON]: { upgrades: {} } },
        unlockedAchievements: null != n ? n : new Set(),
        lastAction: void 0,
        startTime: Date.now(),
        endTime: -1,
        volume: null != e ? e : 0.25,
        isMuted: null != t && t
    };
}
let m = u(),
    g = !1;
function p() {
    g = !1;
}
function h() {
    return Object.values(m.pointsByItem).reduce((e, t) => e + t, 0);
}
function f() {
    return h() - m.pointsSpent;
}
class b extends (r = i.ZP.PersistedStore) {
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
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            (m = t));
    }
    getState() {
        return m;
    }
    get currentPoints() {
        return f();
    }
    get lifetimePoints() {
        return h();
    }
    get pointsSpent() {
        return m.pointsSpent;
    }
    get pointsByItem() {
        return m.pointsByItem;
    }
    getContributionsForItem(e) {
        var t;
        return null != (t = m.itemContributions[e]) ? t : 0;
    }
    get numPurchases() {
        return Object.values(m.purchasedItems).reduce((e, t) => e + Object.values(t.upgrades).reduce((e, t) => e + t, 1), 0);
    }
    get purchasedItems() {
        return m.purchasedItems;
    }
    hasPurchasedItem(e) {
        return null != m.purchasedItems[e];
    }
    getPurchasedItemUpgrades(e) {
        return m.purchasedItems[e];
    }
    hasPurchasedUpgrade(e, t) {
        return this.getNumPurchasesForItemUpgrade(e, t) > 0;
    }
    getNumPurchasesForItemUpgrade(e, t) {
        var n;
        let r = m.purchasedItems[e];
        return null == r ? 0 : null != (n = r.upgrades[t]) ? n : 0;
    }
    getPurchasedUpgradesForItem(e) {
        var t, n;
        return null != (n = null == (t = m.purchasedItems[e]) ? void 0 : t.upgrades) ? n : {};
    }
    hasUnlockedAchievement(e) {
        return m.unlockedAchievements.has(e);
    }
    getItemMetadata(e) {
        var t;
        return null == (t = m.purchasedItems[e]) ? void 0 : t.metadata;
    }
    getLastAction() {
        return m.lastAction;
    }
    get startTime() {
        return m.startTime;
    }
    get endTime() {
        return m.endTime;
    }
    get isRedeemingPrize() {
        return g;
    }
    get volume() {
        return m.volume;
    }
    get isMuted() {
        return m.isMuted;
    }
}
c(b, 'displayName', 'ClickerGameStore'), c(b, 'persistKey', 'ClickerGameStore');
let N = new b(s.Z, {
    CLICKER_GAME_ADD_POINTS: function (e) {
        let { numPoints: t, itemId: n } = e;
        if (-1 !== m.endTime) return;
        let r = f();
        if ((null == m.pointsByItem[n] && (m.pointsByItem[n] = 0), t < 0)) {
            let e = Math.max(-r, t);
            m.pointsByItem[n] += e;
        } else m.pointsByItem[n] += t;
        (m.pointsByItem = d({}, m.pointsByItem)), null == m.itemContributions[n] && (m.itemContributions[n] = 0), m.itemContributions[n]++, (m.itemContributions = d({}, m.itemContributions));
    },
    CLICKER_GAME_PURCHASE_ITEM: function (e) {
        let { id: t } = e,
            n = (0, l.w2)()[t];
        if (
            !(f() < n.cost) &&
            ((m.pointsSpent += n.cost),
            (m.purchasedItems[t] = { upgrades: {} }),
            (m.purchasedItems = d({}, m.purchasedItems)),
            (m.lastAction = {
                type: 'purchase-item',
                id: t
            }),
            t === l.yN.COMPLETE_GAME)
        ) {
            var r;
            (m.endTime = Date.now()),
                a.default.track(o.rMx.CLICKER_GAME_COMPLETED, {
                    duration: Math.floor((m.endTime - m.startTime) / 1000),
                    num_clicks: null != (r = m.itemContributions[l.yN.CLICKER_BUTTON]) ? r : 0,
                    total_score: Math.floor(h())
                });
        }
    },
    CLICKER_GAME_PURCHASE_ITEM_UPGRADE: function (e) {
        var t, n, r;
        let { id: i } = e,
            s = (0, l.r7)()[i],
            a = null == (t = m.purchasedItems[s.itemId]) ? void 0 : t.upgrades;
        if (null == a) return;
        let o = null != (r = a[i]) ? r : 0,
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
            ((m.pointsSpent += u),
            (a[i] = null != a[i] ? a[i] + 1 : 1),
            (m.purchasedItems[s.itemId].upgrades = d({}, a)),
            (m.purchasedItems = d({}, m.purchasedItems)),
            (m.lastAction = {
                type: 'purchase-item-upgrade',
                id: i
            }));
    },
    CLICKER_GAME_UNLOCK_ACHIEVEMENT: function (e) {
        let { id: t } = e;
        m.unlockedAchievements.add(t),
            (m.lastAction = {
                type: 'unlock-achievement',
                id: t
            });
    },
    CLICKER_GAME_UPDATE_ITEM_METADATA: function (e) {
        let { itemId: t, metadata: n } = e,
            r = m.purchasedItems[t];
        null != r && (r.metadata = n);
    },
    CLICKER_GAME_RESET: function () {
        m = u(m.volume, m.isMuted, m.unlockedAchievements);
    },
    CLICKER_GAME_REDEEM_PRIZE_START: function () {
        g = !0;
    },
    CLICKER_GAME_REDEEM_PRIZE_SUCCESS: p,
    CLICKER_GAME_REDEEM_PRIZE_FAIL: p,
    CLICKER_GAME_SET_VOLUME: function (e) {
        let { volume: t } = e;
        m.volume = t;
    },
    CLICKER_GAME_SET_MUTED: function (e) {
        let { isMuted: t } = e;
        m.isMuted = t;
    },
    LOGOUT: function () {
        m = u();
    }
});
