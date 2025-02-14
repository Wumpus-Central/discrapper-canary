i.d(e, {
    Z: () => u,
    b: () => d
});
var t,
    a = i(200651);
i(192379);
var r = i(793030),
    o = i(413335),
    s = i(306685),
    c = i(388032),
    l = i(933192),
    d = (((t = {})[(t.AVAILABLE = 0)] = 'AVAILABLE'), (t[(t.SPENT = 1)] = 'SPENT'), (t[(t.TOTAL = 2)] = 'TOTAL'), t);
function u(n) {
    let { count: e, type: i } = n;
    return (0, a.jsxs)('div', {
        className: l.container,
        children: [
            (0, a.jsxs)('div', {
                className: l.headerContainer,
                children: [
                    (0, a.jsx)(o.Z, { fill: 0 !== i ? 'currentColor' : void 0 }),
                    (0, a.jsx)(r.X6, {
                        variant: 'heading-lg/semibold',
                        children: e
                    })
                ]
            }),
            (0, a.jsx)(r.xv, {
                variant: 'text-sm/medium',
                children: (() => {
                    switch (i) {
                        case 0:
                            return c.intl.string(s.Z.BdRXZG);
                        case 1:
                            return c.intl.string(s.Z.xvgIVF);
                        case 2:
                            return c.intl.string(s.Z['/F7Z29']);
                    }
                })()
            })
        ]
    });
}
