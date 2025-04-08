t.d(n, {
    Z: () => m,
    b: () => d
});
var r,
    o = t(200651);
t(192379);
var s = t(657707),
    i = t(793030),
    a = t(692547),
    l = t(680278),
    c = t(388032),
    u = t(154142),
    d = (((r = {})[(r.AVAILABLE = 0)] = 'AVAILABLE'), (r[(r.SPENT = 1)] = 'SPENT'), (r[(r.TOTAL = 2)] = 'TOTAL'), r);
function m(e) {
    let { count: n, type: t } = e;
    return (0, o.jsxs)('div', {
        className: u.container,
        children: [
            (0, o.jsxs)('div', {
                className: u.headerContainer,
                children: [
                    (0, o.jsx)(s.$Eu, {
                        size: 'sm',
                        color: 0 !== t ? a.Z.colors.HEADER_MUTED : a.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
                    }),
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
