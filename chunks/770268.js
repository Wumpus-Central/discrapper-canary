var s = p(826059),
    a = p(46054);
p.d(
    e,
    {},
    {
        f: function (t) {
            let e = a.A.parsePollToAST(t, !0);
            return (
                (0, s.mm)(e, (t) => {
                    "timestamp" === t.type && (t.content = t.formatted);
                }),
                (0, s.$)(e)
            );
        },
    },
);
