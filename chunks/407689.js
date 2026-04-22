"use strict";
n.d(t, { Ao: () => u, id: () => c, mG: () => l }), n(321073);
var r,
    i,
    s = n(284009),
    a = n.n(s),
    o = n(73153),
    l = (((r = {}).FORUM_CHANNEL = "forum_channel"), r),
    u =
        (((i = {})[(i.IMMEDIATE = 0)] = "IMMEDIATE"),
        (i[(i.IMMEDIATE_WITH_COOLDOWN = 1)] = "IMMEDIATE_WITH_COOLDOWN"),
        (i[(i.IMMEDIATE_WITH_DELAY = 2)] = "IMMEDIATE_WITH_DELAY"),
        i);
class d {
    seenIntervals;
    constructor() {
        this.seenIntervals = [];
    }
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
        return e?.startTimeMillis != null && e?.endTimeMillis == null;
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
        return (
            a()(n.length < 2, "there should only be a single left over data"), (this.seenIntervals = n), Math.round(t)
        );
    }
}
class c {
    trackedFeedItems;
    _lastFlushTimeMillis;
    _pausedFeedItemIds;
    _paused;
    _windowId;
    _isReactNavigationFocused;
    _id;
    constructor({ id: e, windowId: t, isPaused: n }) {
        (this.trackedFeedItems = {}),
            (this._id = e),
            (this._windowId = t),
            (this._pausedFeedItemIds = new Set()),
            (this._paused = n ?? !1),
            (this._isReactNavigationFocused = !0),
            (this._lastFlushTimeMillis = Date.now());
    }
    onInitialize;
    onTerminate;
    onFeedItemSeen;
    onFeedItemUnseen;
    initialize = () => {
        o.h.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen),
            o.h.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen),
            o.h.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush),
            o.h.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            o.h.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
            this.onInitialize?.();
    };
    terminate = () => {
        o.h.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen),
            o.h.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen),
            o.h.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush),
            o.h.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            o.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
            this.onTerminate?.(),
            this.maybeFlushSeenItems(0);
    };
    handleFeedItemFlush = (e) => {
        let { id: t, force: n } = e;
        this._id === t && this.maybeFlushSeenItems(n);
    };
    maybeFlushSeenItems(e) {
        if (
            (null == e && Date.now() - this._lastFlushTimeMillis < 6e4) ||
            (1 === e && Date.now() - this._lastFlushTimeMillis < 3e3)
        )
            return Promise.resolve();
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
                        },
              );
    }
    handleFeedItemSeen = (e) => {
        let t = e.id,
            n = e.timestampMillis,
            r = e.feedItemId;
        if (t !== this._id) return;
        if (this._paused) return void this._pausedFeedItemIds.add(r);
        let i = this.getTrackedFeedItem(r).maybeMarkSeen(n);
        this.onFeedItemSeen?.(r, i);
    };
    handleFeedItemUnseen = (e) => {
        let t = e.id,
            n = e.timestampMillis,
            r = e.feedItemId;
        if (t !== this._id) return;
        this._paused && this._pausedFeedItemIds.delete(r);
        let i = this.getTrackedFeedItem(r).maybeMarkUnseen(n);
        this.onFeedItemUnseen?.(r, i), this.maybeFlushSeenItems();
    };
    getTrackedFeedItem = (e) => (
        null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d()), this.trackedFeedItems[e]
    );
    getVisibleFeedItemIds = () =>
        new Set(Object.keys(this.trackedFeedItems).filter((e) => this.trackedFeedItems[e]?.isVisible()));
    handleAppStateUpdate = (e) => {
        let { state: t } = e;
        "active" === t && this._isReactNavigationFocused && this.resume(),
            "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0));
    };
    clearPausedFeedItemIds = () => {
        (this._pausedFeedItemIds = new Set()), (this._paused = !1);
    };
    pause = () => {
        if (this._paused) return;
        let e = this.getVisibleFeedItemIds();
        e.forEach((e) => {
            this.handleFeedItemUnseen({
                id: this._id,
                feedItemId: e,
                timestampMillis: Date.now(),
                type: "ANALYTICS_FEED_ITEM_UNSEEN",
            });
        }),
            (this._paused = !0),
            (this._pausedFeedItemIds = e);
    };
    resume = () => {
        this._paused &&
            ((this._paused = !1),
            this._pausedFeedItemIds.forEach((e) => {
                this.handleFeedItemSeen({
                    id: this._id,
                    feedItemId: e,
                    timestampMillis: Date.now(),
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                });
            }),
            this.clearPausedFeedItemIds());
    };
    handleReactNavigationFocus = (e) => {
        (this._isReactNavigationFocused = e), this._isReactNavigationFocused ? this.resume() : this.pause();
    };
    handleWindowFocus = (e) => {
        this._windowId === e.windowId && (e.focused ? this.resume() : this.pause());
    };
}
