n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(739566),
    a = n(834129),
    o = n(388032),
    s = n(938530);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        d = (0, l.ZP)(t),
        u = c(d),
        m = o.intl.format(o.t.dKW5Cw, {
            username: d.nick,
            usernameHook: u
        });
    return (0, i.jsx)(a.Z, {
        className: s.stageSystemMessage,
        iconNode: (0, i.jsx)(r.MicrophoneArrowRightIcon, {
            size: 'md',
            color: 'currentColor'
        }),
        iconContainerClassName: s.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: m
    });
}
