var n = r(67551),
    i = r(802649);
let o = new WeakMap();
r.d(
    t,
    {},
    {
        EG: function (e) {
            return o.get(e);
        },
        N9: function (e) {
            return (0, n.lg)() ? e.altKey : e.ctrlKey;
        },
        au: function (e, t) {
            let r = `[data-key="${CSS.escape(String(t))}"]`,
                n = e.current?.dataset.collection;
            return (n && (r = `[data-collection="${CSS.escape(n)}"]${r}`), e.current?.querySelector(r));
        },
        j5: function (e) {
            let t = (0, i.Bi)();
            return (o.set(e, t), t);
        },
    },
);
