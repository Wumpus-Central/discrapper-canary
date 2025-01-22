r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(81825),
    a = r(156570);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class s extends i.Z {
    static createFromServer(e) {
        return new s({
            subscriptions: e.subscriptions.map((e) => a.Z.createFromServer(s.convertStoreListing(e))),
            otps: e.otps.map((e) => a.Z.createFromServer(s.convertStoreListing(e)))
        });
    }
    static convertStoreListing(e) {
        var n;
        return {
            ...e,
            summary: e.summary.default,
            description: null === (n = e.description) || void 0 === n ? void 0 : n.default
        };
    }
    constructor(e) {
        super(), o(this, 'subscriptions', void 0), o(this, 'otps', void 0), (this.subscriptions = e.subscriptions), (this.otps = e.otps);
    }
}
