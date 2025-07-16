n.d(t, {
    Z: () => p,
    b: () => u
});
var r,
    i = n(255367);
n(73800);
var o = n(657707),
    a = n(793030),
    s = n(692547),
    l = n(93841),
    c = n(388032),
    d = n(154142),
    u = (((r = {})[(r.AVAILABLE = 0)] = 'AVAILABLE'), (r[(r.SPENT = 1)] = 'SPENT'), (r[(r.TOTAL = 2)] = 'TOTAL'), r);
function p(e) {
    let { count: t, type: n } = e;
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsxs)('div', {
                className: d.headerContainer,
                children: [
                    (0, i.jsx)(o.$Eu, {
                        size: 'sm',
                        color: 0 !== n ? s.Z.colors.HEADER_MUTED : s.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
                    }),
                    (0, i.jsx)(a.X6, {
                        color: 0 !== n ? 'header-muted' : 'header-primary',
                        variant: 'heading-lg/semibold',
                        children: t
                    })
                ]
            }),
            (0, i.jsx)(a.xv, {
                color: 'header-muted',
                variant: 'text-sm/medium',
                children: (() => {
                    switch (n) {
                        case 0:
                            return c.intl.formatToPlainString(l.default.BdRXZG, { boostCount: t });
                        case 1:
                            return c.intl.formatToPlainString(l.default.xvgIVF, { boostCount: t });
                        case 2:
                            return c.intl.string(l.default['/F7Z29']);
                    }
                })()
            })
        ]
    });
}
