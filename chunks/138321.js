n.d(e, { A: () => I });
var l = n(17928),
    i = n(228366);
class a extends Map {
    maxSize;
    constructor(t) {
        super(), (this.maxSize = t);
    }
    set(t, e) {
        return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(t, e);
    }
}
let u = new a(196606),
    o = 0,
    r = new a(196606),
    d = new a(196606);
function s(t, e, n) {
    let l = u.get(t) ?? new Map();
    l.set(e, n), u.set(t, l), o++;
}
function c(t) {
    let e = r.get(t);
    null != e && d.delete(e), r.delete(t), u.delete(t), o++;
}
class p extends l.Ay.Store {
    static displayName = "LocalInteractionComponentStateStore";
    getInteractionComponentStates() {
        return u;
    }
    getInteractionComponentStateVersion() {
        return o;
    }
    getInteractionComponentState(t, e) {
        let n = u.get(t);
        return null == n ? null : (n.get(e) ?? null);
    }
}
let I = new p(i.h, {
    LOGOUT: function () {
        u.clear(), r.clear(), d.clear(), o++;
    },
    QUEUE_INTERACTION_COMPONENT_STATE: function (t) {
        let { messageId: e, nonce: n, componentId: l, state: i } = t;
        r.set(e, n), d.set(n, { messageId: e, componentId: l }), s(e, l, i);
    },
    SET_INTERACTION_COMPONENT_STATE: function (t) {
        let { rootContainerId: e, componentId: n, state: l } = t;
        s(e, n, l);
    },
    MESSAGE_DELETE: function (t) {
        let { id: e } = t;
        if (!u.has(e)) return !1;
        c(e);
    },
    MESSAGE_UPDATE: function (t) {
        let { message: e } = t;
        if (null == e.id || !u.has(e.id)) return !1;
        c(e.id);
    },
    INTERACTION_SUCCESS: function (t) {
        let { nonce: e } = t;
        if (null == e) return !1;
        let n = d.get(e);
        if (null == n) return !1;
        r.delete(n.messageId), d.delete(e), o++;
    },
    INTERACTION_FAILURE: function (t) {
        let { nonce: e } = t;
        if (null == e) return !1;
        let n = d.get(e);
        if (null == n) return !1;
        !(function (t) {
            let { componentId: e, messageId: n } = t,
                l = u.get(n);
            null == l || !l.has(e) || (l.delete(e), 0 === l.size && u.delete(n), o++);
        })(n);
    },
    CLEAR_INTERACTION_MODAL_STATE: function (t) {
        let { customId: e } = t;
        u.delete(e), o++;
    },
});
