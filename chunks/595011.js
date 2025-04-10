n.d(l, { default: () => b });
var t = n(200651);
n(192379);
var r = n(481060),
    i = n(239091),
    o = n(410575),
    s = n(108843),
    c = n(100527),
    d = n(299206),
    u = n(88966),
    a = n(37258),
    f = n(931617),
    g = n(981631),
    h = n(388032);
let b = (0, s.Z)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: s, onSelect: c } = e,
            b = (0, a.Z)({
                userId: l.id,
                guildId: n
            }),
            Z = (0, f.Z)(l.id, n),
            O = (0, d.Z)({
                id: l.id,
                label: h.NW.string(h.t['/AXYnJ'])
            }),
            p = (0, u.Z)(l.id),
            j = l.isNonUserBot();
        return (0, t.jsx)(o.Z, {
            context: s,
            object: g.qAy.CONTEXT_MENU,
            children: (0, t.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': h.NW.string(h.t.liqwPD),
                onSelect: c,
                children: [
                    (0, t.jsxs)(r.kSQ, {
                        children: [!j && b, !j && p]
                    }),
                    (0, t.jsx)(r.kSQ, { children: !j && Z }),
                    (0, t.jsx)(r.kSQ, { children: O })
                ]
            })
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.AUDIT_LOG_USER_MENU]
);
