n.d(t, {
    AT: () => u,
    cs: () => c,
    zQ: () => f
}),
    n(653041),
    n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(570140);
function s(e, t, n) {
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
let o = 60000,
    l = 3000;
var u = (function (e) {
        return (e.FORUM_CHANNEL = 'forum_channel'), e;
    })({}),
    c = (function (e) {
        return (e[(e.IMMEDIATE = 0)] = 'IMMEDIATE'), (e[(e.IMMEDIATE_WITH_COOLDOWN = 1)] = 'IMMEDIATE_WITH_COOLDOWN'), (e[(e.IMMEDIATE_WITH_DELAY = 2)] = 'IMMEDIATE_WITH_DELAY'), e;
    })({});
class d {
    maybeMarkSeen(e) {
        let t = this.seenIntervals[this.seenIntervals.length - 1];
        return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({ startTimeMillis: e }), !0);
    }
    maybeMarkUnseen(e) {
        let t = this.seenIntervals[this.seenIntervals.length - 1];
        return null != t && null == t.endTimeMillis && ((t.endTimeMillis = e), !0);
    }
    isVisible() {
        let e = this.seenIntervals[this.seenIntervals.length - 1];
        return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null;
    }
    computeSeenTimeDestructive(e) {
        let t = 0,
            n = [];
        for (let i of this.seenIntervals) {
            if (null != i.endTimeMillis) {
                t += i.endTimeMillis - i.startTimeMillis;
                continue;
            }
            if (e) {
                let e = Date.now();
                (t += e - i.startTimeMillis), n.push({ startTimeMillis: e });
                continue;
            }
            n.push(i);
        }
        return r()(n.length < 2, 'there should only be a single left over data'), (this.seenIntervals = n), Math.round(t);
    }
    constructor() {
        s(this, 'seenIntervals', void 0), (this.seenIntervals = []);
    }
}
class f {
    maybeFlushSeenItems(e) {
        if ((null == e && Date.now() - this._lastFlushTimeMillis < o) || (1 === e && Date.now() - this._lastFlushTimeMillis < l)) return Promise.resolve();
        let t = this.createFlushSeenItemsFunction(e);
        return null == t
            ? Promise.resolve()
            : new Promise(
                  ((this._lastFlushTimeMillis = Date.now()), 0 === e || 1 === e)
                      ? async (e) => {
                            await t(), e();
                        }
                      : (e) => {
                            setTimeout(async () => {
                                await t(), e();
                            }, 100);
                        }
              );
    }
    constructor({ id: e, windowId: t, isPaused: n }) {
        s(this, 'trackedFeedItems', void 0),
            s(this, '_lastFlushTimeMillis', void 0),
            s(this, '_pausedFeedItemIds', void 0),
            s(this, '_paused', void 0),
            s(this, '_windowId', void 0),
            s(this, '_isReactNavigationFocused', void 0),
            s(this, '_id', void 0),
            s(this, 'onInitialize', void 0),
            s(this, 'onTerminate', void 0),
            s(this, 'onFeedItemSeen', void 0),
            s(this, 'onFeedItemUnseen', void 0),
            s(this, 'initialize', () => {
                var e, t;
                a.Z.subscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), a.Z.subscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), a.Z.subscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), a.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), a.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocus), null === (e = (t = this).onInitialize) || void 0 === e || e.call(t);
            }),
            s(this, 'terminate', () => {
                var e, t;
                a.Z.unsubscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), a.Z.unsubscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), a.Z.unsubscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), a.Z.unsubscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), a.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocus), null === (e = (t = this).onTerminate) || void 0 === e || e.call(t), this.maybeFlushSeenItems(0);
            }),
            s(this, 'handleFeedItemFlush', (e) => {
                let { id: t, force: n } = e;
                this._id === t && this.maybeFlushSeenItems(n);
            }),
            s(this, 'handleFeedItemSeen', (e) => {
                var t, n;
                let i = e.id,
                    r = e.timestampMillis,
                    a = e.feedItemId;
                if (i !== this._id) return;
                if (this._paused) {
                    this._pausedFeedItemIds.add(a);
                    return;
                }
                let s = this.getTrackedFeedItem(a).maybeMarkSeen(r);
                null === (t = (n = this).onFeedItemSeen) || void 0 === t || t.call(n, a, s);
            }),
            s(this, 'handleFeedItemUnseen', (e) => {
                var t, n;
                let i = e.id,
                    r = e.timestampMillis,
                    a = e.feedItemId;
                if (i !== this._id) return;
                this._paused && this._pausedFeedItemIds.delete(a);
                let s = this.getTrackedFeedItem(a).maybeMarkUnseen(r);
                null === (t = (n = this).onFeedItemUnseen) || void 0 === t || t.call(n, a, s), this.maybeFlushSeenItems();
            }),
            s(this, 'getTrackedFeedItem', (e) => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d()), this.trackedFeedItems[e])),
            s(
                this,
                'getVisibleFeedItemIds',
                () =>
                    new Set(
                        Object.keys(this.trackedFeedItems).filter((e) => {
                            var t;
                            return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible();
                        })
                    )
            ),
            s(this, 'handleAppStateUpdate', (e) => {
                let { state: t } = e;
                'active' === t && this._isReactNavigationFocused && this.resume(), 'background' === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0));
            }),
            s(this, 'clearPausedFeedItemIds', () => {
                (this._pausedFeedItemIds = new Set()), (this._paused = !1);
            }),
            s(this, 'pause', () => {
                if (this._paused) return;
                let e = this.getVisibleFeedItemIds();
                e.forEach((e) => {
                    this.handleFeedItemUnseen({
                        id: this._id,
                        feedItemId: e,
                        timestampMillis: Date.now(),
                        type: 'ANALYTICS_FEED_ITEM_UNSEEN'
                    });
                }),
                    (this._paused = !0),
                    (this._pausedFeedItemIds = e);
            }),
            s(this, 'resume', () => {
                this._paused &&
                    ((this._paused = !1),
                    this._pausedFeedItemIds.forEach((e) => {
                        this.handleFeedItemSeen({
                            id: this._id,
                            feedItemId: e,
                            timestampMillis: Date.now(),
                            type: 'ANALYTICS_FEED_ITEM_SEEN'
                        });
                    }),
                    this.clearPausedFeedItemIds());
            }),
            s(this, 'handleReactNavigationFocus', (e) => {
                (this._isReactNavigationFocused = e), this._isReactNavigationFocused ? this.resume() : this.pause();
            }),
            s(this, 'handleWindowFocus', (e) => {
                this._windowId === e.windowId && (e.focused ? this.resume() : this.pause());
            }),
            (this.trackedFeedItems = {}),
            (this._id = e),
            (this._windowId = t),
            (this._pausedFeedItemIds = new Set()),
            (this._paused = null != n && n),
            (this._isReactNavigationFocused = !0),
            (this._lastFlushTimeMillis = Date.now());
    }
}
