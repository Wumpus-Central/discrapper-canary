n.d(t, {
    Z: () => c,
    g: () => o,
});
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(313201),
    s = n(491873);
function o(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(l.Text, {
        className: s.popoutHeading,
        color: "text-secondary",
        id: n,
        variant: "text-sm/semibold",
        children: t,
    });
}
let c = function (e) {
    let { children: t, renderPopout: n } = e,
        o = (0, a.Dt)(),
        c = i.useRef(null);
    return (0, r.jsx)(l.yRy, {
        align: "right",
        position: "bottom",
        renderPopout: (e) =>
            (0, r.jsx)(l.VqE, {
                className: s.popout,
                "aria-labelledby": o,
                children: n(e, o),
            }),
        scrollBehavior: "close",
        targetElementRef: c,
        children: (e) => t(e, c),
    });
};
