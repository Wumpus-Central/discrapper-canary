n.d(t, { Z: () => s });
var r = n(740078),
    i = n(510104);
function o(e, t, n) {
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
function a(e) {
    return [r.we, r.F2, r.I, r.t$].some(function (t) {
        return e[t] >= 0;
    });
}
let s = {
    name: 'hide',
    enabled: !0,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: function (e) {
        var t = e.state,
            n = e.name,
            r = t.rects.reference,
            s = t.rects.popper,
            l = t.modifiersData.preventOverflow,
            c = (0, i.Z)(t, { elementContext: 'reference' }),
            u = (0, i.Z)(t, { altBoundary: !0 }),
            d = o(c, r),
            f = o(u, s, l),
            _ = a(d),
            p = a(f);
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
