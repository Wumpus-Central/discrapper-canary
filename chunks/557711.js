n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(5192),
    s = n(829820),
    c = n(550750);
function u(e) {
    let { activity: t, user: n, channelId: l, guildId: u, source: d, size: f, look: p, color: m, className: g, onAction: y } = e,
        { tooltip: b, loading: h, disabled: v, onClick: O } = (0, s.Fe)(t, n, d, o.ZP.getNickname(u, l, n)),
        j = () => {
            null == y || y(), O();
        };
    return (0, r.jsx)(a.ua7, {
        text: b,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: l } = e;
            return (0, r.jsx)(a.zxk, {
                size: f,
                className: i()(c.syncButton, g),
                innerClassName: c.syncButtonInner,
                look: p,
                color: m,
                onClick: j,
                onMouseEnter: n,
                onMouseLeave: l,
                disabled: v,
                submitting: h,
                'aria-label': null != b ? b : t.name,
                children: (0, r.jsx)(a.iOO, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
