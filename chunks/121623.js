a.d(e, { A: () => _ });
var n = a(400253),
    i = a(742821),
    o = a(80703),
    l = a(197111),
    r = a(954571),
    u = a(877062),
    A = a(292572),
    p = a(652215);
let s = "template",
    _ = {
        ...A.A,
        openNativeAppModal(t) {
            l.A.openNativeAppModal(t, p.e$_.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(t, e) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let a = null != t ? (0, n.FH)(t) : (0, n.BH)(),
                l = (0, i.I_)(),
                A = (0, i.Ay)(a, { utmSource: s, fingerprint: e, attemptId: l });
            r.default.track(p.HAw.DEEP_LINK_CLICKED, {
                fingerprint: (0, o.v)(e),
                attempt_id: l,
                source: s,
                guild_template_code: t,
            }),
                u.A.launch(A, () => {});
        },
    };
