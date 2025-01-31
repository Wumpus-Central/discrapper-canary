n.d(t, {
    Z: () => h,
    _: () => d
});
var a = n(200651),
    r = n(192379),
    i = n(29978),
    c = n(780384),
    o = n(481060),
    s = n(756148),
    p = n(981631);
function d(e) {
    return (
        r.useEffect(() => {
            s.I.loadRecaptchaScript(e.sitekey, () => {
                var t, n, a;
                return null === (a = window) || void 0 === a
                    ? void 0
                    : null === (n = a.grecaptcha) || void 0 === n
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
        (0, a.jsx)(o.$jN, {})
    );
}
let l = (e) => {
    let { theme: t, ...n } = e,
        r = (0, c.wj)(t) ? 'dark' : 'light';
    return (0, a.jsx)(i.Z, {
        sitekey: p.OL7,
        ...n,
        theme: r
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
    });
let h = 12633 == n.j ? l : null;
