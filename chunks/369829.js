n.d(t, { Z: () => o });
var r = n(49691),
    i = { passive: !0 };
let o = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: function (e) {
        var t = e.state,
            n = e.instance,
            o = e.options,
            a = o.scroll,
            s = void 0 === a || a,
            l = o.resize,
            c = void 0 === l || l,
            u = (0, r.Z)(t.elements.popper),
            d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
            s &&
                d.forEach(function (e) {
                    e.addEventListener('scroll', n.update, i);
                }),
            c && u.addEventListener('resize', n.update, i),
            function () {
                s &&
                    d.forEach(function (e) {
                        e.removeEventListener('scroll', n.update, i);
                    }),
                    c && u.removeEventListener('resize', n.update, i);
            }
        );
    },
    data: {}
};
