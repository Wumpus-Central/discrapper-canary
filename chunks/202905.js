n.d(t, {
    r: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    s = n(442837),
    a = n(481060),
    o = n(944163),
    c = n(66511),
    d = n(999382),
    u = n(548522),
    m = n(388032),
    h = n(205161);
function g(e) {
    let { pendingFields: t } = e,
        n = (0, s.e7)([d.Z], () => d.Z.getProps().guild),
        g = null == n ? void 0 : n.id,
        x = r.useCallback(() => {
            if (null != g) c.Z.openMemberVerificationPreviewModal(g);
        }, [g]),
        p = (0, s.e7)([o.Z], () => o.Z.get(g));
    if (null == n) return null;
    let f = null != t ? t : null == p ? void 0 : p.formFields;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: m.intl.string(m.t.AHJddH)
            }),
            (0, i.jsx)(l.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: h.applicationBody,
                children: m.intl.string(m.t.Z7TCtb)
            }),
            (0, i.jsx)(a.LinkButton, {
                text: m.intl.string(m.t.SKNnqq),
                icon: a.WindowLaunchIcon,
                variant: 'primary',
                onClick: x
            }),
            (0, i.jsx)('div', {
                className: h.form,
                children:
                    null != f
                        ? (0, i.jsx)(u.y, {
                              guild: n,
                              formFields: f
                          })
                        : (0, i.jsx)(a.Spinner, {})
            })
        ]
    });
}
