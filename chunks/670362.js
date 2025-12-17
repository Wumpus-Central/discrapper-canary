n.d(t, {
    Z: () => c,
    g: () => s,
});
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(313201),
    o = n(166981);
function s(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(l.Text, {
        className: o.popoutHeading,
        color: "text-subtle",
        id: n,
        variant: "text-sm/semibold",
        children: t,
    });
}
let c = function (e) {
    let { children: t, renderPopout: n } = e,
        s = (0, a.Dt)(),
        c = i.useRef(null);
    return (0, r.jsx)(l.yRy, {
        align: "right",
        position: "bottom",
        renderPopout: (e) =>
            (0, r.jsx)(l.VqE, {
                className: o.popout,
                "aria-labelledby": s,
                children: n(e, s),
            }),
        scrollBehavior: "close",
        targetElementRef: c,
        children: (e) => t(e, c),
    });
};
