"use strict";
n.d(t, { A: () => _ });
var i = n(400253),
    r = n(742821),
    s = n(80703),
    a = n(197111),
    o = n(174459),
    l = n(877062),
    u = n(292572),
    c = n(652215);
let d = "template",
    _ = {
        ...u.A,
        openNativeAppModal(e) {
            a.A.openNativeAppModal(e, c.e$_.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let n = null != e ? (0, i.FH)(e) : (0, i.BH)(),
                a = (0, r.I_)(),
                u = (0, r.Ay)(n, { utmSource: d, fingerprint: t, attemptId: a });
            o.default.track(c.HAw.DEEP_LINK_CLICKED, {
                fingerprint: (0, s.v)(t),
                attempt_id: a,
                source: d,
                guild_template_code: e,
            }),
                l.A.launch(u, () => {});
        },
    };
