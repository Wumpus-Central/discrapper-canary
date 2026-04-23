r.d(t, {
    A: () =>
        function e(t) {
            for (let r of Object.values(t)) Object.isFrozen(r) || e(r);
            return Object.freeze(t);
        },
});
