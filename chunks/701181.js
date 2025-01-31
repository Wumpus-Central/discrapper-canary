n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(739566),
    r = n(834129),
    s = n(388032),
    o = n(938530);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        d = (0, a.ZP)(t),
        u = c(d),
        m = s.intl.format(s.t.dKW5Cw, {
            username: d.nick,
            usernameHook: u
        });
    return (0, i.jsx)(r.Z, {
        className: o.stageSystemMessage,
        iconNode: (0, i.jsx)(l.Lrb, {
            size: 'md',
            color: 'currentColor'
        }),
        iconContainerClassName: o.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: m
    });
}
