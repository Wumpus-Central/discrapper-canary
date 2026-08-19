n.d(t, { A: () => r });
var i = n(435558),
    l = n(842901);
let r = (0, i.memoize)(
    function (e) {
        let { theme: t, layoutType: n } = e;
        return (0, l.E)(t, n);
    },
    (e) => {
        let { theme: t, layoutType: n } = e;
        return `${t}:${n}`;
    },
);
