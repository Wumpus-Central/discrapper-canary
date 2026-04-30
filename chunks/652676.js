r.d(e, { A: () => O, N: () => E });
var s,
    o = r(17928),
    i = r(228366),
    n = r(315069),
    a = r(112589);
class c extends n.A {
    subscriptions;
    otps;
    static createFromServer(t) {
        return new c({
            subscriptions: t.subscriptions.map((t) => a.A.createFromServer(c.convertStoreListing(t))),
            otps: t.otps.map((t) => a.A.createFromServer(c.convertStoreListing(t))),
        });
    }
    static convertStoreListing(t) {
        return { ...t, summary: t.summary.default, description: t.description?.default };
    }
    constructor(t) {
        super(), (this.subscriptions = t.subscriptions), (this.otps = t.otps);
    }
}
var u = r(67480),
    A = r(328968);
let p = new Map(),
    T = new Map();
var E =
    (((s = {})[(s.NONE = 0)] = "NONE"),
    (s[(s.FETCHING = 1)] = "FETCHING"),
    (s[(s.FETCHED = 2)] = "FETCHED"),
    (s[(s.FAILED = 3)] = "FAILED"),
    s);
let _ = new c({ subscriptions: [], otps: [] });
class C extends o.Ay.Store {
    static displayName = "ApplicationStoreDirectoryStore";
    initialize() {
        this.waitFor(u.A, A.A);
    }
    hasStorefront(t) {
        return p.has(t);
    }
    getStoreLayout(t) {
        return p.get(t) ?? _;
    }
    getFetchStatus(t) {
        return p.has(t) ? 2 : (T.get(t) ?? 0);
    }
}
let O = new C(i.h, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (t) {
        let { applicationId: e, layout: r } = t;
        p.set(e, c.createFromServer(r)), T.delete(e);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (t) {
        let { applicationId: e } = t;
        T.set(e, 3);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (t) {
        let { applicationId: e } = t;
        T.set(e, 1);
    },
});
