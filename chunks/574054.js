_.d(e, {
    R: () =>
        function t(e, _, E, i = 0) {
            return new a.cW((a, c) => {
                let s = e[i];
                if (null === _ || "function" != typeof s) a(_);
                else {
                    let l = s({ ..._ }, E);
                    o.X && s.id && null === l && r.kg.log(`Event processor "${s.id}" dropped event`),
                        (0, n.J8)(l)
                            ? l.then((_) => t(e, _, E, i + 1).then(a)).then(null, c)
                            : t(e, l, E, i + 1)
                                  .then(a)
                                  .then(null, c);
                }
            });
        },
});
var a = _(928541),
    r = _(622916),
    n = _(573736),
    o = _(255768);
