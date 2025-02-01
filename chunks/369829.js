n.d(t, { Z: () => a });
var i = n(49691),
    r = { passive: !0 };
let a = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: function (e) {
        var t = e.state,
            n = e.instance,
            a = e.options,
            s = a.scroll,
            o = void 0 === s || s,
            l = a.resize,
            u = void 0 === l || l,
            c = (0, i.Z)(t.elements.popper),
            d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
            o &&
                d.forEach(function (e) {
                    e.addEventListener('scroll', n.update, r);
                }),
            u && c.addEventListener('resize', n.update, r),
            function () {
                o &&
                    d.forEach(function (e) {
                        e.removeEventListener('scroll', n.update, r);
                    }),
                    u && c.removeEventListener('resize', n.update, r);
            }
        );
    },
    data: {}
};
