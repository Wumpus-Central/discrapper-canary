e.d(t, {
    Z: function () {
        return C;
    }
});
var o = e(200651);
e(192379);
var i = e(481060),
    r = e(63063),
    c = e(376340),
    s = e(981631),
    l = e(388032),
    a = e(567770),
    u = e(592240);
function d() {
    return (0, o.jsx)('div', {
        className: a.__invalid_getCrunchyrollApp,
        children: (0, o.jsx)('div', {
            className: a.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: (0, o.jsx)(i.Anchor, {
                    href: r.Z.getArticleURL(s.BhN.CRUNCHYROLL_CONNECTION),
                    children: l.intl.string(l.t.hvVgAQ)
                })
            })
        })
    });
}
function C(n) {
    let { onClose: t } = n;
    return (0, o.jsx)(c.L, {
        img: (0, o.jsx)('img', {
            src: u,
            width: '224',
            height: '104',
            alt: ''
        }),
        title: l.intl.string(l.t.Fnvxvr),
        body: l.intl.string(l.t.YwXcen),
        content: (0, o.jsx)(d, {}),
        onClose: t
    });
}
