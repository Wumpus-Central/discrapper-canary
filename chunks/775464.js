s.d(e, { z: () => d });
var i = s(887525),
    r = s(128377),
    n = s(875565),
    o = s(75109);
class a {
    constructor(t, e) {
        let s, i;
        (s = t || new r.H()), (i = e || new r.H()), (this._stack = [{ scope: s }]), (this._isolationScope = i);
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
function h() {
    let t = (0, o.E)(),
        e = (0, o.S)(t);
    return (e.stack = e.stack || new a((0, i.r)(), (0, i.q)()));
}
function c(t) {
    return h().withScope(t);
}
function u(t, e) {
    let s = h();
    return s.withScope(() => ((s.getStackTop().scope = t), e(t)));
}
function _(t) {
    return h().withScope(() => t(h().getIsolationScope()));
}
function d() {
    return {
        withIsolationScope: _,
        withScope: c,
        withSetScope: u,
        withSetIsolationScope: (t, e) => _(e),
        getCurrentScope: () => h().getScope(),
        getIsolationScope: () => h().getIsolationScope(),
    };
}
