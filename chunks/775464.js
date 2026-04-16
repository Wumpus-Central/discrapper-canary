s.d(e, { z: () => d });
var r = s(887525),
    i = s(128377),
    n = s(875565),
    o = s(75109);
class a {
    constructor(t, e) {
        let s, r;
        (s = t || new i.H()), (r = e || new i.H()), (this._stack = [{ scope: s }]), (this._isolationScope = r);
    }
    withScope(t) {
        let e,
            s = this._pushScope();
        try {
            e = t(s);
        } catch (t) {
            throw (this._popScope(), t);
        }
        return (0, n.Qg)(e)
            ? e.then(
                  (t) => (this._popScope(), t),
                  (t) => {
                      throw (this._popScope(), t);
                  },
              )
            : (this._popScope(), e);
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
        let t = this.getScope().clone();
        return this._stack.push({ client: this.getClient(), scope: t }), t;
    }
    _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
    }
}
function c() {
    let t = (0, o.E)(),
        e = (0, o.S)(t);
    return (e.stack = e.stack || new a((0, r.r)(), (0, r.q)()));
}
function h(t) {
    return c().withScope(t);
}
function u(t, e) {
    let s = c();
    return s.withScope(() => ((s.getStackTop().scope = t), e(t)));
}
function _(t) {
    return c().withScope(() => t(c().getIsolationScope()));
}
function d() {
    return {
        withIsolationScope: _,
        withScope: h,
        withSetScope: u,
        withSetIsolationScope: (t, e) => _(e),
        getCurrentScope: () => c().getScope(),
        getIsolationScope: () => c().getIsolationScope(),
    };
}
