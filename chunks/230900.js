n.d(t, {
    cS: () => o,
    nE: () => a,
    xC: () => u,
    xV: () => l
});
var i = n(592125),
    r = n(765305);
function a(e) {
    let t;
    let { entity_type: n, channel_id: a } = e;
    if (n in r.nz && null != a) {
        var s;
        t = null !== (s = i.Z.getChannel(e.channel_id)) && void 0 !== s ? s : void 0;
    }
    return t;
}
function s(e, t) {
    let n = null;
    return e === r.WX.EXTERNAL && null != t && 'location' in t && (n = t.location), n;
}
function o(e) {
    let { entity_type: t, entity_metadata: n } = e;
    return s(t, n);
}
function l(e) {
    let { entityType: t, entityMetadata: n } = e;
    return s(t, n);
}
function u(e) {
    return e === r.WX.VOICE || e === r.WX.STAGE_INSTANCE ? r.nz[e] : void 0;
}
