a.d(e, {
    R: () =>
        function t(e, a, i, c = 0) {
            return new r.cW((r, s) => {
                let E = e[c];
                if (null === a || 'function' != typeof E) r(a);
                else {
                    let l = E({ ...a }, i);
                    _.X && E.id && null === l && n.kg.log(`Event processor "${E.id}" dropped event`),
                        (0, o.J8)(l)
                            ? l.then((a) => t(e, a, i, c + 1).then(r)).then(null, s)
                            : t(e, l, i, c + 1)
                                  .then(r)
                                  .then(null, s);
                }
            });
        }
});
var r = a(928541),
    n = a(622916),
    o = a(573736),
    _ = a(255768);
