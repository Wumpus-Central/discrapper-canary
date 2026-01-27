n.d(t, {
    A: () => g,
}),
    n(896048);
var l,
    r,
    i = n(311907),
    a = n(73153),
    u = n(732134);
let o = new u.A(196606),
    c = 0,
    s = new u.A(196606),
    d = new u.A(196606);

function p(e, t, n) {
    var l;
    let r = null != (l = o.get(e)) ? l : new Map();
    r.set(t, n), o.set(e, r), c++;
}

function E(e) {
    let t = s.get(e);
    null != t && d.delete(t), s.delete(e), o.delete(e), c++;
}
class I extends (l = i.Ay.Store) {
    getInteractionComponentStates() {
        return o;
    }
    getInteractionComponentStateVersion() {
        return c;
    }
    getInteractionComponentState(e, t) {
        var n;
        let l = o.get(e);
        return null == l ? null : null != (n = l.get(t)) ? n : null;
    }
}
(r = "displayName") in I
    ? Object.defineProperty(I, r, {
          value: "LocalInteractionComponentStateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (I[r] = "LocalInteractionComponentStateStore");
let g = new I(a.h, {
    LOGOUT: function () {
        o.clear(), s.clear(), d.clear(), c++;
    },
    QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
        let { messageId: t, nonce: n, componentId: l, state: r } = e;
        s.set(t, n),
            d.set(n, {
                messageId: t,
                componentId: l,
            }),
            p(t, l, r);
    },
    SET_INTERACTION_COMPONENT_STATE: function (e) {
        let { rootContainerId: t, componentId: n, state: l } = e;
        p(t, n, l);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        if (!o.has(t)) return !1;
        E(t);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || !o.has(t.id)) return !1;
        E(t.id);
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = d.get(t);
        if (null == n) return !1;
        s.delete(n.messageId), d.delete(t), c++;
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = d.get(t);
        if (null == n) return !1;
        !(function (e) {
            let { componentId: t, messageId: n } = e,
                l = o.get(n);
            null == l || !l.has(t) || (l.delete(t), 0 === l.size && o.delete(n), c++);
        })(n);
    },
    CLEAR_INTERACTION_MODAL_STATE: function (e) {
        let { customId: t } = e;
        o.delete(t), c++;
    },
});
