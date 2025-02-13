n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    s = n(5192),
    o = n(829820),
    u = n(202122);
function c(e) {
    let { activity: t, user: n, channelId: i, guildId: c, source: d, size: m, look: f, color: h, className: g, onAction: p } = e,
        { tooltip: v, loading: S, disabled: I, onClick: x } = (0, o.Fe)(t, n, d, s.ZP.getNickname(c, i, n)),
        E = () => {
            null == p || p(), x();
        };
    return (0, l.jsx)(a.ua7, {
        text: v,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, l.jsx)(a.zxk, {
                size: m,
                className: r()(u.syncButton, g),
                innerClassName: u.syncButtonInner,
                look: f,
                color: h,
                onClick: E,
                onMouseEnter: n,
                onMouseLeave: i,
                disabled: I,
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
