"use strict";
n.d(t, { x: () => a });
var r = n(442007),
    i = n(510801),
    s = n(419709);
class a {
    categories;
    collections;
    userDiscounts;
    constructor(e) {
        (this.categories = e.categories.map((e) => i.A.fromServer(e))),
            (this.collections = e.collections.map((e) => r.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => s.T.fromServer(e)));
    }
    static fromServer(e) {
        return new a(e);
    }
}
