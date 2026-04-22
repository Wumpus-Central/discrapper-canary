n.d(t, { default: () => N });
var l = n(627968);
n(64700);
var i = n(861672),
    r = n(477782),
    a = n(442433),
    u = n(398590),
    o = n(358367),
    s = n(793574),
    d = n(50268),
    c = n(976860),
    E = n(317910),
    _ = n(985018);
let N = (0, o.A)(
    function (e) {
        let { channel: t, onSelect: n } = e,
            o = (0, E.A)(t),
            s = (0, d.A)({ id: t.id, label: _.intl.string(_.t.gFHI3k) });
        return (0, l.jsxs)(i.W, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: a.Z_,
            "aria-label": _.intl.string(_.t.Xm41aV),
            onSelect: n,
            children: [
                (0, l.jsxs)(r.rX, {
                    children: [
                        o,
                        t.isCategory()
                            ? null
                            : (0, l.jsx)(r.Dr, {
                                  id: "jump-to-channel",
                                  label: _.intl.string(_.t.bQIM40),
                                  action: () => {
                                      (0, c.uh)(t.guild_id, t.id), (0, u.jH)();
                                  },
                              }),
                    ],
                }),
                (0, l.jsx)(r.rX, { children: s }),
            ],
        });
    },
    [s.A.CONTEXT_MENU, s.A.CHANNEL_AUDIT_LOG_MENU],
);
