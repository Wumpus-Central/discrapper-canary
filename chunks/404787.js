n.d(t, {
    A: () => f,
});
var r = n(64700),
    i = n(279194),
    a = n(506774),
    s = n(77729),
    o = n(954571),
    l = n(837921),
    c = n(545459),
    u = n(652215);

function d(e) {
    var t;
    return null == e || null == (t = e._state) ? void 0 : t.lastTestTimestamp;
}

function f() {
    return (
        r.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN &&
                !0 !== a.w.get(i.qx) &&
                l.Ay.supportsFeature(u.BYE.USER_DATA_CACHE) &&
                (c._r(),
                s.A.userDataCache.getCached().then((e) => {
                    if (null == e) {
                        c.Py(),
                            o.default.track(
                                u.HAw.DOMAIN_MIGRATED,
                                {
                                    success: !1,
                                    has_data: !1,
                                },
                                {
                                    flush: !0,
                                },
                            );
                        return;
                    }
                    let t = Object.keys(e),
                        n = 0 !== t.length,
                        r = null != e.token,
                        l = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                        f = null == l || null == d(l) || d(l) <= d(a.w.get("RTCRegionStore"));
                    n &&
                        r &&
                        !f &&
                        (a.w.clear(),
                        t.forEach((t) => {
                            let n = e[t];
                            try {
                                a.w.set(t, JSON.parse(n));
                            } catch (e) {}
                        })),
                        o.default.track(
                            u.HAw.DOMAIN_MIGRATED,
                            {
                                success: !0,
                                current_is_newer: f,
                                has_data: n,
                            },
                            {
                                flush: !0,
                            },
                        ),
                        a.w.set(i.qx, !0),
                        s.A.userDataCache.deleteCache(),
                        c.Yw();
                }));
        }, []),
        null
    );
}
