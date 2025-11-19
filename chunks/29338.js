n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(692547),
    a = n(481060),
    o = n(739566),
    s = n(834129),
    l = n(388032),
    c = n(476582);
function u(e) {
    let { message: t, compact: n, usernameHook: u } = e,
        d = (0, o.ZP)(t),
        f = u(d),
        _ = l.intl.format(l.t["Rv+TSM"], {
            username: d.nick,
            usernameHook: f,
            topic: t.content,
        });
    return (0, r.jsx)(s.Z, {
        className: c.stageSystemMessage,
        iconNode: (0, r.jsx)(a.ewx, {
            size: "md",
            color: i.Z.unsafe_rawColors.GREEN_360.css,
        }),
        iconContainerClassName: c.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: _,
    });
}
