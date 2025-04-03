t.d(e, { default: () => b });
var a = t(200651);
t(192379);
var r = t(481060),
    c = t(239091),
    i = t(37234),
    l = t(108843),
    s = t(100527),
    o = t(299206),
    u = t(703656),
    d = t(852245),
    h = t(388032);
let b = (0, l.Z)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            l = (0, d.Z)(e),
            s = (0, o.Z)({
                id: e.id,
                label: h.NW.string(h.t.gFHI3t)
            });
        return (0, a.jsxs)(r.v2r, {
            navId: 'channel-context',
            onClose: c.Zy,
            'aria-label': h.NW.string(h.t.Xm41aW),
            onSelect: t,
            children: [
                (0, a.jsxs)(r.kSQ, {
                    children: [
                        l,
                        e.isCategory()
                            ? null
                            : (0, a.jsx)(r.sNh, {
                                  id: 'jump-to-channel',
                                  label: h.NW.string(h.t['bQIM4+']),
                                  action: () => {
                                      (0, u.XU)(e.guild_id, e.id), (0, i.xf)();
                                  }
                              })
                    ]
                }),
                (0, a.jsx)(r.kSQ, { children: s })
            ]
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_AUDIT_LOG_MENU]
);
