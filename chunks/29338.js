n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(692547),
    a = n(481060),
    l = n(739566),
    o = n(834129),
    s = n(388032),
    c = n(40450);
function u(e) {
    let { message: t, compact: n, usernameHook: u } = e,
        d = (0, l.ZP)(t),
        p = u(d),
        m = s.NW.format(s.t['Rv+TSE'], {
            username: d.nick,
            usernameHook: p,
            topic: t.content
        });
    return (0, r.jsx)(o.Z, {
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
