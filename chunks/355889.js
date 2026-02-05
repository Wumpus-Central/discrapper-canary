"use strict";
n.d(t, { x: () => a });
var r = n(510801),
    i = n(419709);
class a {
    categories;
    userDiscounts;
    constructor(e) {
        (this.categories = e.categories.map((e) => r.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => i.T.fromServer(e)));
    }
    static fromServer(e) {
        return new a(e);
    }
}
