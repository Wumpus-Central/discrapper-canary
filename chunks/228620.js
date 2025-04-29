t.d(e, { default: () => b });
var a = t(255367);
t(73800);
var r = t(481060),
    i = t(239091),
    l = t(37234),
    c = t(108843),
    s = t(100527),
    o = t(299206),
    u = t(703656),
    d = t(852245),
    h = t(388032);
let b = (0, c.Z)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            c = (0, d.Z)(e),
            s = (0, o.Z)({
                id: e.id,
                label: h.intl.string(h.t.gFHI3t)
            });
        return (0, a.jsxs)(r.v2r, {
            navId: 'channel-context',
            onClose: i.Zy,
            'aria-label': h.intl.string(h.t.Xm41aW),
            onSelect: t,
            children: [
                (0, a.jsxs)(r.kSQ, {
                    children: [
                        c,
                        e.isCategory()
                            ? null
                            : (0, a.jsx)(r.sNh, {
                                  id: 'jump-to-channel',
                                  label: h.intl.string(h.t['bQIM4+']),
                                  action: () => {
                                      (0, u.XU)(e.guild_id, e.id), (0, l.xf)();
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
