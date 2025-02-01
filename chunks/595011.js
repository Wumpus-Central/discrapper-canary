n.d(l, { default: () => g });
var t = n(200651);
n(192379);
var i = n(481060),
    r = n(239091),
    o = n(410575),
    d = n(108843),
    s = n(100527),
    a = n(299206),
    u = n(88966),
    c = n(37258),
    h = n(931617),
    Z = n(981631),
    f = n(388032);
let g = (0, d.Z)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: d, onSelect: s } = e,
            g = (0, c.Z)({
                userId: l.id,
                guildId: n
            }),
            v = (0, h.Z)(l.id, n),
            x = (0, a.Z)({
                id: l.id,
                label: f.intl.string(f.t['/AXYnJ'])
            }),
            j = (0, u.Z)(l.id),
            p = l.isNonUserBot();
        return (0, t.jsx)(o.Z, {
            context: d,
            object: Z.qAy.CONTEXT_MENU,
            children: (0, t.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': f.intl.string(f.t.liqwPD),
                onSelect: s,
                children: [
                    (0, t.jsxs)(i.kSQ, {
                        children: [!p && g, !p && j]
                    }),
                    (0, t.jsx)(i.kSQ, { children: !p && v }),
                    (0, t.jsx)(i.kSQ, { children: x })
                ]
            })
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.AUDIT_LOG_USER_MENU]
);
