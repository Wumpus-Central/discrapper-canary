n.d(t, { K7: () => u, LG: () => A, Sq: () => c, W6: () => g, lr: () => _ });
var i = n(488428),
    l = n(311907),
    s = n(776231),
    a = n(576705),
    r = n(486020),
    o = n(652215),
    d = n(818348);
function c(e) {
    let t,
        { guildId: n, bannerHash: l } = e;
    if (null == l) return;
    let a = l.startsWith("a_") ? l.slice(2) : l,
        d = (0, r.VI)(l),
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/voice-hangouts/${n}/${a}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + o.Rsh.VOICE_HANGOUT_BANNER(n, a);
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
function A(e) {
    return h.test(e);
}
function _(e) {
    return e.voiceHangout?.banner_hash != null;
}
let m = [d.xB.SET_VOICE_CHANNEL_STATUS, d.xB.CONNECT, d.xB.VIEW_CHANNEL];
function g(e) {
    return (0, l.bG)([a.A], () => m.every((t) => a.A.can(t, e)), [e]);
}
