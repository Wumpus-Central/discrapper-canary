n.d(t, { x: () => a });
var i = n(141468),
    r = n(383233),
    s = n(222823),
    l = n(661191);
class a {
    localNeeded = !0;
    messages = new Map();
    isLatest(e, t) {
        return this.messageGeneration(e, t) === t;
    }
    messageGeneration(e, t) {
        let n = this.messages.get(e);
        return null == n
            ? -1 / 0
            : n.generation !== t && null != n.message && n.message.id === s.Ay.lastMessageId(e)
              ? (this.messages.set(e, { ...n, generation: t }), t)
              : n.generation;
    }
    messageId(e) {
        let t = this.messages.get(e);
        return t?.message?.id ?? null;
    }
    messageRecord(e) {
        let t = this.messages.get(e);
        return (
            null == t || null == t.message || t.message instanceof r.Ay || (t.message = (0, i.rh)(t.message)),
            t?.message ?? null
        );
    }
    has(e) {
        return this.messages.has(e);
    }
    put(e, t, n) {
        this.messages.set(e, { message: t, generation: n });
    }
    putNew(e, t, n) {
        var i, r;
        let s = this.messages.get(e);
        null != t && ((i = t.id), null == (r = s?.message?.id) || l.default.compare(i, r) > 0) && this.put(e, t, n);
    }
    putMany(e, t) {
        for (let n of e) this.put(n.channel_id, n, t);
    }
    update(e) {
        if (null == e.id || null == e.channel_id) return;
        let t = e.channel_id,
            n = this.messages.get(t);
        if (n?.message?.id !== e.id) return;
        let s = n.message instanceof r.Ay ? (0, i.IU)(n.message, e) : (0, i.SP)(n.message, e);
        this.messages.set(t, { ...n, message: s });
    }
    delete(e) {
        this.messages.delete(e);
    }
}
