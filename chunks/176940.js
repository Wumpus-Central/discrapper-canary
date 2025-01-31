t.d(n, { Z: () => i }), t(47120);
var l = t(131951);
function i() {
    return Object.entries(l.Z.getVideoDevices()).map((e) => {
        let [n, t] = e;
        return {
            id: 'camera:' + t.id,
            name: t.name,
            url: ''
        };
    });
}
