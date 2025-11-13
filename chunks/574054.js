a.d(e, {
    R: () =>
        function t(e, a, i, E = 0) {
            return new r.cW((r, c) => {
                let s = e[E];
                if (null === a || "function" != typeof s) r(a);
                else {
                    let l = s({ ...a }, i);
                    o.X && s.id && null === l && _.kg.log(`Event processor "${s.id}" dropped event`),
                        (0, n.J8)(l)
                            ? l.then((a) => t(e, a, i, E + 1).then(r)).then(null, c)
                            : t(e, l, i, E + 1)
                                  .then(r)
                                  .then(null, c);
                }
            });
        },
});
var r = a(928541),
    _ = a(622916),
    n = a(573736),
    o = a(255768);
