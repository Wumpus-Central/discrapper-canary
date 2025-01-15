n.d(t, {
    o: function () {
        return s;
    }
});
var i = n(451467),
    l = n(557457),
    a = n(354459),
    r = n(37113);
function s(e, t) {
    var n, s;
    if (null == e || e.type !== a.fO.STREAM || null == e.maxResolution || null == e.maxFrameRate || !((null == e ? void 0 : null === (n = e.maxResolution) || void 0 === n ? void 0 : n.height) in r.LY) || !(e.maxFrameRate in r.ws)) return !1;
    let o = (0, i.Z)(r.tI.PRESET_VIDEO, (0, r.aW)(null == e ? void 0 : null === (s = e.maxResolution) || void 0 === s ? void 0 : s.height), (0, r.L9)(e.maxFrameRate), t);
    return (
        !(
            null == e ||
            (0, l.tR)({
                maxResolution: e.maxResolution,
                maxFrameRate: e.maxFrameRate
            })
        ) || o
    );
}
