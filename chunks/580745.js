n.d(t, { A: () => O });
var r,
    i = n(311907),
    a = n(73153),
    s = n(408018),
    o = n(451909),
    l = n(253932),
    c = n(320501);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = {},
    h = {};
function m(e) {
    let { channelId: t, messageId: n, content: r, source: i } = e,
        a = l.D_.getSetting(),
        c = o.Ay.unparse(r, t);
    (_[t] = {
        channelId: t,
        messageId: n,
        textValue: c,
        richValue: (0, s.x7)(a ? c : r),
    }),
        (h[t] = i);
}
function g(e) {
    let { channelId: t, textValue: n, richValue: r } = e,
        i = _[t];
    if (null == i) return !1;
    _[t] = p(d({}, i), {
        textValue: n,
        richValue: r,
    });
}
function E(e) {
    let { channelId: t } = e;
    if (null == t || null == _[t]) return !1;
    delete _[t], delete h[t];
}
function b(e) {
    var t;
    let { channelId: n, id: r } = e;
    (null == (t = _[n]) ? void 0 : t.messageId) === r && (delete _[n], delete h[n]);
}
class y extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A);
    }
    isEditing(e, t) {
        var n;
        return (null == (n = _[e]) ? void 0 : n.messageId) === t;
    }
    isEditingAny(e) {
        return null != _[e];
    }
    getEditingTextValue(e) {
        var t;
        return null == (t = _[e]) ? void 0 : t.textValue;
    }
    getEditingRichValue(e) {
        var t;
        return null == (t = _[e]) ? void 0 : t.richValue;
    }
    getEditingMessageId(e) {
        var t;
        return null == (t = _[e]) ? void 0 : t.messageId;
    }
    getEditingMessage(e) {
        let t = _[e];
        return null != t && null != t.messageId ? c.A.getMessage(e, t.messageId) : null;
    }
    getEditActionSource(e) {
        return h[e];
    }
}
u(y, "displayName", "EditMessageStore");
let O = new y(a.h, {
    MESSAGE_START_EDIT: m,
    MESSAGE_UPDATE_EDIT: g,
    MESSAGE_END_EDIT: E,
    MESSAGE_DELETE: b,
});
