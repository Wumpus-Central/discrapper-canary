var i,
    a = r(442837),
    o = r(570140),
    s = r(752305),
    l = r(957730),
    u = r(695346),
    c = r(375954);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = {},
    p = {};
function h(e) {
    let { channelId: n, messageId: r, content: i, source: a } = e,
        o = u.dN.getSetting(),
        c = l.ZP.unparse(i, n);
    (f[n] = {
        channelId: n,
        messageId: r,
        textValue: c,
        richValue: (0, s.JM)(o ? c : i)
    }),
        (p[n] = a);
}
function _(e) {
    let { channelId: n, textValue: r, richValue: i } = e,
        a = f[n];
    if (null == a) return !1;
    f[n] = {
        ...a,
        textValue: r,
        richValue: i
    };
}
function m(e) {
    let { channelId: n } = e;
    if (null == n || null == f[n]) return !1;
    delete f[n], delete p[n];
}
class g extends (i = a.ZP.Store) {
    isEditing(e, n) {
        var r;
        return (null === (r = f[e]) || void 0 === r ? void 0 : r.messageId) === n;
    }
    isEditingAny(e) {
        return null != f[e];
    }
    getEditingTextValue(e) {
        var n;
        return null === (n = f[e]) || void 0 === n ? void 0 : n.textValue;
    }
    getEditingRichValue(e) {
        var n;
        return null === (n = f[e]) || void 0 === n ? void 0 : n.richValue;
    }
    getEditingMessageId(e) {
        var n;
        return null === (n = f[e]) || void 0 === n ? void 0 : n.messageId;
    }
    getEditingMessage(e) {
        let n = f[e];
        return null != n && null != n.messageId ? c.Z.getMessage(e, n.messageId) : null;
    }
    getEditActionSource(e) {
        return p[e];
    }
}
d(g, 'displayName', 'EditMessageStore'),
    (n.Z = new g(o.Z, {
        MESSAGE_START_EDIT: h,
        MESSAGE_UPDATE_EDIT: _,
        MESSAGE_END_EDIT: m
    }));
