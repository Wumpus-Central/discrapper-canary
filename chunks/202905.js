n.d(t, { r: () => p });
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(442837),
    a = n(481060),
    l = n(944163),
    o = n(999382),
    c = n(548522),
    d = n(651390),
    u = n(388032),
    m = n(870114);
function p(e) {
    let { pendingFields: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.getProps().guild),
        p = null == n ? void 0 : n.id,
        g = (0, s.e7)([l.Z], () => l.Z.get(p));
    if (null == n) return null;
    let h = null != t ? t : null == g ? void 0 : g.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: u.NW.string(u.t.AHJddH)
            }),
            (0, r.jsx)(i.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: m.applicationBody,
                children: u.NW.string(u.t.Z7TCtb)
            }),
            (0, r.jsx)(d.c, { guildId: n.id }),
            (0, r.jsx)('div', {
                className: m.form,
                children:
                    null != h
                        ? (0, r.jsx)(c.y, {
                              guild: n,
                              formFields: h
                          })
                        : (0, r.jsx)(a.$jN, {})
            })
        ]
    });
}
