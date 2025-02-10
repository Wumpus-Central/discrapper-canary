i.d(e, {
    Z: () => u,
    b: () => d
});
var t,
    r = i(200651);
i(192379);
var a = i(793030),
    s = i(413335),
    o = i(324180),
    c = i(388032),
    l = i(776040),
    d = (((t = {})[(t.AVAILABLE = 0)] = 'AVAILABLE'), (t[(t.SPENT = 1)] = 'SPENT'), (t[(t.TOTAL = 2)] = 'TOTAL'), t);
function u(n) {
    let { count: e, type: i } = n;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsxs)('div', {
                className: l.headerContainer,
                children: [
                    (0, r.jsx)(s.Z, { fill: 0 !== i ? 'currentColor' : void 0 }),
                    (0, r.jsx)(a.X6, {
                        variant: 'heading-lg/semibold',
                        children: e
                    })
                ]
            }),
            (0, r.jsx)(a.xv, {
                variant: 'text-sm/medium',
                children: (() => {
                    switch (i) {
                        case 0:
                            return c.intl.string(o.Z.BdRXZG);
                        case 1:
                            return c.intl.string(o.Z.xvgIVF);
                        case 2:
                            return c.intl.string(o.Z['/F7Z29']);
                    }
                })()
            })
        ]
    });
}
