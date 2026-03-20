"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    s = n(408018),
    a = n(451909),
    o = n(253932),
    l = n(320501);
let u = {},
    c = {};
function d(e) {
    let { channelId: t, messageId: n, content: r, source: i } = e,
        l = o.D_.getSetting(),
        d = a.Ay.unparse(r, t);
    (u[t] = { channelId: t, messageId: n, textValue: d, richValue: (0, s.x7)(l ? d : r) }), (c[t] = i);
}
function _(e) {
    let { channelId: t, textValue: n, richValue: r } = e,
        i = u[t];
    if (null == i) return !1;
    u[t] = { ...i, textValue: n, richValue: r };
}
function f(e) {
    let { channelId: t } = e;
    if (null == t || null == u[t]) return !1;
    delete u[t], delete c[t];
}
function p(e) {
    let { channelId: t, id: n } = e;
    u[t]?.messageId === n && (delete u[t], delete c[t]);
}
function h() {
    (u = {}), (c = {});
}
class m extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    static displayName = "EditMessageStore";
    isEditing(e, t) {
        return u[e]?.messageId === t;
    }
    isEditingAny(e) {
        return null != u[e];
    }
    getEditingTextValue(e) {
        return u[e]?.textValue;
    }
    getEditingRichValue(e) {
        return u[e]?.richValue;
    }
    getEditingMessageId(e) {
        return u[e]?.messageId;
    }
    getEditingMessage(e) {
        let t = u[e];
        return null != t && null != t.messageId ? l.A.getMessage(e, t.messageId) : null;
    }
    getEditActionSource(e) {
        return c[e];
    }
}
let E = new m(i.h, {
    MESSAGE_START_EDIT: d,
    MESSAGE_UPDATE_EDIT: _,
    MESSAGE_END_EDIT: f,
    MESSAGE_DELETE: p,
    LOGOUT: h,
});
