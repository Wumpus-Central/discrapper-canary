t.d(n, { Z: () => C });
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(63063),
    s = t(376340),
    a = t(981631),
    l = t(388032),
    c = t(28901),
    d = t(38920);
function u() {
    return (0, o.jsx)('div', {
        className: c.__invalid_getCrunchyrollApp,
        children: (0, o.jsx)('div', {
            className: c.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: (0, o.jsx)(i.eee, {
                    href: r.Z.getArticleURL(a.BhN.CRUNCHYROLL_CONNECTION),
                    children: l.NW.string(l.t.hvVgAQ)
                })
            })
        })
    });
}
function C(e) {
    let { onClose: n } = e;
    return (0, o.jsx)(s.L, {
        img: (0, o.jsx)('img', {
            src: d,
            width: '224',
            height: '104',
            alt: ''
        }),
        title: l.NW.string(l.t.Fnvxvr),
        body: l.NW.string(l.t.YwXcen),
        content: (0, o.jsx)(u, {}),
        onClose: n
    });
}
