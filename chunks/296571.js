n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(592125),
    s = n(739566),
    o = n(834129),
    c = n(388032),
    d = n(798168);
function u(e) {
    var t;
    let { message: n, compact: u, usernameHook: m, onClickThread: _, onClickViewThreads: h, onContextMenuThread: p } = e,
        g = (0, s.ZP)(n),
        f = m(g),
        x = (0, l.e7)([r.Z], () => {
            var e;
            return r.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id);
        }),
        C = c.intl.format(c.t.cZ9Uf3, {
            actorName: g.nick,
            actorHook: f,
            threadName: null !== (t = null == x ? void 0 : x.name) && void 0 !== t ? t : n.content,
            threadOnClick: {
                onClick: _,
                onContextMenu: p
            },
            viewThreadsOnClick: h
        });
    return (0, i.jsx)(o.Z, {
        iconNode: (0, i.jsx)(a.or_, {
            size: 'md',
            color: 'currentColor',
            className: d.icon
        }),
        timestamp: n.timestamp,
        compact: u,
        children: C
    });
}
