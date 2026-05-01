r.d(s, { A: () => o });
var e = r(315069),
    i = r(112589);
class o extends e.A {
    subscriptions;
    otps;
    static createFromServer(t) {
        return new o({
            subscriptions: t.subscriptions.map((t) => i.A.createFromServer(o.convertStoreListing(t))),
            otps: t.otps.map((t) => i.A.createFromServer(o.convertStoreListing(t))),
        });
    }
    static convertStoreListing(t) {
        return { ...t, summary: t.summary.default, description: t.description?.default };
    }
    constructor(t) {
        super(), (this.subscriptions = t.subscriptions), (this.otps = t.otps);
    }
}
