n.d(t, { Z: () => r });
var i = n(406434);
let r = {
    name: 'popperOffsets',
    enabled: !0,
    phase: 'read',
    fn: function (e) {
        var t = e.state,
            n = e.name;
        t.modifiersData[n] = (0, i.Z)({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: 'absolute',
            placement: t.placement
        });
    },
    data: {}
};
