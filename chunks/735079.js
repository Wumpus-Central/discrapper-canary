n.d(e, { J: () => i });
var r = n(601964);
class i extends r.ZP {
    constructor(t) {
        var e, n;
        super(t),
            (n = void 0),
            (e = 'approximateMemberCount') in this
                ? Object.defineProperty(this, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = n),
            (this.approximateMemberCount = t.approximate_member_count);
    }
}
