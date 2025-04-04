n.d(t, {
    AZ: () => u,
    RL: () => p,
    cN: () => f,
    gr: () => d,
    pB: () => _,
    vu: () => h
}),
    n(47120);
var r = n(423875),
    i = n(394821),
    o = n(26033),
    a = n(561308),
    s = n(981631),
    l = n(616922),
    c = n(728151);
function u(e) {
    if ((0, o.dU)(e)) {
        var t, n;
        return (null == (n = e.extra.entries[0]) || null == (t = n.media) ? void 0 : t.provider) === r.p.SPOTIFY;
    }
    return !!(0, o.KF)(e) && e.extra.media.provider === r.p.SPOTIFY;
}
function d(e) {
    return !!(0, o.y0)(e) && e.extra.application_id === c.sp;
}
function f(e, t) {
    let n = e.extra;
    return null != n && (('application_id' in t && t.application_id === n.application_id) || ('game_name' in n ? t.name === n.game_name : 'activity_name' in n && t.name === n.activity_name));
}
function _(e, t) {
    if (u(e)) {
        var n;
        return (0, l.Ps)(null == (n = t.party) ? void 0 : n.id);
    }
    return !1;
}
function p(e, t) {
    return !!((0, i.Z)(t) && d(e)) && e.extra.media_title === t.details;
}
function h(e, t) {
    let n = e.filter(a.kr);
    return t.type === s.IIU.PLAYING ? n.filter(o.dX).find((e) => f(e, t)) : t.type === s.IIU.LISTENING ? n.filter(o.dU).find((e) => _(e, t)) : t.type === s.IIU.WATCHING ? e.filter(o.y0).find((e) => p(e, t)) : void 0;
}
