n.d(t, { OC: () => u, zN: () => E, L0: () => c, cx: () => _, TW: () => A, m0: () => d });
var i = n(855986),
    r = n(945810),
    a = n(71393);
let s = (0, r.mj)({
    name: "2026-07-vibegrations-user",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n(652215);
let l = (0, r.mj)({
    name: "2026-07-vibegrations-guild",
    kind: "guild",
    defaultConfig: { enabled: !1, requiresUserExperiment: !1 },
    variations: {
        0: { enabled: !1, requiresUserExperiment: !1 },
        1: { enabled: !0, requiresUserExperiment: !1 },
        2: { enabled: !0, requiresUserExperiment: !0 },
    },
});
function o(e, t) {
    let { enabled: n, requiresUserExperiment: i } = e,
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        n &&
        (!i ||
            (function (e) {
                let { location: t } = e,
                    { autoTrackExposure: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return s.getConfig({ location: t }, { autoTrackExposure: n }).enabled;
            })({ location: t }, { autoTrackExposure: r }))
    );
}
function d(e) {
    let { guildId: t, location: n } = e,
        { enabled: a, requiresUserExperiment: s } = l.useConfig({ guildId: t ?? "", location: n });
    return (0, i.bG)([r.Bt], () => o({ enabled: a, requiresUserExperiment: s }, n), [a, s, n]);
}
function c(e) {
    let { guildId: t, location: n } = e;
    return null != t && o(l.getConfig({ guildId: t, location: n }), n);
}
function u(e, t) {
    for (let n of e) if (c({ guildId: n.id, location: t })) return !0;
    return !1;
}
function _(e, t) {
    return o(l.getConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }), t, !1);
}
function E(e) {
    for (let t of Object.values(a.A.getGuilds())) if (_(t.id, e)) return !0;
    return !1;
}
function A(e) {
    let { autoTrackExposure: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.bG)([a.A, r.Bt], () => (t ? u(Object.values(a.A.getGuilds()), e) : E(e)), [e, t]);
}
