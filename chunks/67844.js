n.d(t, { X: () => o });
var r = n(981631),
    i = n(388032);
function o(e) {
    let { enabled: t, join: n, channel: o, cameraUnavailable: a, hasPermission: s, channelLimit: l = -1, channelLimitReached: c = !1 } = e,
        u = t ? i.intl.string(i.t['4xAQ5+']) : i.intl.string(i.t.kgIe9f);
    return n && (u = (null == o ? void 0 : o.isManaged()) || !(null == o ? void 0 : o.isPrivate()) ? i.intl.string(i.t.clqrYm) : i.intl.string(i.t.W68MhI)), a && (u = i.intl.string(i.t['8jSzSU'])), s || (u = i.intl.string(i.t.uQn9Bw)), c && !t && (u = (null == o ? void 0 : o.isGuildStageVoice()) ? (l >= r.RcX ? i.intl.string(i.t['j6h0//']) : i.intl.string(i.t['jlZ+0t'])) : i.intl.formatToPlainString(i.t.x9mtl5, { limit: l })), u;
}
