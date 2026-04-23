"use strict";
n.d(t, { LD: () => a.LD, Ay: () => g });
var i = n(735438),
    r = n.n(i),
    s = n(451988),
    a = n(36124),
    o = n(626584),
    l = n(927813),
    d = n(935208);
let _ = +l.A.Millis.MINUTE;
class u {
    _subscriptions = {};
    _unsubscriptions = {};
    _onChange;
    _unsubscribe = new s.J_(_, () => this.flushUnsubscriptions());
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        (this._subscriptions = {}), (this._unsubscriptions = {}), this._unsubscribe.cancel();
    }
    get(e) {
        let t = this._subscriptions[e] ?? {};
        return d.default.keys(t);
    }
    clear(e) {
        delete this._subscriptions[e], delete this._unsubscriptions[e];
    }
    subscribe(e, t) {
        let n = this._subscriptions[e] ?? {};
        (n[t] = (n[t] ?? 0) + 1),
            (this._subscriptions[e] = n),
            1 === n[t] && this._onChange(e, this.get(e)),
            this.checkForLeaks(e, t);
    }
    isSubscribed(e, t) {
        return null != this._subscriptions[e] && null != this._subscriptions[e][t];
    }
    isSubscribedToAnyMember(e) {
        return this.get(e).length > 0;
    }
    unsubscribe(e, t) {
        if (!this.isSubscribed(e, t)) return;
        let n = this._unsubscriptions[e] ?? {};
        (n[t] = (n[t] ?? 0) + 1), (this._unsubscriptions[e] = n), 1 === n[t] && this._unsubscribe.delay(!1);
    }
    checkForLeaks(e, t) {
        let n = (this._subscriptions[e]?.[t] ?? 0) - (this._unsubscriptions[e]?.[t] ?? 0);
        n > 5 &&
            new o.A("GuildMemberSubscriptions").warn(
                `GuildMemberSubscriptions.subscribe(...): Potential reference leak! (${n} subscriptions)`,
            );
    }
    flushUnsubscriptions() {
        r().isEmpty(this._unsubscriptions) ||
            (r().forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                r().forEach(e, (e, t) => {
                    (n[t] = (n[t] ?? 0) - e), n[t] <= 0 && delete n[t];
                }),
                    r().isEmpty(n) && delete this._subscriptions[t],
                    this._onChange(t, this.get(t));
            }),
            (this._unsubscriptions = {}));
    }
}
var c = n(635377),
    E = n.n(c);
class h {
    _subscriptions = {};
    _onChange;
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return this._get(e).keys();
    }
    getSubscribedThreadIds() {
        let e = new Set();
        for (let t in this._subscriptions) for (let n of this._subscriptions[t].keys()) e.add(n);
        return e;
    }
    _get(e) {
        return this._subscriptions[e] ?? new (E())({ max: 3, updateAgeOnGet: !0 });
    }
    clear(e) {
        e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []));
    }
    subscribe(e, t, n) {
        let i = this._get(e);
        return i.has(t)
            ? (i.set(t, Date.now()), !1)
            : (null != n && i.has(n) && i.set(n, Date.now()),
              i.set(t, Date.now()),
              (this._subscriptions[e] = i),
              this._onChange(e, i.keys()),
              !0);
    }
    unsubscribe(e, t) {
        if (!(e in this._subscriptions)) return !1;
        let n = this._subscriptions[e];
        return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0);
    }
}
var m = n(652215);
function f(e) {
    return null != e && "null" !== e && e !== m.ME && "undefined" !== e && e !== m.YYv;
}
class g {
    _members = new u((e, t) => this._enqueue(e, { members: t }));
    _channels = new a.Ay((e, t) => this._enqueue(e, { channels: t }));
    _threadMemberLists = new h((e, t) => this._enqueue(e, { thread_member_lists: t }));
    _typing = new Set();
    _threads = new Set();
    _activities = new Set();
    _memberUpdates = new Set();
    _subscribed = new Set();
    _pending = {};
    _flush = new s.J_(0, () => this.flush());
    _onChange;
    constructor(e) {
        this._onChange = e;
    }
    _enqueue(e, t) {
        (this._pending[e] = { ...this._pending[e], ...t }), this._flush.delay();
    }
    reset() {
        this._subscribed.clear(),
            (this._pending = {}),
            this._members.reset(),
            this._memberUpdates.clear(),
            this._channels.reset(),
            this._threadMemberLists.reset(),
            this._typing.clear(),
            this._threads.clear(),
            this._activities.clear();
    }
    get(e) {
        return {
            typing: this._typing.has(e),
            threads: this._threads.has(e),
            activities: this._activities.has(e),
            members: this._members.get(e),
            member_updates: this._memberUpdates.has(e),
            channels: this._channels.get(e),
            thread_member_lists: this._threadMemberLists.get(e),
        };
    }
    getSubscribedThreadIds() {
        return this._threadMemberLists.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return this._threads.has(e);
    }
    isSubscribedToAnyMember(e) {
        return this._members.isSubscribedToAnyMember(e) ?? !1;
    }
    isSubscribedToMemberUpdates(e) {
        return this.get(e).member_updates ?? !1;
    }
    forEach(e) {
        this._subscribed.forEach(e);
    }
    clearWithoutFlushing(e, t) {
        (t || !this._threads.has(e)) && this._subscribed.delete(e),
            delete this._pending[e],
            this._members.clear(e),
            this._channels.clear(e),
            this._threadMemberLists.clear(e),
            this._typing.delete(e),
            this._memberUpdates.delete(e),
            t && this._threads.delete(e),
            this._activities.delete(e);
    }
    flush() {
        r().forEach(this._pending, (e, t) => {
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
        this._subscribeToFeature(e, this._typing, { typing: !0 }),
            this._subscribeToFeature(e, this._activities, { activities: !0 }),
            this._subscribeToFeature(e, this._threads, { threads: !0 });
    }
    _subscribeToFeature(e, t, n) {
        !f(e) || t.has(e) || (t.add(e), this._enqueue(e, n));
    }
}
