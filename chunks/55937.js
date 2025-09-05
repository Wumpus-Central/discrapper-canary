n.d(t, { x: () => c });
var r = n(468771),
    i = n(108131),
    a = n.n(i),
    o = n(314897),
    s = n(309056);
let l = null;
function c(e, t) {
    s.k.getConfig({ location: "fireSprigEvent" }).fireSprigEvents &&
        (l || (l = r.jA.configure({ environmentId: window.GLOBAL_ENV.SPRIG_API_KEY })),
        l.identifyAndTrack({
            eventName: e,
            userId: a().v3(o.default.getId()),
            properties: t,
        }));
}
