"use strict";
n.d(t, { A: () => o, j: () => s });
var r = n(315069),
    i = n(611010),
    a = n(731935),
    s = (function (e) {
        return (e.WISHLIST = "WISHLIST"), (e.RECOMMENDATION = "RECOMMENDATION"), e;
    })({});
class o extends r.A {
    skus;
    skusToUserAndReason;
    applications;
    constructor(e) {
        super(),
            (this.skus = e.skus.map((e) => a.A.createFromServer(e))),
            (this.skusToUserAndReason = Object.fromEntries(
                Object.entries(e.skus_to_user_and_reason).map((e) => {
                    let [t, n] = e;
                    return [t, n];
                }),
            )),
            (this.applications = e.applications.map((e) => i.Ay.createFromServer(e)));
    }
    static fromServer(e) {
        return new o(e);
    }
}
