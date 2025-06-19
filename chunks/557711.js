n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(5192),
    s = n(829820),
    c = n(862863);
function u(e) {
    let { activity: t, user: n, channelId: i, guildId: u, source: d, size: f, look: p, color: m, className: g, onAction: _ } = e,
        { tooltip: b, loading: v, disabled: h, onClick: y } = (0, s.Fe)(t, n, d, o.ZP.getNickname(u, i, n)),
        O = () => {
            null == _ || _(), y();
        };
    return (0, r.jsx)(a.ua7, {
        text: b,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, r.jsx)(a.zxk, {
                size: f,
                className: l()(c.syncButton, g),
                innerClassName: c.syncButtonInner,
                look: p,
                color: m,
                onClick: O,
                onMouseEnter: n,
                onMouseLeave: i,
                disabled: h,
                submitting: v,
                'aria-label': null != b ? b : t.name,
                children: (0, r.jsx)(a.iOO, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
