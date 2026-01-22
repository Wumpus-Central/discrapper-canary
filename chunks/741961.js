let r;
n.d(t, { A: () => P });
var i,
    a = n(311907),
    s = n(562465),
    o = n(73153),
    l = n(695870),
    c = n(927813),
    u = n(961350),
    d = n(101392),
    f = n(652215);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let h = 10 * c.A.Millis.SECOND,
    m = 1.5 * c.A.Millis.SECOND,
    g = 5,
    E = {},
    b = Object.freeze({});
function y(e) {
    var t;
    return null != (t = E[e]) ? t : b;
}
function O(e) {
    let { channelId: t } = e,
        n = u.default.getId();
    if (null == n || t === l.E) return !1;
    null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
    let i = Date.now(),
        a = 0.8 * h;
    if (null != r && (null != r.timeout || r.prevSend + a > i)) return !1;
    let c = setTimeout(
        () => {
            null == r ||
                r.channelId !== t ||
                n !== u.default.getId() ||
                null == r.timeout ||
                ((r.timeout = null),
                R(t) > g ||
                    s.Bo.post({
                        url: f.Rsh.TYPING(t),
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    }).then((e) => {
                        if (200 === e.status) {
                            var n, r;
                            let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
                                a = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
                            i > 0 &&
                                o.h.dispatch({
                                    type: "SLOWMODE_SET_COOLDOWN",
                                    channelId: t,
                                    slowmodeType: d.R.SendMessage,
                                    cooldownMs: i,
                                }),
                                a > 0 &&
                                    o.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: d.R.CreateThread,
                                        cooldownMs: a,
                                    });
                        }
                    }));
        },
        null == r || r.prevSend > i - 2 * a ? m : 0,
    );
    return (
        (r = {
            channelId: t,
            timeout: c,
            prevSend: i,
        }),
        I({
            channelId: t,
            userId: n,
        })
    );
}
function A(e) {
    if (null == r || r.channelId !== e) return !1;
    null != r.timeout && clearTimeout(r.timeout), (r = null);
}
function v(e) {
    let { channelId: t } = e,
        n = u.default.getId();
    return (
        null != n &&
        null != r &&
        r.channelId === t &&
        null != r.timeout &&
        (clearTimeout(r.timeout),
        (r = null),
        T({
            channelId: t,
            userId: n,
        }))
    );
}
function S(e, t) {
    return setTimeout(() => {
        o.h.dispatch({
            type: "TYPING_STOP",
            channelId: e,
            userId: t,
        });
    }, h);
}
function I(e) {
    let { channelId: t, userId: n } = e,
        r = _({}, y(t));
    clearTimeout(r[n]), (r[n] = S(t, n)), (E[t] = r);
}
function T(e) {
    let { channelId: t, userId: n } = e,
        r = E[t];
    if (null == r || null == r[n]) return !1;
    let i = _({}, r);
    clearTimeout(i[n]), delete i[n], (E[t] = i);
}
function C(e) {
    let {
        channelId: t,
        message: { author: n },
        optimistic: r,
    } = e;
    return (
        r && A(t),
        null != n &&
            T({
                channelId: t,
                userId: n.id,
            })
    );
}
function N() {
    E = {};
}
function R(e) {
    let t = y(e);
    return t === b ? 0 : Object.keys(t).length;
}
class w extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    getTypingUsers(e) {
        return y(e);
    }
    isTyping(e, t) {
        return null != y(e)[t];
    }
}
p(w, "displayName", "TypingStore");
let P = new w(o.h, {
    TYPING_START: I,
    TYPING_STOP: T,
    TYPING_START_LOCAL: O,
    TYPING_STOP_LOCAL: v,
    CONNECTION_OPEN: N,
    OVERLAY_INITIALIZE: N,
    MESSAGE_CREATE: C,
});
