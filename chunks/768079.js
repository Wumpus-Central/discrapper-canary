n.d(t, { default: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    c = n(239091),
    l = n(410575),
    o = n(108843),
    a = n(100527),
    u = n(299206),
    s = n(88966),
    d = n(37258),
    f = n(981631),
    b = n(388032);
let p = (0, o.Z)(
    function (e) {
        let { user: t, analyticsContext: n, onSelect: o } = e,
            a = (0, d.Z)({ userId: t.id }),
            p = (0, u.Z)({
                id: t.id,
                label: b.NW.string(b.t['/AXYnJ'])
            }),
            O = (0, s.Z)(t.id),
            h = t.isNonUserBot();
        return (0, r.jsx)(l.Z, {
            context: n,
            object: f.qAy.CONTEXT_MENU,
            children: (0, r.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: c.Zy,
                'aria-label': b.NW.string(b.t.liqwPD),
                onSelect: o,
                children: [
                    (0, r.jsxs)(i.kSQ, {
                        children: [!h && a, !h && O]
                    }),
                    (0, r.jsx)(i.kSQ, { children: p })
                ]
            })
        });
    },
    [a.Z.CONTEXT_MENU, a.Z.BANNED_USER_MENU]
);
