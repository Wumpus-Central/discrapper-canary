n.d(t, { o: () => o });
var r = n(451467),
    l = n(557457),
    i = n(354459),
    a = n(37113);
function o(e, t) {
    var n, o;
    if (null == e || e.type !== i.fO.STREAM || null == e.maxResolution || null == e.maxFrameRate || !((null == e || null == (n = e.maxResolution) ? void 0 : n.height) in a.LY) || !(e.maxFrameRate in a.ws)) return !1;
    let s = (0, r.Z)(a.tI.PRESET_VIDEO, (0, a.aW)(null == e || null == (o = e.maxResolution) ? void 0 : o.height), (0, a.L9)(e.maxFrameRate), t);
    return (
        !(
            null == e ||
            (0, l.tR)({
                maxResolution: e.maxResolution,
                maxFrameRate: e.maxFrameRate
            })
        ) || s
    );
}
