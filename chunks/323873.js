n.d(t, { Z: () => v });
var r,
    i = n(442837),
    o = n(570140),
    a = n(752305),
    s = n(957730),
    l = n(695346),
    c = n(375954);
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
function _(e, t) {
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
let p = {},
    h = {};
function m(e) {
    let { channelId: t, messageId: n, content: r, source: i } = e,
        o = l.dN.getSetting(),
        c = s.ZP.unparse(r, t);
    (p[t] = {
        channelId: t,
        messageId: n,
        textValue: c,
        richValue: (0, a.JM)(o ? c : r)
    }),
        (h[t] = i);
}
function g(e) {
    let { channelId: t, textValue: n, richValue: r } = e,
        i = p[t];
    if (null == i) return !1;
    p[t] = _(d({}, i), {
        textValue: n,
        richValue: r
    });
}
function E(e) {
    let { channelId: t } = e;
    if (null == t || null == p[t]) return !1;
    delete p[t], delete h[t];
}
function b(e) {
    var t;
    let { channelId: n, id: r } = e;
    (null == (t = p[n]) ? void 0 : t.messageId) === r && (delete p[n], delete h[n]);
}
class y extends (r = i.ZP.Store) {
    isEditing(e, t) {
        var n;
        return (null == (n = p[e]) ? void 0 : n.messageId) === t;
    }
    isEditingAny(e) {
        return null != p[e];
    }
    getEditingTextValue(e) {
        var t;
        return null == (t = p[e]) ? void 0 : t.textValue;
    }
    getEditingRichValue(e) {
        var t;
        return null == (t = p[e]) ? void 0 : t.richValue;
    }
    getEditingMessageId(e) {
        var t;
        return null == (t = p[e]) ? void 0 : t.messageId;
    }
    getEditingMessage(e) {
        let t = p[e];
        return null != t && null != t.messageId ? c.Z.getMessage(e, t.messageId) : null;
    }
    getEditActionSource(e) {
        return h[e];
    }
}
u(y, 'displayName', 'EditMessageStore');
let v = new y(o.Z, {
    MESSAGE_START_EDIT: m,
    MESSAGE_UPDATE_EDIT: g,
    MESSAGE_END_EDIT: E,
    MESSAGE_DELETE: b
});
