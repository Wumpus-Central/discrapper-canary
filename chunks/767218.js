t.d(n, {
    Z: () => p,
    b: () => d
});
var r,
    i = t(200651);
t(192379);
var o = t(657707),
    s = t(793030),
    a = t(692547),
    l = t(680278),
    c = t(388032),
    u = t(154142),
    d = (((r = {})[(r.AVAILABLE = 0)] = 'AVAILABLE'), (r[(r.SPENT = 1)] = 'SPENT'), (r[(r.TOTAL = 2)] = 'TOTAL'), r);
function p(e) {
    let { count: n, type: t } = e;
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsxs)('div', {
                className: u.headerContainer,
                children: [
                    (0, i.jsx)(o.$Eu, {
                        size: 'sm',
                        color: 0 !== t ? a.Z.colors.HEADER_MUTED : a.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
                    }),
                    (0, i.jsx)(s.X6, {
                        color: 0 !== t ? 'header-muted' : 'header-primary',
                        variant: 'heading-lg/semibold',
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(s.xv, {
                color: 'header-muted',
                variant: 'text-sm/medium',
                children: (() => {
                    switch (t) {
                        case 0:
                            return c.intl.formatToPlainString(l.default.BdRXZG, { boostCount: n });
                        case 1:
                            return c.intl.formatToPlainString(l.default.xvgIVF, { boostCount: n });
                        case 2:
                            return c.intl.string(l.default['/F7Z29']);
                    }
                })()
            })
        ]
    });
}
