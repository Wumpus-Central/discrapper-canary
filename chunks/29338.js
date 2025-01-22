n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(692547),
    l = n(481060),
    a = n(739566),
    o = n(834129),
    s = n(388032),
    c = n(938530);
function u(e) {
    let { message: t, compact: n, usernameHook: u } = e,
        d = (0, a.ZP)(t),
        m = u(d),
        h = s.intl.format(s.t['Rv+TSE'], {
            username: d.nick,
            usernameHook: m,
            topic: t.content
        });
    return (0, i.jsx)(o.Z, {
        className: c.stageSystemMessage,
        iconNode: (0, i.jsx)(l.StageIcon, {
            size: 'md',
            color: r.Z.unsafe_rawColors.GREEN_360.css
        }),
        iconContainerClassName: c.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: h
    });
}
