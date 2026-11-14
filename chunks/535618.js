var s = n(582128),
    i = n(496431),
    l = n(927813),
    r = n(79545),
    a = n(948417);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = (0, r.Pd)(e),
                [o] = s.useState(() => Date.now()),
                u = s.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                c = u.getTime() - o,
                d =
                    t &&
                    (function (e) {
                        switch (e) {
                            case r.UA.UNENROLLED:
                            case r.UA.ENROLLED:
                            case r.UA.INCOMPLETE:
                                return !0;
                            case r.UA.COMPLETED:
                            case r.UA.CLAIMED:
                            case r.UA.EXPIRED:
                            case r.UA.EXPIRED_CLAIMABLE:
                            case r.UA.EXPIRED_CLAIMED:
                                return !1;
                        }
                    })(n) &&
                    c < a.zY &&
                    c > 0,
                { days: x, hours: m, minutes: E, seconds: h } = (0, i.A)(u, l.A.Millis.SECOND, void 0, !d);
            return d && (0 !== x || 0 !== m || 0 !== E || 0 !== h)
                ? `${String(24 * x + m).padStart(2, "0")}:${String(E).padStart(2, "0")}:${String(h).padStart(2, "0")}`
                : null;
        },
    },
);
