"use strict";
n.d(t, { A: () => l, j: () => o });
var r,
    i = n(315069),
    s = n(260811),
    a = n(611010),
    o = (((r = {}).WISHLIST = "WISHLIST"), (r.RECOMMENDATION = "RECOMMENDATION"), r);
class l extends i.A {
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
