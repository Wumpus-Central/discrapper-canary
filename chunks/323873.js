n.d(t, { Z: () => g });
var i,
    r = n(442837),
    a = n(570140),
    s = n(752305),
    o = n(957730),
    l = n(695346),
    u = n(375954);
function c(e, t, n) {
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
let d = {},
    f = {};
function _(e) {
    let { channelId: t, messageId: n, content: i, source: r } = e,
        a = l.dN.getSetting(),
        u = o.ZP.unparse(i, t);
    (d[t] = {
        channelId: t,
        messageId: n,
        textValue: u,
        richValue: (0, s.JM)(a ? u : i)
    }),
        (f[t] = r);
}
function p(e) {
    let { channelId: t, textValue: n, richValue: i } = e,
        r = d[t];
    if (null == r) return !1;
    d[t] = {
        ...r,
        textValue: n,
        richValue: i
    };
}
function h(e) {
    let { channelId: t } = e;
    if (null == t || null == d[t]) return !1;
    delete d[t], delete f[t];
}
class m extends (i = r.ZP.Store) {
    isEditing(e, t) {
        var n;
        return (null === (n = d[e]) || void 0 === n ? void 0 : n.messageId) === t;
    }
    isEditingAny(e) {
        return null != d[e];
    }
    getEditingTextValue(e) {
        var t;
        return null === (t = d[e]) || void 0 === t ? void 0 : t.textValue;
    }
    getEditingRichValue(e) {
        var t;
        return null === (t = d[e]) || void 0 === t ? void 0 : t.richValue;
    }
    getEditingMessageId(e) {
        var t;
        return null === (t = d[e]) || void 0 === t ? void 0 : t.messageId;
    }
    getEditingMessage(e) {
        let t = d[e];
        return null != t && null != t.messageId ? u.Z.getMessage(e, t.messageId) : null;
    }
    getEditActionSource(e) {
        return f[e];
    }
}
c(m, 'displayName', 'EditMessageStore');
let g = new m(a.Z, {
    MESSAGE_START_EDIT: _,
    MESSAGE_UPDATE_EDIT: p,
    MESSAGE_END_EDIT: h
});
