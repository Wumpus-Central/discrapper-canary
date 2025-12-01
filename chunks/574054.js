r.d(t, {
    R: () =>
        function e(t, r, _, s = 0) {
            return new n.cW((n, c) => {
                let E = t[s];
                if (null === r || "function" != typeof E) n(r);
                else {
                    let l = E({ ...r }, _);
                    o.X && E.id && null === l && a.kg.log(`Event processor "${E.id}" dropped event`),
                        (0, i.J8)(l)
                            ? l.then((r) => e(t, r, _, s + 1).then(n)).then(null, c)
                            : e(t, l, _, s + 1)
                                  .then(n)
                                  .then(null, c);
                }
            });
        },
});
var n = r(928541),
    a = r(622916),
    i = r(573736),
    o = r(255768);
