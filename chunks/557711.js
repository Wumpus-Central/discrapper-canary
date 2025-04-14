n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(5192),
    s = n(829820),
    c = n(862863);
function u(e) {
    let { activity: t, user: n, channelId: l, guildId: u, source: d, size: p, look: f, color: m, className: g, onAction: b } = e,
        { tooltip: O, loading: y, disabled: h, onClick: v } = (0, s.Fe)(t, n, d, a.ZP.getNickname(u, l, n)),
        j = () => {
            null == b || b(), v();
        };
    return (0, r.jsx)(o.ua7, {
        text: O,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: l } = e;
            return (0, r.jsx)(o.zxk, {
                size: p,
                className: i()(c.syncButton, g),
                innerClassName: c.syncButtonInner,
                look: f,
                color: m,
                onClick: j,
                onMouseEnter: n,
                onMouseLeave: l,
                disabled: h,
                submitting: y,
                'aria-label': null != O ? O : t.name,
                children: (0, r.jsx)(o.iOO, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
