n.d(t, { Z: () => p });
var i = n(512722),
    r = n.n(i),
    a = n(525654),
    l = n.n(a),
    s = n(39612),
    o = n(271579),
    c = n(756647),
    d = n(703656),
    u = n(314897),
    h = n(896797),
    _ = n(626135),
    m = n(954824),
    g = n(981631);
function p(e) {
    let t = (function (e) {
            var t;
            let n = null === (t = l().os) || void 0 === t ? void 0 : t.family;
            if ('Android' === n || 'iOS' === n) {
                let t = u.default.getFingerprint(),
                    n = (0, o.WS)();
                return (
                    r()(null != e, 'generateAppPath: guildId cannot be null'),
                    (0, o.ZP)((0, s.z0)(e), {
                        utmSource: 'verify_hub_email',
                        fingerprint: t,
                        attemptId: n
                    })
                );
            }
            return 'discord://';
        })(e),
        n = (0, o.zS)(t);
    null != n &&
        _.default.track(g.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        m.Z.launch(t, (e) => {
            e || (0, d.dL)(h.Z.fallbackRoute);
        });
}
