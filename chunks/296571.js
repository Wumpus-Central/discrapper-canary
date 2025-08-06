n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(592125),
    s = n(739566),
    l = n(834129),
    c = n(388032),
    u = n(907273);
function d(e) {
    var t;
    let {
            message: n,
            compact: d,
            usernameHook: f,
            onClickThread: _,
            onClickViewThreads: p,
            onContextMenuThread: h,
        } = e,
        m = (0, s.ZP)(n),
        g = f(m),
        E = (0, i.e7)([a.Z], () => {
            var e;
            return a.Z.getChannel(null == (e = n.messageReference) ? void 0 : e.channel_id);
        }),
        b = c.intl.format(c.t.cZ9Uf3, {
            actorName: m.nick,
            actorHook: g,
            threadName: null != (t = null == E ? void 0 : E.name) ? t : n.content,
            threadOnClick: {
                onClick: _,
                onContextMenu: h,
            },
            viewThreadsOnClick: p,
        });
    return (0, r.jsx)(l.Z, {
        iconNode: (0, r.jsx)(o.or_, {
            size: "md",
            color: "currentColor",
            className: u.icon,
        }),
        timestamp: n.timestamp,
        compact: d,
        children: b,
    });
}
