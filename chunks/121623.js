l.d(t, { A: () => p });
var r = l(400253),
    n = l(742821),
    i = l(80703),
    s = l(197111),
    a = l(954571),
    o = l(877062),
    u = l(292572),
    c = l(652215);
let d = "template",
    p = {
        ...u.A,
        openNativeAppModal(e) {
            s.A.openNativeAppModal(e, c.e$_.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let l = null != e ? (0, r.FH)(e) : (0, r.BH)(),
                s = (0, n.I_)(),
                u = (0, n.Ay)(l, { utmSource: d, fingerprint: t, attemptId: s });
            a.default.track(c.HAw.DEEP_LINK_CLICKED, {
                fingerprint: (0, i.v)(t),
                attempt_id: s,
                source: d,
                guild_template_code: e,
            }),
                o.A.launch(u, () => {});
        },
    };
