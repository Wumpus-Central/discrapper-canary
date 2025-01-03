n.d(t, {
    _: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(29978),
    c = n(780384),
    o = n(481060),
    s = n(756148),
    p = n(981631);
function d(e) {
    return (
        i.useEffect(() => {
            s.I.loadRecaptchaScript(e.sitekey, () => {
                var t, n, r;
                return null === (r = window) || void 0 === r
                    ? void 0
                    : null === (n = r.grecaptcha) || void 0 === n
                      ? void 0
                      : null === (t = n.enterprise) || void 0 === t
                        ? void 0
                        : t.ready(async () => {
                              var t;
                              let n = await (null === (t = window) || void 0 === t ? void 0 : t.grecaptcha).enterprise.execute(e.sitekey, null != e.action ? { action: e.action } : void 0);
                              e.onVerify(n);
                          });
            });
        }, [e]),
        (0, r.jsx)(o.Spinner, {})
    );
}
let l = (e) => {
    let { theme: t, ...n } = e,
        i = (0, c.wj)(t) ? 'dark' : 'light';
    return (0, r.jsx)(a.Z, {
        sitekey: p.OL7,
        ...n,
        theme: i
    });
};
(l.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (l.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    }),
    (t.Z = 12633 == n.j ? l : null);
