n.d(t, {
    _: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(29978),
    a = n(780384),
    s = n(481060),
    o = n(756148),
    c = n(981631);
function d(e) {
    return (
        r.useEffect(() => {
            o.I.loadRecaptchaScript(e.sitekey, () => {
                var t, n, i;
                return null === (i = window) || void 0 === i
                    ? void 0
                    : null === (n = i.grecaptcha) || void 0 === n
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
        (0, i.jsx)(s.Spinner, {})
    );
}
let u = (e) => {
    let { theme: t, ...n } = e,
        r = (0, a.wj)(t) ? 'dark' : 'light';
    return (0, i.jsx)(l.Z, {
        sitekey: c.OL7,
        ...n,
        theme: r
    });
};
(u.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (u.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    }),
    (t.Z = u);
