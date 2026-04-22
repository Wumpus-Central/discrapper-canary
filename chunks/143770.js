"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(664895),
    s = n(961350),
    a = n(102609),
    o = n(49463),
    l = n(843186),
    u = n(688151);
function d(e, t, n) {
    return "guild" === e ? o.A.getGuildExperimentDescriptor(t, n.guildId) : o.A.getUserExperimentDescriptor(t);
}
function c(e, t, n, r) {
    return r?.aaMode ? e.defaultConfig : (n.get(t)?.config ?? e.defaultConfig);
}
function _(e) {
    var t, n;
    (0, l.O)(e.id, e.label, e.commonTriggerPoint);
    let _ = new Map();
    _.set(u.RE.NOT_ELIGIBLE, { description: "Not Eligible", config: e.defaultConfig }),
        _.set(u.RE.CONTROL, { description: "Control Bucket", config: e.defaultConfig }),
        e.treatments.forEach((e) => {
            _.set(e.id, { description: `Treatment ${e.id}: ${e.label}`, config: e.config });
        });
    let f =
        ((t = e.kind),
        (n = {
            id: e.id,
            title: e.label,
            commonTriggerPoint: e.commonTriggerPoint,
            description: [..._.values()].map((e) => e.description),
            buckets: [..._.keys()],
        }),
        "guild" === t ? (0, a.Ut)(n) : (0, a.wh)(n));
    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        ((t.exposureType = n ? u.vf.AUTO_FALLBACK : u.vf.AUTO), (t.excluded = !1), null == r) ? h(e, t) : p(e, t, r);
    }
    function h(t) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { excluded: !1, exposureType: u.vf.MANUAL },
            r = d(e.kind, f.id, t);
        null != r && p(t, n, r);
    }
    function p(e, t, n) {
        if (null != n) {
            let r = u.vf.MANUAL;
            (0, a.LQ)(f.id, n, {
                location: e?.location ?? "unknown",
                analyticsLocations: t?.analyticsLocations ?? [],
                fingerprint: t?.fingerprint ?? s.default.getFingerprint() ?? void 0,
                excluded: t?.excluded || !1,
                exposureType: t?.exposureType ?? r,
            });
        }
    }
    function m(t, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = null != r.disable && r.disable,
            s = d(e.kind, e.id, t),
            a = null == s || i ? u.RE.NOT_ELIGIBLE : s.bucket,
            l = null == s ? -1 : s.revision;
        function f() {
            let r = d(e.kind, e.id, t),
                s = null == r || i ? u.RE.NOT_ELIGIBLE : r.bucket,
                o = null == r ? -1 : r.revision;
            (s !== a || l !== o) && (n(c(e, s, _, r), s, o), (a = s), (l = o));
        }
        return (
            n(c(e, a, _, s), a, l),
            o.A.addReactChangeListener(f),
            () => {
                o.A.removeReactChangeListener(f);
            }
        );
    }
    return {
        useExperiment: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                s = n.disable ?? !1,
                a = !1 !== n.autoTrackExposure,
                o = d(e.kind, e.id, t),
                l = null == n.trackExposureOptions ? void 0 : (0, i.A)(n.trackExposureOptions ?? {}),
                f = o?.triggerDebuggingEnabled ?? !1,
                [[h, p, g], A] = (0, r.useState)(() => {
                    let t = null == o || s ? u.RE.NOT_ELIGIBLE : o.bucket;
                    return [c(e, t, _, o), t, null == o ? -1 : o.revision];
                }),
                I = (0, i.A)(t);
            return (
                (0, r.useEffect)(() => {
                    !s && (a || f) && null == e.commonTriggerPoint && E(I, l, !1 === a);
                }, [s, a, I, l, p, g, f]),
                (0, r.useEffect)(
                    () =>
                        m(
                            I,
                            (e, t, n) => {
                                A((r) => (r[0] === e && r[1] === t && r[2] === n ? r : [e, t, n]));
                            },
                            { disable: s },
                        ),
                    [s, I],
                ),
                h
            );
        },
        subscribe: m,
        trackExposure: h,
        getCurrentConfig: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                r = d(e.kind, e.id, t);
            if (null == r || n.disable) return c(e, u.RE.NOT_ELIGIBLE, _, r);
            if ((!1 !== n.autoTrackExposure || r.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === n.autoTrackExposure;
                E(t, n.trackExposureOptions, e, r);
            }
            return c(e, r.bucket, _, r);
        },
        definition: e,
        isAAMode: function (t) {
            let n = d(e.kind, e.id, t);
            return !!n?.aaMode;
        },
    };
}
