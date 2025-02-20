n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(405222),
    o = n(434404),
    c = n(999382),
    d = n(388032),
    u = n(985775);
function m(e) {
    let { guild: t } = e,
        n = t.id,
        m = (0, s.e7)([c.Z], () => c.Z.getGuildProfile()),
        p = (null == m ? void 0 : m.visibility) === l.k.PUBLIC,
        g = i.useCallback(() => {
            p ? o.Z.updateGuildProfile(n, { visibility: l.k.RESTRICTED }) : o.Z.updateGuildProfile(n, { visibility: l.k.PUBLIC });
        }, [n, p]);
    return (0, r.jsx)(a.hjN, {
        className: u.container,
        children: (0, r.jsx)(a.tEY, {
            children: (0, r.jsxs)(a.P3F, {
                onClick: g,
                className: u.control,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: d.NW.string(d.t.fjHWen)
                    }),
                    (0, r.jsx)(a.XZJ, {
                        value: !p,
                        displayOnly: !0
                    })
                ]
            })
        })
    });
}
