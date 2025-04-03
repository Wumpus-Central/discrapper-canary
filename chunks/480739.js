n.d(t, {
    AT: () => c,
    cs: () => u,
    zQ: () => f
}),
    n(653041),
    n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(570140);
function a(e, t, n) {
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
let s = 60000,
    l = 3000;
var c = (function (e) {
        return (e.FORUM_CHANNEL = 'forum_channel'), e;
    })({}),
    u = (function (e) {
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
        for (let r of this.seenIntervals) {
            if (null != r.endTimeMillis) {
                t += r.endTimeMillis - r.startTimeMillis;
                continue;
            }
            if (e) {
                let e = Date.now();
                (t += e - r.startTimeMillis), n.push({ startTimeMillis: e });
                continue;
            }
            n.push(r);
        }
        return i()(n.length < 2, 'there should only be a single left over data'), (this.seenIntervals = n), Math.round(t);
    }
    constructor() {
        a(this, 'seenIntervals', void 0), (this.seenIntervals = []);
    }
}
class f {
    maybeFlushSeenItems(e) {
        if ((null == e && Date.now() - this._lastFlushTimeMillis < s) || (1 === e && Date.now() - this._lastFlushTimeMillis < l)) return Promise.resolve();
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
        a(this, 'trackedFeedItems', void 0),
            a(this, '_lastFlushTimeMillis', void 0),
            a(this, '_pausedFeedItemIds', void 0),
            a(this, '_paused', void 0),
            a(this, '_windowId', void 0),
            a(this, '_isReactNavigationFocused', void 0),
            a(this, '_id', void 0),
            a(this, 'onInitialize', void 0),
            a(this, 'onTerminate', void 0),
            a(this, 'onFeedItemSeen', void 0),
            a(this, 'onFeedItemUnseen', void 0),
            a(this, 'initialize', () => {
                var e, t;
                o.Z.subscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), o.Z.subscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), o.Z.subscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), o.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), o.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocus), null == (e = (t = this).onInitialize) || e.call(t);
            }),
            a(this, 'terminate', () => {
                var e, t;
                o.Z.unsubscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), o.Z.unsubscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), o.Z.unsubscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), o.Z.unsubscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), o.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocus), null == (e = (t = this).onTerminate) || e.call(t), this.maybeFlushSeenItems(0);
            }),
            a(this, 'handleFeedItemFlush', (e) => {
                let { id: t, force: n } = e;
                this._id === t && this.maybeFlushSeenItems(n);
            }),
            a(this, 'handleFeedItemSeen', (e) => {
                var t, n;
                let r = e.id,
                    i = e.timestampMillis,
                    o = e.feedItemId;
                if (r !== this._id) return;
                if (this._paused) return void this._pausedFeedItemIds.add(o);
                let a = this.getTrackedFeedItem(o).maybeMarkSeen(i);
                null == (t = (n = this).onFeedItemSeen) || t.call(n, o, a);
            }),
            a(this, 'handleFeedItemUnseen', (e) => {
                var t, n;
                let r = e.id,
                    i = e.timestampMillis,
                    o = e.feedItemId;
                if (r !== this._id) return;
                this._paused && this._pausedFeedItemIds.delete(o);
                let a = this.getTrackedFeedItem(o).maybeMarkUnseen(i);
                null == (t = (n = this).onFeedItemUnseen) || t.call(n, o, a), this.maybeFlushSeenItems();
            }),
            a(this, 'getTrackedFeedItem', (e) => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d()), this.trackedFeedItems[e])),
            a(
                this,
                'getVisibleFeedItemIds',
                () =>
                    new Set(
                        Object.keys(this.trackedFeedItems).filter((e) => {
                            var t;
                            return null == (t = this.trackedFeedItems[e]) ? void 0 : t.isVisible();
                        })
                    )
            ),
            a(this, 'handleAppStateUpdate', (e) => {
                let { state: t } = e;
                'active' === t && this._isReactNavigationFocused && this.resume(), 'background' === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0));
            }),
            a(this, 'clearPausedFeedItemIds', () => {
                (this._pausedFeedItemIds = new Set()), (this._paused = !1);
            }),
            a(this, 'pause', () => {
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
            a(this, 'resume', () => {
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
            a(this, 'handleReactNavigationFocus', (e) => {
                (this._isReactNavigationFocused = e), this._isReactNavigationFocused ? this.resume() : this.pause();
            }),
            a(this, 'handleWindowFocus', (e) => {
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
