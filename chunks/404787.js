"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(279194),
    s = n(506774),
    a = n(77729),
    o = n(954571),
    l = n(837921),
    u = n(545459),
    c = n(652215);
function d(e) {
    return e?._state?.lastTestTimestamp;
}
function _() {
    return (
        r.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN &&
                !0 !== s.w.get(i.qx) &&
                l.Ay.supportsFeature(c.BYE.USER_DATA_CACHE) &&
                (u._r(),
                a.A.userDataCache.getCached().then((e) => {
                    if (null == e) {
                        u.Py(), o.default.track(c.HAw.DOMAIN_MIGRATED, { success: !1, has_data: !1 }, { flush: !0 });
                        return;
                    }
                    let t = Object.keys(e),
                        n = 0 !== t.length,
                        r = null != e.token,
                        l = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                        _ = null == l || null == d(l) || d(l) <= d(s.w.get("RTCRegionStore"));
                    n &&
                        r &&
                        !_ &&
                        (s.w.clear(),
                        t.forEach((t) => {
                            let n = e[t];
                            try {
                                s.w.set(t, JSON.parse(n));
                            } catch (e) {}
                        })),
                        o.default.track(
                            c.HAw.DOMAIN_MIGRATED,
                            { success: !0, current_is_newer: _, has_data: n },
                            { flush: !0 },
                        ),
                        s.w.set(i.qx, !0),
                        a.A.userDataCache.deleteCache(),
                        u.Yw();
                }));
        }, []),
        null
    );
}
