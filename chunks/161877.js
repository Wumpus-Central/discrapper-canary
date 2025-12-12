n.d(t, {
    R: () =>
        function e(t, n, _, s = 0) {
            return new r.cW((r, c) => {
                let E = t[s];
                if (null === n || "function" != typeof E) r(n);
                else {
                    let l = E({ ...n }, _);
                    o.X && E.id && null === l && i.kg.log(`Event processor "${E.id}" dropped event`),
                        (0, a.J8)(l)
                            ? l.then((n) => e(t, n, _, s + 1).then(r)).then(null, c)
                            : e(t, l, _, s + 1)
                                  .then(r)
                                  .then(null, c);
                }
            });
        },
});
var r = n(959036),
    i = n(98076),
    a = n(661822),
    o = n(4757);
