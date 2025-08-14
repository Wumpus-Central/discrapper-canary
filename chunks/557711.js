n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(755721),
    s = n(481060),
    l = n(5192),
    c = n(829820),
    u = n(191242);
function d(e) {
    let {
            activity: t,
            user: n,
            channelId: i,
            guildId: d,
            source: f,
            size: _,
            look: p,
            color: h,
            className: m,
            onAction: g,
        } = e,
        { tooltip: E, loading: b, disabled: y, onClick: O } = (0, c.Fe)(t, n, f, l.ZP.getNickname(d, i, n)),
        v = () => {
            null == g || g(), O();
        };
    return (0, r.jsx)(s.ua7, {
        text: E,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, r.jsx)(a.zx, {
                size: _,
                className: o()(u.syncButton, m),
                innerClassName: u.syncButtonInner,
                look: p,
                color: h,
                onClick: v,
                onMouseEnter: n,
                onMouseLeave: i,
                disabled: y,
                submitting: b,
                "aria-label": null != E ? E : t.name,
                children: (0, r.jsx)(s.iOO, {
                    size: "xs",
                    color: "currentColor",
                }),
            });
        },
    });
}
