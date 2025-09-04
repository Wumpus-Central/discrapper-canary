n.d(t, { x: () => o });
var r = n(468771),
    i = n(314897);
let a = null;
function o(e, t) {
    a || (a = r.jA.configure({ environmentId: window.GLOBAL_ENV.SPRIG_API_KEY })),
        a.identifyAndTrack({
            eventName: e,
            userId: i.default.getId(),
            properties: t,
        });
}
