n.d(t, { A: () => s });
var l = n(435558),
    i = n(842901);
let s = (0, l.memoize)(
    function (e) {
        let { theme: t, layoutType: n } = e;
        return (0, i.E)(t, n);
    },
    (e) => {
        let { theme: t, layoutType: n } = e;
        return `${t}:${n}`;
    },
);
