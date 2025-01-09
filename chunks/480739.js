r.d(n, {
    AT: function () {
        return i;
    },
    cs: function () {
        return a;
    },
    zQ: function () {
        return p;
    }
});
var i,
    a,
    s = r(653041);
var o = r(47120);
var l = r(512722),
    u = r.n(l),
    c = r(570140);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = 60000,
    _ = 3000;
!(function (e) {
    e.FORUM_CHANNEL = 'forum_channel';
})(i || (i = {})),
    !(function (e) {
        (e[(e.IMMEDIATE = 0)] = 'IMMEDIATE'), (e[(e.IMMEDIATE_WITH_COOLDOWN = 1)] = 'IMMEDIATE_WITH_COOLDOWN'), (e[(e.IMMEDIATE_WITH_DELAY = 2)] = 'IMMEDIATE_WITH_DELAY');
    })(a || (a = {}));
class h {
    maybeMarkSeen(e) {
        let n = this.seenIntervals[this.seenIntervals.length - 1];
        return (null == n || null != n.endTimeMillis) && (this.seenIntervals.push({ startTimeMillis: e }), !0);
    }
    maybeMarkUnseen(e) {
        let n = this.seenIntervals[this.seenIntervals.length - 1];
        return null != n && null == n.endTimeMillis && ((n.endTimeMillis = e), !0);
    }
    isVisible() {
        let e = this.seenIntervals[this.seenIntervals.length - 1];
        return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null;
    }
    computeSeenTimeDestructive(e) {
        let n = 0,
            r = [];
        for (let i of this.seenIntervals) {
            if (null != i.endTimeMillis) {
                n += i.endTimeMillis - i.startTimeMillis;
                continue;
            }
            if (e) {
                let e = Date.now();
                (n += e - i.startTimeMillis), r.push({ startTimeMillis: e });
                continue;
            }
            r.push(i);
        }
        return u()(r.length < 2, 'there should only be a single left over data'), (this.seenIntervals = r), Math.round(n);
    }
    constructor() {
        d(this, 'seenIntervals', void 0), (this.seenIntervals = []);
    }
}
class p {
    maybeFlushSeenItems(e) {
        if ((null == e && Date.now() - this._lastFlushTimeMillis < f) || (1 === e && Date.now() - this._lastFlushTimeMillis < _)) return Promise.resolve();
        let n = this.createFlushSeenItemsFunction(e);
        return null == n
            ? Promise.resolve()
            : ((this._lastFlushTimeMillis = Date.now()), 0 === e || 1 === e)
              ? new Promise(async (e) => {
                    await n(), e();
                })
              : new Promise((e) => {
                    setTimeout(async () => {
                        await n(), e();
                    }, 100);
                });
    }
    constructor({ id: e, windowId: n, isPaused: r }) {
        d(this, 'trackedFeedItems', void 0),
            d(this, '_lastFlushTimeMillis', void 0),
            d(this, '_pausedFeedItemIds', void 0),
            d(this, '_paused', void 0),
            d(this, '_windowId', void 0),
            d(this, '_isReactNavigationFocused', void 0),
            d(this, '_id', void 0),
            d(this, 'onInitialize', void 0),
            d(this, 'onTerminate', void 0),
            d(this, 'onFeedItemSeen', void 0),
            d(this, 'onFeedItemUnseen', void 0),
            d(this, 'initialize', () => {
                var e, n;
                c.Z.subscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), c.Z.subscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), c.Z.subscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), c.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), c.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocus), null === (e = (n = this).onInitialize) || void 0 === e || e.call(n);
            }),
            d(this, 'terminate', () => {
                var e, n;
                c.Z.unsubscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), c.Z.unsubscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), c.Z.unsubscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), c.Z.unsubscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), c.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocus), null === (e = (n = this).onTerminate) || void 0 === e || e.call(n), this.maybeFlushSeenItems(0);
            }),
            d(this, 'handleFeedItemFlush', (e) => {
                let { id: n, force: r } = e;
                if (this._id === n) this.maybeFlushSeenItems(r);
            }),
            d(this, 'handleFeedItemSeen', (e) => {
                var n, r;
                let i = e.id,
                    a = e.timestampMillis,
                    s = e.feedItemId;
                if (i !== this._id) return;
                if (this._paused) {
                    this._pausedFeedItemIds.add(s);
                    return;
                }
                let o = this.getTrackedFeedItem(s).maybeMarkSeen(a);
                null === (n = (r = this).onFeedItemSeen) || void 0 === n || n.call(r, s, o);
            }),
            d(this, 'handleFeedItemUnseen', (e) => {
                var n, r;
                let i = e.id,
                    a = e.timestampMillis,
                    s = e.feedItemId;
                if (i !== this._id) return;
                this._paused && this._pausedFeedItemIds.delete(s);
                let o = this.getTrackedFeedItem(s).maybeMarkUnseen(a);
                null === (n = (r = this).onFeedItemUnseen) || void 0 === n || n.call(r, s, o), this.maybeFlushSeenItems();
            }),
            d(this, 'getTrackedFeedItem', (e) => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new h()), this.trackedFeedItems[e])),
            d(
                this,
                'getVisibleFeedItemIds',
                () =>
                    new Set(
                        Object.keys(this.trackedFeedItems).filter((e) => {
                            var n;
                            return null === (n = this.trackedFeedItems[e]) || void 0 === n ? void 0 : n.isVisible();
                        })
                    )
            ),
            d(this, 'handleAppStateUpdate', (e) => {
                let { state: n } = e;
                'active' === n && this._isReactNavigationFocused && this.resume(), 'background' === n && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0));
            }),
            d(this, 'clearPausedFeedItemIds', () => {
                (this._pausedFeedItemIds = new Set()), (this._paused = !1);
            }),
            d(this, 'pause', () => {
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
            d(this, 'resume', () => {
                if (!!this._paused)
                    (this._paused = !1),
                        this._pausedFeedItemIds.forEach((e) => {
                            this.handleFeedItemSeen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: 'ANALYTICS_FEED_ITEM_SEEN'
                            });
                        }),
                        this.clearPausedFeedItemIds();
            }),
            d(this, 'handleReactNavigationFocus', (e) => {
                (this._isReactNavigationFocused = e), this._isReactNavigationFocused ? this.resume() : this.pause();
            }),
            d(this, 'handleWindowFocus', (e) => {
                if (this._windowId === e.windowId) e.focused ? this.resume() : this.pause();
            }),
            (this.trackedFeedItems = {}),
            (this._id = e),
            (this._windowId = n),
            (this._pausedFeedItemIds = new Set()),
            (this._paused = null != r && r),
            (this._isReactNavigationFocused = !0),
            (this._lastFlushTimeMillis = Date.now());
    }
}
