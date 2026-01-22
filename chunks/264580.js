n.d(t, {
    A: () => c,
    q: () => o,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(915089),
    s = n(850474);

function o(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(l.Text, {
        className: s.g,
        color: "text-subtle",
        id: n,
        variant: "text-sm/semibold",
        children: t,
    });
}
let c = function (e) {
    let { children: t, renderPopout: n } = e,
        o = (0, a.GV)(),
        c = i.useRef(null);
    return (0, r.jsx)(l.YNO, {
        align: "right",
        position: "bottom",
        renderPopout: (e) =>
            (0, r.jsx)(l.lGe, {
                className: s.S,
                "aria-labelledby": o,
                children: n(e, o),
            }),
        scrollBehavior: "close",
        targetElementRef: c,
        children: (e) => t(e, c),
    });
};
