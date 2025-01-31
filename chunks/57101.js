n.d(t, { Z: () => a });
var i = n(392711),
    l = n(897325);
let a = (0, i.memoize)(
    function (e) {
        let { theme: t, layoutType: n } = e;
        return (0, l._)(t, n);
    },
    (e) => {
        let { theme: t, layoutType: n } = e;
        return ''.concat(t, ':').concat(n);
    }
);
