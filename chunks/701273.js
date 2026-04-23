i.d(t, { A: () => v });
var l = i(481613),
    n = i.n(l),
    s = i(400253),
    a = i(742821),
    r = i(80703),
    c = i(803306),
    d = i(976860),
    o = i(495544),
    u = i(650048),
    m = i(954571),
    x = i(877062),
    h = i(652215);
async function g(e) {
    let t = n().os?.family;
    if ("Android" === t || "iOS" === t) {
        let t = o.default.getFingerprint() ?? o.default.getId(),
            i = (0, a.I_)();
        if (null == t && o.default.isAuthenticated())
            try {
                await (0, c.rQ)(), (t = o.default.getId());
            } catch {}
        return (0, a.Ay)((0, s.BH)(), { utmSource: e, fingerprint: t, attemptId: i });
    }
    return "discord://";
}
async function v(e) {
    let t = await g(e),
        i = (0, a.X7)(t);
    null != i &&
        m.default.track(h.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, r.v)(i.fingerprint),
            attempt_id: i.attemptId,
            source: i.utmSource,
        }),
        x.A.launch(t, (e) => {
            e || (0, d.bG)(u.A.fallbackRoute);
        });
}
