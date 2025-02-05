n.d(t, { Z: () => m });
var i = n(512722),
    r = n.n(i),
    l = n(525654),
    a = n.n(l),
    o = n(39612),
    s = n(271579),
    c = n(756647),
    d = n(703656),
    u = n(314897),
    _ = n(896797),
    h = n(626135),
    g = n(954824),
    p = n(981631);
function m(e) {
    let t = (function (e) {
            var t;
            let n = null === (t = a().os) || void 0 === t ? void 0 : t.family;
            if ('Android' === n || 'iOS' === n) {
                let t = u.default.getFingerprint(),
                    n = (0, s.WS)();
                return (
                    r()(null != e, 'generateAppPath: guildId cannot be null'),
                    (0, s.ZP)((0, o.z0)(e), {
                        utmSource: 'verify_hub_email',
                        fingerprint: t,
                        attemptId: n
                    })
                );
            }
            return 'discord://';
        })(e),
        n = (0, s.zS)(t);
    null != n &&
        h.default.track(p.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        g.Z.launch(t, (e) => {
            e || (0, d.dL)(_.Z.fallbackRoute);
        });
}
