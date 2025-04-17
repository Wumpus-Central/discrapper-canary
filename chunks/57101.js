n.d(t, { Z: () => l });
var r = n(392711),
    i = n(897325);
let l = (0, r.memoize)(
    function (e) {
        let { theme: t, layoutType: n } = e;
        return (0, i._)(t, n);
    },
    (e) => {
        let { theme: t, layoutType: n } = e;
        return ''.concat(t, ':').concat(n);
    }
);
