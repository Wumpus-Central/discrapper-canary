n.d(t, { M: () => E, a: () => _ });
var i = n(17928),
    r = n(627363),
    a = n(587895),
    s = n(20015),
    l = n(71393),
    o = n(287809),
    d = n(97005),
    c = n(652215);
let u = "DMAppChannel";
function _(e) {
    let t = (0, i.bG)(
            [o.default],
            () => {
                if (e?.type !== c.rbe.DM || e.isSystemDM()) return null;
                let t = o.default.getUser(e.getRecipientId());
                return t?.bot === !0 ? t.id : null;
            },
            [e],
        ),
        n = (0, d.TW)(u, { autoTrackExposure: null != t }),
        { data: a } = (0, r.YY)(n ? t : null);
    return null != a && (0, s.n)(a, c.gfo.DM_OPENS_ACTIVITY) ? a.id : null;
}
function E(e) {
    if (e.type !== c.rbe.DM || e.isSystemDM()) return !1;
    let t = o.default.getUser(e.getRecipientId());
    if (t?.bot !== !0 || !(0, d.OC)(Object.values(l.A.getGuilds()), u)) return !1;
    let n = a.A.getApplication(a.A.getAppIdForBotUserId(t.id) ?? t.id);
    return (0, s.n)(n, c.gfo.DM_OPENS_ACTIVITY);
}
