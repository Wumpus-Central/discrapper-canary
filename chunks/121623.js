var l = n(400253),
    i = n(869733),
    s = n(80703),
    r = n(197111),
    a = n(129230),
    o = n(877062),
    c = n(292572),
    u = n(652215);
let d = "template",
    h = {
        ...c.A,
        openNativeAppModal(e) {
            r.A.openNativeAppModal(e, u.e$_.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let n = null != e ? (0, l.FH)(e) : (0, l.BH)(),
                r = (0, i.I_)(),
                c = (0, i.Ay)(n, { utmSource: d, fingerprint: t, attemptId: r });
            (a.default.track(u.HAw.DEEP_LINK_CLICKED, {
                fingerprint: (0, s.v)(t),
                attempt_id: r,
                source: d,
                guild_template_code: e,
            }),
                o.A.launch(c, () => {}));
        },
    };
n.d(t, {}, { A: h });
