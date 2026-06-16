"use strict";
n.d(t, { A: () => l, j: () => o });
var i,
    r = n(315069),
    s = n(32731),
    a = n(395671),
    o = (((i = {}).WISHLIST = "WISHLIST"), (i.RECOMMENDATION = "RECOMMENDATION"), i);
class l extends r.A {
    skus;
    skusToUserAndReason;
    applications;
    constructor(e) {
        super(),
            (this.skus = e.skus.map((e) => s.A.createFromServer(e))),
            (this.skusToUserAndReason = Object.fromEntries(
                Object.entries(e.skus_to_user_and_reason).map((e) => {
                    let [t, n] = e;
                    return [t, n];
                }),
            )),
            (this.applications = e.applications.map((e) => a.Ay.createFromServer(e)));
    }
    static fromServer(e) {
        return new l(e);
    }
}
