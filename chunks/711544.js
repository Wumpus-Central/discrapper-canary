var i = r(740078),
    a = r(510104);
function o(e, n, r) {
    return (
        void 0 === r &&
            (r = {
                x: 0,
                y: 0
            }),
        {
            top: e.top - n.height - r.y,
            right: e.right - n.width + r.x,
            bottom: e.bottom - n.height + r.y,
            left: e.left - n.width - r.x
        }
    );
}
function s(e) {
    return [i.we, i.F2, i.I, i.t$].some(function (n) {
        return e[n] >= 0;
    });
}
function l(e) {
    var n = e.state,
        r = e.name,
        i = n.rects.reference,
        l = n.rects.popper,
        u = n.modifiersData.preventOverflow,
        c = (0, a.Z)(n, { elementContext: 'reference' }),
        d = (0, a.Z)(n, { altBoundary: !0 }),
        f = o(c, i),
        p = o(d, l, u),
        h = s(f),
        _ = s(p);
    (n.modifiersData[r] = {
        referenceClippingOffsets: f,
        popperEscapeOffsets: p,
        isReferenceHidden: h,
        hasPopperEscaped: _
    }),
        (n.attributes.popper = Object.assign({}, n.attributes.popper, {
            'data-popper-reference-hidden': h,
            'data-popper-escaped': _
        }));
}
n.Z = {
    name: 'hide',
    enabled: !0,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: l
};
