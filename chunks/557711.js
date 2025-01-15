n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(5192),
    o = n(829820),
    c = n(484346);
function u(e) {
    let { activity: t, user: n, channelId: l, guildId: u, source: d, size: m, look: f, color: p, className: h, onAction: g } = e,
        { tooltip: v, loading: S, disabled: I, onClick: _ } = (0, o.Fe)(t, n, d, s.ZP.getNickname(u, l, n)),
        x = () => {
            null == g || g(), _();
        };
    return (0, i.jsx)(a.Tooltip, {
        text: v,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: l } = e;
            return (0, i.jsx)(a.Button, {
                size: m,
                className: r()(c.syncButton, h),
                innerClassName: c.syncButtonInner,
                look: f,
                color: p,
                onClick: x,
                onMouseEnter: n,
                onMouseLeave: l,
                disabled: I,
                submitting: S,
                'aria-label': null != v ? v : t.name,
                children: (0, i.jsx)(a.UserPlayIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }
    });
}
