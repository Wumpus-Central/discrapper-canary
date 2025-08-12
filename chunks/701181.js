n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(739566),
    a = n(834129),
    s = n(388032),
    l = n(813470);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        u = (0, o.ZP)(t),
        d = c(u),
        f = s.intl.format(s.t.dKW5Cw, {
            username: u.nick,
            usernameHook: d,
        });
    return (0, r.jsx)(a.Z, {
        className: l.stageSystemMessage,
        iconNode: (0, r.jsx)(i.Lrb, {
            size: "md",
            color: "currentColor",
        }),
        iconContainerClassName: l.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: f,
    });
}
