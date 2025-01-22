r.d(n, {
    KV: function () {
        return l.KV;
    },
    ZP: function () {
        return h;
    }
});
var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(846519),
    l = r(509848),
    u = r(483019),
    c = r(945689),
    d = r(981631);
function f(e, n, r) {
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
function p(e) {
    return null != e && 'null' !== e && e !== d.ME && 'undefined' !== e && e !== d.I_8;
}
class h {
    _enqueue(e, n) {
        (this._pending[e] = {
            ...this._pending[e],
            ...n
        }),
            this._flush.delay();
    }
    reset() {
        this._subscribed.clear(), (this._pending = {}), this._members.reset(), this._memberUpdates.clear(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear();
    }
    get(e) {
        return {
            typing: this._typing.has(e),
            threads: this._threads.has(e),
            activities: this._activities.has(e),
            members: this._members.get(e),
            member_updates: this._memberUpdates.has(e),
            channels: this._channels.get(e),
            thread_member_lists: this._threadMemberLists.get(e)
        };
    }
    getSubscribedThreadIds() {
        return this._threadMemberLists.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return this._threads.has(e);
    }
    isSubscribedToAnyMember(e) {
        var n;
        return null !== (n = this._members.isSubscribedToAnyMember(e)) && void 0 !== n && n;
    }
    isSubscribedToMemberUpdates(e) {
        var n;
        return null !== (n = this.get(e).member_updates) && void 0 !== n && n;
    }
    forEach(e) {
        this._subscribed.forEach(e);
    }
    clearWithoutFlushing(e, n) {
        (n || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), this._memberUpdates.delete(e), n && this._threads.delete(e), this._activities.delete(e);
    }
    flush() {
        o().forEach(this._pending, (e, n) => {
            this._subscribed.add(n);
        }),
            this._onChange(this._pending),
            (this._pending = {});
    }
    subscribeUser(e, n) {
        p(e) && this._members.subscribe(e, n);
    }
    unsubscribeUser(e, n) {
        p(e) && this._members.unsubscribe(e, n);
    }
    subscribeChannel(e, n, r) {
        return !!p(e) && this._channels.subscribe(e, n, r);
    }
    subscribeToMemberUpdates(e) {
        if (!p(e)) return !1;
        this._enqueue(e, { member_updates: !0 }), this._memberUpdates.add(e);
    }
    unsubscribeFromMemberUpdates(e) {
        if (!p(e)) return !1;
        this._enqueue(e, { member_updates: !1 });
    }
    subscribeThreadMemberList(e, n, r) {
        return !!p(e) && this._threadMemberLists.subscribe(e, n, r);
    }
    unsubscribeThreadMemberList(e, n) {
        return !!p(e) && this._threadMemberLists.unsubscribe(e, n);
    }
    subscribeToGuild(e) {
        this._subscribeToFeature(e, this._typing, { typing: !0 }), this._subscribeToFeature(e, this._activities, { activities: !0 }), this._subscribeToFeature(e, this._threads, { threads: !0 });
    }
    _subscribeToFeature(e, n, r) {
        if (p(e)) {
            if (!n.has(e)) n.add(e), this._enqueue(e, r);
        }
    }
    constructor(e) {
        f(this, '_members', new u.Z((e, n) => this._enqueue(e, { members: n }))), f(this, '_channels', new l.ZP((e, n) => this._enqueue(e, { channels: n }))), f(this, '_threadMemberLists', new c.Z((e, n) => this._enqueue(e, { thread_member_lists: n }))), f(this, '_typing', new Set()), f(this, '_threads', new Set()), f(this, '_activities', new Set()), f(this, '_memberUpdates', new Set()), f(this, '_subscribed', new Set()), f(this, '_pending', {}), f(this, '_flush', new s.sW(0, () => this.flush())), f(this, '_onChange', void 0), (this._onChange = e);
    }
}
