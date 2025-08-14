n.d(t, { Z: () => c }), n(388685);
var r = n(570140),
    i = n(317770),
    l = n(728345),
    a = n(91896),
    o = n(981631);
class s extends i.Z {
    _initialize() {
        r.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        r.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    destroy() {
        r.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
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
                let e = a.Z.getGameRelationships(),
                    t = new Set();
                e.values().forEach((e) => {
                    e.type === o.OGo.PENDING_INCOMING && t.add(e.applicationId);
                }),
                    l.ZP.fetchApplications(Array.from(t));
            });
    }
}
let c = new s();
