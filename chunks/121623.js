n.d(t, { A: () => A });
var i = n(400253),
    r = n(49485),
    a = n(80703),
    l = n(197111),
    s = n(954571),
    o = n(877062),
    d = n(292572),
    c = n(652215);
let u = "template",
    A = {
        ...d.A,
        openNativeAppModal(e) {
            l.A.openNativeAppModal(e, c.e$_.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let n = null != e ? (0, i.FH)(e) : (0, i.BH)(),
                l = (0, r.I_)(),
                d = (0, r.Ay)(n, { utmSource: u, fingerprint: t, attemptId: l });
            s.default.track(c.HAw.DEEP_LINK_CLICKED, {
                fingerprint: (0, a.v)(t),
                attempt_id: l,
                source: u,
                guild_template_code: e,
            }),
                o.A.launch(d, () => {});
        },
    };
