n.d(t, {
    A: () => o,
});
var r = n(140851),
    i = n(528346);

function a(e, t, n) {
    return (
        void 0 === n &&
            (n = {
                x: 0,
                y: 0,
            }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
        }
    );
}

function s(e) {
    return [r.Mn, r.pG, r.sQ, r.kb].some(function (t) {
        return e[t] >= 0;
    });
}
let o = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (e) {
        var t = e.state,
            n = e.name,
            r = t.rects.reference,
            o = t.rects.popper,
            l = t.modifiersData.preventOverflow,
            c = (0, i.A)(t, {
                elementContext: "reference",
            }),
            u = (0, i.A)(t, {
                altBoundary: !0,
            }),
            d = a(c, r),
            f = a(u, o, l),
            p = s(d),
            _ = s(f);
        (t.modifiersData[n] = {
            referenceClippingOffsets: d,
            popperEscapeOffsets: f,
            isReferenceHidden: p,
            hasPopperEscaped: _,
        }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": p,
                "data-popper-escaped": _,
            }));
    },
};
