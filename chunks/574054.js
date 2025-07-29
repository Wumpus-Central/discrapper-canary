a.d(e, {
    R: () =>
        function t(e, a, i, c = 0) {
            return new r.cW((r, E) => {
                let s = e[c];
                if (null === a || 'function' != typeof s) r(a);
                else {
                    let l = s({ ...a }, i);
                    (o.X && s.id && null === l && _.kg.log(`Event processor "${s.id}" dropped event`),
                        (0, n.J8)(l)
                            ? l.then((a) => t(e, a, i, c + 1).then(r)).then(null, E)
                            : t(e, l, i, c + 1)
                                  .then(r)
                                  .then(null, E));
                }
            });
        }
});
var r = a(928541),
    _ = a(622916),
    n = a(573736),
    o = a(255768);
