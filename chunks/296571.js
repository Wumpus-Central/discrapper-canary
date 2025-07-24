n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(592125),
    o = n(739566),
    s = n(834129),
    c = n(388032),
    u = n(907273);
function d(e) {
    var t;
    let { message: n, compact: d, usernameHook: p, onClickThread: m, onClickViewThreads: f, onContextMenuThread: g } = e,
        _ = (0, o.ZP)(n),
        h = p(_),
        b = (0, i.e7)([a.Z], () => {
            var e;
            return a.Z.getChannel(null == (e = n.messageReference) ? void 0 : e.channel_id);
        }),
        E = c.intl.format(c.t.cZ9Uf3, {
            actorName: _.nick,
            actorHook: h,
            threadName: null != (t = null == b ? void 0 : b.name) ? t : n.content,
            threadOnClick: {
                onClick: m,
                onContextMenu: g
            },
            viewThreadsOnClick: f
        });
    return (0, r.jsx)(s.Z, {
        iconNode: (0, r.jsx)(l.or_, {
            size: 'md',
            color: 'currentColor',
            className: u.icon
        }),
        timestamp: n.timestamp,
        compact: d,
        children: E
    });
}
