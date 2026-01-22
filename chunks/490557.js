n.d(t, {
    b: () => d,
    l: () => f,
});
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    a = n(512750),
    s = n(990208),
    o = n(568065),
    c = n(291305),
    u = n(107836);

function d(e) {
    let { className: t } = e;
    return (0, r.jsx)("img", {
        className: t,
        alt: "",
        src: u,
    });
}

function f(e) {
    let { className: t, powerup: n, isHovering: l } = e,
        u = (0, s.A)(n, l);
    switch (n.type) {
        case o.o9.LEVEL:
            return (0, r.jsx)(d, {});
        case o.o9.PERK:
            return (0, r.jsx)("img", {
                alt: "",
                src: u,
                className: i()(
                    c.T,
                    {
                        [c.W]: n.skuId === a.aN,
                    },
                    t,
                ),
            });
    }
}
