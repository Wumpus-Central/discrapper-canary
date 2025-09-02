n.d(t, { x: () => o });
var r = n(468771),
    i = n(314897);
let a = null;
function o(e, t) {
    a || (a = r.jA.configure({ environmentId: "{{cf_shim}}SPRIG_API_KEY{{/cf_shim}}" })),
        a.identifyAndTrack({
            eventName: e,
            userId: i.default.getId(),
            properties: t,
        });
}
