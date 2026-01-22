n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(73153),
    i = n(272355),
    l = n(627363),
    a = n(800828),
    s = n(652215);
class o extends i.A {
    _initialize() {
        r.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        r.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    destroy() {
        r.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handlePostConnectionOpen", () => {
                let e = a.A.getGameRelationships(),
                    t = new Set();
                e.values().forEach((e) => {
                    e.type === s.eA$.PENDING_INCOMING && t.add(e.applicationId);
                }),
                    l.Ay.fetchApplications(Array.from(t));
            });
    }
}
let c = new o();
