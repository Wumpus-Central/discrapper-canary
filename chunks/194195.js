e.d(a, { default: () => h });
var t = e(627968);
e(64700);
var i = e(397927),
    l = e(442433),
    c = e(398590),
    r = e(358367),
    s = e(793574),
    A = e(50268),
    d = e(976860),
    u = e(317910),
    o = e(985018);
let h = (0, r.A)(
    function (n) {
        let { channel: a, onSelect: e } = n,
            r = (0, u.A)(a),
            s = (0, A.A)({ id: a.id, label: o.intl.string(o.t.gFHI3k) });
        return (0, t.jsxs)(i.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: l.Z_,
            "aria-label": o.intl.string(o.t.Xm41aV),
            onSelect: e,
            children: [
                (0, t.jsxs)(i.rXV, {
                    children: [
                        r,
                        a.isCategory()
                            ? null
                            : (0, t.jsx)(i.Drp, {
                                  id: "jump-to-channel",
                                  label: o.intl.string(o.t.bQIM40),
                                  action: () => {
                                      (0, d.uh)(a.guild_id, a.id), (0, c.jH)();
                                  },
                              }),
                    ],
                }),
                (0, t.jsx)(i.rXV, { children: s }),
            ],
        });
    },
    [s.A.CONTEXT_MENU, s.A.CHANNEL_AUDIT_LOG_MENU],
);
