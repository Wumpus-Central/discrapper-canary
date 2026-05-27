n.d(t, { A: () => m });
var i = n(400253),
    l = n(742821),
    s = n(80703),
    r = n(197111),
    a = n(174459),
    o = n(877062),
    c = n(292572),
    d = n(652215);
let u = "template",
    m = {
        ...c.A,
        openNativeAppModal(e) {
            r.A.openNativeAppModal(e, d.e$_.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let n = null != e ? (0, i.FH)(e) : (0, i.BH)(),
                r = (0, l.I_)(),
                c = (0, l.Ay)(n, { utmSource: u, fingerprint: t, attemptId: r });
            a.default.track(d.HAw.DEEP_LINK_CLICKED, {
                fingerprint: (0, s.v)(t),
                attempt_id: r,
                source: u,
                guild_template_code: e,
            }),
                o.A.launch(c, () => {});
        },
    };
