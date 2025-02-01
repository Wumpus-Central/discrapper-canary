e.d(t, { default: () => f });
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(239091),
    s = e(410575),
    a = e(108843),
    d = e(100527),
    c = e(299206),
    u = e(88966),
    o = e(37258),
    h = e(981631),
    Z = e(388032);
let f = (0, a.Z)(
    function (n) {
        let { user: t, analyticsContext: e, onSelect: a } = n,
            d = (0, o.Z)({ userId: t.id }),
            f = (0, c.Z)({
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
                        children: [!v && d, !v && p]
                    }),
                    (0, i.jsx)(r.kSQ, { children: f })
                ]
            })
        });
    },
    [d.Z.CONTEXT_MENU, d.Z.BANNED_USER_MENU]
);
