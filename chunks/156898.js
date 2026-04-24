"use strict";
n.d(t, { A: () => s });
var i = n(315069),
    a = n(112589);
class s extends i.A {
    subscriptions;
    otps;
    static createFromServer(e) {
        return new s({
            subscriptions: e.subscriptions.map((e) => a.A.createFromServer(s.convertStoreListing(e))),
            otps: e.otps.map((e) => a.A.createFromServer(s.convertStoreListing(e))),
        });
    }
    static convertStoreListing(e) {
        return { ...e, summary: e.summary.default, description: e.description?.default };
    }
    constructor(e) {
        super(), (this.subscriptions = e.subscriptions), (this.otps = e.otps);
    }
}
