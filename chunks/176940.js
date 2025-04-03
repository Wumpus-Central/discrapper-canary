n.d(t, { Z: () => l }), n(47120);
var r = n(131951);
function l() {
    return Object.entries(r.Z.getVideoDevices()).map((e) => {
        let [t, n] = e;
        return {
            id: 'camera:' + n.id,
            name: n.name,
            url: ''
        };
    });
}
