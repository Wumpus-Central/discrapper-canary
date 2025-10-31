n.d(t, { ZP: () => O }), n(388685), n(539854);
var r = n(772848),
    i = n(442837),
    l = n(570140),
    a = n(944596),
    s = n(518929);
function o(e, t, n) {
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
function c(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
let d = null,
    p = [],
    f = 0,
    m = new Map();
class h {
    get sessionId() {
        return this._sessionId;
    }
    get startTimestamp() {
        return this._startTimestamp;
    }
    get endTimestamp() {
        return this._endTimestamp;
    }
    get dwellCount() {
        return this._dwellCount;
    }
    get uniqueDwellCount() {
        return this._dwelledItemIdMap.size;
    }
    get impressionCount() {
        return this._impressionCount;
    }
    get uniqueImpressionCount() {
        return this._impressionItemIdMap.size;
    }
    get interactionCount() {
        return this._interactionCount;
    }
    get reloadCount() {
        return this._reloadCount;
    }
    get feedFetchCount() {
        return this._feedFetchCount;
    }
    get dwelledItemsChangedCount() {
        return this._dwelledItemsChangedCount;
    }
    get impressionItemTypes() {
        return this._impressionItemTypes;
    }
    getImpression(e) {
        return this._activeItems.find((t) => t.itemId === e);
    }
    startItemsDwell(e) {
        if (
            (this._resetTimeout(),
            (p = e),
            e.length === this._activeItems.length && e.every((e, t) => this._activeItems[t].itemId === e.itemId))
        )
            return this._activeItems;
        this._dwelledItemsChangedCount++;
        let t = [],
            n = new Set(this._activeItems.map((e) => e.itemId));
        for (let r of e) {
            let e = this.getImpression(r.itemId);
            null != e ? (t.push(e), n.delete(r.itemId)) : t.push(this._createImpression(r));
        }
        return n.forEach((e) => this._endImpression(e)), (this._activeItems = t), this._activeItems;
    }
    trackItemsLongImpression(e) {
        for (let l of e) {
            var t, n, r, i;
            let e = this.getImpression(l.itemId),
                s = null != e ? e : this._constructImpressionFromInput(l);
            (s.sessionImpressionIndex = ++this._impressionCount),
                this._impressionItemIdMap.set(
                    l.itemId,
                    (null != (t = this._impressionItemIdMap.get(l.itemId)) ? t : 0) + 1,
                ),
                a.m.trackFeedItemDwell1s({
                    icymiSessionId: this._sessionId,
                    impressionId: s.impressionId,
                    itemId: s.itemId,
                    itemType: s.itemType,
                    dwellStartTimeMs: s.impressionStartTimestamp,
                    triggerType: s.triggerType,
                    itemOccurenceCountInSession: null != (n = this._dwelledItemIdMap.get(s.itemId)) ? n : 0,
                    itemFeedIndex: s.itemFeedIndex,
                    itemScore: s.itemScore,
                    isInitiallyVisible: s.isInitiallyVisible,
                    itemChannelType: s.itemChannelType,
                    itemCardHeight: null != (i = null != (r = m.get(s.itemId)) ? r : s.itemCardHeight) ? i : null,
                    isDwelling: null != e,
                    interactionActionTypes: s.interactionActionTypes,
                    interactionCount: s.interactionCount,
                    uxVariation: s.uxVariation,
                    sessionImpressionIndex: s.sessionImpressionIndex,
                });
        }
    }
    trackItemInteraction(e, t, n) {
        let r = this.getImpression(e);
        a.m.trackItemInteraction({
            id: e,
            type: t,
            actionType: n,
            impressionId: null == r ? void 0 : r.impressionId,
            uxVariation: null == r ? void 0 : r.uxVariation,
            sessionInteractionIndex: ++this._interactionCount,
        }),
            null != r && (r.interactionActionTypes.push(n), r.interactionCount++);
    }
    incrementReloadCount() {
        this._resetTimeout(), this._reloadCount++;
    }
    incrementFeedFetchCount() {
        this._feedFetchCount++;
    }
    endAllImpressions() {
        [...this._activeItems].forEach((e) => this._endImpression(e.itemId));
    }
    endSession() {
        return (
            this.endAllImpressions(),
            (this._endTimestamp = Date.now()),
            a.m.trackFeedSessionCompleted({
                icymiSessionId: this._sessionId,
                sessionDurationMs: this._endTimestamp - this._startTimestamp,
                sessionStartTimeMs: this._startTimestamp,
                sessionEndTimeMs: this._endTimestamp,
                impressionCount: this._impressionCount,
                uniqueImpressionCount: this._impressionItemIdMap.size,
                impressionItemTypes: Array.from(this._impressionItemTypes),
                feedReloadCount: this._reloadCount,
                feedDwelledItemsChangedCount: this._dwelledItemsChangedCount,
                feedFetchCount: this._feedFetchCount,
                latestDwellStartTimeMs: this._latestDwellStartTimeMs,
                previousIcyMiSessionCount: f,
                uxVariation: s.cM.getConfig({ location: "ICYMISessionStore.endSession" }).uxVariation,
                interactionCount: this._interactionCount,
                dwelledCount: this._dwellCount,
                uniqueDwelledCount: this._dwelledItemIdMap.size,
            }),
            clearTimeout(this._timeout),
            f++,
            (d = null),
            m.clear(),
            this
        );
    }
    _resetTimeout() {
        clearTimeout(this._timeout), (this._timeout = setTimeout(() => this.endSession(), 300000));
    }
    _createImpression(e) {
        var t;
        let n = this._constructImpressionFromInput(e);
        return (
            this._dwellCount++,
            this._dwelledItemIdMap.set(e.itemId, (null != (t = this._dwelledItemIdMap.get(e.itemId)) ? t : 0) + 1),
            this._impressionItemTypes.add(e.itemType),
            (this._latestDwellStartTimeMs = n.impressionStartTimestamp),
            n
        );
    }
    _constructImpressionFromInput(e) {
        var t;
        let n = (0, r.Z)();
        return {
            itemId: e.itemId,
            itemType: e.itemType,
            impressionId: n,
            impressionStartTimestamp: Date.now(),
            impressionComplete: !1,
            triggerType: e.triggerType,
            itemFeedIndex: e.itemFeedIndex,
            itemScore: e.itemScore,
            isInitiallyVisible: e.isInitiallyVisible,
            itemChannelType: e.itemChannelType,
            itemCardHeight: null != (t = m.get(e.itemId)) ? t : null,
            uxVariation: s.cM.getConfig({ location: "ICYMISessionStore._constructImpressionFromInput" }).uxVariation,
            interactionActionTypes: [],
            interactionCount: 0,
            sessionImpressionIndex: null,
        };
    }
    _endImpression(e) {
        let t = this._activeItems.findIndex((t) => t.itemId === e),
            n = this._activeItems[t];
        if (null != n) {
            var r, i, l;
            return (
                (n.impressionEndTimestamp = Date.now()),
                (n.impressionComplete = !0),
                a.m.trackFeedItemDwelled({
                    icymiSessionId: this._sessionId,
                    impressionId: n.impressionId,
                    dwellTimeMs: n.impressionEndTimestamp - n.impressionStartTimestamp,
                    itemId: n.itemId,
                    itemType: n.itemType,
                    dwellStartTimeMs: n.impressionStartTimestamp,
                    dwellEndTimeMs: n.impressionEndTimestamp,
                    triggerType: n.triggerType,
                    itemOccurenceCountInSession: null != (r = this._dwelledItemIdMap.get(n.itemId)) ? r : 0,
                    itemFeedIndex: n.itemFeedIndex,
                    itemScore: n.itemScore,
                    isInitiallyVisible: n.isInitiallyVisible,
                    itemChannelType: n.itemChannelType,
                    itemCardHeight: null != (l = null != (i = m.get(n.itemId)) ? i : n.itemCardHeight) ? l : null,
                    uxVariation: n.uxVariation,
                    interactionActionTypes: n.interactionActionTypes,
                    interactionCount: n.interactionCount,
                    sessionImpressionIndex: n.sessionImpressionIndex,
                }),
                this._activeItems.splice(t, 1),
                n
            );
        }
        return null;
    }
    constructor(e = [], t = "list") {
        o(this, "_sessionId", void 0),
            o(this, "_startTimestamp", void 0),
            o(this, "_endTimestamp", void 0),
            o(this, "_activeItems", void 0),
            o(this, "_dwellCount", void 0),
            o(this, "_impressionCount", void 0),
            o(this, "_dwelledItemIdMap", void 0),
            o(this, "_impressionItemIdMap", void 0),
            o(this, "_impressionItemTypes", void 0),
            o(this, "_reloadCount", void 0),
            o(this, "_feedFetchCount", void 0),
            o(this, "_dwelledItemsChangedCount", void 0),
            o(this, "_interactionCount", void 0),
            o(this, "_latestDwellStartTimeMs", void 0),
            o(this, "_timeout", void 0),
            (this._sessionId = (0, r.Z)()),
            (this._startTimestamp = Date.now()),
            (this._endTimestamp = null),
            (this._activeItems = []),
            (this._dwellCount = 0),
            (this._impressionCount = 0),
            (this._dwelledItemIdMap = new Map()),
            (this._impressionItemIdMap = new Map()),
            (this._impressionItemTypes = new Set()),
            (this._reloadCount = 0),
            (this._feedFetchCount = 0),
            (this._dwelledItemsChangedCount = 0),
            (this._interactionCount = 0),
            (this._latestDwellStartTimeMs = 0),
            (this._timeout = setTimeout(() => this.endSession(), 300000)),
            a.m.trackFeedSessionStarted({
                icymiSessionId: this._sessionId,
                sessionStartTimeMs: this._startTimestamp,
                previousIcymiSessionCount: f,
                uxVariation: s.cM.getConfig({ location: "ICYMISessionStore.constructor" }).uxVariation,
            }),
            e.length > 0 &&
                this.startItemsDwell(
                    e.map((e) =>
                        u(c({}, e), {
                            triggerType: t,
                            isInitiallyVisible: !0,
                        }),
                    ),
                );
    }
}
class g extends i.ZP.Store {
    get currentSession() {
        return d;
    }
    get endedSessionCount() {
        return f;
    }
}
function _() {
    return null != d && (d.endSession(), !0);
}
function b() {
    return null != d && (d.endAllImpressions(), !0);
}
function E(e) {
    let t = _();
    return p.length > 0 && ((d = new h(p, "focus")), (t = !0)), t;
}
let O = new g(l.Z, {
    ICYMI_TAB_OPENED: E,
    ICYMI_TAB_CLOSED: function (e) {
        return _();
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        if (!e.focused) return b();
        if (null != d) {
            if (p.length > 0) {
                let e = p.map((e) =>
                    u(c({}, e), {
                        triggerType: "focus",
                        isInitiallyVisible: !0,
                    }),
                );
                return d.startItemsDwell(e), !0;
            }
            return !1;
        }
        return E();
    },
    ICYMI_ITEMS_DWELL_START: function (e) {
        return null == d ? (d = new h(e.items, "list")) : d.startItemsDwell(e.items), !0;
    },
    ICYMI_ITEMS_LONG_IMPRESSION: function (e) {
        return null == d && (d = new h(e.items, "list")), d.trackItemsLongImpression(e.items), !0;
    },
    RELOAD_ICYMI: function (e) {
        return null != d && (d.incrementReloadCount(), !0);
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        return null != d && (d.incrementFeedFetchCount(), b(), !0);
    },
    APP_STATE_UPDATE: function (e) {
        return "active" !== e.state && null != d && _();
    },
    CHANNEL_SELECT: function (e) {
        return null != d && !e.isInitialSetup && !e.preserveDrawerState && b();
    },
    ICYMI_SET_CARD_HEIGHT: function (e) {
        return m.set(e.itemId, e.height), !0;
    },
    ICYMI_ITEM_INTERACTED: function (e) {
        return null == d && (d = new h(p, "focus")), d.trackItemInteraction(e.itemId, e.itemType, e.actionType), !0;
    },
});
