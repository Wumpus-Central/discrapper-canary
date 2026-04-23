"use strict";
n.d(t, { A: () => p }), n(775443), n(321073), n(667532);
var i = n(735438),
    r = n.n(i),
    s = n(56562),
    a = n(640631),
    o = n(626584),
    l = n(320095),
    d = n(491001),
    _ = n(935208);
function u(e, t, n) {
    let i = (function (e, t, n) {
        let i = 0,
            r = e.length;
        for (; i < r; ) {
            let s = (i + r) >>> 1;
            0 > n(e[s], t) ? (i = s + 1) : (r = s);
        }
        return i;
    })(e, t, n);
    e.splice(i, 0, t);
}
let c = (0, n(945810).mj)({
    name: "2026-04-ensure-received-messages-added-in-order",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E = n(652215);
let h = new o.A("ChannelMessages");
function m(e, t) {
    let n,
        i = e.get(t.id);
    return null == i ||
        ((n = null != i.editedTimestamp ? +i.editedTimestamp : 0),
        (null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0) > n ||
            i.embeds.length < (t.embeds?.length ?? 0) ||
            i.content !== t.content) ||
        e.cached
        ? (0, l.rh)(t)
        : i;
}
class f {
    _messages;
    _map;
    _wasAtEdge;
    _isCacheBefore;
    constructor(e) {
        (this._messages = []), (this._map = {}), (this._wasAtEdge = !1), (this._isCacheBefore = e);
    }
    clone() {
        let e = new f(this._isCacheBefore);
        return (e._map = { ...this._map }), (e._messages = [...this._messages]), (e._wasAtEdge = this._wasAtEdge), e;
    }
    get wasAtEdge() {
        return this._wasAtEdge;
    }
    set wasAtEdge(e) {
        this._wasAtEdge = e;
    }
    get length() {
        return this._messages.length;
    }
    clear() {
        (this._map = {}), (this._messages = []), (this._wasAtEdge = !1);
    }
    remove(e) {
        (this._messages = r().filter(this._messages, (t) => {
            let { id: n } = t;
            return n !== e;
        })),
            delete this._map[e];
    }
    removeMany(e) {
        r().each(e, (e) => {
            delete this._map[e];
        }),
            (this._messages = this._messages.filter((t) => -1 === e.indexOf(t.id)));
    }
    replace(e, t) {
        let n = this._map[e];
        null != n && (delete this._map[e], (this._map[t.id] = t), (this._messages[this._messages.indexOf(n)] = t));
    }
    update(e, t) {
        let n = this._map[e];
        if (null == n) return;
        let i = t(n);
        (this._map[n.id] = i), (this._messages[this._messages.indexOf(n)] = i);
    }
    has(e) {
        return null != this._map[e];
    }
    get(e) {
        return this._map[e];
    }
    forEach(e, t) {
        this._messages.forEach(e, t);
    }
    cache(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0 === this.length && (this._wasAtEdge = t), this._messages.length + e.length > E.iMx)) {
            if (((this._wasAtEdge = !1), e.length > E.iMx)) {
                this._isCacheBefore
                    ? (this._messages = e.slice(e.length - E.iMx))
                    : (this._messages = e.slice(0, E.iMx)),
                    (this._map = {}),
                    this._messages.forEach((e) => (this._map[e.id] = e));
                return;
            }
            let t = E.iMx - e.length;
            this._isCacheBefore
                ? (this._messages = this._messages.slice(Math.max(this._messages.length - t, 0)))
                : (this._messages = this._messages.slice(0, t));
        }
        (this._messages = this._isCacheBefore ? [...this._messages, ...e] : [...e, ...this._messages]),
            (this._map = {}),
            this._messages.forEach((e) => (this._map[e.id] = e));
    }
    extractAll() {
        let e = this._messages;
        return (this._messages = []), (this._map = {}), e;
    }
    extract(e) {
        let t;
        if (this._isCacheBefore) {
            let n = Math.max(this.length - e, 0),
                i = this.length;
            (t = this._messages.slice(n, i)), this._messages.splice(n);
        } else {
            let n = Math.min(e, this.length);
            (t = this._messages.slice(0, n)), this._messages.splice(0, e);
        }
        return t.forEach((e) => delete this._map[e.id]), t;
    }
}
class g {
    channelId;
    ready = !1;
    cached = !1;
    jumpType = s.US.ANIMATED;
    jumpTargetId = null;
    jumpTargetOffset = 0;
    jumpSequenceId = 1;
    jumped = !1;
    jumpedToPresent = !1;
    jumpFlash = !0;
    jumpReturnTargetId = null;
    focusTargetId = null;
    focusSequenceId = 1;
    initialScrollSequenceId = 0;
    suppressRowAnimationSequenceId = 0;
    hasMoreBefore = !0;
    hasMoreAfter = !1;
    loadingMore = !1;
    revealedMessageId = null;
    hasFetched = !1;
    error = !1;
    static _channelMessages = {};
    _array = [];
    _before = new f(!0);
    _after = new f(!1);
    _map = {};
    static forEach(e) {
        r().forEach(g._channelMessages, e);
    }
    static get(e) {
        return g._channelMessages[e];
    }
    static hasPresent(e) {
        let t = g.get(e);
        return null != t && t.hasPresent();
    }
    static getOrCreate(e) {
        let t = g._channelMessages[e];
        return null == t && ((t = new g(e)), (g._channelMessages[e] = t)), t;
    }
    static clear(e) {
        delete g._channelMessages[e];
    }
    static clearCache(e) {
        let t = g._channelMessages[e];
        null != t && (t._before.clear(), t._after.clear(), this.commit(t));
    }
    static commit(e) {
        g._channelMessages[e.channelId] = e;
    }
    constructor(e) {
        this.channelId = e;
    }
    mutate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = new g(this.channelId);
        return (
            (n._array = t ? [...this._array] : this._array),
            (n._map = t ? { ...this._map } : this._map),
            (n._after = t ? this._after.clone() : this._after),
            (n._before = t ? this._before.clone() : this._before),
            e instanceof Function
                ? ((n.ready = this.ready),
                  (n.jumpType = this.jumpType),
                  (n.jumpTargetId = this.jumpTargetId),
                  (n.jumpTargetOffset = this.jumpTargetOffset),
                  (n.jumpSequenceId = this.jumpSequenceId),
                  (n.jumped = this.jumped),
                  (n.jumpedToPresent = this.jumpedToPresent),
                  (n.jumpFlash = this.jumpFlash),
                  (n.jumpReturnTargetId = this.jumpReturnTargetId),
                  (n.focusTargetId = this.focusTargetId),
                  (n.focusSequenceId = this.focusSequenceId),
                  (n.hasMoreBefore = this.hasMoreBefore),
                  (n.hasMoreAfter = this.hasMoreAfter),
                  (n.loadingMore = this.loadingMore),
                  (n.revealedMessageId = this.revealedMessageId),
                  (n.cached = this.cached),
                  (n.hasFetched = this.hasFetched),
                  (n.error = this.error),
                  (n.initialScrollSequenceId = this.initialScrollSequenceId),
                  (n.suppressRowAnimationSequenceId = this.suppressRowAnimationSequenceId),
                  e(n))
                : "object" == typeof e &&
                  ((n.ready = void 0 !== e.ready ? !0 === e.ready : this.ready),
                  (n.jumpType = void 0 !== e.jumpType ? e.jumpType : this.jumpType),
                  (n.jumpTargetId = void 0 !== e.jumpTargetId ? e.jumpTargetId : this.jumpTargetId),
                  (n.jumpTargetOffset = void 0 !== e.jumpTargetOffset ? e.jumpTargetOffset : this.jumpTargetOffset),
                  (n.jumpSequenceId = void 0 !== e.jumpSequenceId ? e.jumpSequenceId : this.jumpSequenceId),
                  (n.jumped = void 0 !== e.jumped ? !0 === e.jumped : this.jumped),
                  (n.jumpedToPresent = void 0 !== e.jumpedToPresent ? !0 === e.jumpedToPresent : this.jumpedToPresent),
                  (n.jumpFlash = void 0 !== e.jumpFlash ? !0 === e.jumpFlash : this.jumpFlash),
                  (n.jumpReturnTargetId =
                      void 0 !== e.jumpReturnTargetId ? e.jumpReturnTargetId : this.jumpReturnTargetId),
                  (n.focusTargetId = void 0 !== e.focusTargetId ? e.focusTargetId : this.focusTargetId),
                  (n.focusSequenceId = void 0 !== e.focusSequenceId ? e.focusSequenceId : this.focusSequenceId),
                  (n.hasMoreBefore = void 0 !== e.hasMoreBefore ? !0 === e.hasMoreBefore : this.hasMoreBefore),
                  (n.hasMoreAfter = void 0 !== e.hasMoreAfter ? !0 === e.hasMoreAfter : this.hasMoreAfter),
                  (n.loadingMore = void 0 !== e.loadingMore ? e.loadingMore : this.loadingMore),
                  (n.revealedMessageId = void 0 !== e.revealedMessageId ? e.revealedMessageId : this.revealedMessageId),
                  (n.cached = void 0 !== e.cached ? e.cached : this.cached),
                  (n.hasFetched = void 0 !== e.hasFetched ? e.hasFetched : this.hasFetched),
                  (n.error = void 0 !== e.error ? e.error : this.error),
                  (n.initialScrollSequenceId =
                      void 0 !== e.initialScrollSequenceId ? e.initialScrollSequenceId : this.initialScrollSequenceId),
                  (n.suppressRowAnimationSequenceId =
                      void 0 !== e.suppressRowAnimationSequenceId
                          ? e.suppressRowAnimationSequenceId
                          : this.suppressRowAnimationSequenceId)),
            n
        );
    }
    get length() {
        return this._array.length;
    }
    toArray() {
        return [...this._array];
    }
    forEach(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (n) {
            let n = this._array;
            for (let i = n.length - 1; i >= 0 && !1 !== e.call(t, n[i], i); i--);
        } else this._array.forEach(e, t);
    }
    reduce(e, t) {
        return this._array.reduce(e, t);
    }
    some(e, t) {
        return this._array.some(e, t);
    }
    filter(e, t) {
        return this._array.filter(e, t);
    }
    forAll(e, t) {
        this._before.forEach(e, t), this._array.forEach(e, t), this._after.forEach(e, t);
    }
    findOldest(e) {
        return r().find(this._before._messages, e) ?? r().find(this._array, e) ?? r().find(this._after._messages, e);
    }
    findNewest(e) {
        return (
            r().findLast(this._after._messages, e) ??
            r().findLast(this._array, e) ??
            r().findLast(this._before._messages, e)
        );
    }
    map(e, t) {
        return this._array.map(e, t);
    }
    first() {
        return this._array[0];
    }
    last() {
        return this._array[this._array.length - 1];
    }
    get(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this._map[e];
        return null == n && t ? (this._before.get(e) ?? this._after.get(e)) : n;
    }
    getByIndex(e) {
        return this._array[e];
    }
    getAfter(e) {
        let t = this.get(e);
        if (null == t) return null;
        let n = this._array.indexOf(t);
        return -1 === n || n === this.length - 1 ? null : this._array[n + 1];
    }
    getManyAfter(e, t, n) {
        let i = this.get(e);
        if (null == i) return null;
        let r = this._array.indexOf(i);
        if (-1 === r) return null;
        let s = [];
        for (let e = r + 1; e < this.length && (-1 === t || s.length < t); e++)
            (null == n || n(this._array[e])) && s.push(this._array[e]);
        return s;
    }
    getManyBefore(e, t, n) {
        let i = this.get(e);
        if (null == i) return null;
        let r = this._array.indexOf(i);
        if (-1 === r) return null;
        let s = [];
        for (let e = r - 1; e >= 0 && (-1 === t || s.length < t); e--)
            (null == n || n(this._array[e])) && s.unshift(this._array[e]);
        return s;
    }
    hasAnyAfter(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
            i = this.get(e);
        if (null == i) return !1;
        let r = this._array.indexOf(i);
        if (-1 === r) return !1;
        for (let e = r + 1; e < this.length && (-1 === n || e <= r + n); e++) if (t(this._array[e])) return !0;
        return !1;
    }
    has(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return null != this._map[e] || (t && (this._before.has(e) || this._after.has(e)));
    }
    indexOf(e) {
        let t = -1;
        return this._array.find((n, i) => n.id === e && ((t = i), !0)), t;
    }
    hasPresent() {
        return (this._after.length > 0 && this._after.wasAtEdge) || !this.hasMoreAfter;
    }
    hasBeforeCached(e) {
        if (this.length > 0 && this._before.length > 0) {
            let t = this.first();
            return null != t && t.id === e;
        }
        return !1;
    }
    hasAfterCached(e) {
        if (this.length > 0 && this._after.length > 0) {
            let t = this.last();
            return null != t && t.id === e;
        }
        return !1;
    }
    update(e, t) {
        let n = this._map[e];
        if (null == n)
            return this._before.has(e)
                ? this.mutate((n) => n._before.update(e, t), !0)
                : this._after.has(e)
                  ? this.mutate((n) => n._after.update(e, t), !0)
                  : this;
        let i = t(n);
        return this.mutate((e) => {
            (e._map[n.id] = i), (e._array[e._array.indexOf(n)] = i);
        }, !0);
    }
    replace(e, t) {
        let n = this._map[e];
        return null == n
            ? this._before.has(e)
                ? this.mutate((n) => n._before.replace(e, t), !0)
                : this._after.has(e)
                  ? this.mutate((n) => n._after.replace(e, t), !0)
                  : this
            : this.mutate((i) => {
                  delete i._map[e], (i._map[t.id] = t), (i._array[i._array.indexOf(n)] = t);
              }, !0);
    }
    remove(e) {
        return this.mutate((t) => {
            delete t._map[e], (t._array = t._array.filter((t) => t.id !== e)), t._before.remove(e), t._after.remove(e);
        }, !0);
    }
    removeMany(e) {
        return e.some((e) => this.has(e))
            ? this.mutate((t) => {
                  r().each(e, (e) => {
                      delete t._map[e];
                  }),
                      (t._array = t._array.filter((t) => -1 === e.indexOf(t.id))),
                      t._before.removeMany(e),
                      t._after.removeMany(e);
              }, !0)
            : this;
    }
    merge(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this.mutate((i) => {
            i._merge(e, t, n);
        }, !0);
    }
    _merge(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (e = e.filter((e) => {
            let t = this._map[e.id];
            return (this._map[e.id] = e), null == t || ((this._array[this._array.indexOf(t)] = e), !1);
        })),
            n && (t ? this._before : this._after).clear(),
            (this._array = t ? [...e, ...this._array] : [...this._array, ...e]);
    }
    mergeDelta() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return this.mutate((i) => {
            i._before.clear(), i._after.clear();
            let r = new Set(n);
            e.forEach((e) => r.add(e.id)),
                t.forEach((e) => r.add(e.id)),
                (i._array = i._array
                    .filter((e) => !r.has(e.id))
                    .concat(
                        e.map((e) => (0, l.rh)(e)),
                        t.map((e) => (0, l.rh)(e)),
                    )
                    .sort((e, t) => _.default.compare(e.id, t.id)));
        });
    }
    _clearMessages() {
        (this._array = []), (this._map = {});
    }
    reset(e) {
        return this.mutate((t) => {
            (t._array = e), (t._map = {}), e.forEach((e) => (t._map[e.id] = e)), t._before.clear(), t._after.clear();
        });
    }
    truncateTop(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = this._array.length - e;
        return n <= 0
            ? this
            : this.mutate((e) => {
                  for (let t = 0; t < n; t++) delete e._map[e._array[t].id];
                  e._before.cache(e._array.slice(0, n), !e.hasMoreBefore),
                      (e._array = e._array.slice(n)),
                      (e.hasMoreBefore = !0);
              }, t);
    }
    truncateBottom(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this._array.length <= e
            ? this
            : this.mutate((t) => {
                  for (let n = e; n < this._array.length; n++) delete t._map[t._array[n].id];
                  t._after.cache(t._array.slice(e, this._array.length), !t.hasMoreAfter),
                      (t._array = t._array.slice(0, e)),
                      (t.hasMoreAfter = !0);
              }, t);
    }
    jumpToPresent(e) {
        return this.mutate((t) => {
            let n = t._after.extractAll();
            t.hasMoreAfter = !1;
            let i = Math.max(n.length - e, 0),
                r = n.slice(i);
            n.splice(i),
                t._before.cache(t._array),
                t._before.cache(n),
                t._clearMessages(),
                t._merge(r),
                (t.hasMoreBefore = t._before.length > 0),
                (t.jumped = !0),
                (t.jumpTargetId = null),
                (t.jumpTargetOffset = 0),
                (t.jumpedToPresent = !0),
                (t.jumpFlash = !1),
                (t.jumpReturnTargetId = null),
                (t.jumpSequenceId = t.jumpSequenceId + 1),
                (t.ready = !0),
                (t.loadingMore = !1);
        }, !0);
    }
    jumpToMessage(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = arguments.length > 4 ? arguments[4] : void 0;
        return this.mutate((a) => {
            (a.jumped = !0),
                (a.jumpedToPresent = !1),
                (a.jumpType = r ?? s.US.ANIMATED),
                (a.jumpTargetId = e),
                (a.jumpTargetOffset = null != e && null != n ? n : 0),
                (a.jumpSequenceId = a.jumpSequenceId + 1),
                (a.jumpFlash = t),
                (a.jumpReturnTargetId = i),
                (a.ready = !0),
                (a.loadingMore = !1);
        }, !1);
    }
    focusOnMessage(e) {
        return this.mutate((t) => {
            (t.focusTargetId = e), (t.focusSequenceId = t.focusSequenceId + 1), (t.ready = !0), (t.loadingMore = !1);
        }, !1);
    }
    loadFromCache(e, t) {
        return this.mutate((n) => {
            let i = e ? n._before : n._after;
            n._merge(i.extract(t), e);
            let r = i.length > 0 || !i.wasAtEdge;
            e ? (n.hasMoreBefore = r) : (n.hasMoreAfter = r), (n.ready = !0), (n.loadingMore = !1);
        }, !0);
    }
    truncate(e, t) {
        return this.length <= E.UNo ? this : e ? this.truncateBottom(E.rLJ) : t ? this.truncateTop(E.rLJ) : this;
    }
    receiveMessage(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = null == e.nonce ? null : this.get(e.nonce, !0);
        if (
            null != n &&
            (e.author?.id === n.author?.id || (null != e.interaction && e.interaction.user.id === n.author.id)) &&
            null != e.nonce &&
            n.id === e.nonce
        ) {
            let t = (0, l.rh)(e);
            return null != n.interactionData && (t.interactionData = n.interactionData), this.replace(e.nonce, t);
        }
        if (this.hasMoreAfter) this._after.wasAtEdge && (this._after.wasAtEdge = !1);
        else {
            let n,
                i = (0, l.rh)(e),
                r = this.last();
            return ((n =
                null != r && 0 > _.default.compare(e.id, r.id) && c.getConfig({ location: "receiveMessage" }).enabled
                    ? this.mutate((e) => {
                          let t = e._map[i.id];
                          (e._map[i.id] = i),
                              null != t
                                  ? (e._array[e._array.indexOf(t)] = i)
                                  : u(e._array, i, (e, t) => _.default.compare(e.id, t.id));
                      }, !0)
                    : this.merge([i])),
            t)
                ? n.truncateTop(E.rLJ, !1)
                : this.length > E.UNo
                  ? n.truncateBottom(E.rLJ, !1)
                  : n;
        }
        return this;
    }
    receivePushNotification(e, t) {
        if (null != (null == e.nonce ? null : this.get(e.nonce, !0)) || null != this.get(e.id, !0)) return this;
        let n = !(0, d.K)() || !t;
        return this.mutate({ ready: !0, cached: n }).merge([m(this, e)]);
    }
    receiveReactionInAppNotification(e) {
        return null != (null == e.nonce ? null : this.get(e.nonce, !0))
            ? this
            : this.mutate({ ready: !0, cached: !0 }).merge([m(this, e)]);
    }
    loadStart(e) {
        return this.mutate({
            loadingMore: !0,
            jumped: null != e,
            jumpedToPresent: e?.present ?? !1,
            jumpTargetId: e?.messageId ?? null,
            jumpTargetOffset: e?.offset ?? 0,
            jumpReturnTargetId: e?.returnMessageId ?? null,
            ready: null == e && this.ready,
        });
    }
    loadComplete(e) {
        let t = [...e.newMessages],
            n = e.isBefore ?? !1,
            i = e.isAfter ?? !1,
            a = e.jump ?? null,
            o = e.hasMoreBefore ?? !1,
            d = e.hasMoreAfter ?? !1,
            _ = e.avoidInitialScroll ?? !1,
            u = e.cached ?? !1,
            c = r()(t)
                .reverse()
                .map((e) => (0, l.rh)(e))
                .value(),
            m = null;
        if ((n || i) && null == a && this.ready) m = this.merge(c, n, !0);
        else {
            let e = this._array.filter((e) => e.state === E.cmJ.SENDING),
                t = this._array.filter((e) => e.state === E.cmJ.SEND_FAILED),
                r = e.length > 0 || t.length > 0;
            (m = this.reset(c)),
                !r || n || i || a?.messageId != null || a?.offset != null
                    ? h.info(
                          `loadComplete: resetting state for channelId=${this.channelId}, sending.length=${e.length}`,
                      )
                    : (t.length > 0 &&
                          (h.info(`loadComplete: merging with SEND_FAILED messages for channelId=${this.channelId}`),
                          (m = m.merge(t))),
                      e.length > 0 &&
                          (h.info(`loadComplete: merging with SENDING messages for channelId=${this.channelId}`),
                          (m = m.merge(e))));
        }
        let f = !u && m.cached && !_;
        return m.mutate({
            ready: !0,
            loadingMore: !1,
            jumpType: a?.jumpType ?? s.US.ANIMATED,
            jumpFlash: a?.flash ?? !1,
            jumped: null != a,
            jumpedToPresent: a?.present ?? !1,
            jumpTargetId: a?.messageId ?? null,
            jumpTargetOffset: null != a && null != a.messageId && null != a.offset ? a.offset : 0,
            jumpSequenceId: null == a || _ ? m.jumpSequenceId : m.jumpSequenceId + 1,
            jumpReturnTargetId: a?.returnMessageId ?? null,
            hasMoreBefore: null == a && i ? m.hasMoreBefore : o,
            hasMoreAfter: null == a && n ? m.hasMoreAfter : d,
            cached: u,
            hasFetched: e.hasFetched,
            error: !1,
            initialScrollSequenceId: f ? m.initialScrollSequenceId + 1 : m.initialScrollSequenceId,
            suppressRowAnimationSequenceId: f ? m.suppressRowAnimationSequenceId + 1 : m.suppressRowAnimationSequenceId,
        });
    }
    addCachedMessages(e, t) {
        (0, a.D)(e);
        let n = e.map((e) => m(this, e)).reverse();
        this._array
            .filter((e) => !n.some((t) => t.id === e.id))
            .forEach((e) => u(n, e, (e, t) => _.default.compare(e.id, t.id)));
        let i = !t && this.cached;
        return this.reset(n).mutate({
            ready: !0,
            cached: t,
            error: !1,
            initialScrollSequenceId: i ? this.initialScrollSequenceId + 1 : this.initialScrollSequenceId,
        });
    }
}
let p = g;
