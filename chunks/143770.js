"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(664895),
    a = n(961350),
    s = n(102609),
    o = n(49463),
    l = n(843186),
    u = n(688151);
function c(e, t) {
    return "guild" === e ? (0, s.Ut)(t) : (0, s.wh)(t);
}
function d(e, t, n) {
    return "guild" === e ? o.A.getGuildExperimentDescriptor(t, n.guildId) : o.A.getUserExperimentDescriptor(t);
}
function _(e, t, n, r) {
    return r?.aaMode ? e.defaultConfig : (n.get(t)?.config ?? e.defaultConfig);
}
function f(e) {
    (0, l.O)(e.id, e.label, e.commonTriggerPoint);
    let t = new Map();
    t.set(u.RE.NOT_ELIGIBLE, { description: "Not Eligible", config: e.defaultConfig }),
        t.set(u.RE.CONTROL, { description: "Control Bucket", config: e.defaultConfig }),
        e.treatments.forEach((e) => {
            t.set(e.id, { description: `Treatment ${e.id}: ${e.label}`, config: e.config });
        });
    let n = c(e.kind, {
        id: e.id,
        title: e.label,
        commonTriggerPoint: e.commonTriggerPoint,
        description: [...t.values()].map((e) => e.description),
        buckets: [...t.keys()],
    });
    function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        ((t.exposureType = n ? u.vf.AUTO_FALLBACK : u.vf.AUTO), (t.excluded = !1), null == r) ? p(e, t) : h(e, t, r);
    }
    function p(t) {
        let r =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { excluded: !1, exposureType: u.vf.MANUAL },
            i = d(e.kind, n.id, t);
        null != i && h(t, r, i);
    }
    function h(e, t, r) {
        if (null != r) {
            let i = u.vf.MANUAL,
                o = !1;
            (0, s.LQ)(n.id, r, {
                location: e?.location ?? "unknown",
                analyticsLocations: t?.analyticsLocations ?? [],
                fingerprint: t?.fingerprint ?? a.default.getFingerprint() ?? void 0,
                excluded: t?.excluded || o,
                exposureType: t?.exposureType ?? i,
            });
        }
    }
    function m(n, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = null != i.disable && i.disable,
            s = d(e.kind, e.id, n),
            l = null == s || a ? u.RE.NOT_ELIGIBLE : s.bucket,
            c = null == s ? -1 : s.revision;
        function f() {
            let i = d(e.kind, e.id, n),
                s = null == i || a ? u.RE.NOT_ELIGIBLE : i.bucket,
                o = null == i ? -1 : i.revision;
            (s !== l || c !== o) && (r(_(e, s, t, i), s, o), (l = s), (c = o));
        }
        return (
            r(_(e, l, t, s), l, c),
            o.A.addReactChangeListener(f),
            () => {
                o.A.removeReactChangeListener(f);
            }
        );
    }
    function g(t) {
        let n = d(e.kind, e.id, t);
        return !!n?.aaMode;
    }
    return {
        useExperiment: function (n) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                s = a.disable ?? !1,
                o = !1 !== a.autoTrackExposure,
                l = d(e.kind, e.id, n),
                c = null == a.trackExposureOptions ? void 0 : (0, i.A)(a.trackExposureOptions ?? {}),
                p = l?.triggerDebuggingEnabled ?? !1,
                [[h, g, E], A] = (0, r.useState)(() => {
                    let n = null == l || s ? u.RE.NOT_ELIGIBLE : l.bucket;
                    return [_(e, n, t, l), n, null == l ? -1 : l.revision];
                }),
                I = (0, i.A)(n);
            return (
                (0, r.useEffect)(() => {
                    !s && (o || p) && null == e.commonTriggerPoint && f(I, c, !1 === o);
                }, [s, o, I, c, g, E, p]),
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
        trackExposure: p,
        getCurrentConfig: function (n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                i = d(e.kind, e.id, n);
            if (null == i || r.disable) return _(e, u.RE.NOT_ELIGIBLE, t, i);
            if ((!1 !== r.autoTrackExposure || i.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === r.autoTrackExposure;
                f(n, r.trackExposureOptions, e, i);
            }
            return _(e, i.bucket, t, i);
        },
        definition: e,
        isAAMode: g,
    };
}
