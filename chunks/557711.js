n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(755721),
    a = n(481060),
    s = n(5192),
    c = n(829820),
    u = n(862863);
function d(e) {
    let { activity: t, user: n, channelId: i, guildId: d, source: p, size: f, look: m, color: g, className: b, onAction: _ } = e,
        { tooltip: v, loading: h, disabled: y, onClick: O } = (0, c.Fe)(t, n, p, s.ZP.getNickname(d, i, n)),
        j = () => {
            (null == _ || _(), O());
        };
    return (0, r.jsx)(a.ua7, {
        text: v,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, r.jsx)(o.zx, {
                size: f,
                className: l()(u.syncButton, b),
                innerClassName: u.syncButtonInner,
                look: m,
                color: g,
                onClick: j,
                onMouseEnter: n,
                onMouseLeave: i,
                disabled: y,
                submitting: h,
                'aria-label': null != v ? v : t.name,
                children: (0, r.jsx)(a.iOO, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
