"use strict";
n.d(t, { K: () => r });
class r {
    promise;
    resolve;
    reject;
    constructor() {
        this.promise = new Promise((e, t) => {
            (this.resolve = e), (this.reject = t);
        });
    }
}
