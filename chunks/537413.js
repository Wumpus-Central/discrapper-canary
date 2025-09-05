n.d(t, { Z: () => a }), n(388685);
var r = n(451467),
    i = n(37113);
function a(e, t, n) {
    let a = i.no[e];
    if (null == a) return null;
    for (let i of a) if ((0, r.Z)(e, i.resolution, i.fps, t, n)) return [i.resolution, i.fps];
    return null;
}
