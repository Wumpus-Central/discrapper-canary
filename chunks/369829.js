var i = r(49691),
    a = { passive: !0 };
function o(e) {
    var n = e.state,
        r = e.instance,
        o = e.options,
        s = o.scroll,
        l = void 0 === s || s,
        u = o.resize,
        c = void 0 === u || u,
        d = (0, i.Z)(n.elements.popper),
        f = [].concat(n.scrollParents.reference, n.scrollParents.popper);
    return (
        l &&
            f.forEach(function (e) {
                e.addEventListener('scroll', r.update, a);
            }),
        c && d.addEventListener('resize', r.update, a),
        function () {
            l &&
                f.forEach(function (e) {
                    e.removeEventListener('scroll', r.update, a);
                }),
                c && d.removeEventListener('resize', r.update, a);
        }
    );
}
n.Z = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: o,
    data: {}
};
