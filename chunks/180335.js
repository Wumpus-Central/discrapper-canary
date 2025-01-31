n.d(t, {
    AZ: () => c,
    RL: () => p,
    cN: () => f,
    gr: () => d,
    pB: () => _,
    vu: () => h
}),
    n(47120);
var i = n(423875),
    r = n(394821),
    a = n(26033),
    s = n(561308),
    o = n(981631),
    l = n(616922),
    u = n(728151);
function c(e) {
    if ((0, a.dU)(e)) {
        var t, n;
        return (null === (n = e.extra.entries[0]) || void 0 === n ? void 0 : null === (t = n.media) || void 0 === t ? void 0 : t.provider) === i.p.SPOTIFY;
    }
    return !!(0, a.KF)(e) && e.extra.media.provider === i.p.SPOTIFY;
}
function d(e) {
    return !!(0, a.y0)(e) && e.extra.application_id === u.sp;
}
function f(e, t) {
    let n = e.extra;
    return null != n && (('application_id' in t && t.application_id === n.application_id) || ('game_name' in n ? t.name === n.game_name : 'activity_name' in n && t.name === n.activity_name));
}
function _(e, t) {
    if (c(e)) {
        var n;
        return (0, l.Ps)(null === (n = t.party) || void 0 === n ? void 0 : n.id);
    }
    return !1;
}
function p(e, t) {
    return !!((0, r.Z)(t) && d(e)) && e.extra.media_title === t.details;
}
function h(e, t) {
    let n = e.filter(s.kr);
    return t.type === o.IIU.PLAYING ? n.filter(a.dX).find((e) => f(e, t)) : t.type === o.IIU.LISTENING ? n.filter(a.dU).find((e) => _(e, t)) : t.type === o.IIU.WATCHING ? e.filter(a.y0).find((e) => p(e, t)) : void 0;
}
