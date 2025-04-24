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
let m = u(),
    p = !1;
function g() {
    p = !1;
}
function h() {
    return Object.values(m.pointsByItem).reduce((e, t) => e + t, 0);
}
function f() {
    return h() - m.pointsSpent;
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
        let i = m.purchasedItems[e];
        return null == i ? 0 : null != (n = i.upgrades[t]) ? n : 0;
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
        return p;
    }
    get volume() {
        return m.volume;
    }
    get isMuted() {
        return m.isMuted;
    }
}
c(b, 'displayName', 'ClickerGameStore'), c(b, 'persistKey', 'ClickerGameStore');
let _ = new b(s.Z, {
    CLICKER_GAME_ADD_POINTS: function (e) {
        let { numPoints: t, itemId: n } = e;
        if (-1 !== m.endTime) return;
        let i = f();
        if ((null == m.pointsByItem[n] && (m.pointsByItem[n] = 0), t < 0)) {
            let e = Math.max(-i, t);
            m.pointsByItem[n] += e;
        } else m.pointsByItem[n] += t;
        (m.pointsByItem = d({}, m.pointsByItem)), null == m.itemContributions[n] && (m.itemContributions[n] = 0), m.itemContributions[n]++, (m.itemContributions = d({}, m.itemContributions));
    },
    CLICKER_GAME_PURCHASE_ITEM: function (e) {
        let { id: t } = e,
            n = (0, a.w2)()[t];
        if (
            !(f() < n.cost) &&
            ((m.pointsSpent += n.cost),
            (m.purchasedItems[t] = { upgrades: {} }),
            (m.purchasedItems = d({}, m.purchasedItems)),
            (m.lastAction = {
                type: 'purchase-item',
                id: t
            }),
            t === a.yN.COMPLETE_GAME)
        ) {
            var i;
            (m.endTime = Date.now()),
                l.default.track(o.rMx.CLICKER_GAME_COMPLETED, {
                    duration: Math.floor((m.endTime - m.startTime) / 1000),
                    num_clicks: null != (i = m.itemContributions[a.yN.CLICKER_BUTTON]) ? i : 0,
                    total_score: Math.floor(h())
                });
        }
    },
    CLICKER_GAME_PURCHASE_ITEM_UPGRADE: function (e) {
        var t, n, i;
        let { id: r } = e,
            s = (0, a.r7)()[r],
            l = null == (t = m.purchasedItems[s.itemId]) ? void 0 : t.upgrades;
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
            ((m.pointsSpent += u),
            (l[r] = null != l[r] ? l[r] + 1 : 1),
            (m.purchasedItems[s.itemId].upgrades = d({}, l)),
            (m.purchasedItems = d({}, m.purchasedItems)),
            (m.lastAction = {
                type: 'purchase-item-upgrade',
                id: r
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
            i = m.purchasedItems[t];
        null != i && (i.metadata = n);
    },
    CLICKER_GAME_RESET: function () {
        m = u(m.volume, m.isMuted, m.unlockedAchievements);
    },
    CLICKER_GAME_REDEEM_PRIZE_START: function () {
        p = !0;
    },
    CLICKER_GAME_REDEEM_PRIZE_SUCCESS: g,
    CLICKER_GAME_REDEEM_PRIZE_FAIL: g,
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
