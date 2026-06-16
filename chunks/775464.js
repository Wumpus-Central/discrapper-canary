"use strict";
n.d(t, { z: () => _ });
var i = n(887525),
    r = n(128377),
    s = n(875565),
    a = n(75109);
class o {
    constructor(e, t) {
        let n, i;
        (n = e || new r.H()), (i = t || new r.H()), (this._stack = [{ scope: n }]), (this._isolationScope = i);
    }
    withScope(e) {
        let t,
            n = this._pushScope();
        try {
            t = e(n);
        } catch (e) {
            throw (this._popScope(), e);
        }
        return (0, s.Qg)(t)
            ? t.then(
                  (e) => (this._popScope(), e),
                  (e) => {
                      throw (this._popScope(), e);
                  },
              )
            : (this._popScope(), t);
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getIsolationScope() {
        return this._isolationScope;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    _pushScope() {
        let e = this.getScope().clone();
        return this._stack.push({ client: this.getClient(), scope: e }), e;
    }
    _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
    }
}
function l() {
    let e = (0, a.E)(),
        t = (0, a.S)(e);
    return (t.stack = t.stack || new o((0, i.r)(), (0, i.q)()));
}
function u(e) {
    return l().withScope(e);
}
function c(e, t) {
    let n = l();
    return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function d(e) {
    return l().withScope(() => e(l().getIsolationScope()));
}
function _() {
    return {
        withIsolationScope: d,
        withScope: u,
        withSetScope: c,
        withSetIsolationScope: (e, t) => d(t),
        getCurrentScope: () => l().getScope(),
        getIsolationScope: () => l().getIsolationScope(),
    };
}
