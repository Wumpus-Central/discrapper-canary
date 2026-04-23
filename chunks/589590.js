n.d(t, { A: () => a });
var i = n(735438),
    l = n(842901);
let a = (0, i.memoize)(
    function (e) {
        let { theme: t, layoutType: n } = e;
        return (0, l.E)(t, n);
    },
    (e) => {
        let { theme: t, layoutType: n } = e;
        return `${t}:${n}`;
    },
);
