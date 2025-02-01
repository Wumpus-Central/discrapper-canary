a.d(t, { default: () => Z });
var e = a(200651);
a(192379);
var i = a(481060),
    l = a(239091),
    c = a(37234),
    s = a(108843),
    r = a(100527),
    d = a(299206),
    o = a(703656),
    u = a(852245),
    h = a(388032);
let Z = (0, s.Z)(
    function (n) {
        let { channel: t, onSelect: a } = n,
            s = (0, u.Z)(t),
            r = (0, d.Z)({
                id: t.id,
                label: h.intl.string(h.t.gFHI3t)
            });
        return (0, e.jsxs)(i.v2r, {
            navId: 'channel-context',
            onClose: l.Zy,
            'aria-label': h.intl.string(h.t.Xm41aW),
            onSelect: a,
            children: [
                (0, e.jsxs)(i.kSQ, {
                    children: [
                        s,
                        t.isCategory()
                            ? null
                            : (0, e.jsx)(i.sNh, {
                                  id: 'jump-to-channel',
                                  label: h.intl.string(h.t['bQIM4+']),
                                  action: () => {
                                      (0, o.XU)(t.guild_id, t.id), (0, c.xf)();
                                  }
                              })
                    ]
                }),
                (0, e.jsx)(i.kSQ, { children: r })
            ]
        });
    },
    [r.Z.CONTEXT_MENU, r.Z.CHANNEL_AUDIT_LOG_MENU]
);
