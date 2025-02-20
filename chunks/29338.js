n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(692547),
    a = n(481060),
    o = n(739566),
    l = n(834129),
    s = n(388032),
    c = n(931505);
function d(e) {
    let { message: t, compact: n, usernameHook: d } = e,
        u = (0, o.ZP)(t),
        p = d(u),
        m = s.NW.format(s.t['Rv+TSE'], {
            username: u.nick,
            usernameHook: p,
            topic: t.content
        });
    return (0, r.jsx)(l.Z, {
        className: c.stageSystemMessage,
        iconNode: (0, r.jsx)(a.ewx, {
            size: 'md',
            color: i.Z.unsafe_rawColors.GREEN_360.css
        }),
        iconContainerClassName: c.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: m
    });
}
