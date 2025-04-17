n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    l = n(592125),
    o = n(739566),
    s = n(834129),
    c = n(388032),
    u = n(907273);
function d(e) {
    var t;
    let { message: n, compact: d, usernameHook: p, onClickThread: m, onClickViewThreads: f, onContextMenuThread: h } = e,
        g = (0, o.ZP)(n),
        _ = p(g),
        b = (0, i.e7)([l.Z], () => {
            var e;
            return l.Z.getChannel(null == (e = n.messageReference) ? void 0 : e.channel_id);
        }),
        x = c.NW.format(c.t.cZ9Uf3, {
            actorName: g.nick,
            actorHook: _,
            threadName: null != (t = null == b ? void 0 : b.name) ? t : n.content,
            threadOnClick: {
                onClick: m,
                onContextMenu: h
            },
            viewThreadsOnClick: f
        });
    return (0, r.jsx)(s.Z, {
        iconNode: (0, r.jsx)(a.or_, {
            size: 'md',
            color: 'currentColor',
            className: u.icon
        }),
        timestamp: n.timestamp,
        compact: d,
        children: x
    });
}
