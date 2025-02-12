n.d(t, { r: () => h });
var i = n(200651);
n(192379);
var r = n(793030),
    l = n(442837),
    s = n(481060),
    a = n(944163),
    o = n(999382),
    c = n(548522),
    d = n(651390),
    u = n(388032),
    m = n(82428);
function h(e) {
    let { pendingFields: t } = e,
        n = (0, l.e7)([o.Z], () => o.Z.getProps().guild),
        h = null == n ? void 0 : n.id,
        g = (0, l.e7)([a.Z], () => a.Z.get(h));
    if (null == n) return null;
    let x = null != t ? t : null == g ? void 0 : g.formFields;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: u.intl.string(u.t.AHJddH)
            }),
            (0, i.jsx)(r.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: m.applicationBody,
                children: u.intl.string(u.t.Z7TCtb)
            }),
            (0, i.jsx)(d.c, { guildId: n.id }),
            (0, i.jsx)('div', {
                className: m.form,
                children:
                    null != x
                        ? (0, i.jsx)(c.y, {
                              guild: n,
                              formFields: x
                          })
                        : (0, i.jsx)(s.$jN, {})
            })
        ]
    });
}
