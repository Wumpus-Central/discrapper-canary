n.d(t, { A: () => a });
var i = n(315069),
    l = n(112589);
class a extends i.A {
    subscriptions;
    otps;
    static createFromServer(e) {
        return new a({
            subscriptions: e.subscriptions.map((e) => l.A.createFromServer(a.convertStoreListing(e))),
            otps: e.otps.map((e) => l.A.createFromServer(a.convertStoreListing(e))),
        });
    }
    static convertStoreListing(e) {
        return { ...e, summary: e.summary.default, description: e.description?.default };
    }
    constructor(e) {
        super(), (this.subscriptions = e.subscriptions), (this.otps = e.otps);
    }
}
