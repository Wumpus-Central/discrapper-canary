var a = i(481613),
    n = i.n(a),
    r = i(400253),
    u = i(869733),
    d = i(80703),
    c = i(803306),
    l = i(976860),
    f = i(46653),
    p = i(650048),
    s = i(129230),
    o = i(877062),
    h = i(652215);
i.d(
    e,
    {},
    {
        A: async function (t) {
            let e = await (async function (t) {
                    let e = n().os?.family;
                    if ("Android" === e || "iOS" === e) {
                        let e = f.default.getFingerprint() ?? f.default.getId(),
                            i = (0, u.I_)();
                        if (null == e && f.default.isAuthenticated())
                            try {
                                (await (0, c.rQ)(), (e = f.default.getId()));
                            } catch {}
                        return (0, u.Ay)((0, r.BH)(), { utmSource: t, fingerprint: e, attemptId: i });
                    }
                    return "discord://";
                })(t),
                i = (0, u.X7)(e);
            (null != i &&
                s.default.track(h.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, d.v)(i.fingerprint),
                    attempt_id: i.attemptId,
                    source: i.utmSource,
                }),
                o.A.launch(e, (t) => {
                    t || (0, l.bG)(p.A.fallbackRoute);
                }));
        },
    },
);
