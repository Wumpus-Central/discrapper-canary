n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(745752),
    a = n(17181),
    s = n(388032),
    c = n(221740);
function u(e) {
    let { guildId: t, channelId: n } = e,
        u = i.useCallback(() => {
            null != t &&
                null != n &&
                ((0, o.I1)(t),
                (0, a.default)({
                    guildId: t,
                    returnChannelId: n
                }));
        }, [t, n]);
    return (0, r.jsx)('div', {
        className: c.container,
        children: (0, r.jsxs)('div', {
            className: c.explainerContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: s.NW.string(s.t.FWtdQk)
                }),
                (0, r.jsx)(l.zxk, {
                    onClick: u,
                    children: (0, r.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        children: s.NW.string(s.t.VVFjAA)
                    })
                })
            ]
        })
    });
}
