n.d(t, {
    Z: () => h,
    _: () => d
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    i = n(29978),
    c = n(780384),
    o = n(481060),
    s = n(756148),
    p = n(981631);
function d(e) {
    let { sitekey: t, action: n, onVerify: i } = e,
        [c, p] = r.useState(!1),
        d = r.useCallback(
            (e) => {
                i(e);
            },
            [i]
        ),
        l = r.useCallback(() => {
            var e, a, r;
            null === (r = window) ||
                void 0 === r ||
                null === (a = r.grecaptcha) ||
                void 0 === a ||
                null === (e = a.enterprise) ||
                void 0 === e ||
                e.ready(async () => {
                    var e;
                    d(await (null === (e = window) || void 0 === e ? void 0 : e.grecaptcha).enterprise.execute(t, null != n ? { action: n } : void 0)), p(!1);
                });
        }, [t, n, d]),
        h = r.useCallback(() => {
            p(!0), s.I.loadRecaptchaScript(t, l);
        }, [t, l]);
    return (
        r.useEffect(() => {
            c || h();
        }, [c, h]),
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
