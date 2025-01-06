n.d(t, {
    r: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(442837),
    s = n(481060),
    o = n(944163),
    c = n(999382),
    d = n(548522),
    u = n(388032),
    m = n(229311);
function h(e) {
    let { pendingFields: t } = e,
        h = (0, a.e7)([c.Z], () => c.Z.getProps().guild),
        g = null == h ? void 0 : h.id,
        x = r.useCallback(() => {
            if (null != g)
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('80026'), n.e('36869')]).then(n.bind(n, 645264));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildId: g,
                            isPreview: !0
                        });
                });
        }, [g]),
        p = (0, a.e7)([o.Z], () => o.Z.get(g));
    if (null == h) return null;
    let f = null != t ? t : null == p ? void 0 : p.formFields;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: u.intl.string(u.t.AHJddH)
            }),
            (0, i.jsx)(l.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: m.applicationBody,
                children: u.intl.string(u.t.Z7TCtb)
            }),
            (0, i.jsx)(s.LinkButton, {
                text: u.intl.string(u.t.SKNnqq),
                icon: s.WindowLaunchIcon,
                variant: 'primary',
                onClick: x
            }),
            (0, i.jsx)('div', {
                className: m.form,
                children:
                    null != f
                        ? (0, i.jsx)(d.y, {
                              guild: h,
                              formFields: f
                          })
                        : (0, i.jsx)(s.Spinner, {})
            })
        ]
    });
}
