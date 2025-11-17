t.d(e, { default: () => h });
var a = t(54381);
t(473749);
var r = t(481060),
    i = t(239091),
    l = t(37234),
    c = t(108843),
    s = t(100527),
    o = t(299206),
    u = t(703656),
    d = t(852245),
    b = t(388032);
let h = (0, c.Z)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            c = (0, d.Z)(e),
            s = (0, o.Z)({
                id: e.id,
                label: b.intl.string(b.t.gFHI3k),
            });
        return (0, a.jsxs)(r.v2r, {
            navId: "channel-context",
            onClose: i.Zy,
            "aria-label": b.intl.string(b.t.Xm41aV),
            onSelect: t,
            children: [
                (0, a.jsxs)(r.kSQ, {
                    children: [
                        c,
                        e.isCategory()
                            ? null
                            : (0, a.jsx)(r.sNh, {
                                  id: "jump-to-channel",
                                  label: b.intl.string(b.t.bQIM40),
                                  action: () => {
                                      (0, u.XU)(e.guild_id, e.id), (0, l.xf)();
                                  },
                              }),
                    ],
                }),
                (0, a.jsx)(r.kSQ, { children: s }),
            ],
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_AUDIT_LOG_MENU],
);
