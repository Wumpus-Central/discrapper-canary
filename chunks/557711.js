n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    s = n(5192),
    o = n(733597),
    c = n(629257);
function u(e) {
    let { activity: t, user: n, channelId: i, guildId: u, source: d, size: m, look: p, color: h, className: g, onAction: f } = e,
        { tooltip: v, loading: S, disabled: x, onClick: I } = (0, o.Fe)(t, n, d, s.ZP.getNickname(u, i, n)),
        y = () => {
            null == f || f(), I();
        };
    return (0, l.jsx)(a.ua7, {
        text: v,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, l.jsx)(a.zxk, {
                size: m,
                className: r()(c.syncButton, g),
                innerClassName: c.syncButtonInner,
                look: p,
                color: h,
                onClick: y,
                onMouseEnter: n,
                onMouseLeave: i,
                disabled: x,
                submitting: S,
                'aria-label': null != v ? v : t.name,
                children: (0, l.jsx)(a.iOO, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
