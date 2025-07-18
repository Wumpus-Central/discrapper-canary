n.d(t, {
    Z: () => p,
    b: () => d
});
var r,
    o = n(255367);
n(73800);
var i = n(657707),
    s = n(793030),
    a = n(692547),
    l = n(93841),
    c = n(388032),
    u = n(154142),
    d = (((r = {})[(r.AVAILABLE = 0)] = 'AVAILABLE'), (r[(r.SPENT = 1)] = 'SPENT'), (r[(r.TOTAL = 2)] = 'TOTAL'), r);
function p(e) {
    let { count: t, type: n } = e;
    return (0, o.jsxs)('div', {
        className: u.container,
        children: [
            (0, o.jsxs)('div', {
                className: u.headerContainer,
                children: [
                    (0, o.jsx)(i.$Eu, {
                        size: 'sm',
                        color: 0 !== n ? a.Z.colors.HEADER_MUTED : a.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
                    }),
                    (0, o.jsx)(s.X6, {
                        color: 0 !== n ? 'header-muted' : 'header-primary',
                        variant: 'heading-lg/semibold',
                        children: t
                    })
                ]
            }),
            (0, o.jsx)(s.xv, {
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
