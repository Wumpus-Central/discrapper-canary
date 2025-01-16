n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(592125),
    o = n(739566),
    s = n(834129),
    c = n(388032),
    d = n(798168);
function u(e) {
    var t;
    let { message: n, compact: u, usernameHook: m, onClickThread: h, onClickViewThreads: f, onContextMenuThread: p } = e,
        _ = (0, o.ZP)(n),
        g = m(_),
        E = (0, r.e7)([a.Z], () => {
            var e;
            return a.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id);
        }),
        C = c.intl.format(c.t.cZ9Uf3, {
            actorName: _.nick,
            actorHook: g,
            threadName: null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : n.content,
            threadOnClick: {
                onClick: h,
                onContextMenu: p
            },
            viewThreadsOnClick: f
        });
    return (0, i.jsx)(s.Z, {
        iconNode: (0, i.jsx)(l.ThreadIcon, {
            size: 'md',
            color: 'currentColor',
            className: d.icon
        }),
        timestamp: n.timestamp,
        compact: u,
        children: C
    });
}
