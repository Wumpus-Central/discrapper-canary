n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(5192),
    o = n(733597),
    c = n(629257);
function u(e) {
    let { activity: t, user: n, channelId: l, guildId: u, source: d, size: m, look: f, color: p, className: h, onAction: g } = e,
        { tooltip: v, loading: _, disabled: I, onClick: S } = (0, o.Fe)(t, n, d, s.ZP.getNickname(u, l, n)),
        x = () => {
            null == g || g(), S();
        };
    return (0, i.jsx)(r.ua7, {
        text: v,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: l } = e;
            return (0, i.jsx)(r.zxk, {
                size: m,
                className: a()(c.syncButton, h),
                innerClassName: c.syncButtonInner,
                look: f,
                color: p,
                onClick: x,
                onMouseEnter: n,
                onMouseLeave: l,
                disabled: I,
                submitting: _,
                'aria-label': null != v ? v : t.name,
                children: (0, i.jsx)(r.iOO, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
