r.d(n, {
    cS: function () {
        return l;
    },
    nE: function () {
        return o;
    },
    xC: function () {
        return c;
    },
    xV: function () {
        return u;
    }
});
var i = r(592125),
    a = r(765305);
function o(e) {
    let n;
    let { entity_type: r, channel_id: o } = e;
    if (r in a.nz && null != o) {
        var s;
        n = null !== (s = i.Z.getChannel(e.channel_id)) && void 0 !== s ? s : void 0;
    }
    return n;
}
function s(e, n) {
    let r = null;
    return e === a.WX.EXTERNAL && null != n && 'location' in n && (r = n.location), r;
}
function l(e) {
    let { entity_type: n, entity_metadata: r } = e;
    return s(n, r);
}
function u(e) {
    let { entityType: n, entityMetadata: r } = e;
    return s(n, r);
}
function c(e) {
    return e === a.WX.VOICE || e === a.WX.STAGE_INSTANCE ? a.nz[e] : void 0;
}
