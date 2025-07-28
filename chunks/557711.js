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
    let { activity: t, user: n, channelId: i, guildId: d, source: f, size: p, look: m, color: g, className: h, onAction: b } = e,
        { tooltip: _, loading: v, disabled: y, onClick: O } = (0, c.Fe)(t, n, f, s.ZP.getNickname(d, i, n)),
        S = () => {
            (null == b || b(), O());
        };
    return (0, r.jsx)(o.ua7, {
        text: _,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, r.jsx)(a.zx, {
                size: p,
                className: l()(u.syncButton, h),
                innerClassName: u.syncButtonInner,
                look: m,
                color: g,
                onClick: S,
                onMouseEnter: n,
                onMouseLeave: i,
                disabled: y,
                submitting: v,
                'aria-label': null != _ ? _ : t.name,
                children: (0, r.jsx)(o.iOO, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
