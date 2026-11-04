n.d(
    t,
    {},
    {
        K: class {
            promise;
            resolve;
            reject;
            constructor() {
                this.promise = new Promise((e, t) => {
                    ((this.resolve = e), (this.reject = t));
                });
            }
        },
    },
);
