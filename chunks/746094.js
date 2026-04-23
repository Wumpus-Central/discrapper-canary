n.d(t, { A: () => d });
var i = n(73153),
    r = n(272355),
    a = n(627363),
    l = n(800828),
    s = n(652215);
class o extends r.A {
    _initialize() {
        i.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        i.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen = () => {
        let e = l.A.getGameRelationships(),
            t = new Set();
        e.values().forEach((e) => {
            e.type === s.eA$.PENDING_INCOMING && t.add(e.applicationId);
        }),
            a.Ay.fetchApplications(Array.from(t));
    };
    destroy() {
        i.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
}
let d = new o();
