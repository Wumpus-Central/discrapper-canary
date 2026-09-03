n.d(t, { A: () => o, j: () => l });
var i,
    r = n(315069),
    a = n(32731),
    s = n(395671),
    l = (((i = {}).WISHLIST = "WISHLIST"), (i.RECOMMENDATION = "RECOMMENDATION"), i);
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
            (this.applications = e.applications.map((e) => s.Ay.createFromServer(e)));
    }
    static fromServer(e) {
        return new o(e);
    }
}
