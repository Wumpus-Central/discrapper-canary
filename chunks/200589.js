n.d(t, { t: () => r, z: () => l });
var i = n(732139),
    s = n(307731);
function l(e) {
    return (
        e !== s.EmojiIntention.GUILD_PROFILE &&
        e !== s.EmojiIntention.NO_CUSTOM_EMOJI &&
        (0, s.isExternalEmojiAllowedForIntention)(e)
    );
}
function r(e, t) {
    let n = [...e];
    if (0 === t.length) return n;
    let s = n.findIndex((e) => e.type === i.s.GUILD || e.type === i.s.UNICODE),
        l = s < 0 ? n.length : s;
    return (n.splice(l, 0, ...t.map((e) => ({ type: i.s.PACK, pack: e }))), n);
}
