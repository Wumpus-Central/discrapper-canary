n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(592125),
    s = n(739566),
    l = n(834129),
    c = n(388032),
    u = n(636518);
function d(e) {
    var t;
    let {
            message: n,
            compact: d,
            usernameHook: f,
            onClickThread: p,
            onClickViewThreads: _,
            onContextMenuThread: m,
        } = e,
        h = (0, s.ZP)(n),
        g = f(h),
        E = (0, i.e7)([o.Z], () => {
            var e;
            return o.Z.getChannel(null == (e = n.messageReference) ? void 0 : e.channel_id);
        }),
        b = c.intl.format(c.t.cZ9Uf2, {
            actorName: h.nick,
            actorHook: g,
            threadName: null != (t = null == E ? void 0 : E.name) ? t : n.content,
            threadOnClick: {
                onClick: p,
                onContextMenu: m,
            },
            viewThreadsOnClick: _,
        });
    return (0, r.jsx)(l.Z, {
        iconNode: (0, r.jsx)(a.or_, {
            size: "md",
            color: "currentColor",
            className: u.icon,
        }),
        timestamp: n.timestamp,
        compact: d,
        children: b,
    });
}
