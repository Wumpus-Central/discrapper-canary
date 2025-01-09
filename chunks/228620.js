t.r(e);
var a = t(200651);
t(192379);
var i = t(481060),
    l = t(239091),
    c = t(37234),
    r = t(108843),
    s = t(100527),
    u = t(299206),
    o = t(703656),
    d = t(852245),
    h = t(388032);
e.default = (0, r.Z)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            r = (0, d.Z)(e),
            s = (0, u.Z)({
                id: e.id,
                label: h.intl.string(h.t.gFHI3t)
            });
        return (0, a.jsxs)(i.Menu, {
            navId: 'channel-context',
            onClose: l.Zy,
            'aria-label': h.intl.string(h.t.Xm41aW),
            onSelect: t,
            children: [
                (0, a.jsxs)(i.MenuGroup, {
                    children: [
                        r,
                        e.isCategory()
                            ? null
                            : (0, a.jsx)(i.MenuItem, {
                                  id: 'jump-to-channel',
                                  label: h.intl.string(h.t['bQIM4+']),
                                  action: () => {
                                      (0, o.XU)(e.guild_id, e.id), (0, c.xf)();
                                  }
                              })
                    ]
                }),
                (0, a.jsx)(i.MenuGroup, { children: s })
            ]
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_AUDIT_LOG_MENU]
);
