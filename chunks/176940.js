n.d(t, { Z: () => i }), n(388685);
var r = n(131951);
function i() {
    return Object.entries(r.Z.getVideoDevices()).map((e) => {
        let [t, n] = e;
        return {
            id: 'camera:' + n.id,
            name: n.name,
            url: ''
        };
    });
}
