n.d(t, { Z: () => o });
var i = n(740078),
    r = n(510104);
function a(e, t, n) {
    return (
        void 0 === n &&
            (n = {
                x: 0,
                y: 0
            }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    );
}
function s(e) {
    return [i.we, i.F2, i.I, i.t$].some(function (t) {
        return e[t] >= 0;
    });
}
let o = {
    name: 'hide',
    enabled: !0,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: function (e) {
        var t = e.state,
            n = e.name,
            i = t.rects.reference,
            o = t.rects.popper,
            l = t.modifiersData.preventOverflow,
            u = (0, r.Z)(t, { elementContext: 'reference' }),
            c = (0, r.Z)(t, { altBoundary: !0 }),
            d = a(u, i),
            f = a(c, o, l),
            _ = s(d),
            p = s(f);
        (t.modifiersData[n] = {
            referenceClippingOffsets: d,
            popperEscapeOffsets: f,
            isReferenceHidden: _,
            hasPopperEscaped: p
        }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                'data-popper-reference-hidden': _,
                'data-popper-escaped': p
            }));
    }
};
