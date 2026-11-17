n.d(t, { h: () => p });
var r = n(75109),
    i = n(128377),
    o = n(978862),
    a = n(875565);
class s {
    constructor(e, t) {
        let n, r;
        ((n = e || new i.H()), (r = t || new i.H()), (this._stack = [{ scope: n }]), (this._isolationScope = r));
    }
    withScope(e) {
        let t,
            n = this._pushScope();
        try {
            t = e(n);
        } catch (e) {
            throw (this._popScope(), e);
        }
        return (0, a.Qg)(t)
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
        return (this._stack.push({ client: this.getClient(), scope: e }), e);
    }
    _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
    }
}
function l() {
    let e = (0, r.E)(),
        t = (0, r.S)(e);
    return (t.stack =
        t.stack ||
        new s(
            (0, o.B)("defaultCurrentScope", () => new i.H()),
            (0, o.B)("defaultIsolationScope", () => new i.H()),
        ));
}
function c(e) {
    return l().withScope(e);
}
function u(e, t) {
    let n = l();
    return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function d(e) {
    return l().withScope(() => e(l().getIsolationScope()));
}
function p(e) {
    let t = (0, r.S)(e);
    return t.acs
        ? t.acs
        : {
              withIsolationScope: d,
              withScope: c,
              withSetScope: u,
              withSetIsolationScope: (e, t) => d(t),
              getCurrentScope: () => l().getScope(),
              getIsolationScope: () => l().getIsolationScope(),
          };
}
