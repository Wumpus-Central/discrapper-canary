n.d(t, { B: () => d }), n(388685);
var r = n(786761),
    i = n(23750),
    a = n(306680),
    o = n(709054);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class d {
    isLatest(e, t) {
        return this.messageGeneration(e, t) === t;
    }
    messageGeneration(e, t) {
        let n = this.messages.get(e);
        return null == n
            ? -1 / 0
            : n.generation !== t && null != n.message && n.message.id === a.ZP.lastMessageId(e)
              ? (this.messages.set(e, u(l({}, n), { generation: t })), t)
              : n.generation;
    }
    messageId(e) {
        var t, n;
        let r = this.messages.get(e);
        return null != (n = null == r || null == (t = r.message) ? void 0 : t.id) ? n : null;
    }
    messageRecord(e) {
        var t;
        let n = this.messages.get(e);
        return (
            null == n || null == n.message || n.message instanceof i.ZP || (n.message = (0, r.e5)(n.message)),
            null != (t = null == n ? void 0 : n.message) ? t : null
        );
    }
    has(e) {
        return this.messages.has(e);
    }
    put(e, t, n) {
        this.messages.set(e, {
            message: t,
            generation: n,
        });
    }
    putNew(e, t, n) {
        var r;
        let i = this.messages.get(e);
        null != t && f(t.id, null == i || null == (r = i.message) ? void 0 : r.id) && this.put(e, t, n);
    }
    putMany(e, t) {
        for (let n of e) this.put(n.channel_id, n, t);
    }
    update(e) {
        var t;
        if (null == e.id || null == e.channel_id) return;
        let n = e.channel_id,
            a = this.messages.get(n);
        if ((null == a || null == (t = a.message) ? void 0 : t.id) !== e.id) return;
        let o = a.message instanceof i.ZP ? (0, r.wi)(a.message, e) : (0, r.gx)(a.message, e);
        this.messages.set(n, u(l({}, a), { message: o }));
    }
    delete(e) {
        this.messages.delete(e);
    }
    constructor() {
        s(this, "localNeeded", !0), s(this, "messages", new Map());
    }
}
function f(e, t) {
    return null == t || o.default.compare(e, t) > 0;
}
