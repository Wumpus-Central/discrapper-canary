t.d(n, { Z: () => r }), t(388685);
var l = t(131951);
function r() {
    return Object.entries(l.Z.getVideoDevices()).map((e) => {
        let [n, t] = e;
        return {
            id: "camera:" + t.id,
            name: t.name,
            url: "",
        };
    });
}
