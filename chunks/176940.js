l.d(n, { Z: () => i }), l(47120);
var t = l(131951);
function i() {
    return Object.entries(t.Z.getVideoDevices()).map((e) => {
        let [n, l] = e;
        return {
            id: 'camera:' + l.id,
            name: l.name,
            url: ''
        };
    });
}
