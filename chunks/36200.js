"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(664895),
    a = n(280450),
    s = n(102609),
    l = n(736056),
    o = n(688151);
function d(e, t, n) {
    return "guild" === e ? l.A.getGuildExperimentDescriptor(t, n.guildId) : l.A.getUserExperimentDescriptor(t);
}
function c(e, t, n, i) {
    return i?.aaMode ? e.defaultConfig : (n.get(t)?.config ?? e.defaultConfig);
}
function u(e) {
    var t, n;
    e.id, e.label, e.commonTriggerPoint;
    let u = new Map();
    u.set(o.RE.NOT_ELIGIBLE, { description: "Not Eligible", config: e.defaultConfig }),
        u.set(o.RE.CONTROL, { description: "Control Bucket", config: e.defaultConfig }),
        e.treatments.forEach((e) => {
            u.set(e.id, { description: `Treatment ${e.id}: ${e.label}`, config: e.config });
        });
    let _ =
        ((t = e.kind),
        (n = {
            id: e.id,
            title: e.label,
            commonTriggerPoint: e.commonTriggerPoint,
            description: [...u.values()].map((e) => e.description),
            buckets: [...u.keys()],
        }),
        "guild" === t ? (0, s.Ut)(n) : (0, s.wh)(n));
    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        ((t.exposureType = n ? o.vf.AUTO_FALLBACK : o.vf.AUTO), (t.excluded = !1), null == i) ? A(e, t) : h(e, t, i);
    }
    function A(t) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { excluded: !1, exposureType: o.vf.MANUAL },
            i = d(e.kind, _.id, t);
        null != i && h(t, n, i);
    }
    function h(e, t, n) {
        if (null != n) {
            let i = o.vf.MANUAL;
            (0, s.LQ)(_.id, n, {
                location: e?.location ?? "unknown",
                analyticsLocations: t?.analyticsLocations ?? [],
                fingerprint: t?.fingerprint ?? a.default.getFingerprint() ?? void 0,
                excluded: t?.excluded || !1,
                exposureType: t?.exposureType ?? i,
            });
        }
    }
    function I(t, n) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = null != i.disable && i.disable,
            a = d(e.kind, e.id, t),
            s = null == a || r ? o.RE.NOT_ELIGIBLE : a.bucket,
            _ = null == a ? -1 : a.revision;
        function E() {
            let i = d(e.kind, e.id, t),
                a = null == i || r ? o.RE.NOT_ELIGIBLE : i.bucket,
                l = null == i ? -1 : i.revision;
            (a !== s || _ !== l) && (n(c(e, a, u, i), a, l), (s = a), (_ = l));
        }
        return (
            n(c(e, s, u, a), s, _),
            l.A.addReactChangeListener(E),
            () => {
                l.A.removeReactChangeListener(E);
            }
        );
    }
    return {
        useExperiment: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                a = n.disable ?? !1,
                s = !1 !== n.autoTrackExposure,
                l = d(e.kind, e.id, t),
                _ = null == n.trackExposureOptions ? void 0 : (0, r.A)(n.trackExposureOptions ?? {}),
                A = l?.triggerDebuggingEnabled ?? !1,
                [[h, f, p], T] = (0, i.useState)(() => {
                    let t = null == l || a ? o.RE.NOT_ELIGIBLE : l.bucket;
                    return [c(e, t, u, l), t, null == l ? -1 : l.revision];
                }),
                m = (0, r.A)(t);
            return (
                (0, i.useEffect)(() => {
                    !a && (s || A) && null == e.commonTriggerPoint && E(m, _, !1 === s);
                }, [a, s, m, _, f, p, A]),
                (0, i.useEffect)(
                    () =>
                        I(
                            m,
                            (e, t, n) => {
                                T((i) => (i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n]));
                            },
                            { disable: a },
                        ),
                    [a, m],
                ),
                h
            );
        },
        subscribe: I,
        trackExposure: A,
        getCurrentConfig: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                i = d(e.kind, e.id, t);
            if (null == i || n.disable) return c(e, o.RE.NOT_ELIGIBLE, u, i);
            if ((!1 !== n.autoTrackExposure || i.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === n.autoTrackExposure;
                E(t, n.trackExposureOptions, e, i);
            }
            return c(e, i.bucket, u, i);
        },
        definition: e,
        isAAMode: function (t) {
            let n = d(e.kind, e.id, t);
            return !!n?.aaMode;
        },
    };
}
