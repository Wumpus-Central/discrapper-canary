n.d(t, { Z: () => o }), n(388685);
var r = n(580991),
    i = n(280098),
    a = n(37113);
function o(e, t, n, o, s, l) {
    if (e === a.tI.PRESET_AUTO) return (0, r.IK)({ location: "canStreamWithSettings" }).allowAutoQuality;
    for (let r of a.ND)
        if ((null == r.preset || e === r.preset) && t === r.resolution && n === r.fps && (0, i.Z)(r, o, s, l))
            return !0;
    return !1;
}
