n.d(t, { Z: () => c });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(745752),
    s = n(17181),
    o = n(388032),
    d = n(957050);
function c(e) {
    let { guildId: t, channelId: n } = e,
        c = l.useCallback(() => {
            null != t &&
                null != n &&
                ((0, a.I1)(t),
                (0, s.default)({
                    guildId: t,
                    returnChannelId: n
                }));
        }, [t, n]);
    return (0, i.jsx)('div', {
        className: d.container,
        children: (0, i.jsxs)('div', {
            className: d.explainerContainer,
            children: [
                (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: o.intl.string(o.t.FWtdQk)
                }),
                (0, i.jsx)(r.zxk, {
                    onClick: c,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        children: o.intl.string(o.t.VVFjAA)
                    })
                })
            ]
        })
    });
}
