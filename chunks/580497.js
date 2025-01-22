n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(512722),
    r = n.n(i),
    s = n(525654),
    l = n.n(s),
    o = n(39612),
    a = n(271579),
    c = n(756647),
    d = n(703656),
    u = n(314897),
    h = n(896797),
    g = n(626135),
    f = n(954824),
    m = n(981631);
function p(e) {
    let t = (function (e) {
            var t;
            let n = null === (t = l().os) || void 0 === t ? void 0 : t.family;
            if ('Android' === n || 'iOS' === n) {
                let t = u.default.getFingerprint(),
                    n = (0, a.WS)();
                return (
                    r()(null != e, 'generateAppPath: guildId cannot be null'),
                    (0, a.ZP)((0, o.z0)(e), {
                        utmSource: 'verify_hub_email',
                        fingerprint: t,
                        attemptId: n
                    })
                );
            }
            return 'discord://';
        })(e),
        n = (0, a.zS)(t);
    null != n &&
        g.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        f.Z.launch(t, (e) => {
            !e && (0, d.dL)(h.Z.fallbackRoute);
        });
}
