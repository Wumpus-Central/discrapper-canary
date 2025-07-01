a.d(e, {
    R: () =>
        function t(e, a, i, c = 0) {
            return new r.cW((r, s) => {
                let E = e[c];
                if (null === a || 'function' != typeof E) r(a);
                else {
                    let l = E({ ...a }, i);
                    (o.X && E.id && null === l && _.kg.log(`Event processor "${E.id}" dropped event`),
                        (0, n.J8)(l)
                            ? l.then((a) => t(e, a, i, c + 1).then(r)).then(null, s)
                            : t(e, l, i, c + 1)
                                  .then(r)
                                  .then(null, s));
                }
            });
        }
});
var r = a(928541),
    _ = a(622916),
    n = a(573736),
    o = a(255768);
