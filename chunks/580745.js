"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(408018),
    a = n(451909),
    o = n(253932),
    l = n(320501);
let u = {},
    d = {};
class c extends r.Ay.Store {
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
        return d[e];
    }
}
let _ = new c(i.h, {
    MESSAGE_START_EDIT: function (e) {
        let { channelId: t, messageId: n, content: r, source: i } = e,
            l = o.D_.getSetting(),
            c = a.Ay.unparse(r, t);
        (u[t] = { channelId: t, messageId: n, textValue: c, richValue: (0, s.x7)(l ? c : r) }), (d[t] = i);
    },
    MESSAGE_UPDATE_EDIT: function (e) {
        let { channelId: t, textValue: n, richValue: r } = e,
            i = u[t];
        if (null == i) return !1;
        u[t] = { ...i, textValue: n, richValue: r };
    },
    MESSAGE_END_EDIT: function (e) {
        let { channelId: t } = e;
        if (null == t || null == u[t]) return !1;
        delete u[t], delete d[t];
    },
    MESSAGE_DELETE: function (e) {
        let { channelId: t, id: n } = e;
        u[t]?.messageId === n && (delete u[t], delete d[t]);
    },
    LOGOUT: function () {
        (u = {}), (d = {});
    },
});
