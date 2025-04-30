n.d(t, {
    cS: () => s,
    nE: () => o,
    xC: () => c,
    xV: () => l
});
var r = n(592125),
    i = n(765305);
function o(e) {
    let t,
        { entity_type: n, channel_id: o } = e;
    if (n in i.nz && null != o) {
        var a;
        t = null != (a = r.Z.getChannel(e.channel_id)) ? a : void 0;
    }
    return t;
}
function a(e, t) {
    let n = null;
    return e === i.WX.EXTERNAL && null != t && 'location' in t && (n = t.location), n;
}
function s(e) {
    let { entity_type: t, entity_metadata: n } = e;
    return a(t, n);
}
function l(e) {
    let { entityType: t, entityMetadata: n } = e;
    return a(t, n);
}
function c(e) {
    return e === i.WX.VOICE || e === i.WX.STAGE_INSTANCE ? i.nz[e] : void 0;
}
