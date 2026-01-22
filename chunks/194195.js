t.d(e, { default: () => b });
var r = t(627968);
t(64700);
var a = t(397927),
    c = t(442433),
    i = t(398590),
    l = t(358367),
    s = t(793574),
    o = t(50268),
    u = t(976860),
    A = t(317910),
    d = t(985018);
let b = (0, l.A)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            l = (0, A.A)(e),
            s = (0, o.A)({
                id: e.id,
                label: d.intl.string(d.t.gFHI3k),
            });
        return (0, r.jsxs)(a.W1t, {
            navId: "channel-context",
            onClose: c.Z_,
            "aria-label": d.intl.string(d.t.Xm41aV),
            onSelect: t,
            children: [
                (0, r.jsxs)(a.rXV, {
                    children: [
                        l,
                        e.isCategory()
                            ? null
                            : (0, r.jsx)(a.Drp, {
                                  id: "jump-to-channel",
                                  label: d.intl.string(d.t.bQIM40),
                                  action: () => {
                                      (0, u.uh)(e.guild_id, e.id), (0, i.jH)();
                                  },
                              }),
                    ],
                }),
                (0, r.jsx)(a.rXV, { children: s }),
            ],
        });
    },
    [s.A.CONTEXT_MENU, s.A.CHANNEL_AUDIT_LOG_MENU],
);
