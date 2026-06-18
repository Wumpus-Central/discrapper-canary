n.d(t, { A: () => r });
var l = n(735438),
    i = n(842901);
let r = (0, l.memoize)(
    function (e) {
        let { theme: t, layoutType: n } = e;
        return (0, i.E)(t, n);
    },
    (e) => {
        let { theme: t, layoutType: n } = e;
        return `${t}:${n}`;
    },
);
