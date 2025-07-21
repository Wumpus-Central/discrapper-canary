n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    o = n(481060),
    s = n(5192),
    c = n(829820),
    u = n(862863);
function d(e) {
    let { activity: t, user: n, channelId: i, guildId: d, source: f, size: p, look: m, color: g, className: _, onAction: v } = e,
        { tooltip: b, loading: y, disabled: h, onClick: O } = (0, c.Fe)(t, n, f, s.ZP.getNickname(d, i, n)),
        j = () => {
            (null == v || v(), O());
        };
    return (0, r.jsx)(o.ua7, {
        text: b,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, r.jsx)(a.zx, {
                size: p,
                className: l()(u.syncButton, _),
                innerClassName: u.syncButtonInner,
                look: m,
                color: g,
                onClick: j,
                onMouseEnter: n,
                onMouseLeave: i,
                disabled: h,
                submitting: y,
                'aria-label': null != b ? b : t.name,
                children: (0, r.jsx)(o.iOO, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
