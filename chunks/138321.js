n.d(e, { A: () => I });
var l = n(17928),
    i = n(228366);
class r extends Map {
    maxSize;
    constructor(t) {
        super(), (this.maxSize = t);
    }
    set(t, e) {
        return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(t, e);
    }
}
let a = new r(196606),
    u = 0,
    o = new r(196606),
    s = new r(196606);
function d(t, e, n) {
    let l = a.get(t) ?? new Map();
    l.set(e, n), a.set(t, l), u++;
}
function c(t) {
    let e = o.get(t);
    null != e && s.delete(e), o.delete(t), a.delete(t), u++;
}
class E extends l.Ay.Store {
    static displayName = "LocalInteractionComponentStateStore";
    getInteractionComponentStates() {
        return a;
    }
    getInteractionComponentStateVersion() {
        return u;
    }
    getInteractionComponentState(t, e) {
        let n = a.get(t);
        return null == n ? null : (n.get(e) ?? null);
    }
}
let I = new E(i.h, {
    LOGOUT: function () {
        a.clear(), o.clear(), s.clear(), u++;
    },
    QUEUE_INTERACTION_COMPONENT_STATE: function (t) {
        let { messageId: e, nonce: n, componentId: l, state: i } = t;
        o.set(e, n), s.set(n, { messageId: e, componentId: l }), d(e, l, i);
    },
    SET_INTERACTION_COMPONENT_STATE: function (t) {
        let { rootContainerId: e, componentId: n, state: l } = t;
        d(e, n, l);
    },
    MESSAGE_DELETE: function (t) {
        let { id: e } = t;
        if (!a.has(e)) return !1;
        c(e);
    },
    MESSAGE_UPDATE: function (t) {
        let { message: e } = t;
        if (null == e.id || !a.has(e.id)) return !1;
        c(e.id);
    },
    INTERACTION_SUCCESS: function (t) {
        let { nonce: e } = t;
        if (null == e) return !1;
        let n = s.get(e);
        if (null == n) return !1;
        o.delete(n.messageId), s.delete(e), u++;
    },
    INTERACTION_FAILURE: function (t) {
        let { nonce: e } = t;
        if (null == e) return !1;
        let n = s.get(e);
        if (null == n) return !1;
        !(function (t) {
            let { componentId: e, messageId: n } = t,
                l = a.get(n);
            null == l || !l.has(e) || (l.delete(e), 0 === l.size && a.delete(n), u++);
        })(n);
    },
    CLEAR_INTERACTION_MODAL_STATE: function (t) {
        let { customId: e } = t;
        a.delete(e), u++;
    },
});
