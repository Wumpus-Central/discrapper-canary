n.d(t, {
    KV: () => a.KV,
    ZP: () => _
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(846519),
    a = n(509848),
    s = n(483019),
    l = n(945689),
    c = n(981631);
function u(e, t, n) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    return null != e && 'null' !== e && e !== c.ME && 'undefined' !== e && e !== c.I_8;
}
class _ {
    _enqueue(e, t) {
        (this._pending[e] = d({}, this._pending[e], t)), this._flush.delay();
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
        var t;
        return null != (t = this._members.isSubscribedToAnyMember(e)) && t;
    }
    isSubscribedToMemberUpdates(e) {
        var t;
        return null != (t = this.get(e).member_updates) && t;
    }
    forEach(e) {
        this._subscribed.forEach(e);
    }
    clearWithoutFlushing(e, t) {
        (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), this._memberUpdates.delete(e), t && this._threads.delete(e), this._activities.delete(e);
    }
    flush() {
        i().forEach(this._pending, (e, t) => {
            this._subscribed.add(t);
        }),
            this._onChange(this._pending),
            (this._pending = {});
    }
    subscribeUser(e, t) {
        f(e) && this._members.subscribe(e, t);
    }
    unsubscribeUser(e, t) {
        f(e) && this._members.unsubscribe(e, t);
    }
    subscribeChannel(e, t, n) {
        return !!f(e) && this._channels.subscribe(e, t, n);
    }
    subscribeToMemberUpdates(e) {
        if (!f(e)) return !1;
        this._enqueue(e, { member_updates: !0 }), this._memberUpdates.add(e);
    }
    unsubscribeFromMemberUpdates(e) {
        if (!f(e)) return !1;
        this._enqueue(e, { member_updates: !1 });
    }
    subscribeThreadMemberList(e, t, n) {
        return !!f(e) && this._threadMemberLists.subscribe(e, t, n);
    }
    unsubscribeThreadMemberList(e, t) {
        return !!f(e) && this._threadMemberLists.unsubscribe(e, t);
    }
    subscribeToGuild(e) {
        this._subscribeToFeature(e, this._typing, { typing: !0 }), this._subscribeToFeature(e, this._activities, { activities: !0 }), this._subscribeToFeature(e, this._threads, { threads: !0 });
    }
    _subscribeToFeature(e, t, n) {
        f(e) && (t.has(e) || (t.add(e), this._enqueue(e, n)));
    }
    constructor(e) {
        u(this, '_members', new s.Z((e, t) => this._enqueue(e, { members: t }))), u(this, '_channels', new a.ZP((e, t) => this._enqueue(e, { channels: t }))), u(this, '_threadMemberLists', new l.Z((e, t) => this._enqueue(e, { thread_member_lists: t }))), u(this, '_typing', new Set()), u(this, '_threads', new Set()), u(this, '_activities', new Set()), u(this, '_memberUpdates', new Set()), u(this, '_subscribed', new Set()), u(this, '_pending', {}), u(this, '_flush', new o.sW(0, () => this.flush())), u(this, '_onChange', void 0), (this._onChange = e);
    }
}
