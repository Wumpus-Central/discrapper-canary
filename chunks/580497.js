n.d(t, { Z: () => f });
var r = n(512722),
    i = n.n(r),
    s = n(525654),
    l = n.n(s),
    a = n(39612),
    o = n(271579),
    c = n(756647),
    u = n(703656),
    d = n(314897),
    h = n(896797),
    g = n(626135),
    p = n(954824),
    m = n(981631);
function f(e) {
    let t = (function (e) {
            var t;
            let n = null == (t = l().os) ? void 0 : t.family;
            if ("Android" === n || "iOS" === n) {
                let t = d.default.getFingerprint(),
                    n = (0, o.WS)();
                return (
                    i()(null != e, "generateAppPath: guildId cannot be null"),
                    (0, o.ZP)((0, a.z0)(e), {
                        utmSource: "verify_hub_email",
                        fingerprint: t,
                        attemptId: n,
                    })
                );
            }
            return "discord://";
        })(e),
        n = (0, o.zS)(t);
    null != n &&
        g.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.Z.launch(t, (e) => {
            e || (0, u.dL)(h.Z.fallbackRoute);
        });
}
