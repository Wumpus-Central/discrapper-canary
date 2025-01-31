n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(692547),
    a = n(481060),
    r = n(739566),
    s = n(834129),
    o = n(388032),
    c = n(938530);
function d(e) {
    let { message: t, compact: n, usernameHook: d } = e,
        u = (0, r.ZP)(t),
        m = d(u),
        h = o.intl.format(o.t['Rv+TSE'], {
            username: u.nick,
            usernameHook: m,
            topic: t.content
        });
    return (0, i.jsx)(s.Z, {
        className: c.stageSystemMessage,
        iconNode: (0, i.jsx)(a.ewx, {
            size: 'md',
            color: l.Z.unsafe_rawColors.GREEN_360.css
        }),
        iconContainerClassName: c.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: h
    });
}
