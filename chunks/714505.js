n.d(t, { A: () => m });
var r = n(284009),
    i = n.n(r),
    s = n(481613),
    l = n.n(s),
    a = n(400253),
    o = n(49485),
    c = n(80703),
    u = n(976860),
    d = n(961350),
    h = n(650048),
    f = n(954571),
    p = n(877062),
    g = n(652215);
function m(e) {
    let t = (function (e) {
            var t;
            let n = null == (t = l().os) ? void 0 : t.family;
            if ("Android" === n || "iOS" === n) {
                let t = d.default.getFingerprint(),
                    n = (0, o.I_)();
                return (
                    i()(null != e, "generateAppPath: guildId cannot be null"),
                    (0, o.Ay)((0, a.jN)(e), {
                        utmSource: "verify_hub_email",
                        fingerprint: t,
                        attemptId: n,
                    })
                );
            }
            return "discord://";
        })(e),
        n = (0, o.X7)(t);
    null != n &&
        f.default.track(g.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.A.launch(t, (e) => {
            e || (0, u.bG)(h.A.fallbackRoute);
        });
}
