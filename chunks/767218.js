t.d(n, {
    Z: () => p,
    b: () => u
});
var r,
    o = t(200651);
t(192379);
var i = t(793030),
    s = t(692547),
    a = t(413335),
    l = t(680278),
    c = t(388032),
    d = t(154142),
    u = (((r = {})[(r.AVAILABLE = 0)] = 'AVAILABLE'), (r[(r.SPENT = 1)] = 'SPENT'), (r[(r.TOTAL = 2)] = 'TOTAL'), r);
function p(e) {
    let { count: n, type: t } = e;
    return (0, o.jsxs)('div', {
        className: d.container,
        children: [
            (0, o.jsxs)('div', {
                className: d.headerContainer,
                children: [
                    (0, o.jsx)(a.Z, { color: 0 !== t ? s.Z.colors.HEADER_MUTED : void 0 }),
                    (0, o.jsx)(i.X6, {
                        color: 0 !== t ? 'header-muted' : 'header-primary',
                        variant: 'heading-lg/semibold',
                        children: n
                    })
                ]
            }),
            (0, o.jsx)(i.xv, {
                color: 'header-muted',
                variant: 'text-sm/medium',
                children: (() => {
                    switch (t) {
                        case 0:
                            return c.NW.formatToPlainString(l.Z.BdRXZG, { boostCount: n });
                        case 1:
                            return c.NW.formatToPlainString(l.Z.xvgIVF, { boostCount: n });
                        case 2:
                            return c.NW.string(l.Z['/F7Z29']);
                    }
                })()
            })
        ]
    });
}
