n.d(t, { B: () => u }), n(47120);
var r = n(786761),
    i = n(23750),
    l = n(306680),
    a = n(709054);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class u {
    isLatest(e, t) {
        return this.messageGeneration(e, t) === t;
    }
    messageGeneration(e, t) {
        let n = this.messages.get(e);
        return null == n ? -1 / 0 : n.generation !== t && null != n.message && n.message.id === l.ZP.lastMessageId(e) ? (this.messages.set(e, c(s({}, n), { generation: t })), t) : n.generation;
    }
    messageId(e) {
        var t, n;
        let r = this.messages.get(e);
        return null != (n = null == r || null == (t = r.message) ? void 0 : t.id) ? n : null;
    }
    messageRecord(e) {
        var t;
        let n = this.messages.get(e);
        return null == n || null == n.message || n.message instanceof i.ZP || (n.message = (0, r.e5)(n.message)), null != (t = null == n ? void 0 : n.message) ? t : null;
    }
    has(e) {
        return this.messages.has(e);
    }
    put(e, t, n) {
        this.messages.set(e, {
            message: t,
            generation: n
        });
    }
    putNew(e, t, n) {
        var r, i, l;
        let o = this.messages.get(e);
        null != t && ((i = t.id), null == (l = null == o || null == (r = o.message) ? void 0 : r.id) || a.default.compare(i, l) > 0) && this.put(e, t, n);
    }
    putMany(e, t) {
        for (let n of e) this.put(n.channel_id, n, t);
    }
    update(e) {
        var t;
        if (null == e.id || null == e.channel_id) return;
        let n = e.channel_id,
            l = this.messages.get(n);
        if ((null == l || null == (t = l.message) ? void 0 : t.id) !== e.id) return;
        let a = l.message instanceof i.ZP ? (0, r.wi)(l.message, e) : (0, r.gx)(l.message, e);
        this.messages.set(n, c(s({}, l), { message: a }));
    }
    delete(e) {
        this.messages.delete(e);
    }
    constructor() {
        o(this, 'localNeeded', !0), o(this, 'messages', new Map());
    }
}
