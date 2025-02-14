e.d(t, { default: () => f });
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(239091),
    s = e(410575),
    a = e(108843),
    c = e(100527),
    d = e(299206),
    u = e(88966),
    o = e(37258),
    h = e(981631),
    Z = e(388032);
let f = (0, a.Z)(
    function (n) {
        let { user: t, analyticsContext: e, onSelect: a } = n,
            c = (0, o.Z)({ userId: t.id }),
            f = (0, d.Z)({
                id: t.id,
                label: Z.intl.string(Z.t['/AXYnJ'])
            }),
            p = (0, u.Z)(t.id),
            v = t.isNonUserBot();
        return (0, i.jsx)(s.Z, {
            context: e,
            object: h.qAy.CONTEXT_MENU,
            children: (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': Z.intl.string(Z.t.liqwPD),
                onSelect: a,
                children: [
                    (0, i.jsxs)(r.kSQ, {
                        children: [!v && c, !v && p]
                    }),
                    (0, i.jsx)(r.kSQ, { children: f })
                ]
            })
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.BANNED_USER_MENU]
);
