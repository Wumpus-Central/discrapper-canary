a.d(t, { A: () => i });
var n = a(315069),
    r = a(112589);
class i extends n.A {
    subscriptions;
    otps;
    static createFromServer(e) {
        return new i({
            subscriptions: e.subscriptions.map((e) => r.A.createFromServer(i.convertStoreListing(e))),
            otps: e.otps.map((e) => r.A.createFromServer(i.convertStoreListing(e))),
        });
    }
    static convertStoreListing(e) {
        return { ...e, summary: e.summary.default, description: e.description?.default };
    }
    constructor(e) {
        super(), (this.subscriptions = e.subscriptions), (this.otps = e.otps);
    }
}
