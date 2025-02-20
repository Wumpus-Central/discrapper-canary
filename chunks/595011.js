n.d(l, { default: () => g });
var t = n(200651);
n(192379);
var r = n(481060),
    i = n(239091),
    o = n(410575),
    d = n(108843),
    s = n(100527),
    a = n(299206),
    c = n(88966),
    u = n(37258),
    f = n(931617),
    h = n(981631),
    b = n(388032);
let g = (0, d.Z)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: d, onSelect: s } = e,
            g = (0, u.Z)({
                userId: l.id,
                guildId: n
            }),
            Z = (0, f.Z)(l.id, n),
            O = (0, a.Z)({
                id: l.id,
                label: b.NW.string(b.t['/AXYnJ'])
            }),
            p = (0, c.Z)(l.id),
            j = l.isNonUserBot();
        return (0, t.jsx)(o.Z, {
            context: d,
            object: h.qAy.CONTEXT_MENU,
            children: (0, t.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': b.NW.string(b.t.liqwPD),
                onSelect: s,
                children: [
                    (0, t.jsxs)(r.kSQ, {
                        children: [!j && g, !j && p]
                    }),
                    (0, t.jsx)(r.kSQ, { children: !j && Z }),
                    (0, t.jsx)(r.kSQ, { children: O })
                ]
            })
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.AUDIT_LOG_USER_MENU]
);
