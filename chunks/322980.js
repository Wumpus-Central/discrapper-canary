n.d(t, {
    A: () => I,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(732134);

function o(e, t, n) {
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
let l = 196606,
    c = new s.A(l),
    u = 0,
    d = new s.A(l),
    f = new s.A(l);

function p(e, t, n) {
    var r;
    let i = null != (r = c.get(e)) ? r : new Map();
    i.set(t, n), c.set(e, i), u++;
}

function _(e) {
    let t = d.get(e);
    null != t && f.delete(t), d.delete(e), c.delete(e), u++;
}

function h(e) {
    let { componentId: t, messageId: n } = e,
        r = c.get(n);
    if (null == r || !r.has(t)) return !1;
    r.delete(t), 0 === r.size && c.delete(n), u++;
}

function m() {
    c.clear(), d.clear(), f.clear(), u++;
}

function g(e) {
    let { messageId: t, nonce: n, componentId: r, state: i } = e;
    d.set(t, n),
        f.set(n, {
            messageId: t,
            componentId: r,
        }),
        p(t, r, i);
}

function E(e) {
    let { rootContainerId: t, componentId: n, state: r } = e;
    p(t, n, r);
}

function b(e) {
    let { message: t } = e;
    if (null == t.id || !c.has(t.id)) return !1;
    _(t.id);
}

function y(e) {
    let { id: t } = e;
    if (!c.has(t)) return !1;
    _(t);
}

function O(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = f.get(t);
    if (null == n) return !1;
    d.delete(n.messageId), f.delete(t), u++;
}

function A(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = f.get(t);
    if (null == n) return !1;
    h(n);
}

function v(e) {
    let { customId: t } = e;
    c.delete(t), u++;
}
class S extends (r = i.Ay.Store) {
    getInteractionComponentStates() {
        return c;
    }
    getInteractionComponentStateVersion() {
        return u;
    }
    getInteractionComponentState(e, t) {
        var n;
        let r = c.get(e);
        return null == r ? null : null != (n = r.get(t)) ? n : null;
    }
}
o(S, "displayName", "LocalInteractionComponentStateStore");
let I = new S(a.h, {
    LOGOUT: m,
    QUEUE_INTERACTION_COMPONENT_STATE: g,
    SET_INTERACTION_COMPONENT_STATE: E,
    MESSAGE_DELETE: y,
    MESSAGE_UPDATE: b,
    INTERACTION_SUCCESS: O,
    INTERACTION_FAILURE: A,
    CLEAR_INTERACTION_MODAL_STATE: v,
});
