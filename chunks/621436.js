var p = i(46653),
    s = i(652215);
i.d(
    t,
    {},
    {
        A: function (e) {
            return s.kvI.CALLABLE.has(e.type)
                ? e.recipients?.length === 1
                    ? e.recipients[0]
                    : null
                : p.default.getId();
        },
    },
);
