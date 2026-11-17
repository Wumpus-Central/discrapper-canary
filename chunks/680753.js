var r = n(690094),
    i = n(83220),
    o = n(231577);
function a(e, t = {}) {
    if (
        (t.user &&
            (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
            e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
        (e.timestamp = t.timestamp || (0, i.zf)()),
        t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
        t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
        t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, o.eJ)()),
        void 0 !== t.init && (e.init = t.init),
        !e.did && t.did && (e.did = `${t.did}`),
        "number" == typeof t.started && (e.started = t.started),
        e.ignoreDuration)
    )
        e.duration = void 0;
    else if ("number" == typeof t.duration) e.duration = t.duration;
    else {
        let t = e.timestamp - e.started;
        e.duration = t >= 0 ? t : 0;
    }
    (t.release && (e.release = t.release),
        t.environment && (e.environment = t.environment),
        !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
        !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
        "number" == typeof t.errors && (e.errors = t.errors),
        t.status && (e.status = t.status));
}
n.d(
    t,
    {},
    {
        Vu: function (e, t) {
            let n = {};
            (t ? (n = { status: t }) : "ok" === e.status && (n = { status: "exited" }), a(e, n));
        },
        fj: function (e) {
            let t = (0, i.zf)(),
                n = {
                    sid: (0, o.eJ)(),
                    init: !0,
                    timestamp: t,
                    started: t,
                    duration: 0,
                    status: "ok",
                    errors: 0,
                    ignoreDuration: !1,
                    toJSON: () => {
                        var e;
                        return (
                            (e = n),
                            (0, r.Ce)({
                                sid: `${e.sid}`,
                                init: e.init,
                                started: new Date(1e3 * e.started).toISOString(),
                                timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                status: e.status,
                                errors: e.errors,
                                did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                                duration: e.duration,
                                abnormal_mechanism: e.abnormal_mechanism,
                                attrs: {
                                    release: e.release,
                                    environment: e.environment,
                                    ip_address: e.ipAddress,
                                    user_agent: e.userAgent,
                                },
                            })
                        );
                    },
                };
            return (e && a(n, e), n);
        },
        qO: a,
    },
);
