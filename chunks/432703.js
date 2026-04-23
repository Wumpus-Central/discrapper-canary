"use strict";
n.d(t, { Ay: () => d, LD: () => a.LD });
var r = n(735438),
    i = n.n(r),
    s = n(451988),
    a = n(36124),
    o = n(125385),
    l = n(818307),
    u = n(652215);
function c(e) {
    return null != e && "null" !== e && e !== u.ME && "undefined" !== e && e !== u.YYv;
}
class d {
    _members = new o.A((e, t) => this._enqueue(e, { members: t }));
    _channels = new a.Ay((e, t) => this._enqueue(e, { channels: t }));
    _threadMemberLists = new l.A((e, t) => this._enqueue(e, { thread_member_lists: t }));
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
        i().forEach(this._pending, (e, t) => {
            this._subscribed.add(t);
        }),
            this._onChange(this._pending),
            (this._pending = {});
    }
    subscribeUser(e, t) {
        c(e) && this._members.subscribe(e, t);
    }
    unsubscribeUser(e, t) {
        c(e) && this._members.unsubscribe(e, t);
    }
    subscribeChannel(e, t, n) {
        return !!c(e) && this._channels.subscribe(e, t, n);
    }
    subscribeToMemberUpdates(e) {
        if (!c(e)) return !1;
        this._enqueue(e, { member_updates: !0 }), this._memberUpdates.add(e);
    }
    unsubscribeFromMemberUpdates(e) {
        if (!c(e)) return !1;
        this._enqueue(e, { member_updates: !1 });
    }
    subscribeThreadMemberList(e, t, n) {
        return !!c(e) && this._threadMemberLists.subscribe(e, t, n);
    }
    unsubscribeThreadMemberList(e, t) {
        return !!c(e) && this._threadMemberLists.unsubscribe(e, t);
    }
    subscribeToGuild(e) {
        this._subscribeToFeature(e, this._typing, { typing: !0 }),
            this._subscribeToFeature(e, this._activities, { activities: !0 }),
            this._subscribeToFeature(e, this._threads, { threads: !0 });
    }
    _subscribeToFeature(e, t, n) {
        !c(e) || t.has(e) || (t.add(e), this._enqueue(e, n));
    }
}
