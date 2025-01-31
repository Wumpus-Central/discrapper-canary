n.d(t, { X: () => a });
var i = n(981631),
    r = n(388032);
function a(e) {
    let { enabled: t, join: n, channel: a, cameraUnavailable: s, hasPermission: o, channelLimit: l = -1, channelLimitReached: u = !1 } = e,
        c = t ? r.intl.string(r.t['4xAQ5+']) : r.intl.string(r.t.kgIe9f);
    return n && (c = (null == a ? void 0 : a.isManaged()) || !(null == a ? void 0 : a.isPrivate()) ? r.intl.string(r.t.clqrYm) : r.intl.string(r.t.W68MhI)), s && (c = r.intl.string(r.t['8jSzSU'])), o || (c = r.intl.string(r.t.uQn9Bw)), u && !t && (c = (null == a ? void 0 : a.isGuildStageVoice()) ? (l >= i.RcX ? r.intl.string(r.t['j6h0//']) : r.intl.string(r.t['jlZ+0t'])) : r.intl.formatToPlainString(r.t.x9mtl5, { limit: l })), c;
}
