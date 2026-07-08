s.d(e, { h: () => l });
var i = s(75109),
    n = s(128377),
    r = s(978862),
    o = s(875565);
class a {
    constructor(t, e) {
        let s, i;
        (s = t || new n.H()), (i = e || new n.H()), (this._stack = [{ scope: s }]), (this._isolationScope = i);
    }
    withScope(t) {
        let e,
            s = this._pushScope();
        try {
            e = t(s);
        } catch (t) {
            throw (this._popScope(), t);
        }
        return (0, o.Qg)(e)
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
    let t = (0, i.E)(),
        e = (0, i.S)(t);
    return (e.stack =
        e.stack ||
        new a(
            (0, r.B)("defaultCurrentScope", () => new n.H()),
            (0, r.B)("defaultIsolationScope", () => new n.H()),
        ));
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
function l(t) {
    let e = (0, i.S)(t);
    return e.acs
        ? e.acs
        : {
              withIsolationScope: _,
              withScope: h,
              withSetScope: u,
              withSetIsolationScope: (t, e) => _(e),
              getCurrentScope: () => c().getScope(),
              getIsolationScope: () => c().getIsolationScope(),
          };
}
