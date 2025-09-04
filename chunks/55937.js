n.d(t, { x: () => s });
var r = n(468771),
    i = n(314897),
    a = n(309056);
let o = null;
function s(e, t) {
    a.k.getConfig({ location: "fireSprigEvent" }).fireSprigEvents &&
        (o || (o = r.jA.configure({ environmentId: window.GLOBAL_ENV.SPRIG_API_KEY })),
        o.identifyAndTrack({
            eventName: e,
            userId: i.default.getId(),
            properties: t,
        }));
}
