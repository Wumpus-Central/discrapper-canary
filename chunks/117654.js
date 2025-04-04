s.d(e, { O: () => d });
var n = s(573736),
    i = s(592014),
    r = s(307854),
    o = s(356442);
class a {
    constructor(t, e) {
        let s, n;
        (s = t || new r.s()), (n = e || new r.s()), (this._stack = [{ scope: s }]), (this._isolationScope = n);
    }
    withScope(t) {
        let e,
            s = this._pushScope();
        try {
            e = t(s);
        } catch (t) {
            throw (this._popScope(), t);
        }
        return (0, n.J8)(e)
            ? e.then(
                  (t) => (this._popScope(), t),
                  (t) => {
                      throw (this._popScope(), t);
                  }
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
        return (
            this._stack.push({
                client: this.getClient(),
                scope: t
            }),
            t
        );
    }
    _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
    }
}
function c() {
    let t = (0, o.c)(),
        e = (0, o.q)(t);
    return (e.stack = e.stack || new a((0, i.X)(), (0, i.T)()));
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
        getIsolationScope: () => c().getIsolationScope()
    };
}
