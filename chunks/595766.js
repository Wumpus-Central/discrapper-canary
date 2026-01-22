n.d(t, {
    x: () => d,
}),
    n(896048);
var r = n(141468),
    i = n(383233),
    a = n(222823),
    s = n(661191);

function o(e, t, n) {
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
                o(e, t, n[t]);
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
            : n.generation !== t && null != n.message && n.message.id === a.Ay.lastMessageId(e)
              ? (this.messages.set(
                    e,
                    u(l({}, n), {
                        generation: t,
                    }),
                ),
                t)
              : n.generation;
    }
    messageId(e) {
        var t, n;
        let r = this.messages.get(e);
        return null != (t = null == r || null == (n = r.message) ? void 0 : n.id) ? t : null;
    }
    messageRecord(e) {
        var t;
        let n = this.messages.get(e);
        return (
            null == n || null == n.message || n.message instanceof i.Ay || (n.message = (0, r.rh)(n.message)),
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
        let s = a.message instanceof i.Ay ? (0, r.IU)(a.message, e) : (0, r.SP)(a.message, e);
        this.messages.set(
            n,
            u(l({}, a), {
                message: s,
            }),
        );
    }
    delete(e) {
        this.messages.delete(e);
    }
    constructor() {
        o(this, "localNeeded", !0), o(this, "messages", new Map());
    }
}

function f(e, t) {
    return null == t || s.default.compare(e, t) > 0;
}
