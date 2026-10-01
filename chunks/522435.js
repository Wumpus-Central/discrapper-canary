n.d(t, { K7: () => u, LG: () => m, Sq: () => c, W6: () => f, je: () => p, lr: () => g });
var i = n(488428),
    l = n(17928),
    s = n(776231),
    r = n(576705),
    a = n(486020),
    o = n(652215),
    d = n(818348);
function c(e) {
    let t,
        { guildId: n, bannerHash: l } = e;
    if (null == l) return;
    let r = l.startsWith("a_") ? l.slice(2) : l,
        d = (0, a.VI)(l),
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/voice-hangouts/${n}/${r}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + o.Rsh.VOICE_HANGOUT_BANNER(n, r);
    let u = (0, s.kr)(360 * (0, s.mZ)());
    return {
        imageUrl: `${t}?${i.stringify({ size: u, format: "webp" })}`,
        animatedUrl: d ? `${t}?${i.stringify({ size: u, format: "webp", animated: !0 })}` : void 0,
    };
}
function u(e) {
    return e.startsWith("//") ? `https:${e}` : e;
}
let h = /\.(webm|mp4)(\?|$)/i;
function m(e) {
    return h.test(e);
}
function g(e) {
    return e.voiceHangout?.banner_hash != null;
}
let A = [d.xB.SET_VOICE_CHANNEL_STATUS, d.xB.CONNECT, d.xB.VIEW_CHANNEL];
function f(e) {
    return (0, l.bG)([r.A], () => A.every((t) => r.A.can(t, e)), [e]);
}
function p(e) {
    return (0, l.bG)([r.A], () => r.A.can(d.xB.MANAGE_CHANNELS, e), [e]);
}
