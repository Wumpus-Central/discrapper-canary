s.d(t, { s: () => c });
var r = s(311907),
    i = s(250105),
    n = s(217222),
    l = s(128319);
let a = { smarterSourceOrdering: !1 },
    o = (0, i.Ay)({
        name: "2025-08-go-live-source-ordering",
        kind: "user",
        defaultConfig: a,
        variations: { 1: { ...a, smarterSourceOrdering: !0 } },
    });
function c(e) {
    let { location: t } = e;
    return (0, r.bG)([n.A], () =>
        (function (e) {
            let { location: t } = e,
                { isInHoldout: s } = l.p.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
            return s ? o.definition.defaultConfig : o.getConfig({ location: t });
        })({ location: t }),
    );
}
