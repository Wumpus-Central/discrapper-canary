"use strict";
n.d(t, { A: () => A }), n(775443), n(321073), n(667532);
var r = n(735438),
    i = n.n(r),
    s = n(56562),
    a = n(640631),
    o = n(626584),
    l = n(141468),
    u = n(491001),
    c = n(661191),
    d = n(636889),
    _ = n(652215);
let f = new o.A("ChannelMessages"),
    p = !0;
function h(e, t) {
    let n = null != e.editedTimestamp ? +e.editedTimestamp : 0;
    return (
        !!(
            (null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0) > n ||
            e.embeds.length < (t.embeds?.length ?? 0)
        ) || e.content !== t.content
    );
}
function m(e, t) {
    let n = e.get(t.id);
    return null == n || h(n, t) || e.cached ? (0, l.rh)(t) : n;
}
class E {
    _messages;
    _map;
    _wasAtEdge;
    _isCacheBefore;
    constructor(e) {
        (this._messages = []), (this._map = {}), (this._wasAtEdge = !1), (this._isCacheBefore = e);
    }
    clone() {
        let e = new E(this._isCacheBefore);
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
        (this._messages = i().filter(this._messages, (t) => {
            let { id: n } = t;
            return n !== e;
        })),
            delete this._map[e];
    }
    removeMany(e) {
        i().each(e, (e) => {
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
        let r = t(n);
        (this._map[n.id] = r), (this._messages[this._messages.indexOf(n)] = r);
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
        if ((0 === this.length && (this._wasAtEdge = t), this._messages.length + e.length > _.iMx)) {
            if (((this._wasAtEdge = !1), e.length > _.iMx)) {
                this._isCacheBefore
                    ? (this._messages = e.slice(e.length - _.iMx))
                    : (this._messages = e.slice(0, _.iMx)),
                    (this._map = {}),
                    this._messages.forEach((e) => (this._map[e.id] = e));
                return;
            }
            let t = _.iMx - e.length;
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
                r = this.length;
            (t = this._messages.slice(n, r)), this._messages.splice(n);
        } else {
            let n = 0,
                r = Math.min(e, this.length);
            (t = this._messages.slice(n, r)), this._messages.splice(n, e);
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
    _before = new E(!0);
    _after = new E(!1);
    _map = {};
    static forEach(e) {
        i().forEach(g._channelMessages, e);
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
            for (let r = n.length - 1; r >= 0 && !1 !== e.call(t, n[r], r); r--);
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
        return i().find(this._before._messages, e) ?? i().find(this._array, e) ?? i().find(this._after._messages, e);
    }
    findNewest(e) {
        return (
            i().findLast(this._after._messages, e) ??
            i().findLast(this._array, e) ??
            i().findLast(this._before._messages, e)
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
        let r = this.get(e);
        if (null == r) return null;
        let i = this._array.indexOf(r);
        if (-1 === i) return null;
        let s = [];
        for (let e = i + 1; e < this.length && (-1 === t || s.length < t); e++)
            (null == n || n(this._array[e])) && s.push(this._array[e]);
        return s;
    }
    getManyBefore(e, t, n) {
        let r = this.get(e);
        if (null == r) return null;
        let i = this._array.indexOf(r);
        if (-1 === i) return null;
        let s = [];
        for (let e = i - 1; e >= 0 && (-1 === t || s.length < t); e--)
            (null == n || n(this._array[e])) && s.unshift(this._array[e]);
        return s;
    }
    hasAnyAfter(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
            r = this.get(e);
        if (null == r) return !1;
        let i = this._array.indexOf(r);
        if (-1 === i) return !1;
        for (let e = i + 1; e < this.length && (-1 === n || e <= i + n); e++) if (t(this._array[e])) return !0;
        return !1;
    }
    has(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return null != this._map[e] || (t && (this._before.has(e) || this._after.has(e)));
    }
    indexOf(e) {
        let t = -1;
        return this._array.find((n, r) => n.id === e && ((t = r), !0)), t;
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
        let r = t(n);
        return this.mutate((e) => {
            (e._map[n.id] = r), (e._array[e._array.indexOf(n)] = r);
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
            : this.mutate((r) => {
                  delete r._map[e], (r._map[t.id] = t), (r._array[r._array.indexOf(n)] = t);
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
                  i().each(e, (e) => {
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
        return this.mutate((r) => {
            r._merge(e, t, n);
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
        return this.mutate((r) => {
            r._before.clear(), r._after.clear();
            let i = new Set(n);
            e.forEach((e) => i.add(e.id)),
                t.forEach((e) => i.add(e.id)),
                (r._array = r._array
                    .filter((e) => !i.has(e.id))
                    .concat(
                        e.map((e) => (0, l.rh)(e)),
                        t.map((e) => (0, l.rh)(e)),
                    )
                    .sort((e, t) => c.default.compare(e.id, t.id)));
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
        return !p || this._array.length <= e
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
            let r = Math.max(n.length - e, 0),
                i = n.slice(r);
            n.splice(r),
                t._before.cache(t._array),
                t._before.cache(n),
                t._clearMessages(),
                t._merge(i),
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
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = arguments.length > 4 ? arguments[4] : void 0;
        return this.mutate((a) => {
            (a.jumped = !0),
                (a.jumpedToPresent = !1),
                (a.jumpType = i ?? s.US.ANIMATED),
                (a.jumpTargetId = e),
                (a.jumpTargetOffset = null != e && null != n ? n : 0),
                (a.jumpSequenceId = a.jumpSequenceId + 1),
                (a.jumpFlash = t),
                (a.jumpReturnTargetId = r),
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
            let r = e ? n._before : n._after;
            n._merge(r.extract(t), e);
            let i = r.length > 0 || !r.wasAtEdge;
            e ? (n.hasMoreBefore = i) : (n.hasMoreAfter = i), (n.ready = !0), (n.loadingMore = !1);
        }, !0);
    }
    truncate(e, t) {
        return this.length <= _.UNo ? this : e ? this.truncateBottom(_.rLJ) : t ? this.truncateTop(_.rLJ) : this;
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
            let n = (0, l.rh)(e),
                r = this.merge([n]);
            return t ? r.truncateTop(_.rLJ, !1) : this.length > _.UNo ? r.truncateBottom(_.rLJ, !1) : r;
        }
        return this;
    }
    receivePushNotification(e, t) {
        if (null != (null == e.nonce ? null : this.get(e.nonce, !0)) || null != this.get(e.id, !0)) return this;
        let n = !(0, u.K)() || !t;
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
            r = e.isAfter ?? !1,
            a = e.jump ?? null,
            o = e.hasMoreBefore ?? !1,
            u = e.hasMoreAfter ?? !1,
            c = e.avoidInitialScroll ?? !1,
            d = e.cached ?? !1,
            p = i()(t)
                .reverse()
                .map((e) => (0, l.rh)(e))
                .value(),
            h = null;
        if ((n || r) && null == a && this.ready) h = this.merge(p, n, !0);
        else {
            let e = this._array.filter((e) => e.state === _.cmJ.SENDING),
                t = this._array.filter((e) => e.state === _.cmJ.SEND_FAILED),
                i = e.length > 0 || t.length > 0;
            (h = this.reset(p)),
                !i || n || r || a?.messageId != null || a?.offset != null
                    ? f.info(
                          `loadComplete: resetting state for channelId=${this.channelId}, sending.length=${e.length}`,
                      )
                    : (t.length > 0 &&
                          (f.info(`loadComplete: merging with SEND_FAILED messages for channelId=${this.channelId}`),
                          (h = h.merge(t))),
                      e.length > 0 &&
                          (f.info(`loadComplete: merging with SENDING messages for channelId=${this.channelId}`),
                          (h = h.merge(e))));
        }
        let m = !d && h.cached && !c;
        return h.mutate({
            ready: !0,
            loadingMore: !1,
            jumpType: a?.jumpType ?? s.US.ANIMATED,
            jumpFlash: a?.flash ?? !1,
            jumped: null != a,
            jumpedToPresent: a?.present ?? !1,
            jumpTargetId: a?.messageId ?? null,
            jumpTargetOffset: null != a && null != a.messageId && null != a.offset ? a.offset : 0,
            jumpSequenceId: null == a || c ? h.jumpSequenceId : h.jumpSequenceId + 1,
            jumpReturnTargetId: a?.returnMessageId ?? null,
            hasMoreBefore: null == a && r ? h.hasMoreBefore : o,
            hasMoreAfter: null == a && n ? h.hasMoreAfter : u,
            cached: d,
            hasFetched: e.hasFetched,
            error: !1,
            initialScrollSequenceId: m ? h.initialScrollSequenceId + 1 : h.initialScrollSequenceId,
            suppressRowAnimationSequenceId: m ? h.suppressRowAnimationSequenceId + 1 : h.suppressRowAnimationSequenceId,
        });
    }
    addCachedMessages(e, t) {
        (0, a.D)(e);
        let n = e.map((e) => m(this, e)).reverse();
        this._array
            .filter((e) => !n.some((t) => t.id === e.id))
            .forEach((e) => d.Y(n, e, (e, t) => c.default.compare(e.id, t.id)));
        let r = !t && this.cached;
        return this.reset(n).mutate({
            ready: !0,
            cached: t,
            error: !1,
            initialScrollSequenceId: r ? this.initialScrollSequenceId + 1 : this.initialScrollSequenceId,
        });
    }
}
let A = g;
