"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(664895),
    s = n(495544),
    a = n(102609),
    o = n(736056),
    l = n(688151);
function _(e, t, n) {
    return "guild" === e ? o.A.getGuildExperimentDescriptor(t, n.guildId) : o.A.getUserExperimentDescriptor(t);
}
function d(e, t, n, i) {
    return i?.aaMode ? e.defaultConfig : (n.get(t)?.config ?? e.defaultConfig);
}
function u(e) {
    var t, n;
    e.id, e.label, e.commonTriggerPoint;
    let u = new Map();
    u.set(l.RE.NOT_ELIGIBLE, { description: "Not Eligible", config: e.defaultConfig }),
        u.set(l.RE.CONTROL, { description: "Control Bucket", config: e.defaultConfig }),
        e.treatments.forEach((e) => {
            u.set(e.id, { description: `Treatment ${e.id}: ${e.label}`, config: e.config });
        });
    let c =
        ((t = e.kind),
        (n = {
            id: e.id,
            title: e.label,
            commonTriggerPoint: e.commonTriggerPoint,
            description: [...u.values()].map((e) => e.description),
            buckets: [...u.keys()],
        }),
        "guild" === t ? (0, a.Ut)(n) : (0, a.wh)(n));
    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        ((t.exposureType = n ? l.vf.AUTO_FALLBACK : l.vf.AUTO), (t.excluded = !1), null == i) ? h(e, t) : m(e, t, i);
    }
    function h(t) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { excluded: !1, exposureType: l.vf.MANUAL },
            i = _(e.kind, c.id, t);
        null != i && m(t, n, i);
    }
    function m(e, t, n) {
        if (null != n) {
            let i = l.vf.MANUAL;
            (0, a.LQ)(c.id, n, {
                location: e?.location ?? "unknown",
                analyticsLocations: t?.analyticsLocations ?? [],
                fingerprint: t?.fingerprint ?? s.default.getFingerprint() ?? void 0,
                excluded: t?.excluded || !1,
                exposureType: t?.exposureType ?? i,
            });
        }
    }
    function f(t, n) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = null != i.disable && i.disable,
            s = _(e.kind, e.id, t),
            a = null == s || r ? l.RE.NOT_ELIGIBLE : s.bucket,
            c = null == s ? -1 : s.revision;
        function E() {
            let i = _(e.kind, e.id, t),
                s = null == i || r ? l.RE.NOT_ELIGIBLE : i.bucket,
                o = null == i ? -1 : i.revision;
            (s !== a || c !== o) && (n(d(e, s, u, i), s, o), (a = s), (c = o));
        }
        return (
            n(d(e, a, u, s), a, c),
            o.A.addReactChangeListener(E),
            () => {
                o.A.removeReactChangeListener(E);
            }
        );
    }
    return {
        useExperiment: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                s = n.disable ?? !1,
                a = !1 !== n.autoTrackExposure,
                o = _(e.kind, e.id, t),
                c = null == n.trackExposureOptions ? void 0 : (0, r.A)(n.trackExposureOptions ?? {}),
                h = o?.triggerDebuggingEnabled ?? !1,
                [[m, g, A], I] = (0, i.useState)(() => {
                    let t = null == o || s ? l.RE.NOT_ELIGIBLE : o.bucket;
                    return [d(e, t, u, o), t, null == o ? -1 : o.revision];
                }),
                p = (0, r.A)(t);
            return (
                (0, i.useEffect)(() => {
                    !s && (a || h) && null == e.commonTriggerPoint && E(p, c, !1 === a);
                }, [s, a, p, c, g, A, h]),
                (0, i.useEffect)(
                    () =>
                        f(
                            p,
                            (e, t, n) => {
                                I((i) => (i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n]));
                            },
                            { disable: s },
                        ),
                    [s, p],
                ),
                m
            );
        },
        subscribe: f,
        trackExposure: h,
        getCurrentConfig: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                i = _(e.kind, e.id, t);
            if (null == i || n.disable) return d(e, l.RE.NOT_ELIGIBLE, u, i);
            if ((!1 !== n.autoTrackExposure || i.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === n.autoTrackExposure;
                E(t, n.trackExposureOptions, e, i);
            }
            return d(e, i.bucket, u, i);
        },
        definition: e,
        isAAMode: function (t) {
            let n = _(e.kind, e.id, t);
            return !!n?.aaMode;
        },
    };
}
