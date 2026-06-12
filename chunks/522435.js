n.d(t, { K7: () => u, LG: () => A, Sq: () => c, W6: () => p, je: () => f, lr: () => g });
var l = n(488428),
    i = n(17928),
    s = n(776231),
    r = n(576705),
    a = n(486020),
    o = n(652215),
    d = n(818348);
function c(e) {
    let t,
        { guildId: n, bannerHash: i } = e;
    if (null == i) return;
    let r = i.startsWith("a_") ? i.slice(2) : i,
        d = (0, a.VI)(i),
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/voice-hangouts/${n}/${r}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + o.Rsh.VOICE_HANGOUT_BANNER(n, r);
    let u = (0, s.kr)(360 * (0, s.mZ)());
    return {
        imageUrl: `${t}?${l.stringify({ size: u, format: "webp" })}`,
        animatedUrl: d ? `${t}?${l.stringify({ size: u, format: "webp", animated: !0 })}` : void 0,
    };
}
function u(e) {
    return e.startsWith("//") ? `https:${e}` : e;
}
let h = /\.(webm|mp4)(\?|$)/i;
function A(e) {
    return h.test(e);
}
function g(e) {
    return e.voiceHangout?.banner_hash != null;
}
let m = [d.xB.SET_VOICE_CHANNEL_STATUS, d.xB.CONNECT, d.xB.VIEW_CHANNEL];
function p(e) {
    return (0, i.bG)([r.A], () => m.every((t) => r.A.can(t, e)), [e]);
}
function f(e) {
    return (0, i.bG)([r.A], () => r.A.can(d.xB.MANAGE_CHANNELS, e), [e]);
}
