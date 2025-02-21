n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(405222),
    l = n(434404),
    o = n(388032),
    c = n(985775);
function d(e) {
    let { profile: t } = e,
        n = t.id,
        d = t.visibility === a.k.PUBLIC,
        u = i.useCallback(() => {
            d ? l.Z.updateGuildProfile(n, { visibility: a.k.RESTRICTED }) : l.Z.updateGuildProfile(n, { visibility: a.k.PUBLIC });
        }, [n, d]);
    return (0, r.jsx)(s.hjN, {
        className: c.container,
        children: (0, r.jsx)(s.tEY, {
            children: (0, r.jsxs)(s.P3F, {
                onClick: u,
                className: c.control,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: o.NW.string(o.t.fjHWen)
                    }),
                    (0, r.jsx)(s.XZJ, {
                        value: !d,
                        displayOnly: !0
                    })
                ]
            })
        })
    });
}
