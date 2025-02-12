n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(405222),
    o = n(434404),
    c = n(999382),
    d = n(388032),
    u = n(484260);
function m(e) {
    let { guild: t } = e,
        n = t.id,
        m = (0, l.e7)([c.Z], () => c.Z.getGuildProfile()),
        h = (null == m ? void 0 : m.visibility) === a.k.PUBLIC,
        g = r.useCallback(() => {
            h ? o.Z.updateGuildProfile(n, { visibility: a.k.RESTRICTED }) : o.Z.updateGuildProfile(n, { visibility: a.k.PUBLIC });
        }, [n, h]);
    return (0, i.jsx)(s.hjN, {
        className: u.container,
        children: (0, i.jsx)(s.tEY, {
            children: (0, i.jsxs)(s.P3F, {
                onClick: g,
                className: u.control,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: d.intl.string(d.t.fjHWen)
                    }),
                    (0, i.jsx)(s.XZJ, {
                        value: !h,
                        displayOnly: !0
                    })
                ]
            })
        })
    });
}
