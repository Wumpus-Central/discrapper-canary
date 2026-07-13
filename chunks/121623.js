"use strict";
n.d(t, { A: () => _ });
var i = n(400253),
    r = n(742821),
    a = n(80703),
    s = n(197111),
    l = n(174459),
    o = n(877062),
    d = n(292572),
    c = n(652215);
let u = "template",
    _ = {
        ...d.A,
        openNativeAppModal(e) {
            s.A.openNativeAppModal(e, c.e$_.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let n = null != e ? (0, i.FH)(e) : (0, i.BH)(),
                s = (0, r.I_)(),
                d = (0, r.Ay)(n, { utmSource: u, fingerprint: t, attemptId: s });
            l.default.track(c.HAw.DEEP_LINK_CLICKED, {
                fingerprint: (0, a.v)(t),
                attempt_id: s,
                source: u,
                guild_template_code: e,
            }),
                o.A.launch(d, () => {});
        },
    };
