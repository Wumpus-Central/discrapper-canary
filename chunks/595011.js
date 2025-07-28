n.d(l, { default: () => h });
var t = n(255367);
n(73800);
var r = n(481060),
    i = n(239091),
    o = n(410575),
    s = n(108843),
    c = n(100527),
    u = n(299206),
    d = n(88966),
    a = n(37258),
    f = n(931617),
    b = n(981631),
    g = n(388032);
let h = (0, s.Z)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: s, onSelect: c } = e,
            h = (0, a.Z)({
                userId: l.id,
                guildId: n
            }),
            Z = (0, f.Z)(l.id, n),
            j = (0, u.Z)({
                id: l.id,
                label: g.intl.string(g.t['/AXYnJ'])
            }),
            p = (0, d.Z)(l.id),
            v = l.isNonUserBot();
        return (0, t.jsx)(o.Z, {
            context: s,
            object: b.qAy.CONTEXT_MENU,
            children: (0, t.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': g.intl.string(g.t.liqwPD),
                onSelect: c,
                children: [
                    (0, t.jsxs)(r.kSQ, {
                        children: [!v && h, !v && p]
                    }),
                    (0, t.jsx)(r.kSQ, { children: !v && Z }),
                    (0, t.jsx)(r.kSQ, { children: j })
                ]
            })
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.AUDIT_LOG_USER_MENU]
);
